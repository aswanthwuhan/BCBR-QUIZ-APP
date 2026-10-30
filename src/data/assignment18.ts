import { Question } from '../types';

export const ASSIGNMENT_18_QUESTIONS: Question[] = [
  {
    id: "a18q1",
    text: "The three stages of data analysis are in the following order",
    options: [
      "Descriptive stage, analytical stage and recoding stage",
      "Recoding stage, descriptive stage and analytical stage",
      "Analytical stage, descriptive stage and recoding stage",
      "Descriptive stage, coding stage, recoding stage"
    ],
    correctAnswer: 1,
    explanation: "Data analysis runs in this order: recoding (preparing variables), then descriptive (describing the population), then analytical (testing associations)."
  },
  {
    id: "a18q2",
    text: "We need to avoid the following while performing data analysis",
    options: [
      "Post hoc analysis",
      "Data drenching",
      "Stratified data analysis",
      "'a' and 'b'"
    ],
    correctAnswer: 3,
    explanation: "Post hoc analysis and data drenching (fishing for significant results) produce spurious findings and inflate type I error, so both should be avoided. Stratified analysis is a legitimate method for checking confounding."
  },
  {
    id: "a18q3",
    text: "In the descriptive stage of analysis, we use logistic regression models",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Logistic regression is a multivariate method used in the analytical stage. The descriptive stage uses frequencies, proportions, means and rates."
  },
  {
    id: "a18q4",
    text: "'Epi-Info' is a software used for data entry and data analysis",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Epi Info is free CDC software that supports form design, data entry with validation, and data analysis."
  },
  {
    id: "a18q5",
    text: "In analytical stage of data analysis, we perform the following in order",
    options: [
      "Stratified analysis, univariate analysis and multivariate analysis",
      "Univariate analysis, stratified analysis and multivariate analysis",
      "Multivariate analysis, univariate analysis and stratified analysis",
      "Frequency analysis and univariate analysis"
    ],
    correctAnswer: 1,
    explanation: "The analytical stage moves from univariate (crude) analysis to stratified analysis for confounding and effect modification, and then to multivariate models that adjust for several factors."
  },
  {
    id: "a18q6",
    text: "Among the seven steps of data analysis strategy, the sequence of data analysis is as follows:\nA. Conduct advanced analysis\nB. Identify main variables\nC. Become familiar with the data\nD. Identify study type\nE. Examine outcome/exposure association\nF. Characterize study population\nG. Create additional two-way tables",
    options: [
      "A, B, C, D, E, F, G",
      "G, E, F, D, A, B, C",
      "D, B, C, F, E, G, A",
      "E, F, G, C, A, B, D"
    ],
    correctAnswer: 2,
    explanation: "The analysis strategy goes: identify the study type, identify the main variables, get familiar with the data, characterize the population, examine the exposure-outcome association, create additional two-way tables, and finally conduct advanced analysis."
  },
  {
    id: "a18q7",
    text: "In case of descriptive studies, which of the following is wrong?",
    options: [
      "We describe the study outcome for 1 group",
      "We compare the study outcome for 2 groups",
      "We calculate the incidence for cohort or surveillance data",
      "We calculate prevalence for cross sectional survey"
    ],
    correctAnswer: 1,
    explanation: "Descriptive studies describe the outcome in one group, for example incidence from cohorts or prevalence from surveys. Comparing two groups is the job of analytical studies, so that statement is wrong."
  },
  {
    id: "a18q8",
    text: "If we are doing an analytical study and the study outcome is of acute nature and rare condition what is the appropriate (i) study design and (ii) measure of association?",
    options: [
      "Cohort study - Relative risk",
      "Case-control study - Odds ratio",
      "Cross-sectional study - Prevalence ratio",
      "Surveillance - Incidence"
    ],
    correctAnswer: 1,
    explanation: "For a rare outcome, a case-control study is the efficient choice because it starts from cases that already exist. Incidence cannot be measured in this design, so the measure of association is the odds ratio."
  },
  {
    id: "a18q9",
    text: "Analysis plan depends on",
    options: [
      "Objectives of the study",
      "Budget",
      "Study type (Descriptive or analytical)",
      "'a' and 'c'"
    ],
    correctAnswer: 3,
    explanation: "The analysis plan follows from the study objectives and the study type (descriptive or analytical). Budget affects logistics, not which statistical analysis is appropriate."
  },
  {
    id: "a18q10",
    text: "Use of spreadsheets, such as Excel, should be avoided for data management and analysis",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Spreadsheets lack validation checks and an audit trail, and sorting can misalign records. Dedicated software such as Epi Info, EpiData or REDCap is preferred."
  },
  {
    id: "a18q11",
    text: "Multivariate regression models are used during the descriptive stage of analysis",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. The descriptive stage uses frequencies, proportions and means. Multivariate regression belongs to the analytical stage, where it adjusts for confounders."
  },
  {
    id: "a18q12",
    text: "“Epi-Info” is a software that can be used to create data collection instrument format",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Epi Info, free software from the CDC, can design data collection forms and questionnaires with validation checks, and can also be used for data entry and analysis."
  },
  {
    id: "a18q13",
    text: "In a research study the analysis plan depends on",
    options: [
      "Objectives and study type",
      "Allocated budget",
      "Availability of the statistician",
      "Existing time for analysis"
    ],
    correctAnswer: 0,
    explanation: "The analysis plan is decided by the study objectives and the study type or design. Budget, the statistician's availability and time are practical constraints, not determinants."
  },
  {
    id: "a18q14",
    text: "At the time of data cleaning, which of the following is not done?",
    options: [
      "Checking and removing duplicates",
      "Dealing with missing observations",
      "Calculating strength of association",
      "Checking range and legal values"
    ],
    correctAnswer: 2,
    explanation: "Data cleaning covers removing duplicates, handling missing values and range or legal-value checks. Strength of association is calculated later, during the analytical stage."
  },
  {
    id: "a18q15",
    text: "To describe the study population characteristics we need to",
    options: [
      "Calculate the frequency distribution",
      "Calculate measures of association",
      "Look for correlation between variables",
      "perform multivariable regression"
    ],
    correctAnswer: 0,
    explanation: "The study population is described with descriptive statistics such as frequency distributions and percentages. Association, correlation and regression are analytical methods."
  },
  {
    id: "a18q16",
    text: "While examining the association between exposure and outcome based on a priori hypothesis, we compare frequency of exposures between cases and controls using appropriate measure of association",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A case-control study tests a pre-stated hypothesis by comparing how often the exposure occurred in cases and in controls, using the odds ratio."
  },
  {
    id: "a18q17",
    text: "If we are doing an analytical study and the study outcome is of acute nature and a frequent condition what is the appropriate (i) study design and (ii) measure of association?",
    options: [
      "Cohort study - relative risk",
      "Case-control study – odds ratio",
      "Cross sectional study - Prevalence",
      "Surveillance - Incidence"
    ],
    correctAnswer: 0,
    explanation: "For a frequent, acute outcome, enough cases develop during a feasible follow-up, so a cohort study can measure incidence and calculate the relative risk."
  },
  {
    id: "a18q18",
    text: "Which of the following statements are CORRECT",
    options: [
      "Plan for data analysis is made at the end of the study",
      "Recoding can be done for key variables",
      "Multivariate analysis is done before doing a univariate analysis",
      "Data drenching is acceptable"
    ],
    correctAnswer: 1,
    explanation: "Recoding key variables (for example grouping age) is acceptable. The analysis plan is made in advance, univariate analysis comes before multivariate analysis, and data dredging is unacceptable."
  },
  {
    id: "a18q19",
    text: "Which of the following is the correct sequence for data analysis?",
    options: [
      "i. Multivariate analysis, ii. Recoding, iii. Measures of association, iv. Frequency distribution",
      "i. Multivariate analysis, iii. Measures of association, iv. Frequency distribution, ii. Recoding",
      "ii. Recoding, iv. Frequency distribution, iii. Measures of association, i. Multivariate analysis",
      "iii. Measures of association, iv. Frequency distribution, i. Multivariate analysis, ii. Recoding"
    ],
    correctAnswer: 2,
    explanation: "The correct order is to recode variables, describe them with frequency distributions, calculate measures of association, and finally adjust with multivariate analysis, moving from simple to complex."
  },
  {
    id: "a18q20",
    text: "Spreadsheets are ideal tools for data entry and analysis",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Spreadsheets have no validation or audit trail and are prone to errors. Database and statistical software is preferred for research data entry and analysis."
  },
  {
    id: "a18q21",
    text: "All the following are done to characterize the study population EXCEPT",
    options: [
      "Provide frequency distribution of age",
      "Provide percentages of gender",
      "Compare baseline characteristics of study groups",
      "Conduct logistic regression analysis"
    ],
    correctAnswer: 3,
    explanation: "Frequencies, percentages and baseline comparisons describe the study population. Logistic regression is an analytical method for examining and adjusting associations, not for describing the population."
  },
  {
    id: "a18q22",
    text: "Which of the following is the appropriate measure of association in a case-control study?",
    options: ["Odds ratio", "Prevalence ratio", "Relative risk", "Incidence"],
    correctAnswer: 0,
    explanation: "Case-control studies sample participants by outcome, so incidence cannot be measured. The odds ratio, $OR = ad/bc$, compares the odds of exposure in cases and controls."
  },
  {
    id: "a18q23",
    text: "Prevalence ratio is one of the measures of association calculated in an analytical cross-sectional study.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. An analytical cross-sectional study measures prevalence in exposed and unexposed groups, so the prevalence ratio (or prevalence odds ratio) is its measure of association."
  },
  {
    id: "a18q24",
    text: "Hypothesis testing is conducted in an analytical epidemiological study.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Analytical studies include a comparison group and are designed to test hypotheses about exposure-outcome associations. Descriptive studies generate hypotheses."
  },
  {
    id: "a18q25",
    text: "Identify the correct sequence in the steps of data analysis.",
    options: [
      "i, ii, iii, iv",
      "i. Identify variables, ii. Check data, iv. Examine population, iii. Examine association",
      "ii, iv, i, iii",
      "iii, i, ii, iv"
    ],
    correctAnswer: 1,
    explanation: "The correct sequence is to identify the variables, check and clean the data, describe the population, and then examine associations."
  },
  {
    id: "a18q26",
    text: "Which of the following is NOT done during the analytic stage of data analysis?",
    options: [
      "Calculating frequency of the outcome in one group",
      "Calculating frequency of the outcome by age and gender",
      "Calculating odds ratio between exposure and outcome",
      "Applying logistic regression"
    ],
    correctAnswer: 0,
    explanation: "The frequency of the outcome in a single group, with no comparison, is a descriptive statistic. The analytic stage involves comparisons, odds ratios and regression."
  },
  {
    id: "a18q27",
    text: "Relative risk is calculated in which of the following study designs?",
    options: ["Cross-sectional study", "Cohort study", "Case study", "Case control study"],
    correctAnswer: 1,
    explanation: "Relative risk needs incidence in exposed and unexposed groups, which only a cohort study (following people over time) provides."
  },
  {
    id: "a18q28",
    text: "Risk ratio can be calculated in a descriptive cross-sectional study.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. A descriptive cross-sectional study only estimates prevalence and has no comparison group. A risk ratio also needs incidence, which requires a cohort design."
  },
  {
    id: "a18q29",
    text: "In a case-control study to examine the association between mobile phone use and acoustic neuroma, 24 cases and 72 hospital controls were recruited. Exposure was present among 16 cases and 18 controls. Calculate the measure of association.",
    options: ["Odds ratio 1.5", "Relative risk 1.5", "Odds ratio 6", "Relative risk 6"],
    correctAnswer: 2,
    explanation: "The cells are a=16, b=18, c=8 and d=54. For a case-control study, $OR = (16 \\times 54)/(18 \\times 8) = 6$. Relative risk is not valid in this design."
  },
  {
    id: "a18q30",
    text: "In a case control conducted taking 100 autism children and 200 normal children, it was found that 90 autism children and 60 normal children had a history of instrumental delivery. Calculate the measure of association.",
    options: ["12", "21", "6", "9"],
    correctAnswer: 1,
    explanation: "The cells are a=90, b=60, c=10 and d=140. The odds ratio is $(90 \\times 140)/(60 \\times 10) = 21$."
  },
  {
    id: "a18q31",
    text: "All the following are done to characterize the study population EXCEPT",
    options: [
      "Provide frequency distribution of age",
      "Provide percentages of gender",
      "Compare baseline characteristics of study groups",
      "Conduct logistic regression analysis"
    ],
    correctAnswer: 3,
    explanation: "Frequencies, percentages and baseline comparisons describe the study population. Logistic regression is an analytical method for examining and adjusting associations, not for describing the population."
  },
  {
    id: "a18q32",
    text: "Which of the following is the appropriate measure of association in a case-control study?",
    options: ["Odds ratio", "Prevalence ratio", "Relative risk", "Incidence"],
    correctAnswer: 0,
    explanation: "Case-control studies sample participants by outcome, so incidence cannot be measured. The odds ratio, $OR = ad/bc$, compares the odds of exposure in cases and controls."
  },
  {
    id: "a18q33",
    text: "Prevalence ratio is one of the measures of association calculated in an analytical cross-sectional study.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. An analytical cross-sectional study measures prevalence in exposed and unexposed groups, so the prevalence ratio (or prevalence odds ratio) is its measure of association."
  },
  {
    id: "a18q34",
    text: "Hypothesis testing is conducted in an analytical epidemiological study.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Analytical studies include a comparison group and are designed to test hypotheses about exposure-outcome associations. Descriptive studies generate hypotheses."
  },
  {
    id: "a18q35",
    text: "Identify the correct sequence in the steps of data analysis.",
    options: [
      "i, ii, iii, iv",
      "i, ii, iv, iii",
      "ii, iv, i, iii",
      "iii, i, ii, iv"
    ],
    correctAnswer: 1,
    explanation: "The correct sequence is to identify the variables, check and clean the data, describe the population, and then examine associations."
  },
  {
    id: "a18q36",
    text: "Which of the following is NOT done during the analytic stage of data analysis?",
    options: [
      "Calculating frequency of the outcome in one group",
      "Calculating frequency of the outcome by age and gender",
      "Calculating odds ratio between exposure and outcome",
      "Applying logistic regression"
    ],
    correctAnswer: 0,
    explanation: "The frequency of the outcome in a single group, with no comparison, is a descriptive statistic. The analytic stage involves comparisons, odds ratios and regression."
  },
  {
    id: "a18q37",
    text: "Relative risk is calculated in which of the following study designs?",
    options: ["Cross-sectional study", "Cohort study", "Case study", "Case control study"],
    correctAnswer: 1,
    explanation: "Relative risk needs incidence in exposed and unexposed groups, which only a cohort study (following people over time) provides."
  },
  {
    id: "a18q38",
    text: "Risk ratio can be calculated in a descriptive cross-sectional study.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. A descriptive cross-sectional study only estimates prevalence and has no comparison group. A risk ratio also needs incidence, which requires a cohort design."
  },
  {
    id: "a18q39",
    text: "In a case-control study to examine the association between mobile phone use and acoustic neuroma, exposure was present among 16 cases and 18 controls out of 24 cases and 72 controls. Calculate the measure of association.",
    options: ["Odds ratio 1.5", "Relative risk 1.5", "Odds ratio 6", "Relative risk 6"],
    correctAnswer: 2,
    explanation: "There are 8 unexposed cases (24−16) and 54 unexposed controls (72−18). The odds ratio is $(16 \\times 54)/(18 \\times 8) = 6$."
  },
  {
    id: "a18q40",
    text: "In a case control conducted taking 100 autism children and 200 normal children, 90 autism children and 60 normal children had instrumental delivery history. Calculate the association.",
    options: ["12", "21", "6", "9"],
    correctAnswer: 1,
    explanation: "Using a=90, b=60, c=10 and d=140, the odds ratio is $(90 \\times 140)/(60 \\times 10) = 21$."
  },
  {
    id: "a18q41",
    text: "The plan for data analysis depends on _____________.",
    options: [
      "Objective of the study",
      "Study design",
      "Type of outcome variable",
      "All of these"
    ],
    correctAnswer: 3,
    explanation: "The analysis plan depends on the study objective, the study design and the type of outcome variable (categorical or continuous), so all of these apply."
  },
  {
    id: "a18q42",
    text: "Association between cervical cancer and use of Intra uterine contraceptive device is analysed separately among persons with multiple sexual partners and persons with single sexual partner. This analysis is an example of _______________.",
    options: ["Multivariable adjusted analysis", "Stratified analysis", "Regression analysis", "Dose-response analysis"],
    correctAnswer: 1,
    explanation: "Analyzing the association separately within subgroups of a third variable (number of sexual partners) is stratified analysis. It is used to assess confounding or effect modification."
  },
  {
    id: "a18q43",
    text: "The first important step to be done before data analysis is to______________.",
    options: [
      "Identify main variables",
      "Become familiar with the data",
      "Identify the study design",
      "Examine the outcome/exposure analysis"
    ],
    correctAnswer: 2,
    explanation: "The study design determines the measures of association and the analysis methods, so identifying it is the first step before any data analysis."
  },
  {
    id: "a18q44",
    text: "Analytical study is used for ___________.",
    options: [
      "Testing of hypothesis",
      "Estimation of a parameter",
      "Hypothesis formulation",
      "Describing a population"
    ],
    correctAnswer: 0,
    explanation: "Analytical studies compare groups to test hypotheses about associations. Describing populations, estimating parameters and generating hypotheses are the roles of descriptive studies."
  },
  {
    id: "a18q45",
    text: "Prevalence ratio is the preferred measure of association in _______________.",
    options: [
      "Analytical cross-sectional study",
      "Cohort study",
      "Case-control study",
      "Descriptive cross-sectional study"
    ],
    correctAnswer: 0,
    explanation: "Cross-sectional studies measure prevalence, so when exposed and unexposed groups are compared in an analytical cross-sectional study, the prevalence ratio is the preferred measure."
  },
  {
    id: "a18q46",
    text: "What is the correct sequence of data analysis strategy?",
    options: [
      "i, v, iii, iv, ii",
      "v. Identify design, iii. Identify variables, i. Characterize population, iv. Two-way tables, ii. Stratified analysis",
      "v, i, iii, ii, iv",
      "iii, v, i, ii, iv"
    ],
    correctAnswer: 1,
    explanation: "The sequence is: identify the design, identify the variables, characterize the population, build two-way tables for crude associations, and then do stratified analysis."
  },
  {
    id: "a18q47",
    text: "The following are true about data analysis EXCEPT",
    options: [
      "Data analysis plan should be prepared in advance",
      "Post hoc analysis which was not part of the original plan should be avoided",
      "Recoding of data is done following descriptive and analytical data analysis",
      "Multivariable analysis is done to adjust for potential confounders"
    ],
    correctAnswer: 2,
    explanation: "This statement is false because recoding is a preparatory step done before descriptive and analytical analysis, not after. The other statements are correct."
  },
  {
    id: "a18q48",
    text: "The preferred measure of association for a case-control study is _____________.",
    options: ["Risk ratio", "Odds ratio", "Prevalence ratio", "Prevalence odds ratio"],
    correctAnswer: 1,
    explanation: "Case-control studies cannot measure risk, so the odds ratio is the preferred measure of association. Risk ratio belongs to cohort studies and prevalence ratio to cross-sectional studies."
  },
  {
    id: "a18q49",
    text: "Spreadsheets are preferred tools for data management and analysis of large quantity of data.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. With large datasets, spreadsheets are error-prone and lack validation and an audit trail. Database or statistical software is preferred."
  },
  {
    id: "a18q50",
    text: "In a cohort study to examine the association between use of Oral contraceptive pills (OCP) and development of breast cancer, 35 out of 8,000 women who used OCP and 33 out of the 22,000 women who did not use OCP had developed breast cancer over 10 years of follow-up. Calculate the measure of association.",
    options: ["1.3", "1.5", "1.8", "2.9"],
    correctAnswer: 3,
    explanation: "In a cohort study, $RR = (35/8000)/(33/22000) = 0.004375/0.0015 \\approx 2.9$."
  }
];