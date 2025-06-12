const { Router } = require("express")
const userController = require("../controller/user-controller")
const checkAuth = require("../middlewares/checkAuth")
const productController = require("../controller/product-controller")
const router = new Router()

router.post("/auth/register", userController.register)
router.post("/auth/login", userController.login)
router.post("/auth/logout", userController.logout)
router.get("/auth/me", checkAuth, userController.getSelf)

router.get("/products", productController.getProducts)
router.get("/products/:productId", productController.getCurrentProduct)
router.post("/products/review/:productId", checkAuth, productController.addCommentToProduct)
router.post("/cart/:productId", checkAuth, userController.addToCart)
router.delete("/cart/:productId", checkAuth, userController.removeFromCart)

module.exports = router