---
title: "Direction"
weight: 10
sitemap:
  priority: 0.9
meta:
  description: "Set vision, define missions, craft goals, and explore your domain with Event Storming, Context Mapping, and Aggregate Design."
---

# Direction

Direction gives the team a shared understanding of where to go and why. It answers: "What issues is this team here to resolve?" The team revisits direction regularly. Direction does not block work. Its primary output is context for discovering the specific gaps, questions, and opportunities within the team's scope.

## Vision, Missions, Goals

The team holds one long-term **[Vision](/reference/ubiq/#vision)**. Medium-term **[Missions](/reference/ubiq/#missions)** describe what the team works towards now. Short-term **[Goals](/reference/ubiq/#goals)** make missions concrete.

- The Vision changes slowly, if at all. It guides the team. It is not a plan.
- Missions change when the environment shifts. New market data, production signals, sponsor priorities. No minimum or maximum duration.
- Goals are the next 1-2 concrete outcomes. When the team achieves or abandons a goal, the team picks the next one.

The team revisits direction at a cadence the team chooses. Between reviews, the team can change goals without permission. A mission change requires a conversation with stakeholders.

**Prepare to succeed.** Do enough discovery to move forward: [study](/reference/ubiq/#study) [unknowns](/reference/ubiq/#unknowns), sketch boundaries, talk to users. Do not plan the path before you walk it. Heavy plans belong in failure-mode scenarios (disaster recovery, incident response), not daily delivery.

## Domain Exploration

When the domain is unfamiliar or the team disagrees on what the system does, explore it. Domain-Driven Design techniques help.

**Techniques (use when needed, not always):**

- **[Big Picture Event Storming](/reference/ubiq/#big-picture-event-storming):** Map [domain events](/reference/ubiq/#domain-event), [commands](/reference/ubiq/#command), [actors](/reference/ubiq/#actor), [pain points](/reference/ubiq/#pain-point). Use when the team does not share a mental model of the [domain](/reference/ubiq/#domain).
- **[Context Mapping](/reference/ubiq/#context-mapping):** Identify [bounded contexts](/reference/ubiq/#bounded-context) and their relationships. Use when service boundaries are unclear or teams overlap.
- **[Aggregate Design](/reference/ubiq/#aggregate-design):** Define consistency boundaries. Use when data integrity problems surface.

These techniques produce **[observations](/reference/ubiq/#observation)**. Observations can become [Issues](/reference/ubiq/#issue), but there is no requirement to link every observation to an Issue. If a problem is obvious without Event Storming, do not waste time storming to justify it.

**When to skip:** The team understands the domain and boundaries are stable. Ship features instead.
