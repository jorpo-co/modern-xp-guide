---
title: "Delivery"
weight: 40
sitemap:
  priority: 0.9
meta:
  description: "One continuous delivery loop: build, review, retro. Feature flags, DORA metrics, quality gates, and lightweight releases."
---

# Delivery

Delivery is one continuous loop. The team takes Features and turns them into working, released software with Stories and Use Cases.

**Business and development work together here.** Anyone on the team can talk to a user or stakeholder directly. No gatekeepers. If a requirement needs clarification, the team asks the source, not a spec document. When co-located, face-to-face conversation beats tickets. When remote, a synchronous call beats a threaded decision.

## Delivery Cycle

A Delivery Cycle starts when the team picks work and ends when they release it. Context determines its size, not a rule.

- **Minimum:** One Use Case, small scope.
- **Maximum:** Whatever the team can safely hold in their heads without loss of quality. For most teams, this is a small scope. For experienced teams with mature CI/CD (Continuous Integration and Continuous Delivery) and strong domain knowledge, it can be longer.
- **No cycle count constraints.** Deliver when ready. Release when the work completes. The team decides.

Each Delivery Cycle has three core moments, Build, Review, Retro, plus supporting activities attached to them:

### Build Phase

**Step 1: Evolve Stories to needed fidelity**

A Story arrives at the Build Phase at whatever fidelity the team decided. The team completes the specification to the level needed:

- **Full Use Case:** Add preconditions, postconditions, scenarios, acceptance criteria per Appendix C.
- **Partial:** Add enough criteria + Tasks + Tests to build from.
- **Trivial:** No evolution needed. Build directly from the Story.

Each Use Case operates within one Aggregate boundary. Do not cross aggregate boundaries in one Use Case. If the work crosses boundaries, split the Story.

If the Story needs no evolution (trivial), skip to Tasks directly.

**Step 2: Write Acceptance Scenarios**

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

**Step 3: Break into Tasks**

Break each Use Case into Tasks per the formal [Task definition](/work-items/#tasks). Each Task has:
- Inputs
- Outputs
- Constraints
- Acceptance criteria
- Definition of Done checklist

Tasks are the unit of assignment during the build phase. Assign and track them independently.

**Step 4: Write Tests**

Write a [Test](/work-items/#tests) for each Gherkin scenario from Step 2. One Test per scenario, the main success path and each extension. Tests are versioned alongside the code and serve as the shared reference for acceptance and integration verification.

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

### Feature Flags

Every deploy goes behind a Feature Flag. The flag is off by default. This decouples deploy from release.

**When to skip:** The change is invisible to users (refactor, performance fix, logging). Or the team is very early stage and shipping to <100 users.

### Review Moment

After the team builds a coherent batch of work, review it. The review has two parts:

**Demo:** Show stakeholders what shipped. Keep it short.

**Check DORA (DevOps Research and Assessment) metrics if available:**
- Deployment frequency
- Lead time
- Change failure rate
- Time to restore

If DORA metrics look bad, investigate. Do not set arbitrary targets.

### Retrospective Moment

Run a blameless retrospective. Produce 1 to 3 fix items for the next cycle.

**When to skip:** The cycle is small or the team already discusses improvements naturally. Formality adds no value.

### Technical Debt Refactor

The team reserves time for technical debt. No fixed percentage. The team decides how much debt is acceptable.

- After each release is a natural time.
- If debt blocks delivery speed, prioritize it over features.
- Small debt is cheaper to fix now. Large debt needs clear planning.

**When to skip:** No known debt. Or the team is in exploration mode where getting it wrong and rewriting is cheaper than maintaining.

### Release

A Release is a business decision, not a technical event. Flip the Feature Flag from off to on.

**Go/No-Go gate (lightweight):**
- Engineering stability confirmed (includes rollback plan)
- QA acceptance (flag behavior verified on and off)
- Security scan passed
- Business readiness confirmed

Use canary, blue-green, or rolling deployment. Choose based on risk, not fixed rules.

**When to skip the gate:** Low-risk release (feature flag, dark launch, internal tool). The gate exists to prevent disaster, not to add ceremony to safe changes.

The gate's plans (rollback, incident containment) exist only for failure scenarios. In normal delivery, confidence beats ceremony. Do not write a release plan for a routine deploy.
