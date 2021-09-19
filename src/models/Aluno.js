const Sequelize = require('sequelize');

module.exports = class Aluno extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Nome precisa ter entre 3 a 255 caracteres'
                    }
                }
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Sobrenome precisa ter entre 3 a 255 caracteres'
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail já cadastrado'
                },
                validate: {
                    isEmail: {
                        msg: 'E-mail inválido'
                    }
                }
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt: {
                        msg: 'Idade inválido'
                    }
                }
            },

            curso: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Curso inválido'
                    }
                }
            }

        },
        { sequelize });

        return this;
    }

    static associate(models) {
        this.hasMany(models.Photo, { foreignKey: 'aluno_id' });
    }
};
