---
title: "I: Operation Reference"
weight: 9
sitemap:
  priority: 0.7
meta:
  description: "Reference material for incident severity, runbook template, SLO patterns, on-call rotation, and production readiness."
---

# Appendix I: Operation Reference

## Severity Definitions with Response Time Targets

| Level | Meaning | [First Response](/ubiq/#first-response) | [Fix Target](/ubiq/#fix-target) |
|-------|---------|---------------|------------|
| SEV1 | User-facing outage | 15 minutes | 4 hours |
| SEV2 | Degraded experience for a subset of users | 30 minutes | 8 hours |
| SEV3 | No user impact, fix required | 1 business day | Next release |
| SEV4 | Cosmetic or internal only | 1 week | When scheduled |

The team chooses these targets. Adjust based on user expectations and team size.

## Runbook Template

```
Title: [Incident type name]
Severity: [SEV1/SEV2/SEV3/SEV4]
Symptoms: [What alerts or user reports trigger this runbook]

Steps:
1. Verify the symptom
2. Check the affected components
3. Apply the known fix
4. Verify the fix
5. Communicate status

Escalation: [Who to contact if the steps do not resolve the incident]
```

Write a [runbook](/ubiq/#runbook) for every incident type that repeats twice.

## SLO Design Patterns

| Metric | Typical SLO | Measurement Window |
|--------|-------------|-------------------|
| Service uptime | 99.9% | 30 days rolling |
| p95 latency | 500ms | 5 minutes averaged over 30 days |
| p99 latency | 1s | 5 minutes averaged over 30 days |
| Error rate | <1% of requests | 10 minutes averaged over 30 days |

Do not use the same [SLO](/ubiq/#slo) for every service. A batch job has different targets than an API.

## On-call Rotation Template

| Element | Recommendation |
|---------|---------------|
| [Rotation](/ubiq/#rotation) length | 1 week |
| Team size per rotation | Minimum 2 (primary + [secondary](/ubiq/#on-call)) |
| Secondary escalation | Names a person, not a team |
| [Handover](/ubiq/#rotation) | 15-minute sync at rotation change. Review open incidents and known issues. |

Adjust based on team size and incident frequency.

## Production Readiness Checklist

Before a service receives production traffic:

- [ ] [Logs](/ubiq/#logs) are collected and searchable
- [ ] [Metrics](/ubiq/#metrics) are collected and visible on the team dashboard
- [ ] Alerts exist for likely failure modes
- [ ] Deploy process is documented and repeatable
- [ ] [Rollback](/ubiq/#rollback-plan) process is documented and tested
- [ ] Data backup strategy is defined
- [ ] Secrets and credentials are not in the code repository
- [ ] Dependencies are documented (databases, APIs, third-party services)
- [ ] Contact for each dependency is known
- [ ] [Runbook](/ubiq/#runbook) exists for known failure modes

The team adds items to this list as the system grows.

## Cost Review Template

Review these once per cycle:

| Item | Question |
|------|----------|
| Total infrastructure cost | Is the trend flat or growing? |
| Cost per user | Is it going up or down? |
| Cost per service | Does any service consume more than 20% of the budget? |
| Largest cost driver | What is the single biggest line item? |

Act when cost grows faster than user growth or one service exceeds 20% of the budget.