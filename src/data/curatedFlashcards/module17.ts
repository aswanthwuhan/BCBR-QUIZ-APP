import { CuratedCard } from './types';

// Module 17 — Data management
export const MODULE_17_CARDS: CuratedCard[] = [
  {
    id: 'cur-m17-001',
    type: 'LIST',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Steps in data management',
    back: '1. Define variables, create database & dictionary\n2. Enter data, correct errors, create analysis dataset\n3. Backup and archive data set\n🎯 Exam trap: Applying for ethics committee clearance is NOT part of data management (it happens before data collection).',
    note: 'Prepare → Enter & Clean → Backup.'
  },
  {
    id: 'cur-m17-002',
    type: 'DEFINITION',
    topic: 'Data management',
    difficulty: 'easy',
    front: 'Variable naming conventions',
    back: 'Short, no spaces, consistent, without duplicates, clearly understandable, and directly referring to the questionnaire.',
    note: 'Instead of "Patient Date of Birth", use "DOB". Short and sweet.'
  },
  {
    id: 'cur-m17-003',
    type: 'DIFFERENCE',
    topic: 'Data management',
    difficulty: 'easy',
    front: 'Database structure: Row vs. Column',
    back: 'Row = Record (a single participant or observation)\nColumn = Variable (a specific data point like Age or Gender)',
    note: 'R = Row = Record.'
  },
  {
    id: 'cur-m17-004',
    type: 'LIST',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Pre-data entry specifications/quality checks',
    back: 'Minimum and maximum values (range checks) · legal codes · skip patterns · automatic coding.\n🎯 Exam trap: "Avoiding skip patterns" is FALSE. You MUST configure skip patterns as a quality assurance measure.',
    note: 'Setting these up prevents garbage data from entering your database (e.g., typing an age of 200).'
  },
  {
    id: 'cur-m17-005',
    type: 'LIST',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Unique Identifier (ID) properties',
    back: '1. Unique to each participant (never the same for two people)\n2. Can be alphanumeric or composite\n3. Used to maintain anonymity\n🎯 Exam trap: "It can be the same for more than one participant" is FALSE.',
    note: 'Like a fingerprint, an ID protects identity while keeping data distinct.'
  },
  {
    id: 'cur-m17-006',
    type: 'DEFINITION',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Mother-Daughter databases',
    back: 'Used when information is collected at various levels (e.g., Village → Household → Individual). Stored in separate databases linked by a common index identifier.\n🎯 Exam trap: Each database CAN have its own unique identifier system (it is FALSE to say they cannot).',
    note: 'A relational database setup where the mother (village) links to multiple daughters (households).'
  },
  {
    id: 'cur-m17-007',
    type: 'DEFINITION',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Normalized database — key characteristic',
    back: 'It has only one count per record and does NOT facilitate further data aggregation.',
    note: 'Normalized = flattened out to the most basic granular level.'
  },
  {
    id: 'cur-m17-008',
    type: 'LIST',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Data documentation components',
    back: '1. Structure (Name, number of records)\n2. Variables (Name, values, coding)\n3. History (Creation, modification)\n4. Storage information (Media, location, backup)',
    note: 'SVHS: Structure, Variables, History, Storage.'
  },
  {
    id: 'cur-m17-009',
    type: 'SCENARIO',
    topic: 'Data management',
    difficulty: 'hard',
    front: 'Scenario: Fasting blood sugar normally falls between 50-150. A researcher codes missing values as 99. Is this correct?',
    back: 'No, this will lead to erroneous results.\nWhy? 99 falls inside the plausible range of real data. The software will calculate it as a real blood sugar value instead of recognizing it as "missing".\n🎯 Exam trap: Missing values should be coded with extreme numbers like 999 that cannot be real data.',
    note: 'Never hide a missing code inside a normal range.'
  },
  {
    id: 'cur-m17-010',
    type: 'DEFINITION',
    topic: 'Data management',
    difficulty: 'easy',
    front: 'Timing of Data Dictionary creation',
    back: 'It is created BEFORE data entry starts.\n🎯 Exam trap: "It is created after data entry is started" is FALSE.',
    note: 'The dictionary is the rulebook. You must write the rules before playing the game.'
  },
  {
    id: 'cur-m17-011',
    type: 'DEFINITION',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Contents of a Data Dictionary',
    back: 'Links variables in the database to the questionnaire, contains values assigned to variables, and gives brief descriptions of variables.\n🎯 Exam trap: It does NOT contain the "number of records".',
    note: 'A dictionary defines the words (variables), not how many times they are used (records).'
  },
  {
    id: 'cur-m17-012',
    type: 'LIST',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Design of a data entry form — broad outline',
    back: 'Identifier → Demographics → Exposure → Outcome.\n🎯 Exam trap: "Informed consent" or "data analysis plan" are NOT sections of the data entry form itself.',
    note: 'Who are they (ID/Demo)? What did they do (Exposure)? What happened to them (Outcome)?'
  },
  {
    id: 'cur-m17-013',
    type: 'DEFINITION',
    topic: 'Data management',
    difficulty: 'easy',
    front: 'Coding dichotomous variables',
    back: 'It is perfectly fine (and standard) to code them with 0 and 1.\n🎯 Exam trap: "Coding with 0 and 1 should be avoided for dichotomous variables" is FALSE.',
    note: '0 = No/Absent, 1 = Yes/Present. This makes statistical analysis very easy.'
  },
  {
    id: 'cur-m17-014',
    type: 'DEFINITION',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Added benefit of the Data Entry process',
    back: 'It can be viewed as an opportunity to partially clean up the data (e.g., catching errors from forms while typing them in).',
    note: 'The data entry operator is your second line of defense against messy field data.'
  },
  {
    id: 'cur-m17-015',
    type: 'SCENARIO',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Scenario: "Have you ever smoked cigarettes? 1. Yes, 2. No" — What type of variable is this?',
    back: 'Categorical (specifically, nominal/dichotomous).',
    note: 'Categories with no inherent rank.'
  },
  {
    id: 'cur-m17-016',
    type: 'SCENARIO',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Scenario: "Stage of cancer: Stage I, II, III, IV" — What type of variable is this?',
    back: 'Ordinal.',
    note: 'Categories with a clear, meaningful rank or order (I is less severe than IV).'
  },
  {
    id: 'cur-m17-017',
    type: 'SCENARIO',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Scenario: Out of 100 participants, age is missing for 13 people. What should you do?',
    back: 'Code the missing values as an extreme number like "999".\n🎯 Exam trap: Do NOT remove the age variable, do NOT drop the 13 participants from the study, and do NOT assign arbitrary ages.',
    note: 'Preserve the rest of their data. Just mark the missing specific field clearly.'
  },
  {
    id: 'cur-m17-018',
    type: 'DEFINITION',
    topic: 'Data management',
    difficulty: 'easy',
    front: 'Disadvantage of EpiInfo software',
    back: 'It is built for Windows OS only.',
    note: 'Mac users are out of luck with EpiInfo.'
  },
  {
    id: 'cur-m17-019',
    type: 'DEFINITION',
    topic: 'Data management',
    difficulty: 'medium',
    front: 'Data catalogue — handling missing values',
    back: 'Missing value codes MUST be included in the data catalogue.\n🎯 Exam trap: "It is advisable to exclude missing values from the data catalogue" is FALSE.',
    note: 'If you don\'t document your missing value code (like 999), the next researcher will think you had 999-year-old participants.'
  },
  {
    id: 'cur-m17-020',
    type: 'DEFINITION',
    topic: 'Data management',
    difficulty: 'easy',
    front: 'Database storage documentation',
    back: 'Must include media, location, and backup information.\n🎯 Exam trap: You do not need to document hardware configuration or investigator information here.',
    note: 'Where is it? What format is it? Where is the copy?'
  }
];