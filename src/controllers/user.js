const { userService } = require('../services');
const decodeToken = require('../utils/decodeToken');
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

const deleteUser = async (request, response) => {
  const token = request.headers.authorization;
  const { id: userId } = decodeToken(token);

  const { status, data } = await userService.deleteUser(userId);
  return response.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createUser,
  findAll,
  findById,
  deleteUser,
};
