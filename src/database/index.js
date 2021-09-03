import Aluno from '../models/Aluno';
import User from '../models/User';

const Sequelize = require('sequelize');
const databadeConfig = require('../config/database');

const models = [Aluno, User];

const connection = new Sequelize(databadeConfig);

models.forEach((model) => model.init(connection));
