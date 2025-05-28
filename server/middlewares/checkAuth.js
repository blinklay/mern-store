const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
  try {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(401).json({ message: "Нет авторизации!" })
    }

    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    req.userId = decoded.id;
    next()
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Ошибка авторизации" })
  }
}

module.exports = checkAuth