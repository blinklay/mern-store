const { Router } = require("express");
const authRoute = require("./auth-route");
const userRoute = require("./user-кoute");
const productRoute = require("./product-route");
const router = new Router()

router.use("/auth", authRoute)
router.use("/user", userRoute)
router.use("/product", productRoute)

module.exports = router;