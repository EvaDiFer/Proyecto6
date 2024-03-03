require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const obrasRouter = require('./src/api/routes/obras');
const autoresRouter = require('./src/api/routes/autor');
const app = express();

app.use(express.json());

connectDB();
app.use('/api/v1/autor', autoresRouter);
app.use('/api/v1/obras', obrasRouter);

app.use('*', (req, res, next) => {
  return res.status(404).json('route not found');
});

app.listen(3000, () => {
  console.log('servidor levantado en: http://localhost:3000  🚀');
});
