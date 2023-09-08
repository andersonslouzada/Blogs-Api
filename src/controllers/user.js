const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

async function createUser(request, response) {
  const user = request.body;

  const { status, data } = await userService.createUser(user);

  return response.status(mapStatusHTTP(status)).json(data);
}

async function findAll(_request, response) {
  const { status, data } = await userService.findAll();

  return response.status(mapStatusHTTP(status)).json(data);
}

async function findById(request, response) {
  const { id } = request.params;
  const { status, data } = await userService.findById(id);

  return response.status(mapStatusHTTP(status)).json(data);
}

module.exports = {
  createUser,
  findAll,
  findById,
};
