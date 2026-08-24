import type { Assessment } from '@/types/content';

export const chapter4DiseasesAssessment: Assessment = {
  id: 'diseases-in-plants-and-animals-assessment',
  questions: [
    // Part A — Concept
    {
      id: 'dpa-a1',
      part: 'concept',
      conceptSlug: 'causes-of-plant-diseases',
      conceptTitle: 'Disease Causing Factors',
      question: {
        id: 'dpa-a1-q',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of these is an INFECTIOUS cause of plant disease?',
        options: [
          { id: 'a', text: 'Nitrogen deficiency' },
          { id: 'b', text: 'A fungal pathogen' },
          { id: 'c', text: 'Extreme temperature' },
          { id: 'd', text: 'Poor soil drainage' },
        ],
        correctOptionId: 'b',
        hints: ['Infectious causes always involve a living pathogen.'],
        explanation: 'A fungal pathogen is a living organism that can infect and spread — an infectious cause, unlike the other, non-infectious, environmental factors listed.',
      },
    },
    {
      id: 'dpa-a2',
      part: 'concept',
      conceptSlug: 'signs-and-symptoms-of-plant-diseases',
      conceptTitle: 'Signs and Symptoms of Diseases',
      question: {
        id: 'dpa-a2-q',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What is the key difference between a "sign" and a "symptom" of plant disease?',
        options: [
          { id: 'a', text: 'A sign is direct evidence of the pathogen; a symptom is the plant\'s reaction.' },
          { id: 'b', text: 'They mean exactly the same thing.' },
          { id: 'c', text: 'A symptom is direct evidence of the pathogen; a sign is the plant\'s reaction.' },
          { id: 'd', text: 'Neither relates to disease diagnosis.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about which one physically comes from the pathogen itself.'],
        explanation: 'Signs are direct physical evidence of the pathogen; symptoms are the plant\'s own reaction to being diseased.',
      },
    },
    {
      id: 'dpa-a3',
      part: 'concept',
      conceptSlug: 'non-infectious-animal-diseases',
      conceptTitle: 'Non-infectious Diseases',
      question: {
        id: 'dpa-a3-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why can a non-infectious disease not require quarantine?',
        options: [
          { id: 'a', text: 'It involves no transmissible pathogen that could spread to other animals.' },
          { id: 'b', text: 'Non-infectious diseases are never serious.' },
          { id: 'c', text: 'Quarantine is only used for plants, never animals.' },
          { id: 'd', text: 'All diseases require quarantine regardless of cause.' },
        ],
        correctOptionId: 'a',
        hints: ['Quarantine exists specifically to stop transmission between individuals.'],
        explanation: 'Since non-infectious diseases have no transmissible pathogen, there is nothing for quarantine to stop from spreading.',
      },
    },

    // Part B — Framework Application (this chapter is descriptive/
    // comparative rather than formula-based).
    {
      id: 'dpa-b1',
      part: 'formula-application',
      conceptSlug: 'types-of-plant-pathogens',
      conceptTitle: 'Types of Pathogens',
      question: {
        id: 'dpa-b1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A farmer applies a fungicide to a crop with a bacterial disease. What is the most likely outcome?',
        options: [
          { id: 'a', text: 'The fungicide has no effect, since it does not target bacteria.' },
          { id: 'b', text: 'The fungicide cures the bacterial disease just as effectively.' },
          { id: 'c', text: 'The fungicide converts the bacteria into fungi.' },
          { id: 'd', text: 'All pathogen control chemicals work identically.' },
        ],
        correctOptionId: 'a',
        hints: ['Control methods are pathogen-specific.'],
        explanation: 'A fungicide targets fungi specifically and has no effect on bacterial pathogens — correct pathogen identification is essential for choosing effective control.',
      },
    },
    {
      id: 'dpa-b2',
      part: 'formula-application',
      conceptSlug: 'how-pathogens-are-transmitted',
      conceptTitle: 'How Pathogens Are Transmitted',
      question: {
        id: 'dpa-b2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A disease is transmitted primarily through contaminated drinking water. Which prevention strategy would be MOST effective?',
        options: [
          { id: 'a', text: 'Mosquito control programmes' },
          { id: 'b', text: 'Water sanitation and treatment' },
          { id: 'c', text: 'Air filtration systems' },
          { id: 'd', text: 'Skin-contact avoidance only' },
        ],
        correctOptionId: 'b',
        hints: ['Match the prevention method to the actual transmission route.'],
        explanation: 'Since the disease is waterborne, water sanitation directly targets the actual transmission route, unlike the other, mismatched strategies.',
      },
    },

    // Part C — Problem Solving
    {
      id: 'dpa-c1',
      part: 'problem-solving',
      conceptSlug: 'control-of-plant-diseases',
      conceptTitle: 'Control of Plant Diseases',
      question: {
        id: 'dpa-c1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'A farmer has grown the same crop in the same field for 10 consecutive years and now faces a severe soil-borne fungal disease. What is the most direct explanation and fix?',
        options: [
          { id: 'a', text: 'The pathogen has built up in the soil because its host crop kept returning each year; rotating to a non-host crop would break its life cycle.' },
          { id: 'b', text: 'The soil itself has become toxic and nothing can be done.' },
          { id: 'c', text: 'The disease is unrelated to repeated planting of the same crop.' },
          { id: 'd', text: 'Only a stronger fungicide dose can ever solve this.' },
        ],
        correctOptionId: 'a',
        hints: ['What does a soil-borne pathogen need each year in order to persist and build up?'],
        explanation: 'Repeated planting of the same host crop lets a soil-borne pathogen persist and build up year after year — crop rotation breaks this cycle by removing its host.',
      },
    },
    {
      id: 'dpa-c2',
      part: 'problem-solving',
      conceptSlug: 'the-bodys-defence-against-disease',
      conceptTitle: "The Body's Defence Against Disease",
      question: {
        id: 'dpa-c2-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'An animal is infected with a pathogen it has never encountered before. Which immune response acts FIRST, before a targeted response can develop?',
        options: [
          { id: 'a', text: 'The adaptive (specific) immune response, using pre-existing memory cells.' },
          { id: 'b', text: 'The innate (non-specific) immune response, reacting quickly to any pathogen.' },
          { id: 'c', text: 'No immune response occurs on a first exposure.' },
          { id: 'd', text: 'Only physical barriers respond; internal immunity does nothing.' },
        ],
        correctOptionId: 'b',
        hints: ['One immune layer is fast but general; another is slower but highly specific.'],
        explanation: 'The innate immune response reacts quickly and non-specifically to any pathogen, buying time for the slower, targeted adaptive response to develop, especially on a first exposure with no existing memory cells.',
      },
    },

    // Part D — Real-Life Application
    {
      id: 'dpa-d1',
      part: 'real-life-application',
      conceptSlug: 'infectious-animal-diseases',
      conceptTitle: 'Infectious Diseases',
      question: {
        id: 'dpa-d1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why are entire poultry flocks sometimes culled during an avian influenza outbreak?',
        options: [
          { id: 'a', text: 'To stop a highly transmissible viral pathogen from spreading further.' },
          { id: 'b', text: 'Because the birds are old and would die soon anyway.' },
          { id: 'c', text: 'Avian influenza is non-infectious and unrelated to culling.' },
          { id: 'd', text: 'Culling has no relationship to disease control.' },
        ],
        correctOptionId: 'a',
        hints: ['Consider what makes avian influenza a public health and agricultural risk.'],
        explanation: 'Avian influenza is highly transmissible; culling infected flocks is a drastic but direct measure to prevent further spread of the pathogen.',
      },
    },
    {
      id: 'dpa-d2',
      part: 'real-life-application',
      conceptSlug: 'how-pathogens-are-transmitted',
      conceptTitle: 'How Pathogens Are Transmitted',
      question: {
        id: 'dpa-d2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why do malaria prevention programmes prioritise bed nets and mosquito control over water sanitation?',
        options: [
          { id: 'a', text: 'Malaria is transmitted specifically by mosquito bites, not through water.' },
          { id: 'b', text: 'Water sanitation is more expensive than mosquito control everywhere.' },
          { id: 'c', text: 'Malaria has no defined transmission route.' },
          { id: 'd', text: 'Mosquitoes are unrelated to malaria transmission.' },
        ],
        correctOptionId: 'a',
        hints: ['Recall the parasite\'s specific transmission pathway.'],
        explanation: 'Because malaria is vector-borne (via mosquito bites), prevention must target the mosquito vector directly to be effective.',
      },
    },

    // Part E — Challenge
    {
      id: 'dpa-e1',
      part: 'challenge',
      conceptSlug: 'the-bodys-defence-against-disease',
      conceptTitle: "The Body's Defence Against Disease",
      question: {
        id: 'dpa-e1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Vaccination often produces a much milder illness (or none at all) compared to a natural first infection. How does this connect to the layered immune defence system?',
        options: [
          { id: 'a', text: 'Vaccination has no relationship to the immune system.' },
          { id: 'b', text: 'Vaccination safely exposes the adaptive immune system to a pathogen (or part of one), building memory cells in advance, so a real future infection is met with a fast, targeted response instead of relying on the slower innate response alone.' },
          { id: 'c', text: 'Vaccination replaces the need for physical barriers entirely.' },
          { id: 'd', text: 'Vaccination only affects non-infectious diseases.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about which immune layer forms memory, and what vaccination trains in advance.'],
        explanation: "Vaccination essentially pre-trains the adaptive immune response by generating memory cells before a real infection occurs — so when the actual pathogen is encountered, the fast, targeted adaptive response is already available, rather than the body needing to rely on the slower innate response and build adaptive immunity from scratch.",
      },
    },
  ],
};
