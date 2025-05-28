const { Router } = require("express")
const userController = require("../controller/user-controller")
const checkAuth = require("../middlewares/checkAuth")
const router = new Router()

router.post("/auth/register", userController.register)
router.post("/auth/login", userController.login)
router.post("/auth/logout", userController.logout)
router.get("/auth/me", checkAuth, userController.getSelf)

module.exports = router