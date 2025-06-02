const productModel = require("../models/product-model");

const sortQueries = {
  "price_abs": { price: 1 },
  "price_desc": { price: -1 },
  "rating_desc": { rating: -1 },
  "rating_abs": { rating: 1 },
}

class ProductController {
  async getProducts(req, res) {
    try {
      const page = parseInt(req.query.page) || 1
      const limit = parseInt(req.query.limit) || 10
      const skip = (page - 1) * limit
      const { sort, brand, category } = req.query

      const filter = {}
      if (brand !== "null") filter.brand = brand;
      if (category !== "null") filter.category = category;

      const total = await productModel.countDocuments()

      const products = await productModel.find(filter)
        .skip(skip)
        .limit(limit)
        .populate("category")
        .sort(sortQueries[sort])

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