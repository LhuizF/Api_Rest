const Sequelize = require('sequelize');
const appConfig = require('../config/appConfig');

module.exports = class Photo extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            originalname: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        mgs: 'Campo não pode ser nulo'
                    }
                }
            },

            filename: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        mgs: 'Campo não pode ser nulo'
                    }
                }
            },

            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `${appConfig.url}/images/${this.getDataValue('filename')}`;
                }
            }
        },
        {
            sequelize,
            tableName: 'fotos'
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    }
};
