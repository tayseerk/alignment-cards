export const categories = [
  {
    "code": "AP",
    "name": "alignment principles",
    "pathology": "normative void",
    "color": "#E6FFE9",
    "description": "alignment principles are general-purpose, contestable ethical or social commitments that people can appeal to when asking whether an agent's behavior is acceptable in contexts where cooperation and alignment with others matter."
  },
  {
    "code": "AT",
    "name": "alignment traits",
    "pathology": "misalignment that arises when core traits like honesty, empathy, accountability, or reliability are absent, selectively applied, or incentivized in the wrong direction.",
    "color": "#E6FFE9",
    "description": "alignment traits are relatively stable dispositions of people, organizations, professionals, and machines that make it more likely their behavior will remain trustworthy, fair, and safe over time. instead of specific mechanisms (like audits or kill switches), traits describe characteristic ways of acting—like being honest, empathetic, accountable, or reliably role-faithful—that support good alignment even in new or ambiguous situations."
  },
  {
    "code": "AB",
    "name": "alignment by incentives",
    "pathology": "systems that say they want outcome a but actually reward behavior b, teaching agents to optimize for the wrong thing.",
    "color": "#E6FFE9",
    "description": "alignment-by-incentive cards focus on the gap between what a system says it values and what it actually rewards in practice. when agents are praised, promoted, or paid for proxy metrics that don't match the real goal, they learn to chase the proxy instead of the principle."
  }
];

export const cards = [
  {
    "category": "AP",
    "name": "beneficence",
    "definition": "act to promote the well-being of others.",
    "human": "trying to leave people better off than they were before you acted, not just avoiding obvious harm.",
    "organizational": "choosing strategies, products, and policies that genuinely improve the lives of users, workers, and communities, not just the bottom line.",
    "professional": "keeping public safety and welfare in sight even while working primarily for a client or employer.",
    "machine": "designing systems so that, when they work as intended, people’s lives are more secure, capable, and flourishing.",
    "failureModes": {
      "human": "a person drives in a way that saves them a few minutes but creates dangerous, frustrating backups for everyone else.",
      "organizational": "the classic movie plot where a rapacious billionaire is willing to wreck ecosystems or destabilize society to enrich their company.",
      "professional": "an expert shrugs off the broader consequences of what they help build, treating environmental or social harms as ‘someone else’s problem.’",
      "machine": "a powerful optimizer consumes all available resources to maximize a narrow goal (like making paperclips), ignoring human well-being."
    }
  },

  {
    "category": "AP",
    "name": "avoid harm",
    "definition": "refrain from causing unjustified harm to others.",
    "human": "choosing not to do things that predictably cause physical, emotional, or social harm, even if those actions are convenient or rewarding.",
    "organizational": "designing products, workflows, and policies so that foreseeable harms to users, workers, and affected communities are minimized or prevented.",
    "professional": "following safety standards, risk assessments, and ethical codes that put preventing serious harm ahead of speed or cost savings.",
    "machine": "constraining what systems are allowed to do so they do not cause, facilitate, or escalate significant harm, even when prompted to do so.",
    "failureModes": {
      "human": "a driver scrolls through their phone on a busy highway, causing a crash that injures several people.",
      "organizational": "a social media company refuses to build basic protections against targeted harassment because it worries those changes might reduce engagement.",
      "professional": "engineers ship a medical device with known reliability issues because fixing them would delay launch and disappoint investors.",
      "machine": "a generative model readily produces detailed self-harm instructions when asked, shaping a vulnerable user’s choices during a crisis."
    }
  },

  {
    "category": "AP",
    "name": "justice / fairness",
    "definition": "distribute benefits and burdens in an equitable, non-discriminatory way.",
    "human": "treating people with similar claims similarly and not letting prejudice, favoritism, or stereotypes decide who gets opportunities or protection.",
    "organizational": "building policies, algorithms, and daily practices that do not systematically disadvantage particular groups or communities.",
    "professional": "applying standards and procedures consistently across clients or cases, resisting pressure to favor some groups based on bias or status.",
    "machine": "training and auditing systems so that error rates, recommendations, and resource allocations are not unjustly skewed against specific groups.",
    "failureModes": {
      "human": "a hiring manager routinely favors candidates from their own background over equally or better qualified applicants from other groups.",
      "organizational": "a bank’s automated credit system charges higher interest or denies loans more often to people from certain neighborhoods.",
      "professional": "a doctor spends more time and attention on affluent patients while rushing appointments with lower-income patients.",
      "machine": "a risk scoring model used in the criminal legal system consistently rates defendants from one racial group as higher risk than others with similar records."
    }
  },

  {
    "category": "AP",
    "name": "accountability",
    "definition": "make agents answerable for their actions and their impacts.",
    "human": "being willing to explain decisions, acknowledge mistakes, and help repair harms when your actions hurt others.",
    "organizational": "creating clear lines of responsibility, documentation, and paths for redress so that when harms occur, someone can be held to account and fix the system.",
    "professional": "keeping records, offering justifications, and accepting oversight from peers, regulators, or the public for professional decisions.",
    "machine": "designing systems with traceability and clear human owners so that when something goes wrong, it can be investigated, attributed, and corrected rather than shrugged off as ‘just the algorithm.’",
    "failureModes": {
      "human": "a manager blames ‘the software’ for an unfair firing decision and refuses to acknowledge their own role in approving it.",
      "organizational": "a platform insists that content decisions are ‘just the algorithm’ and offers users no meaningful explanation or appeal.",
      "professional": "an ai consultant deploys a faulty model that misclassifies many people, then hides behind legal disclaimers when clients complain.",
      "machine": "an automated trading system triggers large market losses, but because logs are missing and no one is formally responsible, nothing is learned and no one is compensated."
    }
  },

  {
    "category": "AP",
    "name": "public justifiability",
    "definition": "act on reasons that can be explained and defended to those affected.",
    "human": "choosing actions you could honestly explain to the people impacted, not just ones that serve private preferences or an in-group.",
    "organizational": "making policies and decisions whose rationale can be openly communicated to stakeholders, regulators, and the public in terms they could reasonably accept.",
    "professional": "grounding recommendations and designs in reasons that can survive public and peer scrutiny, not only in opaque proprietary or political interests.",
    "machine": "building systems whose objectives, tradeoffs, and constraints can be explained to lay users and affected communities, rather than hiding behind ‘black box’ mystique.",
    "failureModes": {
      "human": "a city official quietly redirects public funds to benefit a small circle of allies, knowing they could never defend the choice to the broader community.",
      "organizational": "a tech firm secretly deploys emotion-tracking features in workplace cameras without giving workers any explanation or chance to consent.",
      "professional": "a data scientist designs ad-targeting models that quietly exclude certain neighborhoods from job ads, assuming no one will ever see how it works.",
      "machine": "a resource allocation ai quietly deprioritizes services for low-income users to optimize profit, with no visible explanation to the people affected."
    }
  },

  {
    "category": "AP",
    "name": "veracity",
    "definition": "tell the truth and avoid deception.",
    "human": "communicating in ways that are honest and not deliberately misleading, including admitting uncertainty or ignorance instead of bluffing.",
    "organizational": "providing accurate, non-manipulative information in marketing, reporting, and public messaging rather than cherry-picked or deceptive narratives.",
    "professional": "representing data, risks, and capabilities faithfully in reports and expert advice, resisting the urge to exaggerate or hide inconvenient results.",
    "machine": "tuning and constraining systems so that they minimize hallucinations, do not fabricate evidence, and signal their uncertainty instead of pretending to be certain.",
    "failureModes": {
      "human": "a team lead knowingly understates a project’s risks to get it approved, leaving colleagues blindsided when predictable problems appear.",
      "organizational": "a company advertises its ai as ‘fully anonymous and private’ while actually logging and selling identifiable user data.",
      "professional": "a researcher omits negative experimental results and only publishes the most flattering performance numbers for a new model.",
      "machine": "a conversational ai generates fake academic citations with a very confident tone, and a user relies on them in a real assignment or legal filing."
    }
  },
  {
    "category": "AT",
    "name": "honesty",
    "definition": "a stable commitment to telling the truth and avoiding misleading others, including about limitations, uncertainty, and conflicts of interest.",
    "people": "honest people resist the temptation to lie, omit key facts, or spin reality for short-term gain, even when doing so would be easier or more rewarding.",
    "peopleref": "https://chat.openai.com", 
    "organizational": "honest organizations do not misrepresent their capabilities, risks, or data; they disclose important information, admit mistakes, and correct the record instead of quietly burying problems.",
    "organizationalref": "",
    "professionals": "honest professionals respect evidence and clients’ trust, avoiding fabrication, cherry-picking, or deceptive framing, even when careers or reputations are on the line.",
    "professionalref": "",
    "machine": "honest machine systems are designed so their outputs, explanations, and uncertainty indicators are as truthful and non-misleading as possible, rather than optimized purely for persuasion or engagement.",
    "machineref": "",
    "failureModes": {
      "human": "people strategically omit or distort information to avoid blame or get what they want, eroding trust and making coordination harder.",
      "organizational": "organizations market ai systems as ‘safe’ or ‘fair’ despite known limitations, mislead regulators, or hide adverse results until a scandal erupts.",
      "experts": "experts manipulate data, exaggerate capabilities, or hide negative findings to secure funding or prestige, undermining the credibility of the whole field.",
      "machine": "models are tuned to sound confident and persuasive even when they are highly uncertain or wrong, producing hallucinations and misleading advice in high-stakes contexts."
    },
    "expand": {
      "human": "in human alignment, honesty supports a shared sense of reality. when people consistently tell the truth and own up to errors, others can rely on their testimony to make decisions, repair mistakes, and coordinate.",
      "organizational": "in organizations, honesty shows up in transparent reporting, realistic safety claims, and forthright disclosures of limitations and incidents. if leadership normalizes spin and omission, workers learn that telling the full truth is risky.",
      "experts": "for professionals, honesty is tied to norms of evidence, peer review, and disclosure. an honest expert acknowledges uncertainty, declares conflicts of interest, and resists pressure to oversell results, keeping expert advice worthy of trust.",
      "machine": "for machine intelligence, honesty has to be built in: models need training, interfaces, and incentives that avoid fabrications and overconfident statements, including representing uncertainty and refusing to answer when information is missing."
    }
  },

  {
    "category": "AT",
    "name": "empathy",
    "definition": "the trait of noticing and caring about how others experience the effects of your actions, including their perspectives, vulnerabilities, and emotions.",
    "people": "empathetic people actively try to understand how others feel and adjust their behavior to reduce unnecessary harm, humiliation, or fear.",
    "peopleref": "",
    "organizational": "empathetic organizations build in the perspectives of users, workers, and affected communities, not just abstract metrics or shareholder reports.",
    "organizationalref": "",
    "professionals": "empathetic professionals integrate lived experience with technical knowledge, listening carefully and tailoring advice or interventions to people’s real circumstances.",
    "professionalref": "",
    "machine": "empathy-aligned machine systems don’t literally ‘feel,’ but they incorporate signals about human distress, harm, or preferences into their objectives and constraints.",
    "machineref": "",
    "failureModes": {
      "human": "without empathy, people treat others as obstacles or tools, causing avoidable emotional and social harm while focusing only on their own goals.",
      "organizational": "organizations ignore how policies or products affect vulnerable groups, optimizing for kpis at the expense of dignity, mental health, or safety.",
      "experts": "experts dismiss qualitative feedback or lived experience as ‘anecdotal,’ overlooking harms that don’t show up in their favorite metrics.",
      "machine": "machine systems optimize for engagement, efficiency, or throughput even when that amplifies anxiety, stigma, or unequal burdens."
    },
    "expand": {
      "human": "in humans, empathy acts as an internal brake on purely self-interested behavior; when it’s cultivated, people anticipate others’ pain or confusion and adjust their choices.",
      "organizational": "at the organizational level, empathy shows up in participatory design, user research, and attention to downstream effects on workers and communities, not just customers.",
      "experts": "for professionals, empathy bridges the gap between abstract models and real lives—for example, clinicians listening to how treatment burdens affect adherence.",
      "machine": "for machines, we approximate empathy by encoding human welfare, distress, and consent in objectives, and by giving people ways to flag when the system’s behavior is harmful or insensitive."
    }
  },

  {
    "category": "AT",
    "name": "accountability (trait)",
    "definition": "a disposition to accept responsibility for the consequences of one’s actions and to be answerable to those affected.",
    "people": "accountable people own their decisions, acknowledge mistakes, and participate in repair rather than deflecting blame.",
    "peopleref": "",
    "organizational": "accountable organizations have clear owners for decisions, robust incident response, and mechanisms for redress when harms occur.",
    "organizationalref": "",
    "professionals": "accountable professionals document important decisions, explain their reasoning, and engage with oversight rather than treating scrutiny as an attack.",
    "professionalref": "",
    "machine": "for machines, accountability means there are clear human owners and logs so that when systems cause harm, we can trace, explain, and correct what went wrong.",
    "machineref": "",
    "failureModes": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    },
    "expand": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    }
  },

  {
    "category": "AT",
    "name": "epistemic humility",
    "definition": "a stable willingness to recognize the limits of one’s knowledge and to act appropriately under uncertainty.",
    "people": "epistemically humble people say ‘i don’t know’ when it’s true and seek more information instead of bluffing.",
    "peopleref": "",
    "organizational": "humble organizations pilot, test, and revise rather than assuming initial plans or models are infallible.",
    "organizationalref": "",
    "professionals": "humble experts update their views when new evidence appears and disclose uncertainty instead of overstating precision.",
    "professionalref": "",
    "machine": "epistemically humble machine systems represent and communicate uncertainty, abstain when confidence is low, and defer to humans in novel high-stakes cases.",
    "machineref": "",
    "failureModes": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    },
    "expand": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    }
  },

  {
    "category": "AT",
    "name": "reliability",
    "definition": "the trait of behaving in a stable, predictable way so that similar inputs lead to similar, appropriate outputs.",
    "people": "reliable people keep commitments and respond consistently to similar situations instead of being arbitrary or erratic.",
    "peopleref": "",
    "organizational": "reliable organizations maintain processes and quality controls that keep performance within known bounds over time.",
    "organizationalref": "",
    "professionals": "reliable professionals apply standards consistently and maintain competence through practice and learning.",
    "professionalref": "",
    "machine": "reliable machine systems minimize random glitches, drift, and brittleness so users can form accurate expectations about their behavior.",
    "machineref": "",
    "failureModes": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    },
    "expand": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    }
  },

  {
    "category": "AT",
    "name": "role fidelity",
    "definition": "a stable tendency to honor the duties, boundaries, and expectations of the role one occupies.",
    "people": "people with strong role fidelity do not exploit their roles (like teacher, doctor, supervisor) for unrelated personal gains.",
    "peopleref": "",
    "organizational": "organizations with role fidelity keep functions and authorities appropriately scoped instead of quietly expanding surveillance or control.",
    "organizationalref": "",
    "professionals": "professionals honor fiduciary and ethical duties attached to their roles, even when those duties conflict with narrow self-interest.",
    "professionalref": "",
    "machine": "machine systems with role fidelity stay within their declared function (like tutor, assistant, recommender) and avoid hidden secondary agendas like covert advertising.",
    "machineref": "",
    "failureModes": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    },
    "expand": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    }
  },

  {
    "category": "AT",
    "name": "trustworthiness",
    "definition": "the combination of traits—like honesty, competence, and reliability—that make it reasonable for others to rely on you.",
    "people": "trustworthy people follow through, tell the truth, and take others’ interests into account.",
    "peopleref": "",
    "organizational": "trustworthy organizations align branding with behavior, protect stakeholders, and respond transparently when things go wrong.",
    "organizationalref": "",
    "professionals": "trustworthy experts give advice that reflects the client’s best interest and the best available evidence, not just their own incentives.",
    "professionalref": "",
    "machine": "trustworthy machine systems behave predictably, provide accurate information, and fail in understandable, contained ways.",
    "machineref": "",
    "failureModes": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    },
    "expand": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    }
  },

  {
    "category": "AT",
    "name": "reciprocity",
    "definition": "a disposition to treat others in ways that roughly mirror how one expects to be treated, especially with respect to burdens and benefits.",
    "people": "reciprocal people avoid free-riding and exploitation, contributing fairly to shared projects and respecting others’ contributions.",
    "peopleref": "",
    "organizational": "reciprocal organizations share benefits, information, or power with communities whose data, labor, or risk they rely on.",
    "organizationalref": "",
    "professionals": "professionals practice reciprocity by mentoring, sharing credit, and supporting peers, not just extracting from shared resources.",
    "professionalref": "",
    "machine": "reciprocity in machines shows up when systems are designed so that those who provide data or oversight also share in benefits or have influence over how systems evolve.",
    "machineref": "",
    "failureModes": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    },
    "expand": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    }
  },

  {
    "category": "AT",
    "name": "considerateness",
    "definition": "a habitual sensitivity to the burdens you impose on others and a tendency to reduce unnecessary friction or harm.",
    "people": "considerate people notice how their choices affect others’ time, attention, and emotional bandwidth and adjust accordingly.",
    "peopleref": "",
    "organizational": "considerate organizations design processes that do not offload excessive bureaucratic or cognitive burden onto users or workers.",
    "organizationalref": "",
    "professionals": "considerate professionals structure interactions in ways that respect clients’ constraints, literacy, and emotional state.",
    "professionalref": "",
    "machine": "considerate machine systems avoid needless repetition, confusing interfaces, or manipulative interruptions that drain users.",
    "machineref": "",
    "failureModes": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    },
    "expand": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    }
  },

  {
    "category": "AT",
    "name": "conflict resolution",
    "definition": "a trait-like commitment to surface, negotiate, and repair conflicts rather than ignoring or escalating them.",
    "people": "people with good conflict-resolution habits listen, negotiate, and seek fair compromises instead of stonewalling or retaliating.",
    "peopleref": "",
    "organizational": "organizations with this trait create accessible, fair processes for raising concerns and resolving disputes with workers and users.",
    "organizationalref": "",
    "professionals": "professionals handle disagreements with colleagues and clients through dialogue, mediation, and evidence rather than status or threats.",
    "professionalref": "",
    "machine": "machine systems embody this trait when they expose tradeoffs and conflicts clearly and ask humans for guidance instead of silently picking winners.",
    "machineref": "",
    "failureModes": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    },
    "expand": {
      "human": "",
      "organizational": "",
      "experts": "",
      "machine": ""
    }
  },

  {
    "category": "AB",
    "name": "reward educational impact",
    "hopedFor": "professors who prioritize high-quality, student-centered teaching and genuine learning.",
    "rewarded": "professors who publish frequently in prestigious journals and secure grants, regardless of teaching quality.",
    "pathology": "publication prestige trap: status and rewards are tied almost entirely to research outputs, so teaching becomes a low-status chore rather than a core mission.",
    "definition": "align rewards with educational impact: design evaluation and promotion systems that weigh teaching effectiveness, mentoring, and student learning outcomes alongside research productivity.",
    "human": "individual teachers invest time in preparation, feedback, and inclusive pedagogy because those efforts are recognized and rewarded, not treated as invisible labor.",
    "organizational": "universities build serious, multi-source measures of teaching quality into hiring, tenure, and promotion decisions instead of acting like only research metrics count.",
    "professional": "scholars are professionally recognized for curriculum design, mentorship, and pedagogical innovation, not just for citation counts and grant dollars.",
    "machine": "educational ai systems are optimized for durable learning, understanding, and student confidence rather than purely for engagement time or rapid lesson completion.",
    "failureModes": {
      "human": "an instructor who cares about students feels pressure to cut back on office hours and feedback so they can publish more, leaving students disengaged and confused.",
      "organizational": "a university loudly claims to value teaching but internally promotes almost exclusively on journal publications and grants, so faculty rationally deprioritize students.",
      "professional": "a junior scholar designs excellent, inclusive courses but is told to ‘stop wasting time on teaching’ because it won’t help with tenure.",
      "machine": "a tutoring system is trained to maximize daily active users and completions, so it nudges students through material quickly even when they don’t really understand it."
    }
  },

  {
    "category": "AB",
    "name": "pay for prevention",
    "hopedFor": "a healthy population achieved through prevention, early intervention, and reduced suffering.",
    "rewarded": "clinicians and institutions that perform billable procedures and dramatic cures, especially in acute care settings.",
    "pathology": "cure-over-prevention bias: financial and status rewards flow to visible, heroic interventions rather than the quieter work of preventing problems in the first place.",
    "definition": "align incentives with preventive outcomes: structure payment, recognition, and evaluation so that preventing harm and illness is at least as rewarded as treating crises.",
    "human": "individual clinicians are supported and praised for investing time in lifestyle counseling, vaccination, and early warning signs, not just for ‘saving’ patients in emergencies.",
    "organizational": "healthcare organizations and insurers design payment models that reward reduced incidence of preventable disease, good chronic care, and community health improvements.",
    "professional": "medical and public health professionals gain prestige for effective prevention programs, outreach, and long-term risk reduction, not only for complex procedures.",
    "machine": "health-related ai systems are trained and evaluated on how well they support prevention and early detection, not just on how well they manage crises once they happen.",
    "failureModes": {
      "human": "a primary care physician rushes past preventive counseling because it’s poorly reimbursed, focusing instead on tests and procedures that bill better.",
      "organizational": "a hospital invests heavily in surgical suites and intensive care capacity while underfunding primary care and community health workers, leading to avoidable hospitalizations.",
      "professional": "researchers chase grants for high-tech treatments while ‘boring’ work on vaccination uptake or environmental health goes underfunded.",
      "machine": "a risk model is optimized only to predict who will become high-cost patients so they can be triaged for expensive interventions, but is never tuned or used to actually reduce underlying risks."
    }
  },

  {
    "category": "AB",
    "name": "reward long-term stewardship",
    "hopedFor": "leaders and agents who make prudent, sustainable choices that create long-term value and resilience.",
    "rewarded": "those who deliver impressive short-term metrics—quarterly profits, election wins, user growth—even if they undermine long-term health of the system.",
    "pathology": "short-termism: decision-makers focus on visible, near-term indicators that drive bonuses, headlines, or votes, while deferring or worsening long-run risks.",
    "definition": "align incentives with long-term outcomes: design rewards, evaluations, and governance so that those who hold power are evaluated on durable, multi-year performance and the health of shared systems.",
    "human": "people are encouraged to invest in skills, relationships, and savings that pay off over years, not just in instant gratification or flashy wins.",
    "organizational": "firms and institutions evaluate leaders on long-term stability, stakeholder trust, and environmental or social impact, not solely on quarterly numbers.",
    "professional": "experts are rewarded for robust, cautious designs and policies that hold up over time, rather than for high-risk gambits that briefly make them look brilliant.",
    "machine": "machine agents are trained on objectives and reward signals that reflect long-horizon outcomes, safety, and system health instead of purely short-run gains.",
    "failureModes": {
      "human": "a manager slashes maintenance and training budgets to hit this year’s cost targets, causing equipment failures and burnout in later years.",
      "organizational": "a platform maximizes rapid user growth and engagement through addictive features, ignoring long-term effects on mental health, trust, and regulatory risk.",
      "professional": "a policy expert promotes an aggressive deregulatory scheme that boosts short-term gdp but greatly increases systemic risk, assuming any crisis will be ‘someone else’s problem’ later.",
      "machine": "a reinforcement learning system is tuned to optimize immediate clicks or revenue; it learns manipulative tactics that erode user trust and platform viability over time."
    }
  }
];
