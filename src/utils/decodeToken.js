const jwt = require('jsonwebtoken');
const extractToken = require('./extractToken');

const decodeToken = (authToken) => {
  const token = extractToken(authToken);

  return jwt.decode(token);
};

module.exports = decodeToken;