// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'products_demo',       
//   password: 'Seif33200',   
//   port: 5432,
// });

// module.exports = pool;

// pool.on('connect', () => {
//   console.log('✅ Connected to the PostgreSQL database');
// });




const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on('connect', () => {
  console.log('✅ Connected to Supabase PostgreSQL');
});

module.exports = pool;
