const multer = require('multer');
const path = require('path');

module.exports = {
    fileFilter: (req, file, callback) => {
        if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
            return callback(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'));
        }

        return callback(null, true);
    },
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', 'uploads', 'images'));
        },
        filename: (req, file, callback) => {
            callback(null, `profile_${Date.now()}${path.extname(file.originalname)}`);
        }
    })
};
