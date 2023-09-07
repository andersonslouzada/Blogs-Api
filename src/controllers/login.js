const { loginService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (request, response) => {
  const { email, password } = request.body;
  const { status, data } = await loginService.login(email, password);
  return response.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  login,
};
