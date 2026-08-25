import type { QuickRevision } from '@/types/content';

export const chapter11CInductionQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'alternating-current',
      keyPoint: 'V_rms = V0 / sqrt(2).',
      formulaSlug: 'rms-voltage-formula',
      miniExample: 'V0=170V → V_rms=120.2V.',
    },
    {
      conceptSlug: 'electromagnetic-induction-basics',
      keyPoint: 'Phi = BAcos(theta) — magnetic flux.',
      formulaSlug: 'magnetic-flux-formula',
      miniExample: 'B=0.5T,A=0.02m^2,perpendicular → Phi=0.01Wb.',
    },
    {
      conceptSlug: 'faradays-law-and-lenzs-law',
      keyPoint: "epsilon = -N(DeltaPhi/Deltat). Induced current opposes the change.",
      formulaSlug: 'faradays-law-formula',
      miniExample: 'N=100, DeltaPhi=0.02Wb, Deltat=0.5s → epsilon=4V.',
    },
    {
      conceptSlug: 'applications-of-electromagnetic-induction',
      keyPoint: 'Vs/Vp = Ns/Np — transformer equation.',
      formulaSlug: 'transformer-equation-formula',
      miniExample: 'Np=1000,Ns=100,Vp=240V → Vs=24V.',
    },
    {
      conceptSlug: 'power-transmission',
      keyPoint: 'P_loss = I^2 R — high voltage means low current, less loss.',
      formulaSlug: 'transmission-power-loss-formula',
      miniExample: '10000V vs 1000V: 100x less power lost.',
    },
    {
      conceptSlug: 'house-wiring-principles',
      keyPoint: 'I_total = sum of individual appliance currents (parallel wiring).',
      formulaSlug: 'household-current-formula',
      miniExample: '2A+5A+3A = 10A on a 10A fuse.',
    },
    {
      conceptSlug: 'electrical-safety',
      keyPoint: 'I = V/R — wet skin has far lower resistance.',
      formulaSlug: 'shock-current-formula',
      miniExample: '230V, wet skin (1000 ohms) → 230mA, dangerous.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'alternating-current',
      keyPoint: 'Mains ratings quote RMS voltage, not peak.',
      formulaSlug: 'rms-voltage-formula',
      miniExample: 'A "230V" outlet actually swings +-325V.',
    },
    {
      conceptSlug: 'electromagnetic-induction-basics',
      keyPoint: 'Induction happens when flux CHANGES, not just when present.',
      formulaSlug: 'magnetic-flux-formula',
      miniExample: 'A metal detector senses changes in flux.',
    },
    {
      conceptSlug: 'faradays-law-and-lenzs-law',
      keyPoint: 'The physics behind every electric generator.',
      formulaSlug: 'faradays-law-formula',
      miniExample: 'A bicycle dynamo lights a lamp by spinning a magnet.',
    },
    {
      conceptSlug: 'applications-of-electromagnetic-induction',
      keyPoint: 'A transformer changes voltage, never total power.',
      formulaSlug: 'transformer-equation-formula',
      miniExample: 'A phone charger uses a step-down transformer.',
    },
    {
      conceptSlug: 'power-transmission',
      keyPoint: 'It is current, not voltage, that determines heat loss.',
      formulaSlug: 'transmission-power-loss-formula',
      miniExample: 'Tall towers carry power at very high voltage.',
    },
    {
      conceptSlug: 'house-wiring-principles',
      keyPoint: 'Appliances are wired in parallel, not series.',
      formulaSlug: 'household-current-formula',
      miniExample: 'Too many appliances at once can trip a breaker.',
    },
    {
      conceptSlug: 'electrical-safety',
      keyPoint: 'Danger depends on current, not voltage alone.',
      formulaSlug: 'shock-current-formula',
      miniExample: 'GFCI outlets exist because of this exact relationship.',
    },
  ],
};
