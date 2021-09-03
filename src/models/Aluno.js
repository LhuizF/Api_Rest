import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            sobrenome: Sequelize.STRING,
            email: Sequelize.STRING,
            idade: Sequelize.INTEGER,
            peso: Sequelize.FLOAT,
            altura: Sequelize.FLOAT,
        },
        {
            sequelize,
        });

        return this;
    }
}

// name: {
//     type: Sequelize.STRING,
//     allowNull: false,
// },

// lastName: {
//     type: Sequelize.STRING,
//     allowNull: false,
// },

// email: {
//     type: Sequelize.STRING,
//     allowNull: false,
// },

// age: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
// },

// peso: {
//     type: Sequelize.FLOAT,
//     allowNull: false,
// },

// altura: {
//     type: Sequelize.FLOAT,
//     allowNull: false,
// },
