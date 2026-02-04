# 🎰 EPSTEIN BETS - Celebrity Betting Platform

A controversial, comic book styled betting platform where users bet on whether high-profile celebrities will be named in the Epstein documents. Features a multi-page interface with live chat, betting, history tracking, and payouts.

## 🔥 THE PREMISE

**The Justice Department now has 30 days to publicly share all information from federal investigations into Epstein.**

Place your bets: Will these high-profile individuals be named in the released documents? **Over 12 flights** or **Under 12 flights** on the Lolita Express?

## 💰 TOKENOMICS

- ✅ All payouts are funded from **creator fees** earned from buys and sells of this coin
- 🔒 **Dev wallet locks at 250K Market Cap** - ensuring fair distribution
- 🎰 Win **1.9x your bet** when you guess correctly!

## 🎨 Features

### Universal Components (All Pages)
- **Fixed Header** with wallet connection
  - Connect Phantom Wallet button
  - Wallet address display
  - Always visible at top of every page
- **Universal Navigation Bar**
  - Place Bets, Live Lobby, History, Payouts
  - Highlights active page
  - Consistent across all pages
- **Comic Book Background**
  - 8 Jeff comic panels scattered across background
  - 7 celebrity profile bubbles floating around
  - Giant Jeffrey watermark
  - Animated gradient
  - Halftone dot overlay

### 🎮 Pages

#### 1. **Place Bets (bets.html)** - MAIN PAGE
The primary betting interface featuring:
- **Important Notice Section**
  - Justice Department mandate explanation
  - Betting premise (Over/Under 12 flights)
  - Tokenomics and payout info
- **7 Celebrity Profiles**:
  1. Prince Andrew
  2. Bill Clinton
  3. David Copperfield
  4. Donald Trump
  5. Leo DiCaprio
  6. Stephen Hawking
  7. Hillary Clinton
- **Betting Interface**
  - Green "OVER 12" button
  - Red "UNDER 12" button
  - Selected bets glow with purple gradient
  - SOL amount input
  - Place bet button
  - Requires wallet connection to bet

#### 2. **Live Lobby (lobby.html)** - REAL-TIME CHAT
Global chat for bettors worldwide with **Socket.io WebSockets**:
- **Username System**
  - Requires wallet connection
  - Set your chat username
  - Change username anytime
  - Linked to wallet address
- **Real-Time Chat (Socket.io)**
  - **Instant messaging** between all connected users
  - **WebSocket connection** for zero-latency chat
  - Your messages appear in blue
  - Other users' messages in white
  - System join/leave notifications
  - Chat history (last 100 messages)
  - Auto-scrolling to latest message
  - **Fallback to simulated mode** if server offline
- **Active Users Sidebar**
  - See who's actually online (real-time)
  - Green status indicators
  - Live updates via WebSocket
  - Shows real usernames of connected users
- **Recent Bets Sidebar**
  - Live feed of your recent bets
  - Shows profile, bet type, amount, and status
  - Updates every 3 seconds
  - Wallet-specific data
- **Online Counter**
  - Real active user count from server
  - Updates when users join/leave

#### 3. **Bet History (history.html)**
Track all your betting activity:
- **Summary Statistics**
  - Total bets placed
  - Pending bets
  - Won bets
  - Lost bets
- **Complete Bet List**
  - Status badges (Pending/Won/Lost)
  - ⏳ Pending (yellow)
  - ✅ Won (green)
  - ❌ Lost (red)
  - Profile, bet type, amount, timestamp
- **Clear History** button
- Auto-refreshes every 2 seconds

#### 4. **Payouts (payouts.html)**
See your financial performance:
- **Financial Dashboard**
  - Total winnings
  - Total losses
  - Net profit/loss (color-coded)
- **Win Rate Indicator**
  - Percentage display
  - Animated progress bar
- **Detailed Payout History**
  - Shows profit/loss for each bet
  - Color-coded (green for wins, red for losses)
  - Payout amounts
  - Bet details
- **Clear Payouts** button
- Auto-refreshes every 2 seconds

## 🎯 How It Works

### Connecting Your Wallet
1. Click "Connect Wallet" in the header (any page)
2. Simulated connection generates a wallet address
3. Wallet stays connected across all pages
4. Disconnect anytime from the header

### Placing a Bet
1. Go to "PLACE BETS" (main page)
2. Must have wallet connected
3. Choose a celebrity
4. Select "OVER 12" or "UNDER 12"
5. Enter your bet amount in SOL
6. Click "PLACE BET"
7. Bet saved to History as "Pending"
8. After 3 seconds, bet auto-resolves (50% win chance)
9. Winnings are 1.9x your bet amount
10. Results appear in Payouts

### Using the Chat
1. Go to "LIVE LOBBY"
2. Set your username
3. Type messages and hit Enter or click SEND
4. See simulated bot users chatting
5. View active users and recent bets in sidebar
6. Change username anytime

## 📁 File Structure

```
jeff/
├── server.js               # Node.js server with Socket.io
├── package.json            # Dependencies & scripts
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore file
├── SERVER_GUIDE.md         # Server setup guide
│
├── index.html              # Redirects to bets.html
├── bets.html               # Main betting page (home)
├── lobby.html              # Live chat room (Socket.io enabled)
├── history.html            # Bet history tracker
├── payouts.html            # Winnings & payouts
├── shared.js               # Universal header/nav/wallet (Phantom integration)
├── styles.css              # Shared comic book styles
├── script.js               # Background effects (legacy)
├── README.md               # This file
│
├── Profile Images (7 total)
├── andrew.png              # Prince Andrew
├── bill.png                # Bill Clinton
├── david.png               # David Copperfield
├── donald.png              # Donald Trump
├── leo.png                 # Leonardo DiCaprio
├── stephen.png             # Stephen Hawking
├── hillary.png             # Hillary Clinton
│
└── Comic Background Images (15 total)
    ├── jeffery-removebg-preview.png
    ├── jeff1.png through jeff15.png
```

## 🎨 Design System

### Colors
- **Primary Yellow**: `#ffd700` (buttons, accents)
- **Comic Red**: `#ff6b6b` (nav buttons, under bets)
- **Comic Green**: `#4ecdc4`, `#22c55e` (over bets, wins)
- **Comic Purple**: `#667eea` to `#764ba2` (selected state gradient)
- **Black Borders**: `#000` (all comic borders)

### Typography
- **Main Font**: Bangers (Google Fonts)
- **Fallback**: Impact, Comic Sans MS, cursive
- **Text Effects**: Multiple text shadows for comic look

### Layout
- **Fixed Header**: Always visible at top
- **Responsive Grid**: 1 col mobile, 2-3 cols desktop
- **Comic Cards**: White background, thick black border, drop shadow
- **Panels**: Rotated at random angles (-7deg to 12deg)

## 🚀 Getting Started

### Option 1: Run with Node.js Server (Recommended)

**Install and Start:**
```bash
npm install
npm start
```

Then open: `http://localhost:3000`

**Features with Server:**
- ✅ Real-time chat with Socket.io
- ✅ Live active users list
- ✅ Instant message broadcasting
- ✅ API endpoints for stats
- ✅ Production-ready deployment

See **[SERVER_GUIDE.md](./SERVER_GUIDE.md)** for detailed setup instructions.

### Option 2: Open Directly in Browser

1. Open `bets.html` in your browser
2. Connect Phantom wallet
3. Navigate between pages
4. Place bets, track history!

**Note**: Chat will use simulated mode without server.

### Requirements
- **Node.js v14+** (for server mode)
- **Modern web browser** (Chrome, Firefox, Edge, Safari)
- **Phantom Wallet** browser extension
- JavaScript enabled
- All image files in the same directory

## 💾 Data Management

### LocalStorage Keys
```javascript
localStorage.getItem('walletConnected')  // Boolean - wallet connection state
localStorage.getItem('walletAddress')    // String - simulated wallet address
localStorage.getItem('chatUsername')     // String - chat username
localStorage.getItem('chatMessages')     // Array - chat message history
localStorage.getItem('betHistory')       // Array - bet objects
localStorage.getItem('payouts')          // Array - payout objects
```

### Data Structures

**Bet Object:**
```javascript
{
    id: 1234567890,
    profile: "Prince Andrew",
    betType: "over",
    amount: 5.5,
    timestamp: "1/20/2025, 10:30:00 AM",
    status: "Won"
}
```

**Payout Object:**
```javascript
{
    id: 1234567890,
    profile: "Bill Clinton",
    betType: "under",
    amount: 3.0,
    payout: 5.7,
    won: true,
    timestamp: "1/20/2025, 10:30:05 AM"
}
```

**Chat Message Object:**
```javascript
{
    id: 1234567890,
    user: "CryptoKing",
    text: "Just won big!",
    timestamp: "1/20/2025, 10:30:00 AM",
    isOwn: false,
    isSystem: false
}
```

## 🎲 Game Logic

### Bet Resolution
1. Bet placed → saved to `betHistory` with "Pending" status
2. 3-second timer starts
3. Random outcome generated (50/50 chance)
4. If won: `payout = betAmount * 1.9`
5. If lost: `payout = 0`
6. Payout saved to `payouts` array
7. Bet status updated to "Won" or "Lost"
8. Stats auto-refresh every 2 seconds

### Chat Simulation
- Bot users post random messages every 8 seconds
- 15 different bot usernames
- 20+ realistic chat phrases
- Messages stored in localStorage (last 100)
- Active users list shuffles every 5 seconds

### Auto-Refresh
- History page refreshes every 2 seconds
- Payouts page refreshes every 2 seconds
- Chat updates in real-time
- Recent bets update every 3 seconds
- Online count changes every 3 seconds

## 🔧 Customization

### Adding New Profiles
Edit `bets.html`, find the `profiles` array:
```javascript
const profiles = [
    { id: 8, name: 'New Person', image: 'newperson.png' },
    // ...
];
```

### Changing Payout Odds
Edit `bets.html`, find the `placeBet` function:
```javascript
const payout = won ? amount * 1.9 : 0; // Change 1.9 to desired multiplier
```

### Adjusting Win Probability
Edit `bets.html`:
```javascript
const won = Math.random() > 0.5; // 0.5 = 50%, 0.3 = 70% win rate
```

### Adding Chat Phrases
Edit `lobby.html`, find the `chatPhrases` array:
```javascript
const chatPhrases = [
    "Your new phrase here!",
    // ...
];
```

## 🎯 Future Enhancements

### Phantom Wallet Integration
Update `shared.js` with actual Phantom SDK:
```javascript
async function toggleUniversalWallet() {
    if (window.solana && window.solana.isPhantom) {
        const resp = await window.solana.connect();
        walletAddress = resp.publicKey.toString();
        walletConnected = true;
        updateWalletUI();
    }
}
```

### Real-time Chat with Socket.io
Replace simulated chat with actual WebSocket connection:
```javascript
const socket = io('your-server-url');
socket.on('message', (msg) => {
    messages.push(msg);
    renderMessages();
});
```

### Blockchain Integration
- Connect to Solana program for $TEB token
- Submit on-chain bets
- Real-time bet resolution via smart contract
- Automatic payout distribution from 0.3% creator fees
- SPL token integration

### Additional Features
- Leaderboard system
- User profiles with stats
- Achievement system
- Multi-bet parlays
- Timed events (document release countdown)
- Live odds updates
- Database integration (MongoDB/PostgreSQL)
- Redis caching for scalability
- Rate limiting and security

## 🖥️ Server & API

### Node.js Server Features

The platform includes a full **Express + Socket.io** server:

**Real-Time Features:**
- ✅ WebSocket chat with Socket.io
- ✅ Live user presence tracking
- ✅ Instant message broadcasting
- ✅ Join/leave notifications

**API Endpoints:**
- `GET /api/status` - Server status and uptime
- `GET /api/users/active` - Active users list
- `GET /api/chat/messages` - Chat message history
- `GET /health` - Health check

**See [SERVER_GUIDE.md](./SERVER_GUIDE.md) for:**
- Installation instructions
- Configuration options
- Deployment guides (Heroku, Railway, Render)
- Troubleshooting
- Production security setup

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
  - 1 column layout
  - Smaller panels (100px)
  - Stacked navigation
  - Reduced font sizes

- **Desktop**: ≥ 768px
  - 2-3 column grid
  - Full-size panels (140-220px)
  - Horizontal navigation
  - Large boom text

## ⚠️ Important Notes

- This is a demo/prototype with simulated outcomes
- No actual blockchain transactions occur
- Wallet connection is simulated (no real Phantom integration yet)
- Chat is simulated with bot users
- All bets resolve randomly for demonstration
- Data is stored locally in browser (not on blockchain)
- Payout explanation is for demonstration purposes

## 🎨 Credits

- **Design**: Comic book style with halftone effects
- **Theme**: Controversial Epstein betting concept
- **Tech**: Vanilla HTML/CSS/JS with Tailwind CSS
- **Images**: User-provided celebrity and comic images

---

**Disclaimer**: This is a parody/satire project for educational and entertainment purposes only. Not affiliated with any real betting platform, blockchain project, or the individuals depicted. This is not financial advice.

🎰 **PLACE YOUR BETS!** 🎰