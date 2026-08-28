---
title: "B: Roadmap & Prioritization"
weight: 2
sitemap:
  priority: 0.7
meta:
  description: "Lightweight roadmap with Now/Next buckets, impact ranking, and why numeric scores and Future buckets are rejected."
---

# Appendix B: Roadmap and Prioritization

## How Features Get Prioritized

[Prioritization](/ubiq/#prioritization) is a conversation, not a formula.

- **If a feature matters, the team knows.** When the team disagrees, they talk for a few minutes. One feature wins. The loser stays in [Next](/ubiq/#next-roadmap-bucket) or becomes an [Issue](/ubiq/#issue).
- **[Impact ranking](/ubiq/#impact-ranking) is the default.** Sort by gut-checked impact-to-effort. No scores, no spreadsheet. "If we ship only one thing this cycle, which one?"
- **[Production data](/ubiq/#production-data) decides when available.** [Feature adoption](/ubiq/#feature-adoption), [user behavior](/ubiq/#user-behavior), and [Incidents](/ubiq/#incident) outrank opinion.

Other lightweight patterns that fit this framework, when the team needs more structure:

| Pattern | When to Use | Mechanism |
|---------|-------------|-----------|
| **Impact ranking** | Default | Sort by impact-to-effort, gut-checked. Disagreement → conversation |
| **[Cost of Delay (WSJF)](/ubiq/#cost-of-delay-wsjf)** | High-stakes disagreement, real money at stake | User value + time criticality + risk reduction, divided by job size. Stop when the top 1-2 are clear |
| **"What hurts most?"** | Pain-driven teams | Feature that removes the biggest current pain wins |
| **[Cyclical / round-robin](/ubiq/#cyclical-round-robin)** | Multiple sponsors or customer groups | Each [stakeholder](/ubiq/#stakeholder) picks one must-have per cycle |

## Why There Is No Future Bucket

The [Roadmap](/ubiq/#roadmap) has two buckets: **[Now](/ubiq/#now-roadmap-bucket)** and **[Next](/ubiq/#next-roadmap-bucket)**. A "Future" bucket is intentionally absent. Three reasons:

1. **A Future bucket collects ideas that never die.** Work placed in Future never gets attention. Every quarter the team re-explains why it does not happen. Without Future, every Feature must be either committed (Next) or off the roadmap. The [Issues](/ubiq/#issue) list holds everything else. No special status, no inactive list.
2. **Future disguises uncertainty as commitment.** Placing an item in Future feels like planning, but the context (market, data, [stakeholders](/ubiq/#stakeholder)) changes before the team reaches it. The item is stale on arrival. The team re-evaluates anyway, so the bucket adds overhead with no predictive value.
3. **Future hides trade-offs.** Two buckets force a decision: Now fills, Next fills, everything else does not happen. That surfaces scarcity and makes "no" explicit. Future lets a team avoid saying no. Saying no is the most important thing a roadmap does.

[Issues](/ubiq/#issue) ([Idea](/ubiq/#idea) type) handle "Future" as an inbox for raw ideas. Ideas live in Issues. Only when the team commits does something become a [Feature](/ubiq/#feature) on the [Roadmap](/ubiq/#roadmap).

## What Is Rejected and Why

| Method | Why Rejected |
|--------|-------------|
| **[Numeric scores](/ubiq/#numeric-scores) (RICE, ICE, weighted matrices)** | False precision. Weights are subjective but scores feel objective. Teams game the numbers. A 15-minute score debate replaces a 2-minute decision |
| **[MoSCoW](/ubiq/#moscow) (Must/Should/Could/Won't)** | "Should" and "Could" are Future in disguise. Teams ignore the will-not items. Two buckets do the same work with less ceremony |
| **[Kano model](/ubiq/#kano-model)** | Too abstract for cycle-level decisions. At most a quarterly [Direction](/ubiq/#direction) input, not a [Delivery](/ubiq/#delivery) tool |

Good enough beats perfect. Pick the good enough next Feature and ship it. Learning from the shipped thing is worth more than optimizing the order of unshipped things.

When the team genuinely does not know what matters (early stage, new domain, no feedback yet), the answer is a [Spike](/ubiq/#spike) or the smallest shippable [Feature](/ubiq/#feature) that generates data, not a better prioritization formula. No formula resolves unknown unknowns.