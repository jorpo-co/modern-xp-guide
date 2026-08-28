---
title: "A: Event Storming"
weight: 1
sitemap:
  priority: 0.7
meta:
  description: "Big Picture and Process/Design Event Storming, two levels of domain exploration for shared understanding."
---

# Appendix A: Event Storming, Two Levels

| Level | Question | When to Use | Output |
|-------|----------|-------------|--------|
| **[Big Picture](/ubiq/#big-picture-event-storming)** | "What happens in this [domain](/ubiq/#domain) within our [Mission](/ubiq/#missions)?" | Domain is unfamiliar or the team does not share a mental model | [Domain events](/ubiq/#domain-event), [commands](/ubiq/#command), [pain points](/ubiq/#pain-point), [bounded contexts](/ubiq/#bounded-context), [candidate Issues](/ubiq/#candidate-issue) |
| **[Process / Design](/ubiq/#process-design-event-storming)** | "How do we design this specific [Feature](/ubiq/#feature)?" | A known Feature has unclear internal flows | Detailed flows, [aggregate design](/ubiq/#aggregate-design), [acceptance criteria](/ubiq/#acceptance-criteria) |

**Big Picture** discovers what problems exist. Use it when you need shared understanding. Do not use it if you already have it.

**Process / Design** solves known problems. It is a design tool, not a discovery tool.