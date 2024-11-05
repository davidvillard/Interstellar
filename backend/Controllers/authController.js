// controllers/authController.js
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Directorio donde se guardarán los archivos
const uploadDir = path.join(__dirname, '../Uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const mimeType = allowedTypes.test(file.mimetype);
    if (mimeType) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo no permitido. Solo se permiten imágenes.'));
    }
};

const upload = multer({ storage, fileFilter });

const register = async (req, res) => {
    const { name, surname, gender, country, birthdate, email, password, phone } = req.body;
    const avatar = req.file ? req.file.filename : null;

    // Validar los campos obligatorios
    if (!name || !surname || !gender || !country || !birthdate || !email || !password || !phone) {
        if (avatar) fs.unlinkSync(path.join(uploadDir, avatar)); // Eliminar avatar cargado si hay error
        return res.status(400).json({ message: 'Todos los campos son obligatorios menos avatar' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserción en la base de datos
    db.query(
        'INSERT INTO users (Nombre, Apellidos, Genero, Pais, Fecha_de_nacimiento, Email, Contrasena, Telefono, Avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [name, surname, gender, country, birthdate, email, hashedPassword, phone, avatar],
        (err, result) => {
            if (err) {
                if (avatar) fs.unlinkSync(path.join(uploadDir, avatar)); // Eliminar archivo en caso de error
                return res.status(500).json({ message: 'Error al registrar el usuario' });
            }
            return res.status(201).json({ message: 'Usuario registrado exitosamente' });
        }
    );
};

const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    db.query('SELECT * FROM users WHERE Email = ?', [email], async (err, results) => {
        if (err) {
            console.error("Error en la consulta:", err);
            return res.status(500).json({ message: 'Error en la consulta de la base de datos' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Usuario incorrecto' });
        }

        const user = results[0];

        // Asegúrate de que estás utilizando el nombre de columna correcto aquí
        const passwordMatch = await bcrypt.compare(password, user.Contrasena); // Cambia aquí si es necesario

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        req.session.userId = user.id;
        return res.json({ message: 'Login exitoso' });
    });
};



module.exports = { register, login };
