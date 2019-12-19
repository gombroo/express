const express = require('express');
const path = require('path');

const app = express();

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/views/index.html'));
// });

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname + '/views/about.html'));
// });

// app.get('/contact', (req, res) => {
//   res.sendFile(path.join(__dirname + '/views/contact.html'));
// });

// app.get('/info', (req, res) => {
//   res.sendFile(path.join(__dirname + '/views/info.html'));
// });

// app.get('/history', (req, res) => {
//   res.sendFile(path.join(__dirname + '/views/history.html'));
// });

app.use('/admin', (req, res, next) => {
  if(isAdmin()) next();
  else res.send('Go away!');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/cart.html'));
});

app.get('/admin/products', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/admin/products.html'));
});

app.get('/admin/payments', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/admin/payments.html'));
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});