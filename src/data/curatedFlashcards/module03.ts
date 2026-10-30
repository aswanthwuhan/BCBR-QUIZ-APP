import { CuratedCard } from './types';

// Module 3 — Literature review
export const MODULE_3_CARDS: CuratedCard[] = [
  {
    id: 'cur-m3-001',
    type: 'DEFINITION',
    topic: 'Literature review',
    difficulty: 'easy',
    front: 'Critical appraisal — definition',
    back: 'The ability to apply the principles of analysis to identify those studies which are unbiased and valid. Done in an organized and systematic manner.',
    note: 'Critiquing the METHODOLOGY, not just reading the conclusion.'
  },
  {
    id: 'cur-m3-002',
    type: 'DEFINITION',
    topic: 'Literature review',
    difficulty: 'easy',
    front: 'Database — definition in literature review',
    back: 'An organized collection of articles, abstracts, scientific proceedings, books, and citations that can be easily accessed.',
    note: 'Examples: MEDLINE, EMBASE, CINAHL, PubMed. (Google Scholar is a search engine, NOT a database).'
  },
  {
    id: 'cur-m3-003',
    type: 'DEFINITION',
    topic: 'Literature review',
    difficulty: 'medium',
    front: 'Information seeking — definition',
    back: 'The process of scanning the literature efficiently using manual or computerized methods to identify a set of potentially useful articles and books.',
    note: 'Seeking = finding potentially useful items out in the world.'
  },
  {
    id: 'cur-m3-004',
    type: 'DEFINITION',
    topic: 'Literature review',
    difficulty: 'medium',
    front: 'Information retrieval — definition',
    back: 'The process of identifying, WITHIN a large document collection (database), a subset of documents whose content is most relevant to the user\'s need.',
    note: 'Retrieval = pulling the exact relevant subset from a structured database using queries.'
  },
  {
    id: 'cur-m3-005',
    type: 'DEFINITION',
    topic: 'Literature search',
    difficulty: 'easy',
    front: 'Boolean AND — effect on search',
    back: 'Tells the database that you want records that contain ALL the specified words. It narrows down the search results.',
    note: 'AND = intersection. Fewer results, higher specificity.'
  },
  {
    id: 'cur-m3-006',
    type: 'DEFINITION',
    topic: 'Literature search',
    difficulty: 'easy',
    front: 'Boolean OR — effect on search',
    back: 'Gives the HIGHEST number of results. Commonly used for connecting synonyms of one key concept (e.g., "Heart attack OR Myocardial infarction").',
    note: 'OR = union. Broadens search. Used for synonyms.'
  },
  {
    id: 'cur-m3-007',
    type: 'DEFINITION',
    topic: 'Literature search',
    difficulty: 'easy',
    front: 'Boolean NOT — effect on search',
    back: 'Used for connecting two keywords, the latter of which needs to be EXCLUDED from searches (e.g., "Chest pain NOT angina").',
    note: 'NOT = subtraction. Be careful, it can exclude relevant papers accidentally.'
  },
  {
    id: 'cur-m3-008',
    type: 'DEFINITION',
    topic: 'Literature search',
    difficulty: 'medium',
    front: 'MeSH — full form and database',
    back: 'Medical Subject Headings.\nIt is a controlled vocabulary thesaurus produced by the National Library of Medicine (NLM), used for indexing articles in PubMed.',
    note: '🎯 Exam trap: MeSH is used for PubMed/MEDLINE, NOT for EMBASE.'
  },
  {
    id: 'cur-m3-009',
    type: 'LIST',
    topic: 'Literature review',
    difficulty: 'easy',
    front: 'Why perform a literature review?',
    back: '1. To know the subject matter better\n2. To identify gaps (lacunae) in existing knowledge\n3. To suggest new research topics, questions, and methods\n4. To save valuable time.',
    note: '🎯 Exam trap: It does NOT "help the researcher in arriving at the conclusion of a study". You must conduct the study for that.'
  },
  {
    id: 'cur-m3-010',
    type: 'DEFINITION',
    topic: 'Literature review',
    difficulty: 'medium',
    front: 'When is a literature review done?',
    back: 'It begins at the start of a project but MUST continue throughout the project.\n🎯 Exam trap: It is FALSE that literature searches do not need to continue throughout the project.',
    note: 'Science changes daily. Keep searching until publication.'
  },
  {
    id: 'cur-m3-011',
    type: 'LIST',
    topic: 'Literature review',
    difficulty: 'hard',
    front: 'Literature review ethics — what is unethical?',
    back: '1. Distorting contents from individual studies\n2. Selectively reporting studies that support your hypothesis\n3. Questioning the reputation of study authors\n4. Failing to address the weakness of prior studies in a scholarly manner.',
    note: 'Be objective. Attack the methods, not the author. Report all findings, even if they contradict your hypothesis.'
  },
  {
    id: 'cur-m3-012',
    type: 'LIST',
    topic: 'Literature review',
    difficulty: 'hard',
    front: 'Systematic literature search — sequence of steps',
    back: '1. Organize the information\n2. Synthesize the results\n3. Identify the lacunae (gaps)\n4. Develop the research question.',
    note: 'Organize → Synthesize → Find the Gap → Formulate Question.'
  },
  {
    id: 'cur-m3-013',
    type: 'DEFINITION',
    topic: 'Literature review',
    difficulty: 'medium',
    front: 'Literature review section in a manuscript',
    back: 'Useful in the Introduction, Methods, and Discussion sections.\n🎯 Exam trap: It is NOT useful in the Results section (the results section is strictly for YOUR new data).',
    note: 'Results = your data only. Introduction/Discussion = contextualizing with literature.'
  },
  {
    id: 'cur-m3-014',
    type: 'DEFINITION',
    topic: 'Literature search',
    difficulty: 'medium',
    front: 'Is PubMed a paid service?',
    back: 'No. PubMed is a free search engine maintained by the NCBI at the U.S. National Library of Medicine (NLM).',
    note: 'Free access to biomedical literature citations.'
  },
  {
    id: 'cur-m3-015',
    type: 'DEFINITION',
    topic: 'Literature search',
    difficulty: 'medium',
    front: 'Information retrieval query system — who defines it?',
    back: 'It is user-defined.\nThe user dictates the search string (keywords, Boolean operators), not the provider.',
    note: 'You control the search box.'
  },
  {
    id: 'cur-m3-016',
    type: 'SCENARIO',
    topic: 'Literature search',
    difficulty: 'medium',
    front: 'Scenario: Searching for COVID vaccine effectiveness reducing severe ICU illness',
    back: 'Best strategy: "COVID-19 Vaccine" AND "Severe COVID-19" AND "Intensive Care Units".\nAll three concepts are required to answer the specific question.',
    note: 'Intersection of three specific domains requires AND.'
  },
  {
    id: 'cur-m3-017',
    type: 'LIST',
    topic: 'Literature review',
    difficulty: 'medium',
    front: 'Literature review tables — what is NOT reported?',
    back: 'Study design, study population, and primary outcomes ARE tabulated.\n🎯 Exam trap: "Impact factor" of the journal is generally NOT reported in a literature review table.',
    note: 'Focus on the science (design, population, outcomes), not the journal metrics.'
  },
  {
    id: 'cur-m3-018',
    type: 'DEFINITION',
    topic: 'Literature review',
    difficulty: 'medium',
    front: 'Literature review vs Findings of proposed study',
    back: 'Literature review guides the formulation of the question and methods, but it DOES NOT guide the findings of the proposed study.\nFindings must emerge objectively from the data collected.',
    note: 'Never let the literature bias your actual results.'
  },
  {
    id: 'cur-m3-019',
    type: 'DEFINITION',
    topic: 'Literature search',
    difficulty: 'easy',
    front: 'Are literature review and database search the exact same?',
    back: 'No.\n🎯 Exam trap: "Literature review is a well thought out search for literature in a library/database" is FALSE. The search is just one step; the review involves synthesis and critical appraisal.',
    note: 'Search = getting the papers. Review = reading, critiquing, and synthesizing them.'
  },
  {
    id: 'cur-m3-020',
    type: 'LIST',
    topic: 'Literature review',
    difficulty: 'medium',
    front: 'Steps in performing a literature review',
    back: 'Comparing methods, tabulation of findings, and scholarly critical appraisal.\n🎯 Exam trap: "Selecting ONLY studies reported in the last 5 years" is NOT a required step (important older studies must be included).',
    note: 'Do not blindly filter by date; seminal papers might be 20 years old.'
  }
];