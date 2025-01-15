// 8-api/api.js

const express = require('express');
const app = express();

// Endpoint for the root route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Start the server
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;  // Export app for testing purposes
