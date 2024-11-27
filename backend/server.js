const express = require('express');
const app = express();
const PORT = 5001; 

// Middleware for JSON parsing
app.use(express.json());

// Sample API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});