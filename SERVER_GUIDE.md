# 🎰 Epstein Bets - Server Setup Guide

## 📦 Prerequisites

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Phantom Wallet** browser extension

## 🚀 Quick Start

### 1. Install Dependencies

Open terminal in the project folder and run:

```bash
npm install
```

This will install:
- `express` - Web server framework
- `socket.io` - Real-time WebSocket communication
- `cors` - Cross-Origin Resource Sharing
- `nodemon` - Auto-restart server on changes (dev only)

### 2. Start the Server

**Production mode:**
```bash
npm start
```

**Development mode (auto-restart on file changes):**
```bash
npm run dev
```

### 3. Open in Browser

Navigate to:
```
http://localhost:3000
```

The server will display:
```
╔════════════════════════════════════════╗
║   🎰 EPSTEIN BETS SERVER RUNNING 🎰   ║
╠════════════════════════════════════════╣
║   Port: 3000
║   URL: http://localhost:3000
║   Status: ONLINE
╚════════════════════════════════════════╝
```

## 🌐 Pages Available

- **Main/Bets**: `http://localhost:3000/` or `/bets`
- **Live Lobby**: `http://localhost:3000/lobby`
- **History**: `http://localhost:3000/history`
- **Payouts**: `http://localhost:3000/payouts`

## 💬 Real-Time Chat Features

The live lobby now has **real WebSocket chat**:

### How It Works:
1. User connects wallet
2. Sets username in lobby
3. Socket.io establishes real-time connection
4. Messages broadcast to all connected users instantly
5. See who's online in real-time

### Features:
- ✅ Real-time messaging
- ✅ Active users list
- ✅ Join/leave notifications
- ✅ Message history (last 100 messages)
- ✅ Auto-reconnect on disconnect
- ✅ Fallback to simulated chat if server offline

## 🔌 API Endpoints

### Server Status
```
GET /api/status
```
Returns:
```json
{
  "status": "online",
  "activeUsers": 5,
  "uptime": 3600,
  "timestamp": "2025-01-20T10:30:00.000Z"
}
```

### Active Users
```
GET /api/users/active
```
Returns:
```json
{
  "count": 5,
  "users": [
    {
      "username": "CryptoKing",
      "joinedAt": "2025-01-20T10:25:00.000Z"
    }
  ]
}
```

### Chat Messages
```
GET /api/chat/messages?limit=50
```
Returns last 50 chat messages.

### Health Check
```
GET /health
```
Returns: `OK`

## 🔧 Configuration

### Change Port

Edit `server.js` or set environment variable:

**Windows:**
```bash
set PORT=8080
npm start
```

**Mac/Linux:**
```bash
PORT=8080 npm start
```

### Environment Variables

Create `.env` file (copy from `.env.example`):

```env
PORT=3000
```

## 🌍 Deployment

### Deploy to Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create epstein-bets`
4. Push: `git push heroku main`
5. Open: `heroku open`

### Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Connect your repository
4. Railway auto-detects Node.js and deploys

### Deploy to Render

1. Go to [render.com](https://render.com)
2. New Web Service
3. Connect GitHub repo
4. Build command: `npm install`
5. Start command: `npm start`

### Deploy to Vercel (Serverless)

```bash
npm i -g vercel
vercel
```

**Note**: WebSockets may need special configuration on serverless platforms.

## 🐛 Troubleshooting

### Port Already in Use

**Error**: `EADDRINUSE: address already in use`

**Solution**: Change port or kill process using port 3000

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

### Socket.io Not Connecting

1. Check server is running
2. Open browser console (F12)
3. Look for connection errors
4. Check CORS settings in `server.js`
5. Verify Socket.io CDN loaded in `lobby.html`

### Phantom Wallet Not Detected

1. Install Phantom extension
2. Refresh page
3. Check console for errors
4. Try in different browser

## 📊 Monitoring

### View Server Logs

All connections and messages logged to console:
```
Connected to wallet: 4Abc...xyz9
CryptoKing joined the chat. Active users: 5
Message from CryptoKing: Let's bet!
```

### Active Connections

Check in browser console:
```javascript
// Open console (F12) on any page
socket.connected  // true/false
socket.id         // socket ID
```

## 🔐 Security Notes

### Current Implementation:
- ✅ CORS enabled (all origins in dev)
- ✅ Only stores public wallet addresses
- ✅ No private keys handled
- ✅ Express security headers

### For Production:
1. **Restrict CORS** to your domain only
2. **Add rate limiting** (express-rate-limit)
3. **Sanitize user input** (prevent XSS)
4. **Use HTTPS** (SSL certificate)
5. **Add authentication** (JWT tokens)
6. **Database** for persistence (MongoDB, PostgreSQL)

### Example Production CORS:

```javascript
const io = socketIo(server, {
    cors: {
        origin: "https://yourdomain.com",
        methods: ["GET", "POST"]
    }
});
```

## 🎯 Next Steps

### 1. Add Database (MongoDB)

```bash
npm install mongoose
```

Store bets, users, and messages permanently.

### 2. Solana Integration

```bash
npm install @solana/web3.js @solana/spl-token
```

Connect to your $TEB token contract.

### 3. Add Redis (for scaling)

```bash
npm install redis
```

Cache data and scale across multiple servers.

### 4. Add Rate Limiting

```bash
npm install express-rate-limit
```

Prevent spam and abuse.

## 📝 File Structure

```
jeff/
├── server.js              # Main server file
├── package.json           # Dependencies
├── .env.example           # Environment template
├── bets.html              # Main betting page
├── lobby.html             # Real-time chat (Socket.io enabled)
├── history.html           # Bet history
├── payouts.html           # Payouts page
├── shared.js              # Wallet & navigation
├── styles.css             # Styles
└── images/                # All profile & comic images
```

## 🆘 Support

### Common Issues:

**"Cannot find module 'express'"**
→ Run `npm install`

**"Port 3000 is already in use"**
→ Change port or kill process

**"Chat not working"**
→ Check server is running and Socket.io connected

**"Wallet won't connect"**
→ Install Phantom wallet extension

## 🎉 Success!

If you see this in your browser and can:
- ✅ Connect Phantom wallet
- ✅ Place bets
- ✅ Chat in lobby in real-time
- ✅ See bet history
- ✅ View payouts

**You're all set!** 🚀

---

**Server is ready for production deployment when you add your $TEB contract address!**
