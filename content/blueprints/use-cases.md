---
title: "Use Cases & Aggregate Boundaries"
url: /blueprints/use-cases/
weight: 3
sitemap:
  priority: 0.7
meta:
  description: "Full Use Case structure template per Cockburn/Jacobson with Aggregate Boundary Rule and condensed example."
---

# Appendix C: Use Cases and Aggregate Boundaries

## Use Cases per Cockburn / Jacobson

A [Use Case](/reference/ubiq/#use-case) captures a goal-level interaction between an [actor](/reference/ubiq/#actor) and the system. It describes success scenarios and failure paths. It does not prescribe UI, implementation, or data structures. It is a contract between [stakeholders](/reference/ubiq/#stakeholder) and developers about what the system does.

Key distinctions from user stories:

| [User Story](/reference/ubiq/#story) | [Use Case](/reference/ubiq/#use-case) |
|------------|----------|
| "As a X, I want Y so that Z" | Structured: [actor](/reference/ubiq/#actor), [preconditions](/reference/ubiq/#preconditions), [postconditions](/reference/ubiq/#postconditions), [scenarios](/reference/ubiq/#scenario) |
| Intent, not specification | Specification that maps to tests |
| One sentence | Multiple scenarios, one [main success path](/reference/ubiq/#main-success-scenario) |
| Deliberately vague | Deliberately precise at goal level |
| No boundary constraints | One boundary per Use Case (one [Aggregate](/reference/ubiq/#aggregate)) |

## Aggregate Boundary Rule

An [Aggregate](/reference/ubiq/#aggregate) (DDD) defines a [consistency boundary](/reference/ubiq/#consistency-boundary): a cluster of [domain objects](/reference/ubiq/#domain-object) treated as one unit for changes.

- **One Use Case maps to one Aggregate.** Do not use more than one aggregate in one Use Case.
- **If a Use Case needs more than one Aggregate**, the [Story](/reference/ubiq/#story) is too broad. Split the Story into multiple Stories, each with one Use Case and one Aggregate boundary.
- **The [application or service layer](/reference/ubiq/#application-layer)** handles coordination between Aggregates. The Use Case does not.
- **[Commands](/reference/ubiq/#command) map to Use Case flows.** The [main success scenario](/reference/ubiq/#main-success-scenario) uses the primary command. [Extensions](/reference/ubiq/#extension) use alternate commands or error states in the same Aggregate.

This is a guideline, not a rule. If crossing aggregate boundaries simplifies the design and the team understands the trade-offs, do it. Document the trade-off in an [ADR](/reference/ubiq/#adr-architecture-decision-record).

## Use Case Structure Template

| Element | Description |
|---------|-------------|
| **ID** | Unique identifier (e.g., UC-42) |
| **Title** | Goal in active voice: "User places an order" |
| **[Primary Actor](/reference/ubiq/#primary-actor)** | Who starts this interaction |
| **Scope** | Aggregate or system boundary |
| **[Level](/reference/ubiq/#level)** | Summary, user goal, or subfunction (Cockburn levels) |
| **[Preconditions](/reference/ubiq/#preconditions)** | What must be true before execution |
| **[Postconditions](/reference/ubiq/#postconditions)** | What must be true after successful execution |
| **[Main Success Scenario](/reference/ubiq/#main-success-scenario)** | Step-by-step happy path, numbered |
| **[Extensions](/reference/ubiq/#extension)** | Alternative flows, error conditions, exceptions |
| **[Acceptance Criteria](/reference/ubiq/#acceptance-criteria)** | [Gherkin](/reference/ubiq/#gherkin) Given/When/Then scenarios derived from the Use Case flows |
| **[Business Rules](/reference/ubiq/#business-rules)** | Domain constraints that apply across scenarios |

## Condensed Example

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