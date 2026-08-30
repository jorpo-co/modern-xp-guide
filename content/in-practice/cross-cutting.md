---
title: "Cross-Cutting — In Practice"
weight: 61
sitemap:
  priority: 0.8
meta:
  description: "Governance, principles, policies, and metrics that apply across every Modern XP stage."
---

# Cross-Cutting — In Practice

Some practices apply across every stage. Governance wraps Direction, Issues, Work Items, Delivery, and Operation. It does not sequence after them — it is active continuously.

## Relationship Map

```
Governance (metastage)
    │
    ├── Principles — 8 core principles shape every stage
    ├── Policies — 13 policies with clear enforcement
    ├── Metrics — DORA 4, flow metrics, quality metrics
    ├── Process Improvement — retro actions drive improvement
    └── Friction Budget — process costs capped at 20%
```

Process Improvement (from retro actions) adjusts how every stage operates over time.

## Principles Applied Per Stage

| Principle | In Direction | In Issues | In Work Items | In Delivery | In Operation |
|---|---|---|---|---|---|
| **Ship small, learn fast** | One Mission at a time | One Issue at a time | One Aggregate per Use Case | Smallest valuable batch per cycle | Deploy incrementally; canary before rollout |
| **Feedback is ground truth** | Production data changes Missions | User reports generate Issues | Data beats opinion in prioritisation | DORA metrics, demo feedback, production signals | Monitoring and incidents guide everything |
| **Process has cost** | Do not explore if domain is understood | Do not debate type when path is clear | Do not write Use Cases for trivial work | Skip TDD for config changes; skip gate for low-risk | Remove alerts that never fire |
| **Unknowns kill delivery** | Spike unknowns during exploration | Spike when root cause is unknown | Spike before committing to a Feature | Spike if acceptance criteria are unclear | Investigate root cause before treating symptoms |
| **Complexity contained** | Bounded contexts via Context Mapping | — | One Aggregate per Use Case | Application layer coordinates between Aggregates | Runbooks contain operational complexity |
| **Teams make predictable errors** | — | — | Peer review catches spec gaps | Automated CI gates catch integration errors | Runbooks prevent repeat incidents |
| **Judgment over rules** | Skip Event Storming if domain is shared | Skip formal triage if type is obvious | Skip Use Case if Story is clear | Skip any technique that does not fit | Skip any practice that does not fit team size |
| **Prepare to succeed, plan to fail** | Do enough discovery, then stop | — | Impact-rank; do not estimate by default | Release plans exist only for failure scenarios | Rollback plans exist only for failure |

## Policy Table

| Policy | Applies To | What It Means | Enforced By |
|---|---|---|---|
| **No Broken Code on Main** | Delivery (Build) | Every commit must pass CI. Red build is top priority. Revert if not fixed in minutes. | CI pipeline (automated) |
| **Feature Flag Off by Default** | Delivery (Release) | Every user-facing change deploys behind a flag, off by default. | Release Owner |
| **No Gatekeeper** | All stages | Any team member can talk to a stakeholder directly. No ticket-forwarding. | Team culture |
| **Face-to-face first** | All stages | Co-located: conversation beats tickets. Remote: sync call beats threaded decision. | Team culture |
| **One Aggregate per Use Case** | Work Items | Do not cross aggregate boundaries in one Use Case. Split the Story. | Code Review |
| **No Future bucket** | Work Items (Roadmap) | Roadmap has Now and Next only. Ideas live in Issues. | Product Owner |
| **No estimates by default** | Work Items | Impact-rank instead. Estimate only for external commitments. | Whole team |
| **Tests during Build** | Delivery (Build) | Tests written during Build, not after. They define "done." | QA Engineer |
| **No manual-only testing** | Delivery (Verify) | Automation is default. Manual is exception for complex UI only. | QA Engineer |
| **Alert on symptoms** | Operation (Monitoring) | If an alert does not require action, remove it. | SRE |
| **One dashboard per audience** | Operation (Monitoring) | One for stakeholders, one for the team. Do not mix. | SRE |
| **Error budget decides** | Operation (SLOs) | Full → ship features. Low → fix reliability. | Product Owner + SRE |
| **Production Readiness mandatory** | Operation | New service must pass checklist before traffic. | SRE, Security Engineer |
| **Friction Budget <20%** | All stages | Process activities capped at 20%. Cut one item if exceeded. | Whole team |
| **Judgment over rules** | All stages | No rule applies in all contexts. Team decides when to bend or break. | Whole team |

## Process Improvement

```
Retro → 1-3 items → Hypothesis → Owner → Timeline → Measure
  → Next retro: keep / adjust / discard
```

| Element | How It Works |
|---|---|
| Source | Retrospective action items |
| Hypothesis | "If we do X, then Y will improve" |
| Owner | One person per item |
| Timeline | One cycle or by a specific date |
| Measurement | Track Y before and after |
| Review | Next retro — keep, adjust, or discard |

**Common improvements by stage:**

| Stage | Typical Items |
|---|---|
| Direction | "Add domain exploration before Features" / "Shorten mission review cadence" |
| Issues | "Define SEV levels explicitly" / "Add automated alert → Issue capture" |
| Work Items | "Write acceptance criteria before building" / "Stop estimating" |
| Delivery | "Reduce CI build time" / "Add SAST gate" / "Timebox retro" |
| Operation | "Write missing runbook for X" / "Reduce toil by automating Y" / "Tune noisy alert" |

## DORA Metrics

| Metric | What It Measures | Where | Target Signal |
|---|---|---|---|
| **Deployment frequency** | How often the team deploys | Release | Increasing over time |
| **Lead time** | Time from commit to production | Build → Release | Decreasing over time |
| **Change failure rate** | % of deployments that cause failure | Release | Low and stable |
| **Time to restore** | Time to recover from failure | Incident Response | Decreasing over time |

**Skip when:** Pre-PMF, team of 2-3, no production users.

## Friction Budget Per Stage

| Stage | Process Activities (count towards 20%) | Delivery Activities |
|---|---|---|
| Direction | Workshops, review meetings | Productive discovery |
| Issues | Triage meetings, classification debates | Direct resolution |
| Work Items | Use Case writing, specification meetings | Building, coding |
| Delivery | Gate reviews, demo prep, retro facilitation | Coding, testing, shipping |
| Operation | Post-mortems, cost reviews, handover | Monitoring, incident response, automation |

**Cut first when over budget:** Meetings with no agenda, gates that never fail, reports no one reads, approvals always approved.

## Agentic Roles

| Role | Active In | What They Do |
|---|---|---|
| **Agent Orchestrator** | All stages | Composes specifications, runs execution in agentic mode |
| **Software Engineer** | Specify, Build, Verify, Review, Operate | Writes code, runs TDD, pairs, integrates, deploys |
| **QA Engineer** | Specify, Verify, Review | Defines acceptance criteria, runs acceptance tests |
| **Product Owner** | Discover, Specify, Review | Ranks backlog, defines Features, release decisions |
| **Release Owner** | Review, Ship | Deployment pipeline, Go/No-Go, release coordination |
| **Site Reliability Engineer** | Operate | Monitors, handles incidents, on-call, SLOs |
| **Platform Engineer** | Build, Ship | CI/CD pipeline, infrastructure, deployment |
| **Engineering Lead** | Discover, Governance | Quality standards, architecture decisions |
| **Security Engineer / Champion** | All stages | Security gates, vulnerability management |
| **FinOps Engineer** | Operate | Cost management, budget tracking |
| **Incident Manager** | Operate | Incident coordination, post-mortem facilitation |
| **Data Analyst** | Discover, Operate | Production data signals for Direction |
| **Documenter** | All stages | ADRs, runbooks, institutional knowledge |

## Procedure Table

| Procedure | What It Does | Wiki Link |
|---|---|---|
| **Adopting Modern XP** | Onboarding a team to the methodology | [`planning/procedures/adopting-modern-xp.md`](https://github.com/jorpo-co/modern-xp-wiki) |
| **Process Improvement** | Continuous improvement baked into every iteration | [`quality/practices/process-improvement.md`](https://github.com/jorpo-co/modern-xp-wiki) |

## Artifact Table

| Artifact | Produced By | Consumed By | Format |
|---|---|---|---|
| **DORA Metrics** | CI/CD pipeline + incident tracking | Iteration Review | Dashboard per cycle |
| **Flow Metrics** | Work tracking system | Iteration Review | Throughput, cycle time, WIP |
| **Definition of Done** | Team agreement | Acceptance Testing, Review | Shared checklist |
| **Tech Debt Register** | Software Engineer | Iteration Planning | Known debt with size and impact |
| **Friction Budget Estimate** | Whole team at retro | Process Improvement | Estimated % — not precise |
| **ADR** | Software Engineer | Architecture evolution | Context, options, trade-offs, decision |

## Skip Conditions

| Activity | Skip When |
|---|---|
| DORA measurement | Pre-PMF, team <5, no production users |
| Definition of Done checklist | Team of 2-3 knows implicitly what done means |
| Tech Debt Register | No known debt; exploration mode |
| Friction Budget estimation | Team discusses process costs naturally |
| Formal Process Improvement tracking | Action items followed up informally |
| Agentic role assignment | Team is not operating in agentic mode |
| ADR writing | Decision is routine, reversible, or has no alternatives |

Use what fits. Skip what does not. If a policy slows the work more than it helps, suspend it.