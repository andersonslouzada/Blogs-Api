function extractToken(bearerToken) { return bearerToken.split(' ')[1]; }

module.exports = extractToken;