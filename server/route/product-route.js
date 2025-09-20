const { Router } = require("express");
const expressAsyncHandler = require("express-async-handler");
const productController = require("../controllers/product-controller");
const productRoute = new Router()

productRoute.get("/all", expressAsyncHandler(productController.getAllProducts))
productRoute.get("/:slug", expressAsyncHandler(productController.getCurrentProduct))

module.exports = productRoute;