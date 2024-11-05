// middleware/uploadAvatar.js
const multer = require('multer');
const path = require('path');

// Configuración de multer (como en authController.js)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../Uploads')),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  allowedTypes.test(file.mimetype) ? cb(null, true) : cb(new Error('Solo se permiten imágenes.'));
};

const upload = multer({ storage, fileFilter });

module.exports = upload.single('avatar');
