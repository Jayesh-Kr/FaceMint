import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        setLoading(true);
        // Fetch the latest NFT metadata URLs from the backend
        const response = await fetch('http://localhost:3000/latestNFT');
        const data = await response.json();
        
        if (data.success && data.latestNFT) {
          // Fetch metadata for each URL
          const nftPromises = data.latestNFT.map(async (url, index) => {
            try {
              const metadataResponse = await fetch(url);
              const metadata = await metadataResponse.json();
              return {
                id: index + 1,
                name: metadata.name,
                description: metadata.description,
                image: metadata.image
              };
            } catch (err) {
              console.error(`Error fetching metadata from ${url}:`, err);
              return null;
            }
          });
          
          const nftData = await Promise.all(nftPromises);
          // Filter out null values
          const validNFTs = nftData.filter(nft => nft !== null);
          setNfts(validNFTs);
        } else {
          setError('Failed to fetch NFT data');
        }
      } catch (err) {
        console.error('Error fetching NFTs:', err);
        setError('Failed to load NFTs');
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-24 px-6 md:px-12 bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black dark:text-white leading-tight">
              NFT Gallery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Loading NFT collection...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 animate-pulse">
                <div className="aspect-square bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full py-24 px-6 md:px-12 bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black dark:text-white leading-tight">
              NFT Gallery
            </h1>
            <p className="text-xl text-red-500 max-w-3xl mx-auto font-light leading-relaxed">
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

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
            <div className="text-3xl font-light text-black dark:text-white">{nfts.length}</div>
            <div className="text-gray-600 dark:text-gray-300">Unique Creations</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-light text-black dark:text-white">100%</div>
            <div className="text-gray-600 dark:text-gray-300">On Solana Blockchain</div>
          </div>
        </motion.div>

        {/* NFT Grid */}
        {nfts.length > 0 ? (
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
                    <p className="text-sm text-gray-600 dark:text-gray-300">{nft.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              No NFTs have been minted yet.
            </p>
            <a 
              href="/"
              className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 text-sm font-medium"
            >
              Mint Your First NFT
            </a>
          </div>
        )}

        {/* Load More Section - Only show if there are NFTs */}
        {nfts.length > 0 && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Showing all {nfts.length} NFT{nfts.length !== 1 ? 's' : ''}
            </p>
          </motion.div>
        )}

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