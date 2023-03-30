const NETWORK = 'https://api.mainnet-beta.solana.com';
const PROVIDER_URL = 'https://www.phantom.app';

const connectBtn = document.getElementById('connectBtn');

// Create a Solana connection and wallet adapter
const connection = new solanaWeb3.Connection(NETWORK);
const walletAdapter = new solanaWalletAdapter.Sollet(PROVIDER_URL, NETWORK);

// Check if the user has the Phantom Wallet extension installed
if (window.solana && window.solana.isPhantom) {
  connectBtn.textContent = 'Connect Phantom Wallet';
} else {
  connectBtn.textContent = 'Install Phantom Wallet';
  connectBtn.onclick = () => {
    window.open('https://phantom.app/', '_blank');
  };
}

// Connect to the wallet and grant access to the game
async function connectWallet() {
  try {
    await walletAdapter.connect();
    console.log('Wallet connected:', walletAdapter.publicKey.toString());
    // Implement the logic to grant access to the game
  } catch (error) {
    console.error('Error connecting to wallet:', error);
  }
}

if (window.solana && window.solana.isPhantom) {
  connectBtn.onclick = connectWallet;
}
