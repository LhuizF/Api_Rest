const multer = require('multer');
const multerConfig = require('../config/multerConfig');

const Photo = require('../models/Photo');

const upload = multer(multerConfig).single('foto');

class PhotoController {
    create(req, res) {
        return upload(req, res, async (err) => {
            if(err) {
                return res.status(400).json({
                    errors: [err.code]
                });
            }

            try {
                const { originalname, filename } = req.file;
                const { aluno_id } = req.body; // eslint-disable-line
                const photo = await Photo.create({ originalname, filename, aluno_id });

                return res.json(photo);
            } catch (e) {
                console.log(e);
                return res.status(400).json({
                    errors: ['Aluno não existe']
                });
            }
        });
    }
}

module.exports = new PhotoController();
