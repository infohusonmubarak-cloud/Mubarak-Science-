import type { QuickRevision } from '@/types/content';

export const chapter5HeatQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'specific-heat-capacity',
      keyPoint: 'Q = mcΔT; specific heat capacity is a property of the material (per kg).',
      formulaSlug: 'specific-heat-capacity-formula',
      miniExample: '2 kg of water heated 20°C needs 168,000 J.',
    },
    {
      conceptSlug: 'law-of-heat-exchange',
      keyPoint: 'Heat lost by the hot object = heat gained by the cold object (insulated system).',
      formulaSlug: 'heat-exchange-formula',
      miniExample: '0.3 kg water at 80°C + 0.5 kg at 20°C mix to 42.5°C.',
    },
    {
      conceptSlug: 'change-of-state-and-latent-heat',
      keyPoint: 'Temperature stays constant during a state change — energy breaks/forms bonds, not KE.',
      miniExample: 'Ice water stays at 0°C the whole time the ice is melting.',
    },
    {
      conceptSlug: 'vaporization-and-specific-latent-heat',
      keyPoint: 'Q = mLᵥ; vaporization needs far more energy than an equivalent temperature change.',
      formulaSlug: 'latent-heat-of-vaporization-formula',
      miniExample: '0.5 kg of water to steam needs 1,130,000 J.',
    },
    {
      conceptSlug: 'fusion-and-specific-latent-heat',
      keyPoint: 'Q = mLf; fusion (melting) needs less energy than vaporization for the same substance.',
      formulaSlug: 'latent-heat-of-fusion-formula',
      miniExample: '0.8 kg of ice needs 267,200 J to melt.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'units-of-heat',
      keyPoint: 'Heat is energy, measured in joules; 1 cal = 4.186 J.',
      formulaSlug: 'heat-unit-conversion-formula',
      miniExample: '150 food Calories (kcal) ≈ 628,000 J.',
    },
    {
      conceptSlug: 'heat-and-internal-energy',
      keyPoint: 'Heat is energy IN TRANSFER; internal energy is what a substance HAS.',
      miniExample: 'Hot coffee transfers heat to the air as it cools, losing internal energy.',
    },
    {
      conceptSlug: 'thermal-capacity',
      keyPoint: 'C = Q/ΔT; thermal capacity depends on an object\'s total mass, unlike specific heat capacity.',
      formulaSlug: 'thermal-capacity-formula',
      miniExample: 'A larger pot of water has a larger thermal capacity and heats more slowly.',
    },
    {
      conceptSlug: 'pressure-dependence-of-melting-and-boiling-point',
      keyPoint: 'Boiling point rises with pressure; water\'s melting point is a rare exception (falls with pressure).',
      miniExample: 'A pressure cooker raises boiling point, cooking food faster.',
    },
  ],
};
