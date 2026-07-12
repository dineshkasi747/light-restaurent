const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3005;

// Serve restaurant site static files at root (index.html, wp-content, wp-includes, etc. are all local now!)
app.use(express.static(path.join(__dirname)));

// Redirect any root path requests to index.html if not handled by express.static
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
