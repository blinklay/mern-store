const { Router } = require("express");
const authMiddleware = require("../middlewares/auth-middleware");
const expressAsyncHandler = require("express-async-handler");
const userController = require("../controllers/user-controller");
const userRoute = new Router()

userRoute.get("/me", authMiddleware, expressAsyncHandler(userController.getSelf))
userRoute.get("/all", authMiddleware, expressAsyncHandler(userController.getUsers))
userRoute.get("/cart", authMiddleware, expressAsyncHandler(userController.getCart))
userRoute.post("/cart/add/:slug", authMiddleware, expressAsyncHandler(userController.addToCart))
userRoute.post("/cart/remove/:slug", authMiddleware, expressAsyncHandler(userController.removeFromCart))

module.exports = userRoute;