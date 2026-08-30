---
title: "Operation — In Practice"
weight: 60
sitemap:
  priority: 0.8
meta:
  description: "How to run Operation: monitoring, incident response, on-call, SLOs, production readiness, cost management, and friction budget."
---

# Operation — In Practice

Operation keeps the system reliable, observable, and cost-effective. The guide covers what each operational practice *is*. This page covers how to apply them.

## Relationship Map

Operation is a continuous loop. Production data flows back into Direction and Delivery:

```
Monitoring (3 tiers) ──► Incident Response ──► Post-Mortem ──► Feedback
      │                                                          │
      │                                                          ├── Direction: user behaviour changes Missions
      │                                                          ├── Delivery: incidents add Stories or tech debt
      │                                                          ├── Operation: cost trends trigger FinOps
      │                                                          └── Operation: SLO breaches shift to reliability
      │
      ├── On-call rotation (primary + secondary)
      ├── SLOs + error budget (features vs reliability)
      ├── Production Readiness checklist (new services)
      ├── Cost management (once per cycle, 15 min)
      └── Friction budget (estimated at retro)
```

## Default Path + Branching

**Default — in production:**

```
Monitoring (3 tiers) + On-call rotation + SLO tracking
  → Incident response when needed
  → Post-mortem after significant incidents
  → Cost review once per cycle
  → Friction budget estimate at retro
```

**Pre-PMF or no production users:**

```
Skip monitoring infrastructure. Watch for pain manually.
Skip on-call rotation (everyone is on-call).
No SLOs. Measure latency when something feels slow.
Skip cost management (cost is negligible).
```

**Incident-heavy period:**

```
Tighten alerting → Reduce toil → Add runbooks → 
Post-mortem every incident → Action items → Process improvement
```

**Cost growing faster than users:**

```
Add cost review → Identify largest driver → Optimize or cap →
Track cost per user → Act when one service exceeds 20% of budget
```

## Role Map

| Activity | Primary | Supports | When |
|---|---|---|---|
| Monitoring instrumentation | SRE / Platform Engineer | Software Engineer | Before first production traffic |
| Dashboard creation | SRE / Platform Engineer | Product Owner | One per audience — do not mix |
| Alert configuration | SRE / Platform Engineer | Security Engineer | Alert on symptoms, not causes |
| Incident response (primary) | On-call engineer | SRE | When alert fires |
| Incident response (escalation) | SRE / Incident Manager | — | When primary does not respond |
| Post-mortem facilitation | Incident Manager | Whole team | 24-48 hours after incident |
| On-call rotation management | SRE / Engineering Lead | — | Continuous |
| Toil tracking and automation | Software Engineer | SRE | When toil exceeds 30% |
| SLO definition | SRE / Product Owner | — | Once per service; review quarterly |
| Error budget tracking | SRE | Product Owner | Decides features vs reliability |
| Production Readiness review | Software Engineer | SRE, Security Engineer | Before new service receives traffic |
| Cost review | FinOps Engineer | Rotating team member | 15 min, once per cycle |
| Friction budget estimation | Whole team | — | At retro; target under 20% |

## Technique Table

| Technique | Use When | Output | Skill |
|---|---|---|---|
| **Issue Triage** | Incoming production issues | Classified issue with owner and next step | [`issue-guide`](https://github.com/jorpo-co/modern-xp-tools) |
| **Incident Post-Mortem** *(coming)* | After significant incidents | Action items (1-3) with owners and due dates | Thin skill planned |
| **Incident Response** *(coming)* | Production incident requires action | Service restored, timeline documented | Thin skill planned |
| **Feature Flag Lifecycle** *(coming)* | Managing flags from creation to removal | Verified off → canary → rollout → removal story | Thin skill planned |

## Procedure Table

| Procedure | What It Does | Wiki Link |
|---|---|---|
| **Incident Triage** *(coming)* | Classify by severity, assign, respond | Wiki — planned |
| **Incident Post-Mortem** *(coming)* | Timeline, action items, follow-through | Wiki — planned |
| **On-Call Handover** *(coming)* | 15-minute sync at rotation change | Wiki — planned |
| **Implementation Pipeline** | Includes deploy, monitoring handoff, flag lifecycle | [`delivery/procedures/implementation-pipeline.md`](https://github.com/jorpo-co/modern-xp-wiki) |

## SLO Design

| Service Type | Primary SLO | Secondary SLO | Window |
|---|---|---|---|
| API (user-facing) | p95 latency < 500ms | Error rate < 1% | 30-day rolling |
| API (internal) | p99 latency < 1s | Uptime 99.9% | 30-day rolling |
| Batch job | Completion rate > 99% | — | Per execution |
| Database | Query p99 < 100ms | Uptime 99.99% | 30-day rolling |
| Web application | Page load p95 < 2s | Error rate < 0.5% | 30-day rolling |
| Mobile app | API success rate > 99% | Crash-free rate > 99.5% | 7-day rolling |

Do not track more than 3 SLOs per service. Use the error budget: full → ship features. Low → fix reliability.

## Incident Severity

| Level | Meaning | First Response | Fix Target |
|---|---|---|---|
| SEV1 | User-facing outage | 15 min | 4 hours |
| SEV2 | Degraded subset of users | 30 min | 8 hours |
| SEV3 | No user impact, fix required | 1 business day | Next release |
| SEV4 | Cosmetic or internal | 1 week | When scheduled |

Write a runbook for every incident type that repeats twice. If the same incident happens twice without a runbook, that is a process gap.

## On-Call Design

| Element | Recommended | Adjust When |
|---|---|---|
| Rotation length | 1 week | High incident frequency → shorter |
| Team size per rotation | Minimum 2 (primary + secondary) | Small team → adjust, but always 1 primary + 1 secondary |
| Secondary escalation | Name a person, not a team | — |
| Handover | 15-minute sync at rotation change | — |
| Toil threshold | >30% → automate. >50% → rotate more people or change system. | — |

## Production Readiness Checklist

| Check | Owner |
|---|---|
| Logs are collected and searchable | Software Engineer |
| Metrics are visible on the team dashboard | Software Engineer |
| Alerts exist for likely failure modes | SRE |
| Deploy process is documented and repeatable | Platform Engineer |
| Rollback process is documented and tested | Platform Engineer |
| Data backup strategy is defined | SRE |
| Secrets and credentials are not in the code repository | Security Engineer |
| Dependencies are documented | Software Engineer |
| Contact for each dependency is known | Software Engineer |
| Runbook exists for known failure modes | SRE |

**When to skip:** Internal tools with fewer than 10 users. Short-lived experiments.

## Cost Review

| Item | Question | Action If |
|---|---|---|
| Total infrastructure cost | Trend flat or growing? | Growing faster than users → investigate |
| Cost per user | Going up or down? | Going up → check for waste |
| Cost per service | Any service exceeds 20% of budget? | Yes → optimise or migrate |
| Largest cost driver | What is the single biggest line item? | Unknown → add cost tagging |

Duration: 15 minutes. One person reviews. Not a meeting.

## Artifact Table

| Artifact | Produced By | Consumed By | Format |
|---|---|---|---|
| **Runbook** | SRE / Software Engineer | On-call rotation | Documented procedure for each failure mode |
| **SLO Definition** | SRE + Product Owner | Error budget, dashboard | Target metrics with measurement window |
| **Error Budget** | SRE | Product Owner, Engineering Lead | Gap between target and actual |
| **Operations Dashboard** | SRE / Platform Engineer | Whole team | One per audience — do not mix |
| **Incident Post-Mortem Report** | Incident Manager | Process Improvement | Timeline, root cause, action items |
| **Production Readiness Checklist** | Software Engineer | SRE, Security Engineer | Verified per new service |
| **Cost Review** | FinOps Engineer | Team | Trend analysis, biggest drivers, actions |
| **Friction Budget Estimate** | Whole team at retro | Process Improvement | Estimated % — not precisely measured |

## Skip Conditions

| Activity | Skip When |
|---|---|
| Full monitoring instrumentation | Pre-PMF. Watch for pain manually. |
| Formal incident response | Team of 2-3, no external users. Fix it, talk after. |
| Formal post-mortem | Minor incident with clear cause and no recurrence risk. |
| On-call rotation | No production users. Everyone is on-call anyway. |
| SLO tracking | Pre-revenue, team <5. Measure latency when something feels slow. |
| Full production readiness checklist | Internal tools with <10 users. Short-lived experiments. |
| Cost management | Cost is below a threshold the team sets. |
| Friction budget estimation | Team already discusses process costs naturally. |
| Runbook writing | Incident happened once and is unlikely to recur. Write it after the second time. |

Alert on symptoms, not causes. If an alert does not require a human to act, remove it. If a practice takes longer than the value it creates, remove it.