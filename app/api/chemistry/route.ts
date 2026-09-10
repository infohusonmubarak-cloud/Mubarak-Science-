import { NextResponse, type NextRequest } from 'next/server';
import { getSupabaseServiceClient } from '@/lib/supabase/serviceClient';
import type { Json } from '@/types/supabase';

export const maxDuration = 30;

const PUG_BASE = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug';
const PUG_VIEW_BASE = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug_view';
const FETCH_TIMEOUT_MS = 8000;
const MAX_QUERY_LEN = 100;

interface ChemistryResult {
  cid: number;
  query: string;
  molecularFormula: string | null;
  molecularWeight: string | null;
  iupacName: string | null;
  canonicalSmiles: string | null;
  structureImageUrl: string;
  pubchemUrl: string;
  safetyStatements: string[];
}

async function fetchWithTimeout(url: string): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, { signal: controller.signal, headers: { Accept: 'application/json' } });
  } finally {
    clearTimeout(timeout);
  }
}

async function lookupCid(query: string): Promise<number | null> {
  // Try a name search first (covers the common case — most learners search
  // by name), then fall back to an exact molecular-formula search.
  const nameRes = await fetchWithTimeout(`${PUG_BASE}/compound/name/${encodeURIComponent(query)}/cids/JSON`).catch(
    () => null
  );
  if (nameRes?.ok) {
    const data = await nameRes.json().catch(() => null);
    const cid = data?.IdentifierList?.CID?.[0];
    if (typeof cid === 'number') return cid;
  }

  const formulaRes = await fetchWithTimeout(
    `${PUG_BASE}/compound/fastformula/${encodeURIComponent(query)}/cids/JSON`
  ).catch(() => null);
  if (formulaRes?.ok) {
    const data = await formulaRes.json().catch(() => null);
    const cid = data?.IdentifierList?.CID?.[0];
    if (typeof cid === 'number') return cid;
  }

  return null;
}

async function fetchProperties(cid: number) {
  const res = await fetchWithTimeout(
    `${PUG_BASE}/compound/cid/${cid}/property/MolecularFormula,MolecularWeight,IUPACName,CanonicalSMILES/JSON`
  );
  if (!res.ok) return null;
  const data = await res.json().catch(() => null);
  const props = data?.PropertyTable?.Properties?.[0];
  if (!props) return null;
  return {
    molecularFormula: typeof props.MolecularFormula === 'string' ? props.MolecularFormula : null,
    molecularWeight: props.MolecularWeight != null ? String(props.MolecularWeight) : null,
    iupacName: typeof props.IUPACName === 'string' ? props.IUPACName : null,
    canonicalSmiles: typeof props.CanonicalSMILES === 'string' ? props.CanonicalSMILES : null,
  };
}

// PUG-View sections nest arbitrarily deep (Section within Section) with a
// uniform shape, so this walks whatever tree comes back rather than
// assuming a fixed depth/path to "GHS Classification" — the same
// walk-the-real-structure approach used for SymPy's integral step tree.
interface PugViewSection {
  TOCHeading?: string;
  Section?: PugViewSection[];
  Information?: { Value?: { StringWithMarkup?: { String?: string }[] } }[];
}

function findSection(sections: PugViewSection[] | undefined, heading: string): PugViewSection | null {
  if (!sections) return null;
  for (const section of sections) {
    if (section.TOCHeading === heading) return section;
    const found = findSection(section.Section, heading);
    if (found) return found;
  }
  return null;
}

function collectStrings(section: PugViewSection | null, limit = 15): string[] {
  if (!section) return [];
  const out: string[] = [];
  const seen = new Set<string>();
  function walk(s: PugViewSection) {
    for (const info of s.Information ?? []) {
      for (const swm of info.Value?.StringWithMarkup ?? []) {
        if (swm.String && !seen.has(swm.String)) {
          seen.add(swm.String);
          out.push(swm.String);
        }
      }
    }
    for (const child of s.Section ?? []) walk(child);
  }
  walk(section);
  return out.slice(0, limit);
}

async function fetchSafetyStatements(cid: number): Promise<string[]> {
  // Best-effort: not every compound has GHS data, and PUG-View can be slow
  // or occasionally malformed for obscure CIDs — never let this block the
  // core lookup.
  try {
    const res = await fetchWithTimeout(
      `${PUG_VIEW_BASE}/data/compound/${cid}/JSON?heading=GHS+Classification`
    );
    if (!res.ok) return [];
    const data = await res.json().catch(() => null);
    const section = findSection(data?.Record?.Section, 'GHS Classification');
    return collectStrings(section);
  } catch {
    return [];
  }
}

export async function GET(request: NextRequest) {
  const rawQuery = request.nextUrl.searchParams.get('q') ?? '';
  const query = rawQuery.trim();

  if (!query) {
    return NextResponse.json({ ok: false, error: 'Enter a compound name or formula.' }, { status: 400 });
  }
  if (query.length > MAX_QUERY_LEN) {
    return NextResponse.json({ ok: false, error: 'That search is too long.' }, { status: 400 });
  }

  const cacheKey = query.toLowerCase();
  const serviceClient = getSupabaseServiceClient();

  if (serviceClient) {
    const { data: cached } = await serviceClient
      .from('chemistry_cache')
      .select('data')
      .eq('query_key', cacheKey)
      .maybeSingle();
    if (cached) {
      return NextResponse.json({ ok: true, cached: true, result: cached.data as unknown as ChemistryResult });
    }
  }

  let cid: number | null;
  try {
    cid = await lookupCid(query);
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Could not reach PubChem right now — try again in a moment.' },
      { status: 502 }
    );
  }

  if (cid === null) {
    return NextResponse.json(
      { ok: false, error: `No compound found matching "${query}". Check the spelling, or try its chemical formula.` },
      { status: 404 }
    );
  }

  const properties = await fetchProperties(cid).catch(() => null);
  if (!properties) {
    return NextResponse.json(
      { ok: false, error: 'Found the compound, but could not load its properties. Try again.' },
      { status: 502 }
    );
  }

  const safetyStatements = await fetchSafetyStatements(cid);

  const result: ChemistryResult = {
    cid,
    query,
    ...properties,
    structureImageUrl: `https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=${cid}&t=l`,
    pubchemUrl: `https://pubchem.ncbi.nlm.nih.gov/compound/${cid}`,
    safetyStatements,
  };

  if (serviceClient) {
    await serviceClient
      .from('chemistry_cache')
      .upsert({ query_key: cacheKey, cid, data: result as unknown as Json, fetched_at: new Date().toISOString() })
      .then(
        () => {},
        () => {} // caching is a nicety — a failed write should never fail the request
      );
  }

  return NextResponse.json({ ok: true, cached: false, result });
}
