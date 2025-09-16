import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, User } from 'lucide-react';

const Gallery = () => {
  // Mock NFT data - replace with real data from your backend/blockchain
  const [nfts] = useState([
    {
      id: 1,
      name: "Sunset Portrait #001",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      owner: "3K7Gt8YvP4xQRf2N9cMd1Kj6Hm7BnWqSt5EpVx8CgA9Z",
      mintDate: "2025-09-15",
      transactionSignature: "3K7Gt8YvP4xQRf2N9cMd1Kj6Hm7BnWqSt5EpVx8CgA9ZrT4YmLn3FjKp2QsRtU6VwX7YzA5BcDf8GhJ9KlMnOpQ"
    },
    {
      id: 2,
      name: "Street Style #002",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      owner: "7YzA5BcDf8GhJ9KlMnOpQ3K7Gt8YvP4xQRf2N9cMd1Kj",
      mintDate: "2025-09-14",
      transactionSignature: "7YzA5BcDf8GhJ9KlMnOpQ3K7Gt8YvP4xQRf2N9cMd1KjrT4YmLn3FjKp2QsRtU6VwX6Hm7BnWqSt5EpVx8CgA9Z"
    },
    {
      id: 3,
      name: "Urban Portrait #003",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      owner: "2QsRtU6VwX7YzA5BcDf8GhJ9KlMnOpQ3K7Gt8YvP4x",
      mintDate: "2025-09-13",
      transactionSignature: "2QsRtU6VwX7YzA5BcDf8GhJ9KlMnOpQ3K7Gt8YvP4xrT4YmLn3FjKp6Hm7BnWqSt5EpVx8CgA9ZRf2N9cMd1Kj"
    },
    {
      id: 4,
      name: "Creative Portrait #004",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      owner: "9KlMnOpQ3K7Gt8YvP4xQRf2N9cMd1Kj6Hm7BnWqSt5E",
      mintDate: "2025-09-12",
      transactionSignature: "9KlMnOpQ3K7Gt8YvP4xQRf2N9cMd1KjrT4YmLn3FjKp2QsRtU6VwX7YzA5BcDf8GhJ6Hm7BnWqSt5EpVx8CgA9Z"
    },
    {
      id: 5,
      name: "Natural Light #005",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
      owner: "6Hm7BnWqSt5EpVx8CgA9ZrT4YmLn3FjKp2QsRtU6VwX",
      mintDate: "2025-09-11",
      transactionSignature: "6Hm7BnWqSt5EpVx8CgA9ZrT4YmLn3FjKp2QsRtU6VwX7YzA5BcDf8GhJ9KlMnOpQ3K7Gt8YvP4xQRf2N9cMd1Kj"
    },
    {
      id: 6,
      name: "Professional Shot #006",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      owner: "5EpVx8CgA9ZrT4YmLn3FjKp2QsRtU6VwX7YzA5BcDf8G",
      mintDate: "2025-09-10",
      transactionSignature: "5EpVx8CgA9ZrT4YmLn3FjKp2QsRtU6VwX7YzA5BcDf8GhJ9KlMnOpQ3K7Gt8YvP4xQRf2N9cMd1Kj6Hm7BnWqSt"
    }
  ]);

  const truncateAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  };

  const openSolscan = (signature) => {
    window.open(`https://solscan.io/tx/${signature}`, '_blank');
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <motion.h1 
            className="text-5xl md:text-7xl font-light tracking-tight text-black dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            NFT Gallery
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore the collection of minted photo NFTs created with FaceMint.<br />
            Each unique digital identity preserved on the Solana blockchain.
          </motion.p>
        </div>

        {/* Gallery Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center space-y-2">
            <div className="text-3xl font-light text-black dark:text-white">{nfts.length}</div>
            <div className="text-gray-600 dark:text-gray-300">Total NFTs Minted</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-light text-black dark:text-white">{new Set(nfts.map(nft => nft.owner)).size}</div>
            <div className="text-gray-600 dark:text-gray-300">Unique Owners</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-light text-black dark:text-white">100%</div>
            <div className="text-gray-600 dark:text-gray-300">On Solana Blockchain</div>
          </div>
        </motion.div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nfts.map((nft, index) => (
            <motion.div
              key={nft.id}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
            >
              {/* NFT Image */}
              <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img 
                  src={nft.image} 
                  alt={nft.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* NFT Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-black dark:text-white mb-2">{nft.name}</h3>
                  
                  <div className="space-y-3 text-sm">
                    {/* Owner */}
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <User className="w-4 h-4" />
                      <span>Owner: {truncateAddress(nft.owner)}</span>
                    </div>
                    
                    {/* Mint Date */}
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>Minted: {new Date(nft.mintDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {/* Transaction Link */}
                <button
                  onClick={() => openSolscan(nft.transactionSignature)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on Solscan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300 text-sm font-medium">
            Load More NFTs
          </button>
        </motion.div>

        {/* Info Section */}
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-700 pt-16 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-light text-black dark:text-white">Ready to Create Your Own NFT?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Join the growing community of creators who have minted their photos as NFTs on Solana. 
              Fast, affordable, and secure - start your digital identity journey today.
            </p>
            <a 
              href="/"
              className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 text-sm font-medium"
            >
              Mint Your Photo NFT
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Gallery;