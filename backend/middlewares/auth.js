// require('dotenv').config();
// const jwt = require('jsonwebtoken');
// const ErrorAuthorized = require('../errors/ErrorAuthorized');

// module.exports = (req, res, next) => {
//   const { authorization } = req.headers;
//   if (!authorization || !authorization.startsWith('Bearer ')) {
//     return next(new ErrorAuthorized('Необходима авторизация'));
//   }

//   const token = authorization.replace('Bearer ', '');
//   let payload;

//   try {
//     const { NODE_ENV, JWT_SECRET } = process.env;
//     payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
//   } catch (err) {
//     return next(new ErrorAuthorized('Необходима авторизация'));
//   }

//   req.user = payload; // записываем пейлоуд в объект запроса

//   return next(); // пропускаем запрос дальше return
// };
