// 10-api/api.js

const express = require('express');
const app = express();

app.use(express.json());  // To parse JSON request bodies

// Endpoint for the root route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Endpoint for the /cart/:id route with regex validation for :id being a number
app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Payment methods for cart ${id}`);
});

// Endpoint for the /available_payments route
app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.status(200).json(paymentMethods);  // Return payment methods as JSON
});

// Endpoint for the /login route
app.post('/login', (req, res) => {
  const { userName } = req.body;  // Extract userName from request body
  res.status(200).send(`Welcome ${userName}`);  // Send response with username
});

// If no route matches, return a 404 error
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;  // Export app for testing purposes
