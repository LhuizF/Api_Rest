const express = require('express');
const alunoController = require('../controllers/AlunoController');
const loginRequired = require('../middlewares/loginRequired');

const routes = express.Router();

routes.get('/', alunoController.index);
routes.post('/', loginRequired, alunoController.create);

routes.put('/:id', loginRequired, alunoController.update);
routes.get('/:id', alunoController.show);
routes.delete('/:id', loginRequired, alunoController.delete);

module.exports = routes;
