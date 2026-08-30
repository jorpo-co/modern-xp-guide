---
title: "Teams"
weight: 5
sitemap:
  priority: 0.95
meta:
  description: "How Modern XP teams organise: human teams, agentic teams, and the roles that connect practices to people."
---

# Teams

Modern XP works with people, agents, or both. The practices do not change. What changes are the roles in team coordination and work execution.

## Team Topology

Team Topology is a framework for organising teams (from [Team Topologies](https://teamtopologies.com)). Four types exist. Most teams are stream-aligned. The other types are for specific needs.

| Type | Purpose | Size |
|------|---------|------|
| **Stream-aligned** | Owns a business capability end-to-end | 6-12 people |
| **Platform** | Builds internal products for other teams. Self-service model. | 4-8 people |
| **Enabling** | Coaches teams on new capabilities. Dissolves when done. | 2-6 people |
| **Complicated Subsystem** | Owns a high-complexity component. Use sparingly. | 3-7 people |

Every team defines a [Team API](/ubiq/#team-api): services, [SLOs](/ubiq/#slo-service-level-objective), communication channels, change notifications. Without a clear API, teams step on each other.

## Human Teams

A human team is stream-aligned and cross-functional. The team is small enough to hold its work in collective working memory. Anyone can talk to a [stakeholder](/ubiq/#stakeholder) or user directly. No [gatekeepers](/ubiq/#gatekeeper).

### Key Characteristics

- **Stream-aligned.** The team owns a complete [value stream](/ubiq/#value-stream) from start to end. No handoffs.
- **Cross-functional.** Skills needed to ship live inside the team. Engineering, testing, operations, domain knowledge. The team does not wait for another team to do its job.
- **Cognitive load bounded.** Nobody is responsible for more than they can hold. If the domain is too large, split the team. Do not split the person.
- **Psychological safety.** Respect is a performance multiplier. Blameless [retros](/ubiq/#retrospective-retro). Sustainable pace. Collective code ownership. When an incident happens, the team asks "what caused this?" not "who caused it?"

## Agentic Teams

An agentic team runs the same Modern XP practices with agents as executors. The practices stay the same. The execution changes.

### What Stays the Same

- Same [values](/ubiq/#value): Communication, Simplicity, Feedback, Courage, Respect. Same [practices](/ubiq/#practice): TDD, CI, pair programming, retrospectives, [delivery cycles](/ubiq/#delivery-cycle).
- Same [work items](/ubiq/#work-item): Features, Stories, [Use Cases](/ubiq/#use-case), Spikes, Tasks, Tests.
- Same [quality gates](/ubiq/#quality-gates): unit tests, integration tests, SAST, SCA.

### What Changes

- Roles become specialised agents with [system prompts](/ubiq/#system-prompt) and input/output contracts.
- Communication flows through an [Orchestrator](/ubiq/#orchestrator). Hub-and-spoke model. Agents do not talk to each other directly, unless specifically designed to do so.
- State lives in structured workspaces. Artifacts follow defined schemas.
- Processes run from specifications. Each step has a role, an action, an input, an output, and a timeout.
- Error handling is automated. Retries, fallbacks, and escalation to human.

**Use agentic teams when:** scale demands it (>5 active items), speed needs sub-minute responses, consistency is critical, auditability is mandatory, 24/7 coverage is necessary.

**Use human teams when:** work is exploratory, highly creative, or needs deep contextual understanding that agents do not have yet.

## Human-Agent Partnership

The human sets intent and writes the spec. The agent executes autonomously within safety boundaries. No continuous human supervision. The human reviews the output at the gate. Approve, reject, or iterate.

Key rule: do not intervene during agent execution. If intervention is needed, the boundaries or spec are wrong. Fix the spec. Do not fix the execution.

## Roles

A role is a responsibility, not an individual. One individual can hold multiple roles. One [role](/ubiq/#role) can be fulfilled by a person or an agent. The guide describes what each role does. The team decides who fills it.

<div class="roles-tables">

### Core Delivery Roles

| Role | What It Does |
|------|-------------|
| **Product Owner** | Maximises value delivered. Defines vision. Prioritises by impact. Writes acceptance criteria. |
| **Engineering Lead** | Enables predictable delivery. Removes blockers. Sets quality standards. Protects the team. |
| **Software Engineer** | Writes clean, testable code. Uses TDD and [pair programming](/ubiq/#pair-programming). Integrates often. |
| **QA Engineer** | Builds quality in from the start. Automated testing. Acceptance criteria verification. |
| **Release Owner** | Owns release decisions. Manages [feature flags](/ubiq/#feature-flag). Quality gates. Rollback plans. |
| **Data Analyst** | Turns data into decisions. DORA metrics. Flow metrics. [Monte Carlo](/ubiq/#monte-carlo) forecasting. |
| **Documenter** | Makes knowledge persistent and accessible. Woven into every process, not bolted on. |
| **Platform Engineer** | Builds and maintains the internal platform and CI/CD. Self-service model. |
| **Site Reliability Engineer** | Production reliability. Monitoring. Incident response. [Error budgets](/ubiq/#error-budget). |
| **Security Champion** | Embedded security guidance within the team. Guides practices, not gates. |
| **FinOps Engineer** | Financial accountability. Cloud cost optimisation. [Agent cost](/ubiq/#agent-cost) monitoring. |
| **Incident Manager** | Coordinates incident response. Triage and resolution. Focus on recovery, not blame. |

### Coordination and Oversight Roles

| Role | What It Does |
|------|-------------|
| **Agent Orchestrator** | Coordinates agentic work. Routes work between agents. Manages state. Handles failures. Only used when agents execute. In human teams, the Engineering Lead handles this. |
| **Principal Engineer** | Organisation-wide technical direction. Cross-team architecture. Technology selection. Standards. Human-only. |
| **Coach** | Guides XP practices. Moderates retros. Ensures process serves people. Human-only. |

### External Roles

| Role | What It Does |
|------|-------------|
| **Client Stakeholder** | Represents end users. Domain expertise. Real-world context. Feedback. Human-only. |
| **Business Sponsor** | Provides funding. Strategic direction. Approval authority. Human-only. |

</div>

Not all roles are useful in every situation. The team decides when they are needed, and when to remove them.

## Which Model to Use

Teams are not purely human or purely agentic. A human team can use agentic tools for specific activities (test generation, documentation, code review). An agentic team has a human operator for escalation and strategic decisions.

| If your team | Start with |
|---|---|
| Is a brand new team | Human team. Learn the basics of consistent software delivery. Add agentic tools to assist. |
| Values collaboration | Human team. Add agentic tools where needed and when specific pains appear. |
| Needs to scale productivity | Human and Agentic team. Human direction, Agent Orchestrator, plus role agents for mechanical work. |
| Works in an exploratory domain (new product, unknown market) | Human-led. Agents for support tasks, not primary execution. |
| Needs 24/7 coverage or strict audit trails | Agentic. Consistency and logging are strengths. |
