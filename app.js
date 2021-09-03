import './src/database';

const dotenv = require('dotenv');
const express = require('express');
const homeRoutes = require('./src/routes/home');
const userRoutes = require('./src/routes/user');

dotenv.config();

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/users/', userRoutes);
    }
}

module.exports = new App().app;
