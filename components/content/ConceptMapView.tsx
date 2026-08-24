import Link from 'next/link';
import type { ConceptMapNode } from '@/types/content';

interface ConceptMapViewProps {
  root: ConceptMapNode;
}

function NodeLabel({ node }: { node: ConceptMapNode }) {
  const className = 'text-sm font-medium text-foreground hover:text-brand';
  if (node.href) {
    return (
      <Link href={node.href} className={`${className} hover:underline`}>
        {node.label}
      </Link>
    );
  }
  return <span className={className}>{node.label}</span>;
}

function Branch({ node }: { node: ConceptMapNode }) {
  const hasChildren = node.children && node.children.length > 0;
  return (
    <li className="relative pl-5">
      <span aria-hidden="true" className="absolute left-0 top-3 h-px w-4 bg-border" />
      <div className="rounded-lg border border-border bg-surface px-3 py-2 shadow-sm">
        <NodeLabel node={node} />
      </div>
      {hasChildren ? (
        <ul className="relative mt-2 space-y-2 border-l border-border pl-0">
          {node.children!.map((child) => (
            <Branch key={child.label} node={child} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

/**
 * Renders a chapter's concept map as a simple, indented tree — the root
 * (chapter) at top, its topics as first-level branches, and each topic's
 * key concepts nested beneath. Deliberately a plain nested-box tree rather
 * than a freeform node-link diagram: no layout engine needed, and it stays
 * legible and responsive down to a phone screen.
 */
export function ConceptMapView({ root }: ConceptMapViewProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-surface-muted p-5">
      <div className="inline-block min-w-full rounded-lg border border-brand/40 bg-brand-soft px-4 py-2.5">
        <span className="text-base font-semibold text-brand-strong">{root.label}</span>
      </div>
      {root.children && root.children.length > 0 ? (
        <ul className="relative mt-3 space-y-2 border-l border-border pl-0">
          {root.children.map((child) => (
            <Branch key={child.label} node={child} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
