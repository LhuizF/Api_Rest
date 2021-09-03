import Sequelize, { Model } from 'sequelize';

const bcryptjs = require('bcryptjs');

export default class User extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 50],
                        msg: 'Campo nome deve ter entre 3 e 50 caracteres',
                    },
                },
            },

            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'Email já cadastrado',
                },
                validate: {
                    isEmail: {
                        msg: 'Email inválido',
                    },
                },
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 25],
                        msg: 'Senha precisa ter entre 6 e 25 caracteres',
                    },
                },
            },
        },
        {
            sequelize,
        });

        this.addHook('beforeSave', async (user) => {
            user.password_hash = await bcryptjs.hash(user.password, 8);
        });

        return this;
    }
}
