'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { VideoRef } from '@/types/msmk';

/**
 * Lightweight lazy-loaded YouTube embed — nothing loads (no iframe, no
 * YouTube JS) until the learner taps play, important on slow connections.
 * Renders a "coming soon" card instead of a broken embed when
 * `video.youtubeId` is empty — real video IDs need to be reputable
 * sources (WHO / Red Cross / St John Ambulance) supplied by the course
 * owner; a fabricated 11-character ID would just point nowhere useful.
 */
export function VideoEmbed({ video }: { video: VideoRef }) {
  const [playing, setPlaying] = useState(false);

  if (!video.youtubeId) {
    return (
      <div className="mt-3 flex flex-col items-center gap-1.5 rounded-xl border border-dashed border-border bg-surface-muted p-6 text-center">
        <span aria-hidden="true" className="text-2xl">
          🎬
        </span>
        <p className="text-sm font-medium text-foreground">{video.title.en}</p>
        <p className="text-xs text-foreground-muted">Video coming soon — {video.source.en}</p>
      </div>
    );
  }

  if (playing) {
    return (
      <div className="mt-3 aspect-video w-full overflow-hidden rounded-xl border border-border">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
          title={video.title.en}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative mt-3 flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-surface-muted"
    >
      <Image
        src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 640px) 100vw, 480px"
        className="object-cover opacity-80"
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition-transform group-hover:scale-110">
        ▶️
      </span>
      <span className="absolute bottom-2 left-2 right-2 rounded bg-black/60 px-2 py-1 text-left text-xs text-white">
        {video.title.en} — {video.source.en}
      </span>
    </button>
  );
}
