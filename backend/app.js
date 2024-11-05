// server.js
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa CORS
const authRoutes = require('./Routes/authRoutes');
require('dotenv').config();
const db = require('./config/db');

const app = express();

// Configura CORS
app.use(cors({
    origin: 'http://localhost:4321', // Cambia esto al origen de tu frontend si es necesario
    methods: ['GET', 'POST'], // Métodos permitidos
    credentials: true // Permitir cookies si es necesario
}));

app.use(express.json()); // Asegúrate de que esto esté habilitado para que Express pueda procesar JSON
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Cambia a true si usas HTTPS en producción
}));

app.use('/api/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});