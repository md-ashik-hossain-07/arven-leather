# ARVEN Commerce OS (ACOS)

# Authentication API

Version: 2.0

Status: Completed

Last Updated: July 2026

Document Type:
API Specification

---

# Purpose

This document defines all authentication and authorization endpoints for ARVEN Commerce OS.

The Authentication API manages user login, logout, token refresh, password management, account verification, session management, and user identity.

---

# Base URL

/api/v1/auth

---

# Authentication Endpoints

POST /login

Authenticate user.

POST /register

Create customer account.

POST /logout

Logout current session.

POST /refresh-token

Generate a new access token.

GET /me

Return currently authenticated user.

POST /forgot-password

Request password reset.

POST /reset-password

Reset password.

POST /change-password

Change current password.

POST /verify-email

Verify email address.

POST /verify-otp

Verify OTP (Future).

POST /resend-verification

Resend verification email.

---

# Request Headers

Authorization

Bearer {ACCESS_TOKEN}

Content-Type

application/json

Accept

application/json

---

# Login Request

```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

---

# Login Response

```json
{
  "success": true,
  "message": "Login successful.",
  "data": {
    "user": {},
    "accessToken": "...",
    "refreshToken": "..."
  }
}
```

---

# User Object

Return:

- id
- name
- email
- phone
- role
- permissions
- avatar
- status

---

# Validation

Validate:

- Email Format
- Password
- Active Account
- Verified Account
- Account Lock

---

# Session Management

Support:

- Current Session
- Active Devices
- Logout Current Device
- Logout All Devices

---

# Password Policy

Minimum:

- 8 Characters
- Uppercase
- Lowercase
- Number
- Special Character

---

# Error Codes

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

422 Validation Error

429 Too Many Requests

500 Internal Server Error

---

# Security

Support:

- JWT
- Refresh Tokens
- bcrypt
- RBAC
- Rate Limiting
- Account Lock
- Audit Logging

---

# Success Criteria

Authentication APIs should provide secure, scalable, and reliable identity management while protecting user accounts and system resources.

---

Status:

Version 2.0 Completed