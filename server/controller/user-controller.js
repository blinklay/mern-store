const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const productModel = require("../models/product-model");

class UserController {
  async register(req, res) {
    try {
      const { email, password } = req.body;
      const candidate = await userModel.findOne({ email })

      if (candidate) {
        return res.status(400).json({ message: "Пользователь уже существует!" })
      }

      const hashPassword = await bcrypt.hash(password, 7)
      const user = new userModel({ email, password: hashPassword })

      await user.save()

      res.status(200).json({ message: "Успешная регистрация!", user })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Не удалось выполнить регистрацию!" })
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: "Имя пользователя или пароль не верны!" })
      }

      const isValidPass = await bcrypt.compare(password, user.password)
      if (!isValidPass) {
        return res.status(400).json({ message: "Имя пользователя или пароль не верны!" })
      }

      const accessToken = jwt.sign({ id: user._id }, process.env.JWT_ACCESS_SECRET, { expiresIn: "30m" })

      res.cookie("accessToken", accessToken, {
        maxAge: 30 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      })

      res.status(200).json({ message: "Успешная авторизация!" })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Не удалось авторизироваться!" })
    }
  }
  async logout(req, res) {
    try {
      res.clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })

      res.status(200).json({ message: "Успешный выход из аккаунта!" })
    } catch (error) {
      console.log(error);
      res.status(500).json("Не удачный запрос!")
    }
  }
  async getSelf(req, res) {
    try {
      const userId = req.userId;
      const user = await userModel.findById(userId).select("-password")

      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден!" })
      }

      res.status(200).json({ user })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Не удалось выполнить запрос!" })
    }
  }
  async addToCart(req, res) {
    try {
      const { productId } = req.params;
      const product = await productModel.findById(productId)

      if (!product) {
        return res.status(404).json({ message: "Товар не найден!" })
      }

      const user = await userModel.findById(req.userId)
      const cartItem = user.cart.find((item) => item.product.toString() === productId)

      if (cartItem) {
        cartItem.quantity += 1
      } else {
        user.cart.push({ product: productId, quantity: 1 })
      }

      await user.save()
      res.status(200).json({ message: "Корзина обновлена!", cart: user.cart })
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Не удалось добавить товар в корзину!" })
    }
  }
  async removeFromCart(req, res) {
    try {
      const { productId } = req.params;
      const userId = req.userId;

      const product = await productModel.findById(productId)
      if (!product) return res.status(404).json({ message: "Товар не найден!" })

      const user = await userModel.findById(userId)
      const cartItem = user.cart.find(item => item.product.toString() === productId)

      if (!cartItem) {
        return res.status(404).json({ message: "Товара нет в корзине!" })
      }

      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1
      } else {
        user.cart = user.cart.filter(item => item.product.toString() !== productId)
      }

      await user.save()
      res.status(200).json({ message: "Корзина обновлена!", cart: user.cart })
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Не удалось обработать запрос!" })
    }
  }
}

module.exports = new UserController()