const createHttpError = require("http-errors");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken");

class UserController {
  async getSelf(req, res) {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(200).json({ user: null })
    }

    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_ACCESS_KEY);
    } catch (err) {
      return res.status(200).json({ user: null });
    }

    const user = await userModel.findById(payload.id).select("-password");
    if (!user) {
      throw createHttpError(404, "Пользователь не найден");
    }

    return res.status(200).json({ user });
  }

  async getUsers(req, res) {
    const users = await userModel.find()
    res.status(200).json({ users })
  }

  async addToCart(req, res) {
    const { slug } = req.params;
    const { variant = null } = req.query;
    let { count = 1 } = req.query;

    count = Number(count) || 1;
    if (count < 1) count = 1

    const product = await productModel.findOne({ slug }).select("_id isActive price")
    if (!product || !product.isActive) {
      throw createHttpError(404, "Товар не доступен!")
    }

    const incRes = await userModel.findOneAndUpdate(
      { _id: req.user.id, "cart.product": product._id, "cart.variant": variant },
      { $inc: { "cart.$.count": count } },
      { new: true }
    ).populate("cart.product").lean()

    if (incRes) {
      return res.status(200).json({ cart: incRes.cart })
    }

    const pushRes = await userModel.findOneAndUpdate({ _id: req.user.id }, {
      $push: {
        cart: {
          product: product._id,
          variant,
          count,
          priceAtAdd: product.price,
        }
      }
    }, { new: true }).populate("cart.product").lean()
    res.status(200).json({ cart: pushRes.cart })
  }

  async removeFromCart(req, res) {
    const userId = req.user.id;
    const { slug } = req.params;
    let { variant = null, count = 1 } = req.query;

    count = Number(count) || 1;
    if (count < 1) count = 1;

    const product = await productModel.findOne({ slug }).select("_id").lean();
    if (!product) {
      throw createHttpError(404, "Товар недоступен");
    }

    const user = await userModel.findOne(
      { _id: userId },
      { cart: { $elemMatch: { product: product._id, variant } } }
    ).lean();

    const item = user?.cart?.[0];
    if (!item) {
      throw createHttpError(404, "Товара нет в корзине");
    }

    if (count >= item.count) {
      const updated = await userModel.findByIdAndUpdate(
        userId,
        { $pull: { cart: { product: product._id, variant } } },
        { new: true, projection: { password: 0 } }
      ).populate("cart.product").lean();

      return res.status(200).json({
        message: "Позиция удалена из корзины",
        cart: updated.cart,
      });
    }

    const updated = await userModel.findOneAndUpdate(
      { _id: userId, "cart.product": product._id, "cart.variant": variant },
      { $inc: { "cart.$.count": -count } },
      { new: true, projection: { password: 0 } }
    ).populate("cart.product").lean();

    if (!updated) {
      throw createHttpError(404, "Позиция не найдена");
    }

    return res.status(200).json({
      message: `Количество уменьшено на ${count}`,
      cart: updated.cart,
    });
  }

  async getCart(req, res) {
    const { cart } = await userModel.findOne({ _id: req.user.id }).populate("cart.product").select("cart").lean()
    return res.status(200).json({ cart })
  }
}

module.exports = new UserController()