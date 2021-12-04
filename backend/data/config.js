const mysql = require('mysql'); // Set database connection credentials
const config = {
    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    host: 'localhost',
    user: 'maxzxa',
    password: 'gappy@2112',
    database: 'survivor'
};
// Create a MySQL pool
const pool = mysql.createPool(config);
// Export the pool
module.exports = pool;