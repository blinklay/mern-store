const { Router } = require("express")
const authMiddleware = require("../middlewares/auth-middleware")
const expressAsyncHandler = require("express-async-handler")
const orderController = require("../controllers/order-controller")
const orderRoute = new Router()

orderRoute.get("/get", authMiddleware, expressAsyncHandler(orderController.getOrders))
orderRoute.post("/add", authMiddleware, expressAsyncHandler(orderController.addOrder))

module.exports = orderRoute