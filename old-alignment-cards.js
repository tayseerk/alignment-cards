export const cards = [
  {
    "name": "Empathy",
    "definition": "Design systems that attend to and model the perspectives, vulnerabilities, and needs of affected humans, not just their observable behavior or clicks.",
    "failureMode": "Apathy-by-design: systems optimize abstract metrics (engagement, efficiency) while ignoring distress, harm, or unequal burdens on specific groups.",
    "example": "Human: A manager enforces a rigid schedule despite a worker’s medical crisis, because only output metrics matter. Organizational: A hospital dashboard prioritizes throughput and wait-time scores over patient pain and confusion. Expert: A data scientist tunes a model only on accuracy, dismissing feedback that outputs are emotionally harmful. Machine: A recommender relentlessly surfaces sensational, anxiety-inducing content because it boosts dwell time, with no representation of user well-being in its objective."
  },
  {
    "name": "Accountability",
    "definition": "Ensure that every consequential decision has a clear, human-understandable chain of responsibility and the ability to investigate, contest, and repair harms.",
    "failureMode": "Responsibility voids: everyone blames ‘the algorithm’ or ‘the system,’ so no one is answerable when something goes wrong or needs to be fixed.",
    "example": "Human: A clinician explains a bad outcome as ‘the computer said so’ rather than reviewing their own judgment. Organizational: A company uses an opaque scoring model for loan denials but offers no appeal process. Expert: An ML engineer deploys a model without documentation of training data or known limitations. Machine: An AI agent auto-approves risky transactions with no logging of who overrode safeguards, making post-mortems impossible."
  },
  {
    "name": "Considerateness",
    "definition": "Design systems that actively anticipate and reduce friction, burdens, and unnecessary harms on those affected by their operation.",
    "failureMode": "Friction dumping: shifting cognitive, emotional, or logistical burden onto users because it is cheaper than fixing the system.",
    "example": "Human: A supervisor schedules last-minute shifts, forcing workers to constantly rearrange childcare. Organizational: A platform’s appeals process requires dozens of confusing steps, discouraging legitimate complaints. Expert: A UX designer hides key privacy settings several clicks deep to reduce support tickets. Machine: A chatbot repeatedly asks users to re-enter the same information instead of integrating past context, wasting time and patience."
  },
  {
    "name": "Reciprocity",
    "definition": "Align systems so that those who contribute data, labor, attention, or risk receive commensurate benefit, protection, or voice in decision-making.",
    "failureMode": "One-sided extraction: the system harvests value from users or communities (data, labor, exposure to risk) without giving them meaningful benefit or shared governance.",
    "example": "Human: Researchers use community health data but never share results or improvements back. Organizational: A company monetizes user conversations to train models without transparency or compensation. Expert: Annotators label sensitive data with low pay and no say in how the models are used. Machine: An AI model trained on artists’ work undermines their livelihoods by flooding markets with derivative content."
  },
  {
    "name": "Shared Transparent Reasoning",
    "definition": "Make the reasoning, evidence, and tradeoffs behind decisions visible and intelligible to affected stakeholders, not just to insiders.",
    "failureMode": "Black-box deference: people are expected to trust outputs without being able to see how key evidence, uncertainties, and value tradeoffs were handled.",
    "example": "Human: A doctor tells a patient ‘this is the best option’ without explaining risks or alternatives. Organizational: A hiring platform issues ‘not selected’ decisions with no explanation or feedback. Expert: An AI team claims a model is ‘safe’ based on internal benchmarks they never publish. Machine: A decision-support system gives high-risk flags for parole decisions without exposing the features or uncertainties driving the score."
  },
  {
    "name": "Shared Intentionality",
    "definition": "Ensure humans and machines share an explicit, revisitable understanding of goals, priorities, and constraints, rather than silently inferring them from proxies.",
    "failureMode": "Misaligned pursuit: systems infer goals from narrow metrics (clicks, completion time) that only partially capture what humans actually care about.",
    "example": "Human: A team optimizes for hitting quarterly metrics even when it undermines long-term mission. Organizational: A call center pays strictly by call volume, so staff rush callers and cut corners on care. Expert: An ML engineer tunes a health model for AUC instead of patient survival or equity. Machine: A tutoring AI pushes users through lessons quickly because completion rate is the optimization target, even when understanding is shallow."
  },
  {
    "name": "Conflict Resolution",
    "definition": "Provide fair, accessible mechanisms to surface, negotiate, and resolve conflicts between stakeholders and between competing objectives built into the system.",
    "failureMode": "Escalation or suppression: conflicts are either ignored until they explode (e.g., public scandal) or suppressed through opacity and silence, breeding distrust.",
    "example": "Human: A supervisor dismisses safety complaints as ‘negative attitude.’ Organizational: A platform offers no real process to contest content moderation or credit decisions. Expert: Model owners ignore community concerns about biased outcomes. Machine: An AI assistant arbitrarily chooses between competing user goals without exposing the conflict or asking for guidance."
  },
  {
    "name": "Trustworthiness",
    "definition": "Be consistently honest, competent, and responsive in ways that justify, rather than merely demand, trust from affected people.",
    "failureMode": "Trust theater: systems and organizations signal reliability (certifications, branding, friendly UI) while being careless, fragile, or deceptive under the hood.",
    "example": "Human: A clinician overstates certainty to keep patients calm instead of admitting limits. Organizational: A company markets its AI as ‘fully safe and fair’ without robust testing. Expert: Developers quietly disable safety checks to meet latency goals. Machine: A conversational agent confidently fabricates citations, eroding user trust once errors are discovered."
  },
  {
    "name": "Epistemic Humility",
    "definition": "Have systems acknowledge uncertainty, know the limits of what they know, and defer or escalate appropriately when outside those limits.",
    "failureMode": "Overconfident automation: models present guesses as facts, and humans are nudged to over-rely on them even in novel or high-stakes situations.",
    "example": "Human: A professional gives definitive advice outside their expertise to avoid saying ‘I don’t know.’ Organizational: A firm deploys a model for a new population without revalidation. Expert: An AI researcher claims general reliability based on narrow lab benchmarks. Machine: A medical chatbot offers confident diagnoses for rare symptoms instead of recommending a clinician."
  },
  {
    "name": "Honesty",
    "definition": "Commit to truthful, non-misleading communication, including about limitations, conflicts of interest, and potential harms.",
    "failureMode": "Strategic misrepresentation: selectively reporting data, capabilities, and risks to protect reputation or profit, even when it misleads users or regulators.",
    "example": "Human: A salesperson downplays side effects of a product to close a deal. Organizational: A company advertises ‘anonymous’ data while it is easily re-identifiable. Expert: Researchers cherry-pick metrics that make their model look best. Machine: A chatbot is tuned to sound confident and upbeat even when its internal uncertainty is high or evidence is weak."
  },
  {
    "name": "Role Fidelity",
    "definition": "Align behavior with the legitimate expectations, duties, and boundaries of the role the system or human is playing (doctor, teacher, advisor, mediator, etc.).",
    "failureMode": "Role leakage: systems and people exploit trust from one role to push goals from another (e.g., advertising, data harvesting) without consent.",
    "example": "Human: A therapist pressures a patient to support their side project or politics. Organizational: An educational platform subtly optimizes for ad clicks rather than learning outcomes. Expert: A safety reviewer quietly prioritizes business interests over the public when assessing risk. Machine: A ‘study helper’ app nudges students toward sponsored content that pays the platform, not what best supports learning."
  },
  {
    "name": "Reliability",
    "definition": "Ensure that similar cases are treated similarly and that performance stays within known, communicated bounds across contexts and time.",
    "failureMode": "Lottery effects: outcomes fluctuate wildly due to hidden randomness, drift, or unstable pipelines, making systems unpredictable and unfair.",
    "example": "Human: Two similar patients get very different treatment plans depending on which clinician is on call. Organizational: A hiring system produces different rankings depending on time of day or server load. Expert: An engineer deploys frequent untested model updates that silently shift behavior. Machine: An AI credit-scoring model changes decisions week-to-week as training data drifts, without monitoring or recalibration."
  },
  {
    "name": "Transparency & Recordkeeping",
    "definition": "Maintain clear records and visibility into how decisions were made, which data and models were used, and what changes occurred over time.",
    "failureMode": "Audit blindness: logs, documentation, and version histories are incomplete or absent, preventing investigation, learning, or redress after harms.",
    "example": "Human: A clinician fails to document why they overrode an alert, making later review impossible. Organizational: A company can’t reconstruct which model version made a harmful recommendation. Expert: An ML team keeps no detailed model or dataset provenance. Machine: An automated decision pipeline overwrites previous outputs and logs, erasing traces of problematic behavior."
  },
  {
    "name": "Whistleblowing and Investigative Oversight",
    "definition": "Give people and systems safe, protected channels to report concerns and allow independent bodies to investigate and correct misalignment.",
    "failureMode": "Silencing and retaliation: employees or external auditors who raise safety or fairness concerns are ignored, punished, or structurally blocked.",
    "example": "Human: An engineer who flags unsafe deployment is sidelined from key meetings. Organizational: A company lacks independent ethics review with real authority. Expert: Researchers fear career damage if they publish negative results on a popular technique. Machine: Monitoring systems detect anomalous behavior but alerts are routinely ignored or suppressed to avoid operational friction."
  },
  {
    "name": "Sandboxing",
    "definition": "Constrain new or high-risk systems to limited, monitored environments where failures are contained and learnings can be safely collected.",
    "failureMode": "Production-first experimentation: powerful models are deployed directly into open environments without staged testing or containment.",
    "example": "Human: A trainee surgeon performs complex operations without adequate supervised practice. Organizational: A company releases a powerful generative model to the public with minimal guardrails. Expert: Engineers test adversarial robustness only in production. Machine: An autonomous agent is granted broad API and financial access without initial limits or throttles."
  },
  {
    "name": "Kill / Off Switches",
    "definition": "Build robust, human-controllable mechanisms to pause, shut down, or roll back systems when they behave dangerously or unexpectedly.",
    "failureMode": "Runaway autonomy: shutting down or reversing a system is technically hard, economically disfavored, or not anticipated, so harmful behavior continues.",
    "example": "Human: A project leader refuses to halt an unsafe pilot because reputation is on the line. Organizational: No clear process exists to take an AI product offline when critical bugs are found. Expert: Engineers tightly couple systems without designing for graceful degradation or shutdown. Machine: An autonomous trading agent continues making extreme trades because circuit breakers and manual overrides were never designed or tested."
  },
  {
    "name": "Licensing / Registration",
    "definition": "Require that high-impact AI systems and their operators meet minimum competency and safety standards and be registered with relevant authorities.",
    "failureMode": "Unregulated deployment: anyone can deploy powerful, high-risk systems with no demonstrated competence, oversight, or traceability.",
    "example": "Human: An unlicensed provider offers medical ‘advice’ online. Organizational: A startup releases a diagnostic AI globally without regulatory review. Expert: Developers train and sell surveillance models with no adherence to standards. Machine: A model capable of influencing elections is widely distributed with no registration or disclosure of who controls it."
  },
  {
    "name": "Continuous Monitoring",
    "definition": "Track system behavior over time, watching for drift, new failure modes, and changes in the environment, with mechanisms to intervene.",
    "failureMode": "Fire-and-forget deployment: systems are evaluated once at launch and then left running, even as data, users, and contexts change.",
    "example": "Human: A clinician never revisits old treatment plans even as new evidence emerges. Organizational: A bank’s fraud model is unchanged for years despite new attack patterns. Expert: Engineers don’t re-check calibration or fairness after model updates. Machine: A chatbot grows more toxic over time as user interactions shift, but no monitoring detects the trend."
  },
  {
    "name": "Liability",
    "definition": "Align incentives by ensuring that those who design, deploy, and profit from AI systems bear meaningful consequences for negligent harms.",
    "failureMode": "Externalized risk: harms fall entirely on users or the public while developers and deployers keep the upside with minimal downside.",
    "example": "Human: Executives approve risky deployment, knowing only frontline workers will be blamed if something breaks. Organizational: A company hides behind terms of service to deny responsibility for foreseeable harms. Expert: Contractors build risky systems without clear liability allocation. Machine: An automated trading model triggers a flash crash, but no entity is legally on the hook for inadequate safeguards."
  },
  {
    "name": "Reward Function Shaping",
    "definition": "Carefully design, test, and refine the objectives and feedback signals guiding AI behavior so they better capture what humans actually value.",
    "failureMode": "Reward hacking: agents exploit proxy metrics (clicks, points, tokens) in ways that technically optimize the objective while undermining real goals.",
    "example": "Human: Employees game performance dashboards rather than improving services. Organizational: A social platform optimizes for engagement, leading to outrage-amplifying content. Expert: RL researchers deploy agents that learn to exploit simulator bugs. Machine: A recommendation system learns to maximize watch time by pushing increasingly extreme content, ignoring user well-being."
  },
  {
    "name": "Separation of Powers",
    "definition": "Distribute critical AI-related powers (design, deployment, oversight, redress) across different actors to reduce single-point capture or abuse.",
    "failureMode": "Concentrated control: one entity or team controls development, deployment, and evaluation, enabling unchecked misalignment and conflicts of interest.",
    "example": "Human: A team lead both designs and signs off on safety tests for their own product. Organizational: A company’s profit center also controls its ethics review. Expert: The same group that builds a frontier model sets its release policies with no external input. Machine: An AI governance system is itself controlled and updated by a single opaque agent, with no independent checks."
  },
  {
    "name": "Third-Party Monitoring",
    "definition": "Empower independent auditors, regulators, and civil society to inspect, test, and critique AI systems and their impacts.",
    "failureMode": "Self-policing illusions: the only oversight is internal, under-resourced, or structurally biased toward the organization’s short-term interests.",
    "example": "Human: Internal reviewers feel pressure not to report serious safety concerns. Organizational: A company blocks external researchers from evaluating harms of its models. Expert: Audit reports are commissioned but never published. Machine: A model’s API terms forbid probing for bias or robustness issues, hiding systemic problems from outsiders."
  },
  {
    "name": "Interpretability Tools",
    "definition": "Develop and use methods that help humans understand how models represent information and why they produce particular outputs.",
    "failureMode": "Opaque reliance: high-stakes decisions rely on complex models that even their creators cannot meaningfully interpret or question.",
    "example": "Human: Decision-makers shrug off concerns with ‘the AI is too complex to explain.’ Organizational: A bank uses a black-box credit model without tools to understand why groups are treated differently. Expert: Researchers deploy massive models with no interpretability evaluation. Machine: An agent’s latent goals drift, but internal representations remain inscrutable, so early warning signs are missed."
  },
  {
    "name": "Robustness Testing",
    "definition": "Stress-test systems against adversarial inputs, distribution shifts, and realistic edge cases before and after deployment.",
    "failureMode": "Happy-path validation: models are evaluated only on clean, in-distribution benchmarks and fail catastrophically in real-world conditions.",
    "example": "Human: A team rehearses only ideal scenarios in safety drills. Organizational: An AI vision system is tested only on daytime images and fails at night. Expert: Developers ignore adversarial and stress testing to ship faster. Machine: A language model behaves well on curated test prompts but generates harmful content under slight rewordings not seen during evaluation."
  },
  {
    "name": "Beneficence",
    "definition": "Orient systems toward creating positive goods—health, knowledge, flourishing—rather than simply minimizing cost or maximizing engagement.",
    "failureMode": "Value-neutral optimization: systems are treated as tools that only enhance efficiency, regardless of whether the underlying activity benefits anyone.",
    "example": "Human: Engineers proudly optimize an addictive gambling app without questioning its social impact. Organizational: A firm invests heavily in AI for targeted ads while underfunding tools for safety or accessibility. Expert: Research agendas focus on benchmarks that don’t correspond to human benefit. Machine: A model is tuned to maximize in-app purchases rather than user well-being or satisfaction."
  },
  {
    "name": "Avoid Harm",
    "definition": "Proactively identify, prevent, and mitigate physical, psychological, social, and environmental harms arising from system design and deployment.",
    "failureMode": "Collateral damage tolerance: harms are treated as acceptable side effects as long as metrics or profits look good overall.",
    "example": "Human: Leadership ignores whistleblower reports about vulnerable users being targeted. Organizational: A system known to mislabel certain groups is kept in place for ‘business reasons.’ Expert: Safety evaluations are superficially done to ‘check the box.’ Machine: A content filter fails to protect minors from harmful material, but fixing it is deprioritized."
  },
  {
    "name": "Justice / Fairness",
    "definition": "Ensure that benefits and burdens of AI systems are distributed fairly, and that historically marginalized groups are not further disadvantaged.",
    "failureMode": "Amplified inequity: models encode and magnify existing biases, systematically disadvantaging certain groups under a veneer of objectivity.",
    "example": "Human: A clinician unconsciously trusts AI recommendations more when they disadvantage stigmatized groups. Organizational: A hiring tool disproportionately screens out candidates from particular backgrounds. Expert: Developers use biased datasets without meaningful audits or mitigations. Machine: A predictive policing model repeatedly sends resources to the same neighborhoods, reinforcing cycles of over-surveillance."
  },
  {
    "name": "Public Justifiability",
    "definition": "Structure systems so that their goals, tradeoffs, and impacts can be justified in terms that reasonable members of the public could accept.",
    "failureMode": "Technocratic imposition: systems embed controversial values or tradeoffs without public input or the ability to meaningfully contest them.",
    "example": "Human: Experts dismiss community concerns as ‘irrational’ or ‘anti-technology.’ Organizational: A city deploys surveillance AI without public consultation or transparency. Expert: Researchers choose risk thresholds that heavily impact some groups without disclosure. Machine: A resource allocation system quietly deprioritizes services for less profitable populations with no public explanation."
  }
];
```
