---
sidebar_position: 1
title: Naming Conventions
description: Rules for casing, resource names, and URI structure.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Naming Conventions

Great APIs read like a sentence. The structure of the URL tells the developer exactly what resource they are accessing.

## 1. Casing Strategy
We use specific casing styles to distinguish between URLs, JSON, and Headers.

| Context | Style | Example |
| :--- | :--- | :--- |
| **URI Paths** | `kebab-case` | `/pending-orders` |
| **JSON Keys** | `snake_case` | `{"first_name": "Alice"}` |
| **Query Params** | `snake_case` | `?sort_by=created_at` |
| **Headers** | `Hyphenated-Pascal-Case` | `X-Api-Key` |

:::info Why Snake Case for JSON?
While JavaScript uses `camelCase`, `snake_case` is the standard for JSON APIs across the industry (Stripe, Slack, Google). It improves readability and aligns with database column standards.
:::

## 2. Resources are Nouns
URIs **MUST** identify a resource (a noun), not an action (a verb). The HTTP Method (GET, POST) defines the action.

<Tabs>
  <TabItem value="good" label="✅ Do This" default>

```http
GET /articles
DELETE /articles/{id}
POST /users
```
</TabItem> <TabItem value="bad" label="❌ Avoid This">

```HTTP
GET /getArticles
GET /getAllUsers
POST /createUser
```

Why? `/articles` is the "thing." `GET` is what you are doing to it. </TabItem> </Tabs>
