const jwt = require('jsonwebtoken');
const User = require('../models/User');

class TokenController {
    async create(req, res) {
        try {
            const { email = '', password = '' } = req.body;

            if(!email || !password) {
                return res.status(401).json({
                    errors: ['Email ou senha inválido']
                });
            }

            const user = await User.findOne({ where: { email } });

            if(!user) {
                return res.status(401).json({
                    errors: ['Usuário não existe']
                });
            }

            if(!(await user.checkPassword(password))) {
                return res.status(401).json({
                    errors: ['Senha inválida']
                });
            }

            const { id } = user;

            const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
                expiresIn: process.env.TOKEN_EXPIRES
            });

            return res.json({ token });
        } catch (e) {
            return console.log(e);
        }
    }
}

module.exports = new TokenController();
