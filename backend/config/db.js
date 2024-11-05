const mysql = require('mysql2');
require('dotenv').config();
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
    
});

db.connect((err) => {
    if (err) throw err;
    console.log("Conectado a la base de datos");
});

module.exports = db;
