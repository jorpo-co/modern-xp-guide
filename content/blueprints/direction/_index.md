---
title: "Direction"
weight: 10
url: /blueprints/direction/
sitemap:
  priority: 0.8
meta:
  description: "How to choose and combine Direction practices: Vision, Missions, Goals, and Domain Exploration techniques."
---

# Direction In Practice

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

## Procedures

Each procedure below gives a concrete sequence. Use them as templates, not scripts. The team adapts each step to its context.

### Define the Vision

**Purpose:** Write the long-term future the team exists to build.

**Who facilitates:** Product Owner
**Who participates:** Stakeholders, Principal Engineer, one team representative
**Timebox:** 90 minutes (first time). 30 minutes (yearly revision).
**Inputs:** Org strategy, market data, existing product direction, user research

**Steps:**

1. **Set the scope.** What domain does this team own? Write one sentence that names the domain.
2. **Describe the future state.** Imagine the world 5-10 years from now. What is different because this team exists? Write 2-3 sentences as if the future has already arrived.
3. **Find the audience.** Who benefits? Users, customers, the organisation, the industry, society? Be specific.
4. **Write the first draft.** One sentence: audience + future state + domain. "A world where [audience] can [future state] without [current limitation]."
5. **Stress-test it.** Would a stranger understand it in 8 seconds? If you swapped the company name for a competitor's, would it still fit? Can you point to it when saying "no" to off-strategy work?
6. **Tighten.** Cut every word that does not carry meaning. Remove AI tells ("revolutionary", "best-in-class", "seamlessly"). The final version is 1-2 sentences.
7. **Record.** Add the Vision to the Direction Document.

**Validation check:** Read the Vision to someone outside the session. If they cannot summarise it back in a few words, rewrite.

---

### Write Missions

**Purpose:** Describe what the team works towards *now* to move toward the Vision.

**Who facilitates:** Product Owner
**Who participates:** Engineering Lead, Business Sponsor
**Timebox:** 45 minutes. Repeat when the current Mission completes or the environment shifts.
**Inputs:** Vision statement, market signals, production data, stakeholder priorities

**Steps:**

1. **Review the Vision.** Read it aloud. Ask: "What is the most important step toward this future, right now?"
2. **Identify the gap.** What stands between the current state and the next meaningful step? Name the gap in one sentence.
3. **Write the Mission.** One sentence: verb + what + for whom + why.
   Format: "[Do this] for [audience] so that [outcome]."
   Bad: "Build a better onboarding flow."
   Good: "Cut time-to-first-value for new users so they reach their first success in under 5 minutes."
4. **Check scope.** Is this Mission achievable in months, not years? Can the team point to specific Goals that would fulfil it? If it is too broad, narrow it.
5. **Limit to one or two.** The team works on one Mission at a time. A second Mission is acceptable only when the team can make progress on both without splitting focus.
6. **Record.** Add the Mission to the Direction Document. Include: name, scope, reason (why now).

**Validation check:** Give the Mission to an engineer who was not in the session. Ask: "What would you build?" If they cannot name a concrete next step, the Mission is too abstract.

---

### Set Goals

**Purpose:** Make Missions concrete with 1-2 measurable outcomes.

**Who facilitates:** Product Owner + Engineering Lead
**Who participates:** Whole team
**Timebox:** 30 minutes per cycle
**Inputs:** Current Mission, production data, team capacity, known Issues

**Steps:**

1. **Read the current Mission.** One sentence, out loud.
2. **Brainstorm outcomes.** Ask: "If this Mission succeeds, what changes?" List 3-5 candidate outcomes.
3. **Pick one or two.** The team votes or uses Impact Ranking (gut-check impact vs effort). No scoring formulas.
4. **Write each Goal in the format:** "[Verb] [metric or outcome] by [timeframe]."
   Good: "Increase first-week activation from 30% to 50% by end of Q2."
   Better: "New users set up their first project in under 5 minutes. Measured by the 90th percentile of time-to-first-project-complete."
5. **Add a measurement.** How will the team know the Goal is met? Name the metric and the source (dashboard, survey, NPS, log analysis).
6. **Check achievability.** Can the team make measurable progress in one cycle? If the Goal requires a year, split it into shorter Goals.
7. **Record.** Add each Goal to the Direction Document. Include: description, measurement, deadline.

**Validation check:** On the last day of the Goal period, can the team say "yes, we met it" or "no, we did not" with no ambiguity? If not, the measurement is too vague.

---

### Review Direction

**Purpose:** Confirm or adjust direction based on what the team has learned.

**Cadence:** Once per month. Also trigger when: a Goal completes, a Mission completes, production data contradicts the current direction, a stakeholder shifts priority.

**Who attends:** Whole team
**Timebox:** 30 minutes
**Inputs:** Current Direction Document, recent production data, completed Goals, new Issues

**Agenda (run in order, timebox each section):**

| Step | What | Time |
|---|---|---|
| 1 | Read the Vision aloud. | 2 min |
| 2 | Review each Goal. Did the team meet it? Abandon it? Why? | 10 min |
| 3 | Check each Mission. Is it still valid? Any market shift? Any new data? | 8 min |
| 4 | Review new Issues. Do any change the team's priorities? | 5 min |
| 5 | Decide: keep direction, adjust Goals, change Mission, or hold. | 5 min |

**Decision rules:**
- Adjusting a Goal: team decides. No permission needed.
- Changing a Mission: requires a conversation with stakeholders. Schedule within the week.
- Changing the Vision: rare. Requires full stakeholder alignment. Do not change it in a 30-minute review.

**Outcome:** Updated Direction Document OR a decision to keep it as-is.

---

### Record Direction

**Purpose:** Keep a single source of truth for the team's direction.

**Format:** One document, visible to the whole team. Wiki page, README, shared doc — the tool does not matter. The content does.

**Contents:**

| Section | What to include | Updates when |
|---|---|---|
| Vision | 1-2 sentence Vision statement | Rarely (strategic shifts only) |
| Missions | 1-2 Missions with name, scope, reason | Mission change or completion |
| Goals | 1-2 Goals with description, measurement, deadline | Every cycle |
| Domain notes | Observations from Event Storming, Context Maps, Aggregate Design | After each exploration session |
| History | Closed Missions, completed Goals, date stamped | After each change |

**Maintenance rules:**
- One person owns the doc (Product Owner by default). Anyone can propose a change.
- Remove completed Goals. Move them to a History section.
- Remove completed Missions. Move them to a History section.
- Do not delete anything from History. The record shows what the team tried.

**Validation check:** A new team member reads the Direction Document. Can they explain what the team does and why, in their own words, after reading it once? If not, the document needs work.

---

### Related Wiki Procedures

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

## Working Example

A fictional team runs the Direction procedures. This shows one valid run. Names and numbers are placeholders.

**Context:** A startup builds a task management platform for development teams where humans and coding agents both do the work. Product name: AgentFlow. The platform routes tasks, tracks review and handoff, and keeps an audit record of what each human and each agent did.

### 1. Define the Vision

The Product Owner runs the 90-minute session with the two founders (stakeholders) and the Principal Engineer.

**Step 1 — Scope:** "AgentFlow owns task management for software development teams."

**Step 2 — Future state:** In 5 years, development ships as a team sport between humans and agents. Humans decide what and why. Agents do the how. No task, review, or decision falls between the two species.

**Step 3 — Audience:** Engineering teams that run agents in their daily work.

**Step 4 — First draft:** "A world where shipping software is a team sport between humans and agents — humans decide what and why, agents do the how — and no task or decision is lost in the handoff."

**Steps 5-6 — Stress-test and tighten:**", "- A stranger understands it in one read: yes.", "- Company name swapped: the statement is specific to AgentFlow, not generic.", "- Cut words: dropped \"seamlessly\", \"revolutionary\".", "
**Step 7 — Record.** Final Vision:

> A world where shipping software is a team sport between humans and agents — humans decide *what* and *why*, agents do the *how* — and no task, review, or decision falls between the two.

### 2. Write Missions

Two weeks later, the Product Owner and Engineering Lead meet with the Business Sponsor.

**Step 1 — Review the Vision.** The gap: most teams still treat agents as isolated tools, not team members. Tasks sit in one system; agent runs happen elsewhere; nobody can prove which action an agent took.

**Step 2-4 — Write and scope the Mission:**

> Cut time from task capture to agent execution, so that fork-server costs drop and every change ships with a provenance record.

That Mission is achievable in months. The team can name Goals for it. It does not try to solve the whole Vision.

**Step 5-6 — Record.** Mission Card:

| Field | Value |
|---|---|
| Name | Agent-native task flow |
| Scope | Capture, assignment, execution, review, provenance |
| Reason | Teams adopt agents only when agent work is first-class, not bolted on |

### 3. Set Goals

The same week, the whole team runs the 30-minute Goal session.

**Step 1 — Read the Mission** aloud.

**Step 2 — Brainstorm outcomes:** faster time-to-first-execution, higher acceptance rate of agent output, complete audit trail, agent onboarding under 10 minutes.

**Step 3 — Pick two.** Votes land on acceptance rate and audit trail. Time-to-first-execution is a symptom metric; the team tracks it but does not goal it.

**Steps 4-6 — Write and measure:**

| Goal | Measurement | Deadline |
|---|---|---|
| M1: 85% of agent-executed tasks accepted with no human edits | Median first-pass acceptance rate across all agent runs | End of Q2 |
| M2: every closed task carries a full provenance record | 100% of closed tasks show who did what, human or agent | End of Q2 |

**Step 7 — Record** in the Direction Document under Goals.

### 4. Direction review — month one

The monthly review runs the 30-minute agenda.

- Goal M1 is at 58% and moving up. Keep.", "- Goal M2 surfaces a domain question: what counts as a \"provenance record\" when an agent edits another agent's patch? The team logs an Issue, not a Mission change.", "- Mission still holds. No stakeholder conversation needed.", "
**Outcome:** Direction Document updated with the Issue. The team keeps shipping.

### What the example shows

- Direction is a cascade, but each step is a short, timeboxed session — not a planning phase.", "- Goals earn their place as early-warning sensors. M2's domain question surfaced a real unknown inside a 30-minute review.", "- The Mission stayed stable while a Goal produced an Issue. That is normal: Goals create Issues; Issues refine direction over time.", "

**Prepare to succeed.** Do enough discovery to move forward, then stop. Direction is context for delivery. It does not block work.
