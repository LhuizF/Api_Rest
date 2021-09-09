const Sequelize = require('sequelize');
const Aluno = require('../models/Aluno');
const User = require('../models/User');
const databadeConfig = require('../config/database');

const models = [Aluno, User];

const connection = new Sequelize(databadeConfig);

models.forEach((model) => model.init(connection));
