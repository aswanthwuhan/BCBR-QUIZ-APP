import { Question } from '../types';

export const ASSIGNMENT_1_QUESTIONS: Question[] = [
  {
    id: "a1q1",
    text: "Which of the following areas can be included in health research?\ni. Improving the health of the population.\nii. Predicting progression of a disease in a patient\niii. Prevention of various diseases\niv. To explore various societal, community based and programmatic interventions for disease prevention and control",
    options: ["i and ii", "i, ii and iv", "All of the above", "None of the above"],
    correctAnswer: 2,
    explanation: "Health research covers improving population health, predicting disease progression (prognosis), disease prevention, and evaluating societal, community and programmatic interventions. All four areas fall within its scope."
  },
  {
    id: "a1q2",
    text: "What is appropriate for sample and sample size?",
    options: [
      "Should be representative of the population [External validity or generalizability]",
      "Should be adequate [power to draw meaningful inferences]",
      "Both 'a' and 'b'",
      "Neither 'a' nor 'b'"
    ],
    correctAnswer: 2,
    explanation: "A good sample must be representative of the population (external validity/generalizability) and adequate in size (statistical power for meaningful inferences). Both are required."
  },
  {
    id: "a1q3",
    text: "Which of the following statements are correct regarding defining inclusion and exclusion criteria in a study protocol?",
    options: [
      "They should be vague because this will allow greater and easy enrolment",
      "They should be very specific",
      "They should be very large in number",
      "It is not important to define exclusion criteria in a clinical trial"
    ],
    correctAnswer: 1,
    explanation: "Inclusion and exclusion criteria must be very specific so the study population is clearly defined, enrolment is consistent and reproducible, participants are protected, and results are valid."
  },
  {
    id: "a1q4",
    text: "Which of the following are examined as part of regulatory review?",
    options: [
      "Information regarding transfer of funds and utilization of funds",
      "Shipment of samples and transfer of data outside the country",
      "Sharing and protection of intellectual property",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Regulatory review examines legal and administrative aspects: transfer and use of funds, shipment of samples and data outside the country, and sharing and protection of intellectual property."
  },
  {
    id: "a1q5",
    text: "Which of the following statements is not true in case of pilot study?",
    options: [
      "They are conducted for developing and testing adequacy of research instruments",
      "They establish whether the sampling frame and technique are effective",
      "Ethics committee approves the main study only after successful completion of the pilot study",
      "They are small scale studies"
    ],
    correctAnswer: 2,
    explanation: "Pilot studies are small-scale studies that test research instruments, sampling frames and feasibility. Ethics committees do not have to wait for a pilot to finish before approving the main study, so that statement is not true."
  },
  {
    id: "a1q6",
    text: "Before initiating a study involving primary data collection, the Principal Investigator must ensure that various approvals are obtained. Which of the following approvals is absolutely mandatory?",
    options: ["Scientific committee approval", "Ethics committee approval", "Technical committee approval", "Regulatory authority approval"],
    correctAnswer: 1,
    explanation: "Ethics committee approval is mandatory for every study collecting primary data from human participants. Scientific, technical and regulatory approvals are required only in some institutions or situations."
  },
  {
    id: "a1q7",
    text: "Which is the best source of information on 'effect modifiers' while exploring cause and effect relationship in a research study?",
    options: ["Deductive thinking", "Thorough review of literature", "Intelligent guessing", "Discussing with experienced researchers"],
    correctAnswer: 1,
    explanation: "Effect modifiers are best identified from existing evidence, so a thorough literature review is the most reliable source. Guessing, deductive reasoning or expert opinion alone are less reliable."
  },
  {
    id: "a1q8",
    text: "The policy makers want to test whether the introduction of pentavalent vaccine in the national program reduces the number of Haemophilus influenzae cases. Which of the following studies will they have to conduct to find an answer?",
    options: ["Case-control study", "Field trial", "Ecological study", "Case series"],
    correctAnswer: 1,
    explanation: "Testing whether a vaccine reduces disease in a healthy community calls for an experimental study done in the field, which is a field trial. Case-control, ecological and case-series designs give weaker evidence of impact."
  },
  {
    id: "a1q9",
    text: "What is true about Confounders?",
    options: [
      "They affect both study variable as well as outcome",
      "Their effect can be minimized by proper study design and through stratified analysis",
      "Both 'a' and 'b'",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "A confounder is associated with both the exposure and the outcome. Its effect can be reduced at the design stage (randomization, restriction, matching) and at the analysis stage (stratification, multivariable analysis)."
  },
  {
    id: "a1q10",
    text: "Which of the following is not a type of study design?",
    options: ["Qualitative study", "Observational study", "Retrospective study", "Pilot study"],
    correctAnswer: 3,
    explanation: "A pilot study is a small preliminary run of the main study to test feasibility. It is not a study design. Qualitative, observational and retrospective studies are all recognized design classifications."
  },
  {
    id: "a1q11",
    text: "Any systematic error in the design, conduct or analysis of a study that results in an erroneous estimate of an exposure's effect on the risk of disease is called:",
    options: ["Confounding", "Bias", "Interaction", "Stratification"],
    correctAnswer: 1,
    explanation: "Bias is a systematic error in study design, conduct or analysis that shifts the estimate away from the truth in one direction. Confounding, interaction and stratification are separate concepts."
  },
  {
    id: "a1q12",
    text: "Which of the following is not part of ethics review of a project?",
    options: ["Informed consent document and procedure", "Competence of researcher and institute conducting research", "Sharing and protection of intellectual property", "Care and support during and after completion of research"],
    correctAnswer: 2,
    explanation: "Ethics review deals with participants: the consent process, investigator competence, and care and support during and after the study. Sharing and protection of intellectual property belongs to regulatory or legal review."
  },
  {
    id: "a1q13",
    text: "A study was conducted to assess the extrapyramidal side effects (EPS) of a new antipsychotic drug in patients with schizophrenia. The effect of the drug on EPS was found to differ between patients who were on anticholinergic drugs and those who were not. What was the role of the anticholinergic drugs in this study?",
    options: ["Confounder", "Random Variable", "Effect Modifier", "Independent Variable"],
    correctAnswer: 2,
    explanation: "Anticholinergic drugs reduce extrapyramidal symptoms, so the antipsychotic-EPS association differs between patients who take them and those who do not. This makes them an effect modifier."
  },
  {
    id: "a1q14",
    text: "Research that aims to solve a specific practical health problem, with findings used directly to guide action, is called:",
    options: ["Basic research", "Applied research", "Theoretical research", "Historical research"],
    correctAnswer: 1,
    explanation: "Applied research is carried out to solve a specific practical problem, so its findings guide action. Basic research aims to generate knowledge without an immediate application."
  },
  {
    id: "a1q15",
    text: "Which of the following is the first step in the research cycle?",
    options: ["Identifying the research problem", "Data analysis", "Writing the research report", "Dissemination of findings"],
    correctAnswer: 0,
    explanation: "The research cycle begins with identifying and defining a clear research problem. Analysis, reporting and dissemination come later in the cycle."
  },
  {
    id: "a1q16",
    text: "What effect does increasing the sample size have upon the random error?",
    options: ["It increases the random error", "It has no effect on the random error", "It reduces the random error", "None of the above"],
    correctAnswer: 2,
    explanation: "A larger sample reduces random error because the standard error falls as $SE = \\sigma/\\sqrt{n}$, which makes estimates more precise. A larger sample does not reduce bias."
  },
  {
    id: "a1q17",
    text: "Which of the following will best describe the scientific inquiry that seeks to understand the acceptability and functionality of a health program?",
    options: ["Basic science research", "Translational research", "Clinical research", "Implementation research"],
    correctAnswer: 3,
    explanation: "Implementation research studies how health programmes work in real-world settings, including their acceptability, feasibility, adoption and functionality."
  },
  {
    id: "a1q18",
    text: "The following statements describe confounding and effect modification. Which of the statement is/are correct?",
    options: [
      "In a study of relationship between coffee drinking and Oro-pharyngeal cancer; smoking is a confounder.",
      "In a study to explore relationship between hepatitis B infection and post-infection hepatic sequelae, habit of alcohol drinking acts as an effect modifier, so its effect should be stratified and reported rather than excluding these patients from the study",
      "‘a’ and ‘b’ Correct",
      "‘a’ and ‘b’ Wrong"
    ],
    correctAnswer: 2,
    explanation: "Smoking is linked to coffee drinking and independently causes oropharyngeal cancer, so it is a confounder. Alcohol changes how much liver damage hepatitis B causes, so it is an effect modifier that should be stratified and reported rather than used to exclude patients. Both statements are correct."
  },
  {
    id: "a1q19",
    text: "Issues regarding shipment of samples and transfer of data outside the country are examined by:",
    options: ["Regulatory review", "Ethics review", "Scientific review", "None"],
    correctAnswer: 0,
    explanation: "Moving biological samples or data outside the country needs legal permissions, such as material transfer agreements and government approvals. These are checked during regulatory review."
  },
  {
    id: "a1q20",
    text: "Which of the following disciplines contribute to health research?",
    options: ["Bio-medical research", "Biostatistics", "Social science research", "All of the above"],
    correctAnswer: 3,
    explanation: "Health research is multidisciplinary. It draws on biomedical research, biostatistics and social science research, along with other fields."
  },
  {
    id: "a1q21",
    text: "Which of the following best describes a study done in a laboratory setting using animals?",
    options: ["Translational research", "Bench-based research", "Theoretical research", "Preventive research"],
    correctAnswer: 1,
    explanation: "Laboratory studies using animals, cells or tissues are bench-based (pre-clinical) research."
  },
  {
    id: "a1q22",
    text: "Which of the following review is NOT essential before initiating a clinical trial?",
    options: ["Scientific review", "Peer review", "Regulatory review", "Ethics review"],
    correctAnswer: 1,
    explanation: "Scientific, ethics and regulatory reviews are required before a clinical trial starts. Peer review is mainly used for grant funding and publication, and it is not a mandatory gate before starting."
  },
  {
    id: "a1q23",
    text: "A measurement tool gives the same result when the same measurement is repeated under the same conditions. This property of the tool is called:",
    options: ["Validity", "Reliability", "Bias", "Confounding"],
    correctAnswer: 1,
    explanation: "Reliability (repeatability) describes whether a measurement gives consistent results under the same conditions. Validity describes whether the tool measures what it is intended to measure."
  },
  {
    id: "a1q24",
    text: "Which of the following statements is NOT correct regarding errors in a health research?",
    options: [
      "Random error is due to chance",
      "Systematic error is due to bias",
      "Random errors can be eliminated by improving study design",
      "Bias distorts the study results in one direction"
    ],
    correctAnswer: 2,
    explanation: "Random error is due to chance. A larger sample size can reduce it, but no design can eliminate it. The other statements about errors are correct."
  },
  {
    id: "a1q25",
    text: "Assigning roles and responsibilities to the team members is one of the fundamental principles of a research",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "Assigning clear roles and responsibilities gives accountability, efficiency and quality control. It is a basic principle of well-conducted research."
  },
  {
    id: "a1q26",
    text: "Health research is usually focused on which of the following areas?",
    options: ["Estimation of disease burden in a population", "Prevention of common diseases in the community", "Evaluation of public health programs", "All the above"],
    correctAnswer: 3,
    explanation: "Health research focuses on estimating disease burden, preventing common diseases and evaluating public health programmes, so all of the options are correct."
  },
  {
    id: "a1q27",
    text: "Which of the following is NOT a component of a research study?",
    options: ["Setting up the institute scientific committee", "Calculating sample size", "Development of a study tool", "Framing the research question"],
    correctAnswer: 0,
    explanation: "Framing the question, calculating sample size and developing study tools are parts of a research study. Setting up an institutional scientific committee is an administrative task for the institution."
  },
  {
    id: "a1q28",
    text: "A researcher wants to study the relationship between COVID-19 infection in pregnancy and birth weight. Currently, there is no evidence on this topic. Which of the following options is the scope of this health research?",
    options: ["Verifying and confirming known information", "Getting additional or new information", "Evaluating ongoing programs", "All of the above"],
    correctAnswer: 1,
    explanation: "There is no existing evidence on this topic, so the study's scope is to generate new information rather than to verify known findings or evaluate a programme."
  },
  {
    id: "a1q29",
    text: "Which of the following is NOT a critical consideration in planning a health research?",
    options: ["Adequate justification", "Clear and focused research question", "Standard case definitions", "Financial gain"],
    correctAnswer: 3,
    explanation: "Justification, a clear research question and standard case definitions are critical to planning research. Financial gain is not a scientific consideration and may be a conflict of interest."
  },
  {
    id: "a1q30",
    text: "Identify the CORRECT statement about implementation of a research",
    options: [
      "Research findings must be approved by the funder",
      "Research finding must be error free",
      "Adequate sample size is a prerequisite",
      "Pilot study can be done during data analysis stage"
    ],
    correctAnswer: 2,
    explanation: "An adequate sample size is needed for statistical power. Findings never need funder approval, no study is completely error-free, and pilot studies are done before the main study, not during analysis."
  },
  {
    id: "a1q31",
    text: "In a case-control study of diet and disease, cases recall their past diet more thoroughly than controls, which distorts the comparison. This error is best described as:",
    options: ["Confounding", "Random error", "Selection bias", "Recall bias"],
    correctAnswer: 3,
    explanation: "Recall bias is an information bias that arises when participants with the disease remember past exposures differently from those without it. Selection bias concerns how participants are chosen."
  },
  {
    id: "a1q32",
    text: "A study enrols only patients attending a tertiary hospital, and milder cases rarely attend there, so the sample is not representative of all cases. This error is an example of:",
    options: ["Information bias", "Chance", "Selection bias", "Effect modification"],
    correctAnswer: 2,
    explanation: "Selection bias occurs when the way participants are chosen makes the sample differ systematically from the target population. Here the hospital setting excludes many milder cases."
  },
  {
    id: "a1q33",
    text: "Repeated weight measurements on the same person are very close to one another, but every reading is 3 kg higher than the true weight. The measurements are:",
    options: ["Precise but inaccurate", "Accurate but imprecise", "Both precise and accurate", "Neither precise nor accurate"],
    correctAnswer: 0,
    explanation: "The readings agree closely with each other, so they are precise, but they consistently differ from the true value, so they are inaccurate. This pattern usually reflects systematic error, such as a miscalibrated scale."
  },
  {
    id: "a1q34",
    text: "A case-control study finds that cases changed their diet after diagnosis, and the change may have been caused by early, undiagnosed disease rather than being a cause of it. This is an example of:",
    options: ["Confounding", "Effect modification", "Reverse causation", "Random error"],
    correctAnswer: 2,
    explanation: "Reverse causation occurs when the assumed exposure is actually a consequence of the disease. Confounding, effect modification and random error describe different problems."
  },
  {
    id: "a1q35",
    text: "Blinding of participants and outcome assessors is mainly used to reduce selection bias at enrolment.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "Blinding reduces information, performance and detection bias, which arise after participants are enrolled. Selection bias is controlled mainly through how participants are chosen and allocated."
  },
  {
    id: "a1q36",
    text: "Which of the following is NOT one of Bradford Hill's criteria for judging a causal association?",
    options: ["Strength of association", "Temporality", "Biological gradient", "Statistical significance (p < 0.05)"],
    correctAnswer: 3,
    explanation: "Bradford Hill's criteria include strength, consistency, specificity, temporality, biological gradient, plausibility and coherence. A p-value below 0.05 shows that chance is unlikely, but it is not a causal criterion."
  },
  {
    id: "a1q37",
    text: "Which of the following is NOT typically a component of a research protocol?",
    options: ["Background and rationale", "Study objectives", "Final published discussion of results", "Statistical analysis plan"],
    correctAnswer: 2,
    explanation: "A research protocol describes the planned study, including its background, objectives and statistical analysis plan. The discussion of results is written only after the study is completed."
  },
  {
    id: "a1q38",
    text: "Which of the following is a core element of informed consent?",
    options: ["Voluntary participation, with the right to withdraw at any time", "Compulsory participation in order to receive free care", "Consent obtained only after data collection is complete", "Consent signed by the investigator on behalf of the participant"],
    correctAnswer: 0,
    explanation: "Informed consent requires that participation is voluntary, that participants understand the study, and that they may withdraw at any time without penalty. The other options contradict these principles."
  },
  {
    id: "a1q39",
    text: "A study examines how an existing health service can be made to work more efficiently using the resources already available. This type of research is called:",
    options: ["Basic research", "Operational research", "Clinical trial", "Case series"],
    correctAnswer: 1,
    explanation: "Operational research studies how to improve the delivery and efficiency of services and programmes using existing resources. Basic research seeks new knowledge without an immediate application."
  },
  {
    id: "a1q40",
    text: "Random allocation of participants to intervention and control groups is the key feature that distinguishes which study design?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Randomized controlled trial"],
    correctAnswer: 3,
    explanation: "A randomized controlled trial allocates participants to groups by chance, which separates it from observational designs. Cohort, case-control and cross-sectional studies do not randomize the exposure."
  },
  {
    id: "a1q41",
    text: "A researcher conducted a study to know the efficacy of a new chemotherapeutic agent among mice with renal cell carcinoma. What type of research is this?",
    options: ["Translational research", "Bench side research", "Bed side research", "Implementation research"],
    correctAnswer: 1,
    explanation: "Testing a drug in mice is pre-clinical laboratory research, which is bench side research."
  },
  {
    id: "a1q42",
    text: "What is the type of research that takes evidence-based interventions in tobacco cessation for taking informed policy decisions?",
    options: ["Bench side research", "Bed side research", "Implementation research", "Translational research"],
    correctAnswer: 2,
    explanation: "Applying proven, evidence-based tobacco cessation interventions in real-world settings to inform policy decisions is implementation research."
  },
  {
    id: "a1q43",
    text: "A researcher proposed a novel research question. ‘What are the differences in full genome structure of Sars-CoV-2 variants?’ Which of the following is a scope of this research?",
    options: ["Getting new information", "Verifying available information", "Confirming available information", "Explaining cause and effect relationship"],
    correctAnswer: 0,
    explanation: "This is a novel question about full genome differences between variants, so it generates new information. It is not verifying or confirming known facts, and it does not test cause and effect."
  },
  {
    id: "a1q44",
    text: "What is the scope of a research in which the occurrence of one event is followed by the occurrence of a subsequent event?",
    options: ["Getting new information", "Verifying available information", "Confirming available information", "Explaining cause and effect relationship"],
    correctAnswer: 3,
    explanation: "When one event comes before another, the research is looking at temporality, which is a key requirement for explaining a cause and effect relationship."
  },
  {
    id: "a1q45",
    text: "What is the type of study that uses only the information recorded in the past?",
    options: ["Retrospective", "Prospective", "Randomised clinical trial", "Ambispective"],
    correctAnswer: 0,
    explanation: "A retrospective study uses only information that was already recorded in the past, such as medical records. Prospective studies collect new data going forward, and ambispective studies use both."
  },
  {
    id: "a1q46",
    text: "What is another term used for random error?",
    options: ["Bias", "Chance", "Instrumental error", "Systematic error"],
    correctAnswer: 1,
    explanation: "Random error is variation due to chance and affects precision. Bias, or systematic error, consistently shifts results in one direction."
  },
  {
    id: "a1q47",
    text: "How can systematic errors be minimized?",
    options: ["By increasing sample size", "By increasing precision", "By calibrating the instrument", "By recording the outcome to more decimal places"],
    correctAnswer: 2,
    explanation: "Systematic error (bias) is reduced by better design and measurement, for example by calibrating instruments. A larger sample or higher precision only reduces random error."
  },
  {
    id: "a1q48",
    text: "What is the term used to denote ‘a small-scale study with minimal study participants which examines the feasibility of procedures intended to be performed in the main study’?",
    options: ["Pilot study", "Pre-testing", "Case study", "Cohort study"],
    correctAnswer: 0,
    explanation: "A pilot study is a small-scale study that tests whether all the procedures planned for the main study are feasible. Pre-testing checks only a specific tool, such as a questionnaire."
  },
  {
    id: "a1q49",
    text: "Choose whether the following statement is true or false. ‘Inclusion and exclusion criteria should be mutually exclusive’.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "Inclusion and exclusion criteria should not overlap or contradict each other. Exclusion criteria apply only to people who already meet the inclusion criteria."
  },
  {
    id: "a1q50",
    text: "What is the term used to denote ‘a third variable across whose levels the effect of the study variable on the outcome differs’ called?",
    options: ["Confounder", "Effect modifier", "Intervening variable", "Outcome variable"],
    correctAnswer: 1,
    explanation: "An effect modifier changes the strength or direction of the relationship between the study variable and the outcome across its levels. A confounder, by contrast, creates a spurious association."
  }
];
