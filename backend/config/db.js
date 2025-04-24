const { Pool } = require('pg');

const pool = new Pool({
  host: 'db',
  user: 'myuser',
  password: 'mypassword',
  database: 'mydatabase',
  port: 5432
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};

