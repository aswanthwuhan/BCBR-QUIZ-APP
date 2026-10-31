import { Question } from '../types';

export const ASSIGNMENT_23_QUESTIONS: Question[] = [
  {
    id: "a23q1",
    text: "All of the following statements regarding research publications are correct, EXCEPT",
    options: [
      "Publishing paper is important for getting promotion in academic institutions",
      "Publishing research findings help to identify the research gaps",
      "Negative findings in a research should not be published",
      "Publishing research findings improves the credibility of a researcher"
    ],
    correctAnswer: 2,
    explanation: "Negative findings should be published. Leaving them out causes publication bias and wastes resources. The other statements about publishing are true."
  },
  {
    id: "a23q2",
    text: "A senior resident of Psychiatry department of a medical college wrote a manuscript based on his thesis work. He has put his wife's name as a co-author who is working in the Physiology department of the same college. Which of the following statements supports the act of the senior resident in providing authorship to his wife?",
    options: [
      "He can give authorship to anyone since it is his research work",
      "The guide should decide on who should be the authors",
      "His wife has contributed in designing the residents’ thesis work",
      "It is not a good practice to include researcher from different department as authors"
    ],
    correctAnswer: 2,
    explanation: "Authorship is based on substantial contribution (ICMJE criteria), such as helping design the study, not on relationship or department. She must also meet the drafting, approval and accountability criteria."
  },
  {
    id: "a23q3",
    text: "Which of the following is incorrect about authorship?",
    options: [
      "Authorship confers credit, implies responsibility and accountability of the published work",
      "International Committee of Medical Journal Editors recommends criteria on authorship",
      "It is mandatory to declare the contribution of each author",
      "It is not mandatory that all authors should approve the final version of the manuscript"
    ],
    correctAnswer: 3,
    explanation: "This statement is incorrect because ICMJE requires every author to give final approval of the version to be published. Authorship confers credit and accountability, and contribution statements are commonly required."
  },
  {
    id: "a23q4",
    text: "Which of the following is false about plagiarism?",
    options: [
      "It can be copying and pasting of contents from a published manuscript",
      "It can be copying someone's idea",
      "It is not considered as a serious publication misconduct",
      "'Urkund' is one of the software used to check plagiarism"
    ],
    correctAnswer: 2,
    explanation: "This is false because plagiarism, along with fabrication and falsification, is a serious form of research misconduct. Copying text or ideas counts as plagiarism, and Urkund is a plagiarism-checking tool."
  },
  {
    id: "a23q5",
    text: "Which of the following is (are) the consequence(s) of plagiarism of manuscript?",
    options: [
      "The journal can retract the manuscript",
      "Institute can take action on the author/researcher",
      "The researcher loses professional reputation",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Plagiarism can lead to retraction of the article by the journal, disciplinary action by the institution, and loss of the researcher's professional reputation, so all options apply."
  },
  {
    id: "a23q6",
    text: "You have finished writing a manuscript and plan to publish it. Which of the following is the best practice?",
    options: [
      "Submit to multiple journals at the same time",
      "Submit to a journal and wait for the journal's response",
      "Submit to many journals; once it gets published in one journal, withdraw it from the other journals",
      "Submit to one journal and after a week submit to another journal"
    ],
    correctAnswer: 1,
    explanation: "A manuscript should be under consideration at only one journal at a time. Submitting to several journals simultaneously is publication misconduct; resubmit elsewhere only after rejection or formal withdrawal."
  },
  {
    id: "a23q7",
    text: "A researcher conducted a study to identify risk factors for exacerbation of bronchial asthma. The researcher was due for job promotion. However, the researcher did not have enough publications to ensure promotion. Hence, in order to have maximum number of publications from the work, the researcher decided to produce three different manuscripts instead of one manuscript comprehensively covering all aspects of the study. What is this act called?",
    options: ["Plagiarism", "Falsification", "Salami slicing", "Fabrication"],
    correctAnswer: 2,
    explanation: "Splitting the results of a single study into several smaller papers to increase publication count is called salami slicing. It is not plagiarism, falsification or fabrication."
  },
  {
    id: "a23q8",
    text: "Which of the following organizations directly deals with publication ethics?",
    options: [
      "Indian Medical Association (IMA)",
      "Committee on Publication Ethics (COPE)",
      "World Health Organization (WHO)",
      "Joint National Committee (JNC)"
    ],
    correctAnswer: 1,
    explanation: "The Committee on Publication Ethics (COPE) provides guidance to editors and publishers on publication ethics and misconduct. IMA, WHO and JNC do not directly deal with publication ethics."
  },
  {
    id: "a23q9",
    text: "A group of researchers submitted a manuscript for publication based on a drug trial. Because they did not register under the clinical trial registry of India (CTRI), one reputed journal rejected the paper. The researcher resubmitted the paper in a different journal and this journal published it without asking any queries. Which of the following is the correct statement?",
    options: [
      "It is necessary to register all drug trials under CTRI",
      "The journal which published the paper is likely to be a predatory journal",
      "Both 'a' and 'b' are correct",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Drug trials in India must be registered prospectively with CTRI, and a journal that publishes an unregistered trial without any queries or peer review is likely predatory. So both statements are correct."
  },
  {
    id: "a23q10",
    text: "Among the following which is the best practice for determining the authorship?",
    options: [
      "Authorship can be based on the criteria given by ICMJE",
      "Authorship should be decided after submission to a journal",
      "It is necessary to include head of the department/institution as a co-author",
      "Authorship can be gifted to friends even if they have not contributed to that study"
    ],
    correctAnswer: 0,
    explanation: "Authorship should be based on ICMJE criteria and decided early. Adding the department head or friends without contribution is gift authorship, and deciding after submission invites disputes."
  },
  {
    id: "a23q11",
    text: "Which of the following is incorrect about publishing a research work?",
    options: [
      "Publishing paper is important for getting promotion in academic institutions",
      "Publishing research findings helps to identify the research gaps",
      "Common people should not read such research findings",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "This is incorrect because research findings should be disseminated widely, including to the public. Publishing helps academic promotion and identifies research gaps."
  },
  {
    id: "a23q12",
    text: "All clinical trials in India should be registered with Clinical Trial Registry of India.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Clinical trials in India should be prospectively registered with the Clinical Trials Registry of India (CTRI) before enrolling the first participant, as required by regulators and ICMR guidelines."
  },
  {
    id: "a23q13",
    text: "A neonatologist planned to conduct a clinical trial to explore the effect of intervention X on hypothermia of the newborn children (Age <7 days) over intervention A (The current practice). All the following are true about the trial, except",
    options: [
      "Ethics Committee approval is a must to conduct the trial",
      "The trial should be registered under the Clinical Trial Registry of India",
      "Informed consent should be taken from either of the parents",
      "Age appropriate assent is a must in this trial"
    ],
    correctAnswer: 3,
    explanation: "Assent is not applicable to neonates under 7 days old because they cannot understand or agree; assent is sought from children of about 7 years and above. Ethics approval, CTRI registration and parental consent are required."
  },
  {
    id: "a23q14",
    text: "Manipulating data is known as fabrication",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Manipulating or altering real data is falsification. Fabrication means making up data that were never collected."
  },
  {
    id: "a23q15",
    text: "Which of the following best describes 'gift' (honorary) authorship?",
    options: [
      "Listing a person who does not meet authorship criteria, for example because of seniority",
      "Omitting a person who wrote the manuscript",
      "Publishing the same data twice",
      "Splitting one study into several papers"
    ],
    correctAnswer: 0,
    explanation: "Gift or honorary authorship credits someone who did not make a qualifying contribution. Omitting a writer is ghost authorship, and the other options are duplicate publication and salami slicing."
  },
  {
    id: "a23q16",
    text: "A group of researchers submitted a manuscript in a reputed journal. Even after 5 months of submission, they did not receive the peer review comments from the journal. The authors decided to submit the manuscript to a different journal without informing the editor of the previous journal. Which of the following term describes the situation best?",
    options: ["Duplicate publication", "Simultaneous submission", "Self-citation", "Breach of confidentiality"],
    correctAnswer: 1,
    explanation: "Submitting a manuscript to another journal while it is still under consideration at the first, without formally withdrawing it, is simultaneous submission, which is publication misconduct."
  },
  {
    id: "a23q17",
    text: "Dr. D has copied the idea of Dr. A for his thesis. Copying an idea shouldn’t be considered as plagiarism.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Plagiarism includes using another person's ideas, not just their words, without proper credit. Copying Dr. A's idea is idea plagiarism."
  },
  {
    id: "a23q18",
    text: "Dr. A is in the process of writing review of literature for her thesis. Her guide has instructed her to avoid plagiarism. Dr. A should take all the following measures to avoid plagiarism, except",
    options: ["Avoid copying and pasting", "Acknowledge original sources", "Take help of anti-plagiarism software", "Copy from her own previous work"],
    correctAnswer: 3,
    explanation: "Copying from one's own previous work without citation is self-plagiarism, so it does not avoid plagiarism. Avoiding copy-paste, citing sources and using anti-plagiarism software are valid measures."
  },
  {
    id: "a23q19",
    text: "Which of the following is correct in relation to the conflict of interest?",
    options: [
      "Conflict of interest is always financial",
      "Conflict of interest necessarily changes the outcome of interest",
      "It is recommended to hide the COI during submission of a manuscript",
      "Readers can determine the influence of COI on conclusion of the paper"
    ],
    correctAnswer: 3,
    explanation: "Disclosing conflict of interest allows readers to judge its possible influence on the conclusions. COI is not always financial, does not necessarily change results, and must never be hidden."
  },
  {
    id: "a23q20",
    text: "An editor of a reputed journal found that most of the finding of a manuscript matches with a previously published paper by different authors. The editor considered it as a case of plagiarism. Which of the following about plagiarism is true?",
    options: [
      "The journal can retract the article, if already published",
      "The editor can inform the authors’ institute about it",
      "The researchers may lose their reputation",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "When plagiarism is confirmed, the journal can retract the article, the editor can inform the authors' institution, and the researchers may lose their reputation, so all options are true."
  },
  {
    id: "a23q21",
    text: "Which of the following is TRUE regarding a clinical trial?",
    options: [
      "It is mandatory to register the trial under ‘Clinical Trials Registry of India’ after completing it.",
      "Ethical issues are considerably low in clinical trials when compared with descriptive studies.",
      "Informed consent is a must for recruiting a study participant in a clinical trial",
      "Both ‘a’ and ‘c’"
    ],
    correctAnswer: 2,
    explanation: "Informed consent is mandatory before recruiting a participant into a clinical trial. CTRI registration must be done before enrolment, not after completion, and trials carry more ethical issues than descriptive studies."
  },
  {
    id: "a23q22",
    text: "Altering the original data to obtain a statistically significant result by the researcher is known as",
    options: ["Fabrication", "Falsification", "Fascination", "Fasciation"],
    correctAnswer: 1,
    explanation: "Altering real data to obtain a statistically significant result is falsification. Fabrication is inventing data that were never collected; fascination and fasciation are distractors."
  },
  {
    id: "a23q23",
    text: "All the following help in reducing ethical issues associated with research publication, EXCEPT",
    options: [
      "Obtaining the institutional ethics committee permission",
      "Including a guest author to improve the acceptance of the manuscript",
      "Obtaining permission from the copyright holder to reproduce a figure",
      "Declaring familial relationship between an author and the CEO of the funding agency"
    ],
    correctAnswer: 1,
    explanation: "Including a guest author who has not contributed is gift authorship, which is itself unethical. Ethics approval, copyright permission and declaring conflicts of interest all reduce ethical issues."
  },
  {
    id: "a23q24",
    text: "Which of the following is INCORRECT about publishing research finding?",
    options: [
      "Publication often helps in career progression and academic promotion",
      "It is a way to communicate research findings with the peer groups",
      "Conflicts of interest can be suppressed as it has implication in study findings",
      "It identifies research gaps"
    ],
    correctAnswer: 2,
    explanation: "This is incorrect because conflicts of interest must be disclosed, not suppressed, precisely because they may influence findings. Publication aids promotion, communicates findings and identifies research gaps."
  },
  {
    id: "a23q25",
    text: "State whether true or false. Communicating with the journal and coordinating responses to reviewers' comments is primarily the responsibility of the first author rather than the corresponding author.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. The corresponding author, not necessarily the first author, is mainly responsible for communicating with the journal and coordinating responses to reviewers' comments."
  },
  {
    id: "a23q26",
    text: "Submitting a manuscript to more than one journal at the same time is known as",
    options: ["Duplicate publication", "Self-citation", "Simultaneous submission", "Peer review"],
    correctAnswer: 2,
    explanation: "Sending the same manuscript to more than one journal at the same time is simultaneous submission. Duplicate publication refers to the same work actually being published twice."
  },
  {
    id: "a23q27",
    text: "Which of the following is NOT an essential criterion for authorship?",
    options: ["Conceptualizing the study", "Drafting the manuscript", "Approval of the final manuscript", "Being departmental head"],
    correctAnswer: 3,
    explanation: "Being a departmental head is not an authorship criterion; adding someone for their position is gift authorship. ICMJE criteria include contribution to conception, drafting, final approval and accountability."
  },
  {
    id: "a23q28",
    text: "A Postgraduate in a medical college submitted a proposal to the ethics committee of the institute. The committee found that the proposal is a near copy of an earlier proposal from the same department. This act of the PG can be best termed as",
    options: ["Fabrication", "Falsification", "Plagiarism", "Breach of confidentiality"],
    correctAnswer: 2,
    explanation: "Submitting a near copy of someone else's earlier proposal as one's own without acknowledgement is plagiarism. No data are involved, so fabrication and falsification do not apply."
  },
  {
    id: "a23q29",
    text: "State whether true or false. Unpublished work must be acknowledged in a manuscript",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Ideas or data taken from unpublished work must be acknowledged, for example as personal communication or unpublished data; failing to do so is plagiarism."
  },
  {
    id: "a23q30",
    text: "Direct or indirect influence of which of the following aspect is considered ‘conflict of interest’?",
    options: ["Financial", "Personal", "Social", "All the above"],
    correctAnswer: 3,
    explanation: "Conflict of interest can arise from financial, personal or social interests that directly or indirectly influence professional judgement, so all of the above is correct."
  },
  {
    id: "a23q31",
    text: "Besides contribution, drafting/revising and final approval, the fourth ICMJE authorship criterion is:",
    options: [
      "Securing funding for the study",
      "Agreement to be accountable for all aspects of the work",
      "Supervising the research group",
      "Collecting the data"
    ],
    correctAnswer: 1,
    explanation: "ICMJE requires authors to agree to be accountable for all aspects of the work. Funding, supervision or data collection alone do not justify authorship."
  },
  {
    id: "a23q32",
    text: "A professional medical writer substantially wrote a manuscript but is neither named as author nor acknowledged. This is:",
    options: [
      "Ghost authorship",
      "Gift authorship",
      "Salami slicing",
      "Duplicate publication"
    ],
    correctAnswer: 0,
    explanation: "An undisclosed person who made a substantial writing contribution is a ghost author. Gift authorship is the opposite: crediting someone who did not contribute."
  },
  {
    id: "a23q33",
    text: "According to COPE, retraction of a published article is mainly warranted when:",
    options: [
      "The authors want to update their affiliations",
      "A reader disagrees with the conclusions",
      "There is clear evidence that the findings are unreliable due to misconduct or major error",
      "The article receives few citations"
    ],
    correctAnswer: 2,
    explanation: "COPE guidance reserves retraction for unreliable findings from misconduct or serious error, plagiarism or redundant publication. Minor issues are handled by corrections."
  },
  {
    id: "a23q34",
    text: "Which feature suggests that a journal may be predatory?",
    options: [
      "A transparent peer review policy",
      "A verifiable editorial board and indexing in reputable databases",
      "A clear retraction policy",
      "Guaranteed acceptance within days on payment of a fee"
    ],
    correctAnswer: 3,
    explanation: "Predatory journals promise rapid, guaranteed acceptance for a fee without genuine peer review. Transparent policies and verifiable boards indicate a legitimate journal."
  },
  {
    id: "a23q35",
    text: "Reusing your own previously published text without citing it is acceptable because it is your own work.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Reusing one's own published text without citation is self-plagiarism (text recycling) and misleads readers about novelty."
  },
  {
    id: "a23q36",
    text: "An honest error in a published article that does not change its conclusions is best handled by:",
    options: [
      "Retraction of the article",
      "Publishing a correction (erratum or corrigendum)",
      "Ignoring the error",
      "Republishing the full article"
    ],
    correctAnswer: 1,
    explanation: "Honest errors that do not invalidate the findings are fixed with a published correction. Retraction is for unreliable findings, and republishing would be duplicate publication."
  },
  {
    id: "a23q37",
    text: "A peer reviewer must treat a manuscript received for review as:",
    options: [
      "Public information that may be shared",
      "Material that may be used for the reviewer's own research",
      "A document that can be forwarded freely to colleagues",
      "A confidential document"
    ],
    correctAnswer: 3,
    explanation: "ICMJE and COPE require reviewers to keep manuscripts confidential and not use or share their content."
  },
  {
    id: "a23q38",
    text: "A person who provided only technical help or writing assistance and does not meet authorship criteria should be:",
    options: [
      "Listed as a co-author",
      "Mentioned in the Acknowledgements",
      "Left out entirely",
      "Made the corresponding author"
    ],
    correctAnswer: 1,
    explanation: "Contributors who do not meet all ICMJE criteria are acknowledged, with their contribution described, rather than listed as authors."
  },
  {
    id: "a23q39",
    text: "State whether true or false. ICMJE requires clinical trials to be registered in a public registry before enrolment of the first participant as a condition for publication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. ICMJE member journals consider trial results for publication only if the trial was prospectively registered in a public registry such as CTRI."
  },
  {
    id: "a23q40",
    text: "Under a Creative Commons Attribution (CC BY) licence, others may reuse a published article provided they:",
    options: [
      "Pay a royalty to the authors",
      "Obtain ethics committee approval",
      "Give appropriate credit to the original authors",
      "Do not cite the original"
    ],
    correctAnswer: 2,
    explanation: "CC BY allows reuse and adaptation as long as the original authors and source are properly credited."
  },
  {
    id: "a23q41",
    text: "During which of the following stage(s) the researcher can publish their scientific work?",
    options: ["Protocol", "Methodology description", "Conclusions and recommendations", "All of these"],
    correctAnswer: 3,
    explanation: "Researchers can publish at several stages: study protocols, methodology papers, and final results with conclusions and recommendations. Hence all of these are correct."
  },
  {
    id: "a23q42",
    text: "Why publishing a research finding is considered as an important activity for a researcher?",
    options: [
      "Promotion of business, Fame",
      "Marketing of drugs, Create awareness to public",
      "Academic promotion, Change in practice",
      "Promotion of business, Academic promotion"
    ],
    correctAnswer: 2,
    explanation: "Publishing research supports academic promotion and disseminates evidence that can change practice. Business promotion, drug marketing or fame are not legitimate primary aims of publication."
  },
  {
    id: "a23q43",
    text: "Which of the following is NOT an example of publication misconduct?",
    options: ["Plagiarism", "Ghost authorship", "Data fabrication", "Conflict of interest"],
    correctAnswer: 3,
    explanation: "Having a conflict of interest is not misconduct by itself; it only needs to be disclosed. Plagiarism, ghost authorship and data fabrication are forms of publication misconduct."
  },
  {
    id: "a23q44",
    text: "State whether True or False: During review of a research proposal, the Ethics Committee does not review the publication plan of the research.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. The Ethics Committee does review the publication and dissemination plan as part of the research proposal, as expected by the ICMR 2017 guidelines."
  },
  {
    id: "a23q45",
    text: "A postgraduate student has conducted a research study and collected the data. But he/she found difficulty in data analysis. Which of the following practice is NOT advised at this stage?",
    options: [
      "Seeking help from friends",
      "Requesting guidance from the mentor",
      "Sharing data with friends belong to a different institution for data analysis",
      "Learning by themselves and attempting to complete"
    ],
    correctAnswer: 2,
    explanation: "Sharing research data with people outside the approved team or institution breaches participant confidentiality and data protection. Seeking the mentor's guidance, general help, or self-learning are acceptable."
  },
  {
    id: "a23q46",
    text: "According to the National Ethical guidelines for Biomedical and Health research involving human participants, 2017, how long a researcher should preserve the case report forms for an observational study?",
    options: ["1 year", "3 years", "5 years", "10 years"],
    correctAnswer: 1,
    explanation: "As per ICMR National Ethical Guidelines 2017, research records such as case report forms should be preserved for a minimum of 3 years after completion of the study."
  },
  {
    id: "a23q47",
    text: "Which of the following is NOT a criterion for authorship as per International Committee of Medical Journal Editors guidelines?",
    options: [
      "Substantial contributions to the conception or design of the work; or the acquisition, analysis, or interpretation of data for the work",
      "Drafting the work or revising it critically for important intellectual content",
      "Final approval of the version to be published",
      "Only by providing financial support to conduct the research"
    ],
    correctAnswer: 3,
    explanation: "Providing only financial support does not qualify for authorship under ICMJE; such contributors are acknowledged instead. The other options are genuine ICMJE authorship criteria."
  },
  {
    id: "a23q48",
    text: "State whether True or False: To be eligible for authorship in a research publication, drafting manuscript is a sufficient criterion.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. ICMJE requires all four criteria: substantial contribution, drafting or revising, final approval and accountability. Drafting alone is not sufficient for authorship."
  },
  {
    id: "a23q49",
    text: "Which of the following is recommended to avoid plagiarism in a research publication?",
    options: [
      "Give compensation to the original author",
      "Cite the reference",
      "Do not acknowledge an unpublished work",
      "Rephrase the content without reference"
    ],
    correctAnswer: 1,
    explanation: "Citing the original reference is the recommended way to avoid plagiarism. Paying the author, not acknowledging unpublished work, or rephrasing without reference are still plagiarism."
  },
  {
    id: "a23q50",
    text: "When you read a research publication why it is important to check the conflict of interest section?",
    options: [
      "To know the list of authors",
      "To have an idea about the methodology used",
      "To determine the researcher-level factors that may influence the conclusion",
      "To check the software used for data analysis"
    ],
    correctAnswer: 2,
    explanation: "The conflict of interest section reveals authors' financial or personal interests that might bias the conclusions, helping readers critically appraise the paper. Authors, methods and software appear elsewhere."
  }
];