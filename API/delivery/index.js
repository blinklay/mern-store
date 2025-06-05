require("dotenv").config()

const express = require("express")
const cors = require("cors")
const { default: mongoose } = require("mongoose")
const router = require("./router")
const app = express()

app.use(express.json())
app.use(cors())

app.use("/delivery", router)

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(process.env.PORT || 5000, () => console.log("delivery api start"))
  } catch (error) {
    console.log(error);
  }
}

start()