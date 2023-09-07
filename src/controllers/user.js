const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

async function createUser(request, response) {
  const user = request.body;

  const { status, data } = await userService.createUser(user);

  return response.status(mapStatusHTTP(status)).json(data);
}

async function getUsers(request, response) {
  const { status, data } = await userService.getUsers();

  return response.status(mapStatusHTTP(status)).json(data);
}

module.exports = {
  createUser,
  getUsers,
};
