---
sidebar_position: 4
title: Authentication
description: Master the different authentication methods supported by HTTPie.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication Strategies

Most public APIs require you to prove your identity. HTTPie supports several authentication methods out of the box.

## Objective
You will authenticate requests using Basic Auth, Bearer Tokens, and API Keys.

## Prerequisites
* Credentials for the API you are accessing.

## Supported Methods

<Tabs>
<TabItem value="basic" label="Basic Auth" default>

### Basic Authentication
The standard username/password scheme.

**Syntax:** `-a username:password`

**Command:**
```bash
http -a admin:secret GET httpbin.org/basic-auth/admin/secret
```

**Interactive Mode:** If you omit the password, HTTPie will prompt you securely so it doesn't appear in your shell history.
```bash
http -a admin GET httpbin.org/basic-auth/admin/secret
```

</TabItem>
<TabItem value="bearer" label="Bearer Token">

**Bearer Token (JWT)**

Common in OAuth2 and modern web apps.

**Syntax:** `Authorization:"Bearer <token>"`

**Command:**
```bash
http GET httpbin.org/bearer Authorization:"Bearer my-jwt-token-123"
```

> **Note:** We manually set the header here, but you can also install the `httpie-jwt-auth` plugin for a dedicated flag.

</TabItem>
<TabItem value="netrc" label=".netrc File">

**The .netrc File**
Avoid typing credentials entirely by storing them in a `~/.netrc` file. HTTPie reads this automatically.

File Content (`~/.netrc`)

```powershell
machine api.example.com
login myuser
password mypassword
```

**Command:**
```bash
http api.example.com/profile
```
*(No flags needed!)*

</TabItem>
</Tabs>

**Explanation**

*   `-a` / `--auth`: The shorthand flag for Basic Auth.
*   Header manipulation: For schemes like Bearer or API Keys (X-API-Key), simply setting the header is often the fastest method.

## Security and best practices for secrets

Follow these rules whenever you work with API keys, tokens, or passwords in examples, scripts, and CI.

### Key rules
1. **Never hard-code secrets in docs, examples, or source files.**  
   Always use placeholders such as `<YOUR_TOKEN>` or `<PASSWORD>` in public docs.
2. **Do not put secrets in URLs or query strings.** URLs are often logged or shared.
3. **Avoid inline passwords on the command line.** Use secure prompts or environment variables.
4. **Store secrets with least privilege and rotate them regularly.**


## See also

- [OAuth 2.0 overview (oauth.net)](https://oauth.net/2/) — conceptual guide to OAuth flows used by many APIs.
- [HTTP Authorization header — MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) — header formats and security notes.
- [Secrets management (OWASP cheatsheet)](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) — secure storage and rotation practices.
