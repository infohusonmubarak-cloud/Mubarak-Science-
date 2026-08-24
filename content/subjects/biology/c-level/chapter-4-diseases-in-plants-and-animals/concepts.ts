import type { Concept } from '@/types/content';

export const chapter4DiseasesConcepts: Record<string, Concept> = {
  'causes-of-plant-diseases': {
    slug: 'causes-of-plant-diseases',
    title: 'Disease Causing Factors',
    difficulty: 'easy',
    simpleExplanation:
      'Plant diseases can be caused by infectious agents (pathogens like fungi, bacteria, and viruses) ' +
      'or by non-infectious factors (like nutrient deficiency, poor soil conditions, extreme ' +
      'temperature, or pollution) that disrupt normal plant function without involving a living ' +
      'pathogen at all.',
    whyItMatters:
      "Correctly identifying whether a diseased plant is suffering from a pathogen or a non-infectious " +
      "cause is essential, since the treatment for each is completely different — you cannot treat a " +
      "nutrient deficiency with a fungicide.",
    whyItWorks:
      "Infectious causes disrupt the plant by actively invading its tissue and hijacking or damaging " +
      "its cells (pathogens), while non-infectious causes disrupt normal physiological processes " +
      "directly — for example, a nitrogen deficiency limits the plant's ability to build proteins and " +
      "chlorophyll, causing yellowing, without any organism being involved.",
    realLifeExample: {
      title: 'Yellowing leaves: two very different causes',
      scenario: 'A farmer notices yellowing leaves on two different plants in the same field.',
      explanation: 'One plant might be yellowing from a nitrogen deficiency in the soil (non-infectious), while the other might be yellowing due to a viral infection (infectious) — telling these apart (e.g. by checking for a consistent pattern across the whole field versus isolated diseased plants) determines whether the farmer should fertilise or remove and destroy infected plants.',
    },
    practiceQuestions: [
      {
        id: 'plant-disease-causes-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of the following is a NON-infectious cause of plant disease?',
        options: [
          { id: 'a', text: 'A fungal infection' },
          { id: 'b', text: 'Nitrogen deficiency in the soil' },
          { id: 'c', text: 'A bacterial infection' },
          { id: 'd', text: 'A viral infection' },
        ],
        correctOptionId: 'b',
        hints: ['Non-infectious causes do not involve a living pathogen.'],
        explanation: 'Nitrogen deficiency is a non-infectious cause — it disrupts plant physiology directly, without any pathogen being involved.',
      },
    ],
    commonMistake:
      "Assuming every sick-looking plant must have a pathogen — many plant health problems are " +
      "non-infectious (nutrient deficiency, poor drainage, temperature stress), and treating them with " +
      "a pesticide or fungicide would not help at all.",
    quickReview: [
      'Plant diseases: infectious (pathogens) or non-infectious (nutrient/environmental).',
      'Correct diagnosis determines the correct treatment approach.',
      'Example: nitrogen deficiency (non-infectious) vs. viral infection (infectious) both cause yellowing.',
    ],
  },

  'signs-and-symptoms-of-plant-diseases': {
    slug: 'signs-and-symptoms-of-plant-diseases',
    title: 'Signs and Symptoms of Diseases',
    difficulty: 'easy',
    simpleExplanation:
      "'Signs' are direct physical evidence of the pathogen itself (like visible fungal spores or " +
      "bacterial ooze), while 'symptoms' are the plant's own reactions to the disease (like wilting, " +
      "yellowing, spots, or stunted growth) — both help identify what is wrong with a plant.",
    whyItMatters:
      "Distinguishing signs from symptoms sharpens diagnosis: a sign points directly to a specific " +
      "pathogen, while a symptom alone can have several possible causes and needs more investigation.",
    whyItWorks:
      "Signs are diagnostic because they are physical remains or products of the pathogen itself — " +
      "seeing actual fungal structures under a microscope confirms a fungal cause. Symptoms, by " +
      "contrast, reflect the plant's general stress response, which can look similar across very " +
      "different underlying causes (both a fungal infection and a nutrient deficiency can cause " +
      "yellowing).",
    realLifeExample: {
      title: 'Powdery mildew',
      scenario: 'A gardener notices a white, powdery coating on leaves along with stunted growth.',
      explanation: 'The white powdery coating is a SIGN — it is the visible fungal growth itself (the pathogen); the stunted growth is a SYMPTOM — the plant\'s reaction to the infection. Seeing the sign directly confirms a fungal cause.',
    },
    practiceQuestions: [
      {
        id: 'signs-symptoms-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'A white, powdery fungal coating on a leaf is an example of a...',
        options: [
          { id: 'a', text: 'Symptom, because it reflects the plant\'s stress response' },
          { id: 'b', text: 'Sign, because it is direct physical evidence of the pathogen itself' },
          { id: 'c', text: 'Neither a sign nor a symptom' },
          { id: 'd', text: 'A non-infectious cause' },
        ],
        correctOptionId: 'b',
        hints: ['Is the white coating part of the pathogen, or the plant\'s reaction to it?'],
        explanation: 'The visible fungal growth is a sign — direct physical evidence of the pathogen itself, not just the plant\'s reaction.',
      },
    ],
    commonMistake:
      "Using 'sign' and 'symptom' interchangeably — a sign is evidence of the pathogen itself; a " +
      "symptom is the plant's reaction. This distinction matters for accurate diagnosis.",
    quickReview: [
      'Signs: direct physical evidence of the pathogen (e.g. visible fungal spores).',
      "Symptoms: the plant's reaction to disease (e.g. wilting, yellowing, spots).",
      'Signs are more directly diagnostic than symptoms alone.',
    ],
  },

  'types-of-plant-pathogens': {
    slug: 'types-of-plant-pathogens',
    title: 'Types of Pathogens',
    difficulty: 'medium',
    simpleExplanation:
      'Plant pathogens fall into several main groups: fungi (the most common cause of plant disease), ' +
      'bacteria, viruses, and nematodes (microscopic worms) — each infects and damages plants through a ' +
      'different mechanism.',
    whyItMatters:
      "Knowing which type of pathogen is responsible determines the correct control method — " +
      "fungicides do not work against bacteria or viruses, for example.",
    whyItWorks:
      "Each pathogen type has a fundamentally different biology: fungi spread via microscopic spores " +
      "and digest plant tissue externally or internally; bacteria multiply rapidly inside plant tissue " +
      "and often enter through wounds or natural openings; viruses hijack the plant's own cellular " +
      "machinery to replicate and often spread via insect vectors; nematodes physically damage roots " +
      "by feeding on them.",
    realLifeExample: {
      title: 'Citrus greening disease',
      scenario: 'Citrus greening (caused by a bacterium) has devastated citrus orchards worldwide, spread by a small insect called the Asian citrus psyllid.',
      explanation: "Because the pathogen here is bacterial and insect-transmitted, effective control focuses on managing the insect vector population — a fungicide would have no effect at all on this specific disease.",
    },
    practiceQuestions: [
      {
        id: 'pathogen-types-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why is it important to correctly identify which TYPE of pathogen (fungus, bacterium, virus, nematode) is causing a plant disease?',
        options: [
          { id: 'a', text: 'It is not important; all pathogens are treated the same way.' },
          { id: 'b', text: 'Different pathogen types require different, specific control methods (e.g. fungicides only work on fungi).' },
          { id: 'c', text: 'Only fungi actually cause plant disease.' },
          { id: 'd', text: 'Pathogen type has no effect on treatment.' },
        ],
        correctOptionId: 'b',
        hints: ['Consider whether a fungicide would help against a bacterial or viral infection.'],
        explanation: 'Since each pathogen type has different biology, control methods are pathogen-specific — a fungicide, for instance, has no effect on bacteria or viruses.',
      },
    ],
    commonMistake:
      "Assuming all plant diseases are caused by fungi — while fungi are the most common cause, " +
      "bacteria, viruses, and nematodes are also significant, distinct categories of plant pathogens.",
    quickReview: [
      'Main plant pathogen types: fungi, bacteria, viruses, nematodes.',
      'Each has different biology and requires different control methods.',
      'Example: citrus greening is bacterial and insect-transmitted, so vector control is key.',
    ],
  },

  'control-of-plant-diseases': {
    slug: 'control-of-plant-diseases',
    title: 'Control of Plant Diseases',
    difficulty: 'medium',
    simpleExplanation:
      'Plant diseases are controlled through several complementary strategies: cultural practices (crop ' +
      'rotation, sanitation, proper spacing), chemical control (fungicides, bactericides), biological ' +
      'control (using natural enemies of the pathogen), and growing disease-resistant plant varieties.',
    whyItMatters:
      "Using a combination of these strategies (integrated disease management) is generally more " +
      "effective and sustainable than relying on any single method, and reduces the risk of pathogens " +
      "evolving resistance to a single chemical treatment.",
    whyItWorks:
      "Crop rotation works by breaking the life cycle of soil-borne pathogens that depend on a specific " +
      "host plant being grown repeatedly in the same location; disease-resistant varieties work because " +
      "they have been bred (or engineered) with genetic traits that prevent the pathogen from " +
      "successfully infecting or reproducing in the plant.",
    realLifeExample: {
      title: 'Crop rotation to prevent soil-borne disease buildup',
      scenario: 'Farmers often avoid planting the same crop in the same field year after year.',
      explanation: 'Many soil-borne pathogens survive between seasons only if their specific host crop returns — rotating to a different, non-host crop each year starves out the pathogen population, reducing disease pressure without any chemical input.',
    },
    practiceQuestions: [
      {
        id: 'disease-control-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does crop rotation help control soil-borne plant diseases?',
        options: [
          { id: 'a', text: 'It changes the soil pH permanently.' },
          { id: 'b', text: 'It breaks the pathogen\'s life cycle by removing its specific host plant from that location for a season.' },
          { id: 'c', text: 'It has no actual effect on disease.' },
          { id: 'd', text: 'It kills all pathogens instantly.' },
        ],
        correctOptionId: 'b',
        hints: ['Many soil-borne pathogens need their specific host to survive and reproduce.'],
        explanation: 'Rotating to a non-host crop deprives host-specific soil pathogens of what they need to survive, reducing their population over time.',
      },
    ],
    commonMistake:
      "Assuming chemical control (fungicides/pesticides) is the only or best method — an integrated " +
      "approach combining cultural, biological, chemical, and resistant-variety strategies is generally " +
      "more sustainable and effective long-term.",
    quickReview: [
      'Disease control strategies: cultural, chemical, biological, and resistant varieties.',
      'Integrated disease management combines multiple strategies for best results.',
      'Crop rotation breaks the life cycle of host-specific soil-borne pathogens.',
    ],
  },

  'non-infectious-animal-diseases': {
    slug: 'non-infectious-animal-diseases',
    title: 'Non-infectious Diseases',
    difficulty: 'medium',
    simpleExplanation:
      'Non-infectious animal diseases are not caused by pathogens — they arise from factors like ' +
      'genetic defects (inherited disorders), nutritional deficiencies, environmental exposure (toxins, ' +
      'pollution), or degenerative processes (like ageing-related conditions), and cannot be spread ' +
      'from one animal to another.',
    whyItMatters:
      "Recognising a disease as non-infectious changes the entire response — there is no need for " +
      "quarantine or isolation, and treatment focuses on managing the underlying cause (diet, " +
      "environment, or genetics) rather than eliminating a pathogen.",
    whyItWorks:
      "Because no living pathogen is involved, these conditions cannot spread through contact, air, " +
      "water, or vectors between animals — a genetic disorder is fixed at conception, and a nutritional " +
      "deficiency depends only on an individual animal's diet, not on any transmissible agent.",
    realLifeExample: {
      title: 'Diabetes in domestic pets',
      scenario: 'Diabetes is a relatively common non-infectious disease in older or overweight cats and dogs.',
      explanation: "Diabetes arises from a malfunction in insulin production or response within the individual animal — it cannot be caught from another animal, and effective management focuses on diet, weight, and (if needed) insulin therapy for that specific animal.",
    },
    practiceQuestions: [
      {
        id: 'non-infectious-disease-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why can a non-infectious disease like diabetes NOT spread from one animal to another?',
        options: [
          { id: 'a', text: 'It involves no living pathogen that can be transmitted between individuals.' },
          { id: 'b', text: 'It is actually caused by a virus that spreads very slowly.' },
          { id: 'c', text: 'Animals are naturally immune to all non-infectious diseases.' },
          { id: 'd', text: 'Non-infectious diseases only affect plants, not animals.' },
        ],
        correctOptionId: 'a',
        hints: ['Transmission between individuals requires a living or infectious agent to pass along.'],
        explanation: 'Non-infectious diseases arise from internal factors (genetics, nutrition, environment) within an individual animal, with no pathogen present that could be transmitted to another animal.',
      },
    ],
    commonMistake:
      "Assuming any serious or common disease must be infectious — many widespread conditions " +
      "(diabetes, many cancers, arthritis, genetic disorders) are non-infectious despite affecting " +
      "large numbers of animals independently.",
    quickReview: [
      'Non-infectious diseases: genetic, nutritional, environmental, or degenerative causes.',
      'Cannot spread between animals — no pathogen is involved.',
      'Treatment focuses on managing the underlying cause, not eliminating a pathogen.',
    ],
  },

  'infectious-animal-diseases': {
    slug: 'infectious-animal-diseases',
    title: 'Infectious Diseases',
    difficulty: 'medium',
    simpleExplanation:
      'Infectious animal diseases are caused by pathogens — bacteria, viruses, fungi, or parasites — ' +
      'that invade the body, multiply, and can be transmitted from one animal (or human) to another, ' +
      'directly or indirectly.',
    whyItMatters:
      "Because infectious diseases can spread, controlling them requires strategies beyond individual " +
      "treatment — quarantine, vaccination, hygiene, and vector control all aim to stop transmission, " +
      "not just treat the individual case.",
    whyItWorks:
      "Pathogens cause disease by actively multiplying within the host, often damaging tissue directly " +
      "or triggering a harmful immune response, and they are transmissible because they can be shed by " +
      "an infected host and picked up by a new host through contact, air, water, food, or a vector.",
    realLifeExample: {
      title: 'Avian influenza outbreaks in poultry',
      scenario: 'When avian influenza is detected on a poultry farm, entire flocks are often quarantined or culled to stop its spread.',
      explanation: "Because avian influenza is a highly transmissible viral infection, controlling it requires stopping transmission between birds and farms — this is only necessary because the disease is infectious; a non-infectious condition would never require this kind of response.",
    },
    practiceQuestions: [
      {
        id: 'infectious-disease-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does an infectious disease outbreak (like avian influenza) require quarantine, while a non-infectious disease does not?',
        options: [
          { id: 'a', text: 'Infectious diseases involve a transmissible pathogen that can spread to other animals; non-infectious diseases cannot spread this way.' },
          { id: 'b', text: 'Infectious diseases are always less serious than non-infectious ones.' },
          { id: 'c', text: 'Quarantine has no actual effect on disease spread.' },
          { id: 'd', text: 'Non-infectious diseases are more dangerous, requiring different responses.' },
        ],
        correctOptionId: 'a',
        hints: ['What is the key difference in how each disease type moves between individuals?'],
        explanation: "Quarantine specifically targets transmission — since infectious diseases have a pathogen that can spread between animals, isolating infected animals prevents that spread; this makes no sense for a non-infectious disease.",
      },
    ],
    commonMistake:
      "Assuming all infectious diseases spread the same way — transmission routes vary widely (direct " +
      "contact, airborne, waterborne, foodborne, vector-borne), and effective control depends on " +
      "identifying the specific transmission route involved.",
    quickReview: [
      'Infectious diseases are caused by pathogens (bacteria, viruses, fungi, parasites) and can spread.',
      'Control requires stopping transmission: quarantine, vaccination, hygiene, vector control.',
      'Example: avian influenza requires flock quarantine/culling due to its high transmissibility.',
    ],
  },

  'how-pathogens-are-transmitted': {
    slug: 'how-pathogens-are-transmitted',
    title: 'How Pathogens Are Transmitted',
    difficulty: 'medium',
    simpleExplanation:
      'Pathogens spread between animals (and humans) through several routes: direct contact (touching ' +
      'an infected individual or their bodily fluids), airborne transmission (inhaling droplets), ' +
      'waterborne or foodborne transmission (ingesting contaminated water or food), and vector-borne ' +
      'transmission (via an intermediate carrier, like a mosquito or tick).',
    whyItMatters:
      "Identifying the specific transmission route for a disease is essential for designing effective " +
      "prevention — you cannot stop a vector-borne disease with hand-washing alone, and you cannot stop " +
      "an airborne disease with insect control alone.",
    whyItWorks:
      "Each transmission route reflects a different physical pathway the pathogen exploits to reach a " +
      "new host: airborne pathogens survive suspended in respiratory droplets; waterborne pathogens " +
      "survive in water long enough to be ingested; vector-borne pathogens actually replicate inside " +
      "the vector (like a mosquito) before being transmitted through a bite.",
    realLifeExample: {
      title: 'Malaria and mosquito control',
      scenario: 'Malaria prevention programmes focus heavily on mosquito control (bed nets, insecticides) rather than on water sanitation.',
      explanation: 'Because the malaria parasite is specifically vector-borne (transmitted by mosquito bites, not through water or air), effective prevention must target the mosquito vector directly — water sanitation, while valuable for other diseases, would not meaningfully reduce malaria transmission.',
    },
    practiceQuestions: [
      {
        id: 'pathogen-transmission-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does malaria prevention focus on mosquito control rather than water sanitation?',
        options: [
          { id: 'a', text: 'Malaria is a vector-borne disease, transmitted by mosquito bites, not through contaminated water.' },
          { id: 'b', text: 'Malaria is airborne, so water has no relevance at all.' },
          { id: 'c', text: 'Mosquito control has no actual effect on malaria.' },
          { id: 'd', text: 'Water sanitation makes malaria worse.' },
        ],
        correctOptionId: 'a',
        hints: ['What role does the mosquito play in the malaria parasite\'s life cycle?'],
        explanation: 'Because malaria is transmitted specifically via mosquito bites (a vector-borne route), controlling the mosquito vector directly addresses the actual transmission pathway.',
      },
    ],
    commonMistake:
      "Applying a one-size-fits-all prevention strategy to every infectious disease — the correct " +
      "prevention method always depends on identifying the SPECIFIC transmission route involved.",
    quickReview: [
      'Transmission routes: direct contact, airborne, waterborne/foodborne, vector-borne.',
      'Prevention strategy must match the specific transmission route.',
      'Example: malaria (vector-borne) is prevented via mosquito control, not water sanitation.',
    ],
  },

  'the-bodys-defence-against-disease': {
    slug: 'the-bodys-defence-against-disease',
    title: "The Body's Defence Against Disease",
    difficulty: 'hard',
    simpleExplanation:
      "Animals defend against infectious disease using layered defences: physical barriers (skin, " +
      "mucus) that block pathogen entry, a non-specific (innate) immune response that reacts quickly to " +
      "any pathogen, and a specific (adaptive) immune response that targets a particular pathogen and " +
      "can produce lasting immune memory.",
    whyItMatters:
      "Understanding these layered defences explains both how the body naturally fights disease and " +
      "how medical interventions (like vaccines) work by boosting the adaptive immune response " +
      "specifically.",
    whyItWorks:
      "Each layer is a fallback for the one before it: if physical barriers are breached, the fast but " +
      "non-specific innate response (like inflammation and general immune cells) responds immediately " +
      "to slow the pathogen down, buying time for the slower but highly targeted adaptive response " +
      "(specific antibodies and memory cells) to develop and ultimately clear the infection.",
    realLifeExample: {
      title: 'Why a second infection is often milder',
      scenario: 'People often experience a milder illness the second time they encounter a pathogen they were previously infected with.',
      explanation: "The adaptive immune system retains memory cells from the first infection — on a second exposure, these memory cells trigger a much faster, stronger, and more targeted response than the innate immune system could provide on its own, often clearing the pathogen before symptoms become severe.",
    },
    practiceQuestions: [
      {
        id: 'body-defence-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Why is a second infection with the same pathogen often milder than the first?',
        options: [
          { id: 'a', text: 'The adaptive immune system retains memory cells that respond faster and more effectively on re-exposure.' },
          { id: 'b', text: 'Physical barriers become stronger after the first infection.' },
          { id: 'c', text: 'The pathogen itself becomes weaker after infecting one host.' },
          { id: 'd', text: 'The innate immune system is only active during a first infection.' },
        ],
        correctOptionId: 'a',
        hints: ['Which immune layer specifically "remembers" a previous pathogen?'],
        explanation: "Immune memory (from the adaptive immune response) allows a much faster, targeted response on re-exposure, often clearing the pathogen before serious symptoms develop.",
      },
    ],
    commonMistake:
      "Assuming the immune system has only one line of defence — the body actually layers physical " +
      "barriers, a fast non-specific (innate) response, and a slower but targeted, memory-forming " +
      "(adaptive) response, each covering the gaps left by the others.",
    quickReview: [
      "Defence layers: physical barriers → innate (non-specific) response → adaptive (specific) response.",
      'The adaptive response can form lasting immune memory.',
      'A second infection is often milder because memory cells respond faster and more effectively.',
    ],
  },
};
