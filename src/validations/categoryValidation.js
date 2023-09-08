const { categorySchema } = require('./schemas');

function validateCategory(keys) {
  const { error } = categorySchema.validate(keys);

  if (error) {
    return { status: 'BAD_REQUEST', message: '"name" is required' };
  }
}

module.exports = {
  validateCategory,
};