import User from '../models/User';

class UserController {
    async create(req, res) {
        try {
            let newUser = await User.create(req.body);
            const { id, nome, email } = newUser;
            newUser = { id, nome, email };

            return res.json(newUser);
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            });
        }
    }

    async index(req, res) {
        try {
            const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
            return res.json(users);
        } catch (e) {
            console.log(e);
            return res.json(null);
        }
    }

    async show(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            return res.json(user);
        } catch (e) {
            console.log(e);
            return res.json(null);
        }
    }

    async update(req, res) {
        try {
            const user = await User.findByPk(req.userId);
            if(!user) {
                return res.status(400).json({
                    errors: ['Usuário inválido']
                });
            }

            let updatedUser = await user.update(req.body);
            const { id, nome, email } = updatedUser;
            updatedUser = { id, nome, email };

            return res.json(updatedUser);
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                errors: e.errors.map((er) => er.message)
            });
        }
    }

    async delete(req, res) {
        try {
            const user = await User.findByPk(req.userId);
            if(!user) {
                return res.status(400).json({
                    errors: ['Usuário inválido']
                });
            }

            await user.destroy();
            return res.json(`${user.email} Deletado`);
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                errors: e.errors.map((er) => er.message)
            });
        }
    }
}

module.exports = new UserController();
