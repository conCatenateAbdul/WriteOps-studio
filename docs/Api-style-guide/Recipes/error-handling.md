---
sidebar_position: 2
title: Error Handling
description: Implementing RFC 7807 for consistent error reporting.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Error Handling

An error is a valid response. It should be helpful, standard, and machine-readable.

## The Problem Details Standard
We follow **RFC 7807 (Problem Details for HTTP APIs)**. This ensures that every error looks the same across the entire platform.

<Tabs>
  <TabItem value="good" label="✅ The RFC 7807 Way" default>

```json
HTTP/1.1 400 Bad Request
Content-Type: application/problem+json

{
  "type": "[https://api.example.com/errors/invalid-email](https://api.example.com/errors/invalid-email)",
  "title": "Invalid Email Address",
  "status": 400,
  "detail": "The email 'bob' is not formatted correctly.",
  "instance": "/users/signup"
}
```
</TabItem> <TabItem value="bad" label="❌ The '200 Error' Way">
```JSON
HTTP/1.1 200 OK

{
  "error": true,
  "msg": "Something went wrong"
}
```
**Why is this bad?** Monitoring tools see `200 OK` and assume health, while your users are actually facing errors. 
</TabItem> </Tabs>

## 4. Validation Errors
When a form submission fails, list all failures, not just the first one. Use an `errors` object extension.
```JSON
{
  "title": "Validation Failed",
  "status": 422,
  "errors": {
    "email": ["Must be a valid email"],
    "password": ["Must be at least 8 characters"]
  }
}
```
## 5. Use Problem Details (RFC 7807)

We recommend using the Problem Details format for machine-readable errors.

```http
HTTP/1.1 400 Bad Request
Content-Type: application/problem+json

{
  "type": "https://example.com/probs/validation-error",
  "title": "Validation failed",
  "status": 400,
  "detail": "One or more fields are invalid.",
  "instance": "/orders/abc123",
  "errors": [
    { "field": "quantity", "code": "too_small", "message": "must be at least 1" }
  ]
}
```
**Required fields:** `type`, `title`, `status`
**Recommended fields:** `detail`, `instance`, `errors` (for field-level issues).
