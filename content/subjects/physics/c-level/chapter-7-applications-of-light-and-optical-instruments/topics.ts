import type { Topic } from '@/types/content';

// Navigation outline for Chapter 7, matching the textbook's section
// list: the camera; the human eye; the compound microscope; the
// telescope; the laser; fibre optics; the spectrometer; photometry.
export const chapter7COpticsTopics: Topic[] = [
  {
    slug: 'the-camera-topic',
    title: '7.1 The Camera',
    concepts: [{ slug: 'the-camera', title: 'The Camera', difficulty: 'medium' }],
  },
  {
    slug: 'the-human-eye-topic',
    title: '7.2 Human Eye',
    concepts: [{ slug: 'the-human-eye', title: 'The Human Eye', difficulty: 'medium' }],
  },
  {
    slug: 'compound-microscope-topic',
    title: '7.3 Compound Microscope',
    concepts: [{ slug: 'compound-microscope', title: 'The Compound Microscope', difficulty: 'hard' }],
  },
  {
    slug: 'telescope-topic',
    title: '7.4 Telescope',
    concepts: [{ slug: 'astronomical-telescope', title: 'The Telescope', difficulty: 'hard' }],
  },
  {
    slug: 'laser-topic',
    title: '7.5 Laser',
    concepts: [{ slug: 'laser-light', title: 'The Laser', difficulty: 'medium' }],
  },
  {
    slug: 'fibre-optics-topic',
    title: '7.6 Fibre Optics',
    concepts: [{ slug: 'fibre-optics-and-total-internal-reflection', title: 'Fibre Optics', difficulty: 'medium' }],
  },
  {
    slug: 'spectrometer-topic',
    title: '7.7 Spectrometer',
    concepts: [{ slug: 'spectrometer', title: 'The Spectrometer', difficulty: 'medium' }],
  },
  {
    slug: 'photometry-topic',
    title: '7.8 Photometry',
    concepts: [{ slug: 'photometry-and-light-intensity', title: 'Photometry', difficulty: 'medium' }],
  },
];
