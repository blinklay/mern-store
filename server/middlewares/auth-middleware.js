const createHttpError = require("http-errors")
const jwt = require("jsonwebtoken")

module.exports = function authMiddleware(req, res, next) {
  const token = req.cookies.accessToken
  if (!token) {
    return next(createHttpError(401, "Пользователь не авторизован!"))
  }

  try {
    const user = jwt.verify(token, process.env.JWT_ACCESS_KEY)
    if (!user) {
      return next(createHttpError(401, "Пользователь не авторизован!"))
    }

    req.user = user;
    next()
  } catch (error) {
    if (err.name === "TokenExpiredError") {
      return next(createHttpError(401, "Срок действия токена истёк"));
    }
    if (err.name === "JsonWebTokenError") {
      return next(createHttpError(401, "Невалидный токен"));
    }
    return next(createHttpError(401, "Пользователь не авторизован"));
  }
}