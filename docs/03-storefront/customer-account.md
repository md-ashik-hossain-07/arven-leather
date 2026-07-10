# ARVEN Commerce OS (ACOS)

# Storefront - Customer Account

Version: 2.0

Status: Completed

Last Updated: July 2026

Document Type:
Storefront Specification

---

# Purpose

The Customer Account allows registered customers to manage their personal information, orders, addresses, wishlist, and account preferences from a centralized dashboard.

---

# Design Principles

The Customer Account should be:

- Secure
- Responsive
- User Friendly
- Fast
- Mobile First

---

# Dashboard

Display:

- Customer Profile
- Total Orders
- Pending Orders
- Completed Orders
- Wishlist Items
- Saved Addresses
- Loyalty Points (Future)

---

# Navigation

Sections:

- Dashboard
- My Orders
- Order Details
- Addresses
- Wishlist
- Profile
- Password
- Notifications
- Logout

---

# Profile

Customers may update:

- Full Name
- Phone Number
- Email
- Profile Photo (Future)

---

# Address Book

Support:

- Home Address
- Office Address
- Multiple Saved Addresses
- Default Address

---

# My Orders

Display:

- Order Number
- Date
- Status
- Payment Status
- Delivery Status
- Total Amount

Customers may:

- View Details
- Track Order
- Download Invoice (Future)
- Request Return
- Request Exchange

---

# Wishlist

Display:

- Saved Products
- Stock Status
- Current Price
- Add To Cart
- Remove

---

# Account Security

Support:

- Change Password
- Active Sessions
- Login History
- Two-Factor Authentication (Future)

---

# Notifications

Display:

- Order Updates
- Promotions
- Account Alerts
- Wishlist Updates

Customers may manage notification preferences.

---

# Performance

Support:

- Fast Loading
- Cached Profile
- Mobile Optimization

---

# API Requirements

GET /account

PATCH /account

GET /account/orders

GET /account/addresses

GET /wishlist

---

# Success Criteria

Customers should manage their complete shopping experience from a secure and intuitive account dashboard.

---

Status:

Version 2.0 Completed