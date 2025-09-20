const { Schema, model } = require("mongoose")

const cartItemSchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    variant: { type: String, trim: true },
    count: { type: Number, required: true, min: 1, default: 1 },
    priceAtAdd: { type: Number },
  },
  { _id: false }
);

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: { type: [cartItemSchema], default: [] },
}, { timestamps: true })

userSchema.virtual("cartItemsCount").get(function () {
  return (this.cart || []).reduce((n, i) => n + (i.count || 0), 0);
});

module.exports = model("User", userSchema)