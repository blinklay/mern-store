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
  async getCurrentProduct(req, res) {
    try {
      const { productId } = req.params
      const product = await productModel.findById(productId)

      if (!product) {
        return res.status(404).json({ message: "Товар не найден!" })
      }

      res.status(200).json({ product })
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Не удалось обработать запрос!" })
    }
  }
  async addCommentToProduct(req, res) {
    try {
      const { message, rating } = req.body
      const userId = req.userId
      const { productId } = req.params
      const product = await productModel.findById(productId)

      if (!product) {
        return res.status(404).json({ message: "Товар не найден!" })
      }

      const userComment = product.reviews.find(review => review.user.toString() === userId.toString())
      if (userComment) {
        return res.status(400).json({ message: "Вы уже оставляли отзыв на этот товар!" })
      }
      if (rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Рейтинг должен быть от 1 до 5!" })
      }
      if (!message || !rating) {
        return res.status(400).json({ message: "Пожалуйста, заполните все поля!" })
      }

      const comment = {
        user: userId,
        name: req.userName,
        rating: parseInt(rating),
        comment: message,
        createdAt: new Date()
      }
      product.reviews.push(comment)
      product.rating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
      await product.save()
      res.status(200).json({ message: "Отзыв успешно добавлен!", product })
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Не удалось обработать запрос!" })
    }
  }
}

module.exports = new ProductController()