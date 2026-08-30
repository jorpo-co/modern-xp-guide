---
title: "Overview"
weight: 0
layout: single
sitemap:
  priority: 1.0
meta:
  description: "A compass for agile teams: 8 core principles for shipping small, learning fast, and containing complexity. Built on the Agile Manifesto."
---

# Modern XP: A Field Guide

Modern XP is a compass to guide your vision. Use what fits. Skip what does not. If a practice slows your work more than it helps, remove it.

Written in Simplified Technical English (flavour). No fluff. No bull.


## Reasoning

Software delivery is getting faster. AI agents write and ship code at machine speed. Speed does not replace discipline. It exposes it.

An agent amplifies whatever process it runs inside. Give it small batches, feedback loops, and clear boundaries and it compounds care. Give it ambiguity and it compounds chaos. Modern XP is the discipline layer for that speed: small units stay shippable, production data stays authoritative, judgment stays human.

The practices apply whether the hands are human or agentic. What changes is execution. The discipline does not.


## Core Principles

1. **Ship small, learn fast.** The smallest valuable unit of work, delivered independently, is better than the most perfectly planned batch.
2. **[Feedback](/ubiq/#feedback) is the only ground truth.** [Production data](/ubiq/#production-data), [user behaviour](/ubiq/#user-behavior), and [team sentiment](/ubiq/#team-sentiment) override any plan.
3. **[Process](/ubiq/#process) has cost.** Every [gate](/ubiq/#gate), output [review](/ubiq/#review), and meeting consumes energy. If a process element does not earn more than it costs, remove it.
4. **[Unknowns](/ubiq/#unknowns) kill delivery.** Find them early. [Spike](/ubiq/#spike) before you commit.
5. **Complexity must be contained.** Deliberate boundaries on scope, consistency, and responsibility produce systems that the team can change and maintain.
6. **Teams make predictable errors.** Catch them with automation and peer review, not process overhead.
7. **[Judgment over rules](/ubiq/#judgment-over-rules).** No rule applies in all contexts. The team decides when to follow, bend, or break any practice here.
8. **Prepare to succeed, plan to fail.** Prepare enough to maintain forward momentum, then Stop. Concrete plans belong only in failure-mode scenarios. Lightweight orientation beats detailed planning for normal operation.


## Rooted in the Agile Manifesto

This framework builds on the four values of the [Agile Manifesto](https://agilemanifesto.org/) and follows the [twelve Agile Principles](https://agilemanifesto.org/principles.html).

| Agile Value | How This Guide Applies It |
|-------------|------------------------------|
| **Individuals and interactions** over processes and tools | Judgment over rules. Team decides. No gatekeeper between team and stakeholder. Process costs energy. Cut what does not earn its keep. |
| **[Working software](/ubiq/#working-software) over comprehensive documentation** | [Use Cases](/ubiq/#use-case) are structured but skippable. [Feature flags](/ubiq/#feature-flag) decouple deploy from release. [Friction budget](/ubiq/#friction-budget) caps process at 20%. The only ground truth is shipped, running software. |
| **Customer collaboration** over contract negotiation | [Direction](/ubiq/#direction) revises based on [production data](/ubiq/#production-data), not contracts. [Demo](/ubiq/#demo) sessions show what shipped. [Prioritisation](/ubiq/#prioritization) is conversation, not formula. |
| **Responding to change** over following a plan | Direction is revisable. [Roadmap](/ubiq/#roadmap) changes freely. [Delivery cycle](/ubiq/#delivery-cycle) has no fixed duration. Conditions for breaking process are explicit. |

Where this guide contradicts an Agile Manifesto value, the value wins.

Two principles deserve explicit mention because teams often overlook them:

- **Business people and developers work together daily.** Anyone on the team can talk to a [stakeholder](/ubiq/#stakeholder) or user directly. No [gatekeepers](/ubiq/#gatekeeper). No ticket-forwarding.
- **[Face-to-face conversation](/ubiq/#face-to-face-conversation) is the most efficient method.** When the team is co-located, favour conversation over tickets. When remote, favour synchronous calls over threaded decision-making for resolving ambiguity.


## How to Use This Guide

This is not a checklist. It is a menu. Read the practices. Decide which ones fit your team, your domain, and your stage. Start minimal. Add structure only when a specific pain shows that you need it.

**When to add a practice:** A concrete, repeated problem exists. Example: "We find integration bugs too often in production" → add CI gates. Not before.

**When to remove a practice:** The time it takes exceeds the value it creates. Track this. If a gate review costs significant effort but catches errors that are quick to fix, remove the gate.


## Where to Start

Do not adopt everything here. Start with the smallest set that keeps the team moving:

- One [Mission](/ubiq/#missions). What the team works towards now.
- One [Goal](/ubiq/#goals). The next concrete outcome.
- An [Issues](/ubiq/#issue) backlog. Capture everything. Triage continuously.
- Ship one small thing. Learn from what happens. Repeat.

Add a practice only when a specific, repeated problem names it. The biggest mistake is adopting the whole menu at once.
