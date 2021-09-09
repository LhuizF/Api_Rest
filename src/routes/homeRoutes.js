const express = require('express');
const homeController = require('../controllers/HomeController');
// import homeController from '../controllers/HomeController';

const routes = express.Router();

routes.get('/', homeController.index);

module.exports = routes;
