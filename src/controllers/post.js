const postsService = require('../services/post');
const mapStatusHTTP = require('../utils/mapStatusHTTP');
const decodeToken = require('../utils/decodeToken');

const createPost = async (request, response) => {
  const post = request.body;
  const token = request.headers.authorization;

  const { sub: userId } = decodeToken(token);
  const { status, data } = await postsService.createPost(userId, post);

  return response.status(mapStatusHTTP(status)).json(data);
};

async function getAllPosts(_request, response) {
  const { status, data } = await postsService.getAllPosts();

  return response.status(mapStatusHTTP(status)).json(data);
}

module.exports = {
  createPost,
  getAllPosts,
};