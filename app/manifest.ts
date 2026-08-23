import type { MetadataRoute } from 'next';
import { BRAND } from '@/lib/strings/copy';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.name,
    short_name: 'MubarekSci',
    description: BRAND.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#4338ca',
    icons: [
      { src: '/icons/icon-192', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512', sizes: '512x512', type: 'image/png' },
      { src: '/icons/icon-512-maskable', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
