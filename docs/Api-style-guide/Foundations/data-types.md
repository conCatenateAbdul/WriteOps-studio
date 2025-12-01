---
sidebar_position: 2
title: Data Types
description: Formatting standards for Dates, Currency, and Booleans.
---

# Data Types & Formats

Ambiguity in data formats causes bugs. Is "price" a float or an integer? Is the date in EST or UTC? We explicitly define these formats.

## 1. Dates and Times
All timestamps **MUST** be returned in **ISO 8601** format and stored in **UTC**.

* **Format:** `YYYY-MM-DDTHH:mm:ssZ`
* **Example:** `2024-11-30T14:30:00Z`

:::danger No Local Time
Never return a date like `2024-11-30 10:00 AM`. The client does not know which timezone this refers to. Always return UTC (`Z`) and let the client-side app convert it to the user's local time.
:::

## 2. Monetary Values
Never use floats for money due to floating-point math errors (e.g., `0.1 + 0.2 != 0.3` in many languages).

**Preferred Method: Integers (Micros/Cents)**
Return the value in the smallest currency unit.

```json
{
  "price_amount": 1999,
  "currency": "USD"
}
```
## 3. Booleans
Booleans MUST be literal `true` or `false`. Do not use strings or numbers.
<ul>
  <li>✅ <code>"is_active": true</code></li>
  <li>❌ <code>"is_active": "true"</code></li>
  <li>❌ <code>"is_active": 1</code></li>
</ul>
