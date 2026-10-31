import { Question } from '../types';

export const ASSIGNMENT_20_QUESTIONS: Question[] = [
  {
    id: "a20q1",
    text: "A study design that randomly assigns participants into an experimental group or a control group is called",
    options: ["Cohort study", "Case-control study", "Randomized controlled trials", "Cross-sectional study"],
    correctAnswer: 2,
    explanation: "A randomized controlled trial assigns participants to intervention or control groups by chance. Cohort, case-control and cross-sectional studies are observational designs that do not assign exposure."
  },
  {
    id: "a20q2",
    text: "Which of the following statements is (are) true in case of adverse events in a clinical trial?",
    options: [
      "An unexpected clinical/familial/social problem that occurs during treatment with a drug or other therapy is termed as adverse event",
      "Adverse events do not have to be caused by the drug or therapy under trial",
      "Temporal relationship between study product administration and adverse events is critically important",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "An adverse event is any untoward occurrence during a trial, whether or not the study product caused it. Its timing relative to dosing (the temporal relationship) is key when judging causality. All three statements are therefore true."
  },
  {
    id: "a20q3",
    text: "To ensure that safety and welfare of the research participants is adequately protected, it is important that the clinical trial protocol is critically reviewed for the following",
    options: ["Scientific content", "Ethical issues", "Regulatory norms", "All of the above"],
    correctAnswer: 1,
    explanation: "Participant safety and welfare is the central concern of ethics review. Note: scientific and regulatory review also protect participants, so 'All of the above' is arguably the better answer."
  },
  {
    id: "a20q4",
    text: "Informed consent is provided after explanation of",
    options: ["All study procedures", "Risks", "Benefits", "All of the above"],
    correctAnswer: 3,
    explanation: "Valid informed consent requires the participant to understand the study procedures, risks and benefits, along with alternatives and the right to withdraw."
  },
  {
    id: "a20q5",
    text: "Bodies like Drug Controller General of India (DCGI) and Health Ministry Screening Committee (HMSC) are concerned with the following",
    options: ["Regulatory review", "Scientific review", "Ethics review", "All of the above"],
    correctAnswer: 0,
    explanation: "The DCGI (CDSCO) is India's drug regulator, and the HMSC approves foreign-funded or collaborative health research. Both carry out regulatory review."
  },
  {
    id: "a20q6",
    text: "Which of the following is (are) monitored in a clinical trial?",
    options: [
      "Adherence to Good Clinical Practice (GCP)",
      "Documentation of informed consent, randomization and study product administration",
      "Adverse events reporting",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Trial monitoring checks GCP compliance, documentation of consent, randomization and study product administration, and the timely reporting of adverse events."
  },
  {
    id: "a20q7",
    text: "The primary responsibilities of the Data Safety Monitoring Body (DSMB) are to",
    options: [
      "Periodically review and evaluate the accumulated study data for participant safety, study conduct and progress of trial",
      "Periodically review and evaluate the accumulated study data for participant safety, study conduct and progress and make recommendation concerning the continuation, modification, or termination of the trial",
      "Periodically make recommendations concerning the continuation, modification, or termination of the trial",
      "Decide the randomization sequence"
    ],
    correctAnswer: 1,
    explanation: "A DSMB both reviews the accumulating safety, conduct and progress data and recommends whether to continue, modify or stop the trial. The other options describe only one of these roles."
  },
  {
    id: "a20q8",
    text: "Which of the following best describes the advantages of conducting a Randomized controlled trial?",
    options: [
      "It is only effective design for overcoming selection bias of participants",
      "The result can be readily generalized",
      "It is a simple, uncomplicated and nonregulated study design",
      "It requires small sample size"
    ],
    correctAnswer: 0,
    explanation: "Randomization removes selection bias and balances both known and unknown confounders, which is why RCTs are the gold standard. RCTs are complex and regulated, often need large samples, and may have limited generalizability."
  },
  {
    id: "a20q9",
    text: "When is the Informed consent obtained from the subjects in a clinical trial?",
    options: ["Prior to participation in the trial", "Just after the trial has started", "At any point during the conduct of a trial", "At the end of the trial"],
    correctAnswer: 0,
    explanation: "Informed consent must be obtained before any study-specific procedure is carried out, including screening."
  },
  {
    id: "a20q10",
    text: "Investigators are required to report adverse events occurring during a clinical trial to which of the following agencies?",
    options: ["Regulatory authority", "Sponsor", "Institutional Ethics Committee", "All of the above"],
    correctAnswer: 3,
    explanation: "Adverse events, and especially serious adverse events, must be reported to the sponsor, the ethics committee and the regulatory authority. In India, SAEs must be reported within 24 hours."
  },
  {
    id: "a20q11",
    text: "A method of allocating treatment such that each subject has an equal chance of receiving any of the possible treatments in a clinical trial is known as:",
    options: ["Blinding", "Randomization", "Allocation concealment", "None of the above."],
    correctAnswer: 1,
    explanation: "Randomization gives each participant an equal chance of receiving any treatment. Blinding hides the treatment after it is allocated, and allocation concealment hides the upcoming assignment before enrolment."
  },
  {
    id: "a20q12",
    text: "Which of the following statements regarding document storage and archival after the conclusion of a trial; is correct?",
    options: [
      "If the data is computerized, there is no need to archive paper based records.",
      "The investigator has a right to refuse to show the data even to regulatory authorities",
      "Archival for a period of 5 - 15 years as per the requirement of the sponsor may be necessary",
      "All of the above"
    ],
    correctAnswer: 2,
    explanation: "Trial documents must be archived for years after the trial, often 5-15 years depending on the sponsor and regulations. Paper records must be kept even when data are computerized, and regulators must be given access."
  },
  {
    id: "a20q13",
    text: "Which of the following is not true?",
    options: [
      "Data Safety Monitoring Body (DSMB) is an independent entity.",
      "DSMB is appointed by the Investigators",
      "DSMB periodically reviews and evaluates the accumulated study data for participants’ safety",
      "DSMB assures that the scientific integrity of the trial is maintained during the period of interim analysis"
    ],
    correctAnswer: 1,
    explanation: "The DSMB is independent and is set up by the sponsor or funder, not by the investigators. This avoids conflicts of interest during interim analyses."
  },
  {
    id: "a20q14",
    text: "An unexpected clinical/ familial/ social problem that occurs while on treatment with a drug or other therapy during participation in a clinical trial without any judgment about causality or relationship to the drug is known as:",
    options: ["Serious adverse event", "Adverse event", "Reportable event", "None of the above"],
    correctAnswer: 1,
    explanation: "An adverse event is any untoward occurrence during a trial, recorded without any judgment about whether the drug caused it. A serious adverse event additionally requires a seriousness criterion such as death or hospitalization."
  },
  {
    id: "a20q15",
    text: "Clinical trials require review at various levels as per the in-country guidelines. State whether true or false.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "Clinical trials need scientific, ethics and regulatory review (including CDSCO, and HMSC when relevant), as well as CTRI registration, as required by Indian guidelines."
  },
  {
    id: "a20q16",
    text: "The most common method of preventing potential harm to study participants is by adhering to ‘trial stoppage rules’ based on evidence on unacceptable toxicity or adverse effects rates seen during monitoring. State whether true or false.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "Stopping rules set in advance in the protocol, based on toxicity or adverse event thresholds seen during monitoring, allow a trial to be halted promptly to protect participants."
  },
  {
    id: "a20q17",
    text: "Which of the following is true about screening protocol of a clinical trial?",
    options: [
      "Those who are interested in participating in the trial participate in an interview may have to undergo medical examination",
      "Eligibility of the potential participant is determined in screening",
      "Information on study related procedures and inclusion and exclusion criteria are provided by the study investigators to the potential participants",
      "All the above three statements are true"
    ],
    correctAnswer: 3,
    explanation: "During screening, investigators explain the study procedures and the inclusion and exclusion criteria, and interested volunteers are interviewed and examined. Eligibility is decided before enrolment, so all three statements are true."
  },
  {
    id: "a20q18",
    text: "Reimbursements for which of the following raise no ethical questions?",
    options: [
      "Compensating for the time spent in coming over and the loss of daily wages due to participation",
      "For the travel cost involved",
      "For food expenses",
      "‘a’, ‘b’ and ‘c’"
    ],
    correctAnswer: 3,
    explanation: "Reimbursing time and lost wages, travel and food only covers the costs of taking part. These payments are not inducements, so they raise no ethical concern."
  },
  {
    id: "a20q19",
    text: "Which of the following statements is wrong?",
    options: [
      "Drug Controller General of India is a Regulatory Authority in India",
      "Institutional Governing Board is responsible for scientific review of projects",
      "Institutional Ethics Committee is responsible for ethics review of a proposal",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "Scientific review is done by the Scientific Advisory Committee, not the Governing Board, which handles administration and policy. The DCGI regulates, and the ethics committee does ethics review."
  },
  {
    id: "a20q20",
    text: "Which of the following are NOT methods for identifying and preventing potential harm to study participants?",
    options: [
      "Adverse and serious adverse events reporting",
      "Periodic review of the project by Data Safety Monitoring Board",
      "Close watch on enrolment targets",
      "Regular monitoring of the trial by a pre-identified monitoring agency"
    ],
    correctAnswer: 2,
    explanation: "Tracking enrolment targets concerns trial progress, not safety. Adverse event reporting, DSMB review and regular monitoring are all ways of identifying and preventing harm."
  },
  {
    id: "a20q21",
    text: "State whether true or false. The scientific advisory committee examines the safety and welfare of the research participants in a trial.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "The Scientific Advisory Committee reviews scientific merit. Participant safety and welfare are the responsibility of the ethics committee and, during the trial, the DSMB."
  },
  {
    id: "a20q22",
    text: "If the project is getting funded internationally, which of the following committees looks at the regulatory affairs?",
    options: ["Health ministry screening committee", "Genetic engineering approval committee", "Ethics committee", "All the above"],
    correctAnswer: 0,
    explanation: "In India, projects with international funding or collaboration must be cleared by the Health Ministry Screening Committee (HMSC). It reviews the regulatory side, including sample transfer and collaboration terms. GEAC deals only with GMOs, and ethics committees deal with participant welfare."
  },
  {
    id: "a20q23",
    text: "State whether true or false. In order for a clinical trial to be ethically appropriate, participants must give their informed voluntary consent.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Informed, voluntary consent is a core requirement of research ethics. Participants must understand the study and agree without coercion, and they keep the right to withdraw at any time."
  },
  {
    id: "a20q24",
    text: "Which of the following is FALSE with regard to data analysis in clinical trials?",
    options: [
      "Baseline characteristics of participants should be compared across study arms",
      "Interim analysis can be performed if prestated in the protocol",
      "Analyses in clinical trials are only descriptive in nature",
      "People who are lost to follow up can be included in the analysis"
    ],
    correctAnswer: 2,
    explanation: "This statement is false. Clinical trials use inferential statistics such as hypothesis tests, confidence intervals and effect measures, not only descriptive statistics. Baseline comparison, pre-planned interim analysis and including participants lost to follow-up (intention-to-treat) are all valid practices."
  },
  {
    id: "a20q25",
    text: "Which of the following is FALSE when dealing with serious adverse events in a clinical trial?",
    options: [
      "Making provision for free treatment",
      "Informing the regulatory authorities",
      "Taking action only if 1% are affected by the adverse events",
      "Withdrawing the implicated intervention for the affected"
    ],
    correctAnswer: 2,
    explanation: "This statement is false. Every serious adverse event needs prompt action: free treatment, reporting to the regulator, sponsor and ethics committee, and withdrawing the intervention if needed. There is no 1% threshold before acting."
  },
  {
    id: "a20q26",
    text: "A trial can be prematurely stopped if",
    options: ["A significant unanticipated risk is demonstrated", "The investigators lose interest", "The principal investigator retires", "Minor adverse events are reported"],
    correctAnswer: 0,
    explanation: "A trial is stopped early for participant safety, such as a significant unexpected risk, or for clear benefit or futility. Loss of interest, the PI retiring or minor adverse events are not valid reasons."
  },
  {
    id: "a20q27",
    text: "Data Safety Monitoring Body (DSMB) is primarily responsible for which of the following?",
    options: [
      "Periodically review and evaluate the accumulated study data for participant safety",
      "Periodically review and evaluate the study conduct and progress",
      "Make recommendations concerning the continuation, modification, or termination of a clinical trial",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All of the above. The independent DSMB periodically reviews accumulating safety data and how the study is being conducted. It then recommends whether the trial should continue, be modified or be stopped."
  },
  {
    id: "a20q28",
    text: "Which of the following is NOT an advantage of a Randomized Controlled Trial?",
    options: [
      "Controls for confounding bias effectively",
      "Provides high level of evidence",
      "Can be conducted in the community or hospital",
      "Blinding in trial eliminates selection bias"
    ],
    correctAnswer: 3,
    explanation: "This is not an advantage because it is false. Randomization with allocation concealment prevents selection bias, while blinding reduces performance and measurement bias. Controlling confounding, high-level evidence and flexibility of setting are real advantages of RCTs."
  },
  {
    id: "a20q29",
    text: "Which of the following statement is FALSE with regards to a Randomized Controlled Trial?",
    options: [
      "Adverse events should be reported to the Data Safety Monitoring Board",
      "Trial related documents must be archived after the trial is over",
      "Drug trials ideally should have a pre-defined stoppage rule",
      "Ethics committee clearance cannot be withdrawn after initial approval"
    ],
    correctAnswer: 3,
    explanation: "This statement is false. Ethics committees carry out continuing review and can suspend or withdraw approval if there are safety concerns or protocol violations. The other statements describe standard good practice."
  },
  {
    id: "a20q30",
    text: "State whether true or false. It is unethical to use a placebo for the control arm instead of the current standard of care in a clinical trial.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True, per the key. When a proven standard treatment exists, giving controls a placebo denies them effective care, which is unethical. A placebo can still be acceptable when no proven treatment exists, or as an add-on to standard care."
  },
  {
    id: "a20q31",
    text: "State whether true or false. The scientific advisory committee examines the safety and welfare of the research participants in a trial.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "The Scientific Advisory Committee reviews scientific merit. Participant safety and welfare are the responsibility of the ethics committee and, during the trial, the DSMB."
  },
  {
    id: "a20q32",
    text: "If the project is getting funded internationally, which of the following committees looks at the regulatory affairs?",
    options: ["Health ministry screening committee", "Genetic engineering approval committee", "Ethics committee", "All the above"],
    correctAnswer: 0,
    explanation: "In India, projects with international funding or collaboration must be cleared by the Health Ministry Screening Committee (HMSC). It reviews the regulatory side, including sample transfer and collaboration terms. GEAC deals only with GMOs, and ethics committees deal with participant welfare."
  },
  {
    id: "a20q33",
    text: "State whether true or false. In order for a clinical trial to be ethically appropriate, participants must give their informed voluntary consent.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Informed, voluntary consent is a core requirement of research ethics. Participants must understand the study and agree without coercion, and they keep the right to withdraw at any time."
  },
  {
    id: "a20q34",
    text: "Which of the following is FALSE with regard to data analysis in clinical trials?",
    options: [
      "Baseline characteristics of participants should be compared across study arms",
      "Interim analysis can be performed if prestated in the protocol",
      "Analyses in clinical trials are only descriptive in nature",
      "People who are lost to follow up can be included in the analysis"
    ],
    correctAnswer: 2,
    explanation: "This statement is false. Clinical trials use inferential statistics such as hypothesis tests, confidence intervals and effect measures, not only descriptive statistics. Baseline comparison, pre-planned interim analysis and including participants lost to follow-up (intention-to-treat) are all valid practices."
  },
  {
    id: "a20q35",
    text: "Which of the following is FALSE when dealing with serious adverse events in a clinical trial?",
    options: [
      "Making provision for free treatment",
      "Informing the regulatory authorities",
      "Taking action only if 1% are affected by the adverse events",
      "Withdrawing the implicated intervention for the affected"
    ],
    correctAnswer: 2,
    explanation: "This statement is false. Every serious adverse event needs prompt action: free treatment, reporting to the regulator, sponsor and ethics committee, and withdrawing the intervention if needed. There is no 1% threshold before acting."
  },
  {
    id: "a20q36",
    text: "A trial can be prematurely stopped if",
    options: ["A significant unanticipated risk is demonstrated", "The investigators lose interest", "The principal investigator retires", "Minor adverse events are reported"],
    correctAnswer: 0,
    explanation: "A trial is stopped early for participant safety, such as a significant unexpected risk, or for clear benefit or futility. Loss of interest, the PI retiring or minor adverse events are not valid reasons."
  },
  {
    id: "a20q37",
    text: "Data Safety Monitoring Body (DSMB) is primarily responsible for which of the following?",
    options: [
      "Periodically review and evaluate the accumulated study data for participant safety",
      "Periodically review and evaluate the study conduct and progress",
      "Make recommendations concerning the continuation, modification, or termination of a clinical trial",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All of the above. The independent DSMB periodically reviews accumulating safety data and how the study is being conducted. It then recommends whether the trial should continue, be modified or be stopped."
  },
  {
    id: "a20q38",
    text: "Which of the following is NOT an advantage of a Randomized Controlled Trial?",
    options: [
      "Controls for confounding bias effectively",
      "Provides high level of evidence",
      "Can be conducted in the community or hospital",
      "Blinding in trial eliminates selection bias"
    ],
    correctAnswer: 3,
    explanation: "This is not an advantage because it is false. Randomization with allocation concealment prevents selection bias, while blinding reduces performance and measurement bias. Controlling confounding, high-level evidence and flexibility of setting are real advantages of RCTs."
  },
  {
    id: "a20q39",
    text: "Which of the following statement is FALSE with regards to a Randomized Controlled Trial?",
    options: [
      "Adverse events should be reported to the Data Safety Monitoring Board",
      "Trial related documents must be archived after the trial is over",
      "Drug trials ideally should have a pre-defined stoppage rule",
      "Ethics committee clearance cannot be withdrawn after initial approval"
    ],
    correctAnswer: 3,
    explanation: "This statement is false. Ethics committees carry out continuing review and can suspend or withdraw approval if there are safety concerns or protocol violations. The other statements describe standard good practice."
  },
  {
    id: "a20q40",
    text: "State whether true or false. It is unethical to use a placebo for the control arm instead of the current standard of care in a clinical trial.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True, per the key. When a proven standard treatment exists, giving controls a placebo denies them effective care, which is unethical. A placebo can still be acceptable when no proven treatment exists, or as an add-on to standard care."
  },
  {
    id: "a20q41",
    text: "State whether true or false. A clause regarding the collection, storage and use of biological samples for research purposes should be mentioned in the participant information sheet.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. The participant information sheet must explain how biological samples will be collected, stored, used and possibly shared, including any future research use. It must also state the participant's right to withdraw their samples."
  },
  {
    id: "a20q42",
    text: "Which of the following is CORRECT with regard to the process of informed consent for an illiterate person?",
    options: [
      "Cannot be witnessed by members of the research team",
      "Can be witnessed by illiterate family member",
      "Can be witnessed by any literate person who is not part of the study",
      "Illiterate persons cannot be included in the study"
    ],
    correctAnswer: 2,
    explanation: "For an illiterate participant, consent is given by thumb impression in front of an impartial witness. The witness must be literate and must not be part of the study team, so that they can confirm the information was explained accurately."
  },
  {
    id: "a20q43",
    text: "A study design that randomly assigns participants into an experimental group or a control group is called _______________.",
    options: ["Cohort study", "Randomized controlled trials", "Case-control study", "Cross-sectional study"],
    correctAnswer: 1,
    explanation: "A randomized controlled trial randomly allocates participants to intervention and control groups. Cohort, case-control and cross-sectional studies are observational designs with no assignment by the investigator."
  },
  {
    id: "a20q44",
    text: "Investigators are required to report adverse events occurring during a clinical trial to all the following agencies EXCEPT:",
    options: ["Regulatory authority", "Sponsor", "Institutional Ethics Committee", "Scientific Advisory Committee"],
    correctAnswer: 3,
    explanation: "Adverse events are reported to the regulatory authority, the sponsor and the ethics committee, and to the DSMB if there is one. A scientific advisory committee reviews methodology before the study starts and does not receive safety reports."
  },
  {
    id: "a20q45",
    text: "A randomized controlled trial can be prematurely stopped if:",
    options: [
      "The investigators lose interest",
      "A significant unanticipated risk is demonstrated",
      "When results show no justification for exposing participants to additional potential risk",
      "Both “b” and “c” are correct"
    ],
    correctAnswer: 3,
    explanation: "Both b and c. A trial can be stopped early for significant unanticipated risk, or when the results show no justification for exposing participants to further risk (futility or clear benefit). Investigators losing interest is not a valid reason."
  },
  {
    id: "a20q46",
    text: "A post graduate researcher conducted a clinical trial to compare the effect of a new drug over a standard drug given for control of ‘Type-2 Diabetes Mellitus’. Neither the participants nor the investigators knew which drug each participant received. This design is called:",
    options: ["Open labelled", "Double blinding", "Single blinding", "Triple blinding"],
    correctAnswer: 1,
    explanation: "When neither the participants nor the investigators know who receives the new or the standard drug, the trial is double blinded, which minimises bias."
  },
  {
    id: "a20q47",
    text: "The primary function of the scientific review committee is_____________.",
    options: [
      "Checking if the safety and welfare of the research participants is adequately protected",
      "Checking whether the research methods are appropriate",
      "Confirming if the participants are available for the study",
      "Identifying eligibility for funding"
    ],
    correctAnswer: 1,
    explanation: "The scientific review committee checks scientific merit, meaning whether the research question, design and methods are appropriate. Protecting participant safety and welfare is the job of the ethics committee."
  },
  {
    id: "a20q48",
    text: "State whether true or false. Researchers who have no institutional affiliation can use the independent ethics committees that function outside institutions.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Researchers with no institutional affiliation, or whose institution has no ethics committee, can submit to registered independent ethics committees that operate outside institutions."
  },
  {
    id: "a20q49",
    text: "Which of the following is INCORRECT about the study participants of randomized controlled trials?",
    options: [
      "All trial participants are reimbursed irrespective of the damages",
      "Verbal consent of trial participants is sufficient for conducting the trial",
      "Compensation to the trial participants is given only if the damage has occurred",
      "One copy of informed consent is given to the trial participants"
    ],
    correctAnswer: 1,
    explanation: "This statement is incorrect. Clinical trials require written informed consent, with a thumb impression and impartial witness for illiterate participants, and in some cases audio-visual recording. Verbal consent alone is not sufficient."
  },
  {
    id: "a20q50",
    text: "In randomized controlled trials, matters related to reimbursement and compensation for research participants are reviewed by the_____________.",
    options: ["Scientific committee", "Ethics committee", "Study Investigator", "Research participants"],
    correctAnswer: 1,
    explanation: "The ethics committee reviews reimbursement and compensation, so that payments are fair, do not become undue inducement, and provide for trial-related injury."
  }
];