import { Question } from '../types';

export const ASSIGNMENT_5_QUESTIONS: Question[] = [
  {
    id: "a5q1",
    text: "Study design(s) useful for describing uncommon clinical manifestations",
    options: ["Case reports", "Case series", "Both 'a' and 'b'", "Ecological study"],
    correctAnswer: 2,
    explanation: "Both case reports (one patient) and case series (a group of patients) are descriptive designs used to describe unusual or uncommon clinical manifestations. Ecological studies use group-level data."
  },
  {
    id: "a5q2",
    text: "Cross-sectional studies are used to",
    options: ["Estimate prevalence", "Generate hypotheses", "Describe trends", "All of the above"],
    correctAnswer: 3,
    explanation: "Cross-sectional studies estimate prevalence, generate hypotheses, and when repeated over time can describe trends."
  },
  {
    id: "a5q3",
    text: "In a cross-sectional study, we can observe one or more outcomes",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A single cross-sectional survey can measure several outcomes and exposures at the same time in the same individuals."
  },
  {
    id: "a5q4",
    text: "Which one of the following is useful to measure the burden or magnitude of a disease or risk factor?",
    options: ["Case-control study", "Cross-sectional study", "Case report", "Case series"],
    correctAnswer: 1,
    explanation: "Burden or magnitude is measured as prevalence, which is estimated by a cross-sectional study of a defined population. Case reports, series and case-control studies lack a population denominator."
  },
  {
    id: "a5q5",
    text: "Which of the following is wrong about descriptive study designs?",
    options: ["Describe the study outcome for 1 group", "Compare the study outcomes for 2 group", "Calculate the incidence for surveillance data", "Calculate prevalence for cross-sectional study"],
    correctAnswer: 1,
    explanation: "Descriptive designs describe outcomes in one group and compute incidence or prevalence. Comparing outcomes between two groups is a feature of analytical studies."
  },
  {
    id: "a5q6",
    text: "Descriptive epidemiology study designs can answer all of the following questions EXCEPT:",
    options: ["Who", "When", "Where", "Why"],
    correctAnswer: 3,
    explanation: "Descriptive epidemiology answers who, where and when (person, place, time). 'Why' (causes) requires analytical studies with comparison groups."
  },
  {
    id: "a5q7",
    text: "Which one of the following study designs does not employ comparison groups to answer the primary study objectives?",
    options: ["Cross-sectional study", "Cohort study", "Ecological study", "Clinical trials"],
    correctAnswer: 0,
    explanation: "A (descriptive) cross-sectional study estimates prevalence in one population without a comparison group. Cohort, ecological and trial designs all compare groups."
  },
  {
    id: "a5q8",
    text: "Unit of observation in the cross-sectional study is",
    options: ["Individual", "Group", "Both 'a' and 'b'", "None of the above"],
    correctAnswer: 0,
    explanation: "In a cross-sectional study, data are collected from each individual, so the individual is the unit of observation. Groups are the unit in ecological studies."
  },
  {
    id: "a5q9",
    text: "Case reports can include presentation of",
    options: ["Unique features/symptoms of a disease", "Rare manifestation of common disease", "New or unfamiliar diseases", "All of the above"],
    correctAnswer: 3,
    explanation: "Case reports can describe unique features of a disease, rare manifestations of common diseases, and new or unfamiliar diseases, so all options are correct."
  },
  {
    id: "a5q10",
    text: "Advantage of the ecological study is",
    options: ["Relate rate of disease and exposure", "Useful to test hypothesis", "Useful to study rare diseases", "All of the above"],
    correctAnswer: 0,
    explanation: "Ecological studies relate group-level rates of disease to frequency of exposure. They generate rather than test hypotheses, and rare diseases are better studied by case-control designs."
  },
  {
    id: "a5q11",
    text: "A researcher can describe the study population in terms of all the following in a descriptive study EXCEPT",
    options: ["Population in terms of age, gender", "Period in which the study was conducted", "Risk factors of the disease", "Place distribution of the cases"],
    correctAnswer: 2,
    explanation: "Descriptive studies describe person (age, gender), place and time. Identifying risk factors needs comparisons, which is the role of analytical studies."
  },
  {
    id: "a5q12",
    text: "The following study design provides group exposure and group response/outcome without knowing the individual exposure and response for a specific health problem",
    options: ["Ecological study", "Cross sectional survey", "Case report", "Case series"],
    correctAnswer: 0,
    explanation: "Ecological studies use group-level exposure and outcome data without knowing individual exposure and response, which risks the ecological fallacy."
  },
  {
    id: "a5q13",
    text: "Which of the following study design will be helpful if the department of health wants to know the burden of a particular disease?",
    options: ["Ecological study", "Cross sectional survey", "Case series", "Case report"],
    correctAnswer: 1,
    explanation: "Disease burden is measured as prevalence, which a cross-sectional survey of the population estimates. Ecological studies, case series and case reports cannot measure burden."
  },
  {
    id: "a5q14",
    text: "A clinician comes across an unusual presentation of a particular neurological disorder. If the clinician describes this single case in detail and publishes the same in a journal, then it will be called",
    options: ["Analytical study", "Case report", "Cross sectional survey", "Ecological study"],
    correctAnswer: 1,
    explanation: "A detailed published description of a single patient with an unusual presentation is a case report."
  },
  {
    id: "a5q15",
    text: "The advantage of an ecological study is that",
    options: ["It is analytical in nature", "It will cover individual level information on risk factors and disease", "It will be useful to test hypotheses", "It will be useful to generate hypotheses"],
    correctAnswer: 3,
    explanation: "Ecological studies use aggregate data and are useful for generating hypotheses. They lack individual-level data and cannot reliably test hypotheses."
  },
  {
    id: "a5q16",
    text: "In a tertiary care hospital, a surgeon collected information on quality of life and outcome among a small group of (about 15) post-operative patients after using a novel surgical device. But this is not sufficient to establish the efficacy of the surgical device because",
    options: ["There is no comparison group", "There is no information of risk factors", "We do not have details of the outcome", "We do not have individual level data"],
    correctAnswer: 0,
    explanation: "Without a comparison (control) group, outcomes cannot be attributed to the device rather than natural course or selection, so efficacy cannot be established."
  },
  {
    id: "a5q17",
    text: "Population census is a",
    options: ["Cross sectional survey", "Ecological study", "Analytical study", "None of the above"],
    correctAnswer: 0,
    explanation: "A census collects data from every individual in a population at one point in time, which makes it a cross-sectional survey."
  },
  {
    id: "a5q18",
    text: "One of the major limitations of a cross-sectional study is that",
    options: ["It is time consuming", "It has lower validity", "It does not establish disease etiology", "It requires a large sample size"],
    correctAnswer: 2,
    explanation: "Because exposure and outcome are measured simultaneously, temporality cannot be shown, so a cross-sectional study cannot establish disease etiology. It is usually quick and inexpensive."
  },
  {
    id: "a5q19",
    text: "Characteristic of a cross sectional study is that",
    options: ["We can calculate the incidence of a disease", "We can test a hypotheses", "It is difficult to conduct", "Exposure and outcome are assessed at the same time"],
    correctAnswer: 3,
    explanation: "In a cross-sectional study exposure and outcome are assessed at the same time. It gives prevalence, not incidence, and is relatively easy to conduct."
  },
  {
    id: "a5q20",
    text: "If a researcher wishes to estimate the incidence of Myocardial infarction cases among a group of women using oral contraceptive pills followed up for 10year, the researcher has to carry out",
    options: ["Case series", "Cohort study", "Cross sectional study", "Ecological study"],
    correctAnswer: 1,
    explanation: "Estimating incidence requires following a disease-free group over time and counting new cases, which is a cohort study."
  },
  {
    id: "a5q21",
    text: "Case series are useful",
    options: ["To estimate burden of a disease", "To determine risk factors of a disease", "To determine efficacy of a new drug", "To describe uncommon clinical manifestation"],
    correctAnswer: 3,
    explanation: "Case series describe a group of patients with similar, often uncommon, clinical manifestations. Burden, risk factors and drug efficacy need surveys, analytical studies and trials."
  },
  {
    id: "a5q22",
    text: "All the following are true about cross-sectional survey, EXCEPT",
    options: ["Individual is the unit of observation", "Involves only incident cases", "Estimate the burden of a disease", "It can be used to generate hypothesis"],
    correctAnswer: 1,
    explanation: "Cross-sectional surveys include all existing (prevalent) cases, not only incident cases. The other statements are true."
  },
  {
    id: "a5q23",
    text: "A detailed presentation of a single case which is rare and unfamiliar, is called",
    options: ["Case report", "Case series", "Ecological study", "Cross-sectional study"],
    correctAnswer: 0,
    explanation: "A detailed presentation of a single rare or unfamiliar case is a case report; several similar cases form a case series."
  },
  {
    id: "a5q24",
    text: "Which of the following is INCORRECT about ecological study?",
    options: ["It relates the rate of disease and frequency of exposure", "It is an example of observational study", "It uses individual level data", "It helps in generating hypothesis"],
    correctAnswer: 2,
    explanation: "Ecological studies use group-level (aggregate) data, not individual-level data. They are observational, relate disease rates to exposure and generate hypotheses."
  },
  {
    id: "a5q25",
    text: "Which of the following is NOT applicable in a case study?",
    options: ["Clinical features", "Laboratory parameters", "Socio-demographic background", "Incidence"],
    correctAnswer: 3,
    explanation: "A case study describes one patient's clinical, laboratory and socio-demographic features. Incidence needs a population at risk followed over time, so it cannot be calculated."
  },
  {
    id: "a5q26",
    text: "To determine the association between air pollution and male infertility, data on air quality index and prevalence of male infertility was collected for 183 countries for the year 2019. What best describes the study?",
    options: ["Case report", "Case series", "Ecological study", "Cross-sectional study"],
    correctAnswer: 2,
    explanation: "Exposure (air quality) and outcome (infertility prevalence) are aggregate measures with countries as the units of analysis, which defines an ecological study."
  },
  {
    id: "a5q27",
    text: "In a medical journal, 18 cases of Creutzfeldt Jakob disease were reported from a tertiary care hospital in Sikkim. The authors of the paper gave a description of the socio-demographic, clinical, and laboratory features of the 18 patients. What best describes this study design?",
    options: ["Case study", "Case series", "Case control study", "Ecological study"],
    correctAnswer: 1,
    explanation: "A description of 18 patients with the same disease, without a comparison group, is a case series. A case study involves only one patient."
  },
  {
    id: "a5q28",
    text: "Which of the following is FALSE about cross-sectional studies?",
    options: ["Can be used to generate hypothesis", "Can be used to establish temporality of association", "Can be used to estimate disease burden", "Can be used to identify factors associated with outcome"],
    correctAnswer: 1,
    explanation: "Exposure and outcome are measured at the same time, so a cross-sectional study cannot establish temporality. It can estimate burden, generate hypotheses and identify associated factors."
  },
  {
    id: "a5q29",
    text: "State whether true or false. Descriptive cross-sectional study does not have a comparison group.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A descriptive cross-sectional study only describes a single population without comparison groups; analytical cross-sectional studies compare subgroups."
  },
  {
    id: "a5q30",
    text: "Which of the following studies can be used to identify the factors associated with an outcome?",
    options: ["Descriptive cross-sectional study", "Analytical cross-sectional study", "Case study", "Case series"],
    correctAnswer: 1,
    explanation: "An analytical cross-sectional study compares subgroups to identify factors associated with an outcome. Descriptive surveys, case studies and case series have no comparison."
  },
  {
    id: "a5q31",
    text: "Case series are useful-",
    options: ["To estimate burden of a disease", "To determine risk factor of a disease", "To determine efficacy of a new drug", "To describe uncommon clinical manifestation"],
    correctAnswer: 3,
    explanation: "Case series are descriptive and useful to describe uncommon clinical manifestations. They cannot estimate burden, identify risk factors or prove drug efficacy."
  },
  {
    id: "a5q32",
    text: "All the following are true about cross-sectional survey, EXCEPT",
    options: ["Individual is the unit of observation", "Involves only incident cases", "Estimate the burden of a disease", "It can be used to generate hypotheses"],
    correctAnswer: 1,
    explanation: "Cross-sectional surveys include all existing (prevalent) cases, not only incident cases. The other statements are true."
  },
  {
    id: "a5q33",
    text: "A detailed presentation of a single case which is rare and unfamiliar, is called",
    options: ["Case report", "Case series", "Ecological study", "Cross-sectional study"],
    correctAnswer: 0,
    explanation: "A detailed presentation of a single rare or unfamiliar case is a case report; several similar cases form a case series."
  },
  {
    id: "a5q34",
    text: "Which of the following is INCORRECT about ecological study?",
    options: ["It relates the rate of disease and frequency of exposure", "It is an example of observational study", "It uses individual level data", "It helps in generating hypothesis"],
    correctAnswer: 2,
    explanation: "Ecological studies use group-level (aggregate) data, not individual-level data. They are observational, relate disease rates to exposure and generate hypotheses."
  },
  {
    id: "a5q35",
    text: "Which of the following is NOT applicable in a case study?",
    options: ["Clinical features", "Laboratory parameters", "Socio-demographic", "Incidence"],
    correctAnswer: 3,
    explanation: "A case study describes one patient's clinical, laboratory and socio-demographic features. Incidence needs a population at risk followed over time, so it cannot be calculated."
  },
  {
    id: "a5q36",
    text: "To determine the association between air pollution and male infertility, data on air quality for 183 countries for the year 2019. What best describes the study?",
    options: ["Case report", "Case series", "Ecological study", "Cross-sectional study"],
    correctAnswer: 2,
    explanation: "Country-level (aggregate) data on air quality and infertility make this an ecological study. The stem appears truncated, but the intended answer is ecological study."
  },
  {
    id: "a5q37",
    text: "In a medical journal, 18 cases of Creutzfeldt Jakob disease were reported from a tertiary care hospital in Sikkim. The authors of the paper gave a description of the socio-demographic, clinical, and laboratory features of the 18 patients. What best describes this study design?",
    options: ["Case study", "Case series", "Case control study", "Ecological study"],
    correctAnswer: 1,
    explanation: "A description of 18 patients with the same disease, without a comparison group, is a case series. A case study involves only one patient."
  },
  {
    id: "a5q38",
    text: "Which of the following is FALSE about cross-sectional studies?",
    options: ["Can be used to generate hypothesis", "Can be used to establish temporality of association", "Can be used to estimate disease burden", "Can be used to identify factors associated with outcome"],
    correctAnswer: 1,
    explanation: "Exposure and outcome are measured at the same time, so a cross-sectional study cannot establish temporality. It can estimate burden, generate hypotheses and identify associated factors."
  },
  {
    id: "a5q39",
    text: "Descriptive cross-sectional study does not have a comparison group",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A descriptive cross-sectional study has no comparison group; comparing subgroups makes it analytical."
  },
  {
    id: "a5q40",
    text: "Which of the following studies can be used to identify the factors associated with an outcome?",
    options: ["Descriptive cross-sectional study", "Analytical cross-sectional study", "Case study", "Case series"],
    correctAnswer: 1,
    explanation: "An analytical cross-sectional study compares subgroups to identify factors associated with an outcome. Descriptive surveys, case studies and case series have no comparison."
  },
  {
    id: "a5q41",
    text: "Which of the following study design is useful to describe uncommon clinical manifestation of a particular disease?",
    options: ["Case series", "Cross sectional study", "Ecological study", "Case control study"],
    correctAnswer: 0,
    explanation: "A case series describes a group of patients with an uncommon clinical manifestation of a disease. Other designs measure burden, correlations or risk factors."
  },
  {
    id: "a5q42",
    text: "State whether true or false. Individual is the unit of observation in an ecological study.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. In an ecological study the unit of observation is a group or population (country, district), not the individual, so associations are measured using aggregate data."
  },
  {
    id: "a5q43",
    text: "State whether true or false. Descriptive cross-sectional studies are interventional in nature.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Descriptive cross-sectional studies are observational. They measure exposure and outcome at one point in time to estimate prevalence, and the investigator does not assign any intervention."
  },
  {
    id: "a5q44",
    text: "Population level information is required in which of the following study designs?",
    options: ["Case control study", "Ecological study", "Randomized control trial", "Cohort study"],
    correctAnswer: 1,
    explanation: "Ecological study. It uses aggregate, population-level data on both exposure and outcome, whereas case-control, cohort and RCT designs collect data on individuals."
  },
  {
    id: "a5q45",
    text: "Which of the following is used to provide information on a patient's response to an innovative intervention?",
    options: ["Case study", "Cross sectional study", "Case control study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Case study. A case report describes a single patient in detail and is the usual way to report an unusual presentation or a patient's response to a new or innovative treatment."
  },
  {
    id: "a5q46",
    text: "Findings from which of the following study designs is LEAST generalizable to the population?",
    options: ["Case series", "Cross sectional study", "Case control study", "Cohort study"],
    correctAnswer: 0,
    explanation: "Case series. It describes a small, selected group of patients without a comparison group, usually from a single centre, so its findings are the least generalizable to the population."
  },
  {
    id: "a5q47",
    text: "Which of the following statement is (are) referring an ecological study?",
    options: ["Individual is the unit of study", "Relate the exposure and outcome at the population level", "It is a detail description of a rare clinical condition of a specific disease", "It is an interventional study"],
    correctAnswer: 1,
    explanation: "Ecological studies relate exposure and outcome at the population level using group data. They are observational, the unit is the group rather than the individual, and they are not detailed descriptions of rare cases."
  },
  {
    id: "a5q48",
    text: "Population census can be classified under which of the following study design?",
    options: ["Cohort study", "Case control study", "Cross sectional study", "Ecological study"],
    correctAnswer: 2,
    explanation: "Cross sectional study. A census measures the whole population at a single point in time, making it a large descriptive cross-sectional survey."
  },
  {
    id: "a5q49",
    text: "Estimating the disease burden will be helpful in which of the following activity?",
    options: ["To develop the treatment protocol", "To know the causal relationship between an exposure and an outcome", "To plan for resource allocation", "To test the hypothesis of the study"],
    correctAnswer: 2,
    explanation: "Knowing the disease burden (prevalence, incidence, mortality, DALYs) shows how big a health problem is, which helps planners prioritize and allocate resources. Causation and hypothesis testing require analytical studies."
  },
  {
    id: "a5q50",
    text: "Which of the following is a major limitation of a cross-sectional study compared to a cohort study?",
    options: ["Exposure and outcome are examined at the same time", "High attrition rate", "Expensive to conduct", "It takes a long time to complete"],
    correctAnswer: 0,
    explanation: "In a cross-sectional study exposure and outcome are measured at the same time, so temporality cannot be established. High attrition, high cost and long duration are limitations of cohort studies."
  }
];