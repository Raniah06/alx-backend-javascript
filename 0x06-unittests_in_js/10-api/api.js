const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route GET /
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Route GET /available_payments
app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.status(200).json(paymentMethods);
});

// Route POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Username is required');
  }
});

// Route GET /cart/:id (Only accepts numeric ids)
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.status(404).send('Not Found');
  } else {
    res.status(200).send(`Payment methods for cart ${id}`);
  }
});

// Start server
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
