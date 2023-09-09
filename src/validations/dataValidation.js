const { userSchema, categorySchema, postSchema } = require('./schemas');

function validateUser(keys) {
  const { error } = userSchema.validate(keys);

  if (error) {
    let message = '';

    if (error.message.includes('8')) {
      message = '"displayName" length must be at least 8 characters long';
    } else if (error.message.includes('email')) {
      message = '"email" must be a valid email';
    } else if (error.message.includes('6')) {
      message = '"password" length must be at least 6 characters long';
    }

    return { status: 'BAD_REQUEST', message };
  }
}

function validateCategory(keys) {
  const { error } = categorySchema.validate(keys);

  if (error) {
    return { status: 'BAD_REQUEST', message: '"name" is required' };
  }
}

function validatePost(keys) {
  const { error } = postSchema.validate(keys);

  if (error) {
    return { status: 'BAD_REQUEST', message: 'Some required fields are missing' };
  }
}

module.exports = {
  validateUser,
  validateCategory,
  validatePost,
};
