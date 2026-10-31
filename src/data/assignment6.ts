import { Question } from '../types';

export const ASSIGNMENT_6_QUESTIONS: Question[] = [
  {
    id: "a6q1",
    text: "Exposure is not assigned by the investigator in the following study design",
    options: ["Cohort", "Case-control", "Cross-sectional", "All of the above"],
    correctAnswer: 3,
    explanation: "All of the above. Cohort, case-control and cross-sectional studies are observational: exposures occur naturally and are only recorded. The investigator assigns exposure only in experimental studies."
  },
  {
    id: "a6q2",
    text: "Which of the following statement(s) is true about the cohort study?",
    options: [
      "It is not suitable for disease with a long latency period",
      "Loss to follow up can introduce bias",
      "Both 'a' and 'b'",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Both. Prospective cohorts are impractical for long-latency diseases because of the very long follow-up required, and loss to follow-up (attrition) can bias the results."
  },
  {
    id: "a6q3",
    text: "Which of the following study design is better suited to demonstrate a temporal association between exposure and disease?",
    options: ["Cross-sectional study", "Case-control study", "Cohort study", "Ecological study"],
    correctAnswer: 2,
    explanation: "Cohort study. Disease-free people are classified by exposure first and then followed for the outcome, so exposure clearly precedes disease."
  },
  {
    id: "a6q4",
    text: "Relative risk of more than 1 indicates",
    options: [
      "Incidence in unexposed is higher than exposed",
      "Incidence in exposed and unexposed are same",
      "Incidence in exposed is higher than unexposed",
      "Relative risk is significant"
    ],
    correctAnswer: 2,
    explanation: "RR = incidence in exposed / incidence in unexposed. An RR above 1 means incidence is higher in the exposed group, so the exposure is a possible risk factor. Statistical significance depends on the confidence interval."
  },
  {
    id: "a6q5",
    text: "If the odds of exposure among cases is lower than the odds of exposure among the controls, the odds ratio will be",
    options: ["More than 1", "Less than 1", "It depends on other factors", "None of the above"],
    correctAnswer: 1,
    explanation: "Less than 1. OR = odds of exposure in cases / odds of exposure in controls, so a smaller numerator gives OR < 1, suggesting a protective association."
  },
  {
    id: "a6q6",
    text: "All babies born in a particular year will form a birth cohort",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A cohort is a group sharing a common characteristic or experience within a defined period, so all babies born in the same year form a birth cohort."
  },
  {
    id: "a6q7",
    text: "Cohort study is suitable for rare diseases",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Too few people would develop a rare disease to study it efficiently with a cohort. Case-control studies suit rare diseases, while cohorts suit rare exposures."
  },
  {
    id: "a6q8",
    text: "Which of the following is NOT true regarding case-control study?\ni. Appropriate for study of rare outcome\nii. More time consuming than cohort study\niii. Multiple exposures can be examined\niv. Relatively expensive compared to cohort study",
    options: [
      "Both i and iii",
      "Both i and ii",
      "Both ii and iv",
      "Both iii and iv"
    ],
    correctAnswer: 2,
    explanation: "Statements ii and iv are false. Case-control studies are quicker and cheaper than cohort studies. They are appropriate for rare outcomes and can examine multiple exposures."
  },
  {
    id: "a6q9",
    text: "What is an appropriate measure of statistical association in a cohort study?",
    options: ["Prevalence ratio", "Risk ratio", "Odds ratio", "Pearson's correlation coefficient"],
    correctAnswer: 1,
    explanation: "Risk ratio. A cohort study measures incidence in exposed and unexposed groups, so the relative risk (risk ratio) is the appropriate measure. Odds ratios are used in case-control studies and prevalence ratios in cross-sectional studies."
  },
  {
    id: "a6q10",
    text: "The entire population of a given community is screened and all those judged as being free of Colon cancer are questioned extensively about their diet. These people are then followed-up for several years to see whether their eating habits will predict their risk of developing Colon cancer - This is an example of",
    options: ["Case-control study", "Clinical trial", "Cross-sectional study", "Cohort study"],
    correctAnswer: 3,
    explanation: "Cohort study. People free of colon cancer had their exposure (diet) measured first and were then followed over years for the outcome, which is a prospective cohort design."
  },
  {
    id: "a6q11",
    text: "Exposure is assigned by the investigator in which of the following epidemiological study?",
    options: ["Case-control", "Cross-sectional", "Experimental", "Cohort"],
    correctAnswer: 2,
    explanation: "Experimental. Only in experimental (interventional) studies such as RCTs does the investigator assign the exposure. Case-control, cross-sectional and cohort studies are observational."
  },
  {
    id: "a6q12",
    text: "When a group of people with defined characteristics are followed up to determine incidence is known as",
    options: ["Case series", "Cohort", "Case control", "Experimental"],
    correctAnswer: 1,
    explanation: "Cohort. Following a defined group of people over time to measure new cases (incidence) is the definition of a cohort study."
  },
  {
    id: "a6q13",
    text: "Relative risk is a",
    options: ["Rate", "Ratio", "Proportion", "None of the above"],
    correctAnswer: 1,
    explanation: "Ratio. Relative risk is the incidence in the exposed divided by the incidence in the unexposed. These are two separate quantities, so RR is a ratio."
  },
  {
    id: "a6q14",
    text: "Relative risk of one in a cohort study indicates",
    options: [
      "Incidence in unexposed is higher than exposed",
      "Incidence in exposed is higher than unexposed",
      "Relative risk is significant",
      "Incidence in the exposed and unexposed groups are same"
    ],
    correctAnswer: 3,
    explanation: "RR = 1 means the incidence in the exposed equals the incidence in the unexposed, so there is no association between exposure and outcome."
  },
  {
    id: "a6q15",
    text: "Women aged above 35 years were screened for the HPV (Human papilloma virus) infection and those who had HPV infection were then followed for several years to predict the risk of developing cervical cancer. This study is known as",
    options: ["Prospective cohort", "Retrospective cohort", "Case control", "Cross sectional"],
    correctAnswer: 0,
    explanation: "Prospective cohort. Women were classified by exposure (HPV infection) now and then followed forward in time for development of cervical cancer."
  },
  {
    id: "a6q16",
    text: "Which of the following is appropriate regarding a cohort study?\ni. Multiple exposures can be examined\nii. Appropriate for studying rare exposures\niii. Expensive and time consuming\niv. Appropriate for studying rare diseases",
    options: [
      "Both i and iv",
      "Both i and ii",
      "Both ii and iv",
      "Both ii and iii"
    ],
    correctAnswer: 3,
    explanation: "Both ii and iii. Cohort studies suit rare exposures and are expensive and time consuming. Rare diseases and multiple exposures are better studied with case-control designs."
  },
  {
    id: "a6q17",
    text: "Which of the following statement regarding the cohort study is FALSE?",
    options: [
      "Suitable to study a disease with long latency period",
      "Loss to follow up can introduce bias",
      "Relative risk can be calculated",
      "Temporal association with the risk factor can be established"
    ],
    correctAnswer: 0,
    explanation: "This statement is false because long latency requires very long follow-up, which makes a prospective cohort impractical. Cohorts can calculate RR, establish temporality, and are biased by loss to follow-up."
  },
  {
    id: "a6q18",
    text: "Odds ratio of more than one indicates",
    options: [
      "Odds of exposure among cases is lower than the odds of exposure among the controls",
      "Odds of exposure among cases is equal to the odds of exposure among the controls",
      "Odds of exposure among cases is higher than the odds of exposure among the controls",
      "Exposure is negatively associated with the disease"
    ],
    correctAnswer: 2,
    explanation: "OR above 1 means the odds of exposure among cases are higher than among controls, which indicates a positive association between exposure and disease."
  },
  {
    id: "a6q19",
    text: "If there is a comparison group in an epidemiological study design, it is called",
    options: ["Descriptive", "Analytical", "Ecological", "None of the above"],
    correctAnswer: 1,
    explanation: "Analytical. Studies with a comparison group can test hypotheses about associations, so they are analytical. Descriptive studies have no comparison group."
  },
  {
    id: "a6q20",
    text: "Which of the following statements about case control/cohort studies is correct?",
    options: [
      "Case control study always establishes temporal association",
      "Cohort study establishes temporal association",
      "Cohort has lower level of evidence than case-control",
      "Do case control for rare exposures and cohort for rare diseases"
    ],
    correctAnswer: 1,
    explanation: "In a cohort study, exposure is measured before the outcome occurs, so temporality is established. Case-control studies often cannot establish temporality, cohorts rank higher in evidence, and the rare exposure/rare disease pairing is reversed."
  },
  {
    id: "a6q21",
    text: "To determine the associated factors of anti-hypertensive drug compliance, an investigator selected 384 participants with hypertension who were undergoing treatment in a tertiary care hospital. The investigator collected the details on the socio-economic background of the participants and took history regarding the consumption of medicines in the past two weeks. Then the drug compliant group and the non-compliant group were compared to identify factors associated with drug compliance. What is the type of the study design?",
    options: ["Case control study", "Prospective cohort study", "Case study", "Analytical cross-sectional study"],
    correctAnswer: 3,
    explanation: "Analytical cross-sectional. Patients were sampled at one point in time with exposure and outcome measured together, and compliant vs non-compliant groups were then compared to identify associated factors."
  },
  {
    id: "a6q22",
    text: "A gynaecology resident intends to determine the association between intra-uterine device (IUD) use and risk of extrauterine pregnancy. The investigator recruited 100 cases of extrauterine pregnancy and 200 participants who had intrauterine pregnancy as controls from the obstetrics ward of a tertiary care hospital over a period of 2 years. Both cases and controls were interviewed about the history of IUD use. Among the cases, 6 participants had history of IUD use and among controls, 4 had history of IUD use. Calculate the odds ratio of extrauterine pregnancies among women with history of IUD use?",
    options: ["0.32", "1.39", "3.13", "0.72"],
    correctAnswer: 2,
    explanation: "OR = ad/bc = (6 × 196)/(4 × 94) = 1176/376 ≈ 3.13. Here c = 100 − 6 = 94 cases and d = 200 − 4 = 196 controls had no history of IUD use."
  },
  {
    id: "a6q23",
    text: "An investigator conducted a case control study with psoriasis patients as cases and other skin disease patients as controls. Those having hypertension were considered as exposed and non-hypertensives as non-exposed. The study found an odds ratio of 1.45. Which of the following is correct?",
    options: [
      "Psoriasis is positively associated with hypertension",
      "Odds of hypertension among psoriasis patients is lower than the odds of hypertension among patients without psoriasis",
      "Odds of psoriasis among hypertensive patients is lower than the odds of psoriasis among non-hypertensives",
      "Hypertension is a causative factor of psoriasis"
    ],
    correctAnswer: 0,
    explanation: "An OR of 1.45 is greater than 1, so hypertension is more common in psoriasis cases than in controls, showing a positive association. A case-control study shows association, not causation."
  },
  {
    id: "a6q24",
    text: "A prospective cohort study was conducted to determine the association between coffee consumption and risk of pancreatitis among 10000 healthy participants. Among the participants 3500 participants consumed coffee, whereas 6500 participants did not. After a follow up of 10 years 85 participants in the coffee consumption group developed pancreatitis, whereas among the non-coffee consumption group 130 in developed pancreatitis. Calculate the relative risk of pancreatitis due to coffee consumption.",
    options: ["0.04", "0.85", "1.21", "1.50"],
    correctAnswer: 2,
    explanation: "RR = (85/3500)/(130/6500) = 0.0243/0.0200 ≈ 1.21. The risk of pancreatitis is about 21% higher among coffee drinkers."
  },
  {
    id: "a6q25",
    text: "All the following are elements of a cohort study, EXCEPT",
    options: [
      "It involves calculation of incidence rate",
      "It proceeds from exposure to outcome",
      "It involves randomization of participants",
      "It involves follow-up of the participants"
    ],
    correctAnswer: 2,
    explanation: "Randomization is a feature of experimental studies, not cohort studies. Cohort studies proceed from exposure to outcome, follow participants up, and calculate incidence."
  },
  {
    id: "a6q26",
    text: "All the following are limitations of a case control study, EXCEPT",
    options: [
      "It can introduce recall bias",
      "Incidence of disease cannot be determined",
      "Selection of appropriate control group may be difficult",
      "It can introduce attrition bias"
    ],
    correctAnswer: 3,
    explanation: "Attrition bias comes from loss to follow-up, which happens in cohort studies and trials. Case-control studies have no follow-up. Recall bias, inability to measure incidence and difficulty choosing controls are genuine limitations."
  },
  {
    id: "a6q27",
    text: "Using medical records from a tertiary care cancer hospital, a researcher collected data on occupational exposure and lung carcinoma on patients admitted between 2000 and 2010. He classified the patients who had history of working in coal mines as exposed and others as unexposed. He then compared the frequency of lung carcinoma among the exposed and the unexposed. What best describes the study design?",
    options: ["Case control study", "Retrospective cohort study", "Cross-sectional study", "Analytical cross-sectional study"],
    correctAnswer: 1,
    explanation: "Retrospective cohort. Using past records, patients were grouped by exposure (coal mining) and then the outcome (lung cancer) was compared between groups, so the design is cohort and the data are historical."
  },
  {
    id: "a6q28",
    text: "A paediatrician recruited 120 children with Crohn's disease and their matched sibling controls. The researcher collected history of exclusive breastfeeding (EBF) from the mothers. Presence/ absence of EBF was compared between the diseased and the non-diseased children. Identify the study design in this research?",
    options: ["Case series", "Cross-sectional study", "Case control study", "Cohort study"],
    correctAnswer: 2,
    explanation: "Case control study. Children were selected by disease status (Crohn's disease vs matched sibling controls) and then past exposure (exclusive breastfeeding) was compared."
  },
  {
    id: "a6q29",
    text: "Which of the following is INCORRECT about selection of cases in case control study?",
    options: [
      "Cases are study participants who had the disease in the source population",
      "Selection of cases should be based on the exposure status",
      "Inclusion of prevalent cases can save time and money",
      "Inclusion of prevalent cases may introduce survivor bias"
    ],
    correctAnswer: 1,
    explanation: "This statement is incorrect because cases in a case-control study are selected by disease status, not exposure status. Exposure is what is then measured and compared."
  },
  {
    id: "a6q30",
    text: "A multicentric study was conducted to determine the association between diabetes and cataract. The investigators recruited 1000 diabetics and 2500 non-diabetics. The participants were examined to exclude presence of cataract at the time of recruitment. They were followed once yearly for 10 years to document the development of cataract. The study found that the incidence of cataract among diabetics was more when compared with the non-diabetics. Identify the study design in this study?",
    options: ["Cross-sectional study", "Case control study", "Prospective cohort study", "Experimental study"],
    correctAnswer: 2,
    explanation: "Prospective cohort. Participants were grouped by exposure (diabetes), confirmed free of cataract at baseline, and then followed yearly for 10 years to compare incidence."
  },
  {
    id: "a6q31",
    text: "A study was conducted to determine the factors associated with malnutrition in under-5 children. The researcher screened 350 children from 25 randomly selected villages. Among them 150 children were either underweight and/or stunted. Socio-demographic characteristics, birth history, and childhood clinical history were recorded for the screened children. What is the type of the study design used here?",
    options: ["Descriptive cross-sectional study", "Analytical cross-sectional study", "Case control study", "Prospective cohort study"],
    correctAnswer: 1,
    explanation: "Analytical cross-sectional. Children were surveyed once, with outcome and factors recorded together, and malnourished vs normal children were compared to find associated factors."
  },
  {
    id: "a6q32",
    text: "A gynaecology resident intends to determine the association between pre-pregnancy weight and the risk of preeclampsia. The investigator recruited 50 women diagnosed with preeclampsia as cases and 50 women without preeclampsia as controls in a tertiary care hospital. Both cases and controls were interviewed and asked about their pre-pregnancy weight and height. The pre-pregnancy body mass index (BMI) was calculated for all. 15 of the cases and 5 of the controls had BMI > 25 kg/m2. Calculate the odds ratio for the association between preeclampsia and BMI.",
    options: ["1.1", "1.5", "2.8", "3.9"],
    correctAnswer: 3,
    explanation: "OR = ad/bc = (15 × 45)/(5 × 35) = 675/175 ≈ 3.86, which rounds to 3.9. Here c = 50 − 15 = 35 cases and d = 50 − 5 = 45 controls had a BMI of 25 or less."
  },
  {
    id: "a6q33",
    text: "In a cohort study, the incidence of lung cancer was 30 per 1000 among smokers and 10 per 1000 among non-smokers. What is the attributable risk (risk difference) due to smoking?",
    options: ["20 per 1000", "3 per 1000", "10 per 1000", "40 per 1000"],
    correctAnswer: 0,
    explanation: "Attributable risk = incidence in exposed − incidence in unexposed = 30 − 10 = 20 per 1000; this is the excess risk among smokers due to smoking. (3 is the relative risk, not a risk difference.)"
  },
  {
    id: "a6q34",
    text: "Which of the following is an element of a case control study?",
    options: [
      "It starts with selection of study participants who are exposed",
      "It involves matching of cases with controls",
      "It includes randomization of cases and controls",
      "It involves prospective follow up of the cases and controls"
    ],
    correctAnswer: 1,
    explanation: "Case-control studies often match controls to cases on factors such as age and sex to control confounding. Starting from exposure, randomization and prospective follow-up belong to cohort studies and trials."
  },
  {
    id: "a6q35",
    text: "A study was conducted to determine the association between coronary artery disease and age- related macular degeneration in people aged 60 years or more. The investigators included 150 participants with age-related macular degeneration and 150 participants without age-related macular degeneration. The participants were interviewed for major risk factors for the disease. Among participants with age-related macular degeneration, 25 had history of coronary artery disease while among those without age-related macular degeneration, only 10 had history of coronary artery disease. Identify the study design in this case?",
    options: ["Cross-sectional study", "Case control study", "Prospective cohort study", "Experimental study"],
    correctAnswer: 1,
    explanation: "Case control study. Participants were selected by outcome (with vs without age-related macular degeneration) and asked about past exposures such as coronary artery disease."
  },
  {
    id: "a6q36",
    text: "A cohort study was conducted to examine the association between anemia and incidence of dementia in patients with newly diagnosed type 2 diabetes mellitus. The study included 4000 participants aged more than 30 years who were diagnosed with type 2 diabetes between 2006 and 2010 and were followed up until 2019. Anemia status was recorded at the time of enrolment into the study and development of dementia was recorded between 2011 and 2019. At the end of the study period, 200 diabetics developed dementia in total. Among those with dementia 90 were diagnosed with anaemia, while among those without dementia 1400 had anemia. Calculate the measure of association between dementia and anemia in type 2 diabetics.",
    options: ["1.0", "1.4", "2.1", "2.5"],
    correctAnswer: 1,
    explanation: "This is a cohort study, so use RR. Anemic: 90/1490 developed dementia. Non-anemic: 110/2510. RR = 0.0604/0.0438 ≈ 1.38, which rounds to 1.4."
  },
  {
    id: "a6q37",
    text: "In 2020, a study was conducted by a researcher to determine the relationship between implanted medical devices and connective tissue diseases. The researcher selected 5000 individuals who had a medical device implanted between 2000 and 2002 from the medical records department of a hospital. These patients' records were followed upto the year 2019 for a diagnosis of connective tissue disease. It was observed that 20% of the individual with medical devices had developed a connective tissue disease. Identify the study design in this case.",
    options: ["Cross-sectional study", "Case control study", "Prospective cohort study", "Retrospective cohort study"],
    correctAnswer: 3,
    explanation: "Retrospective cohort. Historical records were used to identify an exposed group (device implanted 2000–2002), and their records were followed to 2019 for the outcome."
  },
  {
    id: "a6q38",
    text: "Concluding that individuals with high fat intake develop colon cancer, based only on a correlation between national fat consumption and colon cancer rates across countries, is an example of",
    options: ["Recall bias", "Ecological fallacy", "Survival (Neyman) bias", "Loss to follow-up"],
    correctAnswer: 1,
    explanation: "Ecological studies use group-level data; inferring an individual-level association from them is the ecological fallacy, because the people exposed may not be the ones who developed the disease."
  },
  {
    id: "a6q39",
    text: "All of the following are types of analytical studies EXCEPT",
    options: ["Case study", "Case control study", "Experimental study", "Cohort study"],
    correctAnswer: 0,
    explanation: "Case study. A case study describes a single patient with no comparison group, so it is descriptive. Case-control, cohort and experimental studies are analytical."
  },
  {
    id: "a6q40",
    text: "An investigator conducted a cohort study to determine the association between exposure to second-hand smoke during childhood and asthma in adulthood. The study reported a relative risk of 2.1 between asthma and exposure to second-hand smoke. Which of the following interpretation is correct?",
    options: [
      "The incidence of asthma in children exposed to second-hand smoke is lower than the children not exposed to second-hand smoke",
      "The incidence of asthma in children exposed to second-hand smoke is higher than the children not exposed to second-hand smoke",
      "The incidence of second-hand smoke is lower in children with asthma than in children without asthma",
      "The incidence of second-hand smoke is higher in children with asthma than in children without asthma"
    ],
    correctAnswer: 1,
    explanation: "An RR of 2.1 means the incidence of asthma (the outcome) is about twice as high in children exposed to second-hand smoke as in unexposed children."
  },
  {
    id: "a6q41",
    text: "The following are true about a case-control study EXCEPT:",
    options: [
      "It is suitable for examining rare exposures",
      "It can be completed in a shorter duration",
      "It is relatively inexpensive to conduct",
      "It is prone to information bias due to problems in recall"
    ],
    correctAnswer: 0,
    explanation: "Rare exposures are the exception: they are best studied with cohort designs. Case-control studies are quick, inexpensive, suited to rare diseases, and prone to recall bias."
  },
  {
    id: "a6q42",
    text: "A researcher is following up a group of workers employed in aniline dye industry for 20 years to assess development of skin cancers. The comparison group consisted of workers employed in clerical job. The incidence of skin cancers was compared between the study groups. This is an example of",
    options: ["Cross-sectional study", "Cohort study", "Case-control study", "Ecological study"],
    correctAnswer: 1,
    explanation: "Workers are grouped by exposure (aniline dye vs clerical work) and followed forward for 20 years to compare incidence of skin cancer, which defines a cohort study."
  },
  {
    id: "a6q43",
    text: "In a cohort study the relative risk of disease among the exposed is 4. What proportion of the disease among the exposed is attributable to the exposure (attributable risk percent)?",
    options: ["25%", "50%", "75%", "400%"],
    correctAnswer: 2,
    explanation: "Attributable risk percent = (RR − 1)/RR × 100 = (4 − 1)/4 × 100 = 75%, i.e., three-quarters of cases among the exposed would be prevented by removing the exposure."
  },
  {
    id: "a6q44",
    text: "Which of the following information about cohort study is INCORRECT?",
    options: [
      "Study population can be selected from the general population or subgroups",
      "Exposure status of the participants is collected at the baseline",
      "Individuals who had outcome of interest at the baseline will form the cohort",
      "Follow-up and outcome ascertainment in the exposed and the unexposed groups should be uniform"
    ],
    correctAnswer: 2,
    explanation: "This statement is incorrect because a cohort must be free of the outcome at baseline; only then can new cases (incidence) be measured and temporality established."
  },
  {
    id: "a6q45",
    text: "In a cohort study, 29 out of 1530 individuals who received COVID-19 vaccine and 217 out of 1880 individuals who did not get COVID-19 vaccine developed severe COVID-19. The suitable measure of association in the above study is",
    options: ["Relative risk of 0.16", "Odds ratio of 0.14", "Prevalence ratio of 0.14", "Relative risk of 0.14"],
    correctAnswer: 0,
    explanation: "A cohort study yields incidence, so relative risk is used: $(29/1530)/(217/1880) = 0.019/0.115 \\approx 0.16$, showing the vaccine is protective."
  },
  {
    id: "a6q46",
    text: "All of the following are true regarding selection of participants in a case control study EXCEPT:",
    options: [
      "Controls should represent the distribution of exposure in the source population",
      "Controls are selected from the same source population that gave rise to the cases",
      "Controls are selected depending on their exposure status",
      "Controls can be selected from population or health care facility or from the neighbourhood of cases"
    ],
    correctAnswer: 2,
    explanation: "In a case-control study, controls are selected based on absence of the disease, not on exposure status; selecting by exposure would bias the exposure comparison."
  },
  {
    id: "a6q47",
    text: "A researcher wants to determine the risk factors for Mucormycosis among patients who had COVID-19. Steroid usage was compared between patients who developed and those who did not develop Mucormycosis. This is an example of a",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Retrospective study"],
    correctAnswer: 1,
    explanation: "Participants are grouped by outcome (Mucormycosis vs no Mucormycosis) and past steroid exposure is compared, which is a case-control design."
  },
  {
    id: "a6q48",
    text: "Persons diagnosed with COVID-19 disease in a hospital were asked for COVID-19 vaccination status. An equal number of patients without COVID-19 disease were asked for COVID-19 vaccination status, and the responses in the two groups were compared. The appropriate measure of association in this study would be:",
    options: ["Risk ratio", "Incidence density", "Odds ratio", "Prevalence ratio"],
    correctAnswer: 2,
    explanation: "Participants were selected by disease status and asked about past vaccination, a case-control design; incidence cannot be calculated, so the odds ratio is the measure of association."
  },
  {
    id: "a6q49",
    text: "A researcher intends to determine the association between salt intake and hypertension. 100 out of the 600 hypertension patients and 40 out of 600 patients without hypertension had high salt intake. Calculate the odds ratio for the association between salt intake and hypertension.",
    options: ["2.2", "2.5", "2.8", "3.8"],
    correctAnswer: 2,
    explanation: "With a = 100, b = 40, c = 500, d = 560, the odds ratio is $ad/bc = (100 \\times 560)/(40 \\times 500) = 2.8$."
  },
  {
    id: "a6q50",
    text: "Which among the following is an advantage of cohort study compared to a case-control study?",
    options: [
      "Incidence of the disease can be calculated",
      "Less prone to loss to follow-up of participants",
      "Less costly and less time consuming",
      "They are suitable for studying rare disease"
    ],
    correctAnswer: 0,
    explanation: "Cohort studies follow disease-free people forward, so new cases can be counted and incidence (and relative risk) calculated, which case-control studies cannot do."
  }
];