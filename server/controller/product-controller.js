const productModel = require("../models/product-model");
require("../models/category-model");

class ProductController {
  async getProducts(req, res) {
    try {
      const page = parseInt(req.query.page) || 1
      const limit = parseInt(req.query.limit) || 10
      const skip = (page - 1) * limit

      const total = await productModel.countDocuments()

      const products = await productModel.find()
        .skip(skip)
        .limit(limit)
        .populate("category")

      res.status(200).json({
        page,
        totalPages: Math.ceil(total / limit),
        products
      })
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Не удалось обработать запрос!" })
    }
  }
}

module.exports = new ProductController()