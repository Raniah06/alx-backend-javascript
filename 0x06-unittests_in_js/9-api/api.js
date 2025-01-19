// 9-api/api.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Start the server
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export app for testing
