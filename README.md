# 🎨 FaceMint

> Transform your photos into NFTs instantly. Upload, mint, and receive your digital assets directly in your wallet.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Solana](https://img.shields.io/badge/Solana-Devnet-purple.svg)](https://solana.com/)

## ✨ Features

- 📸 **Instant Photo Upload** - Drag and drop or click to upload your photos
- 🔗 **IPFS Storage** - Decentralized storage using Pinata IPFS
- 🚀 **One-Click Minting** - Mint NFTs directly to your Solana wallet
- 🌓 **Dark/Light Mode** - Beautiful responsive UI
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- ⚡ **Fast & Secure** - Built with modern web technologies
- 🎯 **User-Friendly** - Simple interface for non-technical users

## 🏗️ Architecture

```
FaceMint/
├── Frontend/          # React + Vite frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React contexts (Theme, etc.)
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
│   └── public/        # Static assets
├── backend/           # Node.js Express API server
│   ├── utils/         # Backend utilities (Pinata integration)
│   └── index.js       # Main server file
└── .env.example       # Environment variables template
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn**
- **Solana wallet** (Phantom, Solflare, etc.)
- **Pinata account** for IPFS storage

### 1. Clone the Repository

```bash
git clone https://github.com/Lviffy/FaceMint.git
cd FaceMint
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your actual values
nano .env
```

**Required Environment Variables:**
- `PRIVATE_KEY` - Your Solana wallet private key (JSON array format)
- `PINATA_JWT` - Your Pinata JWT token
- `PINATA_GATEWAY` - Your Pinata gateway URL

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd ../Frontend

# Install dependencies
npm install
```

### 4. Start Development Servers

**Backend (Port 3000):**
```bash
cd backend
npm start
```

**Frontend (Port 5173):**
```bash
cd Frontend
npm run dev
```

Visit `http://localhost:5173` to see the application!

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Solana Web3.js** - Solana blockchain interaction
- **Metaplex** - NFT minting utilities
- **Pinata SDK** - IPFS file storage
- **CORS** - Cross-origin resource sharing

### Blockchain & Storage
- **Solana** - Fast, low-cost blockchain
- **IPFS** - Decentralized file storage via Pinata
- **Metaplex Token Metadata** - NFT standard implementation

## 📝 API Endpoints

### `POST /mintNFT`

Mint a new NFT from uploaded image.

**Request Body:**
```json
{
  "name": "My Awesome NFT",
  "walletAddress": "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
  "image": "QmYourImageCIDFromIPFS"
}
```

**Response:**
```json
{
  "success": true,
  "nftAddress": "TokenAddressHere",
  "metadataUri": "https://gateway.pinata.cloud/ipfs/QmMetadataCID"
}
```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```bash
# Solana Configuration
PRIVATE_KEY=[123,45,67,...] # Your wallet private key as JSON array

# Pinata IPFS Configuration
PINATA_JWT=your_pinata_jwt_token
PINATA_GATEWAY=https://your-gateway.mypinata.cloud

# Optional
PORT=3000
NODE_ENV=development
```

### Getting API Keys

1. **Pinata Setup:**
   - Sign up at [pinata.cloud](https://pinata.cloud)
   - Create API key with admin permissions
   - Set up a gateway for file access

2. **Solana Wallet:**
   - Export private key from your wallet (Phantom, Solflare)
   - Convert to JSON array format: `[123, 45, 67, ...]`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd Frontend
npm run build
# Deploy the dist/ folder
```

### Backend (Railway/Heroku)
```bash
cd backend
# Set environment variables in your hosting platform
# Deploy with Node.js buildpack
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Solana](https://solana.com/) - For the blazing fast blockchain
- [Metaplex](https://metaplex.com/) - For NFT infrastructure
- [Pinata](https://pinata.cloud/) - For IPFS storage solutions
- [Tailwind CSS](https://tailwindcss.com/) - For beautiful styling
- [Radix UI](https://radix-ui.com/) - For accessible components

## 📞 Support

If you have any questions or need help:

- Open an [issue](https://github.com/Lviffy/FaceMint/issues)
- Check our [documentation](https://github.com/Lviffy/FaceMint/wiki)
- Join our community discussions

---

<div align="center">
  <strong>Built with ❤️ for the Solana ecosystem</strong>
</div>