const { Schema, model } = require("mongoose");

const orderPositionSchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    title: { type: String, required: true },
    image: { type: String },
    slug: { type: String },
    variant: { type: String, trim: true, default: null },
    count: { type: Number, required: true, min: 1, default: 1 },
    priceAtPurchase: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", index: true },
    positions: { type: [orderPositionSchema], required: true, validate: v => v.length > 0 },
    customer: {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true, lowercase: true },
      phone: { type: String, required: true, trim: true },
    },
    shipping: {
      addressLine1: { type: String, required: true },
      addressLine2: { type: String },
      city: { type: String, required: true },
      region: { type: String },
      postalCode: { type: String, required: true },
      country: { type: String, required: true, default: "RU" },
      trackingNumber: { type: String, default: null },
      carrier: { type: String, default: null },
    },

    status: { type: String, enum: ["В обработке", "Доставляется", "Доставлен", "Отменен"], default: "В обработке", index: true },

    payment: {
      method: { type: String, enum: ["card"], default: "card" },
      provider: { type: String, default: "yookassa" },
      paymentId: { type: String },
      status: { type: String, enum: ["pending", "paid", "failed", "refunded"], default: "paid" },
      paidAt: { type: Date },
    },

    amount: {
      subtotal: { type: Number, required: true, min: 0 },
      delivery: { type: Number, required: true, min: 0, default: 0 },
      discount: { type: Number, required: true, min: 0, default: 0 },
      total: { type: Number, required: true, min: 0 },
      currency: { type: String, enum: ["RUB", "USD", "EUR"], default: "RUB" },
    }
  },
  { timestamps: true, collection: "orders" }
);

orderSchema.virtual("itemsCount").get(function () {
  return (this.positions || []).reduce((n, p) => n + (p.count || 0), 0);
});

module.exports = model("Order", orderSchema);
