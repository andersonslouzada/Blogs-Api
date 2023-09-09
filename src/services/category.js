const { Category } = require('../models');
const schema = require('../validations/dataValidation');

async function createCategory(category) {
  const error = schema.validateCategory(category);
  if (error) return { status: error.status, data: { message: error.message } };

  const newCategory = await Category.create(category);
  return { status: 'CREATED', data: newCategory };
}

async function findAll() {
  const categories = await Category.findAll();
  return { status: 'SUCCESSFUL', data: categories };
}

async function findById(id) {
  const category = await Category.findByPk(id);
  if (!category) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  return { status: 'SUCCESSFUL', data: category };
}

module.exports = {
  createCategory,
  findAll,
  findById,
};