const CityModel = require("../models/CityModel");
const DeliveryPointModel = require("../models/DeliveryPointModel")

class DeliveryPointController {
  async getAllPoints(req, res) {
    try {
      const { cityCode } = req.query
      const city = await CityModel.findOne({ code: cityCode })
      if (!city) {
        return res.status(404).json({ message: "Город не найден!" })
      }
      const points = await DeliveryPointModel.find(cityCode ? { cityCode } : {})
      res.status(200).json({ points })
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Не удалось обработать запрос!" })
    }
  }
}

module.exports = new DeliveryPointController()