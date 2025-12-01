---
sidebar_position: 1
title: Filtering & Pagination
description: Handling large datasets efficiently.
---

# Filtering, Sorting, and Pagination

APIs often return lists of data. To ensure performance, we **MUST** implement pagination and standard filtering patterns.

## 1. Pagination
We utilize **Limit/Offset** pagination by default.

### Request Parameters
| Parameter | Description | Default |
| :--- | :--- | :--- |
| `limit` | The maximum number of records to return. | 20 |
| `offset` | The number of records to skip. | 0 |

**Example:**
`GET /products?limit=10&offset=20` (Get page 3)

### Response Envelope
Wrap the array in a `data` object and include a `meta` object for navigation.

```json
{
  "data": [ ... ],
  "meta": {
    "limit": 10,
    "offset": 20,
    "total_count": 150
  }
}
```
## 2. Sorting
Use a generic `sort` parameter.

- **Ascending:** `sort=price`

- **Descending:** `sort=-price` (Prefix with hyphen)

- **Multiple:** `sort=-created_at,price`
## 3. Filtering
Use direct query parameters matching the field names.

- Simple Match: `GET /users?role=admin`

- Advanced Operators: Use bracket syntax `[operator]`.

  - `price[gte]=100` (Greater than or equal)

  - `status[in]=active,pending` 
