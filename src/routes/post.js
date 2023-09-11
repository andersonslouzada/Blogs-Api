const postRouter = require('express').Router();
const { postController } = require('../controllers');
const authToken = require('../middlewares/authToken');

postRouter.post('/post', authToken, postController.createPost);
postRouter.get('/post', authToken, postController.getAllPosts);
postRouter.get('/post/:id', authToken, postController.getPostById);
postRouter.put('/post/:id', authToken, postController.updatePost);
// postRouter.delete('/post/:id', authToken, postController.deletePost);

module.exports = postRouter;