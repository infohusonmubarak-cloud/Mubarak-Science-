import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { findFormula, getAllFormulas, getConceptDetail } from '@/lib/content/getters';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { FormulaCard } from '@/components/content/FormulaCard';
import { Card } from '@/components/ui/Card';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllFormulas().map(({ formula }) => ({ formulaSlug: formula.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ formulaSlug: string }>;
}): Promise<Metadata> {
  const { formulaSlug } = await params;
  const entry = findFormula(formulaSlug);
  return { title: entry?.formula.name ?? 'Formula' };
}

export default async function FormulaPage({ params }: { params: Promise<{ formulaSlug: string }> }) {
  const { formulaSlug } = await params;
  const entry = findFormula(formulaSlug);
  if (!entry) notFound();

  const { formula, subjectSlug, levelSlug, chapterSlug } = entry;
  const relatedConcepts = formula.relatedConceptSlugs
    .map((conceptSlug) => getConceptDetail(subjectSlug, levelSlug, chapterSlug, conceptSlug))
    .filter((concept): concept is NonNullable<typeof concept> => Boolean(concept));

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Formula Library', href: '/formulas' }, { label: formula.name }]} />
      <FormulaCard formula={formula} chapterSlug={chapterSlug} />

      {relatedConcepts.length > 0 ? (
        <div>
          <h2 className="mb-2 text-sm font-semibold text-foreground">Used in</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {relatedConcepts.map((concept) => (
              <Card
                key={concept.slug}
                href={`/subjects/${subjectSlug}/${levelSlug}/${chapterSlug}/${concept.slug}`}
                className="p-3.5 text-sm font-medium"
              >
                {concept.title}
              </Card>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
