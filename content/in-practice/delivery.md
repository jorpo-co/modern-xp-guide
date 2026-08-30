---
title: "Delivery — In Practice"
weight: 59
sitemap:
  priority: 0.8
meta:
  description: "How to run Delivery: Build, Verify, Review, and Release phases with technique selection, role maps, and procedure links."
---

# Delivery — In Practice

Delivery turns Features into working, released software. The guide covers the Delivery Cycle structure. This page covers how to choose techniques within each phase.

## Relationship Map

Delivery has four sub-phases. They run in sequence with feedback loops:

```
Build → Verify → Review → Release
  │        │         │        │
  │ code   │ tests   │ demo   │ deploy +
  │ done   │ green   │ retro  │ release
  ▼        ▼         ▼        ▼

Feedback: Build ← Verify (test failures → rework)
          Build ← Review (demo feedback → rework)
          Build ← Release (production bug → incident fix)
```

## Default Path + Branching

**Default — routine delivery:**

```
Build (TDD + CI gates) → Verify (automated acceptance tests) 
  → Review (demo + retro) → Release (feature flag + Go/No-Go)
```

**Complex or critical code:**

```
Build (TDD + Pair Programming + CI gates) → Review (same)
  → Release (canary deployment)
```

**Small, safe change (remote team):**

```
Build (async Code Review + CI gates) → Verify (automated only)
  → Review (async demo recording, no retro) → Release (standard)
```

**Pre-PMF / rapid prototyping:**

```
Build (AI-assisted + CI gates only) → Review (no retro)
  → Release (no gate, skip flags for invisible changes)
```

**Pure maintenance:**

```
Build (CI gates only) → Verify (regression tests) → Review (no demo)
  → Release (standard)
```

## Build Phase

### Role Map

| Activity | Primary | Supports | When |
|---|---|---|---|
| TDD | Software Engineer | Pair partner | New logic — default |
| Pair Programming | Software Engineer (pair) | — | Complex or critical code |
| Code Review (async) | Software Engineer (reviewer) | Author | Small changes, remote teams |
| AI-assisted prototyping | Software Engineer | — | Boilerplate, test generation |
| CI pipeline | Platform Engineer | Software Engineer | Every commit |
| Security scanning | Security Engineer | Software Engineer | Every commit (automated) |
| Feature flag creation | Software Engineer | — | Every user-facing change |
| Tech debt refactoring | Software Engineer | — | After release or when debt blocks speed |

### Technique Table

| Technique | Use When | Output | Skill |
|---|---|---|---|
| **TDD (Red-Green-Refactor)** | Behavioural correctness matters — default | Passing tests, testable design | Not available — a practiced skill |
| **Pair Programming** | Complex or critical code; learning | Shared knowledge, fewer defects | Not available — human interaction |
| **Code Review (async)** | Small changes, remote teams | Reviewed code, knowledge transfer | Not available — served by PR tooling |
| **AI-assisted** | Rapid prototyping, boilerplate | Faster output; review required | Referenced in wiki agentic practice |

### Quality Gates (every push, automated)

| Gate | What It Checks | Owner |
|---|---|---|
| Unit tests | Individual functions and methods | Software Engineer |
| Integration tests | Components work together | Software Engineer |
| SAST | Code-level security and quality | Security Engineer |
| SCA | Known dependency vulnerabilities | Security Engineer |
| Secrets scanning | Credentials in code | Security Engineer |

Zero manual gates for routine changes.

## Verify Phase

### Role Map

| Activity | Primary | Supports | When |
|---|---|---|---|
| Acceptance testing (automated Gherkin) | QA Engineer | Software Engineer | Every cycle |
| Security gate verification | Security Engineer | — | Every commit (automated) |
| Regression testing | QA Engineer | Software Engineer | Before release |
| IaC testing | Platform Engineer | — | Infrastructure changes |
| Agentic evals | Agent Orchestrator | QA Engineer | Agent-based features |
| Manual exploratory testing | QA Engineer | — | Complex UI or edge cases only |

### Technique Table

| Technique | Use When | Output | Skill |
|---|---|---|---|
| **Acceptance Testing (Gherkin)** | Default for any non-trivial Story | Passing/failing acceptance tests | Not available |
| **Security Gates** | Every commit | SAST, SCA, secrets scan results | Automated tooling |
| **Regression Testing** | Before every release | Regression test results | Not available |
| **IaC Unit & Contract Tests** | Infrastructure-as-Code changes | Module-level verification | Not available |
| **IaC Integration Tests** | Multi-module infrastructure | Cross-module verification | Not available |
| **IaC Policy as Code** | Compliance requirements | Policy compliance report | Not available |
| **Agentic Evals** | Evaluating AI agent behaviour | Agent performance metrics | Not available |

### Procedure Table

| Procedure | What It Does | Wiki Link |
|---|---|---|
| **Execution Loop** | Per-task build cycle: pick task, TDD, CI, commit, loop | [`quality/procedures/execution-loop.md`](https://github.com/jorpo-co/modern-xp-wiki) |
| **Implementation Pipeline** | Integrate → accept → review → gate → ship | [`delivery/procedures/implementation-pipeline.md`](https://github.com/jorpo-co/modern-xp-wiki) |
| **Setup Test Runner** | Configuring the test framework | [`quality/procedures/setup-test-runner.md`](https://github.com/jorpo-co/modern-xp-wiki) |
| **IaC CI Pipeline** | CI for infrastructure code | [`testing/procedures/iac-ci-pipeline.md`](https://github.com/jorpo-co/modern-xp-wiki) |

## Review Phase

### Role Map

| Activity | Primary | Supports | When |
|---|---|---|---|
| Demo | Software Engineer | Product Owner | Every delivery batch |
| DORA metrics review | Engineering Lead | Whole team | Every review |
| Design quality review | Engineering Lead | Software Engineer | Every review |
| Retrospective facilitation | Rotating team member | Whole team | Every cycle |
| Action item tracking | Owner | Product Owner | After retro |

### Retro Technique Table

| Technique | Best For | Duration |
|---|---|---|
| **Start/Stop/Continue** | General-purpose | 30-45 min |
| **Sailboat** | Finding accelerators and blockers | 45-60 min |
| **4Ls (Liked/Learned/Lacked/Longed For)** | Balanced view | 30-45 min |
| **Timeline** | Incidents or high-change iterations | 45-60 min |

### Procedure Table

| Procedure | What It Does | Wiki Link |
|---|---|---|
| **Retrospective** *(coming)* | Set stage, gather data, generate insights, decide actions | Wiki — planned |
| **Iteration Review** *(coming)* | Demo, DORA review, design quality, retro | Wiki — planned |
| **Implementation Pipeline** | Includes async engineer review step | [`delivery/procedures/implementation-pipeline.md`](https://github.com/jorpo-co/modern-xp-wiki) |

## Release Phase

### Role Map

| Activity | Primary | Supports | When |
|---|---|---|---|
| Go/No-Go decision | Release Owner | QA Engineer, Product Owner | Before flipping the flag |
| Deployment | Platform Engineer | Release Owner | After Go decision |
| Feature flag enablement | Release Owner | Software Engineer | Business decision |
| Canary analysis | SRE | Platform Engineer | After canary enablement |
| Rollback (if needed) | Platform Engineer | SRE | If metrics degrade |

### Deployment Strategy

| Strategy | Use When | Rollback |
|---|---|---|
| **Feature Flag (off by default)** | Default for user-facing changes | Flip flag off |
| **Canary** | Gradual rollout; moderate risk | Stop canary, redirect traffic |
| **Blue-Green** | Zero-downtime required | Switch traffic to old environment |
| **Rolling** | Stateless services | Revert deployment |

**Skip Feature Flag when:** Change is invisible to users (refactor, performance fix, logging) or pre-PMF shipping to <100 users.

### Go/No-Go Gate

| Domain | Check | Owner |
|---|---|---|
| Engineering | Stable? Rollback plan verified? | Release Owner |
| QA | Acceptance tests passed? Flag behaviour verified on and off? | QA Engineer |
| Security | Scan passed (SAST, SCA, secrets)? | Security Engineer |
| Business | Marketing, docs, support aligned? | Product Owner |

**Skip the gate for:** Low-risk releases (feature flag, dark launch, internal tool). The gate prevents disaster. It does not add ceremony to safe changes.

## Artifact Table

| Artifact | Produced In | Consumed By | Format |
|---|---|---|---|
| **Task Specification** | Work Items | Build Phase | Inputs, outputs, constraints, DoD |
| **Test Results** | Build CI | Verify Phase | Pass/fail per commit |
| **Acceptance Test Results** | Verify | Review | Gherkin scenario outcomes |
| **DORA Metrics** | Review | Retrospective, Process Improvement | Deployment frequency, lead time, change failure rate, time to restore |
| **Release Decision Record** | Release | Operation | Go / Conditional Go / No-Go with rationale |
| **Feature Flag Inventory** | Release | Operation, flag removal | Toggle keys, status, owner |

## Skip Conditions

| Activity | Skip When |
|---|---|
| **Build** | |
| TDD | Trivial change; AI-assisted prototyping |
| Pair Programming | Simple code; async review is sufficient |
| Code Review | Pairing already covered it; trivial change |
| Feature Flag | Change is invisible to users; pre-PMF (<100 users) |
| **Verify** | |
| Acceptance testing | Trivial work with no acceptance criteria |
| Security gates | Internal-only tool, no sensitive data |
| Manual exploratory testing | Full automated coverage |
| **Review** | |
| Demo | No stakeholders available; internal-only change |
| Retrospective | Cycle is small; team discusses improvements naturally |
| DORA review | No instrumentation yet |
| **Release** | |
| Go/No-Go gate | Low-risk release (feature flag, dark launch, internal tool) |
| Rollback plan | Routine deploy with flag — flip flag off is the rollback |
| Canary deployment | Internal tool with limited blast radius |

If a 2-line config change needs TDD + pair programming, the process is wrong, not the developer.