const { Router } = require("express")
const images = require("../utils/multer")
const router = new Router()

router.post("/images", images.single("image"), (req, res) => {
  res.json({ url: `/images/${req.file.fileName}` })
})

module.exports = module