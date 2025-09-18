const productModel = require("../models/product-model")

class ProductController {
  async getAllProducts(req, res) {
    const products = await productModel.find()
    res.status(200).json({ products })
  }
}

module.exports = new ProductController()