const userModel = require("../models/user-model");

class UserController {
  async getUsers(req, res) {
    const users = await userModel.find()
    res.status(200).json({ users })
  }
}

module.exports = new UserController()