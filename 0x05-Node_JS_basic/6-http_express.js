const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Error</title>
      </head>
      <body>
        <pre>Cannot GET ${req.originalUrl}</pre>
      </body>
    </html>
  `);
});

app.listen(1245, () => {
  console.log('Server running on http://localhost:1245');
});

module.exports = app;
