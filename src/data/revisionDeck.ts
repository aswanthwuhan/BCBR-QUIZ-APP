// Last-Minute Revision deck for the BCBR exam.
// Authored from the official BCBR syllabus (ICMR-NIE / SWAYAM-NPTEL, 23 graded
// lectures), the NMC course flyer, and the high-yield patterns in this app's
// own past-question bank. Fact cards — one coherent concept per card.
// Math is written in LaTeX ($...$) and rendered with KaTeX.

export interface RevisionCard {
  id: string;
  /** 1..23 = BCBR lecture number */
  module: number;
  front: string;
  back: string;
}

export const REVISION_DECK_TITLE = 'Last-Minute Revision — BCBR Exam';

export const REVISION_CARDS: RevisionCard[] = [
  // ---- Module 1: Introduction to health research ----
  { id: 'rev-6', module: 1, front: 'Random vs systematic error — how each is reduced', back: 'Random error = chance/precision variation → reduced by INCREASING THE SAMPLE SIZE.\nSystematic error = BIAS → reduced only by better design and measurement (randomization, blinding, standardization) — sample size does NOT help.' },
  { id: 'rev-8', module: 1, front: 'Pilot study — definition and the two things it is used for', back: 'A small-scale study with minimal participants, run BEFORE the main study.\nUses: (1) test feasibility, acceptability and processes; (2) estimate parameters (prevalence, SD) for the sample-size calculation.' },
  { id: 'rev-9', module: 1, front: 'Confounder vs effect modifier — how each is handled', back: 'Confounder: associated with BOTH exposure and outcome; DISTORTS the true association → must be CONTROLLED (randomization, matching, stratification, adjustment).\nEffect modifier: the association\u2019s STRENGTH differs across its levels → do NOT control it; REPORT the stratified results.' },
  { id: 'rev-10', module: 1, front: 'Reviews required before starting a study with primary data collection', back: '1) SCIENTIFIC review — merit and design.\n2) ETHICS (IEC) review — participant protection.\n3) REGULATORY review — DCGI/HMSC for trials; shipment of samples or data abroad also needs clearance.' },
  { id: 'rev-11', module: 1, front: 'Inclusion vs exclusion criteria — the rule', back: 'Inclusion: characteristics REQUIRED to enter the study.\nExclusion: features that remove a participant EVEN IF inclusion criteria are met (safety risk, inability to consent, unreliable data).\nThe two lists must never overlap.' },
  { id: 'rev-12', module: 1, front: 'Classify health research — by setting and by aim', back: 'By setting: clinical (patients) · laboratory (bench/animals) · field/community (populations).\nBy aim: descriptive vs analytical · qualitative vs quantitative.' },

  // ---- Module 2: Research question, hypothesis, objectives ----
  { id: 'rev-13', module: 2, front: 'FINER criteria for a good research question', back: 'F – Feasible (affordable, achievable in time)\nI – Interesting\nN – Novel (fills a gap)\nE – Ethical\nR – Relevant (to practice/policy)' },
  { id: 'rev-14', module: 2, front: 'Objective verbs — descriptive vs analytical studies', back: 'Descriptive → ESTIMATE, DESCRIBE, DETERMINE the magnitude (e.g. prevalence).\nAnalytical → DETERMINE THE EFFECT/ASSOCIATION, COMPARE groups.\nThe verb must match the study type — \u2018estimate\u2019 is wrong for an analytical objective.' },
  { id: 'rev-15', module: 2, front: 'Study type needing a hypothesis', back: 'Only ANALYTICAL (comparison) studies — a testable statement about the association between groups.\nPurely descriptive studies (e.g. estimating prevalence) need NO hypothesis.' },
  { id: 'rev-16', module: 2, front: 'Null hypothesis (H\u2080)', back: 'States there is NO difference / NO association between the groups being compared.\nIt is the hypothesis the statistical test attempts to reject.' },
  { id: 'rev-17', module: 2, front: 'First step in the life cycle of research', back: 'Identifying and DEFINING the research problem — an idea refined against known gaps in existing knowledge. It comes BEFORE literature review and question framing.' },
  { id: 'rev-18', module: 2, front: 'Sources of research questions', back: 'Clinical practice observations · gaps in the literature · guidelines and policies · previous studies · expert/supervisor advice · new technologies or outbreaks.' },

  // ---- Module 3: Literature review ----
  { id: 'rev-19', module: 3, front: 'MeSH', back: 'Medical Subject Headings — the NLM controlled-vocabulary thesaurus used to index articles in PubMed/MEDLINE; searching with MeSH terms improves precision.' },
  { id: 'rev-20', module: 3, front: 'Boolean operators — AND / OR / NOT', back: 'AND = all terms must appear → NARROWS (fewest results).\nOR = either term → BROADENS (most results).\nNOT = excludes records containing a term.' },
  { id: 'rev-21', module: 3, front: 'Critical appraisal', back: 'Applying the principles of analysis to identify studies that are UNBIASED, VALID and APPLICABLE — performed in an organised, systematic manner.' },
  { id: 'rev-22', module: 3, front: 'Database (in literature searching)', back: 'An organised collection of articles, abstracts, proceedings, books and citations — queried with a search strategy. Examples: PubMed, Cochrane Library, Embase.' },
  { id: 'rev-23', module: 3, front: 'Literature searching — timing', back: 'At the START and CONTINUOUSLY through the study — to refine the question, plan methods, and interpret findings. \u2018Only at the start\u2019 is a false statement.' },

  // ---- Module 4: Measures of disease frequency ----
  { id: 'rev-24', module: 4, front: 'Prevalence — definition, calculation, and what it measures', back: '$\\text{Prevalence} = \\dfrac{\\text{All cases (new + old)}}{\\text{Total population}}$ — at a point (point prevalence) or over a period.\nMeasures the BURDEN of disease — no follow-up period is required.' },
  { id: 'rev-25', module: 4, front: 'Incidence — definition, calculation, and what it measures', back: '$\\text{Incidence} = \\dfrac{\\text{New cases}}{\\text{Population at risk}}$ over a stated time period.\nMeasures RISK — the correct measure for evaluating the impact of a PREVENTION programme.' },
  { id: 'rev-26', module: 4, front: 'Cumulative incidence (= attack rate = risk)', back: '$\\text{Cumulative incidence (attack rate)} = \\dfrac{\\text{New cases}}{\\text{Population at risk}} \\times 100\\%$ over a FIXED period.\nUsed for a defined cohort — e.g. attack rate in a food-poisoning outbreak.' },
  { id: 'rev-27', module: 4, front: 'Incidence density (incidence rate)', back: '$\\text{Incidence density} = \\dfrac{\\text{New cases}}{\\text{Person-time at risk}}$.\nUsed when follow-up durations differ, or participants enter/leave the study midway.' },
  { id: 'rev-28', module: 4, front: 'Case fatality rate — what it measures, with an example', back: '$\\text{CFR} = \\dfrac{\\text{Deaths among the diseased}}{\\text{Diagnosed cases}}$.\nMeasures the SEVERITY of an acute disease (not burden).\nExample: 75 food-poisoning cases, 2 deaths → $CFR = \\dfrac{2}{75}$.' },
  { id: 'rev-29', module: 4, front: 'Prevalence vs incidence — the mathematical relationship', back: '$P \\approx I \\times D$ — Prevalence ≈ Incidence × average DURATION.\nLonger duration or better survival (without cure) raises prevalence; quick cure or rapid death lowers it.' },
  { id: 'rev-30', module: 4, front: 'Mortality measures', back: 'Reflect a disease\u2019s impact on the population in terms of DEATHS — e.g. mortality rate and proportional mortality (share of deaths due to a cause).' },

  // ---- Module 5: Descriptive study designs ----
  { id: 'rev-33', module: 5, front: 'Case report vs case series — and their key limitation', back: 'Case report = a single, detailed rare/unusual case.\nCase series = a GROUP of similar cases (e.g. 18 CJD cases from one hospital).\nBoth are the LEAST generalizable designs — no comparison group.' },
  { id: 'rev-34', module: 5, front: 'Cross-sectional study — key features', back: 'Exposure and outcome measured at the SAME time (a snapshot).\nUnit of observation = the INDIVIDUAL · measures PREVALENCE/burden · the descriptive form has NO comparison group.' },
  { id: 'rev-35', module: 5, front: 'Major limitation of a cross-sectional study (vs cohort)', back: 'NO TEMPORALITY — exposure and outcome are simultaneous, so cause → effect sequence cannot be established.' },
  { id: 'rev-36', module: 5, front: 'Ecological study — unit, strength, limitation', back: 'Unit = the GROUP/population, NOT the individual (e.g. air-quality index vs infertility across 183 countries).\nStrength: uses routinely available population data.\nLimitation: ECOLOGICAL FALLACY — group associations may not hold for individuals.' },
  { id: 'rev-37', module: 5, front: 'Descriptive epidemiology answers…', back: 'WHAT (disease) · WHO (person) · WHERE (place) · WHEN (time).\nIt never answers WHY — causation needs analytical designs.' },
  { id: 'rev-38', module: 5, front: 'A population census is an example of…', back: 'A (descriptive) CROSS-SECTIONAL survey.' },

  // ---- Module 6: Analytical study designs ----
  { id: 'rev-39', module: 6, front: 'Cohort study — complete profile', back: 'Starts with EXPOSURE (exposed vs unexposed) → followed forward for the OUTCOME.\nMeasures incidence DIRECTLY → Relative Risk (RR).\nOne exposure → MULTIPLE outcomes · prospective OR retrospective.\nDrawbacks: expensive, slow, loss to follow-up, poor for RARE diseases.' },
  { id: 'rev-40', module: 6, front: 'Case-control study — complete profile', back: 'Starts with the OUTCOME (cases vs controls) → looks BACK at exposure.\nCalculates the ODDS RATIO · best for RARE diseases and outbreaks.\nOne outcome → MULTIPLE exposures · quick and cheap.\nCharacteristic biases: RECALL bias and SELECTION bias.' },
  { id: 'rev-41', module: 6, front: 'Measure of association — cohort vs case-control', back: 'Cohort → Relative Risk (RR).\nCase-control → Odds Ratio (OR).\nAnalytical cross-sectional → Prevalence Ratio.' },
  { id: 'rev-42', module: 6, front: 'Interpreting RR and OR', back: '$RR = 1$ / $OR = 1$ → no association.\n$> 1$ → exposure increases risk / positive association.\n$< 1$ → protective.\nOR approximates RR only when the disease is RARE.' },
  { id: 'rev-43', module: 6, front: 'Best design: rare DISEASE vs rare EXPOSURE', back: 'Rare DISEASE → CASE-CONTROL (sample cases directly, no huge cohort needed).\nRare EXPOSURE → COHORT (follow the small exposed group).' },
  { id: 'rev-44', module: 6, front: 'Best design for establishing TEMPORALITY', back: 'Cohort (and RCT) — exposure is documented BEFORE the outcome occurs.' },
  { id: 'rev-45', module: 6, front: 'Nested case-control', back: 'A case-control study conducted WITHIN a defined cohort — cases and a sampled subset of controls are drawn from that cohort.' },
  { id: 'rev-46', module: 6, front: 'Study type where the investigator ASSIGNS the exposure', back: 'Only in EXPERIMENTAL studies (RCTs).\nIn cohort and case-control studies exposure is merely OBSERVED.' },
  { id: 'rev-47', module: 6, front: 'Cohort vs case-control — outcomes and exposures', back: 'Cohort: one exposure → MULTIPLE outcomes.\nCase-control: one outcome → MULTIPLE exposures.' },

  // ---- Module 7: Experimental study designs (clinical trials) ----
  { id: 'rev-48', module: 7, front: 'Cornerstones of a Randomized Controlled Trial', back: '1) RANDOMIZATION · 2) BLINDING · 3) Control (comparison) group.\nRCTs are PROSPECTIVE — allocation always precedes the outcome.' },
  { id: 'rev-49', module: 7, front: 'Purpose of randomization', back: 'Every participant has an EQUAL chance of any allocation → distributes BOTH known and unknown confounders evenly between the groups.' },
  { id: 'rev-50', module: 7, front: 'Blinding — purpose and the three levels', back: 'Prevents information (observation/ascertainment) bias in outcome assessment.\nSingle = participant OR investigator · Double = participant + investigator · Triple = + analyst/statistician.' },
  { id: 'rev-51', module: 7, front: 'Placebo', back: 'A pharmacologically INACTIVE agent administered to the control group of a trial.' },
  { id: 'rev-52', module: 7, front: 'Clinical trial phases', back: 'Phase I — safety/dosage in a small group of HEALTHY volunteers.\nPhase II — pilot efficacy in small patient groups.\nPhase III — large comparison with standard care.\nPhase IV — POST-MARKETING SURVEILLANCE.' },
  { id: 'rev-53', module: 7, front: 'Long-term adverse effects and real-world efficacy are tested in…', back: 'Phase IV trials — post-marketing surveillance after approval.' },
  { id: 'rev-54', module: 7, front: 'Phase-I VACCINE trials are conducted in…', back: 'Small groups of HEALTHY ADULT volunteers — safety and immunogenicity first.' },
  { id: 'rev-55', module: 7, front: 'Overly restrictive exclusion criteria in a trial cause…', back: 'Poor GENERALIZABILITY — reduced EXTERNAL validity (results apply only to a narrow, unrepresentative group).' },

  // ---- Module 8: Validity, bias and confounding ----
  { id: 'rev-56', module: 8, front: 'Internal vs external validity', back: 'Internal: the result is correct for the STUDY PARTICIPANTS — threatened by bias and confounding.\nExternal: generalizability to the TARGET population — threatened by unrepresentative selection.' },
  { id: 'rev-57', module: 8, front: 'Recall bias', back: 'Cases recall exposures differently from controls — an INFORMATION bias.\nThe characteristic problem of CASE-CONTROL studies.' },
  { id: 'rev-58', module: 8, front: 'Loss to follow-up', back: 'A major problem in COHORT studies.\nDIFFERENTIAL loss to follow-up causes SELECTION bias.' },
  { id: 'rev-59', module: 8, front: 'Berkson\u2019s bias vs healthy worker effect', back: 'Both are SELECTION biases.\nBerkson\u2019s: hospital-based sampling (only the ill are sampled).\nHealthy worker effect: employed people are healthier than the general population.' },
  { id: 'rev-60', module: 8, front: 'Differential vs non-differential misclassification', back: 'Differential: misclassification DIFFERS between groups → bias in ANY direction.\nNon-differential: similar across groups → usually biases the association toward the NULL.' },
  { id: 'rev-61', module: 8, front: 'Increasing the sample size — what it reduces and what it does not', back: 'Reduces RANDOM error only.\nBias is SYSTEMATIC — needs design/measurement fixes: randomization, blinding, standardization, objective measures.' },
  { id: 'rev-62', module: 8, front: 'Matching', back: 'A technique to control CONFOUNDING in case-control studies — controls are selected to match cases on key variables (e.g. age, sex).' },
  { id: 'rev-63', module: 8, front: 'Case-control study — measure that replaces RR', back: 'The Odds Ratio (OR).\nOR approximates RR only when the outcome/disease is RARE.' },

  // ---- Module 9: Qualitative research methods ----
  { id: 'rev-64', module: 9, front: 'The three main qualitative methods', back: '1) In-depth interviews (IDI)\n2) Focus group discussions (FGD)\n3) Participant observation' },
  { id: 'rev-65', module: 9, front: 'In-depth interview (IDI)', back: 'Open-ended, one-to-one interview exploring the interviewee\u2019s OWN framework of meanings.\nBest method for SENSITIVE, personal topics (e.g. domestic abuse).' },
  { id: 'rev-66', module: 9, front: 'Focus group discussion (FGD)', back: 'Open-ended GROUP interview among typically 6–10 HOMOGENEOUS participants — generates ideas through interaction.\nNOT suitable for highly sensitive personal behaviour.' },
  { id: 'rev-67', module: 9, front: 'Participant observation', back: 'The observer becomes PART of the group/event being studied (immersion) — e.g. learning local tobacco terminology by living in the community.' },
  { id: 'rev-68', module: 9, front: 'Triangulation', back: 'Using multiple METHODS, multiple THEORIES and/or multiple SOURCES for a comprehensive understanding of the phenomenon.' },
  { id: 'rev-69', module: 9, front: 'Grounded theory', back: 'Analysis approach in which theory is DEVELOPED FROM the data (code text → categories → theory), not derived from a pre-existing framework.' },
  { id: 'rev-70', module: 9, front: 'Qualitative research — what it CANNOT do', back: 'Measure prevalence/incidence or test associations — that is quantitative work.\nQualitative explores perceptions, practices and meanings (verbs: EXPLORE, UNDERSTAND, PERCEIVE).' },

  // ---- Module 10: Basic statistical concepts ----
  { id: 'rev-71', module: 10, front: 'Variable types with examples', back: 'Nominal — no order (sex, blood group)\nOrdinal — ordered categories (SES class, cancer stage I–IV)\nContinuous — any value in a range (height, BP, haemoglobin)' },
  { id: 'rev-72', module: 10, front: 'Mean / median / mode — which to use when', back: 'Mean = arithmetic average (most common).\nMedian = middle value — preferred with SKEW or OUTLIERS.\nMode = most frequent value.' },
  { id: 'rev-73', module: 10, front: 'Median and quartiles', back: 'Median = 50th percentile = $Q_2$ · $Q_1$ = 25th percentile · $Q_3$ = 75th percentile.\n$IQR = Q_3 - Q_1$ → the middle 50% of observations.' },
  { id: 'rev-74', module: 10, front: 'Dispersion measure that pairs with the MEDIAN', back: 'The Interquartile Range (IQR).\n(SD pairs with the mean.)' },
  { id: 'rev-75', module: 10, front: 'Standard deviation and variance', back: 'SD = square root of the AVERAGE SQUARED deviation from the mean — pairs with the mean.\n$\\text{Variance} = SD^2$.' },
  { id: 'rev-76', module: 10, front: 'Range', back: 'MAXIMUM − MINIMUM — the simplest but least stable measure of dispersion (uses only two values).' },
  { id: 'rev-77', module: 10, front: 'Coefficient of variation (CV)', back: '$CV = \\dfrac{SD}{\\bar{x}} \\times 100\\%$ — a RELATIVE measure of dispersion, used to compare variability between variables measured in DIFFERENT units.' },
  { id: 'rev-78', module: 10, front: 'Mean absolute deviation', back: 'The average of the ABSOLUTE deviations of the observations from the arithmetic mean.' },

  // ---- Module 11: Bias in depth ----
  { id: 'rev-79', module: 11, front: 'Bias — definition', back: 'Any SYSTEMATIC error in the design, conduct or analysis of a study that yields an ERRONEOUS estimate of an association.\nIt can occur at ANY stage.' },
  { id: 'rev-80', module: 11, front: 'Selection bias — examples', back: 'Berkson\u2019s bias (hospital-based sampling) · healthy worker effect · non-response bias · loss to follow-up (cohort) · inappropriate control selection (case-control).' },
  { id: 'rev-81', module: 11, front: 'Information bias — examples and how to reduce it', back: 'Recall bias · interviewer/observer bias · misclassification (differential and non-differential).\nReduced by standardization, OBJECTIVE measures (lab tests > self-report) and blinding.' },
  { id: 'rev-82', module: 11, front: 'Selection bias — design where it is more common', back: 'CASE-CONTROL studies — cases and controls are selected separately, after the outcome is already known.' },
  { id: 'rev-83', module: 11, front: 'Confounding — definition (and how it differs from bias)', back: 'A third variable associated with BOTH exposure and outcome that DISTORTS (mixes) the measured association.\nIt is not a systematic error in measurement — it is a mixing of effects.' },

  // ---- Module 12: Calculating sample size and power ----
  { id: 'rev-85', module: 12, front: 'Type I error (α)', back: 'Rejecting a TRUE null hypothesis — a FALSE POSITIVE.\nConventionally $\\alpha = 0.05$ (significance level $p < 0.05$).' },
  { id: 'rev-86', module: 12, front: 'Type II error (β)', back: 'FAILING to reject a false null hypothesis — a FALSE NEGATIVE.\n$\\text{Power} = 1 - \\beta$.' },
  { id: 'rev-87', module: 12, front: 'Statistical power', back: 'The probability of CORRECTLY detecting a true association (rejecting H\u2080 when it is false).\nRecommended minimum: 80% — ideally 90%.' },
  { id: 'rev-88', module: 12, front: 'Design effect', back: 'An inflation factor (> 1) applied when sampling is done in CLUSTERS (cluster/multistage sampling) instead of individuals — e.g. immunization coverage surveys.' },
  { id: 'rev-89', module: 12, front: 'Sample size for a PREVALENCE estimate — formula', back: '$n = \\dfrac{4pq}{L^2}$\np = expected prevalence, q = 1 − p, L = ABSOLUTE precision, 4 ≈ $Z^2$ at 95% confidence.\nThen adjust for design effect and expected non-response.' },
  { id: 'rev-90', module: 12, front: 'Sample size for estimating a MEAN — formula with a worked example', back: '$n = \\dfrac{4\\sigma^2}{L^2}$\nσ = standard deviation, L = absolute precision (95% confidence).\nWorked example: SD 200, precision 50 → $n = \\dfrac{4 \\times 200^2}{50^2} = 64$.' },
  { id: 'rev-91', module: 12, front: 'Sample size — sources of the expected prevalence (p) and adjustments', back: 'Sources of p: previous studies, pilot studies, surveillance/registry data, reasonable assumption.\nAdjustments: +10% per added confounder · design effect · expected non-response. NEVER adjust for \u2018precision after completion\u2019.' },

  // ---- Module 13: Selection of study participants ----
  { id: 'rev-93', module: 13, front: 'Target vs accessible population', back: 'Target: who you want to GENERALIZE to — defined geographically AND temporally.\nAccessible: the reachable part you actually sample (sampling frame → study sample).\nA REPRESENTATIVE sample is what makes results generalizable (external validity).' },
  { id: 'rev-95', module: 13, front: 'RANDOM error — what handles it', back: 'Increasing the SAMPLE SIZE (adequate power).\nBiases are not diluted by numbers — they need design and measurement fixes.' },

  // ---- Module 14: Study plan and project management ----
  { id: 'rev-96', module: 14, front: 'Gantt chart', back: 'Represents the DURATION, TIMELINE and SEQUENCE of study activities — the standard project-planning tool.' },
  { id: 'rev-97', module: 14, front: 'Resource allocation and time management — responsible person', back: 'The PRINCIPAL INVESTIGATOR (PI).' },
  { id: 'rev-98', module: 14, front: 'Study life-cycle sequence', back: 'Objectives → indicators → information elements → data collection tools → analysis plan.\nThe design must always FOLLOW the objectives.' },

  // ---- Module 15: Designing data collection tools ----
  { id: 'rev-99', module: 15, front: 'Choosing the data-collection method — response rates and sensitive topics', back: 'HIGHEST response rate: face-to-face interview.\nSENSITIVE topics (e.g. sexual behaviour): self-administered questionnaire.\nMailed: low response · Online: convenient but limited reach.' },
  { id: 'rev-100', module: 15, front: 'Reliability vs accuracy (validity)', back: 'Reliability: produces SIMILAR results on repeated measurement (consistency).\nAccuracy: measures what it intends to — agrees with the GOLD STANDARD (closeness to truth).' },
  { id: 'rev-101', module: 15, front: 'Pre-testing (pilot-testing) a data collection instrument', back: 'Done on a small sample resembling the study population, BEFORE the main study — to find ambiguous wording, length problems and logistics issues.' },
  { id: 'rev-102', module: 15, front: 'Double-barreled question', back: 'Asks TWO things in one question — must be AVOIDED, because a single answer cannot represent both parts.' },
  { id: 'rev-103', module: 15, front: 'Translating a questionnaire', back: 'Forward-translate AND back-translate to the original language — to confirm MEANING equivalence.' },
  { id: 'rev-104', module: 15, front: 'Skip pattern and Likert scale', back: 'Skip pattern: routes respondents past IRRELEVANT questions based on earlier answers.\nLikert scale: an ordered agreement scale measuring attitudes/opinions.' },

  // ---- Module 16: Principles of data collection ----
  { id: 'rev-105', module: 16, front: 'Data collection sequence', back: 'Preparation → training of collectors → piloting → data collection (with field checks) → validation.\nINFORMED CONSENT is obtained BEFORE any data collection begins.' },
  { id: 'rev-106', module: 16, front: 'Filled forms — who checks them and when', back: 'The FIELD INVESTIGATOR checks completeness and consistency BEFORE leaving the location; supervisors provide supportive supervision.' },
  { id: 'rev-107', module: 16, front: 'Validating collected data', back: 'Re-check a subset against SOURCE documents / repeat the measurement (gold standard) — not just visual inspection of forms.' },

  // ---- Module 17: Data management ----
  { id: 'rev-108', module: 17, front: 'Database structure — rows and columns', back: 'Each ROW = one RECORD (usually one participant).\nEach COLUMN = one VARIABLE.' },
  { id: 'rev-109', module: 17, front: 'Data dictionary', back: 'Documents variable NAMES, definitions, CODES, valid RANGES and formats — a core part of data documentation.' },
  { id: 'rev-110', module: 17, front: 'Unique identifier (ID)', back: 'Links records across forms and databases while protecting identity — CODED, never name-based.' },
  { id: 'rev-111', module: 17, front: 'Coding dichotomous variables', back: 'Coding Yes/No as 0/1 is standard and ACCEPTABLE — the claim that it \u2018should be avoided\u2019 is FALSE.' },
  { id: 'rev-112', module: 17, front: 'Mother–daughter databases', back: 'Hierarchical data levels (village → household → individual) stored as LINKED tables.' },
  { id: 'rev-113', module: 17, front: 'Range checks at data entry', back: 'Entry forms validate values against expected RANGES (e.g. systolic BP 60–200).\nData entry is also an opportunity to PARTIALLY CLEAN the data.' },

  // ---- Module 18: Overview of data analysis ----
  { id: 'rev-114', module: 18, front: 'The three stages of data analysis (in order)', back: '1) DESCRIPTIVE — characterize the population (no regression here)\n2) ANALYTICAL — test associations per a priori objectives\n3) ADVANCED — multivariate/regression models' },
  { id: 'rev-115', module: 18, front: 'First step before analysis — and what the analysis plan depends on', back: 'First step: DATA CLEANING (completeness, range, consistency checks).\nThe analysis plan depends on the study OBJECTIVES — framed a priori, never after seeing the data. Use statistical software (e.g. Epi-Info), not spreadsheets.' },
  { id: 'rev-116', module: 18, front: 'Analytical cross-sectional study — measure of association', back: 'The PREVALENCE RATIO.' },

  // ---- Module 19: Ethical framework for health research ----
  { id: 'rev-118', module: 19, front: 'ICMR ethical guidelines (current)', back: 'National Ethical Guidelines for Biomedical and Health Research Involving Human Participants — ICMR, 2017.\nALL human-participant research — including records review and interviews — needs IEC approval.' },
  { id: 'rev-119', module: 19, front: 'Belmont Report', back: '1979, USA (context: the Tuskegee syphilis study).\nThree principles: Respect for PERSONS (autonomy/consent) · BENEFICENCE · JUSTICE.' },
  { id: 'rev-120', module: 19, front: 'Nuremberg Code', back: '1947 — after the Nazi doctors\u2019 trials.\nVOLUNTARY CONSENT is absolutely essential.' },
  { id: 'rev-121', module: 19, front: 'Declaration of Helsinki', back: 'World Medical Association, 1964 (revised several times) — ethical principles for medical research involving human participants.' },
  { id: 'rev-122', module: 19, front: 'The four ethical principles', back: 'Autonomy (respect for persons) · Beneficence (do good) · Non-maleficence (\u2018do no harm\u2019) · Justice (fairness in selection and treatment).' },
  { id: 'rev-123', module: 19, front: 'Informed consent — the rules', back: 'A voluntary, ONGOING process — it may be repeated during the study.\nThe participant may WITHDRAW at any time, without penalty.\nContents: risks, benefits, alternatives.\nIlliterate participant: thumb impression with an IMPARTIAL WITNESS.' },
  { id: 'rev-124', module: 19, front: 'Research on adolescents (12–18 years)', back: 'Parental/guardian CONSENT + the adolescent\u2019s ASSENT.' },
  { id: 'rev-125', module: 19, front: 'Health-records (record-review) research — IEC approval needed or not', back: 'YES — record reviews are NOT exempt. Full IEC approval is required.' },
  { id: 'rev-126', module: 19, front: 'Justice principle — key application', back: 'Fair and equitable selection of participants.\nExcluding an ethnic group (or a sex) without valid scientific reason breaches JUSTICE.' },

  // ---- Module 20: Conducting clinical trials ----
  { id: 'rev-127', module: 20, front: 'Regulatory bodies for clinical trials in India', back: 'DCGI (Drugs Controller General of India) · HMSC (Health Ministry\u2019s Screening Committee) · plus the Institutional Ethics Committee (IEC).' },
  { id: 'rev-128', module: 20, front: 'Data Safety Monitoring Body (DSMB)', back: 'An independent body that reviews SAFETY data and interim analyses — it can recommend trial modification or STOPPAGE to protect participants.' },
  { id: 'rev-129', module: 20, front: 'Adverse events in a trial — reporting recipients', back: 'The IEC, the DCGI and the sponsor — as per Indian regulations.' },
  { id: 'rev-130', module: 20, front: 'Trial stoppage rules', back: 'Pre-specified STOPPING guidelines — the most common method of preventing harm to participants.\nA trial can be stopped early if harm — or clear benefit — emerges.' },
  { id: 'rev-131', module: 20, front: 'Trial registration in India', back: 'ALL clinical trials must be registered PROSPECTIVELY in the CTRI (Clinical Trials Registry-India) BEFORE enrolling participants.' },

  // ---- Module 21: Preparing a concept paper ----
  { id: 'rev-132', module: 21, front: 'Concept paper — all sections', back: 'Title · Background & justification (known/unknown, gap, agenda for further research) · Objectives · Methods (design, sampling strategy, primary/secondary outcomes) · Expected benefits · Ethics · Budget (BROAD heads only) · References (standard format, e.g. Vancouver).' },
  { id: 'rev-133', module: 21, front: 'Concept paper — purpose', back: 'The initial outline / starting point of the full research protocol.\nHelps funding agencies assess the idea — and gives the researcher early feedback.' },
  { id: 'rev-134', module: 21, front: 'Concept paper — placement of sampling strategy, expected benefits and budget', back: 'Sampling strategy → METHODS section.\nExpected benefits → its own section (from the participants\u2019/community perspective).\nBudget → summary of BROAD heads only.' },

  // ---- Module 22: Elements of a research protocol ----
  { id: 'rev-136', module: 22, front: 'Research protocol — section-by-section contents', back: 'METHODS: design, population, inclusion/exclusion, sample size, variables, data collection tools & quality assurance, data management, analysis plan.\nETHICS: consent, risk minimization, compensation.\nIMPLEMENTATION: Gantt chart, responsibilities, budget.' },
  { id: 'rev-137', module: 22, front: 'Reporting checklists — match the design', back: 'CONSORT → Randomized trials\nSTROBE → Observational studies\nPRISMA → Systematic reviews / meta-analyses' },
  { id: 'rev-138', module: 22, front: 'Operational definitions', back: 'Define exactly HOW each variable/outcome will be MEASURED in your study — included in the METHODS section.' },
  { id: 'rev-139', module: 22, front: 'Protocol development — nature and amendments', back: 'An ITERATIVE (repetitive) process.\nAmendments after approval require RE-OBTAINING IEC clearance.' },

  // ---- Module 23: Publication ethics ----
  { id: 'rev-140', module: 23, front: 'ICMJE authorship criteria — all four required', back: '1) Substantial contribution to conception/design OR data acquisition/analysis.\n2) Drafting OR critically revising the manuscript.\n3) Final approval of the published version.\n4) Accountability for all aspects of the work.\nGift authors and ghost authors are unethical.' },
  { id: 'rev-141', module: 23, front: 'COPE', back: 'Committee on Publication Ethics — the key international body for publication-ethics guidance.' },
  { id: 'rev-142', module: 23, front: 'Research misconduct — the three forms', back: 'FABRICATION = inventing data.\nFALSIFICATION = altering/manipulating data or results.\nPLAGIARISM = copying text OR ideas without attribution (includes self-plagiarism).' },
  { id: 'rev-143', module: 23, front: 'Duplicate submission', back: 'Submitting the SAME manuscript to more than one journal at the same time — UNETHICAL.' },
  { id: 'rev-144', module: 23, front: 'Conflict of interest', back: 'Any direct or indirect influence (FINANCIAL or personal/professional) that could bias the work — must be DISCLOSED, and readers should check it when judging findings.' },
  { id: 'rev-145', module: 23, front: 'Reviewer comments — who answers them', back: 'The FIRST author is mostly responsible for addressing comments from reviewers and the journal.' }
];

export const REVISION_DECK_ID = 0;