import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res) {
        try {
            const newAluno = await Aluno.create({
                nome: 'Maria',
                sobrenome: 'oliveira',
                email: 'mariaa',
                idade: 28,
                peso: 60,
                altura: 160,
            });

            res.json(newAluno);
        } catch (e) {
            console.log(e);
        }
    }
}

export default new HomeController();
