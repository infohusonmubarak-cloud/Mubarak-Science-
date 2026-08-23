import type { Chapter } from '@/types/content';
import { chapter2Bio } from './chapter-2-cell-structure-and-organization';

// Chapter 2 is the fully-authored reference chapter for this pass. The
// other four are outline-only stubs — real, navigable pages with an
// accurate topic/concept map, no full bodies yet.

const chapter1: Chapter = {
  slug: 'introduction-to-biology',
  number: 1,
  title: 'Introduction to Biology',
  blurb: 'What biology studies, the characteristics that define living things, and the scientific method biologists use to investigate them.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'the-study-of-life',
      title: 'The Study of Life',
      concepts: [
        { slug: 'what-is-biology', title: 'What Is Biology?' },
        { slug: 'characteristics-of-living-organisms', title: 'Characteristics of Living Organisms' },
        { slug: 'importance-of-biology', title: 'Why Biology Matters' },
      ],
    },
    {
      slug: 'levels-of-biological-organization',
      title: 'Levels of Biological Organization',
      concepts: [
        { slug: 'introduction-to-cell-theory', title: 'Introduction to Cell Theory' },
        { slug: 'levels-of-organization', title: 'Molecules to Biosphere: Levels of Organization' },
      ],
    },
    {
      slug: 'the-scientific-method',
      title: 'The Scientific Method',
      concepts: [
        { slug: 'scientific-method', title: 'The Scientific Method' },
        { slug: 'hypothesis-and-variables', title: 'Hypotheses, Variables and Control Groups' },
        { slug: 'data-collection-and-measurement', title: 'Data Collection and Biological Measurement' },
      ],
    },
    {
      slug: 'getting-started-with-microscopy',
      title: 'Getting Started with Microscopy',
      concepts: [{ slug: 'microscopy-introduction', title: 'Introduction to Microscopy' }],
    },
  ],
};

const chapter3: Chapter = {
  slug: 'support-and-locomotion',
  number: 3,
  title: 'Support and Locomotion',
  blurb: 'The human skeleton, joints and muscles that provide support and movement, and how plants support themselves without a skeleton.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'the-skeleton',
      title: 'The Skeleton',
      concepts: [
        { slug: 'functions-of-the-skeleton', title: 'Functions of the Skeleton' },
        { slug: 'axial-and-appendicular-skeleton', title: 'Axial and Appendicular Skeleton' },
        { slug: 'bones-and-joints', title: 'Bones and Joints' },
      ],
    },
    {
      slug: 'muscles-and-movement',
      title: 'Muscles and Movement',
      concepts: [
        { slug: 'ligaments-and-tendons', title: 'Ligaments and Tendons' },
        { slug: 'muscle-contraction', title: 'Muscle Contraction' },
        { slug: 'antagonistic-muscles', title: 'Antagonistic Muscle Pairs' },
      ],
    },
    {
      slug: 'support-in-plants',
      title: 'Support in Plants',
      concepts: [{ slug: 'plant-support-tissues', title: 'Plant Support Tissues' }],
    },
  ],
};

const chapter4: Chapter = {
  slug: 'body-systems-to-sustain-life',
  number: 4,
  title: 'Body Systems to Sustain Life',
  blurb: 'The digestive, respiratory, circulatory, excretory, nervous and endocrine systems, and how they work together to maintain homeostasis.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'digestive-and-respiratory-systems',
      title: 'Digestive and Respiratory Systems',
      concepts: [
        { slug: 'digestion-and-nutrition', title: 'Digestion and Nutrition' },
        { slug: 'enzymes-and-absorption', title: 'Enzymes and Absorption' },
        { slug: 'gas-exchange-and-breathing', title: 'Gas Exchange and Breathing' },
      ],
    },
    {
      slug: 'circulatory-and-excretory-systems',
      title: 'Circulatory and Excretory Systems',
      concepts: [
        { slug: 'the-heart-and-blood-vessels', title: 'The Heart and Blood Vessels' },
        { slug: 'oxygen-transport', title: 'Oxygen Transport' },
        { slug: 'the-kidney-and-excretion', title: 'The Kidney and Excretion' },
      ],
    },
    {
      slug: 'nervous-and-endocrine-systems',
      title: 'Nervous and Endocrine Systems',
      concepts: [
        { slug: 'neurons-and-coordination', title: 'Neurons and Coordination' },
        { slug: 'the-brain-and-reflexes', title: 'The Brain and Reflex Actions' },
        { slug: 'hormones-and-glands', title: 'Hormones and Glands' },
      ],
    },
    {
      slug: 'homeostasis',
      title: 'Homeostasis',
      concepts: [
        { slug: 'homeostasis-and-negative-feedback', title: 'Homeostasis and Negative Feedback' },
        { slug: 'temperature-and-blood-glucose-regulation', title: 'Temperature and Blood Glucose Regulation' },
      ],
    },
  ],
};

const chapter5: Chapter = {
  slug: 'continuation-of-life',
  number: 5,
  title: 'Continuation of Life',
  blurb: 'How organisms reproduce, divide their cells, and pass genetic information on to the next generation.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'reproduction',
      title: 'Reproduction',
      concepts: [
        { slug: 'asexual-and-sexual-reproduction', title: 'Asexual and Sexual Reproduction' },
        { slug: 'male-and-female-reproductive-systems', title: 'Male and Female Reproductive Systems' },
        { slug: 'gametes-and-fertilization', title: 'Gametes and Fertilization' },
      ],
    },
    {
      slug: 'cell-division',
      title: 'Cell Division',
      concepts: [
        { slug: 'mitosis', title: 'Mitosis' },
        { slug: 'meiosis', title: 'Meiosis' },
      ],
    },
    {
      slug: 'growth-and-variation',
      title: 'Growth and Variation',
      concepts: [
        { slug: 'the-menstrual-cycle-and-pregnancy', title: 'The Menstrual Cycle and Pregnancy' },
        { slug: 'genetic-continuity-and-variation', title: 'Genetic Continuity and Variation' },
      ],
    },
  ],
};

export const aLevelBiology = {
  slug: 'a-level',
  name: 'A-Level',
  description: 'Five chapters — from the study of life through reproduction and genetic continuity.',
  status: 'available' as const,
  chapters: [chapter1, chapter2Bio, chapter3, chapter4, chapter5],
};
