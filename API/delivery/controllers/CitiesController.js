const CityModel = require("../models/CityModel");

class CitiesController {
  async getAllCities(req, res) {
    try {
      const cities = await CityModel.find()
      res.status(200).json({ cities })
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Не удалось получить информацию!" })
    }
  }
}

module.exports = new CitiesController()