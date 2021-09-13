const Sequelize = require('sequelize');
const databadeConfig = require('../config/database');

const Aluno = require('../models/Aluno');
const User = require('../models/User');
const Photos = require('../models/Photo');

const models = [Aluno, User, Photos];

const connection = new Sequelize(databadeConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
