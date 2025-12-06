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

## Pagination strategies

**Offset pagination** (`?page=2&limit=20`) is simple and useful for small datasets and administrative UIs.  
**Cursor pagination** (recommended for large or frequently changing datasets) uses an opaque cursor token to fetch the next page and is more performant at scale.
### Cursor example
GET `/messages?limit=50&cursor=eyJpZCI6IjEyMzQ1Iiwic2VxIjoxMDAwfQ`
**Guideline:** Always require a deterministic sort for paginated resources (for example: `ORDER BY created_at DESC, id DESC`).
