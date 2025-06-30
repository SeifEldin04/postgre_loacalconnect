require('dotenv').config();
const express = require('express');
const app = express();
const productRoutes = require('./routes/product.route');

app.use(express.json());
app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: '✅ Server is running successfully!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
