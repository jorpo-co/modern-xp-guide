---
title: "Delivery"
weight: 40
sitemap:
  priority: 0.9
meta:
  description: "One continuous delivery loop: build, review, retro. Feature flags, DORA metrics, quality gates, and lightweight releases."
---

# Delivery

Delivery is one continuous loop. The team takes [Features](/reference/ubiq/#feature) and turns them into working, released software with [Stories](/reference/ubiq/#story) and [Use Cases](/reference/ubiq/#use-case).

**Business and development work together here.** Anyone on the team can talk to a user or [stakeholder](/reference/ubiq/#stakeholder) directly. No [gatekeepers](/reference/ubiq/#gatekeeper). If a requirement needs clarification, the team asks the source, not a spec document. When co-located, [face-to-face conversation](/reference/ubiq/#face-to-face-conversation) beats tickets. When remote, a synchronous call beats a threaded decision.

## Delivery Cycle

A Delivery Cycle starts when the team picks work and ends when they release it. Context determines its size, not a rule.

- **Minimum:** One Use Case, small scope.
- **Maximum:** Whatever the team can safely hold in their heads without loss of quality. For most teams, this is a small scope. For experienced teams with mature [CI/CD](/reference/ubiq/#ci-cd-continuous-integration-and-continuous-delivery) (Continuous Integration and Continuous Delivery) and strong domain knowledge, it can be longer.
- **No cycle count constraints.** Deliver when ready. Release when the work completes. The team decides.

Each [Delivery Cycle](/reference/ubiq/#delivery-cycle) has three core moments, [Build](/reference/ubiq/#build-phase), [Review](/reference/ubiq/#review), [Retro](/reference/ubiq/#retrospective-retro), plus supporting activities attached to them:

### Build Phase

**Step 1: Evolve Stories to needed fidelity**

A [Story](/reference/ubiq/#story) arrives at the Build Phase at whatever fidelity the team decided. The team completes the specification to the level needed:

- **Full [Use Case](/reference/ubiq/#use-case):** Add [preconditions](/reference/ubiq/#preconditions), [postconditions](/reference/ubiq/#postconditions), [scenarios](/reference/ubiq/#scenario), [acceptance criteria](/reference/ubiq/#acceptance-criteria) per Appendix C.
- **Partial:** Add enough criteria + [Tasks](/reference/ubiq/#task) + [Tests](/reference/ubiq/#test) to build from.
- **[Trivial](/reference/ubiq/#trivial-work):** No evolution needed. Build directly from the Story.

Each Use Case operates within one [Aggregate](/reference/ubiq/#aggregate) boundary. Do not cross aggregate boundaries in one Use Case. If the work crosses boundaries, split the Story.

If the Story needs no evolution (trivial), skip to Tasks directly.

**Step 2: Write Acceptance Scenarios**

From each Use Case, write [Gherkin](/reference/ubiq/#gherkin) Given/When/Then scenarios. Each [scenario](/reference/ubiq/#scenario) covers one flow from the Use Case, the [main success scenario](/reference/ubiq/#main-success-scenario) and each [extension](/reference/ubiq/#extension):

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

Break each Use Case into [Tasks](/reference/ubiq/#task). Each Task has:
- [Inputs](/reference/ubiq/#inputs)
- [Outputs](/reference/ubiq/#outputs)
- [Constraints](/reference/ubiq/#constraints)
- [Acceptance criteria](/reference/ubiq/#acceptance-criteria)
- [Definition of Done](/reference/ubiq/#definition-of-done) checklist

Tasks are the unit of assignment during the build phase. Assign and track them independently.

**Step 4: Write Tests**

Write a [Test](/reference/ubiq/#test) for each Gherkin scenario from Step 2. One Test per scenario, the main success path and each extension. Tests are versioned alongside the code and serve as the shared reference for acceptance and integration verification.

Tests are written during the build phase, not after. They define "done" at the behaviour level.

**Execution (the doing part):**

The team chooses techniques that fit:

| Technique | Use When |
|-----------|----------|
| [TDD](/reference/ubiq/#tdd-test-driven-development) (Red-Green-Refactor) | Behavioural correctness matters. Default for new logic. |
| [Pair Programming](/reference/ubiq/#pair-programming) | Complex or critical code. Junior-senior pairing for learning. |
| [Code Review](/reference/ubiq/#code-review) (async) | Small, safe changes. Remote teams. |
| [AI-assisted](/reference/ubiq/#ai-assisted) (Cursor, Copilot) | Rapid prototyping, boilerplate, test generation. Review output. |

Do not enforce any technique rigidly. If a 2-line config change needs TDD + pair programming, the process is wrong, not the developer.

**[Quality gates](/reference/ubiq/#quality-gates) on every push:**
- [Unit tests](/reference/ubiq/#unit-tests)
- [Integration tests](/reference/ubiq/#integration-tests)
- [SAST](/reference/ubiq/#sast-static-analysis) (static analysis)
- [SCA](/reference/ubiq/#sca-dependency-scanning) (dependency scanning)

These are automated. Zero manual gates for routine changes.

### Feature Flags

Every deploy goes behind a [Feature Flag](/reference/ubiq/#feature-flag). The flag is off by default. This decouples deploy from [release](/reference/ubiq/#release).

**When to skip:** The change is invisible to users (refactor, performance fix, logging). Or the team is very early stage and shipping to <100 users.

### Review Moment

After the team builds a coherent batch of work, review it. The review has two parts:

**[Demo](/reference/ubiq/#demo):** Show [stakeholders](/reference/ubiq/#stakeholder) what shipped. Keep it short.

**Check [DORA](/reference/ubiq/#dora-metrics) (DevOps Research and Assessment) metrics if available:**
- [Deployment frequency](/reference/ubiq/#deployment-frequency)
- [Lead time](/reference/ubiq/#lead-time)
- [Change failure rate](/reference/ubiq/#change-failure-rate)
- [Time to restore](/reference/ubiq/#time-to-restore)

If a DORA metric trends the wrong way across review cycles, investigate. Do not set arbitrary targets.

### Retrospective Moment

Run a blameless [retrospective](/reference/ubiq/#retrospective-retro). Produce 1 to 3 fix items for the next cycle.

**When to skip:** The cycle is small or the team already discusses improvements naturally. Formality adds no value.

### Technical Debt Refactor

The team reserves time for [technical debt](/reference/ubiq/#technical-debt). No fixed percentage. The team decides how much debt is acceptable.

- After each release is a natural time.
- If debt blocks delivery speed, prioritise it over features.
- Small debt is cheaper to fix now. Large debt needs clear planning.

**When to skip:** No known debt. Or the team is in exploration mode where getting it wrong and rewriting is cheaper than maintaining.

### Release

A [Release](/reference/ubiq/#release) is a business decision, not a technical event. Flip the [Feature Flag](/reference/ubiq/#feature-flag) from off to on.

**[Go/No-Go](/reference/ubiq/#go-no-go-gate) gate (lightweight):**
- [Engineering stability](/reference/ubiq/#engineering-stability) confirmed (includes [rollback plan](/reference/ubiq/#rollback-plan))
- [QA acceptance](/reference/ubiq/#qa-acceptance) (flag behaviour verified on and off)
- [Security scan](/reference/ubiq/#security-scan) passed
- [Business readiness](/reference/ubiq/#business-readiness) confirmed

Use [canary](/reference/ubiq/#canary-deployment), [blue-green](/reference/ubiq/#blue-green-deployment), or [rolling](/reference/ubiq/#rolling-deployment) deployment. Choose based on risk, not fixed rules.

**When to skip the gate:** Low-risk release (feature flag, dark launch, internal tool). The gate exists to prevent disaster, not to add ceremony to safe changes.

The gate's plans ([rollback](/reference/ubiq/#rollback-plan), incident containment) exist only for failure scenarios. In normal delivery, confidence beats ceremony. Do not write a release plan for a routine deploy.