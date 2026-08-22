# Modern XP: A Field Guide

Modern XP is a compass to guide your vision. Use what fits. Skip what does not. If a practice slows your work more than it helps, remove it.

Written in Simple Technical English. No fluff. No jargon.

## Core Principles

1. **Ship small, learn fast.** The smallest valuable unit of work, delivered independently, is better than the most perfectly planned batch.
2. **Feedback is the only ground truth.** Production data, user behavior, and team sentiment override any plan.
3. **Process has cost.** Every gate, output review, and meeting consumes energy. If a process element does not earn more than it costs, remove it.
4. **Unknowns kill delivery.** Find them early. Spike before you commit.
5. **Complexity must be contained.** Deliberate boundaries on scope, consistency, and responsibility prevent systems that the team can change and maintain.
6. **Teams make predictable errors.** Catch them with automation and peer review, not process overhead.
7. **Judgment over rules.** No rule applies in all contexts. The team decides when to follow, bend, or break any practice here.
8. **Prepare to succeed, plan to fail.** Prepare enough to maintain forward momentum, then stop. Concrete plans belong only in failure-mode scenarios. Lightweight orientation beats detailed planning for normal operation.

### Rooted in the Agile Manifesto

This framework builds on the four values of the [Agile Manifesto](https://agilemanifesto.org/) and follows the [twelve Agile Principles](https://agilemanifesto.org/principles.html).

| Agile Value | How This Guide Applies It |
|-------------|------------------------------|
| **Individuals and interactions** over processes and tools | Judgment over rules. Team decides. No gatekeeper between team and stakeholder. Process costs energy. Cut what does not earn its keep. |
| **Working software** over comprehensive documentation | Use Cases are structured but skippable. Feature flags decouple deploy from release. Friction budget caps process at 20%. The only ground truth is shipped, running software. |
| **Customer collaboration** over contract negotiation | Direction revises based on production data, not contracts. Demo sessions show what shipped. Prioritization is conversation, not formula. |
| **Responding to change** over following a plan | Direction is revisable. Roadmap changes freely. Delivery cycle has no fixed duration. Conditions for breaking process are explicit. |

Where this guide contradicts an Agile Manifesto value, the value wins.

Two principles deserve explicit mention because teams often overlook them:

- **Business people and developers work together daily.** Anyone on the team can talk to a stakeholder or user directly. No gatekeepers. No ticket-forwarding.
- **Face-to-face conversation is the most efficient method.** When the team is co-located, favor conversation over tickets. When remote, favor synchronous calls over threaded decision-making for resolving ambiguity.

## How to Use This Guide

This is not a checklist. It is a menu. Read the practices. Decide which ones fit your team, your domain, and your stage. Start minimal. Add structure only when a specific pain shows that you need it.

**When to add a practice:** A concrete, repeated problem exists. Example: "We find integration bugs too often in production" → add CI gates. Not before.

**When to remove a practice:** The time it takes exceeds the value it creates. Track this. If a gate review costs significant effort but catches errors that are quick to fix, remove the gate.

---

## 1. Direction

Direction gives the team a shared understanding of where to go and why. It answers: "What issues is this team here to resolve?" The team revisits direction regularly. Direction does not block work. Its primary output is context for discovering the specific gaps, questions, and opportunities within the team's scope.

### 1.1 Vision, Missions, Goals

The team holds one long-term **Vision**. Medium-term **Missions** describe what the team works toward now. Short-term **Goals** make missions concrete.

- The Vision changes slowly, if at all. It guides the team. It is not a plan.
- Missions change when the environment shifts. New market data, production signals, sponsor priorities. No minimum or maximum duration.
- Goals are the next 1-2 concrete outcomes. When the team achieves or abandons a goal, the team picks the next one.

The team revisits direction at a cadence the team chooses. Between reviews, the team can change goals without permission. A mission change requires a conversation with stakeholders.

**Prepare to succeed.** Do enough discovery to move forward: spike unknowns, sketch boundaries, talk to users. Do not plan the path before you walk it. Heavy plans belong in failure-mode scenarios (disaster recovery, incident response), not daily delivery.

### 1.2 Domain Exploration

When the domain is unfamiliar or the team disagrees on what the system does, explore it. Domain-Driven Design techniques help.

**Techniques (use when needed, not always):**

- **Big Picture Event Storming:** Map domain events, commands, actors, pain points. Use when the team does not share a mental model of the domain.
- **Context Mapping:** Identify bounded contexts and their relationships. Use when service boundaries are unclear or teams overlap.
- **Aggregate Design:** Define consistency boundaries. Use when data integrity problems surface.

These techniques produce **observations**. Observations can become Issues (see §2), but there is no requirement to link every observation to an Issue. If a problem is obvious without Event Storming, do not waste time storming to justify it.

**When to skip:** The team understands the domain and boundaries are stable. Ship features instead.

---

## 2. Issues: Captured From Everywhere, Bounded by Direction

Everything the team does starts with an issue. An issue is a gap between the current state and a desired state. That gap can be a Problem, an Idea, a Question, or an Incident.

Issues come from everywhere: user feedback, production monitoring, stakeholder input, incidents, team ideas, and from Direction discovery. Direction does not generate all Issues. It provides **guiderails**. The Vision defines the class of problems the team exists to solve. Missions name what the team wants to achieve. Within those guiderails, the team discovers Issues: a Problem blocking a Mission, a Question about the domain, an Idea for improvement. Issues also arrive from outside the guiderails, from user reports, market shifts, incidents, and these refine the guiderails over time.

Issues bridge Direction and Work Items. Direction says "what we want to do." Issues say "what specifically stands in the way." Work Items say "how we resolve it."

### 2.1 Issue Types

| Type | Description | Example |
|------|-------------|---------|
| **Problem** | Something is wrong | "30% of orders miss the delivery window" |
| **Idea** | Something could be better | "Add real-time shipment tracking" |
| **Question** | Something is unknown | "What triggers payment settlement?" |
| **Incident** | Something failed in production | "Payment gateway timeout" |

Issues are freeform. They do not require a specific link, document, or format. What matters is the team understands them and can act on them.

### 2.2 Issues Produce Work Items

When the team decides to act on an Issue, it becomes a Work Item:

| Issue Resolution | Work Item |
|-----------------|-----------|
| Needs investment, multiple cycles | **Feature** on the roadmap |
| Small, one-cycle slice | **Story** in the current cycle |
| Unknown blocks resolution | **Spike** to investigate |
| Quick fix, no delivery structure | Resolved directly, Issue closed |

Not every Issue becomes a Work Item. Some get resolved directly: answer a Question, fix a configuration bug, handle an Incident. The Issue closes with its resolution documented.

The Issues backlog holds everything the team is not actively working on. It is the inbox. Everything arrives as an Issue. It moves to a Work Item only when the team decides to act.

### 2.3 Feedback Generates and Refines

Production data, user behavior, monitoring alerts, stakeholder input, and team pain points all produce Issues. This closes the loop:

```
Direction → Issues → Work Items → Release → Feedback
                                                ↓
                                          refines Direction
                                                ↓
                                          generates Issues
```

The Issues list never stops growing. The team triages continuously. Some Issues rise to the top and become Work Items. Some resolve themselves. Some wait. And some feedback reshapes the guiderails, changing what the team considers in scope.

### 2.4 Issue Lifecycle

1. **Capture:** An Issue enters the system. Source can be anyone: team, user, stakeholder, monitoring.
2. **Triage:** The team understands it, labels it (Problem/Idea/Question/Incident), and decides what to do.
3. **Resolve:** Either (a) resolved directly (answer, fix, config change), (b) promoted to a Work Item (Feature, Story, Spike), or (c) parked for later review.
4. **Close:** The Issue is resolved, abandoned (out of scope, superseded), or parked. Closed Issues are searchable but not actionable.

---

## 3. Work Items

Work Items are how the team resolves Issues. Each type of Work Item serves a different resolution strategy.

### 3.1 Features

A Feature is a narrative that describes a user intent. It captures:
- The current flow and its pain points
- The desired flow
- How success is measured

Features exist on a lightweight **Roadmap**. The Roadmap has two buckets:

| Bucket | Meaning |
|--------|---------|
| **Now** | The team works on this actively |
| **Next** | The team works on this after Now finishes |

That is it. Do not use a "Future" bucket. Do not use numeric scores. Do not use complex formulas. If a feature matters, the team knows. If the team disagrees, talk. Do not use scores.

The Roadmap changes freely based on what the team learns.

### 3.2 Stories

A Story is a lightweight value placeholder for a slice of a Feature. It exists for prioritization, roadmap planning, and stakeholder communication. It is not a specification.

- A Story has a title, a value statement, and a priority.
- A Story is independent. The team can order and deliver it without other Stories.
- The team orders Stories to resolve dependencies, not to maximize theoretical value.

**No acceptance criteria on Stories by default.** A Story can evolve into a Use Case (full structured spec) or stay lightweight with criteria + Tasks + Tests. The team adds fidelity based on need. For trivial work, write lightweight acceptance notes on the Story. The rule: acceptance criteria must exist *somewhere* before building. The Use Case is the highest-fidelity form. The Story is the fallback for trivial work.

**No Story count constraints.** If a Feature splits into 2 Stories, fine. If 20, also fine, but check for signs that the Feature is too broad. Split the Feature instead. Do not give arbitrary limits to Story counts.

**No estimates required.** The team can estimate if useful (e.g., for external commitments). Default: no estimates. Impact-rank instead.

**Story evolution:** A Story can evolve into a Use Case (full structured spec) or stay partially evolved (criteria + Tasks + Tests) or stay as-is for trivial work. The team decides how much fidelity is needed. If a Story needs more than one Aggregate boundary, split the Story — one Story, one Use Case maximum.

### 3.3 Use Cases

A Use Case is a Story that has been evolved to full structured specification. It follows the Cockburn/Jacobson template: actor, preconditions, postconditions, scenarios, acceptance criteria. It is the **unit of delivery**: what the team builds, tests, and accepts. Stories give the "why" and the priority. Use Cases give the "what" and the acceptance criteria.

Not every Story reaches this fidelity. The team stops when the Story has enough structure to build from. No gate between Story and Build.

Each Use Case operates within exactly one Aggregate boundary (see Appendix C).

See [Appendix C](#appendix-c-use-cases-and-aggregate-boundaries) for the full Use Case structure template and a condensed example.

#### Use Case and Aggregate Boundaries

One Use Case maps to one Aggregate. If the scenario crosses aggregate boundaries, create multiple Use Cases. This signals the Story can be too broad. The application layer coordinates between them (see Appendix C).

#### When to Skip Formal Use Cases

| Condition | Action |
|-----------|--------|
| Trivial work (typo, 1-line config) | Build directly. Skip full UC structure. Acceptance criteria on the Story. |
| Very early stage (pre-product-market fit) | Paper prototypes + direct conversation. Retroactively write full UC if structure unclear. |
| Story does not need full UC fidelity | Criteria + Tasks + Tests on the Story. No formal Use Case template. |

### 3.4 Spikes

A Spike is a timeboxed investigation. Use it when unknowns block delivery.

| Trigger | Timebox | Output |
|---------|---------|--------|
| Technical unknown | Short fixed timebox | Decision record, prototype, or rejected option |
| Domain unknown | Short fixed timebox | Clarified flow or Process/Design Event Storming |
| Architectural unknown | Short fixed timebox | ADR (Architecture Decision Record) |

Spikes do not produce production code. If a Spike exceeds its timebox, the team decides: rescope or run a Go/No-Go on the parent Feature.

### 3.5 Chores

Chores support delivery without direct user value. Examples: dependency upgrades, CI fixes, test infra.

Record Chores alongside Tasks under their parent Story or Use Case. If chore volume is high, use a dedicated Chore template. Do not track Chores as formal Issues unless the team finds it helpful.

### 3.6 Tasks

A Task is a concrete, technology-agnostic implementation instruction that breaks down a Use Case (or small Story) into actionable steps. Tasks bridge specification and code.

**Characteristics:**
- Technology-agnostic: describes *what* to implement, not *how* in a specific framework
- One Task per discrete behavior change
- No prescribed file or module mapping

See [Appendix G](#appendix-g-task-structure-reference) for the full Task structure template.

### 3.7 Tests

A Test is a versioned reference point for acceptance, integration, or system-level verification. Tests give the team a shared vocabulary for what scenarios must pass before release.

**What Tests are not:**
- Unit tests live in the codebase, not as work items. Do not track them here.
- Tests verify. Tasks build. Separate concerns, separate work items.

**Characteristics:**
- One Test per Gherkin scenario, the main success path and each extension
- Technology-agnostic: describes the behavior to verify, not the test framework
- Versioned alongside code

See [Appendix H](#appendix-h-test-structure-reference) for the full Test structure template.

**How Tests relate to other work items:**
- Use Cases produce Gherkin scenarios (§4.1.1 Step 2) → each scenario becomes one Test
- Stories that skip full Use Case structure use lightweight acceptance notes on the Story, not structured Tests
- Tests are not Tasks. They verify. Tasks build
- Unit tests are not captured as Work Items. They are part of the codebase, implied by quality gates (§4.1.1)

---

## 4. Delivery

Delivery is one continuous loop. The team takes Features and turns them into working, released software with Stories and Use Cases.

**Business and development work together here.** Anyone on the team can talk to a user or stakeholder directly. No gatekeepers. If a requirement needs clarification, the team asks the source, not a spec document. When co-located, face-to-face conversation beats tickets. When remote, a synchronous call beats a threaded decision.

### 4.1 Delivery Cycle

A Delivery Cycle starts when the team picks work and ends when they release it. Context determines its size, not a rule.

- **Minimum:** One Use Case, small scope.
- **Maximum:** Whatever the team can safely hold in their heads without loss of quality. For most teams, this is a small scope. For experienced teams with mature CI/CD (Continuous Integration and Continuous Delivery) and strong domain knowledge, it can be longer.
- **No cycle count constraints.** Deliver when ready. Release when the work completes. The team decides.

Each Delivery Cycle has three core moments — Build, Review, Retro — plus supporting activities attached to them:

#### 4.1.1 Build Phase

**Step 1 — Evolve Stories to needed fidelity**

A Story arrives at the Build Phase at whatever fidelity the team decided. The team completes the specification to the level needed:

- **Full Use Case:** Add preconditions, postconditions, scenarios, acceptance criteria per Appendix C.
- **Partial:** Add enough criteria + Tasks + Tests to build from.
- **Trivial:** No evolution needed. Build directly from the Story.

Each Use Case operates within one Aggregate boundary. Do not cross aggregate boundaries in one Use Case. If the work crosses boundaries, split the Story.

If the Story needs no evolution (trivial), skip to Tasks directly.

**Step 2 — Write Acceptance Scenarios**

From each Use Case, write Gherkin Given/When/Then scenarios. Each scenario covers one flow from the Use Case, the main success scenario and each extension:

```gherkin
Feature: Customer cancels an order (UC-5)

  Scenario: Cancel a confirmed order
    Given an order exists in "confirmed" state
    When the customer requests cancellation
    Then the order enters "cancelled" state
    And inventory is restored
    And a refund workflow starts

  Scenario: Cancel a shipped order
    Given an order exists in "shipped" state
    When the customer requests cancellation
    Then the system rejects the cancellation
    And the system offers a return flow
```

**Step 3 — Break into Tasks**

Break each Use Case into Tasks per the formal Task definition (§3.6). Each Task has:
- Inputs
- Outputs
- Constraints
- Acceptance criteria
- Definition of Done checklist

Tasks are the unit of assignment during the build phase. Assign and track them independently.

**Step 4 — Write Tests**

Write a Test (§3.7) for each Gherkin scenario from Step 2. One Test per scenario, the main success path and each extension. Tests are versioned alongside the code and serve as the shared reference for acceptance and integration verification.

Tests are written during the build phase, not after. They define "done" at the behavior level.

**Execution (the doing part):**

The team chooses techniques that fit:

| Technique | Use When |
|-----------|----------|
| TDD (Red-Green-Refactor) | Behavioral correctness matters. Default for new logic. |
| Pair Programming | Complex or critical code. Junior-senior pairing for learning. |
| Code Review (async) | Small, safe changes. Remote teams. |
| AI-assisted (Cursor, Copilot) | Rapid prototyping, boilerplate, test generation. Review output. |

Do not enforce any technique rigidly. If a 2-line config change needs TDD + pair programming, the process is wrong, not the developer.

**Quality gates on every push:**
- Unit tests
- Integration tests
- SAST (static analysis)
- SCA (dependency scanning)

These are automated. Zero manual gates for routine changes.

#### 4.1.2 Feature Flags

Every deploy goes behind a Feature Flag. The flag is off by default. This decouples deploy from release.

**When to skip:** The change is invisible to users (refactor, performance fix, logging). Or the team is very early stage and shipping to <100 users.

#### 4.1.3 Review Moment

After the team builds a coherent batch of work, review it. The review has two parts:

**Demo:** Show stakeholders what shipped. Keep it short.

**Check DORA (DevOps Research and Assessment) metrics if available:**
- Deployment frequency
- Lead time
- Change failure rate
- Time to restore

If DORA metrics look bad, investigate. Do not set arbitrary targets.

#### 4.1.4 Retrospective Moment

Run a blameless retrospective. Produce 1 to 3 fix items for the next cycle.

**When to skip:** The cycle is small or the team already discusses improvements naturally. Formality adds no value.

#### 4.1.5 Technical Debt Refactor

The team reserves time for technical debt. No fixed percentage. The team decides how much debt is acceptable.

- After each release is a natural time.
- If debt blocks delivery speed, prioritize it over features.
- Small debt is cheaper to fix now. Large debt needs clear planning.

**When to skip:** No known debt. Or the team is in exploration mode where getting it wrong and rewriting is cheaper than maintaining.

#### 4.1.6 Release

A Release is a business decision, not a technical event. Flip the Feature Flag from off to on.

**Go/No-Go gate (lightweight):**
- Engineering stability confirmed (includes rollback plan)
- QA acceptance (flag behavior verified on and off)
- Security scan passed
- Business readiness confirmed

Use canary, blue-green, or rolling deployment. Choose based on risk, not fixed rules.

**When to skip the gate:** Low-risk release (feature flag, dark launch, internal tool). The gate exists to prevent disaster, not to add ceremony to safe changes.

The gate's plans (rollback, incident containment) exist only for failure scenarios. In normal delivery, confidence beats ceremony. Do not write a release plan for a routine deploy.

---

## 5. Operation and Maintenance

Continuous. Starts after the first Release. Runs across all later Releases.

### 5.1 Monitoring

Monitor at three tiers: business, application, infrastructure.

- **Business:** feature adoption, funnel completion, user behavior
- **Application:** latency, error rate, throughput
- **Infrastructure:** CPU, memory, disk

Alert on symptoms, not causes. If an alert does not require a human to act, remove it.

One dashboard for stakeholders, one for the team. Do not mix them.

**When to skip:** Pre-product-market fit. Watch for pain manually instead.

### 5.2 Incident Response

Define severity levels:

| Level | Meaning |
|-------|---------|
| SEV1 | User-facing outage |
| SEV2 | Degraded experience for a subset of users |
| SEV3 | No user impact, fix required |
| SEV4 | Cosmetic or internal only |

Write a runbook for every incident type that repeats. If the same incident happens twice without a runbook, that is a process gap.

Run a blameless post-mortem soon after each incident. Produce one to three action items.

**When to skip:** Team of two to three, no external users. Fix the problem, talk after.

### 5.3 On-call

Rotate fairly. Document the handover process. Name a secondary escalation for when the primary does not respond.

Track toil. If on-call spends more than 30% of time on repetitive tasks, automate the task. If more than 50%, rotate more people in or change the system.

**When to skip:** No production users. Everyone is on-call anyway.

### 5.4 Service Levels

Pick one or two metrics that matter most to users. Track them as SLOs. Do not track more than three.

The gap between the SLO and actual performance is the error budget. Use it to decide between features and reliability:

- Error budget full: ship features
- Error budget low: fix reliability

**When to skip:** Team of fewer than five, pre-revenue. Measure latency manually when something feels slow.

### 5.5 Production Readiness

A new service needs these before it receives production traffic:

- Logging and metric collection
- Alerting for likely failure modes
- A deploy and rollback process
- Backup strategy

Review the checklist at a team meeting. Do not skip items. Add items as the team learns.

**When to skip:** Internal tools with fewer than ten users. Experiments with a short lifespan.

### 5.6 Production Feedback

Production data flows back to Direction and Delivery:

- User behavior changes Missions or Goals
- Feature adoption creates new Issues or deprioritizes existing ones
- Incidents and bottlenecks add technical debt Stories or process improvements

### 5.7 Cost Management

One person reviews infrastructure costs once per cycle. A 15-minute review. Not a meeting.

Act when cost grows faster than user growth. Act when one service exceeds 20% of the infrastructure budget.

**When to skip:** Infrastructure cost is below a threshold the team sets.

### 5.8 Friction Budget

Track the time the team spends on process versus in process.

- Process activities: gate reviews, meeting attendance, preparation
- Delivery activities: coding, testing, designing, shipping

Do not measure precisely. Estimate at each retro: "What fraction of our time went to process?" If the answer exceeds 20%, cut one process item.

Cut first: meetings with no written agenda, gates that never fail, reports that no one reads, approvals that are always approved.

**When to skip:** The team already discusses this naturally.

---

## Appendix A: Event Storming — Two Levels

| Level | Question | When to Use | Output |
|-------|----------|-------------|--------|
| **Big Picture** | "What happens in this domain within our Mission?" | Domain is unfamiliar or the team does not share a mental model | Domain events, commands, pain points, bounded contexts, candidate Issues |
| **Process / Design** | "How do we design this specific Feature?" | A known Feature has unclear internal flows | Detailed flows, aggregate design, acceptance criteria |

**Big Picture** discovers what problems exist. Use it when you need shared understanding. Do not use it if you already have it.

**Process / Design** solves known problems. It is a design tool, not a discovery tool.

---

## Appendix B: Roadmap and Prioritization

### How Features Get Prioritized

Prioritization is a conversation, not a formula.

- **If a feature matters, the team knows.** When the team disagrees, they talk for a few minutes. One feature wins. The loser stays in Next or becomes an Issue.
- **Impact ranking is the default.** Sort by gut-checked impact-to-effort. No scores, no spreadsheet. "If we ship only one thing this cycle, which one?"
- **Production data decides when available.** Feature adoption, user behavior, and incidents outrank opinion.

Other lightweight patterns that fit this framework, when the team needs more structure:

| Pattern | When to Use | Mechanism |
|---------|-------------|-----------|
| **Impact ranking** | Default | Sort by impact-to-effort, gut-checked. Disagreement → conversation |
| **Cost of delay (WSJF)** | High-stakes disagreement, real money at stake | User value + time criticality + risk reduction, divided by job size. Stop when the top 1-2 are clear |
| **"What hurts most?"** | Pain-driven teams | Feature that removes the biggest current pain wins |
| **Cyclical / round-robin** | Multiple sponsors or customer groups | Each stakeholder picks one must-have per cycle |

### Why There Is No Future Bucket

The Roadmap has two buckets: **Now** and **Next**. A "Future" bucket is intentionally absent. Three reasons:

1. **A Future bucket collects ideas that never die.** Work placed in Future never gets attention. Every quarter the team re-explains why it does not happen. Without Future, every Feature must be either committed (Next) or off the roadmap. The Issues list holds everything else. No special status, no inactive list.
2. **Future disguises uncertainty as commitment.** Placing an item in Future feels like planning, but the context (market, data, stakeholders) changes before the team reaches it. The item is stale on arrival. The team re-evaluates anyway, so the bucket adds overhead with no predictive value.
3. **Future hides trade-offs.** Two buckets force a decision: Now fills, Next fills, everything else does not happen. That surfaces scarcity and makes "no" explicit. Future lets a team avoid saying no. Saying no is the most important thing a roadmap does.

Issues (Idea type) handle "Future" as an inbox for raw ideas. Ideas live in Issues. Only when the team commits does something become a Feature on the Roadmap.

### What Is Rejected and Why

| Method | Why Rejected |
|--------|-------------|
| **Numeric scores (RICE, ICE, weighted matrices)** | False precision. Weights are subjective but scores feel objective. Teams game the numbers. A 15-minute score debate replaces a 2-minute decision |
| **MoSCoW (Must/Should/Could/Won't)** | "Should" and "Could" are Future in disguise. Teams ignore the will-not items. Two buckets do the same work with less ceremony |
| **Kano model** | Too abstract for cycle-level decisions. At most a quarterly direction input, not a delivery tool |

Good enough beats perfect. Pick the good enough next Feature and ship it. Learning from the shipped thing is worth more than optimizing the order of unshipped things.

When the team genuinely does not know what matters (early stage, new domain, no feedback yet), the answer is a Spike or the smallest shippable Feature that generates data, not a better prioritization formula. No formula resolves unknown unknowns.

---

## Appendix C: Use Cases and Aggregate Boundaries

### Use Cases per Cockburn / Jacobson

A Use Case captures a goal-level interaction between an actor and the system. It describes success scenarios and failure paths. It does not prescribe UI, implementation, or data structures. It is a contract between stakeholders and developers about what the system does.

Key distinctions from user stories:

| User Story | Use Case |
|------------|----------|
| "As a X, I want Y so that Z" | Structured: actor, preconditions, postconditions, scenarios |
| Intent, not specification | Specification that maps to tests |
| One sentence | Multiple scenarios, one main success path |
| Deliberately vague | Deliberately precise at goal level |
| No boundary constraints | One boundary per Use Case (one Aggregate) |

### Aggregate Boundary Rule

An Aggregate (DDD) defines a consistency boundary: a cluster of domain objects treated as one unit for changes.

- **One Use Case maps to one Aggregate.** Do not use more than one aggregate in one Use Case.
- **If a Use Case needs more than one Aggregate**, the Story is too broad. Split the Story into multiple Stories, each with one Use Case and one Aggregate boundary.
- **The application or service layer** handles coordination between Aggregates. The Use Case does not.
- **Commands map to Use Case flows.** The main success scenario uses the primary command. Extensions use alternate commands or error states in the same Aggregate.

This is a guideline, not a rule. If crossing aggregate boundaries simplifies the design and the team understands the trade-offs, do it. Document the trade-off in an ADR.

### Use Case Structure Template

| Element | Description |
|---------|-------------|
| **ID** | Unique identifier (e.g., UC-42) |
| **Title** | Goal in active voice: "User places an order" |
| **Primary Actor** | Who starts this interaction |
| **Scope** | Aggregate or system boundary |
| **Level** | Summary, user goal, or subfunction (Cockburn levels) |
| **Preconditions** | What must be true before execution |
| **Postconditions** | What must be true after successful execution |
| **Main Success Scenario** | Step-by-step happy path, numbered |
| **Extensions** | Alternative flows, error conditions, exceptions |
| **Acceptance Criteria** | Gherkin Given/When/Then scenarios derived from the Use Case flows |
| **Business Rules** | Domain constraints that apply across scenarios |

### Condensed Example

```
UC-5: Customer cancels an order
Primary Actor: Customer
Scope: Order aggregate
Level: User goal

Preconditions:
- Customer is authenticated
- Order exists and is in "confirmed" or "processing" state

Postconditions:
- Order enters "cancelled" state
- Inventory is restored
- Refund workflow starts

Main Success Scenario:
1. Customer requests cancellation
2. System checks order is cancellable
3. System changes order state to "cancelled"
4. System releases reserved inventory
5. System triggers refund
6. System tells the customer

Extensions:
2a. Order is already shipped:
  2a1. System rejects cancellation
  2a2. System offers return flow instead
```

---

## Appendix D: Feedback Loops

```
Production Data
  |
  +--> Issues (§2): user reports, incidents, feature adoption signals
         |
         +--> Direction (§1): Issues change Missions or Goals
         +--> Work Items (§3): Issues become Features, Stories, or Spikes
         +--> Delivery (§4): Incidents add technical debt or process improvements
```

Domain boundaries can change as the team learns. Document changes as ADRs. Do not freeze outputs from the first exploration.

---

## Appendix E: Cycle Summary (Reference, Not Rules)

| Scope | Unit | Ends With | Notes |
|-------|------|-----------|-------|
| Task | Smallest actionable unit | Task complete | No constraint on count |
| Test | One behavior scenario | Test written + reviewed | One per Gherkin scenario |
| Use Case | Structured goal-level spec | Scenarios written + Tests written + Tasks defined | One per Aggregate |
| Story | Value placeholder | Prioritized + accepted | Maps to 0+ Use Cases |
| Delivery | Coherent batch of use cases | Release | No constraint on duration |
| Direction | Continuous | Revisited regularly | Not a closed loop |

---

## Appendix F: When to Leave This Process

This framework does not restrict you. Here are specific conditions that mean "skip or modify":

| Condition | Action |
|-----------|--------|
| Pre-product-market fit (startup) | Drop everything except Build Phase + automated tests. Release daily. No reviews. |
| Crisis / production outage | Drop all process. Fix the issue. Retro after. |
| Team < 3 people | Drop reviews, retros, and flags. Talk directly. |
| AI-assisted rapid prototyping | Skip TDD, skip pair programming, skip Stories. Generate, review, ship. |
| Pure maintenance / no new features | Drop spikes, domain exploration, roadmap. Move to ticketed bug fixes only. |
| Team is demotivated by process | Cut process by 50%. If energy returns, cut more. |
| A rule takes longer than the work it governs | Abolish the rule immediately. No vote needed. |

The team is always free to deviate from this guide. If you deviate successfully, update the guide to reflect what actually works. The guide serves the team, not the other way around.

---

## Appendix G: Task Structure Reference

| Element | Description |
|---------|-------------|
| **Title** | Verb-phrase describing the change |
| **Parent** | Use Case ID or Story ID |
| **Inputs** | What the Task needs to start |
| **Outputs** | What the Task produces |
| **Constraints** | Boundaries, business rules, design decisions |
| **Acceptance criteria** | Lightweight, Task-level pass/fail conditions |
| **Definition of Done** | Checklist for Task completion |

Tasks live under their parent Use Case or Story. They are the unit of assignment and tracking during the Build Phase (§4.1.1).

---

## Appendix H: Test Structure Reference

| Element | Description |
|---------|-------------|
| **ID** | Unique identifier (e.g., T-42) |
| **Source** | Use Case ID + scenario name, or Story ID |
| **Scenario** | Gherkin Given/When/Then |
| **Type** | Acceptance \| Integration \| System |
| **Preconditions** | Environment or data setup needed |
| **Expected result** | What passing means |

---

## Appendix I: Operation Reference

### Severity Definitions with Response Time Targets

| Level | Meaning | First Response | Fix Target |
|-------|---------|---------------|------------|
| SEV1 | User-facing outage | 15 minutes | 4 hours |
| SEV2 | Degraded experience for a subset of users | 30 minutes | 8 hours |
| SEV3 | No user impact, fix required | 1 business day | Next release |
| SEV4 | Cosmetic or internal only | 1 week | When scheduled |

The team chooses these targets. Adjust based on user expectations and team size.

### Runbook Template

```
Title: [Incident type name]
Severity: [SEV1/SEV2/SEV3/SEV4]
Symptoms: [What alerts or user reports trigger this runbook]

Steps:
1. Verify the symptom
2. Check the affected components
3. Apply the known fix
4. Verify the fix
5. Communicate status

Escalation: [Who to contact if the steps do not resolve the incident]
```

Write a runbook for every incident type that repeats twice.

### SLO Design Patterns

| Metric | Typical SLO | Measurement Window |
|--------|-------------|-------------------|
| Service uptime | 99.9% | 30 days rolling |
| p95 latency | 500ms | 5 minutes averaged over 30 days |
| p99 latency | 1s | 5 minutes averaged over 30 days |
| Error rate | <1% of requests | 10 minutes averaged over 30 days |

Do not use the same SLO for every service. A batch job has different targets than an API.

### On-call Rotation Template

| Element | Recommendation |
|---------|---------------|
| Rotation length | 1 week |
| Team size per rotation | Minimum 2 (primary + secondary) |
| Secondary escalation | Names a person, not a team |
| Handover | 15-minute sync at rotation change. Review open incidents and known issues. |

Adjust based on team size and incident frequency.

### Production Readiness Checklist

Before a service receives production traffic:

- [ ] Logs are collected and searchable
- [ ] Metrics are collected and visible on the team dashboard
- [ ] Alerts exist for likely failure modes
- [ ] Deploy process is documented and repeatable
- [ ] Rollback process is documented and tested
- [ ] Data backup strategy is defined
- [ ] Secrets and credentials are not in the code repository
- [ ] Dependencies are documented (databases, APIs, third-party services)
- [ ] Contact for each dependency is known
- [ ] Runbook exists for known failure modes

The team adds items to this list as the system grows.

### Cost Review Template

Review these once per cycle:

| Item | Question |
|------|----------|
| Total infrastructure cost | Is the trend flat or growing? |
| Cost per user | Is it going up or down? |
| Cost per service | Does any service consume more than 20% of the budget? |
| Largest cost driver | What is the single biggest line item? |

Act when cost grows faster than user growth or one service exceeds 20% of the budget.

---

## Glossary

### A

**Acceptance Criteria** — Pass/fail conditions that define when a behavior is complete. Exist on Use Cases (as Gherkin scenarios), Tasks, or lightweight Stories. Must exist *somewhere* before building.

**Actor** — Entity that starts an interaction with the system. Primary actor starts the Use Case.

**ADR (Architecture Decision Record)** — Document that captures an architectural decision, its context, and trade-offs. Output of Spikes and domain boundary changes.

**Aggregate** — Cluster of domain objects treated as one unit for changes. Defines a consistency boundary. One Use Case maps to one Aggregate.

**Aggregate Boundary** — The scope within which consistency is guaranteed. Crossing boundaries in one Use Case signals the Story is too broad.

**Aggregate Design** — DDD technique to define consistency boundaries. Use when data integrity problems surface.

**Application Layer** — Coordinates between Aggregates when a scenario crosses aggregate boundaries. The Use Case does not handle this.

### B

**Big Picture Event Storming** — Domain exploration technique to map domain events, commands, actors, and pain points. Use when the team lacks a shared mental model.

**Blameless Post-mortem** — Incident analysis that focuses on system causes, not individual blame. Run soon after each incident.

**Blue-green Deployment** — Deployment strategy that runs two environments (blue and green) to switch traffic atomically.

**Bounded Context** — DDD concept for a boundary within which a particular model applies. Identified via Context Mapping.

**Build Phase** — Core delivery moment where Stories evolve to needed fidelity, acceptance scenarios are written, Tasks defined, and Tests written. Execution follows.

**Business Rules** — Domain constraints that apply across all Use Case scenarios.

### C

**Canary Deployment** — Gradual release to a small subset of users before full rollout.

**Candidate Issue** — Potential Issue found during Event Storming. No requirement to link every observation.

**Capture** — First stage of Issue lifecycle. An Issue enters the system from any source.

**Change Failure Rate** — DORA metric for the percentage of deployments that cause a failure.

**Chore** — Work Item that supports delivery without direct user value. Examples: dependency upgrades, CI fixes, test infra. Tracked under parent Story or Use Case.

**CI/CD (Continuous Integration and Continuous Delivery)** — Automated pipeline for integration and delivery of code. Maturity enables longer delivery cycles safely.

**Close** — Final stage of Issue lifecycle. Issue is resolved, abandoned, or parked. Searchable but not actionable.

**Code Review** — Async review technique for small, safe changes. Suits remote teams.

**Command** — DDD concept for an intent to change state. Mapped to Use Case flows: main scenario uses primary command, extensions use alternate commands.

**Context Mapping** — DDD technique to identify bounded contexts and their relationships. Use when service boundaries are unclear.

**Cost of Delay (WSJF)** — Prioritization pattern that uses user value, time criticality, and risk reduction divided by job size. Use for high-stakes disagreement.

**Cyclical / Round-robin** — Prioritization pattern where each stakeholder picks one must-have per cycle. Use with multiple sponsors or customer groups.

### D

**Delivery** — Continuous loop that turns Features into working, released software via Stories and Use Cases.

**Delivery Cycle** — Period from work selection to its release. Size determined by context, not rule. Has Build, Review, and Retro moments.

**Demo** — Review moment that shows stakeholders what shipped. Keep short.

**Deployment Frequency** — DORA metric for how often the team deploys to production.

**Direction** — Shared understanding of where the team goes and why. Answers "what issues is this team here to resolve?" Revisable.

**Domain Event** — Something that happened in the domain. Mapped during Event Storming.

**DORA Metrics** — DevOps Research and Assessment metrics: deployment frequency, lead time, change failure rate, time to restore.

### E

**Error Budget** — The gap between an SLO and actual performance. Use it to decide between features and reliability.

**Event Storming** — DDD workshop technique. Two levels: Big Picture (discovery) and Process/Design (design).

**Extension** — Alternative flow, error condition, or exception in a Use Case scenario.

### F

**Feature** — Narrative that describes a user intent. Current flow, pain points, desired flow, success measurement. Exists on the Roadmap.

**Feature Flag** — Mechanism that decouples deploy from release. Off by default. Skipped for invisible changes or early stage.

**Feedback** — The only ground truth. Production data, user behavior, team sentiment override plans.

**FinOps** — Tracks cost per service as part of monitoring.

**Friction Budget** — Guideline that caps process activities at 20% of cycle time. Estimate at retro, cut one item if exceeded.

**Future (bucket)** — Intentionally absent from the Roadmap. Ideas live in Issues (Idea type). Removed to force explicit "no" decisions.

### G

**Gherkin** — Given/When/Then syntax for writing acceptance scenarios from Use Case flows. Each scenario becomes one Test.

**Go/No-Go Gate** — Lightweight release gate that checks engineering stability, QA acceptance, security scan, and business readiness. Skip for low-risk releases.

**Goals** — Short-term concrete outcomes (1-2) that make Missions actionable. Changed at team discretion.

**Guiderails** — Boundaries set by Direction that Issues exist within. Vision defines class of problems. Missions name what to achieve.

### I

**Idea** — Issue type for something that could be better. Example: "Add real-time shipment tracking."

**Impact Ranking** — Default prioritization method. Sort by gut-checked impact-to-effort. Disagreement resolved by conversation.

**Incident** — Issue type for something that failed in production. Example: "Payment gateway timeout."

**Issue** — Gap between current state and desired state. Types: Problem, Idea, Question, Incident. Everything starts with an Issue.

**Issues Backlog** — Holds everything the team is not actively working on. The inbox. Moves to Work Item only when the team decides to act.

### J

**Judgment over Rules** — Core principle. No rule applies in all contexts. Team decides when to follow, bend, or break any practice.

### L

**Lead Time** — DORA metric for time from commit to production.

**Level** — Use Case classification per Cockburn: Summary, User Goal, or Subfunction.

### M

**Main Success Scenario** — Step-by-step happy path of a Use Case.

**Missions** — Medium-term descriptions of what the team works toward now. Change with environment shifts.

**Monitoring** — Logs, metrics, traces. Continuous observation of the system in production.

### N

**Next (Roadmap bucket)** — Features the team works on after Now finishes.

**Now (Roadmap bucket)** — Features the team works on actively.

### O

**Observation** — Output of domain exploration techniques. Can become Issues but no requirement to link.

**On-call** — Fair rotation for incident response. Name primary and secondary escalation. Track toil.

### P

**Pair Programming** — Technique for complex or critical code. Junior-senior pairing for learning.

**Postconditions** — What must be true after successful Use Case execution.

**Preconditions** — What must be true before a Use Case or Test executes.

**Primary Actor** — Who starts the Use Case interaction.

**Problem** — Issue type for something that is wrong. Example: "30% of orders miss the delivery window."

**Process/Design Event Storming** — Design-level Event Storming for Features with unclear internal flows. Outputs detailed flows, aggregate design, acceptance criteria.

**Production Readiness** — Checklist a new service passes before it receives production traffic: logging, alerts, deploy/rollback process, backup strategy.

**Prototype** — Possible Spike output. Working model to evaluate an approach, not production code.

### Q

**Quality Gates** — Automated checks on every push: unit tests, integration tests, SAST, SCA. Zero manual gates for routine changes.

**Question** — Issue type for something that is unknown. Example: "What triggers payment settlement?"

### R

**Red-Green-Refactor** — TDD cycle. Write failing test (red), make it pass (green), improve design (refactor).

**Release** — Business decision to flip a Feature Flag from off to on. Not a technical event.

**Resolve** — Issue lifecycle stage. Issue is resolved directly, promoted to Work Item, or parked.

**Retrospective (Retro)** — Blameless review that produces 1-3 fix items. Skip for small cycles.

**Roadmap** — Lightweight two-bucket (Now/Next) plan for Features. Changes freely based on learning. No Future bucket.

**Rolling Deployment** — Incremental replacement of instances across a cluster.

**Runbook** — Documented procedure for handling specific operational situations. Write one for every incident type that repeats twice.

### S

**SAST (Static Analysis)** — Quality gate for automated code analysis of security and quality issues.

**SCA (Dependency Scanning)** — Quality gate for automated scanning of dependencies for known vulnerabilities.

**Scenario** — A single flow through a Use Case. Each scenario (main success and extensions) becomes a Gherkin test.

**SEV1-4** — Incident severity levels. SEV1 = user-facing outage, SEV2 = degraded subset of users, SEV3 = no user impact, SEV4 = cosmetic or internal.

**SLO (Service Level Objective)** — One or two metrics that matter most to users. Track the gap as error budget to decide features vs reliability.

**Spike** — Timeboxed investigation for technical, domain, or architectural unknowns. Produces decision record, prototype, or ADR. No production code.

**Story** — Lightweight value placeholder for a slice of a Feature. Title, value statement, priority. Independent. No estimates required.

### T

**Task** — Concrete, technology-agnostic implementation instruction. Breaks down a Use Case or Story into actionable steps. One per discrete behavior change.

**TDD (Test-Driven Development)** — Red-Green-Refactor cycle. Default for new logic when behavioral correctness matters.

**Technical Debt** — Design or implementation shortcuts that slow future delivery. Reserves time after release. Prioritize over features when blocking speed.

**Test** — Versioned reference point for acceptance, integration, or system-level verification. One per Gherkin scenario. Not a Task (verify versus build).

**Time to Restore** — DORA metric for time to recover from a production failure.

**Timebox** — Fixed short duration for a Spike. If exceeded, rescope or run Go/No-Go on parent Feature.

**Toil** — Repetitive operational work. If on-call spends more than 30% of time on toil, automate the task.

**Triage** — Issue lifecycle stage. Understand, label (Problem/Idea/Question/Incident), decide action.

### U

**Unit of Delivery** — Use Case. What the team builds, tests, and accepts.

**Use Case** — Full structured specification per Cockburn/Jacobson template. Actor, preconditions, postconditions, scenarios, acceptance criteria, business rules. Unit of delivery.

### V

**Vision** — Long-term guiding statement. Changes slowly, if at all. Not a plan.

### W

**Work Item** — How the team resolves Issues. Types: Feature, Story, Use Case, Spike, Chore, Task, Test.