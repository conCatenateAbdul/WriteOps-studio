---
sidebar_position: 3
title: Versioning Strategy
description: How to evolve the API without breaking clients.
---

# Versioning

APIs evolve. However, we must never break existing clients. To manage change, we use versioning.

## URI Versioning
We use **URI Versioning** (vN). It is the most explicit, visible, and developer-friendly method.

`https://api.example.com/v1/users`

## When to Version?
You **MUST** increment the version (v1 -> v2) if you introduce **Breaking Changes**.

**Breaking Changes include:**
* Renaming or deleting a field.
* Changing a field type (e.g., string to integer).
* Making an optional parameter required.

**Non-Breaking Changes (No version bump needed):**
* Adding a new endpoint.
* Adding a new optional parameter.
* Adding a new field to a response body (clients should be written to ignore unknown fields).
