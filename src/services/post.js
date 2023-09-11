const { BlogPost, Category, PostCategory, User } = require('../models');
const schema = require('../validations/dataValidation');

async function createPost(userId, post) {
  const error = schema.validatePost(post);
  if (error) return { status: error.status, data: { message: error.message } };

  const { categoryIds, ...postContent } = post;
  const newPostOBJ = { ...postContent, userId, updated: new Date(), published: new Date() };

  const newPost = await BlogPost.create(newPostOBJ);

  const newPostCategories = categoryIds.map((categoryId) => (
    { postId: newPost.dataValues.id, categoryId }));

  const verifyCategories = await Promise.all(categoryIds
    .map(async (categoryId) => Category.findAll({ where: { id: categoryId } })));

  if (verifyCategories.some((category) => category.length === 0)) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }
  await PostCategory.bulkCreate(newPostCategories);
  return { status: 'CREATED', data: newPost };
}

async function getAllPosts() {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 'SUCCESSFUL', data: posts };
}

async function getPostById(id) {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  return { status: 'SUCCESSFUL', data: post };
}

async function deletePost(userId, postId) {
  const postToDelete = await BlogPost.findByPk(postId);
  if (!postToDelete) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };

  const removedPost = await BlogPost.destroy({ where: { id: postId } });
  return { status: 'NO_CONTENT', data: removedPost };
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
};