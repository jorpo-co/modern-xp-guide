---
title: "Direction — In Practice"
weight: 56
sitemap:
  priority: 0.8
meta:
  description: "How to choose and combine Direction practices: Vision, Missions, Goals, and Domain Exploration techniques."
---

# Direction — In Practice

Direction gives the team a shared understanding of where to go and why. The guide covers what Direction *is*. This page covers how to *choose*.

## Relationship Map

Direction cascades. Each step narrows scope:

```
Vision → Missions → Goals → Domain Check → Issues

Vision:     long-term problem the team exists to solve
Missions:   what the team works towards now
Goals:      next 1-2 concrete outcomes
Domain:     unfamiliar domain or disagreement? Insert exploration here
Issues:     observations from exploration become candidate Issues
```

The Vision changes slowly. Missions change when the environment shifts. Goals change every cycle. Domain Exploration is inserted only when needed. It does not block the cascade.

## Default Path + Branching

**Default — stable domain:**

```
Vision → Missions → Goals → Record direction → Begin Issue capture
```

**Domain unfamiliar or team disagrees:**

```
Vision → Missions → Domain Exploration → Goals → Record direction → Issues
```

Exploration comes between Missions and Goals. Missions define the scope to explore. Goals emerge from exploration findings.

**Clear direction from leadership:**

```
Skip Vision/Missions → Define Goals from leadership input → Record → Issues
```

**Pre-PMF or early startup:**

```
Minimal Vision → One Mission → One Goal → Ship → Repeat
```

**No disagreement but unclear boundaries:**

```
Vision → Missions → Goals → Context Mapping only → Issues
```

Full Event Storming is heavy when the team already agrees. Context Mapping is lighter when boundaries are the only unknown.

## Role Map

| Activity | Primary | Supports | When |
|---|---|---|---|
| Vision definition | Product Owner | Stakeholders, Principal Engineer | Strategic cycle start |
| Mission definition | Product Owner | Engineering Lead, Business Sponsor | Strategic cycle start |
| Goal setting | Product Owner + Engineering Lead | Whole team | Every cycle |
| Domain Exploration | Engineering Lead | Agent Orchestrator, Product Owner | When domain is unfamiliar |
| Event Storming | Engineering Lead | Whole team + Domain Experts | When shared model is missing |
| Context Mapping | Software Engineer | Platform Engineer, Product Owner | When boundaries are unclear |
| Aggregate Design | Software Engineer | Domain Experts, Product Owner | When data integrity problems surface |

## Technique Table

| Technique | Use When | Output | Skill |
|---|---|---|---|
| **Big Picture Event Storming** | Team lacks shared mental model of the domain | Domain events, hot spots, candidate Issues, bounded context candidates | [`direction`](https://github.com/jorpo-co/modern-xp-tools) |
| **Context Mapping** | Service boundaries unclear; teams overlap | Bounded context map with relationship patterns | [`direction`](https://github.com/jorpo-co/modern-xp-tools) |
| **Aggregate Design** | Data integrity problems surface | Aggregates with consistency rules | Not yet available |
| **Story Mapping** | Full user journey across a Feature | Story Map with backbone and slices | [`story-guide`](https://github.com/jorpo-co/modern-xp-tools) |
| **System-in-Use Story** | Need to capture how the system will be used | System usage narrative with actors and triggers | Not yet available |

## Procedure Table

| Procedure | What It Does | Wiki Link |
|---|---|---|
| **Use Case Definition** | Formal specification of a goal-level interaction | [`planning/procedures/use-case-definition.md`](https://github.com/jorpo-co/modern-xp-wiki) |
| **Adopting Modern XP** | Onboarding a team to the methodology | [`planning/procedures/adopting-modern-xp.md`](https://github.com/jorpo-co/modern-xp-wiki) |

## Artifact Table

| Artifact | Produced By | Consumed By | Format |
|---|---|---|---|
| **Vision Statement** | Product Owner + Stakeholders | Direction document | 1-2 sentences |
| **Direction Document** | Whole team | Anyone who needs context | Written: Vision, Missions, Goals, observations |
| **Mission Cards** | Product Owner + Engineering Lead | Goal setting, Issue discovery | List with name, scope, reason |
| **Goal Cards** | Product Owner + Engineering Lead | Delivery Cycle planning | 1-2 outcomes with measurement |
| **Observations** | Domain Exploration | Can become Issues | Freeform notes |
| **Actor-Goal List** | Stakeholder identification | Story Mapping, Use Cases | Who uses the system and why |
| **Story Map** | Story Mapping session | Iteration Planning | Visual map with backbone and slices |

## Skip Conditions

| Activity | Skip When |
|---|---|
| Vision process | Leadership provides clear direction; team has a stable charter |
| Mission definition | Pre-PMF; missions change too fast to formalize |
| Goal setting | Current direction is clear and team is executing |
| Event Storming | The team shares a mental model; boundaries are stable |
| Context Mapping | Service architecture is simple and well-understood |
| Aggregate Design | No data integrity problems |
| Domain Exploration | Domain is well-understood. Ship features instead. |
| Direction review | Nothing has changed. Do not meet to confirm no change. |

**Prepare to succeed.** Do enough discovery to move forward, then stop. Direction is context for delivery. It does not block work.