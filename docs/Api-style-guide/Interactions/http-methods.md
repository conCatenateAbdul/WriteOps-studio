---
sidebar_position: 1
title: HTTP Methods
description: Understanding CRUD mapping and Idempotency.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# HTTP Methods

We map standard SQL operations (CRUD) to HTTP verbs. Using these correctly allows us to leverage browser caching and proxy features.



## The Verbs

| Verb | Usage | Idempotent? |
| :--- | :--- | :--- |
| **GET** | Retrieve a resource. | ✅ Yes |
| **POST** | Create a new resource. | ❌ No |
| **PUT** | Replace a resource completely. | ✅ Yes |
| **PATCH** | Update part of a resource. | ❌ No |
| **DELETE** | Remove a resource. | ✅ Yes |

## PUT vs. PATCH
This is a common source of confusion.

<Tabs>
  <TabItem value="put" label="PUT (Replace)" default>

**Use Case:** Overwrite the *entire* record.
If you send a PUT request with only the email, the system should technically set the `name` and `age` to null (or default).

```json
PUT /users/123
{ "email": "new@example.com", "name": "Bob", "age": 30 }
```
</TabItem> <TabItem value="patch" label="PATCH (Modify)">

**Use Case:** Change specific fields only. This leaves `name` and `age` untouched.

```json
PATCH /users/123
{ "email": "new@example.com" }
```
</TabItem> </Tabs>

## Idempotency
**Idempotency** means that making the same request multiple times produces the same result.

  - **GET** is idempotent: You can refresh the page 100 times, and the data remains the same.
  - **POST** is NOT idempotent: If you refresh a form submission page, you might buy the same item twice.
  - **PUT** — idempotent; replaces the resource. Provide full resource representation.  
  - **PATCH** — non-idempotent by default; use for partial updates. Document the patch format (JSON Patch or merge patch).  
