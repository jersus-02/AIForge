const express = require('express');
const path = require('path');
const compile = require('inline-cpp');
const app = express();
const PORT = 8080;

// 1. Manually serve your main homepage at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 1.5 The primary asset and folder engine (Handles paths, caching, and clean HTML extensions)
app.use(express.static(__dirname, {
    maxAge: 0,
    etag: false,
    index: 'index.html',
    extensions: ['html', 'htm']
}));

app.listen(PORT, () => {
    console.log(`Server is live at this devices ip, port:${PORT}`);
});
