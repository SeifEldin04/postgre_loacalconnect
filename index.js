// api/index.js
const express = require('express');
const serverless = require('serverless-http');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:Seif33200@localhost:5432/products_demo',
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

// GET /api/products
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('❌ Database error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// اختبار بسيط لو حبيت تجرب
app.get('/api/ping', (req, res) => {
  res.status(200).send('pong');
});

// 👇 ده المطلوب عشان Vercel تشتغل
module.exports = serverless(app);
