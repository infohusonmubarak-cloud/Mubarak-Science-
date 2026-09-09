'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// KaTeX renders a small fragment of `$...$` inline-math within otherwise plain
// text (each step string mixes prose and LaTeX), so this walks the string and
// renders only the delimited pieces rather than treating the whole thing as
// one expression.
function renderMixedText(container: HTMLElement, text: string) {
  container.innerHTML = '';
  const parts = text.split(/(\$[^$]+\$)/g);
  for (const part of parts) {
    if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
      const span = document.createElement('span');
      try {
        katex.render(part.slice(1, -1), span, { throwOnError: false, displayMode: false });
      } catch {
        span.textContent = part;
      }
      container.appendChild(span);
    } else if (part) {
      container.appendChild(document.createTextNode(part));
    }
  }
}

/** Renders text containing `$...$` KaTeX-delimited math inline. */
export function MathBlock({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) renderMixedText(ref.current, text);
  }, [text]);

  return <div ref={ref} className={className} />;
}

/** Renders a single LaTeX expression (no `$` delimiters) in display mode. */
export function MathDisplay({ latex, className }: { latex: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    try {
      katex.render(latex, ref.current, { throwOnError: false, displayMode: true });
    } catch {
      ref.current.textContent = latex;
    }
  }, [latex]);

  return <div ref={ref} className={className} />;
}
