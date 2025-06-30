const express = require('express');
const app = express();
// const productRoutes = require('./routes/product.route');

app.use(express.json());
// app.use('/', productRoutes);

const pool = require('../db');

const getProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.status(200).json(result.rows); // ✅ json response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const router = express.Router();
router.get('/api/products', getProducts);

// app.get('/', (req, res) => {
//   res.status(200).json({ message: '✅ Server is running successfully!' });
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
