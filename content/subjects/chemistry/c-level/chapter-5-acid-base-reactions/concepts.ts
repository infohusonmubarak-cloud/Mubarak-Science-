import type { Concept } from '@/types/content';

export const chapter5AcidBaseConcepts: Record<string, Concept> = {
  'arrhenius-theory-of-acids-and-bases': {
    slug: 'arrhenius-theory-of-acids-and-bases',
    title: 'Arrhenius Theory',
    difficulty: 'easy',
    simpleExplanation:
      'The Arrhenius theory defines an acid as a substance that increases the concentration of H⁺ ' +
      'ions when dissolved in water, and a base as a substance that increases the concentration of ' +
      'OH⁻ ions when dissolved in water.',
    whyItMatters:
      'This was the first modern, testable definition of acids and bases, and it directly explains ' +
      'the classic properties everyone associates with them — acids turning litmus red and tasting ' +
      'sour, bases turning litmus blue and feeling slippery.',
    whyItWorks:
      'Acids like HCl ionise in water to release H⁺ ions directly (HCl → H⁺ + Cl⁻); bases like NaOH ' +
      'ionise to release OH⁻ ions directly (NaOH → Na⁺ + OH⁻) — the defining behaviour of each class ' +
      'follows straightforwardly from what ions their dissolution actually produces.',
    realLifeExample: {
      title: 'Testing a solution with litmus paper',
      scenario: 'Litmus paper turns red in vinegar (acetic acid) and blue in ammonia solution (a base).',
      explanation: 'Vinegar releases H⁺ ions in water, satisfying the Arrhenius definition of an acid; ammonia solution generates OH⁻ ions in water, satisfying the Arrhenius definition of a base.',
    },
    practiceQuestions: [
      {
        id: 'arrhenius-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'According to Arrhenius theory, what makes a substance a base?',
        options: [
          { id: 'a', text: 'It releases H⁺ ions in water.' },
          { id: 'b', text: 'It releases OH⁻ ions in water.' },
          { id: 'c', text: 'It has no charge at all.' },
          { id: 'd', text: 'It always contains carbon.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what ion is characteristic of basic (alkaline) solutions.'],
        explanation: 'An Arrhenius base increases the concentration of hydroxide ions (OH⁻) when dissolved in water.',
      },
    ],
    commonMistake:
      "Assuming Arrhenius theory can explain every acid-base reaction — it only applies to substances " +
      "dissolved specifically in WATER, and cannot explain how a substance with no OH⁻ at all (like " +
      "ammonia, NH₃) can still act as a base; that gap is exactly what the Brønsted–Lowry theory fixes.",
    quickReview: [
      'Arrhenius acid: increases [H⁺] in water.',
      'Arrhenius base: increases [OH⁻] in water.',
      'Only applies to aqueous (water-based) solutions.',
    ],
  },

  'bronsted-lowry-theory-of-acids-and-bases': {
    slug: 'bronsted-lowry-theory-of-acids-and-bases',
    title: 'Brønsted–Lowry Theory',
    difficulty: 'medium',
    simpleExplanation:
      'The Brønsted–Lowry theory defines an acid as a proton (H⁺) donor and a base as a proton (H⁺) ' +
      'acceptor — a broader definition than Arrhenius theory that works even without water, and even ' +
      'for substances with no OH⁻ in their formula at all.',
    whyItMatters:
      'This theory explains why ammonia (NH₃), which contains no hydroxide ion at all, can still act ' +
      'as a base — it accepts a proton from water to form NH₄⁺ and OH⁻, satisfying the Brønsted–Lowry ' +
      'definition even though it fails a strict reading of Arrhenius theory.',
    whyItWorks:
      "By defining acids and bases purely in terms of proton transfer, this theory works for any " +
      "solvent (or no solvent at all) — every acid-base reaction, viewed this way, is simply a " +
      "proton moving from a donor (the acid) to an acceptor (the base), producing a conjugate base " +
      "(what's left of the acid) and a conjugate acid (what the base becomes after accepting the proton).",
    realLifeExample: {
      title: 'Ammonia acting as a base in water',
      scenario: 'Ammonia gas dissolved in water produces a basic (alkaline) solution, even though NH₃ contains no OH⁻.',
      explanation: 'NH₃ accepts a proton from a water molecule: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ — ammonia is the Brønsted–Lowry base (proton acceptor), and water acts as the acid (proton donor) in this reaction.',
    },
    practiceQuestions: [
      {
        id: 'bronsted-lowry-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'In the reaction NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, which species is the Brønsted–Lowry acid?',
        options: [
          { id: 'a', text: 'NH₃, because it is a base' },
          { id: 'b', text: 'H₂O, because it donates a proton to NH₃' },
          { id: 'c', text: 'NH₄⁺, because it has a positive charge' },
          { id: 'd', text: 'OH⁻, because it is negative' },
        ],
        correctOptionId: 'b',
        hints: ['The Brønsted–Lowry acid is whichever species GIVES UP a proton (H⁺).'],
        explanation: 'Water donates a proton (H⁺) to ammonia in this reaction, making water the Brønsted–Lowry acid, while ammonia — the proton acceptor — is the base.',
      },
    ],
    commonMistake:
      'Assuming a substance must be classified as ONLY an acid or ONLY a base — many substances (like ' +
      'water) are amphoteric, meaning they can act as either a Brønsted–Lowry acid or base depending ' +
      'on what they are reacting with.',
    quickReview: [
      'Brønsted–Lowry acid: a proton (H⁺) donor.',
      'Brønsted–Lowry base: a proton (H⁺) acceptor.',
      'Broader than Arrhenius theory — explains bases like NH₃ with no OH⁻.',
    ],
  },

  'ionic-product-of-water': {
    slug: 'ionic-product-of-water',
    title: 'The Ionic Product of Water, Kw',
    difficulty: 'medium',
    simpleExplanation:
      'Pure water very slightly ionises into H⁺ and OH⁻ ions. The product of these two concentrations, ' +
      'Kw, is a constant (1.0 × 10⁻¹⁴ at 25°C) that holds true not just for pure water, but for ANY ' +
      'aqueous solution — acidic, neutral, or basic.',
    whyItMatters:
      "Kw is what connects [H⁺] and [OH⁻] together in every aqueous solution — it means you never " +
      "need to measure both; knowing one always lets you calculate the other.",
    formulaSlug: 'ionic-product-of-water-formula',
    workedExample: {
      id: 'kw-worked-1',
      title: 'Find [OH⁻] from [H⁺] using Kw',
      problemStatement: 'A solution has [H⁺] = 1.0 × 10⁻³ mol/L. Find [OH⁻] (at 25°C).',
      steps: [
        { step: 1, instruction: 'Write the Kw relationship.', math: 'Kw = [H⁺][OH⁻]', explanation: 'The product of the two concentrations equals Kw.' },
        { step: 2, instruction: 'Rearrange for [OH⁻].', math: '[OH⁻] = Kw / [H⁺]', explanation: 'Divide both sides by [H⁺].' },
        { step: 3, instruction: 'Substitute and calculate.', math: '[OH⁻] = (1.0 × 10⁻¹⁴) / (1.0 × 10⁻³) = 1.0 × 10⁻¹¹', explanation: 'Kw = 1.0 × 10⁻¹⁴ at 25°C.' },
      ],
      finalAnswer: '[OH⁻] = 1.0 × 10⁻¹¹ mol/L',
    },
    whyItWorks:
      'Water constantly self-ionises (H₂O ⇌ H⁺ + OH⁻) and this is itself an equilibrium — Kw is simply ' +
      "the equilibrium constant for this reaction. Adding acid raises [H⁺], which by Le Chatelier's " +
      'principle pushes this equilibrium to suppress [OH⁻] — and the two changes always multiply out ' +
      'to the same constant Kw.',
    realLifeExample: {
      title: 'Why a very acidic solution still contains some OH⁻',
      scenario: 'Even a strongly acidic solution, like stomach acid, technically still contains a tiny amount of OH⁻.',
      explanation: 'Kw guarantees that [H⁺] and [OH⁻] can never independently reach zero — as [H⁺] increases in an acidic solution, [OH⁻] decreases correspondingly, but their product always stays fixed at 1.0 × 10⁻¹⁴.',
    },
    practiceQuestions: [
      {
        id: 'kw-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A solution has [OH⁻] = 1.0 × 10⁻² mol/L. Find [H⁺] (in mol/L, at 25°C).',
        hints: ['[H⁺] = Kw / [OH⁻].', '(1.0 × 10⁻¹⁴) / (1.0 × 10⁻²).'],
        correctAnswer: 0.000000000001,
        tolerance: 0.0000000000001,
        unit: 'mol/L',
        explanation: '[H⁺] = (1.0 × 10⁻¹⁴) / (1.0 × 10⁻²) = 1.0 × 10⁻¹² mol/L.',
      },
    ],
    commonMistake:
      "Thinking Kw only applies to pure water — it applies to the H⁺ and OH⁻ concentrations in ANY " +
      "aqueous solution, no matter how acidic or basic, as long as the temperature is the same.",
    quickReview: [
      'Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C.',
      'Holds true for pure water AND any aqueous acid or base solution.',
      'Knowing [H⁺] or [OH⁻] lets you calculate the other.',
    ],
  },

  'the-ph-scale': {
    slug: 'the-ph-scale',
    title: 'The pH Scale',
    difficulty: 'medium',
    simpleExplanation:
      'The pH scale compresses the enormous range of possible [H⁺] concentrations into a simple, ' +
      'manageable 0–14 scale: pH below 7 is acidic, pH 7 is neutral, and pH above 7 is basic. Each ' +
      'whole pH unit represents a 10-fold change in [H⁺].',
    whyItMatters:
      'Without pH, describing acidity would mean writing out unwieldy numbers like [H⁺] = 0.0000001 ' +
      'mol/L every time — pH turns this into a single, easy-to-compare number (in this case, pH 7).',
    formulaSlug: 'ph-formula',
    workedExample: {
      id: 'ph-worked-1',
      title: 'Calculate pH from [H⁺]',
      problemStatement: 'A solution has [H⁺] = 1.0 × 10⁻³ mol/L. Find its pH.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'pH = −log₁₀[H⁺]', explanation: 'Negative log base 10 of the hydrogen ion concentration.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'pH = −log₁₀(1.0 × 10⁻³) = −(−3) = 3', explanation: 'log₁₀(1.0 × 10⁻³) = −3.' },
      ],
      finalAnswer: 'pH = 3 (acidic)',
    },
    whyItWorks:
      'Because pH uses a logarithm, each whole-number change in pH corresponds to a 10-fold change in ' +
      '[H⁺] — this lets one simple, small-range number (0–14) represent [H⁺] values that otherwise ' +
      'span 14 powers of 10.',
    realLifeExample: {
      title: "Comparing stomach acid to blood",
      scenario: "Stomach acid has a pH of about 1.5-2, while human blood has a pH of about 7.4.",
      explanation: 'The roughly 5-6 unit pH difference actually represents a difference of about 100,000 times in hydrogen ion concentration — the pH scale makes this dramatic difference easy to state and compare with just two small numbers.',
    },
    practiceQuestions: [
      {
        id: 'ph-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A solution has [H⁺] = 1.0 × 10⁻¹⁰ mol/L. Find its pH.',
        hints: ['pH = −log₁₀[H⁺].', 'log₁₀(1.0 × 10⁻¹⁰) = −10.'],
        correctAnswer: 10,
        explanation: 'pH = −log₁₀(1.0 × 10⁻¹⁰) = −(−10) = 10 (basic).',
      },
    ],
    commonMistake:
      'Assuming pH changes are linear (i.e. pH 2 is only "twice as acidic" as pH 4) — because the ' +
      'scale is logarithmic, pH 2 actually represents a [H⁺] that is 100 times greater than pH 4, not ' +
      'just double.',
    quickReview: [
      'pH = −log₁₀[H⁺]. pH < 7 acidic, pH = 7 neutral, pH > 7 basic.',
      'Each whole pH unit is a 10-fold change in [H⁺].',
      'pH + pOH = 14 at 25°C.',
    ],
  },

  'strong-and-weak-acids': {
    slug: 'strong-and-weak-acids',
    title: 'Strong and Weak Acids',
    difficulty: 'medium',
    simpleExplanation:
      'A strong acid ionises essentially completely in water (100% of molecules release their H⁺); a ' +
      'weak acid only partially ionises, establishing an equilibrium where most of the acid remains ' +
      'un-ionised.',
    whyItMatters:
      "Acid strength is about how COMPLETELY an acid ionises, not how concentrated it is or how " +
      "corrosive it seems — this distinction determines whether an acid solution's pH can be " +
      "calculated directly from its concentration, or requires an equilibrium (Ka) calculation.",
    whyItWorks:
      'Strong acids like HCl have such a strong tendency to donate their proton that the reverse ' +
      'reaction (H⁺ and Cl⁻ recombining into HCl) is essentially negligible — so the ionisation runs ' +
      'to completion. Weak acids like acetic acid have a much weaker tendency to stay ionised, so a ' +
      'genuine, measurable equilibrium is established between the ionised and un-ionised forms.',
    realLifeExample: {
      title: 'Hydrochloric acid vs. acetic acid (vinegar)',
      scenario: 'Stomach acid (HCl) and vinegar (acetic acid) are both acids, but behave very differently at the same concentration.',
      explanation: '0.1 mol/L HCl ionises almost completely, giving a pH close to 1; 0.1 mol/L acetic acid only partially ionises, giving a much higher pH of about 2.9 — the same concentration, but very different acid strength.',
    },
    practiceQuestions: [
      {
        id: 'strong-weak-acid-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What determines whether an acid is classified as "strong" or "weak"?',
        options: [
          { id: 'a', text: 'How concentrated the solution is' },
          { id: 'b', text: 'How completely the acid ionises in water' },
          { id: 'c', text: 'How corrosive or dangerous the acid is' },
          { id: 'd', text: 'The colour of the solution' },
        ],
        correctOptionId: 'b',
        hints: ['A very dilute strong acid is still a strong acid — concentration and strength are different ideas.'],
        explanation: 'Acid strength refers specifically to the extent of ionisation — a strong acid ionises essentially completely regardless of concentration, while a weak acid only partially ionises.',
      },
    ],
    commonMistake:
      "Confusing 'strong' with 'concentrated' — a dilute solution of a strong acid is still classified " +
      "as strong (it still ionises completely), and a concentrated solution of a weak acid is still " +
      "classified as weak (it still only partially ionises); strength and concentration are " +
      "completely independent properties.",
    quickReview: [
      'Strong acids ionise essentially completely in water.',
      'Weak acids only partially ionise, reaching an equilibrium.',
      'Strength (extent of ionisation) is independent of concentration.',
    ],
  },

  'the-acid-dissociation-constant-ka': {
    slug: 'the-acid-dissociation-constant-ka',
    title: 'The Acid Dissociation Constant, Ka',
    difficulty: 'hard',
    simpleExplanation:
      'Ka is the equilibrium constant for a weak acid\'s ionisation — it quantifies exactly how far a ' +
      'weak acid ionises. A larger Ka means a stronger weak acid (more ionised); a smaller Ka means a ' +
      'weaker one (less ionised).',
    whyItMatters:
      'Ka lets chemists precisely rank and compare the strength of different weak acids, and — ' +
      'crucially — calculate the actual pH of a weak acid solution, which cannot be found just from ' +
      'its concentration the way a strong acid\'s pH can.',
    formulaSlug: 'ka-formula',
    workedExample: {
      id: 'ka-worked-1',
      title: 'Calculate the pH of a weak acid solution',
      problemStatement: 'Acetic acid (Ka = 1.8 × 10⁻⁵) is dissolved to make a 0.10 mol/L solution. Find [H⁺] and the pH (assume the amount ionised is small compared to 0.10 mol/L).',
      steps: [
        { step: 1, instruction: 'Set up the Ka expression using x = [H⁺] = [A⁻] at equilibrium.', math: 'Ka = x² / (0.10 − x) ≈ x² / 0.10', explanation: 'Since Ka is small, x is small compared to 0.10, so 0.10 − x ≈ 0.10.' },
        { step: 2, instruction: 'Solve for x.', math: 'x² = Ka × 0.10 = 1.8 × 10⁻⁶', explanation: 'Multiply both sides by 0.10.' },
        { step: 3, instruction: 'Take the square root.', math: 'x = √(1.8 × 10⁻⁶) ≈ 1.34 × 10⁻³', explanation: 'x = [H⁺].' },
        { step: 4, instruction: 'Convert to pH.', math: 'pH = −log₁₀(1.34 × 10⁻³) ≈ 2.87', explanation: 'Apply the pH formula.' },
      ],
      finalAnswer: '[H⁺] ≈ 1.3 × 10⁻³ mol/L, pH ≈ 2.87',
    },
    whyItWorks:
      'The Ka expression is simply the equilibrium constant expression (from chemical equilibrium) ' +
      'applied to a weak acid\'s ionisation reaction — assuming the ionised amount is small compared ' +
      'to the starting concentration simplifies the algebra dramatically, and works well whenever Ka is ' +
      'small relative to the initial concentration.',
    realLifeExample: {
      title: 'Ranking the strength of household weak acids',
      scenario: 'Citric acid, acetic acid, and carbonic acid are all weak acids found in food and drinks.',
      explanation: 'Comparing their Ka values directly ranks their strength — citric acid (Ka₁ ≈ 7.4 × 10⁻⁴) is noticeably stronger than acetic acid (Ka ≈ 1.8 × 10⁻⁵), which is in turn stronger than carbonic acid (Ka₁ ≈ 4.3 × 10⁻⁷), explaining why lemon juice tastes more sour than vinegar at similar concentrations.',
    },
    practiceQuestions: [
      {
        id: 'ka-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A weak acid has Ka = 4.0 × 10⁻⁶ and a starting concentration of 0.25 mol/L. Estimate [H⁺] (in mol/L), assuming the ionised amount is small compared to 0.25.',
        hints: ['x² = Ka × C = 4.0 × 10⁻⁶ × 0.25.', 'x = √(1.0 × 10⁻⁶).'],
        correctAnswer: 0.001,
        tolerance: 0.00005,
        unit: 'mol/L',
        explanation: 'x² = 4.0 × 10⁻⁶ × 0.25 = 1.0 × 10⁻⁶, so x = √(1.0 × 10⁻⁶) = 1.0 × 10⁻³ mol/L.',
      },
    ],
    commonMistake:
      'Forgetting that the simplifying assumption (ionised amount is negligible compared to starting ' +
      'concentration) only works well when Ka is small and concentration is not too dilute — for very ' +
      'dilute weak acid solutions or relatively larger Ka values, the full quadratic equation is needed ' +
      'for an accurate answer.',
    quickReview: [
      'Ka = [H⁺][A⁻] / [HA] — a larger Ka means a stronger weak acid.',
      "Ka lets you calculate a weak acid solution's actual pH.",
      'The simplifying assumption (x small vs. starting concentration) works when Ka is small.',
    ],
  },

  'strong-and-weak-bases': {
    slug: 'strong-and-weak-bases',
    title: 'Strong and Weak Bases',
    difficulty: 'medium',
    simpleExplanation:
      'A strong base ionises (or dissociates) essentially completely in water, releasing OH⁻ ions ' +
      'directly; a weak base only partially reacts with water to generate OH⁻, establishing an ' +
      'equilibrium — exactly analogous to strong and weak acids.',
    whyItMatters:
      'The same strong/weak framework used for acids applies equally to bases, letting you predict ' +
      'and calculate the pH of basic solutions using the same tools — a base dissociation constant, ' +
      'Kb, plays the same role for weak bases that Ka plays for weak acids.',
    whyItWorks:
      "Strong bases like NaOH are ionic compounds that already contain OH⁻ ions in their solid " +
      "structure — dissolving them in water simply separates the ions completely, with no equilibrium " +
      "involved. Weak bases like ammonia don't contain OH⁻ at all; they must first react with water " +
      "molecules to generate OH⁻, and that reaction only proceeds partially, establishing a genuine " +
      "equilibrium.",
    realLifeExample: {
      title: 'Sodium hydroxide vs. ammonia',
      scenario: 'Drain cleaner (concentrated NaOH) is far more caustic than a dilute ammonia-based household cleaner at similar concentrations.',
      explanation: 'NaOH is a strong base that dissociates completely, producing a very high [OH⁻] and pH; ammonia is a weak base that only partially reacts with water, producing a much lower [OH⁻] and pH at the same starting concentration.',
    },
    practiceQuestions: [
      {
        id: 'strong-weak-base-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does solid NaOH dissolve in water without establishing any equilibrium (unlike a weak base)?',
        options: [
          { id: 'a', text: 'NaOH already exists as separate Na⁺ and OH⁻ ions in its solid structure — dissolving just separates them completely.' },
          { id: 'b', text: 'NaOH is not actually a base.' },
          { id: 'c', text: 'NaOH reacts with water to slowly form OH⁻.' },
          { id: 'd', text: 'NaOH only dissolves at very high temperatures.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about what an ionic solid is actually made of, even before it dissolves.'],
        explanation: 'NaOH is already an ionic lattice of Na⁺ and OH⁻ ions — water simply separates and surrounds these existing ions completely, with no partial-reaction equilibrium needed.',
      },
    ],
    commonMistake:
      "Assuming all metal hydroxides are strong bases — while group 1 hydroxides (like NaOH, KOH) are " +
      "strong, many other metal hydroxides have very limited solubility in water and behave quite " +
      "differently in practice.",
    quickReview: [
      'Strong bases (e.g. NaOH) dissociate essentially completely in water.',
      'Weak bases (e.g. NH₃) only partially react with water to form OH⁻.',
      'Kb plays the same role for weak bases that Ka plays for weak acids.',
    ],
  },

  'salt-hydrolysis': {
    slug: 'salt-hydrolysis',
    title: 'Salt Hydrolysis',
    difficulty: 'hard',
    simpleExplanation:
      "Salt hydrolysis is the reaction of a salt's ions with water, which can make the resulting " +
      "solution acidic, basic, or neutral — depending on whether the salt came from a strong or weak " +
      "acid and a strong or weak base.",
    whyItMatters:
      "This explains a fact that often surprises students: dissolving a 'neutral-looking' salt like " +
      "sodium acetate in water actually produces a BASIC solution, not a neutral one — salts are not " +
      "automatically pH-neutral just because they are neither an acid nor a base themselves.",
    whyItWorks:
      "When a salt formed from a weak acid dissolves, its anion (the conjugate base of that weak " +
      "acid) is itself a reasonably strong base — it reacts with water to generate OH⁻, making the " +
      "solution basic. Similarly, a salt formed from a weak base has a cation (the conjugate acid) " +
      "that reacts with water to generate H⁺, making the solution acidic. A salt from a strong acid " +
      "AND a strong base has ions too weak to react with water at all, giving a neutral solution.",
    realLifeExample: {
      title: 'Baking soda vs. ammonium chloride solutions',
      scenario: 'A solution of baking soda (sodium bicarbonate) is basic; a solution of ammonium chloride is acidic.',
      explanation: "Bicarbonate (HCO₃⁻) is the conjugate base of the weak acid H₂CO₃, so it reacts with water to produce OH⁻, making the solution basic. Ammonium (NH₄⁺) is the conjugate acid of the weak base NH₃, so it reacts with water to produce H⁺, making the solution acidic — both are examples of salt hydrolysis.",
    },
    practiceQuestions: [
      {
        id: 'salt-hydrolysis-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Sodium acetate (formed from acetic acid, a weak acid, and NaOH, a strong base) is dissolved in water. Is the resulting solution acidic, basic, or neutral?',
        options: [
          { id: 'a', text: 'Acidic, because acetate ions release H⁺' },
          { id: 'b', text: 'Basic, because acetate ions (the conjugate base of a weak acid) react with water to produce OH⁻' },
          { id: 'c', text: 'Neutral, because salts are always neutral' },
          { id: 'd', text: 'It depends only on the concentration, not the ions present' },
        ],
        correctOptionId: 'b',
        hints: ['Salt from a WEAK acid + strong base → the anion is a reasonably strong conjugate base.'],
        explanation: 'Acetate ion is the conjugate base of the weak acid acetic acid, so it is basic enough to react with water and generate OH⁻, making the sodium acetate solution basic overall.',
      },
    ],
    commonMistake:
      "Assuming every salt solution is neutral — only salts formed from a STRONG acid and a STRONG " +
      "base give a truly neutral solution; salts involving a weak acid or weak base hydrolyse to give " +
      "a basic or acidic solution respectively.",
    quickReview: [
      'Salt hydrolysis: a salt\'s ions can react with water, affecting solution pH.',
      'Weak acid + strong base salt → basic solution (e.g. sodium acetate).',
      'Weak base + strong acid salt → acidic solution (e.g. ammonium chloride).',
    ],
  },

  'how-buffer-solutions-work': {
    slug: 'how-buffer-solutions-work',
    title: 'How Buffer Solutions Work',
    difficulty: 'medium',
    simpleExplanation:
      'A buffer solution resists changes in pH when small amounts of acid or base are added — it is ' +
      'made from a weak acid together with its conjugate base (or a weak base together with its ' +
      'conjugate acid), present in significant amounts simultaneously.',
    whyItMatters:
      "Buffers are essential in biology and industry for keeping pH stable — human blood, for " +
      "example, must stay within a very narrow pH range to remain safe, and buffer systems are what " +
      "keep it there despite metabolic acids and bases constantly being produced.",
    whyItWorks:
      "A buffer contains both a weak acid (which can neutralise any added base by donating H⁺) and " +
      "its conjugate base (which can neutralise any added acid by accepting H⁺) in significant " +
      "amounts at the same time — whichever is added, the buffer has a reserve of the opposite " +
      "species ready to consume it, so the pH barely moves.",
    realLifeExample: {
      title: 'The carbonic acid–bicarbonate buffer in blood',
      scenario: 'Human blood pH stays remarkably close to 7.4, even though the body constantly produces acidic and basic byproducts.',
      explanation: 'Blood contains a carbonic acid (H₂CO₃) / bicarbonate (HCO₃⁻) buffer system — excess H⁺ is absorbed by HCO₃⁻, and excess OH⁻ is neutralised by H₂CO₃, keeping blood pH stable within a narrow, life-sustaining range.',
    },
    practiceQuestions: [
      {
        id: 'buffer-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What two components does a buffer solution need to resist pH changes?',
        options: [
          { id: 'a', text: 'A strong acid and a strong base' },
          { id: 'b', text: 'A weak acid and its conjugate base (or a weak base and its conjugate acid), both present in significant amounts' },
          { id: 'c', text: 'Pure water only' },
          { id: 'd', text: 'Any two random chemicals' },
        ],
        correctOptionId: 'b',
        hints: ['The buffer needs a reserve of BOTH an acid-neutraliser and a base-neutraliser at once.'],
        explanation: 'A buffer needs significant amounts of both a weak acid (to neutralise added base) and its conjugate base (to neutralise added acid) present simultaneously.',
      },
    ],
    commonMistake:
      'Thinking a buffer completely PREVENTS any pH change — a buffer only RESISTS pH change within a ' +
      'limited range; adding enough acid or base will eventually use up one of the buffer components ' +
      'and the pH will start to change significantly.',
    quickReview: [
      'A buffer resists pH change when small amounts of acid or base are added.',
      'Needs a weak acid + its conjugate base (or weak base + conjugate acid), both present.',
      "Buffers have a limited capacity — enough added acid/base will still change the pH.",
    ],
  },

  'the-henderson-hasselbalch-equation': {
    slug: 'the-henderson-hasselbalch-equation',
    title: 'The Henderson–Hasselbalch Equation',
    difficulty: 'hard',
    simpleExplanation:
      'The Henderson–Hasselbalch equation calculates a buffer\'s pH directly from the ratio of its ' +
      'conjugate base to weak acid concentrations, without needing to solve a full equilibrium problem ' +
      'from scratch.',
    whyItMatters:
      "This equation is the practical, everyday tool for designing a buffer with a specific target pH " +
      "— by choosing the right weak acid (based on its pKa) and adjusting the ratio of its two forms, " +
      "chemists and biologists can create a buffer for almost any desired pH.",
    formulaSlug: 'henderson-hasselbalch-formula',
    workedExample: {
      id: 'hh-worked-1',
      title: "Calculate a buffer's pH",
      problemStatement: 'A buffer is made from acetic acid (Ka = 1.8 × 10⁻⁵, so pKa ≈ 4.74) with [CH₃COOH] = 0.20 mol/L and [CH₃COO⁻] = 0.20 mol/L. Find the pH.',
      steps: [
        { step: 1, instruction: 'Write the equation.', math: 'pH = pKa + log₁₀([A⁻]/[HA])', explanation: 'Conjugate base over weak acid.' },
        { step: 2, instruction: 'Find the ratio.', math: '[A⁻]/[HA] = 0.20/0.20 = 1', explanation: 'Equal concentrations of acid and conjugate base.' },
        { step: 3, instruction: 'Substitute and calculate.', math: 'pH = 4.74 + log₁₀(1) = 4.74 + 0 = 4.74', explanation: 'log₁₀(1) = 0.' },
      ],
      finalAnswer: 'pH = 4.74 (equal to the pKa, since the ratio is 1)',
    },
    whyItWorks:
      "This equation is just a rearranged form of the Ka expression — taking the negative log of both " +
      "sides of Ka = [H⁺][A⁻]/[HA] and rearranging gives exactly this relationship. It also reveals a " +
      "useful shortcut: whenever [A⁻] = [HA] (a 1:1 ratio), the log term is zero, so the buffer's pH " +
      "exactly equals the weak acid's pKa.",
    realLifeExample: {
      title: 'Designing a buffer for a biology experiment',
      scenario: 'A biologist needs a buffer that holds steady at pH 7.4 to keep enzymes stable during an experiment.',
      explanation: 'Using the Henderson–Hasselbalch equation, the biologist picks a weak acid with a pKa close to 7.4, then calculates the exact ratio of acid to conjugate base needed to hit that target pH precisely.',
    },
    practiceQuestions: [
      {
        id: 'hh-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A buffer has pKa = 4.74, with [A⁻] = 0.40 mol/L and [HA] = 0.20 mol/L. Find the pH (log₁₀2 ≈ 0.30).',
        hints: ['pH = pKa + log₁₀([A⁻]/[HA]).', '[A⁻]/[HA] = 0.40/0.20 = 2.'],
        correctAnswer: 5.04,
        tolerance: 0.02,
        explanation: 'pH = 4.74 + log₁₀(2) = 4.74 + 0.30 = 5.04.',
      },
    ],
    commonMistake:
      "Forgetting that the Henderson–Hasselbalch equation only works well for buffers where significant " +
      "amounts of BOTH the weak acid and conjugate base are present — it breaks down as an " +
      "approximation if either component is nearly used up.",
    quickReview: [
      'pH = pKa + log₁₀([A⁻]/[HA]).',
      'When [A⁻] = [HA], pH = pKa exactly (log of 1 is 0).',
      'Lets chemists design a buffer for a specific target pH.',
    ],
  },
};
