const express = require('express');
const tokenController = require('../controllers/TokenController');

const routes = express.Router();

routes.post('/', tokenController.create);

module.exports = routes;
