const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname), {
    extensions: ['html', 'htm']
}));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'bets.html'));
});

app.get('/bets', (req, res) => {
    res.sendFile(path.join(__dirname, 'bets.html'));
});

app.get('/history', (req, res) => {
    res.sendFile(path.join(__dirname, 'history.html'));
});

app.get('/payouts', (req, res) => {
    res.sendFile(path.join(__dirname, 'payouts.html'));
});

// API Endpoints

// Get server status
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// Health check
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'bets.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: err.message
    });
});

// Start server (only when run directly, not when imported by Vercel)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`
    ╔════════════════════════════════════════╗
    ║   🎰 EPSTEIN BETS SERVER RUNNING 🎰   ║
    ╠════════════════════════════════════════╣
    ║   Port: ${PORT}
    ║   URL: http://localhost:${PORT}
    ║   Status: ONLINE
    ╚════════════════════════════════════════╝
        `);
    });
}

// Export for Vercel
module.exports = app;
