// models/Product.js
const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    alt: { type: String, default: "" },
    isPrimary: { type: Boolean, default: false },
  },
  { _id: false }
);

const VariantSchema = new mongoose.Schema(
  {
    size: {
      type: String,
      enum: ["XS", "S", "M", "L", "XL", "XXL"],
      required: true,
    },
    sku: { type: String, trim: true },
    stock: { type: Number, default: 0, min: 0 }
  },
  { _id: false }
);

const TabSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      enum: ["details", "care", "delivery", "returns", "other"],
      required: true,
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },

    brand: { type: String, default: "DAZE" },
    collaboration: { type: String, default: "DAZE x Андрей Абрамчик" },

    category: { type: String, default: "sweaters" },
    tags: [{ type: String, trim: true }],

    price: { type: Number, required: true, min: 0 },
    currency: { type: String, default: "RUB", enum: ["RUB", "USD", "EUR"] },

    colorName: { type: String, default: "хаки" },
    colorHex: { type: String, default: "#62623E" },
    materials: [{ type: String }],

    images: { type: [ImageSchema], validate: v => v.length > 0 },

    variants: {
      type: [VariantSchema],
      validate: {
        validator(arr) {
          const set = new Set(arr.map(v => v.size));
          return set.size === arr.length;
        },
        message: "Размеры в variants не должны повторяться",
      },
    },

    tabs: [TabSchema],

    isActive: { type: Boolean, default: true },
    allowBackorder: { type: Boolean, default: false },

    seoTitle: { type: String },
    seoDescription: { type: String },
  },
  { timestamps: true, collection: "products" }
);

ProductSchema.virtual("totalStock").get(function () {
  return (this.variants || []).reduce((n, v) => n + (v.stock || 0), 0);
});

module.exports = mongoose.model("Product", ProductSchema);
