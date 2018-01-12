const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'salary_calc', 
    host: 'localhost',
    post: 5432,
    max: 10,
    idleTimeoutMillis: 5000,
}

const pool = new Pool(config);

module.exports = pool;