import express from 'express';
import routes from './routes/index';

const app = express();

// Use routes from routes/index.js
app.use(routes);

// Start server on port 1245
app.listen(1245, () => {
  console.log('Server running on port 1245');
});

export default app;
