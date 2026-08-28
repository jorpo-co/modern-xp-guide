---
title: "C: Use Cases & Aggregate Boundaries"
weight: 3
sitemap:
  priority: 0.7
meta:
  description: "Full Use Case structure template per Cockburn/Jacobson with Aggregate Boundary Rule and condensed example."
---

# Appendix C: Use Cases and Aggregate Boundaries

## Use Cases per Cockburn / Jacobson

A [Use Case](/ubiq/#use-case) captures a goal-level interaction between an [actor](/ubiq/#actor) and the system. It describes success scenarios and failure paths. It does not prescribe UI, implementation, or data structures. It is a contract between [stakeholders](/ubiq/#stakeholder) and developers about what the system does.

Key distinctions from user stories:

| [User Story](/ubiq/#story) | [Use Case](/ubiq/#use-case) |
|------------|----------|
| "As a X, I want Y so that Z" | Structured: [actor](/ubiq/#actor), [preconditions](/ubiq/#preconditions), [postconditions](/ubiq/#postconditions), [scenarios](/ubiq/#scenario) |
| Intent, not specification | Specification that maps to tests |
| One sentence | Multiple scenarios, one [main success path](/ubiq/#main-success-scenario) |
| Deliberately vague | Deliberately precise at goal level |
| No boundary constraints | One boundary per Use Case (one [Aggregate](/ubiq/#aggregate)) |

## Aggregate Boundary Rule

An [Aggregate](/ubiq/#aggregate) (DDD) defines a [consistency boundary](/ubiq/#consistency-boundary): a cluster of [domain objects](/ubiq/#domain-object) treated as one unit for changes.

- **One Use Case maps to one Aggregate.** Do not use more than one aggregate in one Use Case.
- **If a Use Case needs more than one Aggregate**, the [Story](/ubiq/#story) is too broad. Split the Story into multiple Stories, each with one Use Case and one Aggregate boundary.
- **The [application or service layer](/ubiq/#application-layer)** handles coordination between Aggregates. The Use Case does not.
- **[Commands](/ubiq/#command) map to Use Case flows.** The [main success scenario](/ubiq/#main-success-scenario) uses the primary command. [Extensions](/ubiq/#extension) use alternate commands or error states in the same Aggregate.

This is a guideline, not a rule. If crossing aggregate boundaries simplifies the design and the team understands the trade-offs, do it. Document the trade-off in an [ADR](/ubiq/#adr).

## Use Case Structure Template

| Element | Description |
|---------|-------------|
| **ID** | Unique identifier (e.g., UC-42) |
| **Title** | Goal in active voice: "User places an order" |
| **[Primary Actor](/ubiq/#primary-actor)** | Who starts this interaction |
| **Scope** | Aggregate or system boundary |
| **[Level](/ubiq/#level)** | Summary, user goal, or subfunction (Cockburn levels) |
| **[Preconditions](/ubiq/#preconditions)** | What must be true before execution |
| **[Postconditions](/ubiq/#postconditions)** | What must be true after successful execution |
| **[Main Success Scenario](/ubiq/#main-success-scenario)** | Step-by-step happy path, numbered |
| **[Extensions](/ubiq/#extension)** | Alternative flows, error conditions, exceptions |
| **[Acceptance Criteria](/ubiq/#acceptance-criteria)** | [Gherkin](/ubiq/#gherkin) Given/When/Then scenarios derived from the Use Case flows |
| **[Business Rules](/ubiq/#business-rules)** | Domain constraints that apply across scenarios |

## Condensed Example

```
UC-5: Customer cancels an order
[Primary Actor](/ubiq/#primary-actor): Customer
Scope: Order aggregate
[Level](/ubiq/#level): User goal

[Preconditions](/ubiq/#preconditions):
- Customer is authenticated
- Order exists and is in "confirmed" or "processing" state

[Postconditions](/ubiq/#postconditions):
- Order enters "cancelled" state
- Inventory is restored
- Refund workflow starts

[Main Success Scenario](/ubiq/#main-success-scenario):
1. Customer requests cancellation
2. System checks order is cancellable
3. System changes order state to "cancelled"
4. System releases reserved inventory
5. System triggers refund
6. System tells the customer

[Extensions](/ubiq/#extension):
2a. Order is already shipped:
  2a1. System rejects cancellation
  2a2. System offers return flow instead
```