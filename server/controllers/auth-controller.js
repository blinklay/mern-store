const createHttpError = require("http-errors");
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const UserDto = require("../dtos/UserDto");
class AuthController {
  async register(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg
      throw createHttpError(400, errorMessage)
    }
    const { email, password } = req.body;
    const candidate = await userModel.findOne({ email })
    if (candidate) {
      throw createHttpError(400, "Такой пользователь уже существует!")
    }
    const hashPassword = await bcrypt.hash(password, 7)
    const user = await userModel.create({ email, password: hashPassword })
    const userDto = new UserDto(user)
    const token = jwt.sign({ ...userDto }, process.env.JWT_ACCESS_KEY, { expiresIn: "30d" })
    res.cookie("accessToken", token)
    res.status(200).json({ token, user: { ...userDto } })
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email })
    if (!user) {
      throw createHttpError(404, "Пользователь не найден!")
    }

    const isPasswordEquals = await bcrypt.compare(password, user.password)
    if (!isPasswordEquals) {
      throw createHttpError(400, "Пароль не верный!")
    }

    const userDto = new UserDto(user)
    const token = jwt.sign({ ...userDto }, process.env.JWT_ACCESS_KEY, { expiresIn: "30d" })
    res.cookie("accessToken", token)
    res.status(200).json({ token, user: { ...userDto } })
  }

  logout(req, res) {
    res.clearCookie("accessToken", { httpOnly: true, })
    res.status(204).json({ message: "Вы вышли из аккаунта!" })
  }
}

module.exports = new AuthController()