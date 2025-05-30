require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser");
const router = require("./router");
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use("/api", router)
app.use("/images", express.static("images"));

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(process.env.PORT, () => console.log("server start!"))
  } catch (error) {
    console.log(error);
  }
}

start()