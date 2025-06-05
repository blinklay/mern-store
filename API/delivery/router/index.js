const { Router } = require("express")
const CitiesController = require("../controllers/CitiesController")
const DeliveryPointController = require("../controllers/DeliveryPointController")
const router = new Router()

router.get("/cities", CitiesController.getAllCities)
router.get("/delivery-points", DeliveryPointController.getAllPoints)

module.exports = router