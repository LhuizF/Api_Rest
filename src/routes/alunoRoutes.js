const express = require('express');
const alunoController = require('../controllers/AlunoController');

const routes = express.Router();

routes.get('/', alunoController.index);
routes.post('/', alunoController.create);

routes.put('/:id', alunoController.update);
routes.get('/:id', alunoController.show);
routes.delete('/:id', alunoController.delete);

module.exports = routes;
