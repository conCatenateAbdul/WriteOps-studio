---
sidebar_position: 1
slug: /
title: The Manifesto
description: The philosophy behind our API design and how to read this guide.
---

# The API Style Guide Cookbook

Welcome to the **API Style Guide Cookbook**. We treat our API as a product, not just a technical byproduct. This guide serves as the single source of truth for designing consistent, predictable, and human-friendly RESTful APIs.
## How to use this guide

This guide helps API designers and writers make consistent, predictable APIs.  
Use the three sections as you design or review an API:

- **Foundations** — naming, data types, and basic constraints.  
- **Interactions** — request methods, response codes, and semantics.  
- **Recipes** — implementation patterns like pagination, error handling, and versioning.

## Why Consistency Matters
When developers consume our API, they shouldn't have to guess. If they learn how to filter a list of `users`, they should intuitively know how to filter a list of `products`. Consistency reduces cognitive load and speeds up integration.

## How to Read This Guide
We adhere to [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) keywords to indicate requirement levels. Pay attention to these terms:

* **MUST**: This is an absolute requirement.
* **SHOULD**: This is valid in most situations, but you may ignore it if you have a valid architectural reason.
* **MAY**: This is optional.

## The Golden Rules

1.  **Web Standards First:** Don't reinvent the wheel. If a standard HTTP header or status code exists, use it.
2.  **Human Readable:** APIs are for machines, but humans write the code that consumes them. Optimize for the human.
3.  **Predictable:** URLs and errors must follow a strict pattern.

:::tip Pro Tip
Treat your API specification (OpenAPI/Swagger) as a legal contract. Do not break the contract without a new version.
:::
