const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

async function createCategory(request, response) {
  const category = request.body;

  const { status, data } = await categoryService.createCategory(category);

  return response.status(mapStatusHTTP(status)).json(data);
}

// async function findAll(request, response) {
//   const { status, data } = await userService.findAll();

//   return response.status(mapStatusHTTP(status)).json(data);
// }

// async function findById(request, response) {
//   const { id } = request.params;
//   const { status, data } = await userService.findById(id);

//   return response.status(mapStatusHTTP(status)).json(data);
// }

module.exports = {
  createCategory,
  // findAll,
  // findById,
};
