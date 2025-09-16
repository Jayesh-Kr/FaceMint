import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, User } from 'lucide-react';

const FeaturedNFTs = () => {
  // Featured NFTs data
  const featuredNFTs = [
    {
      id: 1,
      name: "Golden Hour Portrait",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      owner: "3K7Gt8YvP4xQRf2N9cMd1Kj6Hm7BnWqSt5EpVx8CgA9Z",
      transactionSignature: "3K7Gt8YvP4xQRf2N9cMd1KjrT4YmLn3FjKp2QsRtU6VwX7YzA5BcDf8GhJ9KlMnOpQ6Hm7BnWqSt5EpVx8CgA9Z"
    },
    {
      id: 2,
      name: "Professional Headshot",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      owner: "7YzA5BcDf8GhJ9KlMnOpQ3K7Gt8YvP4xQRf2N9cMd1Kj",
      transactionSignature: "7YzA5BcDf8GhJ9KlMnOpQ3K7Gt8YvP4xrT4YmLn3FjKp2QsRtU6VwX6Hm7BnWqSt5EpVx8CgA9ZRf2N9cMd1Kj"
    },
    {
      id: 3,
      name: "Creative Portrait",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      owner: "2QsRtU6VwX7YzA5BcDf8GhJ9KlMnOpQ3K7Gt8YvP4x",
      transactionSignature: "2QsRtU6VwX7YzA5BcDf8GhJ9KlMnOpQ3K7Gt8YvP4xrT4YmLn3FjKp2QsRtU6VwX6Hm7BnWqSt5EpVx8CgA9Z"
    }
  ];

  const truncateAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  };

  const openSolscan = (signature) => {
    window.open(`https://solscan.io/tx/${signature}`, '_blank');
  };

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
            Featured NFTs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Discover unique photo NFTs minted by our community
          </p>
        </motion.div>

        {/* 1x3 NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredNFTs.map((nft, index) => (
            <motion.div
              key={nft.id}
              className="bg-white border border-gray-200 hover:border-black transition-all duration-300 group hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* NFT Image */}
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={nft.image} 
                  alt={nft.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* NFT Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-black mb-3">{nft.name}</h3>
                  
                  {/* Owner */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <User className="w-4 h-4" />
                    <span>Owner: {truncateAddress(nft.owner)}</span>
                  </div>
                </div>

                {/* View Transaction Button */}
                <motion.button
                  onClick={() => openSolscan(nft.transactionSignature)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View on Solscan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link 
            to="/gallery"
            className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors font-medium"
          >
            View All NFTs
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedNFTs;