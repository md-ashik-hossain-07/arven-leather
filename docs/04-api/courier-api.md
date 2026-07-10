# ARVEN Commerce OS (ACOS)

# Courier API

Version: 2.0

Status: Completed

---

# Purpose

The Courier API integrates shipping providers and synchronizes parcel information.

---

# Base URL

/api/v1/couriers

---

# Supported Providers

- Steadfast
- Pathao
- RedX
- Sundarban
- Paperfly

---

# Endpoints

GET /couriers

POST /couriers/create-parcel

POST /couriers/cancel-parcel

GET /couriers/track/{trackingNumber}

POST /couriers/webhook

---

# Parcel Status

- Pending
- Picked Up
- In Transit
- Delivered
- Returned
- Cancelled

---

# Validation

Validate:

- Address
- Phone
- COD Amount
- Parcel Weight

---

# Security

- HTTPS
- API Keys
- Webhook Verification

---

# Success Criteria

The Courier API should synchronize shipment data accurately across all supported courier providers.

---

Status:

Version 2.0 Completed