---
title: "Overview"
weight: 0
layout: single
description: "A compass for agile teams: 8 core principles for shipping small, learning fast, and containing complexity. Built on the Agile Manifesto."
---

# Modern XP: A Field Guide

Modern XP is a compass to guide your vision. Use what fits. Skip what does not. If a practice slows your work more than it helps, remove it.

Written in Simple Technical English (flavour). No Fluff. No Jargon.


## Core Principles

1. **Ship small, learn fast.** The smallest valuable unit of work, delivered independently, is better than the most perfectly planned batch.
2. **Feedback is the only ground truth.** Production data, user behavior, and team sentiment override any plan.
3. **Process has cost.** Every gate, output review, and meeting consumes energy. If a process element does not earn more than it costs, remove it.
4. **Unknowns kill delivery.** Find them early. Spike before you commit.
5. **Complexity must be contained.** Deliberate boundaries on scope, consistency, and responsibility prevent systems that the team can change and maintain.
6. **Teams make predictable errors.** Catch them with automation and peer review, not process overhead.
7. **Judgment over rules.** No rule applies in all contexts. The team decides when to follow, bend, or break any practice here.
8. **Prepare to succeed, plan to fail.** Prepare enough to maintain forward momentum, then Stop. Concrete plans belong only in failure-mode scenarios. Lightweight orientation beats detailed planning for normal operation.


## Rooted in the Agile Manifesto

This framework builds on the four values of the [Agile Manifesto](https://agilemanifesto.org/) and follows the [twelve Agile Principles](https://agilemanifesto.org/principles.html).

| Agile Value | How This Guide Applies It |
|-------------|------------------------------|
| **Individuals and interactions** over processes and tools | Judgment over rules. Team decides. No gatekeeper between team and stakeholder. Process costs energy. Cut what does not earn its keep. |
| **Working software** over comprehensive documentation | Use Cases are structured but skippable. Feature flags decouple deploy from release. Friction budget caps process at 20%. The only ground truth is shipped, running software. |
| **Customer collaboration** over contract negotiation | Direction revises based on production data, not contracts. Demo sessions show what shipped. Prioritization is conversation, not formula. |
| **Responding to change** over following a plan | Direction is revisable. Roadmap changes freely. Delivery cycle has no fixed duration. Conditions for breaking process are explicit. |

Where this guide contradicts an Agile Manifesto value, the value wins.

Two principles deserve explicit mention because teams often overlook them:

- **Business people and developers work together daily.** Anyone on the team can talk to a stakeholder or user directly. No gatekeepers. No ticket-forwarding.
- **Face-to-face conversation is the most efficient method.** When the team is co-located, favor conversation over tickets. When remote, favor synchronous calls over threaded decision-making for resolving ambiguity.


## How to Use This Guide

This is not a checklist. It is a menu. Read the practices. Decide which ones fit your team, your domain, and your stage. Start minimal. Add structure only when a specific pain shows that you need it.

**When to add a practice:** A concrete, repeated problem exists. Example: "We find integration bugs too often in production" → add CI gates. Not before.

**When to remove a practice:** The time it takes exceeds the value it creates. Track this. If a gate review costs significant effort but catches errors that are quick to fix, remove the gate.
