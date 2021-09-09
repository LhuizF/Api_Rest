const multer = require('multer');
const multerConfig = require('../config/multerConfig');
const Photo = require('../models/Photo');

const upload = multer(multerConfig).single('foto');

class PhotoController {
    create(req, res) {
        return upload(req, res, async (error) => {
            if(error) {
                res.status(400).json({
                    errors: [error.code]
                });
            }
            try {
                const { originalname, filename } = req.file;
                const { aluno_id } = req.body;
                const photo = await Photo.create({ originalname, filename, aluno_id });

                return res.json(photo);
            } catch (e) {
                console.log(e);
                return res.status(400).json({
                    errors: ['Alunos não existe']
                });
            }
        });
    }
}

module.exports = new PhotoController();
