---
sidebar_position: 2
title: Data Types
description: Formatting standards for Dates, Currency, and Booleans.
---

# Data Types & Formats

Ambiguity in data formats causes bugs. Is "price" a float or an integer? Is the date in EST or UTC? We explicitly define these formats.

## Data types (required)

Use these canonical types and formats for JSON APIs:

| Type | Representation | Notes |
|------|----------------|-------|
| string | `"text"` | For dates use `format: date-time` (ISO 8601). |
| integer | `123` | 64-bit signed integer where appropriate. |
| number | `12.34` | Decimal numbers. |
| boolean | `true` / `false` | |
| object | `{ ... }` | Use JSON Schema for properties. |
| array | `[ ... ]` | Document item schema explicitly. |
| null | `null` | Use only when necessary; prefer omission when semantically appropriate. |

### Example JSON Schema (user)

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "string", "format": "date-time" },
    "active": { "type": "boolean" }
  },
  "required": ["id", "createdAt"]
}
```

:::danger No Local Time
Never return a date like `2024-11-30 10:00 AM`. The client does not know which timezone this refers to. Always return UTC (`Z`) and let the client-side app convert it to the user's local time.
:::

#  Monetary Values
Never use floats for money due to floating-point math errors (e.g., `0.1 + 0.2 != 0.3` in many languages).

**Preferred Method: Integers (Micros/Cents)**
Return the value in the smallest currency unit.

```json
{
  "price_amount": 1999,
  "currency": "USD"
}
```
# Booleans
Booleans MUST be literal `true` or `false`. Do not use strings or numbers.
<ul>
  <li>✅ <code>"is_active": true</code></li>
  <li>❌ <code>"is_active": "true"</code></li>
  <li>❌ <code>"is_active": 1</code></li>
</ul>
