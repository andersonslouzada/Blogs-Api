const { BlogPost, Category, PostCategory } = require('../models');
const schema = require('../validations/dataValidation');

async function createPost(userId, post) {
  const error = schema.validatePost(post);
  if (error) return { status: error.status, data: { message: error.message } };

  const { categoryIds, ...postContent } = post;
  const newPost = await BlogPost
    .create({ ...postContent, userId });

  const verifyCategories = await Promise.all(categoryIds
    .map(async (categoryId) => Category.findAll({ where: { id: categoryId } })));

  if (verifyCategories.some((category) => category.length === 0)) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }

  const newPostCategories = categoryIds
    .map((categoryId) => ({ postId: newPost.dataValues.id, categoryId }));

  await PostCategory.bulkCreate(newPostCategories);

  return { status: 'CREATED', data: newPost };
}

module.exports = {
  createPost,
};