import { Question } from '../types';

export const ASSIGNMENT_8_QUESTIONS: Question[] = [
  {
    id: "a8q1",
    text: "Which study design starts with people who already have the disease?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Randomized Controlled Trial"],
    correctAnswer: 1,
    explanation: "Case-control study."
  },
  {
    id: "a8q2",
    text: "Which study design starts with people who are exposed to a risk factor but do not yet have the disease?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Randomized Controlled Trial"],
    correctAnswer: 0,
    explanation: "Cohort study."
  },
  {
    id: "a8q3",
    text: "The measure of association used in a case-control study is",
    options: ["Relative Risk (RR)", "Odds Ratio (OR)", "Attributable Risk", "Incidence Rate"],
    correctAnswer: 1,
    explanation: "Odds Ratio (OR)."
  },
  {
    id: "a8q4",
    text: "The measure of association used in a cohort study is",
    options: ["Relative Risk (RR)", "Odds Ratio (OR)", "Prevalence", "Sensitivity"],
    correctAnswer: 0,
    explanation: "Relative Risk (RR)."
  },
  {
    id: "a8q5",
    text: "Which study design is best for studying rare diseases?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 1,
    explanation: "Case-control study."
  },
  {
    id: "a8q6",
    text: "Which study design is best for studying rare exposures?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Cohort study."
  },
  {
    id: "a8q7",
    text: "A prospective cohort study follows participants",
    options: ["Backward in time", "Forward in time", "At a single point in time", "Only if they are sick"],
    correctAnswer: 1,
    explanation: "Forward in time."
  },
  {
    id: "a8q8",
    text: "A retrospective cohort study looks at data",
    options: ["Collected in the past", "To be collected in the future", "From a single day", "From a different country"],
    correctAnswer: 0,
    explanation: "Collected in the past."
  },
  {
    id: "a8q9",
    text: "Recall bias is a major problem in",
    options: ["Cohort studies", "Case-control studies", "Randomized Controlled Trials", "Ecological studies"],
    correctAnswer: 1,
    explanation: "Case-control studies (cases may remember exposures differently than controls)."
  },
  {
    id: "a8q10",
    text: "Loss to follow-up is a major problem in",
    options: ["Cohort studies", "Case-control studies", "Cross-sectional studies", "Ecological studies"],
    correctAnswer: 0,
    explanation: "Cohort studies."
  },
  {
    id: "a8q11",
    text: "Which study design can calculate incidence directly?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Cohort study."
  },
  {
    id: "a8q12",
    text: "Which study design is generally more expensive and time-consuming?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Cohort study."
  },
  {
    id: "a8q13",
    text: "In a case-control study, 'controls' should be",
    options: ["People with a different disease", "People from the same population as cases but without the disease", "Healthy volunteers only", "Family members of cases"],
    correctAnswer: 1,
    explanation: "People from the same population as cases but without the disease."
  },
  {
    id: "a8q14",
    text: "Nested case-control studies are conducted within",
    options: ["A hospital", "A cohort study", "A cross-sectional survey", "A community trial"],
    correctAnswer: 1,
    explanation: "A cohort study."
  },
  {
    id: "a8q15",
    text: "Selection bias is a common concern in",
    options: ["Cohort studies", "Case-control studies", "Both 'a' and 'b'", "None of the above"],
    correctAnswer: 2,
    explanation: "Both 'a' and 'b'."
  },
  {
    id: "a8q16",
    text: "Which study design is better for establishing temporality (exposure came before outcome)?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Cohort study."
  },
  {
    id: "a8q17",
    text: "An Odds Ratio of 1.0 means",
    options: ["The exposure is a risk factor", "The exposure is protective", "There is no association between exposure and disease", "The study is invalid"],
    correctAnswer: 2,
    explanation: "There is no association between exposure and disease."
  },
  {
    id: "a8q18",
    text: "A Relative Risk of 2.0 means",
    options: ["The exposed group has twice the risk of the unexposed group", "The exposed group has half the risk", "There is no difference", "The disease is rare"],
    correctAnswer: 0,
    explanation: "The exposed group has twice the risk of the unexposed group."
  },
  {
    id: "a8q19",
    text: "Which study design is often used for outbreak investigations?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 1,
    explanation: "Case-control study (to quickly identify the source)."
  },
  {
    id: "a8q20",
    text: "The 'healthy worker effect' is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 0,
    explanation: "Selection bias."
  },
  {
    id: "a8q21",
    text: "Cohort studies can be used to study multiple outcomes for a single exposure.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: "a8q22",
    text: "Case-control studies can be used to study multiple exposures for a single outcome.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: "a8q23",
    text: "Relative Risk can be calculated in a case-control study if the disease is very common.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False (OR approximates RR only if the disease is rare)."
  },
  {
    id: "a8q24",
    text: "Matching is a technique used to control for confounding in case-control studies.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: "a8q25",
    text: "A retrospective cohort study is the same as a case-control study.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False (they start from different points: exposure vs. outcome)."
  },
  {
    id: "a8q26",
    text: "Which study design starts with people who already have the disease?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Randomized Controlled Trial"],
    correctAnswer: 1,
    explanation: "Case-control study."
  },
  {
    id: "a8q27",
    text: "Which study design starts with people who are exposed to a risk factor but do not yet have the disease?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Randomized Controlled Trial"],
    correctAnswer: 0,
    explanation: "Cohort study."
  },
  {
    id: "a8q28",
    text: "The measure of association used in a case-control study is",
    options: ["Relative Risk (RR)", "Odds Ratio (OR)", "Attributable Risk", "Incidence Rate"],
    correctAnswer: 1,
    explanation: "Odds Ratio."
  },
  {
    id: "a8q29",
    text: "The measure of association used in a cohort study is",
    options: ["Relative Risk (RR)", "Odds Ratio (OR)", "Prevalence", "Sensitivity"],
    correctAnswer: 0,
    explanation: "Relative Risk."
  },
  {
    id: "a8q30",
    text: "Which study design is best for studying rare diseases?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 1,
    explanation: "Case-control study."
  },
  {
    id: "a8q31",
    text: "Which study design is best for studying rare exposures?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Cohort study."
  },
  {
    id: "a8q32",
    text: "A prospective cohort study follows participants",
    options: ["Backward in time", "Forward in time", "At a single point in time", "Only if they are sick"],
    correctAnswer: 1,
    explanation: "Forward in time."
  },
  {
    id: "a8q33",
    text: "A retrospective cohort study looks at data",
    options: ["Collected in the past", "To be collected in the future", "From a single day", "From a different country"],
    correctAnswer: 0,
    explanation: "Collected in the past."
  },
  {
    id: "a8q34",
    text: "Recall bias is a major problem in",
    options: ["Cohort studies", "Case-control studies", "Randomized Controlled Trials", "Ecological studies"],
    correctAnswer: 1,
    explanation: "Case-control studies."
  },
  {
    id: "a8q35",
    text: "Loss to follow-up is a major problem in",
    options: ["Cohort studies", "Case-control studies", "Cross-sectional studies", "Ecological studies"],
    correctAnswer: 0,
    explanation: "Cohort studies."
  },
  {
    id: "a8q36",
    text: "Which study design can calculate incidence directly?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Cohort study."
  },
  {
    id: "a8q37",
    text: "Which study design is generally more expensive and time-consuming?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Cohort study."
  },
  {
    id: "a8q38",
    text: "In a case-control study, 'controls' should be",
    options: ["People with a different disease", "People from the same population as cases but without the disease", "Healthy volunteers only", "Family members of cases"],
    correctAnswer: 1,
    explanation: "People from the same population."
  },
  {
    id: "a8q39",
    text: "Nested case-control studies are conducted within",
    options: ["A hospital", "A cohort study", "A cross-sectional survey", "A community trial"],
    correctAnswer: 1,
    explanation: "A cohort study."
  },
  {
    id: "a8q40",
    text: "Selection bias is a common concern in",
    options: ["Cohort studies", "Case-control studies", "Both 'a' and 'b'", "None of the above"],
    correctAnswer: 2,
    explanation: "Both."
  },
  {
    id: "a8q41",
    text: "Which study design is better for establishing temporality (exposure came before outcome)?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Cohort study."
  },
  {
    id: "a8q42",
    text: "An Odds Ratio of 1.0 means",
    options: ["The exposure is a risk factor", "The exposure is protective", "There is no association between exposure and disease", "The study is invalid"],
    correctAnswer: 2,
    explanation: "No association."
  },
  {
    id: "a8q43",
    text: "A Relative Risk of 2.0 means",
    options: ["The exposed group has twice the risk of the unexposed group", "The exposed group has half the risk", "There is no difference", "The disease is rare"],
    correctAnswer: 0,
    explanation: "Twice the risk."
  },
  {
    id: "a8q44",
    text: "Which study design is often used for outbreak investigations?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 1,
    explanation: "Case-control study."
  },
  {
    id: "a8q45",
    text: "The 'healthy worker effect' is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 0,
    explanation: "Selection bias."
  },
  {
    id: "a8q46",
    text: "Cohort studies can be used to study multiple outcomes for a single exposure.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: "a8q47",
    text: "Case-control studies can be used to study multiple exposures for a single outcome.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: "a8q48",
    text: "Relative Risk can be calculated in a case-control study if the disease is very common.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False."
  },
  {
    id: "a8q49",
    text: "Matching is a technique used to control for confounding in case-control studies.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: "a8q50",
    text: "A retrospective cohort study is the same as a case-control study.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False."
  }
];
