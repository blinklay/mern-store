const createHttpError = require("http-errors")
const productModel = require("../models/product-model")

class ProductController {
  async getAllProducts(req, res) {
    const products = await productModel.find()
    res.status(200).json({ products })
  }

  async getCurrentProduct(req, res) {
    const { slug } = req.params
    const product = await productModel.findOne({ slug })
    if (!product) {
      throw createHttpError(404, "Товвр не найден!")
    }
    return res.status(200).json(product)
  }
}

module.exports = new ProductController()