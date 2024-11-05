// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../Controllers/authController');
const router = express.Router();
const uploadAvatar = require('../Middleware/uploadAvatar');

router.post('/register', uploadAvatar, register);
router.post('/login', (req, res) => {
    console.log("Solicitud de login recibida:", req.body); // Agrega esta línea para depuración
    login(req, res); // Llama a la función de login
});

module.exports = router;
