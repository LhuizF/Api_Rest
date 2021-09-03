import User from '../models/User';

class UserController {
    async create(req, res) {
        try {
            const newUser = await User.create(req.body);

            res.json(newUser);
        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((er) => er.message),
            });
            console.log(e);
        }
    }
}

export default new UserController();
