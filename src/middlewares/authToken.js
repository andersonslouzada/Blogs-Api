const jwt = require('jsonwebtoken');
const getToken = require('../utils/extractToken');

function authToken(request, response, next) {
  const { authorization } = request.headers;

  if (!authorization) return response.status(401).json({ message: 'Token not found' });

  const token = getToken(authorization);

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.error(error.message);
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = authToken;