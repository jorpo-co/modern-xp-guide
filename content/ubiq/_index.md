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

**Acceptance Criteria**
: Pass/fail conditions that define when a behavior is complete. Exist on Use Cases (as Gherkin scenarios), Tasks, or lightweight Stories. Must exist *somewhere* before building.
: Source: [Work Items](/work-items/), [Appendix C](/appendices/c/), [Appendix G](/appendices/g/)

**Actor**
: Entity that starts an interaction with the system. Primary actor starts the Use Case.
: Source: [Direction](/direction/), [Appendix A](/appendices/a/), [Appendix C](/appendices/c/)

**ADR (Architecture Decision Record)**
: Document that captures an architectural decision, its context, and trade-offs. Output of Spikes and domain boundary changes.
: Source: [Work Items](/work-items/), [Appendix C](/appendices/c/), [Appendix D](/appendices/d/)

**Aggregate**
: Cluster of domain objects treated as one unit for changes. Defines a consistency boundary. One Use Case maps to one Aggregate.
: Source: [Direction](/direction/), [Work Items](/work-items/), [Appendix C](/appendices/c/)

**Aggregate Boundary**
: The scope within which consistency is guaranteed. Crossing boundaries in one Use Case signals the Story is too broad.
: Source: [Work Items](/work-items/), [Appendix C](/appendices/c/)

**Aggregate Design**
: DDD technique to define consistency boundaries. Use when data integrity problems surface.
: Source: [Direction](/direction/), [Appendix A](/appendices/a/)

**Agile Manifesto**
: Foundational values and principles this guide builds on. When contradiction occurs, the Manifesto wins.
: Source: [Overview](/)

**AI-assisted**
: Use of tools (Cursor, Copilot) for rapid prototyping, boilerplate, and test generation. Review output.
: Source: [Delivery](/delivery/)

**Analytics**
: Website visitor data collection via Umami. Privacy-focused, no cookies, no PII. Compliant with GDPR, CCPA, PECR.
: Source: [Privacy](/privacy/)

**Application Layer**
: Coordinates between Aggregates when a scenario crosses aggregate boundaries. Use Case does not handle this.
: Source: [Work Items](/work-items/), [Appendix C](/appendices/c/)


## B

**Big Picture Event Storming**
: Domain exploration technique to map domain events, commands, actors, and pain points. Use when the team lacks a shared mental model.
: Source: [Direction](/direction/), [Appendix A](/appendices/a/)

**Blameless Post-mortem**
: Incident analysis that focuses on system causes, not individual blame. Run soon after each incident.
: Source: [Operation](/operation/)

**Blueprint**
: *See Canary Deployment, Blue-green Deployment, Rolling Deployment*

**Blue-green Deployment**
: Deployment strategy that runs two environments (blue and green) to switch traffic atomically.
: Source: [Delivery](/delivery/)

**Bounded Context**
: DDD concept for a boundary within which a particular model applies. Identified via Context Mapping.
: Source: [Direction](/direction/), [Appendix A](/appendices/a/)

**Build Phase**
: Core delivery moment where Stories evolve to needed fidelity, acceptance scenarios are written, Tasks defined, and Tests written. Execution follows.
: Source: [Delivery](/delivery/)

**Business Readiness**
: Go/No-Go gate check that the business is ready for release.
: Source: [Delivery](/delivery/)

**Business Rules**
: Domain constraints that apply across all Use Case scenarios.
: Source: [Work Items](/work-items/), [Appendix C](/appendices/c/)


## C

**Canary Deployment**
: Gradual release to a small subset of users before full rollout.
: Source: [Delivery](/delivery/)

**Candidate Issue**
: Potential Issue found during Event Storming. No requirement to link every observation.
: Source: [Direction](/direction/), [Appendix A](/appendices/a/)

**Capture**
: First stage of Issue lifecycle. An Issue enters the system from any source.
: Source: [Issues](/issues/)

**CCPA**
: California Consumer Privacy Act. Privacy regulation this site's analytics comply with.
: Source: [Privacy](/privacy/)

**Change Failure Rate**
: DORA metric for the percentage of deployments that cause a failure.
: Source: [Delivery](/delivery/)

**Chore**
: Work Item that supports delivery without direct user value. Examples: dependency upgrades, CI fixes, test infra. Tracked under parent Story or Use Case.
: Source: [Work Items](/work-items/)

**CI/CD (Continuous Integration and Continuous Delivery)**
: Automated pipeline for integration and delivery of code. Maturity enables longer delivery cycles safely.
: Source: [Delivery](/delivery/)

**Close**
: Final stage of Issue lifecycle. Issue is resolved, abandoned, or parked. Searchable but not actionable.
: Source: [Issues](/issues/)

**Code Review**
: Async review technique for small, safe changes. Suits remote teams.
: Source: [Delivery](/delivery/)

**Command**
: DDD concept for an intent to change state. Mapped to Use Case flows: main scenario uses primary command, extensions use alternate commands.
: Source: [Direction](/direction/), [Appendix A](/appendices/a/), [Appendix C](/appendices/c/)

**Complexity**
: Must be contained via deliberate boundaries on scope, consistency, and responsibility.
: Source: [Overview](/)

**Consistency Boundary**
: *See Aggregate, Aggregate Boundary*

**Constraints**
: Boundaries, business rules, and design decisions documented on a Task.
: Source: [Work Items](/work-items/), [Appendix G](/appendices/g/)

**Context Mapping**
: DDD technique to identify bounded contexts and their relationships. Use when service boundaries are unclear.
: Source: [Direction](/direction/), [Appendix A](/appendices/a/)

**Cost Management**
: Review infrastructure costs once per cycle. Act when cost grows faster than user growth or one service exceeds 20% of the budget.
: Source: [Operation](/operation/), [Appendix I](/appendices/i/)

**Cost of Delay (WSJF)**
: Prioritization pattern that uses user value, time criticality, and risk reduction divided by job size. Use for high-stakes disagreement.
: Source: [Appendix B](/appendices/b/)

**Cyclical / Round-robin**
: Prioritization pattern where each stakeholder picks one must-have per cycle. Use with multiple sponsors or customer groups.
: Source: [Appendix B](/appendices/b/)


## D

**Decision Record**
: *See ADR*

**Definition of Done**
: Checklist on a Task for completion verification.
: Source: [Work Items](/work-items/), [Appendix G](/appendices/g/)

**Delivery**
: Continuous loop that turns Features into working, released software via Stories and Use Cases.
: Source: [Delivery](/delivery/)

**Delivery Activities**
: Coding, testing, designing, shipping. Measured against process activities in the Friction Budget.
: Source: [Operation](/operation/)

**Delivery Cycle**
: Period from work selection to its release. Size determined by context, not rule. Has Build, Review, and Retro moments.
: Source: [Delivery](/delivery/)

**Demo**
: Review moment that shows stakeholders what shipped. Keep short.
: Source: [Delivery](/delivery/)

**Deployment Frequency**
: DORA metric for how often the team deploys to production.
: Source: [Delivery](/delivery/)

**Direction**
: Shared understanding of where the team goes and why. Answers "what issues is this team here to resolve?" Revisable.
: Source: [Direction](/direction/)

**Domain**
: The problem space the team operates in. Exploration techniques (Event Storming, Context Mapping) used when unfamiliar.
: Source: [Direction](/direction/)

**Domain Event**
: Something that happened in the domain. Mapped during Event Storming.
: Source: [Direction](/direction/), [Appendix A](/appendices/a/)

**Domain Object**
: Entity or value object inside an Aggregate boundary.
: Source: [Appendix C](/appendices/c/)

**DORA Metrics**
: DevOps Research and Assessment metrics: deployment frequency, lead time, change failure rate, time to restore.
: Source: [Delivery](/delivery/)


## E

**Engineering Stability**
: Go/No-Go gate check that confirms readiness. Includes rollback plan.
: Source: [Delivery](/delivery/)

**Error Budget**
: The gap between an SLO and actual performance. Use it to decide between features and reliability.
: Source: [Operation](/operation/)

**Estimate**
: Optional prediction of effort. Default: no estimates. Use impact ranking instead.
: Source: [Work Items](/work-items/)

**Event Storming**
: DDD workshop technique. Two levels: Big Picture (discovery) and Process/Design (design).
: Source: [Direction](/direction/), [Appendix A](/appendices/a/)

**Expected Result**
: What passing means for a Test.
: Source: [Appendix H](/appendices/h/)

**Extension**
: Alternative flow, error condition, or exception in a Use Case scenario.
: Source: [Work Items](/work-items/), [Appendix C](/appendices/c/)


## F

**Face-to-face Conversation**
: Most efficient communication method. Favor over tickets when co-located. Use synchronous calls when remote.
: Source: [Overview](/), [Delivery](/delivery/)

**Feature**
: Narrative that describes a user intent. Current flow, pain points, desired flow, success measurement. Exists on the Roadmap.
: Source: [Work Items](/work-items/)

**Feature Adoption**
: Production signal that shows whether users engage with a Feature. Creates or deprioritizes Issues.
: Source: [Operation](/operation/)

**Feature Flag**
: Mechanism that decouples deploy from release. Off by default. Skipped for invisible changes or early stage.
: Source: [Delivery](/delivery/)

**Feedback**
: The only ground truth. Production data, user behavior, team sentiment override plans. Closes the loop from Direction to Issues to Work Items to Release.
: Source: [Overview](/), [Issues](/issues/), [Operation](/operation/), [Appendix D](/appendices/d/)

**FinOps**
: Tracks cost per service as part of monitoring.
: Source: [Operation](/operation/)

**First Response**
: Target time for initial acknowledgement of an incident. Defined per severity level.
: Source: [Appendix I](/appendices/i/)

**Fix Target**
: Target time to resolve an incident. Defined per severity level.
: Source: [Appendix I](/appendices/i/)

**Friction Budget**
: Guideline that caps process activities at 20% of cycle time. Estimate at retro, cut one item if exceeded. Cut meetings with no agenda, gates that never fail, reports no one reads, approvals always approved.
: Source: [Operation](/operation/)

**Future (bucket)**
: Intentionally absent from the Roadmap. Ideas live in Issues (Idea type). Removed to force explicit "no" decisions.
: Source: [Work Items](/work-items/), [Appendix B](/appendices/b/)


## G

**Gate**
: Process checkpoint that consumes energy. Earns its keep or gets removed.
: Source: [Overview](/)

**Gatekeeper**
: No gatekeeper between team and stakeholder. Anyone can talk to users directly.
: Source: [Overview](/), [Delivery](/delivery/)

**GDPR**
: General Data Protection Regulation. Privacy regulation this site's analytics comply with.
: Source: [Privacy](/privacy/)

**Gherkin**
: Given/When/Then syntax for writing acceptance scenarios from Use Case flows. Each scenario becomes one Test.
: Source: [Delivery](/delivery/), [Appendix C](/appendices/c/), [Appendix H](/appendices/h/)

**Go/No-Go Gate**
: Lightweight release gate that checks engineering stability, QA acceptance, security scan, and business readiness. Skip for low-risk releases.
: Source: [Delivery](/delivery/)

**Goals**
: Short-term concrete outcomes (1-2) that make Missions actionable. Changed at team discretion.
: Source: [Direction](/direction/)

**Guiderails**
: Boundaries set by Direction that Issues exist within. Vision defines class of problems. Missions name what to achieve.
: Source: [Issues](/issues/)


## I

**Idea**
: Issue type for something that could be better. Example: "Add real-time shipment tracking."
: Source: [Issues](/issues/)

**Impact Ranking**
: Default prioritization method. Sort by gut-checked impact-to-effort. Disagreement resolved by conversation.
: Source: [Work Items](/work-items/), [Appendix B](/appendices/b/)

**Incident**
: Issue type for something that failed in production. Example: "Payment gateway timeout."
: Source: [Issues](/issues/)

**Incident Response**
: Process with SEV1-4 severity levels, response targets, and runbooks. Run a blameless post-mortem after each incident.
: Source: [Operation](/operation/), [Appendix I](/appendices/i/)

**Inputs**
: What a Task needs to start execution.
: Source: [Work Items](/work-items/), [Appendix G](/appendices/g/)

**Integration Tests**
: Quality gate on every push. Automated. Verify system components work together.
: Source: [Delivery](/delivery/)

**Issue**
: Gap between current state and desired state. Types: Problem, Idea, Question, Incident. Everything starts with an Issue.
: Source: [Issues](/issues/)

**Issues Backlog**
: Holds everything the team is not actively working on. The inbox. Moves to Work Item only when the team decides to act.
: Source: [Issues](/issues/)


## J

**Judgment over Rules**
: Core principle. No rule applies in all contexts. Team decides when to follow, bend, or break any practice.
: Source: [Overview](/)


## K

**Kano Model**
: Prioritization model rejected for cycle-level decisions. Too abstract. At most a quarterly direction input.
: Source: [Appendix B](/appendices/b/)


## L

**Lead Time**
: DORA metric for time from commit to production.
: Source: [Delivery](/delivery/)

**Level**
: Use Case classification per Cockburn: Summary, User Goal, or Subfunction.
: Source: [Appendix C](/appendices/c/)

**Logs**
: Part of monitoring. Records of system events.
: Source: [Operation](/operation/)


## M

**Main Success Scenario**
: Step-by-step happy path of a Use Case.
: Source: [Work Items](/work-items/), [Appendix C](/appendices/c/)

**Maintenance**
: Continuous activity after first Release. Includes monitoring, incident response, and feedback loops.
: Source: [Operation](/operation/)

**Metrics**
: Part of monitoring. Quantitative measurements of system performance.
: Source: [Operation](/operation/)

**Missions**
: Medium-term descriptions of what the team works toward now. Change with environment shifts.
: Source: [Direction](/direction/)

**Monitoring**
: Logs, metrics, traces. Continuous observation of the system in production.
: Source: [Operation](/operation/)

**MoSCoW**
: Must/Should/Could/Won't. Rejected as a Roadmap method. "Should" and "Could" are Future in disguise.
: Source: [Appendix B](/appendices/b/)


## N

**Next (Roadmap bucket)**
: Features the team works on after Now finishes.
: Source: [Work Items](/work-items/), [Appendix B](/appendices/b/)

**Now (Roadmap bucket)**
: Features the team works on actively.
: Source: [Work Items](/work-items/), [Appendix B](/appendices/b/)

**Numeric Scores**
: RICE, ICE, weighted matrices. Rejected for false precision. Weights are subjective but feel objective.
: Source: [Appendix B](/appendices/b/)


## O

**Observation**
: Output of domain exploration techniques. Can become Issues but no requirement to link.
: Source: [Direction](/direction/)

**On-call**
: Fair rotation for incident response. Name primary and secondary escalation. Track toil. Automate if toil exceeds 30%.
: Source: [Operation](/operation/), [Appendix I](/appendices/i/)

**Operation**
: Continuous activity after first Release. Includes monitoring, incident response, FinOps, and feedback.
: Source: [Operation](/operation/)

**Outputs**
: What a Task produces.
: Source: [Work Items](/work-items/), [Appendix G](/appendices/g/)


## P

**Pain Point**
: Friction or problem in the current domain. Mapped during Event Storming.
: Source: [Direction](/direction/), [Appendix A](/appendices/a/)

**Pair Programming**
: Technique for complex or critical code. Junior-senior pairing for learning.
: Source: [Delivery](/delivery/)

**Parent (Task)**
: Use Case ID or Story ID that the Task belongs to.
: Source: [Appendix G](/appendices/g/)

**PECR**
: Privacy and Electronic Communications Regulations. Privacy regulations this site complies with.
: Source: [Privacy](/privacy/)

**Peer Review**
: Catch predictable team errors. Prefer over process overhead.
: Source: [Overview](/)

**Postconditions**
: What must be true after successful Use Case execution.
: Source: [Work Items](/work-items/), [Appendix C](/appendices/c/)

**Preconditions**
: What must be true before a Use Case or Test executes.
: Source: [Work Items](/work-items/), [Appendix C](/appendices/c/), [Appendix H](/appendices/h/)

**Primary Actor**
: Who starts the Use Case interaction.
: Source: [Appendix C](/appendices/c/)

**Prioritization**
: Conversation, not formula. Default: impact ranking. Production data decides when available.
: Source: [Work Items](/work-items/), [Appendix B](/appendices/b/)

**Privacy**
: Data collection limited to business communication response. No selling or sharing for marketing.
: Source: [Privacy](/privacy/)

**Problem**
: Issue type for something that is wrong. Example: "30% of orders miss the delivery window."
: Source: [Issues](/issues/)

**Process**
: Has cost. Every gate, review, and meeting consumes energy. Cut what does not earn its keep.
: Source: [Overview](/)

**Process Activities**
: Gate reviews, meeting attendance, preparation. Measured against delivery activities in the Friction Budget.
: Source: [Operation](/operation/)

**Process/Design Event Storming**
: Design-level Event Storming for Features with unclear internal flows. Outputs detailed flows, aggregate design, acceptance criteria.
: Source: [Direction](/direction/), [Appendix A](/appendices/a/)

**Production Readiness**
: Checklist a new service passes before it receives production traffic: logging, alerts, deploy/rollback process, backup strategy.
: Source: [Operation](/operation/), [Appendix I](/appendices/i/)

**Production Data**
: Ground truth that overrides plans. Drives feedback loops from Delivery back to Direction and Issues.
: Source: [Overview](/), [Issues](/issues/), [Operation](/operation/), [Appendix D](/appendices/d/)

**Production Monitoring**
: *See Monitoring*

**Prototype**
: Possible Spike output. Working model to evaluate an approach, not production code.
: Source: [Work Items](/work-items/)


## Q

**QA Acceptance**
: Go/No-Go gate check that verifies Feature Flag behavior (on and off).
: Source: [Delivery](/delivery/)

**Quality Gates**
: Automated checks on every push: unit tests, integration tests, SAST, SCA. Zero manual gates for routine changes.
: Source: [Delivery](/delivery/)

**Question**
: Issue type for something that is unknown. Example: "What triggers payment settlement?"
: Source: [Issues](/issues/)


## R

**Red-Green-Refactor**
: TDD cycle. Write failing test (red), make it pass (green), improve design (refactor).
: Source: [Delivery](/delivery/)

**Refactor**
: Improves design without behavior change. Part of TDD and Technical Debt management.
: Source: [Delivery](/delivery/)

**Release**
: Business decision to flip a Feature Flag from off to on. Not a technical event.
: Source: [Delivery](/delivery/)

**Resolve**
: Issue lifecycle stage. Issue is resolved directly, promoted to Work Item, or parked.
: Source: [Issues](/issues/)

**Retrospective (Retro)**
: Blameless review that produces 1-3 fix items. Skip for small cycles.
: Source: [Delivery](/delivery/)

**Review**
: Core delivery moment with Demo and DORA check. After coherent batch of work.
: Source: [Delivery](/delivery/)

**Roadmap**
: Lightweight two-bucket (Now/Next) plan for Features. Changes freely based on learning. No Future bucket.
: Source: [Work Items](/work-items/), [Appendix B](/appendices/b/)

**Rollback Plan**
: Part of engineering stability gate. Exists for failure scenarios, not routine deploys.
: Source: [Delivery](/delivery/)

**Rolling Deployment**
: Incremental replacement of instances across a cluster.
: Source: [Delivery](/delivery/)

**Rule Governance**
: If a rule takes longer than the work it governs, abolish immediately.
: Source: [Appendix F](/appendices/f/)

**Rotation**
: Schedule for on-call shifts. Fair rotation with documented handover. Minimum two people per shift (primary + secondary).
: Source: [Appendix I](/appendices/i/)

**Runbook**
: Documented procedure for handling specific operational situations. Write one for every incident type that repeats twice.
: Source: [Operation](/operation/), [Appendix I](/appendices/i/)


## S

**SAST (Static Analysis)**
: Quality gate for automated code analysis of security and quality issues.
: Source: [Delivery](/delivery/)

**SCA (Dependency Scanning)**
: Quality gate for automated scanning of dependencies for known vulnerabilities.
: Source: [Delivery](/delivery/)

**Scenario**
: A single flow through a Use Case. Each scenario (main success and extensions) becomes a Gherkin test.
: Source: [Work Items](/work-items/), [Appendix H](/appendices/h/)

**Scope**
: Aggregate or system boundary for a Use Case.
: Source: [Appendix C](/appendices/c/)

**Security Scan**
: Go/No-Go gate check. Passed before release.
: Source: [Delivery](/delivery/)

**Service Layer**
: Coordinates between Aggregates across Use Case boundaries.
: Source: [Work Items](/work-items/), [Appendix C](/appendices/c/)

**SEV1-4**
: Incident severity levels. SEV1 = user-facing outage, SEV2 = degraded subset of users, SEV3 = no user impact, SEV4 = cosmetic or internal.
: Source: [Operation](/operation/), [Appendix I](/appendices/i/)

**SLO (Service Level Objective)**
: One or two metrics that matter most to users. Track the gap as error budget to decide features vs reliability.
: Source: [Operation](/operation/), [Appendix I](/appendices/i/)

**Source (Test)**
: Use Case ID and scenario name, or Story ID that a Test traces to.
: Source: [Appendix H](/appendices/h/)

**Spike**
: Timeboxed investigation for technical, domain, or architectural unknowns. Produces decision record, prototype, or ADR. No production code.
: Source: [Work Items](/work-items/)

**Stakeholder**
: Person or group with interest in the team's output. No gatekeeper between team and stakeholder.
: Source: [Overview](/), [Direction](/direction/)

**Story**
: Lightweight value placeholder for a slice of a Feature. Title, value statement, priority. Independent. No estimates required.
: Source: [Work Items](/work-items/)


## T

**Task**
: Concrete, technology-agnostic implementation instruction. Breaks down a Use Case or Story into actionable steps. One per discrete behavior change.
: Source: [Work Items](/work-items/), [Appendix G](/appendices/g/)

**TDD (Test-Driven Development)**
: Red-Green-Refactor cycle. Default for new logic when behavioral correctness matters.
: Source: [Delivery](/delivery/)

**Team Sentiment**
: Ground truth input that overrides plans alongside production data and user behavior.
: Source: [Overview](/)

**Technical Debt**
: Design or implementation shortcuts that slow future delivery. Reserves time after release. Prioritize over features when blocking speed.
: Source: [Delivery](/delivery/)

**Test**
: Versioned reference point for acceptance, integration, or system-level verification. One per Gherkin scenario. Not a Task (verify versus build).
: Source: [Work Items](/work-items/), [Appendix H](/appendices/h/)

**Time to Restore**
: DORA metric for time to recover from a production failure.
: Source: [Delivery](/delivery/)

**Timebox**
: Fixed short duration for a Spike. If exceeded, rescope or run Go/No-Go on parent Feature.
: Source: [Work Items](/work-items/)

**Toil**
: Repetitive operational work. If on-call spends more than 30% of time on toil, automate the task. If more than 50%, change the system.
: Source: [Operation](/operation/)

**Traces**
: Part of monitoring. Track request flow through distributed systems.
: Source: [Operation](/operation/)

**Triage**
: Issue lifecycle stage. Understand, label (Problem/Idea/Question/Incident), decide action.
: Source: [Issues](/issues/)

**Trivial Work**
: Typo, 1-line config. Build directly. Skip full Use Case structure.
: Source: [Work Items](/work-items/), [Delivery](/delivery/)


## U

**Ubiquitous Language**
: This glossary. Shared domain vocabulary used consistently across all team communication and documentation.
: Source: [Ubiquitous Language](/ubiq/)

**Umami**
: Privacy-focused analytics platform used by this site. No cookies, no PII.
: Source: [Privacy](/privacy/)

**Unit of Delivery**
: Use Case. What the team builds, tests, and accepts.
: Source: [Work Items](/work-items/)

**Unit Tests**
: Quality gate on every push. Live in the codebase, not as Work Items.
: Source: [Delivery](/delivery/)

**Unknowns**
: Kill delivery. Find them early. Spike before commit.
: Source: [Overview](/), [Work Items](/work-items/)

**Use Case**
: Full structured specification per Cockburn/Jacobson template. Actor, preconditions, postconditions, scenarios, acceptance criteria, business rules. Unit of delivery.
: Source: [Work Items](/work-items/), [Appendix C](/appendices/c/)

**User Behavior**
: Ground truth that overrides plans. Changes Missions, Goals, and prioritization.
: Source: [Overview](/), [Operation](/operation/), [Appendix D](/appendices/d/)


## V

**Value Statement**
: The "why" on a Story. Describes the value this slice delivers.
: Source: [Work Items](/work-items/)

**Vision**
: Long-term guiding statement. Changes slowly, if at all. Not a plan.
: Source: [Direction](/direction/)


## W

**"What Hurts Most?" (pattern)**
: Pain-driven prioritization. Feature that removes the biggest current pain wins.
: Source: [Appendix B](/appendices/b/)

**Work Item**
: How the team resolves Issues. Types: Feature, Story, Use Case, Spike, Chore, Task, Test.
: Source: [Work Items](/work-items/)

**Working Software**
: The only ground truth. Software that runs outranks documentation.
: Source: [Overview](/)