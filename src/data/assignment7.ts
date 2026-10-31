import { Question } from '../types';

export const ASSIGNMENT_7_QUESTIONS: Question[] = [
  {
    id: "a7q1",
    text: "One of the cornerstones of the randomized controlled trials is",
    options: ["Recruitment", "Randomization", "Blinding", "Placebo"],
    correctAnswer: 1,
    explanation: "Randomization is the defining feature of an RCT; it balances known and unknown confounders between groups so outcome differences can be attributed to the intervention."
  },
  {
    id: "a7q2",
    text: "Randomized clinical trials can be best described as",
    options: ["Experimental studies", "Analytic studies", "Descriptive studies", "Observational studies"],
    correctAnswer: 0,
    explanation: "RCTs are experimental studies because the investigator actively assigns the intervention rather than merely observing naturally occurring exposures."
  },
  {
    id: "a7q3",
    text: "Which of the following is/are true in a clinical trial?",
    options: ["Sample size determination", "Approval from regulatory authority", "Agreement between the investigators and sponsors", "All of the above"],
    correctAnswer: 3,
    explanation: "A clinical trial requires sample size determination, regulatory approval, and a formal agreement between investigators and sponsors, so all of the above are true."
  },
  {
    id: "a7q4",
    text: "A pharmacologically inactive agent that investigators administer to participants in the control group of a trial",
    options: ["Comparator drug", "Placebo", "Conjugate", "Drug under investigation"],
    correctAnswer: 1,
    explanation: "A placebo is a pharmacologically inactive substance resembling the active drug, given to the control group to account for placebo effects and enable blinding."
  },
  {
    id: "a7q5",
    text: "Key methodological components of a Randomized Controlled Trials are",
    options: ["Use of a control to which the experimental intervention is compared", "Random assignment of participants to intervention", "Taking informed consent from all study participants", "All of the above"],
    correctAnswer: 3,
    explanation: "Key components of an RCT include a control group for comparison, random allocation of participants, and informed consent from all participants, so all are correct."
  },
  {
    id: "a7q6",
    text: "Double-blinding in a clinical trial involves",
    options: ["Participants before and after study", "Participants and investigators", "Investigators and analysts", "Participants and analysis"],
    correctAnswer: 1,
    explanation: "In double blinding, both the participants and the investigators are unaware of the treatment allocation."
  },
  {
    id: "a7q7",
    text: "The purpose of a double-blinding in a clinical trial is to",
    options: ["Achieve comparability of all arms of a clinical trial", "Avoid observer and participant bias", "Avoid observer bias and sampling variation", "Avoid subject bias and sampling variation"],
    correctAnswer: 1,
    explanation: "Double blinding keeps participants and investigators unaware of allocation, preventing participant (reporting) bias and observer (assessment) bias."
  },
  {
    id: "a7q8",
    text: "What is the purpose of randomization in a clinical trial?",
    options: ["Get better power for data analysis", "Generalizing the study findings to the population which is not studied", "Achieve balance in baseline characteristics", "Guarantee that the statistical tests have valid significance levels"],
    correctAnswer: 2,
    explanation: "Randomization distributes known and unknown confounders equally, producing groups with balanced baseline characteristics so they differ only by the intervention."
  },
  {
    id: "a7q9",
    text: "Which phase of a clinical trial is referred to as post-marketing surveillance?",
    options: ["Phase 1", "Phase 2", "Phase 3", "Phase 4"],
    correctAnswer: 3,
    explanation: "Phase 4 is conducted after a drug is approved and marketed, monitoring real-world safety and rare adverse effects; it is called post-marketing surveillance."
  },
  {
    id: "a7q10",
    text: "Long-term adverse effects and efficacy of a new drug can be tested in which of the following phases of a clinical trial?",
    options: ["Phase 1", "Phase 2", "Phase 3", "Phase 4"],
    correctAnswer: 3,
    explanation: "Long-term adverse effects are assessed in Phase 4 (post-marketing surveillance) in large populations after approval. Phases 1 to 3 are too short and too small to detect rare or delayed effects."
  },
  {
    id: "a7q11",
    text: "Which of the following is incorrect in case of a clinical trial?",
    options: ["All clinical trials must be blinded", "Randomization is a critically important step in a clinical trial", "All clinical trials must be approved by Institutional Ethics Committee before initiation", "It is mandatory to register clinical trials with Clinical Trials Registry of India"],
    correctAnswer: 0,
    explanation: "Blinding is not mandatory; open-label trials are acceptable when blinding is impractical. Ethics approval, randomization, and CTRI registration are required."
  },
  {
    id: "a7q12",
    text: "Which of the following procedures ensure safety of the clinical trial participants? i) Adverse events reporting ii) Serious adverse events reporting iii) Periodic follow-up iv) Review by Data Safety Monitoring Board",
    options: ["i, ii, iii, & iv", "i,ii & iv", "iii & iv", "iv"],
    correctAnswer: 0,
    explanation: "AE reporting, SAE reporting, periodic follow-up, and Data Safety Monitoring Board review all help protect the safety of trial participants."
  },
  {
    id: "a7q13",
    text: "All the following correctly describe a clinical trial, except",
    options: ["It has all advantages of a cohort study", "It is possible to analyze the confounders", "Loss to follow up of study participants does not affect the study outcome", "Appropriate implemented informed consent procedure as well as long-term care and support to trial participants help to overcome several ethical concerns"],
    correctAnswer: 2,
    explanation: "Loss to follow-up does affect trial results, causing attrition bias and loss of power, so this statement is false; the others correctly describe clinical trials."
  },
  {
    id: "a7q14",
    text: "Which of the following can be considered as an advantage of a double blinding in a randomized controlled trial?",
    options: ["Equally distributes known and unknown confounders in experiment and control arm", "Ensures that participants adhere to the protocol", "Gives benefits of an intervention to some of the study participants", "Prevent bias that arises from researchers being able to influence the data due to knowledge of allocated groups"],
    correctAnswer: 3,
    explanation: "Double blinding prevents investigators from influencing data through knowledge of group allocation; balancing confounders is the role of randomization."
  },
  {
    id: "a7q15",
    text: "Biased outcome ascertainment results from:",
    options: ["Participants reporting symptoms or outcomes differently", "Investigators eliciting symptoms or outcomes following a standardized technique", "None of the above", "Both 'a' and 'b'"],
    correctAnswer: 0,
    explanation: "Biased outcome ascertainment arises when participants report symptoms or outcomes differently; using a standardized technique reduces rather than causes bias."
  },
  {
    id: "a7q16",
    text: "In a clinical trial, what is the main purpose of randomization?",
    options: ["To get more power for data analysis", "To reduce investigator bias", "To get groups with comparable baseline characteristics", "To ensure optimum number of participants in each trial arm"],
    correctAnswer: 2,
    explanation: "The main purpose of randomization is to create groups with comparable baseline characteristics by distributing confounders equally between arms."
  },
  {
    id: "a7q17",
    text: "Which of the following can eliminate the problem of Co-intervention?",
    options: ["Random sampling", "Allocation concealment", "Informed consent", "Blinding"],
    correctAnswer: 3,
    explanation: "Blinding prevents co-intervention because participants and investigators who do not know the allocation cannot give or seek extra treatments differentially."
  },
  {
    id: "a7q18",
    text: "Which of the following is not true in case of a clinical trial?",
    options: ["Clinical trials are planned experiments designed to assess the efficacy of an intervention", "Clinical trials usually involve comparing the outcomes in two or more groups of individuals", "Clinical trials are usually free from selection bias", "Clinical trials are usually prospective in nature"],
    correctAnswer: 2,
    explanation: "Clinical trials are not automatically free from selection bias; volunteers, eligibility criteria, and poor allocation concealment can still introduce it."
  },
  {
    id: "a7q19",
    text: "Which of the following trials assesses effectiveness of a new vaccine?",
    options: ["Phase 1 trial done in healthy volunteers", "Phase 2 trial done in a susceptible population", "Phase 3 trial done in healthy volunteers", "Phase 3 trial done in a susceptible population"],
    correctAnswer: 3,
    explanation: "Vaccine efficacy is shown in Phase 3 trials in a large susceptible population, where disease can occur and protection can be measured."
  },
  {
    id: "a7q20",
    text: "Which of the following is not true about a randomized control trial?",
    options: ["Baseline characteristics of intervention and control groups must be similar", "Investigator bias can be minimized by double blinding", "The sample size depends on the hypothesis being tested", "Drop outs should be excluded from the analysis"],
    correctAnswer: 3,
    explanation: "Dropouts should not be excluded; intention-to-treat analysis keeps all randomized participants in their assigned groups to avoid attrition bias."
  },
  {
    id: "a7q21",
    text: "State whether true or false. In a randomized controlled trial, the investigator is unaware of the sequence of allocation of the participants to one of the study arms before and until the assignment is complete. This process is known as allocation concealment.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Keeping the allocation sequence hidden from the investigator until assignment is complete is allocation concealment, which prevents selection bias."
  },
  {
    id: "a7q22",
    text: "Which of the following is NOT a feature of randomized controlled trials?",
    options: ["Simple random sampling", "Randomization", "Allocation concealment", "Blinding"],
    correctAnswer: 0,
    explanation: "Simple random sampling is a survey sampling method, not an RCT feature; RCTs use random allocation, allocation concealment, and blinding."
  },
  {
    id: "a7q23",
    text: "A research group from a medical college in Lucknow conducted a study to assess the efficacy of a new herbal medicine for the prevention of pneumonia in elderly. What type of randomized controlled trial is this study?",
    options: ["Screening RCT", "Diagnostic RCT", "Therapeutic RCT", "Prophylactic RCT"],
    correctAnswer: 3,
    explanation: "The herbal medicine is tested to prevent pneumonia in healthy elderly people, making it a prophylactic (preventive) RCT."
  },
  {
    id: "a7q24",
    text: "In which type of population is a phase-I vaccine trial conducted?",
    options: ["Healthy volunteers", "High risk group", "Diseased population", "Laboratory animals"],
    correctAnswer: 0,
    explanation: "Phase 1 vaccine trials assess safety and immunogenicity in a small number of healthy volunteers."
  },
  {
    id: "a7q25",
    text: "State whether true or false. Randomization is a process, where the participants have an equal chance of being assigned to any one of the study groups.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Randomization gives each participant an equal chance of allocation to any study group, independent of investigator or participant choice."
  },
  {
    id: "a7q26",
    text: "Which of the following is NOT an advantage of randomized controlled trials?",
    options: ["Provides high quality evidence", "Controls for selection and confounding bias", "Establishes temporality of association", "Entails minimal ethical issues"],
    correctAnswer: 3,
    explanation: "RCTs involve significant ethical issues such as placebo use, equipoise, and withholding treatment, so minimal ethical issues is not an advantage."
  },
  {
    id: "a7q27",
    text: "Post-marketing surveillance is done in which of the clinical trial phases?",
    options: ["Phase 1", "Phase 2", "Phase 3", "Phase 4"],
    correctAnswer: 3,
    explanation: "Post-marketing surveillance is Phase 4, conducted after drug approval to detect rare and long-term adverse effects in real-world use."
  },
  {
    id: "a7q28",
    text: "State whether true or false. Randomized controlled trials are retrospective in nature.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. RCTs are prospective: participants are randomized, given the intervention, and followed forward in time for outcomes."
  },
  {
    id: "a7q29",
    text: "In a clinical trial conducted by the Orthopaedic department of a medical college in Bhubaneshwar, the investigators compared the wound healing time between conventional suturing technique and stapling technique for open fractures. The investigators, patients and data analysts were aware about the treatment assignment. What best describes this study design?",
    options: ["Open-label RCT", "Single blind RCT", "Double blind RCT", "Triple blind RCT"],
    correctAnswer: 0,
    explanation: "Since investigators, patients, and analysts all knew the treatment assignment, no one was blinded, making it an open-label RCT."
  },
  {
    id: "a7q30",
    text: "Blinding in a randomized controlled trial addresses which of the following biases?",
    options: ["Ascertainment bias", "Recall bias", "Volunteer bias", "Attrition bias"],
    correctAnswer: 0,
    explanation: "Blinding prevents ascertainment (observer/detection) bias, where knowledge of allocation influences how outcomes are assessed or reported."
  },
  {
    id: "a7q31",
    text: "State whether True or False. In a randomized controlled trial, the investigator is unaware of the sequence of allocation of the participants to one of the study arms before and until the assignment is complete. This process is known as allocation concealment.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Hiding the allocation sequence from the investigator until assignment is complete is allocation concealment, which prevents selection bias."
  },
  {
    id: "a7q32",
    text: "Which of the following is NOT a feature of randomized controlled trials?",
    options: ["Simple random sampling", "Randomization", "Allocation concealment", "Blinding"],
    correctAnswer: 0,
    explanation: "Simple random sampling is a survey sampling method, not an RCT feature; RCTs use random allocation, allocation concealment, and blinding."
  },
  {
    id: "a7q33",
    text: "A research group from a medical college in Lucknow conducted a study to assess the efficacy of a new herbal medicine for the prevention of pneumonia in elderly. What type of randomized controlled trial is this study?",
    options: ["Screening RCT", "Diagnostic RCT", "Therapeutic RCT", "Prophylactic RCT"],
    correctAnswer: 3,
    explanation: "The herbal medicine is tested to prevent pneumonia in healthy elderly people, making it a prophylactic (preventive) RCT."
  },
  {
    id: "a7q34",
    text: "In which type of population is a phase-I vaccine trial conducted?",
    options: ["Healthy volunteers", "High risk group", "Diseased population", "Laboratory animals"],
    correctAnswer: 0,
    explanation: "Phase 1 vaccine trials assess safety and immunogenicity in a small number of healthy volunteers."
  },
  {
    id: "a7q35",
    text: "State whether true or false. Randomization is a process, where the participants have an equal chance of being assigned to any one of the study groups.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Randomization gives each participant an equal chance of allocation to any study group, independent of investigator or participant choice."
  },
  {
    id: "a7q36",
    text: "Which of the following is NOT an advantage of randomized controlled trials?",
    options: ["Provides the highest level of evidence", "Controls for selection and confounding bias", "Establishes temporality of association", "Entails minimal ethical issues"],
    correctAnswer: 3,
    explanation: "RCTs involve significant ethical issues such as placebo use, equipoise, and withholding treatment, so minimal ethical issues is not an advantage."
  },
  {
    id: "a7q37",
    text: "Post-marketing surveillance is done in which of the clinical trial phases?",
    options: ["Phase 1", "Phase 2", "Phase 3", "Phase 4"],
    correctAnswer: 3,
    explanation: "Post-marketing surveillance is Phase 4, conducted after drug approval to detect rare and long-term adverse effects in real-world use."
  },
  {
    id: "a7q38",
    text: "State whether true or false. Randomized controlled trials are retrospective in nature.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. RCTs are prospective: participants are randomized, given the intervention, and followed forward in time for outcomes."
  },
  {
    id: "a7q39",
    text: "In a clinical trial conducted by the Orthopaedic department of a medical college in Bhubaneshwar, the investigators compared the wound healing time between conventional suturing technique and stapling technique for open fractures. The investigators, patients and data analysts were aware about the treatment assignment. What best describes this study design?",
    options: ["Open-label RCT", "Single blind RCT", "Double blind RCT", "Triple blind RCT"],
    correctAnswer: 0,
    explanation: "Since investigators, patients, and analysts all knew the treatment assignment, no one was blinded, making it an open-label RCT."
  },
  {
    id: "a7q40",
    text: "Blinding in a randomized controlled trial addresses which of the following biases?",
    options: ["Ascertainment bias", "Recall bias", "Volunteer bias", "Attrition bias"],
    correctAnswer: 0,
    explanation: "Blinding prevents ascertainment (observer/detection) bias, where knowledge of allocation influences how outcomes are assessed or reported."
  },
  {
    id: "a7q41",
    text: "State whether true or false. In a randomized controlled trial, the investigator is unaware of the sequence of allocation of the participants to one of the study arms before and until the assignment is complete. This process is known as 'Blinding'.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. This describes allocation concealment, not blinding; blinding refers to unawareness of the treatment received after allocation."
  },
  {
    id: "a7q42",
    text: "The following are a feature of randomized controlled trials EXCEPT",
    options: ["Randomization", "Simple random sampling", "Allocation concealment", "Blinding"],
    correctAnswer: 1,
    explanation: "Simple random sampling is used in surveys to select representative samples; it is not a feature of RCTs, which use random allocation instead."
  },
  {
    id: "a7q43",
    text: "State whether true or false. Randomized controlled trials are prospective in nature.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. RCTs are prospective, enrolling and randomizing participants and then following them forward to observe outcomes."
  },
  {
    id: "a7q44",
    text: "A trial was conducted to evaluate a new vaccine for the prevention of COVID-19 among children. What type of randomized controlled trial is this study?",
    options: ["Screening RCT", "Diagnostic RCT", "Therapeutic RCT", "Prophylactic RCT"],
    correctAnswer: 3,
    explanation: "A vaccine trial aims to prevent COVID-19 in healthy children, so it is a prophylactic (preventive) RCT."
  },
  {
    id: "a7q45",
    text: "In a clinical trial of an investigational new drug, the participants were blinded to their treatment allocation. However, the investigators and data analysts were aware about the treatment allocation. Therefore, this randomized controlled trial would be considered as",
    options: ["Double blinded", "Triple blinded", "Single blinded", "None of the above"],
    correctAnswer: 2,
    explanation: "Only the participants were unaware of the allocation while investigators and analysts knew, so the trial is single blinded."
  },
  {
    id: "a7q46",
    text: "State whether true or false. Participants are randomized in a randomized controlled trial to ensure that the groups are similar apart from the intervention.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Randomization distributes known and unknown confounders equally so the groups are similar in all respects except the intervention."
  },
  {
    id: "a7q47",
    text: "In a randomized controlled trial, overly restrictive exclusion criteria may result in which of the following?",
    options: ["Decreased external validity", "Decreased internal validity", "Problems with recruitment", "Both 'Decreased external validity' and 'Problems with recruitment'"],
    correctAnswer: 3,
    explanation: "Overly restrictive exclusion criteria make the sample unrepresentative, reducing external validity, and shrink the eligible pool, causing recruitment problems."
  },
  {
    id: "a7q48",
    text: "A pharmacologically inactive agent that investigators administer to participants in the control group of a randomized controlled trial is called as:",
    options: ["Comparator drug", "Conjugate", "Placebo", "Drug under investigation"],
    correctAnswer: 2,
    explanation: "A placebo is a pharmacologically inactive agent identical in appearance to the active drug, given to the control group of an RCT."
  },
  {
    id: "a7q49",
    text: "External validity of an experiment refers to which of the following?",
    options: ["Results have been obtained from cross cultural studies", "Results are generalizable to the general population", "Experiments were performed in the laboratory", "Results are replicable"],
    correctAnswer: 1,
    explanation: "External validity refers to the generalizability of study results to the wider population beyond the study participants."
  },
  {
    id: "a7q50",
    text: "In a clinical trial, the study investigators compared a new analgesic with placebo for the control of pain in arthritis. The investigators and patients were not aware about the treatment assignment. What best describes this study design?",
    options: ["Open-label RCT", "Single blind RCT", "Double blind RCT", "Triple blind RCT"],
    correctAnswer: 2,
    explanation: "Both investigators and patients were unaware of the treatment assignment, which defines a double-blind RCT."
  }
];