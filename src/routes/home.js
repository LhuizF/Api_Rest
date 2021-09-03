// const homeController = require('../controllers/Home');
import homeController from '../controllers/Home';

const express = require('express');

const routes = express.Router();

routes.get('/', homeController.index);

module.exports = routes;
