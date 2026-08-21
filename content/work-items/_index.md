---
title: "Work Items"
weight: 30
description: "Features, Stories, Use Cases, Spikes, Chores, Tasks, and Tests: how the team resolves Issues and delivers value."
---

# Work Items

Work Items are how the team resolves Issues. Each type of Work Item serves a different resolution strategy.


## Features

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


## Stories

A Story is a lightweight value placeholder for a slice of a Feature. It exists for prioritization, roadmap planning, and stakeholder communication. It is not a specification.

- A Story has a title, a value statement, and a priority.
- A Story is independent. The team can order and deliver it without other Stories.
- The team orders Stories to resolve dependencies, not to maximize theoretical value.

**No acceptance criteria on Stories by default.** A Story can evolve into a Use Case (full structured spec) or stay lightweight with criteria + Tasks + Tests. The team adds fidelity based on need. For trivial work, write lightweight acceptance notes on the Story. The rule: acceptance criteria must exist *somewhere* before building. The Use Case is the highest-fidelity form. The Story is the fallback for trivial work.

**No Story count constraints.** If a Feature splits into 2 Stories, fine. If 20, also fine, but check for signs that the Feature is too broad. Split the Feature instead. Do not give arbitrary limits to Story counts.

**No estimates required.** The team can estimate if useful (e.g., for external commitments). Default: no estimates. Impact-rank instead.

**Story evolution:** A Story can evolve into a Use Case (full structured spec) or stay partially evolved (criteria + Tasks + Tests) or stay as-is for trivial work. The team decides how much fidelity is needed. If a Story needs more than one Aggregate boundary, split the Story: one Story, one Use Case maximum.


## Use Cases

A Use Case is a Story that has been evolved to full structured specification. It follows the Cockburn/Jacobson template: actor, preconditions, postconditions, scenarios, acceptance criteria. It is the **unit of delivery**: what the team builds, tests, and accepts. Stories give the "why" and the priority. Use Cases give the "what" and the acceptance criteria.

Not every Story reaches this fidelity. The team stops when the Story has enough structure to build from. No gate between Story and Build.

Each Use Case operates within exactly one Aggregate boundary (see Appendix C).

See [Appendix C](/appendices/c/) for the full Use Case structure template and a condensed example.

### Use Case and Aggregate Boundaries

One Use Case maps to one Aggregate. If the scenario crosses aggregate boundaries, create multiple Use Cases. This signals the Story can be too broad. The application layer coordinates between them (see Appendix C).

### When to Skip Formal Use Cases

| Condition | Action |
|-----------|--------|
| Trivial work (typo, 1-line config) | Build directly. Skip full UC structure. Acceptance criteria on the Story. |
| Very early stage (pre-product-market fit) | Paper prototypes + direct conversation. Retroactively write full UC if structure unclear. |
| Story does not need full UC fidelity | Criteria + Tasks + Tests on the Story. No formal Use Case template. |


## Spikes

A Spike is a timeboxed investigation. Use it when unknowns block delivery.

| Trigger | Timebox | Output |
|---------|---------|--------|
| Technical unknown | Short fixed timebox | Decision record, prototype, or rejected option |
| Domain unknown | Short fixed timebox | Clarified flow or Process/Design Event Storming |
| Architectural unknown | Short fixed timebox | ADR (Architecture Decision Record) |

Spikes do not produce production code. If a Spike exceeds its timebox, the team decides: rescope or run a Go/No-Go on the parent Feature.


## Chores

Chores support delivery without direct user value. Examples: dependency upgrades, CI fixes, test infra.

Record Chores alongside Tasks under their parent Story or Use Case. If chore volume is high, use a dedicated Chore template. Do not track Chores as formal Issues unless the team finds it helpful.


## Tasks

A Task is a concrete, technology-agnostic implementation instruction that breaks down a Use Case (or small Story) into actionable steps. Tasks bridge specification and code.

**Characteristics:**
- Technology-agnostic: describes *what* to implement, not *how* in a specific framework
- One Task per discrete behavior change
- No prescribed file or module mapping

See [Appendix G](/appendices/g/) for the full Task structure template.


## Tests

A Test is a versioned reference point for acceptance, integration, or system-level verification. Tests give the team a shared vocabulary for what scenarios must pass before release.

**What Tests are not:**
- Unit tests live in the codebase, not as work items. Do not track them here.
- Tests verify. Tasks build. Separate concerns, separate work items.

**Characteristics:**
- One Test per Gherkin scenario, the main success path and each extension
- Technology-agnostic: describes the behavior to verify, not the test framework
- Versioned alongside code

See [Appendix H](/appendices/h/) for the full Test structure template.

**How Tests relate to other work items:**
- Use Cases produce Gherkin scenarios ([Build Phase Step 2](/delivery/#build-phase)) → each scenario becomes one Test
- Stories that skip full Use Case structure use lightweight acceptance notes on the Story, not structured Tests
- Tests are not Tasks. They verify. Tasks build
- Unit tests are not captured as Work Items. They are part of the codebase, implied by [quality gates](/delivery/#build-phase)
