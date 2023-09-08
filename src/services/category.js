const { Category } = require('../models');
const schema = require('../validations/categoryValidation');

async function createCategory(category) {
  const error = schema.validateCategory(category);
  if (error) return { status: error.status, data: { message: error.message } };

  const newCategory = await Category.create(category);
  return { status: 'CREATED', data: newCategory };
}

// async function findAll() {
//   const users = await User.findAll({ attributes: { exclude: ['password'] } });
//   return { status: 'SUCCESSFUL', data: users };
// }

// async function findById(id) {
//   const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
//   if (!user) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
//   return { status: 'SUCCESSFUL', data: user };
// }

module.exports = {
  createCategory,
  // findAll,
  // findById,
};