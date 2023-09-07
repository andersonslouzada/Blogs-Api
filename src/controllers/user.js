const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createUser = async (request, response) => {
  const user = request.body;

  const { status, data } = await userService.createUser(user);

  return response.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createUser,
};
