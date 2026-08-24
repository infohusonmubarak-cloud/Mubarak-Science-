import type { Topic } from '@/types/content';

export const chapter5HeatTopics: Topic[] = [
  {
    slug: 'units-of-heat-and-internal-energy-topic',
    title: 'Units of Heat and Internal Energy',
    concepts: [
      { slug: 'units-of-heat', title: 'Units of Heat', difficulty: 'easy' },
      { slug: 'heat-and-internal-energy', title: 'Heat and Internal Energy', difficulty: 'medium' },
    ],
  },
  {
    slug: 'thermal-and-specific-heat-capacity-topic',
    title: 'Thermal Capacity and Specific Heat Capacity',
    concepts: [
      { slug: 'thermal-capacity', title: 'Thermal Capacity', difficulty: 'medium' },
      { slug: 'specific-heat-capacity', title: 'Specific Heat Capacity', difficulty: 'medium' },
      { slug: 'law-of-heat-exchange', title: 'Law of Heat Exchange', difficulty: 'hard' },
    ],
  },
  {
    slug: 'change-of-state-and-latent-heat-topic',
    title: 'Change of State and Latent Heat',
    concepts: [
      { slug: 'change-of-state-and-latent-heat', title: 'Change of State and Latent Heat', difficulty: 'medium' },
      { slug: 'vaporization-and-specific-latent-heat', title: 'Vaporization and Specific Latent Heat of Vaporization', difficulty: 'medium' },
      { slug: 'fusion-and-specific-latent-heat', title: 'Fusion and Specific Latent Heat of Fusion', difficulty: 'medium' },
      { slug: 'pressure-dependence-of-melting-and-boiling-point', title: 'Dependence of Melting Point and Boiling Point on Pressure', difficulty: 'medium' },
    ],
  },
];
