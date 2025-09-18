const { Router } = require("express");
const authMiddleware = require("../middlewares/auth-middleware");
const expressAsyncHandler = require("express-async-handler");
const userController = require("../controllers/user-controller");
const userRoute = new Router()

userRoute.get("/all", authMiddleware, expressAsyncHandler(userController.getUsers))

module.exports = userRoute;