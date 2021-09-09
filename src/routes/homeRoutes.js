const express = require('express');
const homeController = require('../controllers/HomeController');

const routes = express.Router();

routes.get('/', homeController.index);

module.exports = routes;
