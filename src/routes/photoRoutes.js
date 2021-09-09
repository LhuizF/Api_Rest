const express = require('express');

const photoController = require('../controllers/PhotoController');
const loginRequired = require('../middlewares/loginRequired');

const routes = express.Router();

routes.post('/', loginRequired, photoController.create);

module.exports = routes;
