const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'products_demo',       
  password: 'Seif33200',   
  port: 5432,
});

module.exports = pool;

pool.on('connect', () => {
  console.log('✅ Connected to the PostgreSQL database');
});