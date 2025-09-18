require("dotenv").config()
const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./route")

const app = express()
app.use(cors({
  origin: process.env.CLIENT_URL,
  httpOnly: true,
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api", router)

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.log(err);

  const status = err.statusCode || err.status || 500;
  const message = err.message || "Unexpected error";

  if (status === 500) {
    return res.status(status).json({ message: "Ошибка сервера!" });
  }

  res.status(status).json({ message });
})

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("database connected");

    app.listen(process.env.PORT, () => console.log(`server started on PORT: ${process.env.PORT}`))
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
}

start()