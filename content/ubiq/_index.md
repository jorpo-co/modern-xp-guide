---
title: "Ubiquitous Language"
weight: 70
sitemap:
  priority: 0.9
meta:
  description: "Complete glossary of Modern XP terms, from Acceptance Criteria to Work Items."
---

# Ubiquitous Language

Terms defined within the Modern XP domain. Each entry links to the document where the term originates.


## A

<a id="acceptance-criteria"></a>
**Acceptance Criteria**
: Pass/fail conditions that define when a behaviour is complete. Exist on Use Cases (as Gherkin scenarios), Tasks, or lightweight Stories. Must exist *somewhere* before building.

<a id="actor"></a>
**Actor**
: Entity that starts an interaction with the system. Primary actor starts the Use Case.

<a id="adr-architecture-decision-record"></a>
**ADR (Architecture Decision Record)**
: Document that captures an architectural decision, its context, and trade-offs. Output of Spikes and domain boundary changes.

<a id="agent-cost"></a>
**Agent Cost**
: The running cost of agentic work: tokens, compute, and tool usage. FinOps tracks it like any infrastructure cost and budgets per service and per process.

<a id="aggregate"></a>
**Aggregate**
: Cluster of domain objects treated as one unit for changes. Defines a consistency boundary. One Use Case maps to one Aggregate.

<a id="aggregate-boundary"></a>
**Aggregate Boundary**
: The scope within which consistency is guaranteed. Crossing boundaries in one Use Case signals the Story is too broad.

<a id="aggregate-design"></a>
**Aggregate Design**
: DDD technique to define consistency boundaries. Use when data integrity problems surface.

<a id="agile-manifesto"></a>
**Agile Manifesto**
: Foundational values and principles this guide builds on. When contradiction occurs, the Manifesto wins.

<a id="ai-assisted"></a>
**AI-assisted**
: Use of tools (Cursor, Copilot) for rapid prototyping, boilerplate, and test generation. Review output.

<a id="analytics"></a>
**Analytics**
: Website visitor data collection via Umami. Privacy-focused, no cookies, no PII. Compliant with GDPR, CCPA, PECR.

<a id="application-layer"></a>
**Application Layer**
: Coordinates between Aggregates when a scenario crosses aggregate boundaries. Use Case does not handle this.


## B

<a id="big-picture-event-storming"></a>
**Big Picture Event Storming**
: Domain exploration technique to map domain events, commands, actors, and pain points. Use when the team lacks a shared mental model.

<a id="blameless-post-mortem"></a>
**Blameless Post-mortem**
: Incident analysis that focuses on system causes, not individual blame. Run soon after each incident.

<a id="blueprint"></a>
**Blueprint**
: Deployment strategy family: switching traffic between environments. See [Blue-green Deployment](/ubiq/#blue-green-deployment), [Canary Deployment](/ubiq/#canary-deployment), and [Rolling Deployment](/ubiq/#rolling-deployment).

<a id="blue-green-deployment"></a>
**Blue-green Deployment**
: Deployment strategy that runs two environments (blue and green) to switch traffic atomically.

<a id="bounded-context"></a>
**Bounded Context**
: DDD concept for a boundary within which a particular model applies. Identified via Context Mapping.

<a id="build-phase"></a>
**Build Phase**
: Core delivery moment where Stories evolve to needed fidelity, acceptance scenarios are written, Tasks defined, and Tests written. Execution follows.

<a id="business-readiness"></a>
**Business Readiness**
: Go/No-Go gate check that the business is ready for release.

<a id="business-rules"></a>
**Business Rules**
: Domain constraints that apply across all Use Case scenarios.


## C

<a id="canary-deployment"></a>
**Canary Deployment**
: Gradual release to a small subset of users before full rollout.

<a id="candidate-issue"></a>
**Candidate Issue**
: Potential Issue found during Event Storming. No requirement to link every observation.

<a id="capture"></a>
**Capture**
: First stage of Issue lifecycle. An Issue enters the system from any source.

<a id="ccpa"></a>
**CCPA**
: California Consumer Privacy Act. Privacy regulation this site's analytics comply with.

<a id="change-failure-rate"></a>
**Change Failure Rate**
: DORA metric for the percentage of deployments that cause a failure.

<a id="chore"></a>
**Chore**
: Work Item that supports delivery without direct user value. Examples: dependency upgrades, CI fixes, test infra. Tracked under parent Story or Use Case.

<a id="ci-cd-continuous-integration-and-continuous-delivery"></a>
**CI/CD (Continuous Integration and Continuous Delivery)**
: Automated pipeline for integration and delivery of code. Maturity enables longer delivery cycles safely.

<a id="close"></a>
**Close**
: Final stage of Issue lifecycle. Issue is resolved, abandoned, or parked. Searchable but not actionable.

<a id="code-review"></a>
**Code Review**
: Async review technique for small, safe changes. Suits remote teams.

<a id="command"></a>
**Command**
: DDD concept for an intent to change state. Mapped to Use Case flows: main scenario uses primary command, extensions use alternate commands.

<a id="complexity"></a>
**Complexity**
: The enemy of delivery speed. Contain it with deliberate boundaries on scope, consistency, and responsibility.

<a id="consistency-boundary"></a>
**Consistency Boundary**
: See [Aggregate](/ubiq/#aggregate) and [Aggregate Boundary](/ubiq/#aggregate-boundary).

<a id="constraints"></a>
**Constraints**
: Boundaries, business rules, and design decisions documented on a Task.

<a id="context-mapping"></a>
**Context Mapping**
: DDD technique to identify bounded contexts and their relationships. Use when service boundaries are unclear.

<a id="cost-management"></a>
**Cost Management**
: Review infrastructure costs once per cycle. Act when cost grows faster than user growth or one service exceeds 20% of the budget.

<a id="cost-of-delay-wsjf"></a>
**Cost of Delay (WSJF)**
: Prioritisation pattern that uses user value, time criticality, and risk reduction divided by job size. Use for high-stakes disagreement.

<a id="cyclical-round-robin"></a>
**Cyclical / Round-robin**
: Prioritisation pattern where each stakeholder picks one must-have per cycle. Use with multiple sponsors or customer groups.


## D

<a id="decision-record"></a>
**Decision Record**
: See [ADR](/ubiq/#adr-architecture-decision-record).

<a id="definition-of-done"></a>
**Definition of Done**
: Checklist on a Task for completion verification.

<a id="delivery"></a>
**Delivery**
: Continuous loop that turns Features into working, released software via Stories and Use Cases.

<a id="delivery-activities"></a>
**Delivery Activities**
: Coding, testing, designing, shipping. Measured against process activities in the Friction Budget.

<a id="delivery-cycle"></a>
**Delivery Cycle**
: Period from work selection to its release. Size determined by context, not rule. Has Build, Review, and Retro moments.

<a id="demo"></a>
**Demo**
: Review moment that shows stakeholders what shipped. Keep short.

<a id="deployment-frequency"></a>
**Deployment Frequency**
: DORA metric for how often the team deploys to production.

<a id="direction"></a>
**Direction**
: Shared understanding of where the team goes and why. Answers "what issues is this team here to resolve?" Revisable.

<a id="domain"></a>
**Domain**
: The problem space the team operates in. Exploration techniques (Event Storming, Context Mapping) used when unfamiliar.

<a id="domain-event"></a>
**Domain Event**
: Something that happened in the domain. Mapped during Event Storming.

<a id="domain-object"></a>
**Domain Object**
: Entity or value object inside an Aggregate boundary.

<a id="dora-metrics"></a>
**DORA Metrics**
: DevOps Research and Assessment metrics: deployment frequency, lead time, change failure rate, time to restore.


## E

<a id="engineering-stability"></a>
**Engineering Stability**
: Go/No-Go gate check that confirms readiness. Includes rollback plan.

<a id="error-budget"></a>
**Error Budget**
: The gap between an SLO and actual performance. Use it to decide between features and reliability.

<a id="estimate"></a>
**Estimate**
: Optional prediction of effort. Default: no estimates. Use impact ranking instead.

<a id="event-storming"></a>
**Event Storming**
: DDD workshop technique. Two levels: Big Picture (discovery) and Process/Design (design).

<a id="expected-result"></a>
**Expected Result**
: What passing means for a Test.

<a id="extension"></a>
**Extension**
: Alternative flow, error condition, or exception in a Use Case scenario.


## F

<a id="face-to-face-conversation"></a>
**Face-to-face Conversation**
: Most efficient communication method. Favour over tickets when co-located. Use synchronous calls when remote.

<a id="feature"></a>
**Feature**
: Narrative that describes a user intent. Current flow, pain points, desired flow, success measurement. Exists on the Roadmap.

<a id="feature-adoption"></a>
**Feature Adoption**
: Production signal that shows whether users engage with a Feature. Creates or deprioritises Issues.

<a id="feature-flag"></a>
**Feature Flag**
: Mechanism that decouples deploy from release. Off by default. Skipped for invisible changes or early stage.

<a id="feedback"></a>
**Feedback**
: The only ground truth. Production data, user behaviour, team sentiment override plans. Closes the loop from Direction to Issues to Work Items to Release.

<a id="finops"></a>
**FinOps**
: Tracks cost per service as part of monitoring.

<a id="first-response"></a>
**First Response**
: Target time for initial acknowledgement of an incident. Defined per severity level.

<a id="fix-target"></a>
**Fix Target**
: Target time to resolve an incident. Defined per severity level.

<a id="friction-budget"></a>
**Friction Budget**
: Guideline that caps process activities at 20% of cycle time. Estimate at retro, cut one item if exceeded. Cut meetings with no agenda, gates that never fail, reports no one reads, approvals always approved.

<a id="future-bucket"></a>
**Future (bucket)**
: Intentionally absent from the Roadmap. Ideas live in Issues (Idea type). Removed to force explicit "no" decisions.


## G

<a id="gate"></a>
**Gate**
: Process checkpoint that consumes energy. Earns its keep or gets removed.

<a id="gatekeeper"></a>
**Gatekeeper**
: No gatekeeper between team and stakeholder. Anyone can talk to users directly.

<a id="gdpr"></a>
**GDPR**
: General Data Protection Regulation. Privacy regulation this site's analytics comply with.

<a id="gherkin"></a>
**Gherkin**
: Given/When/Then syntax for writing acceptance scenarios from Use Case flows. Each scenario becomes one Test.

<a id="go-no-go-gate"></a>
**Go/No-Go Gate**
: Lightweight release gate that checks engineering stability, QA acceptance, security scan, and business readiness. Skip for low-risk releases.

<a id="goals"></a>
**Goals**
: Short-term concrete outcomes (1-2) that make Missions actionable. Changed at team discretion.

<a id="guiderails"></a>
**Guiderails**
: Boundaries set by Direction that Issues exist within. Vision defines class of problems. Missions name what to achieve.


## I

<a id="idea"></a>
**Idea**
: Issue type for something that could be better. Example: "Add real-time shipment tracking."

<a id="impact-ranking"></a>
**Impact Ranking**
: Default prioritisation method. Sort by gut-checked impact-to-effort. Disagreement resolved by conversation.

<a id="incident"></a>
**Incident**
: Issue type for something that failed in production. Example: "Payment gateway timeout."

<a id="incident-response"></a>
**Incident Response**
: Process with SEV1-4 severity levels, response targets, and runbooks. Run a blameless post-mortem after each incident.

<a id="inputs"></a>
**Inputs**
: What a Task needs to start execution.

<a id="integration-tests"></a>
**Integration Tests**
: Quality gate on every push. Automated. Verify system components work together.

<a id="issue"></a>
**Issue**
: Gap between current state and desired state. Types: Problem, Idea, Question, Incident. Everything starts with an Issue.

<a id="issues-backlog"></a>
**Issues Backlog**
: Holds everything the team is not actively working on. The inbox. Moves to Work Item only when the team decides to act.


## J

<a id="judgment-over-rules"></a>
**Judgment over Rules**
: Core principle. No rule applies in all contexts. Team decides when to follow, bend, or break any practice.


## K

<a id="kano-model"></a>
**Kano Model**
: Prioritisation model rejected for cycle-level decisions. Too abstract. At most a quarterly direction input.


## L

<a id="lead-time"></a>
**Lead Time**
: DORA metric for time from commit to production.

<a id="level"></a>
**Level**
: Use Case classification per Cockburn: Summary, User Goal, or Subfunction.

<a id="logs"></a>
**Logs**
: Records of system events. Part of monitoring, alongside metrics and traces.


## M

<a id="main-success-scenario"></a>
**Main Success Scenario**
: Step-by-step happy path of a Use Case.

<a id="maintenance"></a>
**Maintenance**
: Continuous activity after first Release. Includes monitoring, incident response, and feedback loops.

<a id="metrics"></a>
**Metrics**
: Quantitative measurements of system performance. Part of monitoring, alongside logs and traces.

<a id="missions"></a>
**Missions**
: Medium-term descriptions of what the team works towards now. Change with environment shifts.

<a id="monitoring"></a>
**Monitoring**
: Logs, metrics, traces. Continuous observation of the system in production.

<a id="monte-carlo"></a>
**Monte Carlo**
: Forecasting method that turns historical throughput into a probability range for delivery dates. Used instead of estimates when the team plans releases.

<a id="moscow"></a>
**MoSCoW**
: Must/Should/Could/Won't. Rejected as a Roadmap method. "Should" and "Could" are Future in disguise.


## N

<a id="next-roadmap-bucket"></a>
**Next (Roadmap bucket)**
: Features the team works on after Now finishes.

<a id="now-roadmap-bucket"></a>
**Now (Roadmap bucket)**
: Features the team works on actively.

<a id="numeric-scores"></a>
**Numeric Scores**
: RICE, ICE, weighted matrices. Rejected for false precision. Weights are subjective but feel objective.


## O

<a id="observation"></a>
**Observation**
: Output of domain exploration techniques. Can become Issues but no requirement to link.

<a id="on-call"></a>
**On-call**
: Fair rotation for incident response. Name primary and secondary escalation. Track toil. Automate if toil exceeds 30%.

<a id="operation"></a>
**Operation**
: Continuous activity after first Release. Includes monitoring, incident response, FinOps, and feedback.

<a id="orchestrator"></a>
**Orchestrator**
: The coordination role in agentic teams. Routes work between agents, holds shared state, validates output, and escalates failures to a human. In human teams, the Engineering Lead covers this.

<a id="outputs"></a>
**Outputs**
: What a Task produces.


## P

<a id="pain-point"></a>
**Pain Point**
: Friction or problem in the current domain. Mapped during Event Storming.

<a id="pair-programming"></a>
**Pair Programming**
: Technique for complex or critical code. Junior-senior pairing for learning.

<a id="parent-task"></a>
**Parent (Task)**
: Use Case ID or Story ID that the Task belongs to.

<a id="pecr"></a>
**PECR**
: Privacy and Electronic Communications Regulations. Privacy regulations this site complies with.

<a id="peer-review"></a>
**Peer Review**
: Catch predictable team errors. Prefer over process overhead.

<a id="postconditions"></a>
**Postconditions**
: What must be true after successful Use Case execution.

<a id="practice"></a>
**Practice**
: A technique the team applies, such as TDD or a retrospective. Practices serve the values. The team decides when a practice applies.

<a id="preconditions"></a>
**Preconditions**
: What must be true before a Use Case or Test executes.

<a id="primary-actor"></a>
**Primary Actor**
: Who starts the Use Case interaction.

<a id="prioritization"></a>
**Prioritisation**
: Conversation, not formula. Default: impact ranking. Production data decides when available.

<a id="privacy"></a>
**Privacy**
: Data collection limited to business communication response. No selling or sharing for marketing.

<a id="problem"></a>
**Problem**
: Issue type for something that is wrong. Example: "30% of orders miss the delivery window."

<a id="process"></a>
**Process**
: Has cost. Every gate, review, and meeting consumes energy. Cut what does not earn its keep.

<a id="process-activities"></a>
**Process Activities**
: Gate reviews, meeting attendance, preparation. Measured against delivery activities in the Friction Budget.

<a id="process-design-event-storming"></a>
**Process/Design Event Storming**
: Design-level Event Storming for Features with unclear internal flows. Outputs detailed flows, aggregate design, acceptance criteria.

<a id="production-readiness"></a>
**Production Readiness**
: Checklist a new service passes before it receives production traffic: logging, alerts, deploy/rollback process, backup strategy.

<a id="production-data"></a>
**Production Data**
: Ground truth that overrides plans. Drives feedback loops from Delivery back to Direction and Issues.

<a id="production-monitoring"></a>
**Production Monitoring**
: See [Monitoring](/ubiq/#monitoring).

<a id="prototype"></a>
**Prototype**
: Possible Spike output. Working model to evaluate an approach, not production code.


## Q

<a id="qa-acceptance"></a>
**QA Acceptance**
: Go/No-Go gate check that verifies Feature Flag behaviour (on and off).

<a id="quality-gates"></a>
**Quality Gates**
: Automated checks on every push: unit tests, integration tests, SAST, SCA. Zero manual gates for routine changes.

<a id="question"></a>
**Question**
: Issue type for something that is unknown. Example: "What triggers payment settlement?"


## R

<a id="red-green-refactor"></a>
**Red-Green-Refactor**
: TDD cycle. Write failing test (red), make it pass (green), improve design (refactor).

<a id="refactor"></a>
**Refactor**
: Improves design without behaviour change. Part of TDD and Technical Debt management.

<a id="release"></a>
**Release**
: Business decision to flip a Feature Flag from off to on. Not a technical event.

<a id="resolve"></a>
**Resolve**
: Issue lifecycle stage. Issue is resolved directly, promoted to Work Item, or parked.

<a id="retrospective-retro"></a>
**Retrospective (Retro)**
: Blameless review that produces 1-3 fix items. Skip for small cycles.

<a id="review"></a>
**Review**
: Core delivery moment with Demo and DORA check. After coherent batch of work.

<a id="roadmap"></a>
**Roadmap**
: Lightweight two-bucket (Now/Next) plan for Features. Changes freely based on learning. No Future bucket.

<a id="role"></a>
**Role**
: A responsibility, not an individual. One person can hold several roles. In agentic teams, a role becomes an agent with a system prompt.

<a id="rollback-plan"></a>
**Rollback Plan**
: Part of engineering stability gate. Exists for failure scenarios, not routine deploys.

<a id="rolling-deployment"></a>
**Rolling Deployment**
: Incremental replacement of instances across a cluster.

<a id="rule-governance"></a>
**Rule Governance**
: If a rule takes longer than the work it governs, abolish immediately.

<a id="rotation"></a>
**Rotation**
: Schedule for on-call shifts. Fair rotation with documented handover. Minimum two people per shift (primary + secondary).

<a id="runbook"></a>
**Runbook**
: Documented procedure for handling a specific operational situation. The team writes one when it expects an incident type to come back.


## S

<a id="sast-static-analysis"></a>
**SAST (Static Analysis)**
: Quality gate for automated code analysis of security and quality issues.

<a id="sca-dependency-scanning"></a>
**SCA (Dependency Scanning)**
: Quality gate for automated scanning of dependencies for known vulnerabilities.

<a id="scenario"></a>
**Scenario**
: A single flow through a Use Case. Each scenario (main success and extensions) becomes a Gherkin test.

<a id="scope"></a>
**Scope**
: Aggregate or system boundary for a Use Case.

<a id="security-scan"></a>
**Security Scan**
: Go/No-Go gate check. Passed before release.

<a id="service-layer"></a>
**Service Layer**
: Coordinates between Aggregates across Use Case boundaries.

<a id="sev1-4"></a>
**SEV1-4**
: Incident severity levels. SEV1 = user-facing outage, SEV2 = degraded subset of users, SEV3 = no user impact, SEV4 = cosmetic or internal.

<a id="slo-service-level-objective"></a>
**SLO (Service Level Objective)**
: One or two metrics that matter most to users. Track the gap as error budget to decide features vs reliability.

<a id="source-test"></a>
**Source (Test)**
: Use Case ID and scenario name, or Story ID that a Test traces to.

<a id="spike"></a>
**Spike**
: Timeboxed investigation for technical, domain, or architectural unknowns. Produces decision record, prototype, or ADR. No production code.

<a id="stakeholder"></a>
**Stakeholder**
: Person or group with interest in the team's output. No gatekeeper between team and stakeholder.

<a id="story"></a>
**Story**
: Lightweight value placeholder for a slice of a Feature. Title, value statement, priority. Independent. No estimates required.

<a id="system-prompt"></a>
**System Prompt**
: The instruction set that defines an agent's role: mission, responsibilities, capabilities, and input/output contracts. Process context is appended at dispatch time.


## T

<a id="task"></a>
**Task**
: Concrete, technology-agnostic implementation instruction. Breaks down a Use Case or Story into actionable steps. One per discrete behaviour change.

<a id="tdd-test-driven-development"></a>
**TDD (Test-Driven Development)**
: Red-Green-Refactor cycle. Default for new logic when behavioural correctness matters.

<a id="team-api"></a>
**Team API**
: A contract between teams: services provided, SLOs met, communication channels, and change notification. Without one, teams step on each other.

<a id="team-sentiment"></a>
**Team Sentiment**
: Ground truth input that overrides plans alongside production data and user behaviour.

<a id="technical-debt"></a>
**Technical Debt**
: Design or implementation shortcuts that slow future delivery. Reserves time after release. Prioritise over features when blocking speed.

<a id="test"></a>
**Test**
: Versioned reference point for acceptance, integration, or system-level verification. One per Gherkin scenario. Not a Task (verify versus build).

<a id="time-to-restore"></a>
**Time to Restore**
: DORA metric for time to recover from a production failure.

<a id="timebox"></a>
**Timebox**
: Fixed short duration for a Spike. If exceeded, rescope or run Go/No-Go on parent Feature.

<a id="toil"></a>
**Toil**
: Repetitive operational work. If on-call spends more than 30% of time on toil, automate the task. If more than 50%, change the system.

<a id="traces"></a>
**Traces**
: Part of monitoring. Track request flow through distributed systems.

<a id="triage"></a>
**Triage**
: Issue lifecycle stage. Understand, label (Problem/Idea/Question/Incident), decide action.

<a id="trivial-work"></a>
**Trivial Work**
: Typo, 1-line config. Build directly. Skip full Use Case structure.


## U

<a id="ubiquitous-language"></a>
**Ubiquitous Language**
: This glossary. Shared domain vocabulary used consistently across all team communication and documentation.

<a id="umami"></a>
**Umami**
: Privacy-focused analytics platform used by this site. No cookies, no PII.

<a id="unit-of-delivery"></a>
**Unit of Delivery**
: Use Case. What the team builds, tests, and accepts.

<a id="unit-tests"></a>
**Unit Tests**
: Quality gate on every push. Live in the codebase, not as Work Items.

<a id="unknowns"></a>
**Unknowns**
: Kill delivery. Find them early. Spike before commit.

<a id="use-case"></a>
**Use Case**
: Full structured specification per Cockburn/Jacobson template. Actor, preconditions, postconditions, scenarios, acceptance criteria, business rules. Unit of delivery.

<a id="user-behavior"></a>
**User Behaviour**
: Ground truth that overrides plans. Changes Missions, Goals, and prioritisation.


## V

<a id="value"></a>
**Value**
: One of the five XP values: Communication, Simplicity, Feedback, Courage, Respect. Values say what matters. Practices are how the team honours them.

<a id="value-stream"></a>
**Value Stream**
: The end-to-end sequence of work that turns an idea into value for users. A stream-aligned team owns one from start to end.

<a id="value-statement"></a>
**Value Statement**
: The "why" on a Story. Describes the value this slice delivers.

<a id="vision"></a>
**Vision**
: Long-term guiding statement. Changes slowly, if at all. Not a plan.


## W

<a id="what-hurts-most"></a>
**"What Hurts Most?" (pattern)**
: Pain-driven prioritisation. Feature that removes the biggest current pain wins.

<a id="work-item"></a>
**Work Item**
: How the team resolves Issues. Types: Feature, Story, Use Case, Spike, Chore, Task, Test.

<a id="working-software"></a>
**Working Software**
: The only ground truth. Software that runs outranks documentation.
