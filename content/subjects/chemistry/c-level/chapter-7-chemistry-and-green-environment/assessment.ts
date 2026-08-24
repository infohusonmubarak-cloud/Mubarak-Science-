import type { Assessment } from '@/types/content';

export const chapter7EnvironmentAssessment: Assessment = {
  id: 'chemistry-and-green-environment-assessment',
  questions: [
    // Part A — Concept
    {
      id: 'ge-a1',
      part: 'concept',
      conceptSlug: 'the-atmosphere-hydrosphere-and-lithosphere',
      conceptTitle: 'The Atmosphere, Hydrosphere and Lithosphere',
      question: {
        id: 'ge-a1-q',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why is it important to understand the atmosphere, hydrosphere, and lithosphere as INTERCONNECTED systems?',
        options: [
          { id: 'a', text: 'Because they never actually interact with each other.' },
          { id: 'b', text: 'Because pollutants released into one sphere often spread to affect the others.' },
          { id: 'c', text: 'Because only the atmosphere matters for environmental chemistry.' },
          { id: 'd', text: 'Because they are all the same substance.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about the acid rain example.'],
        explanation: "Chemicals move continuously between all three spheres, which is why pollution released into one (like SO₂ into the atmosphere) so often ends up affecting the others (like acidified lakes and soil).",
      },
    },
    {
      id: 'ge-a2',
      part: 'concept',
      conceptSlug: 'the-greenhouse-effect-and-global-warming',
      conceptTitle: 'The Greenhouse Effect and Global Warming',
      question: {
        id: 'ge-a2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Is the greenhouse effect itself the environmental problem?',
        options: [
          { id: 'a', text: 'Yes — greenhouse gases should be eliminated entirely.' },
          { id: 'b', text: 'No — a natural greenhouse effect is essential for life; the problem is its human-caused enhancement.' },
          { id: 'c', text: 'The greenhouse effect does not actually exist.' },
          { id: 'd', text: 'The greenhouse effect only happens at night.' },
        ],
        correctOptionId: 'b',
        hints: ['Without any greenhouse effect at all, what would Earth be like?'],
        explanation: "Without a natural greenhouse effect, Earth would be far too cold to support life as we know it — the real environmental concern is the ENHANCED greenhouse effect from excess human-released greenhouse gases.",
      },
    },

    // Part B — Formula & Application
    {
      id: 'ge-b1',
      part: 'formula-application',
      conceptSlug: 'air-pollutants',
      conceptTitle: 'Air Pollutants',
      question: {
        id: 'ge-b1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which pollutant is primarily responsible for acid rain?',
        options: [
          { id: 'a', text: 'Carbon monoxide (CO)' },
          { id: 'b', text: 'Sulfur dioxide (SO₂) and nitrogen oxides (NOₓ)' },
          { id: 'c', text: 'Particulate matter only' },
          { id: 'd', text: 'Ground-level ozone only' },
        ],
        correctOptionId: 'b',
        hints: ['Which pollutants react with atmospheric water vapour to form acids?'],
        explanation: 'SO₂ and NOₓ react with water vapour in the atmosphere to form sulfuric and nitric acids, which fall as acid rain.',
      },
    },
    {
      id: 'ge-b2',
      part: 'formula-application',
      conceptSlug: 'water-and-soil-pollutants',
      conceptTitle: 'Water and Soil Pollutants',
      question: {
        id: 'ge-b2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the correct term for the process where excess nutrients cause explosive algae growth, followed by oxygen depletion when the algae die?',
        options: [
          { id: 'a', text: 'Bioaccumulation' },
          { id: 'b', text: 'Eutrophication' },
          { id: 'c', text: 'Radioactive decay' },
          { id: 'd', text: 'The greenhouse effect' },
        ],
        correctOptionId: 'b',
        hints: ['This term specifically describes nutrient-driven algal blooms and their aftermath.'],
        explanation: 'Eutrophication is the process by which excess nutrients (nitrates, phosphates) cause explosive algae growth, which then depletes dissolved oxygen as it decomposes.',
      },
    },

    // Part C — Problem Solving
    {
      id: 'ge-c1',
      part: 'problem-solving',
      conceptSlug: 'radioactive-substances-in-the-environment',
      conceptTitle: 'Radioactive Substances in the Environment',
      question: {
        id: 'ge-c1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'After a radioactive release, iodine-131 (half-life ~8 days) and caesium-137 (half-life ~30 years) are both detected. Which will remain a significant environmental hazard for far longer, and why?',
        options: [
          { id: 'a', text: 'Iodine-131, because it has a shorter half-life' },
          { id: 'b', text: 'Caesium-137, because its much longer half-life means it takes far longer to decay to a safe level' },
          { id: 'c', text: 'Both decay at exactly the same rate' },
          { id: 'd', text: 'Neither is radioactive' },
        ],
        correctOptionId: 'b',
        hints: ['A longer half-life means the substance decays more SLOWLY, remaining radioactive for longer.'],
        explanation: "Caesium-137's much longer half-life (about 30 years, versus about 8 days for iodine-131) means it decays far more slowly, remaining a significant environmental hazard for decades rather than weeks.",
      },
    },
    {
      id: 'ge-c2',
      part: 'problem-solving',
      conceptSlug: 'air-pollutants',
      conceptTitle: 'Air Pollutants',
      question: {
        id: 'ge-c2-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'A city notices worse smog on hot, sunny, still days than on cloudy, windy days, even with similar traffic levels. What explains this?',
        options: [
          { id: 'a', text: 'Sunlight drives the reaction between NOₓ and volatile organic compounds that forms ground-level ozone; wind disperses pollutants that would otherwise accumulate.' },
          { id: 'b', text: 'Cars produce more exhaust on sunny days.' },
          { id: 'c', text: 'Smog only forms at night.' },
          { id: 'd', text: 'Wind and sunlight have no effect on air pollution.' },
        ],
        correctOptionId: 'a',
        hints: ["Recall what specifically drives the NOₓ + volatile organics reaction to form ozone.", 'Also consider what wind normally does to a build-up of pollutants.'],
        explanation: 'Sunlight is required to drive the reaction between NOₓ and volatile organic compounds that produces ground-level ozone, while wind normally disperses and dilutes accumulating pollutants — still, sunny days combine both worsening factors at once.',
      },
    },

    // Part D — Real-Life Application
    {
      id: 'ge-d1',
      part: 'real-life-application',
      conceptSlug: 'chemistry-for-sustainable-development',
      conceptTitle: 'Chemistry for Sustainable Development',
      question: {
        id: 'ge-d1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which best illustrates the principle of "green chemistry" — preventing pollution at the source rather than cleaning it up afterward?',
        options: [
          { id: 'a', text: 'Building a larger landfill for more waste.' },
          { id: 'b', text: 'Redesigning an industrial reaction to produce less hazardous waste in the first place.' },
          { id: 'c', text: 'Increasing the use of single-use plastics.' },
          { id: 'd', text: 'Ignoring waste disposal entirely.' },
        ],
        correctOptionId: 'b',
        hints: ["'At the source' means changing the process itself, not managing the waste it produces afterward."],
        explanation: 'Green chemistry specifically emphasizes designing processes and reactions to prevent waste and hazards from being created in the first place, rather than only managing them after the fact.',
      },
    },

    // Part E — Challenge
    {
      id: 'ge-e1',
      part: 'challenge',
      conceptSlug: 'the-greenhouse-effect-and-global-warming',
      conceptTitle: 'The Greenhouse Effect and Global Warming',
      question: {
        id: 'ge-e1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Visible sunlight passes through the atmosphere largely unaffected by greenhouse gases, but infrared radiation from the Earth\'s surface is strongly absorbed by them. What does this difference explain?',
        options: [
          { id: 'a', text: 'Why greenhouse gases let incoming sunlight in but trap outgoing heat, causing net warming.' },
          { id: 'b', text: 'Why the Earth never receives any sunlight at all.' },
          { id: 'c', text: 'Why greenhouse gases block all forms of radiation equally.' },
          { id: 'd', text: 'Why the atmosphere has no effect on temperature at all.' },
        ],
        correctOptionId: 'a',
        hints: ['Consider what happens differently to energy coming IN versus energy trying to go back OUT.'],
        explanation: "This selective absorption — letting visible light in but trapping outgoing infrared — is the fundamental mechanism of the greenhouse effect: energy comes in relatively freely but is partially trapped on its way back out, causing net warming.",
      },
    },
  ],
};
