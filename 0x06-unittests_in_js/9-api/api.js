// 9-api/api.js
const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Cart route with validation
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;

  if (!/^\d+$/.test(id)) {
    return res.status(404).send('Not Found');
  }

  res.status(200).send(`Payment methods for cart ${id}`);
});

// Start the server
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export app for testing
