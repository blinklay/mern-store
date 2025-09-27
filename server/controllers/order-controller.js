const createHttpError = require("http-errors");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");
const ProductDto = require("../dtos/ProductDto");
const orderModel = require("../models/order-model");
const { default: mongoose } = require("mongoose");

class OrderController {
  async getOrders(req, res) {
    const orders = await orderModel.find({ user: req.user.id })
    res.status(200).json({ orders })
  }
  async addOrder(req, res, next) {
    const session = await mongoose.startSession()
    session.startSession()
    try {
      const { customer, shipping } = req.body;
      const cart = await userModel.findOne({ _id: req.user.id }).select("cart").populate("cart.product")

      if (cart.length === 0) {
        throw createHttpError(400, 'Для заказа нужно иметь товары в корзине!')
      }

      const positions = cart.cart.map(p => ({ ...new ProductDto(p) }))

      const subtotal = Math.round(
        positions.reduce((acc, item) => acc + (item.priceAtPurchase * item.count), 0)
      );
      const delivery = 300;
      const total = subtotal + delivery;

      const order = await orderModel.create({
        user: req.user.id,
        positions,
        customer,
        shipping,
        amount: {
          subtotal,
          delivery,
          total,
        }
      })

      res.status(201).json({ order })
    } catch (err) {
      next(createHttpError(500, "Ошибка обработки заказа!"))
    }
  }
}
module.exports = new OrderController()