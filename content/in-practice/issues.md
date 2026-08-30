---
title: "Issues — In Practice"
weight: 57
sitemap:
  priority: 0.8
meta:
  description: "How to handle Issues: surface, classify, triage, and route Problems, Ideas, Questions, and Incidents to the right track."
---

# Issues — In Practice

Everything starts with an Issue. The guide covers Issue types and lifecycle. This page covers how to handle them.

## Relationship Map

Issues bridge Direction and Work Items. They also feed back into Direction when they reveal a problem with the team's scope:

```
Direction (guiderails)
    │
    ▼
Issues Backlog   ← captured from everywhere
    │                  user feedback, monitoring, stakeholders,
    │                  incidents, team ideas
    │
    ├── Resolved directly (answer question, fix config, close incident)
    │
    └── Promoted to Work Item
           │
           ▼
       Delivery → Production Feedback
                      │
                      ├── generates new Issues
                      └── refines Direction guiderails
```

The Issues backlog never stops growing. The skill is continuous triage, not clearing it to zero.

## Default Path + Branching

**Default — any incoming Issue:**

```
Capture → Triage → Decide → Act (resolve or promote) → Close
```

**Incident (production failure):**

```
Capture → Triage → Fix immediately → Post-mortem → 
  ├── Close (one-off)
  └── Promote to Problem (recurring pattern) → Feature or Spike
```

Incidents skip the normal queue. Fix first, classify after.

**Quick question:**

```
Capture → Triage → Direct research → Answer → Close
```

No Work Item needed.

**Problem with unknown root cause:**

```
Capture → Triage → Spike → 
  ├── Root cause found → Feature or Story to fix
  └── Hypothesis killed → Close, document finding
```

Spike is the tool for unknowns. Never commit to fixing a Problem whose root cause you do not understand.

**Infeasible or out-of-scope Idea:**

```
Capture → Triage → Out of scope → Close promptly
```

Do not let Ideas linger. Close decisively when they clearly do not fit.

**Issue that refines Direction:**

```
Capture → Triage → Direction signal → Escalate to Direction review
```

When the same Problem surfaces repeatedly, the guiderails may need adjustment.

## Role Map

| Activity | Primary | Supports | When |
|---|---|---|---|
| Capture | Anyone | — | Any time |
| Triage — classify | Product Owner | Software Engineer | Daily or on-demand |
| Triage — severity | Incident Manager | SRE, Security Engineer | On receipt for incidents |
| Direct fix | Software Engineer | — | When root cause is clear |
| Promote to Work Item | Product Owner | Engineering Lead | When Issue is worth investing in |
| Close | Whoever resolved it | Product Owner | After resolution |
| Post-mortem | Incident Manager | Whole team | 24-48 hours after incident |
| Direction escalation | Product Owner | Engineering Lead | Pattern reveals guiderail problem |

## Technique Table

| Technique | Use When | Output | Skill |
|---|---|---|---|
| **Issue Triage** | Any incoming unplanned work | Classified Issue with type, severity, owner, next step | [`issue-guide`](https://github.com/jorpo-co/modern-xp-tools) |
| **Issue Control Workflow** | Full lifecycle management | Event-driven lifecycle: capture → triage → resolve → close | Referenced by issue-guide |
| **Incident Post-Mortem** | After a significant incident | Blameless analysis, 1-3 action items with owners | Not yet available |
| **Pattern Recognition** | Same Issue type recurs | Problem-to-Feature promotion, process improvement | Not yet available |

## Procedure Table

| Procedure | What It Does | Wiki Link |
|---|---|---|
| **Issue Triage** *(coming)* | Classify incoming issue, assess severity, assign owner, decide action | Wiki — planned |
| **Incident Post-Mortem** *(coming)* | Timeline reconstruction, root cause, action item tracking | Wiki — planned |
| **Adopting Modern XP** | Onboarding a team to the methodology | [`planning/procedures/adopting-modern-xp.md`](https://github.com/jorpo-co/modern-xp-wiki) |

## Artifact Table

| Artifact | Produced By | Consumed By | Format |
|---|---|---|---|
| **Issue Card** | Issue Guide session or manual capture | Backlog, Work Item creation | Markdown: type, description, source, next step |
| **Problem Card** | Issue Guide session | Feature, Spike | Structured: title, impact, area, suspected cause |
| **Idea Card** | Issue Guide session | Feature | Structured: current flow, desired flow, success measure |
| **Question Card** | Issue Guide session | Research task | Structured: unknown, why it matters, where to look |
| **Incident Card** | Issue Guide session or on-call tool | Post-mortem, Problem | Structured: severity, timeline, services, status |
| **Incident Post-Mortem Report** | Post-mortem session | Action item tracking | Timeline, root cause, action items |
| **Issues Backlog** | Continuous | Prioritisation, Work Items | List of open Issues not yet acted on |

## Skip Conditions

| Activity | Skip When |
|---|---|
| Full Issue card | Issue is trivial. A one-line note is fine. Issues are freeform. |
| Formal triage meeting | Team is small (≤3). Conversation replaces formal triage. |
| Issue type classification | Type is obvious to everyone. Do not debate when path is clear. |
| Post-mortem | Minor incident with clear root cause and no recurrence risk. |
| Pattern recognition | Issues are one-off and unrelated. |
| Escalation to Direction | Issue clearly fits within existing guiderails. |

Issues are freeform. If a one-line Issue captures what needs to happen, that is enough.