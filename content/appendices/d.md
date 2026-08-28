---
title: "D: Feedback Loops"
weight: 4
sitemap:
  priority: 0.7
meta:
  description: "How production data flows back through Issues, Direction, Work Items, and Delivery to close the feedback loop."
---

# Appendix D: Feedback Loops

```
[Production Data](/ubiq/#production-data)
  |
  +--> [Issues](/ubiq/#issue): user reports, [Incidents](/ubiq/#incident), [feature adoption](/ubiq/#feature-adoption) signals
         |
         +--> [Direction](/ubiq/#direction): Issues change [Missions](/ubiq/#missions) or [Goals](/ubiq/#goals)
         +--> [Work Items](/ubiq/#work-item): Issues become [Features](/ubiq/#feature), [Stories](/ubiq/#story), or [Spikes](/ubiq/#spike)
         +--> [Delivery](/ubiq/#delivery): Incidents add [technical debt](/ubiq/#technical-debt) or process improvements
```

[Domain](/ubiq/#domain) boundaries can change as the team learns. Document changes as [ADRs](/ubiq/#adr). Do not freeze outputs from the first exploration.