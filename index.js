const express = require('express');
const app = express();
const productRoutes = require('./routes/product.route');

app.use(express.json());
app.use('/api', productRoutes);

const PORT = 3000;
app.listen(3000 || PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
