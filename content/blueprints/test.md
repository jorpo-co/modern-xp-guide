---
title: "Test Structure Reference"
url: /blueprints/test/
weight: 8
sitemap:
  priority: 0.7
meta:
  description: "Test structure template: ID, Source, Scenario, Type, Preconditions, and Expected Result for behaviour verification."
---

# Appendix H: Test Structure Reference

| Element | Description |
|---------|-------------|
| **ID** | Unique identifier (e.g., T-42) |
| **[Source](/reference/ubiq/#source-test)** | [Use Case](/reference/ubiq/#use-case) ID + scenario name, or [Story](/reference/ubiq/#story) ID |
| **[Scenario](/reference/ubiq/#scenario)** | [Gherkin](/reference/ubiq/#gherkin) Given/When/Then |
| **Type** | Acceptance \| Integration \| System |
| **[Preconditions](/reference/ubiq/#preconditions)** | Environment or data setup needed |
| **[Expected result](/reference/ubiq/#expected-result)** | What passing means |