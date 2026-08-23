export interface StaticImageProps {
  src: string;
  alt?: string;
}

/**
 * Escape hatch in the diagram registry for a plain illustrative image
 * rather than a generated SVG diagram. Not used by any Chapter 1 concept
 * yet, but keeps `DiagramComponentKey` exhaustively implemented so future
 * content can reference it without a code change.
 */
export function StaticImage({ src, alt = '' }: StaticImageProps) {
  // eslint-disable-next-line @next/next/no-img-element -- dimensions are unknown ahead of time for content-driven images
  return <img src={src} alt={alt} className="w-full max-w-sm rounded-lg border border-border" />;
}
