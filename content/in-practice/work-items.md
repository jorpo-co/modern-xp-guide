---
title: "Work Items — In Practice"
weight: 58
sitemap:
  priority: 0.8
meta:
  description: "How to choose Work Items: Features, Stories, Use Cases, Spikes, Tasks, Tests, and how they connect."
---

# Work Items — In Practice

Work Items resolve Issues. The guide covers what each Work Item *is*. This page covers how to *choose*.

## Relationship Map

Work Items form a hierarchy. Each level adds specificity:

```
Issue
  ├── Resolved directly (question answered, config fixed, incident handled)
  │
  └── Feature (needs investment, multiple cycles)
        │
        └── Roadmap (Now / Next)
              │
              ├── Spike (unknowns → ADR / prototype / kill)
              │
              └── Stories (independent value units)
                    │
                    ├── Trivial → Tasks directly
                    ├── Partial → criteria + Tasks + Tests
                    └── Complex → Use Case → Tasks + Tests
```

Fidelity is a choice, not a gate. The team decides how much structure each Story needs.

## Default Path + Branching

**Default:**

```
Issue → Feature (roadmap) → Stories → 
  ├── Partial: criteria + Tasks + Tests
  └── Full: Use Case → Tasks → Tests
```

**Unknowns block delivery:**

```
Issue → Feature → Stories → Spike → ADR / prototype / kill →
  ├── Spike confirms → proceed
  └── Spike kills → kill Feature, close Issue
```

**Trivial work (typo, 1-line config):**

```
Issue → Record minimal Story → Tasks → Build directly
```

No Feature, no roadmap, no Use Case.

**Pre-PMF (startup):**

```
Issue → Feature (paper prototype) → Direct conversation → Build
```

Drop formality. Retroactively document if the Feature survives.

## Prioritisation Methods

| Method | Use When | Mechanism |
|---|---|---|
| **Impact ranking** | Default | Sort by gut-checked impact-to-effort. Disagreement → conversation. |
| **Cost of Delay (WSJF)** | High-stakes disagreement, real money at stake | User value + time criticality + risk reduction ÷ job size |
| **"What hurts most"** | Pain-driven teams | Feature that removes the biggest current pain wins |
| **Cyclical / round-robin** | Multiple sponsors or customer groups | Each stakeholder picks one must-have per cycle |
| **Production data** | When available — always preferred | Adoption, behaviour, incidents outrank opinion |

**Not recommended:** Numeric scores (RICE, ICE), MoSCoW, Kano model.

## Story-to-Use-Case Fidelity

```
Is the work trivial (typo, 1-line config)?
  Yes → Tasks directly. No Use Case.
  No →
    Early stage (pre-PMF)?
      Yes → Paper prototype + conversation. Write Use Case only if structure is unclear.
      No →
        Crosses aggregate boundaries?
          Yes → Split the Story. One Story, one Use Case maximum.
          No →
            Needs full structured spec?
              Yes → Full Use Case (Cockburn/Jacobson per Appendix C)
              No → Partial: criteria + Tasks + Tests (most cases)
```

## Role Map

| Activity | Primary | Supports | When |
|---|---|---|---|
| Feature creation | Product Owner | Engineering Lead | Issue promoted to Feature |
| Roadmap management | Product Owner | — | Continuous — Now/Next only |
| Story slicing | Product Owner + Software Engineer | — | Feature needs decomposition |
| Use Case writing | Software Engineer | QA Engineer | Story needs full spec |
| Spike execution | Software Engineer | — | Unknown blocks commitment |
| Task decomposition | Software Engineer | — | Story or Use Case exists |
| Test writing (acceptance) | QA Engineer | Software Engineer | Gherkin scenarios from Use Case |
| Prioritisation | Product Owner | Whole team | Conversation, not formula |

## Technique Table

| Technique | Use When | Output | Skill |
|---|---|---|---|
| **Feature Narration** | Turning an Issue into a Feature | Feature card: current flow, pain points, desired flow, success measure | [`feature-guide`](https://github.com/jorpo-co/modern-xp-tools) |
| **Story Mapping** | Visualizing user journey across a Feature | Story Map with backbone, slices, priority | [`story-guide`](https://github.com/jorpo-co/modern-xp-tools) |
| **Story Slicing** | Breaking a Feature into independent Stories | Independent Story cards with dependency ordering | [`story-guide`](https://github.com/jorpo-co/modern-xp-tools) |
| **Use Case Definition** | Full structured spec per Cockburn/Jacobson | Use Case: actor, pre/post, scenarios, extensions, business rules | Not yet available |
| **Acceptance Scenarios (Gherkin)** | Defining "done" unambiguously | Gherkin Given/When/Then scenarios | Not yet available |
| **Task Decomposition** | Breaking work into actionable steps | Task Specifications with inputs, outputs, constraints, DoD | Not yet available |
| **Architectural Spike** | Exploring technical unknowns | Spike Report, ADR, prototype, or kill decision | [`spike-guide`](https://github.com/jorpo-co/modern-xp-tools) |
| **ADR** | Capturing architectural decisions | ADR: context, options, trade-offs, decision | [`decision-records`](https://github.com/jorpo-co/modern-xp-tools) |

## Procedure Table

| Procedure | What It Does | Wiki Link |
|---|---|---|
| **Use Case Definition** | Formal specification of a goal-level interaction | [`planning/procedures/use-case-definition.md`](https://github.com/jorpo-co/modern-xp-wiki) |
| **Adopting Modern XP** | Onboarding a team to the methodology | [`planning/procedures/adopting-modern-xp.md`](https://github.com/jorpo-co/modern-xp-wiki) |

## Artifact Table

| Artifact | Produced By | Consumed By | Format |
|---|---|---|---|
| **Feature Card** | Feature Narration | Roadmap, Story slicing | Narrative: current flow, pain points, desired flow, success measure |
| **Roadmap** | Product Owner | Whole team, stakeholders | Two buckets: Now / Next |
| **Story Card** | Story slicing | Use Case or direct build | Title, value statement, priority, parent Feature |
| **Use Case** | Use Case Definition | Task decomposition, Tests | Structured: actor, pre/post, scenarios, extensions, business rules |
| **Spike Report** | Spike execution | Feature go/no-go | Findings, ADR, prototype, or kill |
| **Task Specification** | Task Decomposition | Build Phase execution | Inputs, outputs, constraints, DoD |
| **Test** | Gherkin scenarios | Acceptance testing | ID, source, Gherkin scenario, type, preconditions, expected result |
| **ADR** | Spike or design decision | Architecture evolution | Context, options, trade-offs, decision |

## Skip Conditions

| Activity | Skip When |
|---|---|
| Feature (formal narrative) | Work is a chore, bug fix, or trivial change |
| Roadmap | Pre-PMF; team works on one thing at a time |
| Story slicing | Feature fits in one small Story |
| Use Case (full structured) | Story is clear enough with criteria + Tasks + Tests (most cases) |
| Spike | No unknowns. The team understands what to build and how. |
| Chore tracking | Chore volume is low. Informal handling is fine. |
| ADR | Decision is routine, reversible, or has no alternatives. |
| Task decomposition | Work is trivial. Build directly from the Story. |

The team decides how much fidelity is needed. Default to minimal. Add structure only when a specific gap shows it is needed.