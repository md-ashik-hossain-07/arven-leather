# ARVEN Commerce OS (ACOS)

# REST API Standards

Version: 2.0

Status: Completed

Last Updated: July 2026

Document Type:
REST API Specification

---

# Purpose

This document defines the REST API standards used throughout ARVEN Commerce OS.

Every endpoint should follow these conventions to ensure consistency, maintainability, and developer productivity.

---

# REST Principles

Every API should be:

- Resource Based
- Stateless
- Predictable
- Consistent
- Secure
- Versioned

---

# URL Convention

Correct

/api/v1/products

/api/v1/orders

/api/v1/customers

Incorrect

/getProducts

/createOrder

---

# Resource Naming

Use plural nouns.

Examples:

products

orders

customers

employees

inventories

notifications

---

# HTTP Methods

GET

Retrieve resources.

POST

Create resources.

PUT

Replace a complete resource.

PATCH

Update part of a resource.

DELETE

Soft delete a resource.

---

# Resource Examples

Products

GET /products

GET /products/{id}

POST /products

PATCH /products/{id}

DELETE /products/{id}

Orders

GET /orders

POST /orders

PATCH /orders/{id}

Customers

GET /customers

POST /customers

---

# Pagination

Query Parameters

?page=

&limit=

Example

GET /products?page=1&limit=20

---

# Searching

Example

GET /products?search=wallet

Search should be case insensitive.

---

# Filtering

Examples

category

brand

status

warehouse

price

date

Example

GET /products?category=wallet&brand=arven

---

# Sorting

Support

sort=name

sort=price

sort=createdAt

Order

asc

desc

Example

GET /products?sort=price&order=asc

---

# Response Format

Success

```json
{
  "success": true,
  "message": "OK",
  "data": {},
  "meta": {}
}
```

Error

```json
{
  "success": false,
  "message": "Validation Error",
  "errors": []
}
```

---

# Validation

Validate:

- Request Body
- Query Parameters
- URL Parameters
- Headers

Invalid requests return HTTP 422.

---

# Error Handling

Every error includes:

- Status Code
- Error Message
- Error Code
- Request ID

Sensitive information must never be exposed.

---

# Security

Support:

- HTTPS
- JWT
- RBAC
- Rate Limiting
- Input Sanitization

---

# API Documentation

Generate automatically using:

- OpenAPI
- Swagger

Every endpoint requires:

- Description
- Parameters
- Request Example
- Response Example
- Error Responses

---

# Success Criteria

All REST APIs should follow identical conventions, making development faster, easier to maintain, and consistent across the platform.

---

Status:

Version 2.0 Completed