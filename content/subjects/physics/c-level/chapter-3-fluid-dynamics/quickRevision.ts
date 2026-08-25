import type { QuickRevision } from '@/types/content';

export const chapter3CFluidQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'laminar-and-turbulent-flow',
      keyPoint: 'Re = ρvd/η — below ~2000 laminar, above ~4000 turbulent.',
      formulaSlug: 'reynolds-number-formula',
      miniExample: 'Water at 0.5m/s in a 0.02m pipe → Re=10000, turbulent.',
    },
    {
      conceptSlug: 'equation-of-continuity',
      keyPoint: 'A₁v₁ = A₂v₂ — a narrower pipe means faster flow.',
      formulaSlug: 'equation-of-continuity-formula',
      miniExample: 'A₁=0.02m²,v₁=2m/s,A₂=0.005m² → v₂=8m/s.',
    },
    {
      conceptSlug: 'bernoullis-equation',
      keyPoint: 'P+½ρv²+ρgh = constant along a streamline.',
      formulaSlug: 'bernoullis-equation-formula',
      miniExample: 'Faster flow (v₂=8m/s) → lower pressure (P₂=170000Pa).',
    },
    {
      conceptSlug: 'bernoulli-theorem-applications',
      keyPoint: 'Faster flow ⟹ lower pressure — explains wing lift, atomizers.',
      formulaSlug: 'bernoulli-lift-formula',
      miniExample: 'v_top=250,v_bottom=200 → lift force 270000N on a 20m² wing.',
    },
    {
      conceptSlug: 'viscosity-and-fluid-friction',
      keyPoint: 'F = ηA(v/d) — viscous drag between fluid layers.',
      formulaSlug: 'viscosity-formula',
      miniExample: 'η=0.001,A=0.5,v=0.3,d=0.002 → F=0.075N.',
    },
    {
      conceptSlug: 'surface-tension',
      keyPoint: 'γ = F/L, in N/m.',
      formulaSlug: 'surface-tension-formula',
      miniExample: 'A soap film has TWO surfaces — double the length.',
    },
    {
      conceptSlug: 'capillarity',
      keyPoint: 'h = 2γcosθ/(ρgr) — narrower tube, greater rise.',
      formulaSlug: 'capillary-rise-formula',
      miniExample: 'Water in a 0.5mm tube rises about 2.94cm.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'laminar-and-turbulent-flow',
      keyPoint: 'Re compares fluid inertia to viscosity.',
      formulaSlug: 'reynolds-number-formula',
      miniExample: 'Smoke: smooth column (laminar) breaking into swirls (turbulent).',
    },
    {
      conceptSlug: 'equation-of-continuity',
      keyPoint: 'Only valid for an incompressible fluid.',
      formulaSlug: 'equation-of-continuity-formula',
      miniExample: 'Covering a hose nozzle speeds up the water.',
    },
    {
      conceptSlug: 'bernoullis-equation',
      keyPoint: 'A statement of energy conservation for flowing fluid.',
      formulaSlug: 'bernoullis-equation-formula',
      miniExample: 'Assumes non-viscous, incompressible, steady streamline flow.',
    },
    {
      conceptSlug: 'bernoulli-theorem-applications',
      keyPoint: "A wing's curved top forces air to move faster, not slower.",
      formulaSlug: 'bernoulli-lift-formula',
      miniExample: 'A perfume atomizer draws liquid up via low pressure.',
    },
    {
      conceptSlug: 'viscosity-and-fluid-friction',
      keyPoint: 'Viscosity is independent of density.',
      formulaSlug: 'viscosity-formula',
      miniExample: 'Honey (high η) pours far slower than water.',
    },
    {
      conceptSlug: 'surface-tension',
      keyPoint: 'Caused by unbalanced molecular attraction at the surface.',
      formulaSlug: 'surface-tension-formula',
      miniExample: 'A water strider is supported by surface tension.',
    },
    {
      conceptSlug: 'capillarity',
      keyPoint: 'Rise stops when surface tension balances the risen weight.',
      formulaSlug: 'capillary-rise-formula',
      miniExample: 'A paper towel draws up liquid through capillary gaps.',
    },
  ],
};
