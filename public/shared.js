// Shared components for all pages

let walletConnected = false;
let walletAddress = '';

// Check if Phantom wallet is installed
function getPhantomProvider() {
    if ('phantom' in window) {
        const provider = window.phantom?.solana;
        if (provider?.isPhantom) {
            return provider;
        }
    }
    return null;
}

// Universal Header with Wallet Connection
function renderUniversalHeader() {
    const header = `
        <div class="fixed top-0 left-0 right-0 z-50 bg-white border-b-5 border-black shadow-lg">
            <div class="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
                <!-- Logo/Title -->
                <div class="text-center md:text-left">
                    <h1 class="text-2xl md:text-3xl font-bold" style="font-family: 'Bangers', cursive; color: #000;">
                        The EPSTEIN BETS
                    </h1>
                </div>

                <!-- Wallet Connection -->
                <div class="flex items-center gap-3">
                    <button
                        id="universalWalletBtn"
                        onclick="toggleUniversalWallet()"
                        class="comic-button px-6 py-2 text-sm md:text-base">
                        <span id="walletBtnText">🔗 CONNECT WALLET</span>
                    </button>
                    <div id="walletAddressDisplay" class="hidden px-4 py-2 bg-green-100 border-3 border-black rounded-lg font-bold text-sm">
                        <span id="walletAddressText"></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Spacer to prevent content from going under fixed header -->
        <div style="height: 100px;"></div>
    `;

    document.body.insertAdjacentHTML('afterbegin', header);

    // Restore wallet state from localStorage
    const savedWallet = localStorage.getItem('walletConnected');
    const savedAddress = localStorage.getItem('walletAddress');
    if (savedWallet === 'true' && savedAddress) {
        walletConnected = true;
        walletAddress = savedAddress;
        updateWalletUI();
    }
}

// Universal Navigation
function renderUniversalNav(activePage) {
    const navContainer = document.getElementById('universalNav');
    if (!navContainer) return;

    const nav = `
        <div class="comic-nav flex flex-wrap justify-center gap-3 mb-8">
            <a href="bets.html" class="nav-link ${activePage === 'bets' ? 'active' : ''}">🎲 PLACE BETS</a>
            <a href="history.html" class="nav-link ${activePage === 'history' ? 'active' : ''}">📜 HISTORY</a>
            <a href="payouts.html" class="nav-link ${activePage === 'payouts' ? 'active' : ''}">💰 PAYOUTS</a>
        </div>
    `;

    navContainer.innerHTML = nav;
}

// Wallet Confirmation Modal
function showWalletModal(title, message, consoleLines, headerClass, actions) {
    // Remove existing modal if any
    const existingModal = document.getElementById('walletConfirmModal');
    if (existingModal) existingModal.remove();

    const modalHTML = `
        <div id="walletConfirmModal" class="wallet-modal-overlay" style="
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 99999;
            justify-content: center;
            align-items: center;
            animation: walletFadeIn 0.2s ease;
        ">
            <style>
                @keyframes walletFadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes walletSlideIn { from { transform: scale(0.8) rotate(-5deg); opacity: 0; } to { transform: scale(1) rotate(-1deg); opacity: 1; } }
            </style>
            <div style="
                background: white;
                border: 6px solid #000;
                border-radius: 20px;
                box-shadow: 15px 15px 0 rgba(0,0,0,0.4);
                max-width: 500px;
                width: 90%;
                animation: walletSlideIn 0.3s ease;
                transform: rotate(-1deg);
            ">
                <div style="
                    background: ${headerClass === 'success' ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
                    padding: 20px;
                    border-radius: 14px 14px 0 0;
                    border-bottom: 4px solid #000;
                ">
                    <h2 style="
                        font-family: 'Bangers', cursive;
                        font-size: 1.8rem;
                        color: white;
                        text-align: center;
                        text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
                        margin: 0;
                    ">${title}</h2>
                </div>
                <div style="padding: 25px;">
                    <div style="text-align: center; font-size: 1.2rem; font-weight: bold; font-family: 'Bangers', cursive; margin-bottom: 15px;">
                        ${message}
                    </div>
                    <div style="
                        background: #1a1a2e;
                        border: 3px solid #333;
                        border-radius: 10px;
                        padding: 15px;
                        font-family: 'Courier New', monospace;
                        font-size: 12px;
                        color: #00ff00;
                        max-height: 180px;
                        overflow-y: auto;
                        text-align: left;
                        margin: 15px 0;
                    ">
                        ${consoleLines.map(line => `
                            <div style="margin: 5px 0; display: flex; gap: 8px;">
                                <span style="color: #888;">[${new Date().toLocaleTimeString()}]</span>
                                <span style="color: ${line.level === 'success' ? '#00ff00' : line.level === 'warn' ? '#ffaa00' : '#00bfff'};">[${line.level.toUpperCase()}]</span>
                                <span style="color: #fff;">${line.msg}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div style="display: flex; justify-content: center; gap: 15px; margin-top: 20px;">
                        ${actions.map(action => `
                            <button onclick="${action.onclick}" style="
                                padding: 12px 30px;
                                background: ${action.bg || '#ffd700'};
                                border: 4px solid #000;
                                border-radius: 10px;
                                font-size: 1.1rem;
                                font-weight: bold;
                                font-family: 'Bangers', cursive;
                                cursor: pointer;
                                box-shadow: 5px 5px 0 rgba(0,0,0,0.3);
                                transition: all 0.2s ease;
                            ">${action.text}</button>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeWalletModal() {
    const modal = document.getElementById('walletConfirmModal');
    if (modal) modal.remove();
}

// Toggle Wallet Connection
async function toggleUniversalWallet() {
    if (!walletConnected) {
        // Connect to Phantom wallet
        const provider = getPhantomProvider();

        if (!provider) {
            // Phantom not installed
            showWalletModal(
                '⚠️ PHANTOM REQUIRED',
                'Phantom Wallet not detected!',
                [
                    { level: 'warn', msg: 'No Phantom wallet extension found' },
                    { level: 'info', msg: 'Phantom is required to place bets' },
                    { level: 'info', msg: 'Install from phantom.app' }
                ],
                '',
                [
                    { text: 'INSTALL PHANTOM', onclick: "window.open('https://phantom.app/', '_blank'); closeWalletModal();", bg: '#667eea' },
                    { text: 'CANCEL', onclick: 'closeWalletModal()', bg: '#888' }
                ]
            );
            return;
        }

        try {
            // Request connection to Phantom
            const response = await provider.connect();
            const publicKey = response.publicKey.toString();

            // Format address (show first 4 and last 4 characters)
            const shortAddress = publicKey.slice(0, 4) + '...' + publicKey.slice(-4);

            walletConnected = true;
            walletAddress = publicKey;

            // Store full address and connection state
            localStorage.setItem('walletConnected', 'true');
            localStorage.setItem('walletAddress', publicKey);

            updateWalletUI();

            showWalletModal(
                '✅ WALLET CONNECTED!',
                `<div style="color: #22c55e; font-size: 1.5rem;">${shortAddress}</div>`,
                [
                    { level: 'info', msg: 'Connecting to Phantom...' },
                    { level: 'success', msg: 'Phantom wallet detected' },
                    { level: 'info', msg: 'Requesting authorization...' },
                    { level: 'success', msg: 'User approved connection' },
                    { level: 'info', msg: 'Public Key: ' + publicKey.slice(0, 20) + '...' },
                    { level: 'success', msg: 'Wallet connected successfully!' },
                    { level: 'info', msg: 'Ready to place bets on Epstein files' }
                ],
                'success',
                [{ text: "LET'S GO!", onclick: 'closeWalletModal()', bg: '#22c55e' }]
            );

            console.log('Connected to wallet:', publicKey);
        } catch (err) {
            console.error('Error connecting to Phantom wallet:', err);
            showWalletModal(
                '❌ CONNECTION FAILED',
                'Could not connect to wallet',
                [
                    { level: 'warn', msg: 'Connection attempt failed' },
                    { level: 'warn', msg: 'Error: ' + (err.message || 'Unknown error') },
                    { level: 'info', msg: 'Please try again or refresh the page' }
                ],
                '',
                [{ text: 'TRY AGAIN', onclick: 'closeWalletModal()', bg: '#ff6b6b' }]
            );
        }
    } else {
        // Disconnect wallet - show confirmation
        showWalletModal(
            '🔌 DISCONNECT WALLET?',
            'Your bet history will still be saved.',
            [
                { level: 'info', msg: 'Current wallet: ' + walletAddress.slice(0, 8) + '...' },
                { level: 'info', msg: 'Bet history is stored locally' },
                { level: 'warn', msg: 'You will need to reconnect to place new bets' }
            ],
            '',
            [
                { text: 'DISCONNECT', onclick: 'confirmDisconnect()', bg: '#ff6b6b' },
                { text: 'CANCEL', onclick: 'closeWalletModal()', bg: '#888' }
            ]
        );
    }
}

async function confirmDisconnect() {
    const provider = getPhantomProvider();
    if (provider) {
        try {
            await provider.disconnect();
        } catch (err) {
            console.error('Error disconnecting:', err);
        }
    }

    walletConnected = false;
    walletAddress = '';
    localStorage.removeItem('walletConnected');
    localStorage.removeItem('walletAddress');

    updateWalletUI();
    closeWalletModal();

    showWalletModal(
        '👋 DISCONNECTED',
        'Wallet disconnected successfully',
        [
            { level: 'success', msg: 'Wallet disconnected' },
            { level: 'info', msg: 'Your bet history is preserved' },
            { level: 'info', msg: 'Reconnect anytime to continue betting' }
        ],
        '',
        [{ text: 'OK', onclick: 'closeWalletModal()', bg: '#ffd700' }]
    );
}

// Update Wallet UI
function updateWalletUI() {
    const btn = document.getElementById('universalWalletBtn');
    const btnText = document.getElementById('walletBtnText');
    const addressDisplay = document.getElementById('walletAddressDisplay');
    const addressText = document.getElementById('walletAddressText');

    if (walletConnected && walletAddress) {
        // Format address (show first 4 and last 4 characters)
        const shortAddress = walletAddress.slice(0, 4) + '...' + walletAddress.slice(-4);

        btnText.textContent = '🟢 CONNECTED';
        btn.style.background = '#4ade80';
        addressDisplay.classList.remove('hidden');
        addressText.textContent = shortAddress;
    } else {
        btnText.textContent = '🔗 CONNECT WALLET';
        btn.style.background = '#ffd700';
        addressDisplay.classList.add('hidden');
    }
}

// Get wallet-specific localStorage key
function getWalletKey(baseKey) {
    if (!walletAddress) return baseKey;
    return `${baseKey}_${walletAddress}`;
}

// Get bet history for current wallet
function getWalletBetHistory() {
    if (!walletAddress) return [];
    const key = getWalletKey('betHistory');
    return JSON.parse(localStorage.getItem(key) || '[]');
}

// Save bet history for current wallet
function saveWalletBetHistory(history) {
    if (!walletAddress) return;
    const key = getWalletKey('betHistory');
    localStorage.setItem(key, JSON.stringify(history));
}

// Get payouts for current wallet
function getWalletPayouts() {
    if (!walletAddress) return [];
    const key = getWalletKey('payouts');
    return JSON.parse(localStorage.getItem(key) || '[]');
}

// Save payouts for current wallet
function saveWalletPayouts(payouts) {
    if (!walletAddress) return;
    const key = getWalletKey('payouts');
    localStorage.setItem(key, JSON.stringify(payouts));
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderUniversalHeader();
});