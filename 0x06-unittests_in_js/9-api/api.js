// 9-api/api.js

const express = require('express');
const app = express();

// Endpoint for the root route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Endpoint for the cart route with regex validation for :id being a number
app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Payment methods for cart ${id}`);
});

// If :id is not a number, handle with 404 error
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;  // Export app for testing purposes
