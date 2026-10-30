import { CuratedCard } from './types';

// Module 18 — Data analysis
export const MODULE_18_CARDS: CuratedCard[] = [
  {
    id: 'cur-m18-001',
    type: 'LIST',
    topic: 'Data analysis',
    difficulty: 'medium',
    front: 'Three stages of data analysis in order',
    back: '1. Recoding stage\n2. Descriptive stage\n3. Analytical stage',
    note: 'First clean and recode, then describe your sample, then run the heavy stats.'
  },
  {
    id: 'cur-m18-002',
    type: 'LIST',
    topic: 'Data analysis',
    difficulty: 'hard',
    front: 'Analytical stage — order of analysis',
    back: '1. Univariate analysis\n2. Stratified analysis\n3. Multivariate analysis',
    note: 'Start simple (one variable), then group them (stratify), then look at everything together (multivariate).'
  },
  {
    id: 'cur-m18-003',
    type: 'LIST',
    topic: 'Data analysis',
    difficulty: 'hard',
    front: 'Seven steps of data analysis strategy (in exact order)',
    back: '1. Identify study type\n2. Identify main variables\n3. Become familiar with the data\n4. Characterize study population\n5. Examine outcome/exposure association\n6. Create additional two-way tables\n7. Conduct advanced analysis',
    note: 'Type -> Variables -> Familiarize -> Population -> Association -> Tables -> Advanced.'
  },
  {
    id: 'cur-m18-004',
    type: 'DEFINITION',
    topic: 'Data analysis',
    difficulty: 'easy',
    front: 'Two practices to strictly avoid during data analysis',
    back: '1. Post-hoc analysis (if not part of original plan)\n2. Data drenching (fishing for p-values)',
    note: 'Don\'t torture the data until it confesses.'
  },
  {
    id: 'cur-m18-005',
    type: 'DIFFERENCE',
    topic: 'Data analysis',
    difficulty: 'medium',
    front: 'Descriptive vs Analytical study objectives',
    back: 'Descriptive: Describes outcome for ONE group. Calculates frequency/prevalence/incidence.\nAnalytical: Compares outcomes for TWO or more groups. Used for testing hypothesis.',
    note: 'Descriptive = "What is happening?" Analytical = "Why is it happening?"'
  },
  {
    id: 'cur-m18-006',
    type: 'DEFINITION',
    topic: 'Data analysis',
    difficulty: 'medium',
    front: 'Multivariate/Logistic regression — which stage?',
    back: 'It belongs in the Analytical stage.\n🎯 Exam trap: Regression is NEVER used during the descriptive stage.',
    note: 'Regression is advanced math to find associations, not simple descriptions.'
  },
  {
    id: 'cur-m18-007',
    type: 'DEFINITION',
    topic: 'Data analysis',
    difficulty: 'easy',
    front: 'Use of Epi-Info software',
    back: 'It can be used for data entry, data analysis, AND creating data collection instrument formats.',
    note: 'It is a triple-threat tool from the CDC.'
  },
  {
    id: 'cur-m18-008',
    type: 'DEFINITION',
    topic: 'Data analysis',
    difficulty: 'medium',
    front: 'Determinants of a data analysis plan',
    back: '1. Objectives of the study\n2. Study type/design (descriptive vs analytical)\n🎯 Exam trap: Budget and availability of a statistician do NOT dictate the scientific analysis plan.',
    note: 'Your destination (objectives) and your vehicle (study type) dictate your route (analysis plan).'
  },
  {
    id: 'cur-m18-009',
    type: 'DEFINITION',
    topic: 'Data analysis',
    difficulty: 'medium',
    front: 'Ideal study design & measure for a RARE, acute condition',
    back: 'Case-control study. Measure: Odds Ratio (OR).',
    note: 'Rare disease = Case-Control = Odds Ratio.'
  },
  {
    id: 'cur-m18-010',
    type: 'DEFINITION',
    topic: 'Data analysis',
    difficulty: 'medium',
    front: 'Ideal study design & measure for a FREQUENT, acute condition',
    back: 'Cohort study. Measure: Relative Risk (RR).',
    note: 'Frequent/Common outcome = Cohort = Relative Risk.'
  },
  {
    id: 'cur-m18-011',
    type: 'DEFINITION',
    topic: 'Data analysis',
    difficulty: 'easy',
    front: 'Prevalence ratio — which study design?',
    back: 'Analytical cross-sectional study.',
    note: 'Cross-sectional takes a snapshot of prevalence right now.'
  },
  {
    id: 'cur-m18-012',
    type: 'DEFINITION',
    topic: 'Data analysis',
    difficulty: 'easy',
    front: 'Use of Spreadsheets (Excel) for data management',
    back: 'They should be AVOIDED for data management and analysis of large quantities of data.\n🎯 Exam trap: They are NOT ideal tools.',
    note: 'Excel is too prone to manual copy-paste errors for rigorous research.'
  },
  {
    id: 'cur-m18-013',
    type: 'LIST',
    topic: 'Data analysis',
    difficulty: 'medium',
    front: 'Data cleaning steps',
    back: '1. Checking and removing duplicates\n2. Dealing with missing observations\n3. Checking range and legal values\n🎯 Exam trap: "Calculating strength of association" is analysis, not cleaning.',
    note: 'Cleaning is washing the vegetables, not cooking the meal.'
  },
  {
    id: 'cur-m18-014',
    type: 'LIST',
    topic: 'Data analysis',
    difficulty: 'medium',
    front: 'Characterizing the study population — tasks',
    back: 'Calculate frequency distribution (e.g., age), provide percentages (e.g., gender), and compare baseline characteristics.\n🎯 Exam trap: "Conduct logistic regression" does NOT characterize the population.',
    note: 'Characterizing is just painting a picture of WHO is in your study.'
  },
  {
    id: 'cur-m18-015',
    type: 'DEFINITION',
    topic: 'Data analysis',
    difficulty: 'hard',
    front: 'Stratified analysis',
    back: 'Analyzing an association separately across different subgroups (e.g., analyzing cancer and IUD use separately for those with single vs multiple sexual partners).',
    note: 'Stratify = split into layers to see if the effect is different in each layer.'
  },
  {
    id: 'cur-m18-016',
    type: 'SCENARIO',
    topic: 'Data analysis',
    difficulty: 'hard',
    front: 'Calculate Odds Ratio: 24 cases, 72 controls. Exposure in 16 cases, 18 controls.',
    back: 'OR = 6.\nWhy? Cases: 16 exposed, 8 unexposed. Controls: 18 exposed, 54 unexposed.\nOR = (ad)/(bc) = (16 * 54) / (18 * 8) = 864 / 144 = 6.',
    note: 'Formula: (Exposed Cases * Unexposed Controls) / (Unexposed Cases * Exposed Controls).'
  },
  {
    id: 'cur-m18-017',
    type: 'SCENARIO',
    topic: 'Data analysis',
    difficulty: 'hard',
    front: 'Calculate Odds Ratio: 100 cases (90 exposed), 200 controls (60 exposed).',
    back: 'OR = 21.\nWhy? Cases: 90 exposed, 10 unexposed. Controls: 60 exposed, 140 unexposed.\nOR = (90 * 140) / (60 * 10) = 12600 / 600 = 21.',
    note: 'Cross-multiply: (90 x 140) / (60 x 10).'
  },
  {
    id: 'cur-m18-018',
    type: 'SCENARIO',
    topic: 'Data analysis',
    difficulty: 'hard',
    front: 'Calculate Relative Risk: Cohort study. 8000 exposed (35 got disease), 22000 unexposed (33 got disease).',
    back: 'RR = 2.9.\nWhy? Incidence in exposed = 35/8000 = 0.004375. Incidence in unexposed = 33/22000 = 0.0015. RR = 0.004375 / 0.0015 = 2.9.',
    note: 'RR = (Risk in Exposed) / (Risk in Unexposed).'
  },
  {
    id: 'cur-m18-019',
    type: 'DEFINITION',
    topic: 'Data analysis',
    difficulty: 'easy',
    front: 'Recoding of data — when is it done?',
    back: 'It can be done for key variables BEFORE descriptive and analytical data analysis.\n🎯 Exam trap: It is NOT done "following" (after) the analysis.',
    note: 'You must format/recode your variables before you can analyze them.'
  },
  {
    id: 'cur-m18-020',
    type: 'DEFINITION',
    topic: 'Data analysis',
    difficulty: 'medium',
    front: 'Comparing exposures between cases and controls',
    back: 'Done based on an a priori (pre-planned) hypothesis using an appropriate measure of association.',
    note: 'You compare what they were exposed to in the past to figure out why they became cases.'
  }
];