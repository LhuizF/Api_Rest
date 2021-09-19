const Aluno = require('../models/Aluno');
const Photo = require('../models/Photo');

class AlunoController {
    async index(req, res) {
        try {
            const alunos = await Aluno.findAll({
                attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'curso'],
                order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
                include: {
                    model: Photo,
                    attributes: ['filename', 'url']
                }
            });
            return res.json(alunos);
        } catch (e) {
            console.log(e);
            return res.json(null);
        }
    }

    async create(req, res) {
        try {
            const aluno = await Aluno.create(req.body);

            return res.json(aluno);
        } catch (e) {
            return res.status(400).json({

                errors: e.errors.map((err) => {
                    console.log(err);
                    return err.message;
                })

            });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;

            if(!id) {
                return res.status(400).json({
                    errors: ['ID inválido']
                });
            }

            const aluno = await Aluno.findByPk(id);

            if(!aluno) {
                return res.status(400).json({
                    errors: ['Aluno não existe']
                });
            }

            const newAluno = await aluno.update(req.body);

            return res.json(newAluno);
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            });
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;

            if(!id) {
                return res.status(400).json({
                    errors: ['ID inválido']
                });
            }

            const aluno = await Aluno.findByPk(id, {
                attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'curso'],
                order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
                include: {
                    model: Photo,
                    attributes: ['filename', 'url']
                }
            });

            if(!aluno) {
                return res.status(400).json({
                    errors: ['Aluno não existe']
                });
            }

            return res.json(aluno);
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            if(!id) {
                return res.status(400).json({
                    errors: ['ID inválido']
                });
            }

            const aluno = await Aluno.findByPk(id);

            if(!aluno) {
                return res.status(400).json({
                    errors: ['Aluno não existe']
                });
            }

            await aluno.destroy();
            return res.json(`${aluno.nome} deletado`);
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            });
        }
    }
}

module.exports = new AlunoController();
