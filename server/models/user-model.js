const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  name: {
    type: String,
    default: "Пользователь",
    trim: true,
  },
  cart: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 }
    }
  ],
  avatarUrl: {
    type: String,
    default: "",
  },
  address: {
    street: { type: String, default: "" },
    city: { type: String, default: "" },
    zip: { type: String, default: "" },
    country: { type: String, default: "" },
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
})

module.exports = model("User", UserSchema)