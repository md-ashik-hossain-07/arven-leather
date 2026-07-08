# ARVEN Commerce OS (ACOS)

# Core Principles

Version: 1.0

---

# Purpose

This document defines the permanent engineering principles of ARVEN Commerce OS.

Every developer, AI assistant, automation, plugin, or future contributor must follow these principles.

These rules are considered higher priority than feature requests unless the project owner explicitly changes them.

---

# Principle 1

## Admin Panel First

Every business operation must be manageable from the Admin Panel.

Business owners should never need to edit source code for normal business activities.

Examples:

- Add products
- Edit products
- Delete products
- Manage inventory
- Configure shipping
- Configure payment
- Manage SEO
- Manage homepage
- Configure advertisements
- Configure analytics
- Configure API integrations
- Configure marketing tools

Everything belongs inside Admin.

---

# Principle 2

## Zero Hardcoded Business Data

No product information may be permanently hardcoded.

Examples:

❌ Product names

❌ Prices

❌ Categories

❌ Images

❌ Inventory

❌ Discounts

❌ Coupons

All business data must come from the database.

---

# Principle 3

## API First Architecture

Every module must expose clean APIs.

The frontend should consume APIs instead of depending on direct database access.

Every future integration should be API-driven.

---

# Principle 4

## Modular System

Every major feature must be isolated.

Examples:

- Orders
- Products
- Customers
- Employees
- Marketing
- Analytics
- Integrations
- Payments
- Shipping
- Reports

Each module should be independently maintainable.

---

# Principle 5

## Plugin Ready

The system must support future plugins without modifying the core application.

Examples:

- Courier plugins
- Payment plugins
- Analytics plugins
- AI plugins
- Marketing plugins

Core files should remain untouched whenever possible.

---

# Principle 6

## Security First

Security is mandatory.

Requirements include:

- Role Based Access Control (RBAC)
- Permission system
- Secure authentication
- Audit logs
- Rate limiting
- IP protection
- Input validation
- Secure API access

---

# Principle 7

## Enterprise Scalability

The system should support growth without architectural changes.

It must support:

- Thousands of products
- Thousands of customers
- Multiple employees
- Multiple administrators
- Multiple warehouses
- Multiple courier providers
- Multiple payment gateways

---

# Principle 8

## Reusable Components

Duplicate UI should never exist.

Every reusable interface should become a reusable component.

Examples:

- ProductCard
- Rating
- Badge
- Pagination
- Breadcrumb
- EmptyState
- Modal
- Drawer

---

# Principle 9

## SEO First

Every storefront page should support SEO.

Requirements include:

- Metadata
- Canonical URLs
- Sitemap
- OpenGraph
- Structured Data
- Fast loading
- Server Rendering

---

# Principle 10

## Mobile First

Every feature must work perfectly on mobile before desktop enhancements.

The mobile experience is equally important.

---

# Principle 11

## Performance First

Performance is a feature.

Avoid:

- unnecessary renders
- duplicated requests
- oversized bundles
- unnecessary animations

Optimize:

- Images
- API calls
- Components
- Database queries

---

# Principle 12

## Documentation First

Large features must be documented before implementation.

Every architectural decision should have documentation.

Documentation is considered part of the product.

---

# Principle 13

## AI Friendly Development

The project is designed for AI-assisted development.

Every AI assistant should be able to understand:

- folder structure

- architecture

- business rules

- database

- APIs

- coding standards

without requiring additional explanations.

---

# Principle 14

## Business First

Technology exists to serve business.

Every engineering decision should answer:

Does this reduce future maintenance?

Does this reduce manual work?

Does this improve scalability?

Does this improve business operations?

If not, reconsider the implementation.

---

# Final Rule

Whenever multiple implementation options exist, always choose the solution that:

- requires the least future maintenance,
- keeps the Admin Panel powerful,
- improves long-term scalability,
- avoids code duplication,
- preserves modular architecture,
- and minimizes the need for future source-code modifications.

These principles define the foundation of ARVEN Commerce OS.
