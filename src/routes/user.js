import userController from '../controllers/User';

const express = require('express');

const routes = express.Router();

routes.post('/', userController.create);

module.exports = routes;

/*
index => lista todos usuários => GET
store/create => cria um novo usário => POST
delete => apaga um usuário = DELETE
show => mostra um usuário => GET
update => atualiza um usuário => PATCH ou PUT
*/
