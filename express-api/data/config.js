const mysql = require('mysql');
//Create a MySQL pool para conexiones múltiples en paralelo


// Configuracion de las credenciales de la base de datos
const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'libros',
};

const pool = mysql.createPool(config);


// Export the pool
module.exports = pool;