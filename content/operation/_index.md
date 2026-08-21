---
title: "Operation"
weight: 50
description: "Continuous monitoring, incident response, production feedback loops, and friction budget to keep process costs in check."
---

# Operation and Maintenance

Continuous. Starts after the first Release. Runs across all later Releases.

## Monitoring

Monitor at three tiers: business, application, infrastructure.

- Business: feature adoption, funnel completion, user behavior
- Application: latency, error rate, throughput
- Infrastructure: CPU, memory, disk

Alert on symptoms, not causes. If an alert does not require a human to act, remove it.

One dashboard for stakeholders, one for the team. Do not mix them.

**When to skip:** Pre-product-market fit. Watch for pain manually instead.

## Incident Response

Define severity levels:

| Level | Meaning |
|-------|---------|
| SEV1 | User-facing outage |
| SEV2 | Degraded experience for a subset of users |
| SEV3 | No user impact, fix required |
| SEV4 | Cosmetic or internal only |

Write a runbook for every incident type that repeats. If the same incident happens twice without a runbook, that is a process gap.

Run a blameless post-mortem soon after each incident. Produce one to three action items.

**When to skip:** Team of two to three, no external users. Fix the problem, talk after.

## On-call

Rotate fairly. Document the handover process. Name a secondary escalation for when the primary does not respond.

Track toil. If on-call spends more than 30% of time on repetitive tasks, automate the task. If more than 50%, rotate more people in or change the system.

**When to skip:** No production users. Everyone is on-call anyway.

## Service Levels

Pick one or two metrics that matter most to users. Track them as SLOs. Do not track more than three.

The gap between the SLO and actual performance is the error budget. Use it to decide between features and reliability:

- Error budget full: ship features
- Error budget low: fix reliability

**When to skip:** Team of fewer than five, pre-revenue. Measure latency manually when something feels slow.

## Production Readiness

A new service needs these before it receives production traffic:

- Logging and metric collection
- Alerting for likely failure modes
- A deploy and rollback process
- Backup strategy

Review the checklist at a team meeting. Do not skip items. Add items as the team learns.

**When to skip:** Internal tools with fewer than ten users. Experiments with a short lifespan.

## Production Feedback

Production data flows back to Direction and Delivery:

- User behavior changes Missions or Goals
- Feature adoption creates new Issues or deprioritizes existing ones
- Incidents and bottlenecks add technical debt Stories or process improvements

## Cost Management

One person reviews infrastructure costs once per cycle. A 15-minute review. Not a meeting.

Act when cost grows faster than user growth. Act when one service exceeds 20% of the infrastructure budget.

**When to skip:** Infrastructure cost is below a threshold the team sets.

## Friction Budget

Track the time the team spends on process versus in process.

- Process activities: gate reviews, meeting attendance, preparation
- Delivery activities: coding, testing, designing, shipping

Do not measure precisely. Estimate at each retro: "What fraction of our time went to process?" If the answer exceeds 20%, cut one process item.

Cut first: meetings with no written agenda, gates that never fail, reports that no one reads, approvals that are always approved.

**When to skip:** The team already discusses this naturally.