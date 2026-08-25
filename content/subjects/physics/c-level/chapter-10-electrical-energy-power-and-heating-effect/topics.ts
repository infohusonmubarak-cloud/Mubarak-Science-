import type { Topic } from '@/types/content';

// Navigation outline for Chapter 10, matching the textbook's section
// list: electromotive force and electric circuits; batteries in series
// and parallel; electrical energy and power; Joule's law of heating;
// applications of the heating effect of current.
export const chapter10CElectricalTopics: Topic[] = [
  {
    slug: 'emf-and-circuits-topic',
    title: '10.1 Electromotive Force and Electric Circuits',
    concepts: [{ slug: 'electromotive-force-and-circuits', title: 'Electromotive Force and Electric Circuits', difficulty: 'medium' }],
  },
  {
    slug: 'batteries-series-parallel-topic',
    title: '10.2 Batteries in Series and in Parallel',
    concepts: [{ slug: 'batteries-in-series-and-parallel', title: 'Batteries in Series and in Parallel', difficulty: 'medium' }],
  },
  {
    slug: 'electrical-energy-and-power-topic',
    title: '10.3 Electrical Energy and Electrical Power',
    concepts: [{ slug: 'electrical-energy-and-power', title: 'Electrical Energy and Electrical Power', difficulty: 'medium' }],
  },
  {
    slug: 'joules-law-topic',
    title: "10.4 Joule's Law of Electricity and Heat",
    concepts: [{ slug: 'joules-law-of-heating', title: "Joule's Law of Heating", difficulty: 'medium' }],
  },
  {
    slug: 'applications-of-heating-effect-topic',
    title: '10.5 Some Applications of the Heating Effect of Current',
    concepts: [{ slug: 'applications-of-heating-effect', title: 'Applications of the Heating Effect of Current', difficulty: 'medium' }],
  },
];
