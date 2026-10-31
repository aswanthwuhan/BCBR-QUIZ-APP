import { Question } from '../types';

export const ASSIGNMENT_17_QUESTIONS: Question[] = [
  {
    id: "a17q1",
    text: "Steps in data management include",
    options: [
      "Defining a variable, creating a study database and dictionary",
      "Enter data, correct errors and create data set for analysis",
      "Backup and archive data set",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Data management covers defining variables and creating the database and dictionary, then entering data, correcting errors and creating the analysis dataset, and finally backing up and archiving the data. All the options are steps."
  },
  {
    id: "a17q2",
    text: "When we are creating variable name, it should be",
    options: [
      "Clearly understandable and should refer to the questionnaire",
      "Long and can have spaces",
      "Consistent and without duplicates",
      "'a' and 'c'"
    ],
    correctAnswer: 3,
    explanation: "Variable names should be clearly understandable, linked to the questionnaire, consistent and without duplicates. They should be short with no spaces, so option (b) is wrong."
  },
  {
    id: "a17q3",
    text: "In a data management system, each row represents a",
    options: ["Variable", "Record", "Heading", "Appendix"],
    correctAnswer: 1,
    explanation: "In a database table, each row is a record (one participant or unit) and each column is a variable."
  },
  {
    id: "a17q4",
    text: "What is (are) the specifications that we need to check before doing data entry?",
    options: ["Minimum and maximum values, legal codes, skip patterns", "Record name and description of record", "Automatic coding, copying data from preceding record and calculations", "'a' and 'c'"],
    correctAnswer: 3,
    explanation: "Before data entry, the entry form should be set up with range checks (minimum and maximum), legal codes and skip patterns, plus automatic coding, copying from the previous record and automatic calculations. Record name and description are documentation, not entry specifications."
  },
  {
    id: "a17q5",
    text: "Identifier in the database is (are)",
    options: [
      "Unique",
      "Maintained by a computerized index",
      "Secured by quality assurance procedures",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "A database identifier must be unique, maintained through a computerized index, and protected by quality assurance procedures so that there are no duplicates or errors."
  },
  {
    id: "a17q6",
    text: "Key elements of data management",
    options: [
      "Data structure and data entry",
      "Individual and aggregated databases",
      "Mother and daughter databases",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "The key elements of data management are data structure and entry, individual versus aggregated databases, and mother-daughter (linked) databases."
  },
  {
    id: "a17q7",
    text: "The design of data collection instrument",
    options: [
      "Data entry friendly",
      "Outline of major data collection topics/item",
      "Auto coding function",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "A good data collection instrument is easy to enter data from, follows an outline of the major topics or items, and supports automatic coding. This reduces transcription errors."
  },
  {
    id: "a17q8",
    text: "When we are coding for data entry, we should",
    options: [
      "Prefer numerical coding",
      "Use highly complex codes",
      "Decide on the codes for 'missing values' and 'not applicable' items",
      "'a' and 'c'"
    ],
    correctAnswer: 3,
    explanation: "Numerical codes are preferred, and codes for missing and not-applicable values should be decided in advance. Highly complex codes cause entry errors and should be avoided."
  },
  {
    id: "a17q9",
    text: "When information is available at various levels (e.g. at Village, Household, Individual and Illness episode), we can store information at each level in separate databases and link when necessary",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Data collected at several levels can be stored in separate mother-daughter databases and linked through a common identifier. This avoids repeating the higher-level data on every row."
  },
  {
    id: "a17q10",
    text: "Which of the following is (are) not true about normalized database?",
    options: [
      "Normalized database facilitates further aggregation",
      "It has only one count by record",
      "Normalized database does not facilitate further data aggregation",
      "'a' and 'b'"
    ],
    correctAnswer: 2,
    explanation: "A normalized database holds one count per record at the finest level, so it can always be aggregated further. The statement that it does not facilitate further aggregation is the untrue one."
  },
  {
    id: "a17q11",
    text: "A post-graduate researcher has completed the data collection for her thesis. During data management, she should do all the following, except",
    options: [
      "Applying for the ethics committee clearance",
      "Create study database",
      "Create dataset for analysis",
      "Back-up dataset"
    ],
    correctAnswer: 0,
    explanation: "Ethics committee clearance must be obtained before the study begins and is not a data management step. Creating the database, creating the analysis dataset and backing up are all valid tasks after data collection."
  },
  {
    id: "a17q12",
    text: "Data documentation includes information about the following items",
    options: [
      "Structure (Name, number of records etc) alone",
      "Storage information (Media, location, backup information)",
      "Structure (Name, number of records etc), Variables (Name, values, coding), History (Creation, modification), and Storage information (Media, location, backup information)",
      "Structure (Name, number of records etc), Storage information (Media, location, backup information), and Variables (Name, values, coding)"
    ],
    correctAnswer: 2,
    explanation: "Complete data documentation covers structure (name and number of records), variables (names, values and coding), history (creation and modification) and storage (media, location and backup)."
  },
  {
    id: "a17q13",
    text: "Double data entry, in which two operators independently enter the same forms, is mainly used to",
    options: ["Halve the time needed for data entry", "Detect transcription errors by comparing the two entries", "Increase the sample size", "Replace the need for a data dictionary"],
    correctAnswer: 1,
    explanation: "The two independent entries are compared and any mismatch points to a typing error, which is corrected against the original form. It takes more time, not less."
  },
  {
    id: "a17q14",
    text: "Design of data entry can be broadly outlined as",
    options: [
      "Identifier, Demographics, Outcome, and Exposure",
      "Informed consent, Identifier, and Demographics",
      "Identifier, Demographics, Outcome and data analysis plan",
      "Informed consent, Identifier, Demographics, Outcome and data analysis plan"
    ],
    correctAnswer: 0,
    explanation: "A data entry form is broadly organized into identifier, demographics, outcome and exposure sections. Informed consent and the analysis plan are separate study documents."
  },
  {
    id: "a17q15",
    text: "All of the following are true about 'Coding' a new variable, except",
    options: [
      "Prefer numerical coding",
      "Decide on missing values while coding",
      "Avoid cumbersome codes",
      "Coding with ‘0’ and ‘1’ should be avoided for dichotomous variables"
    ],
    correctAnswer: 3,
    explanation: "0/1 coding is actually recommended for dichotomous variables, because the mean equals the proportion and it works directly in regression. So the statement that it should be avoided is the false one."
  },
  {
    id: "a17q16",
    text: "Data entry can be considered as an opportunity to partially clean the data",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Built-in range checks, legal values, skip patterns and double entry catch errors as data are entered, so data entry partly cleans the data."
  },
  {
    id: "a17q17",
    text: "A researcher in diabetes expected that the fasting blood sugar levels may take any value between 50 and 150 mg/dL. In this research any coding of missing value as 99 may lead to an erroneous result.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. If fasting blood sugar can plausibly range from 50 to 150 mg/dL, then 99 is a real possible value. Coding missing as 99 would mix fake values with real ones, so a code outside the range, such as 999, should be used."
  },
  {
    id: "a17q18",
    text: "While documenting the storage information of the database, we need to document",
    options: [
      "Investigators information",
      "Time, place, person information",
      "Media, location and backup information",
      "Hardware configuration"
    ],
    correctAnswer: 2,
    explanation: "Storage documentation records the media the data are stored on, where they are located, and backup details."
  },
  {
    id: "a17q19",
    text: "Which of the following is incorrect in relation to the data catalogue?",
    options: [
      "It describes all the variable for any future reference",
      "It is useful if we share the data with others",
      "It is useful to know how a variable has been coded",
      "It is advisable to exclude the missing values from data catalogue"
    ],
    correctAnswer: 3,
    explanation: "A data catalogue should describe every variable, including its missing-value codes, so that future users interpret the data correctly. Leaving out missing values is the incorrect statement."
  },
  {
    id: "a17q20",
    text: "An audit trail in an electronic research database records",
    options: ["Only the final cleaned dataset", "The sample size calculation", "Scanned consent forms of participants", "Who changed a data value, when it was changed, and the old and new values"],
    correctAnswer: 3,
    explanation: "An audit trail logs every change to the data with the user, date and time, and previous value. This makes data handling transparent and traceable, which spreadsheets usually lack."
  },
  {
    id: "a17q21",
    text: "Which of the following is FALSE about Unique Identifier (ID)?",
    options: [
      "It can be same for more than one participant in a study",
      "It can be alphanumeric",
      "It can be a composite number",
      "It can be used to maintain the anonymity of participants"
    ],
    correctAnswer: 0,
    explanation: "A unique identifier must belong to only one participant. It can be alphanumeric or composite and helps keep participants anonymous, but it can never be shared."
  },
  {
    id: "a17q22",
    text: "Which of the following is NOT a quality assurance measure in designing a data entry form?",
    options: [
      "Using legal values",
      "Using minimum and maximum",
      "Avoiding skip patterns",
      "Use of automatic coding"
    ],
    correctAnswer: 2,
    explanation: "Skip patterns are a quality assurance tool because they bypass questions that do not apply and prevent illogical entries. Avoiding them would reduce data quality. Legal values, range checks and automatic coding are all QA measures."
  },
  {
    id: "a17q23",
    text: "In a data management system each column represents a(n)-",
    options: ["Variable", "Record", "Heading", "Appendix"],
    correctAnswer: 0,
    explanation: "In a database table, each column is a variable and each row is a record."
  },
  {
    id: "a17q24",
    text: "Which of the following is FALSE about Mother-Daughter databases?",
    options: [
      "Information is collected at various levels",
      "Information of each level is stored in a different database",
      "They can be linked by a common index identifier",
      "Each database cannot have its own unique identifier system"
    ],
    correctAnswer: 3,
    explanation: "In mother-daughter databases, each level has its own unique identifier and also carries the parent's identifier for linking. So the statement that each database cannot have its own unique identifier is false."
  },
  {
    id: "a17q25",
    text: "The original raw data file should be overwritten after cleaning, so that only one version of the dataset exists.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. The raw data file should be preserved unchanged, and cleaning should be done on a copy with documented changes, so that every correction can be traced back."
  },
  {
    id: "a17q26",
    text: "Which of the following is FALSE about data dictionary?",
    options: [
      "It is created after the data entry is started",
      "It contains the values assigned to the variables",
      "It gives a brief description of the variables",
      "It links the variables in the database to the questionnaire"
    ],
    correctAnswer: 0,
    explanation: "The data dictionary is created before data entry, while the database is being designed. It defines variable names, descriptions, values and links to the questionnaire."
  },
  {
    id: "a17q27",
    text: "Identify the type of variable in this question. “Have you ever smoked cigarettes? i. Yes ii. No”",
    options: ["Categorical", "Ordinal", "Continuous", "Discrete"],
    correctAnswer: 0,
    explanation: "Yes/No is a categorical (nominal, binary) variable with unordered categories. It is not ordinal and not numeric."
  },
  {
    id: "a17q28",
    text: "In a study on cancer, the ‘stage of cancer’ was recorded as Stage I, Stage II, Stage III and Stage IV. Which of the following variable types best describes the ‘stage of cancer’?",
    options: ["Nominal", "Ordinal", "Categorical", "Continuous"],
    correctAnswer: 1,
    explanation: "Cancer stages I to IV are ordered categories without equal intervals, so the variable is ordinal. It is technically categorical, but ordinal is the more specific and best answer."
  },
  {
    id: "a17q29",
    text: "In a study with 100 participants, age was recorded as a continuous variable. During data entry, it was seen that age was missing in the forms for 13 people. Which of the following is “TRUE” in this situation?",
    options: [
      "Missing values can be coded as ‘999’",
      "Age variable should be removed from the study",
      "An arbitrary value can be assigned by the data entry operator",
      "Participants with missing age should be removed from the study"
    ],
    correctAnswer: 0,
    explanation: "Missing age should get a code that is impossible as a real age, such as 999, and be declared as missing in the software. Deleting the variable or the participants wastes data, and inventing values is fabrication."
  },
  {
    id: "a17q30",
    text: "State whether true or false. While entering the systolic blood pressure (expected value 60 to 200) value in a database, coding the missing value as 99 may lead to an erroneous result.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. With an expected systolic BP range of 60 to 200, 99 is a plausible reading. Using it as the missing code would distort the results, so a code outside the range should be used."
  },
  {
    id: "a17q31",
    text: "Which of the following is the best practice for back-up of research data?",
    options: ["Keep a single copy on the investigator's laptop", "Keep copies on more than one medium, with at least one stored at a separate secure location", "Back up only once, at the end of the study", "Email the dataset to all team members"],
    correctAnswer: 1,
    explanation: "Regular back-ups on more than one medium, with one copy stored elsewhere, protect against loss from theft, hardware failure or disaster. Emailing data widely risks confidentiality."
  },
  {
    id: "a17q32",
    text: "De-identification of a dataset before sharing means",
    options: ["Deleting all variables with missing values", "Converting continuous variables into categories", "Removing or coding personal identifiers such as name, address and phone number", "Encrypting the data dictionary"],
    correctAnswer: 2,
    explanation: "De-identification removes or replaces direct identifiers so that participants cannot be recognised from the shared data, protecting confidentiality."
  },
  {
    id: "a17q33",
    text: "Which of the following entries would be flagged by a logical (consistency) check during data entry?",
    options: ["A male participant recorded as currently pregnant", "Age recorded as 35 years", "Weight recorded as 60 kg", "Sex recorded as female"],
    correctAnswer: 0,
    explanation: "A consistency check compares related variables. A male recorded as pregnant is logically impossible, even though each value on its own is a legal code."
  },
  {
    id: "a17q34",
    text: "Converting age recorded in completed years into age groups (for example <20, 20-39, 40 and above) to create a new variable is called",
    options: ["Data archiving", "Double data entry", "Data back-up", "Recoding"],
    correctAnswer: 3,
    explanation: "Recoding creates a new variable by grouping or transforming the values of an existing one. The original age variable should be kept alongside the new grouped variable."
  },
  {
    id: "a17q35",
    text: "When a new variable is derived, for example BMI computed from weight and height, the original variables should be retained in the dataset.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Keeping the original variables allows the derived variable to be checked or recalculated, and allows other analyses later."
  },
  {
    id: "a17q36",
    text: "In one variable, the same category has been entered as 'M', 'm', 'Male' and '1'. This indicates a problem of",
    options: ["Missing data", "Inconsistent coding", "Duplicate records", "Data normalization"],
    correctAnswer: 1,
    explanation: "The same category recorded with different codes is inconsistent coding. It is prevented by predefined legal codes and fixed during cleaning by recoding to one value."
  },
  {
    id: "a17q37",
    text: "The same participant ID appearing twice in a single-level database most likely indicates",
    options: ["A range error", "A skip pattern violation", "A duplicate record entry", "An illegal code"],
    correctAnswer: 2,
    explanation: "Each participant should have one record with a unique ID, so a repeated ID usually means the same form was entered twice. Duplicates are checked for and removed during cleaning."
  },
  {
    id: "a17q38",
    text: "After data entry, the original paper case record forms should be",
    options: ["Destroyed once entry is complete", "Stored securely, with restricted access, for the required retention period", "Returned to the participants", "Kept at the homes of the data entry operators"],
    correctAnswer: 1,
    explanation: "Source documents must be kept securely for the required period so that entered data can be verified and audited, while protecting confidentiality."
  },
  {
    id: "a17q39",
    text: "Which practice best protects the confidentiality of participants in a research database?",
    options: ["Printing participants' names on analysis outputs", "Sharing the raw dataset openly online", "Using participants' phone numbers as study IDs", "Keeping names and identifiers in a separate, password-protected file linked only by study ID"],
    correctAnswer: 3,
    explanation: "Separating identifiers from research data and linking them only through a study ID, with restricted access, keeps participants anonymous in the analysis dataset."
  },
  {
    id: "a17q40",
    text: "Data cleaning is complete as soon as data entry is finished, so no further checks are needed before analysis.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. After entry, the data still need checks such as frequency runs, range and consistency checks, and duplicate checks to detect and correct remaining errors before analysis."
  },
  {
    id: "a17q41",
    text: "An aggregated database (for example, number of cases per village) can be broken down again to recover the individual-level records.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Aggregation loses individual-level detail, so it cannot be reversed. That is why data should be stored at the finest level and aggregated only when needed."
  },
  {
    id: "a17q42",
    text: "In a database management system, the dictionary contains information about the following EXCEPT",
    options: ["Questionnaire item", "Variable name", "Variable type", "Number of records"],
    correctAnswer: 3,
    explanation: "A data dictionary describes the variables: the questionnaire item, variable name, type and codes. The number of records belongs to the dataset structure documentation, not the dictionary."
  },
  {
    id: "a17q43",
    text: "A post graduate researcher is designing a data entry module for his thesis project. All the following are essential for maintaining quality of data EXCEPT",
    options: [
      "Use of legal value and range checks",
      "Pilot test of the data entry module before data collection",
      "Use of sample size calculation software",
      "Use of experienced data entry operators"
    ],
    correctAnswer: 2,
    explanation: "Sample size is calculated at the planning stage and has no bearing on data entry quality. Range and legal checks, pilot testing of the entry module and experienced operators all ensure entry quality."
  },
  {
    id: "a17q44",
    text: "Date variables should be entered in a single consistent format (for example DD/MM/YYYY) throughout the database.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Mixing date formats causes misread dates (such as 03/04 read as March or April) and errors when calculating intervals such as age or follow-up time."
  },
  {
    id: "a17q45",
    text: "Which of the following is a disadvantage of the statistical software ‘EpiInfo’?",
    options: [
      "Enables questionnaire design",
      "It is built for WINDOWS OS only",
      "Useful for data entry and validation",
      "Displays location data on map"
    ],
    correctAnswer: 1,
    explanation: "The classic desktop Epi Info runs only on Windows, which is its listed drawback. Form design, data entry with validation and mapping are all advantages. Web and mobile versions now exist, but this is the standard answer."
  },
  {
    id: "a17q46",
    text: "Long-term archiving of a study dataset should include",
    options: ["Only the final analysis output", "Only the blank questionnaire", "The dataset together with its data dictionary and documentation", "Only the statistical software used"],
    correctAnswer: 2,
    explanation: "An archived dataset is only usable in future if its data dictionary and documentation (structure, coding, history, storage) are kept with it."
  },
  {
    id: "a17q47",
    text: "'Database lock' in a study means",
    options: ["No further changes are made to the dataset after cleaning is complete and before the final analysis", "The database is protected by a password", "The data entry screen freezes during a power failure", "The data are deleted after analysis"],
    correctAnswer: 0,
    explanation: "Locking the database after cleaning fixes the final dataset, so the analysis is done on a version that cannot be altered afterwards."
  },
  {
    id: "a17q48",
    text: "Before sharing a study dataset with an external researcher, which of the following is essential?",
    options: ["Nothing, because the data belong to the investigator", "Sharing in line with the consent and ethics approval terms, after removing identifiers", "Sending the original paper forms", "Including participants' names for verification"],
    correctAnswer: 1,
    explanation: "Data can be shared only as permitted by the participants' consent and ethics approval, and identifiers must be removed to protect confidentiality."
  },
  {
    id: "a17q49",
    text: "Running frequency tables of all variables immediately after data entry is useful to",
    options: ["Test hypotheses", "Calculate the sample size", "Obtain informed consent", "Identify out-of-range, illegal or missing values"],
    correctAnswer: 3,
    explanation: "Frequency tables quickly reveal impossible values, unexpected codes and missing data, which can then be checked against the source forms during cleaning."
  },
  {
    id: "a17q50",
    text: "During data cleaning, an adult participant's weight is found entered as 600 kg. What is the appropriate action?",
    options: ["Delete the participant from the dataset", "Replace it with the mean weight", "Check the original form and correct it if it is an entry error; otherwise mark it as missing or query it", "Leave the value as it is"],
    correctAnswer: 2,
    explanation: "Implausible values are verified against the source document. Entry errors are corrected, and if the true value cannot be found it is set to missing rather than invented."
  }
];