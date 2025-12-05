---
sidebar_position: 2
title: Status Codes
description: The appropriate response codes for success and failure.
---

# Status Codes

Stop returning `200 OK` for errors. The HTTP status code tells the client *how* to process the response body.

## Success Codes (2xx)
* **200 OK:** The standard success response for GET, PUT, or PATCH.
* **201 Created:** The resource was created. **MUST** be used for POST requests.
* **202 Accepted:** The request is valid but processing is happening in the background (Async jobs).
* **204 No Content:** The request succeeded, but there is no body to return (Common for DELETE).

## Client Errors (4xx)
* **400 Bad Request:** The client sent invalid JSON or validation failed.
* **401 Unauthorized:** The client is not logged in (missing token).
* **403 Forbidden:** The client is logged in but lacks permission to view this resource.
* **404 Not Found:** The resource does not exist.
* **422 Unprocessable Entity** — semantic/validation errors (preferred for validation).
* **429 Too Many Requests:** You hit the rate limit.

## Server Errors (5xx)
* **500 Internal Server Error:** Something blew up on our end.
* **503 Service Unavailable:** We are down for maintenance.

### Example (422 validation)
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/problem+json

{
  "type": "https://example.com/probs/invalid-request",
  "title": "Validation failed",
  "status": 422,
  "detail": "One or more fields failed validation.",
  "errors": [
    { "field": "email", "message": "invalid email address" }
  ]
}
```
