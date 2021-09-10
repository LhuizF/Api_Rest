const express = require('express');
const userController = require('../controllers/UserController');
const loginRequired = require('../middlewares/loginRequired');

const routes = express.Router();

routes.get('/', userController.index);
routes.get('/:id', userController.show);

routes.post('/', loginRequired, userController.create);
routes.put('/', loginRequired, userController.update);
routes.delete('/', loginRequired, userController.delete);

module.exports = routes;
