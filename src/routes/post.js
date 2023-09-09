const postRouter = require('express').Router();
const { postController } = require('../controllers');
const authToken = require('../middlewares/authToken');

postRouter.post('/post', authToken, postController.createPost);
postRouter.get('/post', authToken, postController.getAllPosts);

module.exports = postRouter;