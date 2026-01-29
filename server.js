const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve the main HTML file for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'competitor-intelligence.html'));
});

// Serve the HTML file for any other route (catch-all for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'competitor-intelligence.html'));
});

// Health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🧠 CompeteIQ running on port ${PORT}`);
  console.log(`🚀 Server ready!`);
});