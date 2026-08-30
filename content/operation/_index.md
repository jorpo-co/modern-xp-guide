---
title: "Operation"
weight: 50
sitemap:
  priority: 0.9
meta:
  description: "Continuous monitoring, incident response, production feedback loops, and friction budget to keep process costs in check."
---

# Operation and Maintenance

Continuous. Starts after the first Release. Runs across all later Releases.

## Monitoring

Monitor at three tiers: business, application, infrastructure.

- Business: [feature adoption](/ubiq/#feature-adoption), funnel completion, [user behaviour](/ubiq/#user-behavior)
- Application: latency, error rate, throughput
- Infrastructure: CPU, memory, disk

Alert on symptoms, not causes. If an alert does not require a human to act, remove it.

One dashboard for stakeholders, one for the team. Do not mix them.

**When to skip:** Pre-product-market fit. Watch for pain manually instead.

## Incident Response

Define [severity levels](/ubiq/#sev1-4):

| Level | Meaning |
|-------|---------|
| SEV1 | User-facing outage |
| SEV2 | Degraded experience for a subset of users |
| SEV3 | No user impact, fix required |
| SEV4 | Cosmetic or internal only |

Write a [runbook](/ubiq/#runbook) for any incident type the team expects to meet again. The team decides when. If the same incident happens twice without a runbook, that is a process gap.

Run a [blameless post-mortem](/ubiq/#blameless-post-mortem) soon after each incident. Produce one to three action items.

**When to skip:** Team of two to three, no external users. Fix the problem, talk after.

## On-call

[Rotate](/ubiq/#rotation) fairly. Document the handover process. Name a secondary escalation for when the primary does not respond.

Track [toil](/ubiq/#toil). If [on-call](/ubiq/#on-call) spends more than 30% of time on repetitive tasks, automate the task. If more than 50%, rotate more people in or change the system.

**When to skip:** No production users. Everyone is on-call anyway.

## Service Levels

Pick one or two metrics that matter most to users. Track them as [SLOs](/ubiq/#slo-service-level-objective). Do not track more than three.

The gap between the SLO and actual performance is the [error budget](/ubiq/#error-budget). Use it to decide between features and reliability:

- Error budget full: ship features
- Error budget low: fix reliability

**When to skip:** Team of fewer than five, pre-revenue. Measure latency manually when something feels slow.

## Production Readiness

A new service needs these before it receives production traffic. See the full [Production Readiness checklist](/ubiq/#production-readiness):

- [Logging](/ubiq/#logs) and [metric](/ubiq/#metrics) collection
- Alerting for likely failure modes
- A deploy and [rollback](/ubiq/#rollback-plan) process
- Backup strategy

Go through the checklist with the team before the service receives traffic. Add items as the team learns.

**When to skip:** Internal tools with fewer than ten users. Experiments with a short lifespan.

## Production Feedback

[Production data](/ubiq/#production-data) flows back to [Direction](/ubiq/#direction) and [Delivery](/ubiq/#delivery):

- [User behaviour](/ubiq/#user-behavior) changes [Missions](/ubiq/#missions) or [Goals](/ubiq/#goals)
- [Feature adoption](/ubiq/#feature-adoption) creates new [Issues](/ubiq/#issue) or deprioritises existing ones
- [Incidents](/ubiq/#incident) and bottlenecks add [technical debt](/ubiq/#technical-debt) Stories or process improvements

## Cost Management

One person reviews infrastructure [costs](/ubiq/#cost-management) once per cycle. A 15-minute review. Not a meeting.

Act when cost grows faster than user growth. Act when one service exceeds 20% of the infrastructure budget.

**When to skip:** Infrastructure cost is below a threshold the team sets.

## Friction Budget

Track the time the team spends on process versus in process. The [Friction Budget](/ubiq/#friction-budget) names the two sides:

- [Process activities](/ubiq/#process-activities): gate reviews, meeting attendance, preparation
- [Delivery activities](/ubiq/#delivery-activities): coding, testing, designing, shipping

Do not measure precisely. Estimate at each [retro](/ubiq/#retrospective-retro): "What fraction of our time went to process?" If the answer exceeds 20%, cut one process item.

Cut first: meetings with no written agenda, [gates](/ubiq/#gate) that never fail, reports that no one reads, approvals that are always approved.

**When to skip:** The team already discusses this naturally.