const httpErrorMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUE: 422,
};

function mapStatusHTTP(status) { return httpErrorMap[status] || 500; }

module.exports = mapStatusHTTP;