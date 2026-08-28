---
title: "Issues"
weight: 20
sitemap:
  priority: 0.9
meta:
  description: "Capture, triage, and resolve Problems, Ideas, Questions, and Incidents. Everything starts with an Issue."
---

# Issues

Everything the team does starts with an issue. An issue is a gap between the current state and a desired state. That gap can be a Problem, an Idea, a Question, or an Incident.

Issues come from everywhere: user feedback, production monitoring, stakeholder input, incidents, team ideas, and from Direction discovery. Direction does not generate all Issues. It provides **guiderails**. The Vision defines the class of problems the team exists to solve. Missions name what the team wants to achieve. Within those guiderails, the team discovers Issues: a Problem blocking a Mission, a Question about the domain, an Idea for improvement. Issues also arrive from outside the guiderails, from user reports, market shifts, incidents, and these refine the guiderails over time.

Issues bridge [Direction](/ubiq/#direction) and [Work Items](/ubiq/#work-item). Direction says "what we want to do." Issues say "what specifically stands in the way." Work Items say "how we resolve it."

## Issue Types

| Type | Description | Example |
|------|-------------|---------|
| **Problem** | Something is wrong | "30% of orders miss the delivery window" |
| **Idea** | Something could be better | "Add real-time shipment tracking" |
| **Question** | Something is unknown | "What triggers payment settlement?" |
| **Incident** | Something failed in production | "Payment gateway timeout" |

Issues are freeform. They do not require a specific link, document, or format. What matters is the team understands them and can act on them.

## Issues Produce Work Items

When the team decides to act on an Issue, it becomes a [Work Item](/ubiq/#work-item):

| Issue Resolution | Work Item |
|-----------------|-----------|
| Needs investment, multiple cycles | **[Feature](/ubiq/#feature)** on the [roadmap](/ubiq/#roadmap) |
| Small, one-cycle slice | **[Story](/ubiq/#story)** in the current cycle |
| Unknown blocks resolution | **[Spike](/ubiq/#spike)** to investigate |
| Quick fix, no delivery structure | Resolved directly, Issue closed |

Not every Issue becomes a Work Item. Some get resolved directly: answer a Question, fix a configuration bug, handle an Incident. The Issue closes with its resolution documented.

The Issues backlog holds everything the team is not actively working on. It is the inbox. Everything arrives as an Issue. It moves to a Work Item only when the team decides to act.

## Feedback Generates and Refines

[Production data](/ubiq/#production-data), [user behavior](/ubiq/#user-behavior), monitoring alerts, [stakeholder](/ubiq/#stakeholder) input, and team pain points all produce Issues. This closes the loop:

<!-- ![Feedback Loop](/images/feedback_loop.png) -->

```
Direction → Issues → Work Items → Release → Feedback
                                                ↓
                                          refines Direction
                                                ↓
                                          generates Issues
```

The Issues list never stops growing. The team triages continuously. Some Issues rise to the top and become Work Items. Some resolve themselves. Some wait. And some feedback reshapes the guiderails, changing what the team considers in scope.

## Issue Lifecycle

1. **Capture:** An Issue enters the system. Source can be anyone: team, user, stakeholder, monitoring.
2. **Triage:** The team understands it, labels it (Problem/Idea/Question/Incident), and decides what to do.
3. **Resolve:** Either (a) resolved directly (answer, fix, config change), (b) promoted to a Work Item (Feature, Story, Spike), or (c) parked for later review.
4. **Close:** The Issue is resolved, abandoned (out of scope, superseded), or parked. Closed Issues are searchable but not actionable.