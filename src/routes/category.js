const categoryRouter = require('express').Router();
const { categoryController } = require('../controllers');
const authToken = require('../middlewares/authToken');

categoryRouter.post('/categories', authToken, categoryController.createCategory);
categoryRouter.get('/categories', authToken, categoryController.findAll);

module.exports = categoryRouter;