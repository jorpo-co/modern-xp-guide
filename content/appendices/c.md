---
title: "C: Use Cases & Aggregate Boundaries"
weight: 3
description: "Full Use Case structure template per Cockburn/Jacobson with Aggregate Boundary Rule and condensed example."
---

# Appendix C: Use Cases and Aggregate Boundaries

## Use Cases per Cockburn / Jacobson

A Use Case captures a goal-level interaction between an actor and the system. It describes success scenarios and failure paths. It does not prescribe UI, implementation, or data structures. It is a contract between stakeholders and developers about what the system does.

Key distinctions from user stories:

| User Story | Use Case |
|------------|----------|
| "As a X, I want Y so that Z" | Structured: actor, preconditions, postconditions, scenarios |
| Intent, not specification | Specification that maps to tests |
| One sentence | Multiple scenarios, one main success path |
| Deliberately vague | Deliberately precise at goal level |
| No boundary constraints | One boundary per Use Case (one Aggregate) |

## Aggregate Boundary Rule

An Aggregate (DDD) defines a consistency boundary: a cluster of domain objects treated as one unit for changes.

- **One Use Case maps to one Aggregate.** Do not use more than one aggregate in one Use Case.
- **If a Use Case needs more than one Aggregate**, the Story is too broad. Split the Story into multiple Stories, each with one Use Case and one Aggregate boundary.
- **The application or service layer** handles coordination between Aggregates. The Use Case does not.
- **Commands map to Use Case flows.** The main success scenario uses the primary command. Extensions use alternate commands or error states in the same Aggregate.

This is a guideline, not a rule. If crossing aggregate boundaries simplifies the design and the team understands the trade-offs, do it. Document the trade-off in an ADR.

## Use Case Structure Template

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