export const mockCustomer = {
  name: "Nabila Rahman",
  email: "nabila@example.com",
  phone: "01700 000000",
  memberSince: "2025",
  totalOrders: 4,
  wishlistCount: 3
} as const;

export const mockAddresses = [
  { id: "home", label: "Home", recipient: "Nabila Rahman", phone: "01700 000000", address: "House 12, Road 8, Dhanmondi", city: "Dhaka 1209", default: true },
  { id: "office", label: "Office", recipient: "Nabila Rahman", phone: "01700 000000", address: "Level 5, Mock Tower, Banani", city: "Dhaka 1213", default: false }
] as const;

export const mockOrders = [
  { id: "ARV-MOCK-1001", date: "12 July 2026", status: "Delivered", payment: "Cash on Delivery", total: 4990, items: [{ name: "Mock Heritage Oxford", quantity: 1, price: 4990 }] },
  { id: "ARV-MOCK-1002", date: "26 June 2026", status: "In transit", payment: "bKash", total: 3490, items: [{ name: "Mock Minimal Crossbody", quantity: 1, price: 3490 }] },
  { id: "ARV-MOCK-1003", date: "03 May 2026", status: "Delivered", payment: "Cash on Delivery", total: 3980, items: [{ name: "Mock Bifold Wallet", quantity: 1, price: 1790 }, { name: "Mock Full-Grain Belt", quantity: 1, price: 2190 }] }
] as const;
