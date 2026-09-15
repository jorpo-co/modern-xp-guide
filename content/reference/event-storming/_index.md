---
title: "Event Storming"
url: /reference/event-storming/
weight: 1
sitemap:
  priority: 0.7
meta:
  description: "Big Picture and Process/Design Event Storming, two levels of domain exploration for shared understanding."
---

# Appendix A: Event Storming, Two Levels

| Level | Question | When to Use | Output |
|-------|----------|-------------|--------|
| **[Big Picture](/reference/ubiq/#big-picture-event-storming)** | "What happens in this [domain](/reference/ubiq/#domain) within our [Mission](/reference/ubiq/#missions)?" | Domain is unfamiliar or the team does not share a mental model | [Domain events](/reference/ubiq/#domain-event), [commands](/reference/ubiq/#command), [pain points](/reference/ubiq/#pain-point), [bounded contexts](/reference/ubiq/#bounded-context), [candidate Issues](/reference/ubiq/#candidate-issue) |
| **[Process / Design](/reference/ubiq/#process-design-event-storming)** | "How do we design this specific [Feature](/reference/ubiq/#feature)?" | A known Feature has unclear internal flows | Detailed flows, [aggregate design](/reference/ubiq/#aggregate-design), [acceptance criteria](/reference/ubiq/#acceptance-criteria) |

**Big Picture** discovers what problems exist. Use it when you need shared understanding. Do not use it if you already have it.

**Process / Design** solves known problems. It is a design tool, not a discovery tool.