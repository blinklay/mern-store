const { Schema, model } = require("mongoose")

const DeliveryPointSchema = new Schema({
  cityCode: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true,
    unique: true
  },
  coordinates: {
    lat: {
      type: Number,
      require: true
    },
    lng: {
      type: Number,
      require: true
    },
  },
  workTime: String,
  phone: String
})

module.exports = model("DeliveryPoint", DeliveryPointSchema)