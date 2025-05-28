const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt")

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
}

module.exports = new UserController()