const { Router } = require("express");
const authRoute = require("./auth-route");
const userRoute = require("./user-кoute");
const productRoute = require("./product-route");
const orderRoute = require("./order-route");
const router = new Router()

router.use("/auth", authRoute)
router.use("/user", userRoute)
router.use("/product", productRoute)
router.use("/order", orderRoute)

module.exports = router;