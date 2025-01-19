const express = require('express');
const app = express();

// GET /
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// GET /cart/:id
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (!/^\d+$/.test(id)) {
    return res.status(404).send();
  }
  res.status(200).send(`Payment methods for cart ${id}`);
});

// Start server
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
