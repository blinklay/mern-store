const { Router } = require("express")
const authRoute = new Router()
const asyncHandler = require('express-async-handler')
const authController = require("../controllers/auth-controller")
const { body } = require("express-validator")

authRoute.post("/register", [
  body("email").isEmail().withMessage("Введите корректный email"),
  body("password").isLength({ min: 6, max: 20 }).withMessage("Пароль должен быть от 6 до 20 символов")
], asyncHandler(authController.register))
authRoute.post("/login", asyncHandler(authController.login))
authRoute.post("/logout", asyncHandler(authController.logout))

module.exports = authRoute;