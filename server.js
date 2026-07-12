const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3005;

// Serve restaurant site static files at root
app.use(express.static(path.join(__dirname)));

// Serve shared assets from workspace root (wp-content, wp-includes)
app.use('/wp-content', express.static(path.join(__dirname, '../wp-content')));
app.use('/wp-includes', express.static(path.join(__dirname, '../wp-includes')));

// Serve shared assets from parent's parent directory (export.qodethemes.com, www.googletagmanager.com)
app.use('/export.qodethemes.com', express.static(path.join(__dirname, '../../export.qodethemes.com')));
app.use('/www.googletagmanager.com', express.static(path.join(__dirname, '../../www.googletagmanager.com')));

// Redirect any root path requests to index.html if not handled by express.static
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
