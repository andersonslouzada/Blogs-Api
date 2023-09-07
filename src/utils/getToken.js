const extractToken = (bearerToken) => bearerToken.split(' ')[1];

module.exports = extractToken;