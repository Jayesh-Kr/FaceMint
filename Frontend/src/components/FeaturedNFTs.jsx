import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const FeaturedNFTs = () => {
  const [featuredNFTs, setFeaturedNFTs] = useState([]);
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
          
          const nfts = await Promise.all(nftPromises);
          // Filter out null values and take only the first 3 NFTs
          const validNFTs = nfts.filter(nft => nft !== null).slice(0, 3);
          setFeaturedNFTs(validNFTs);
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
      <section className="w-full py-16 px-6 md:px-12 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black dark:text-white">
              Featured NFTs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
              Loading latest NFTs...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
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
      <section className="w-full py-16 px-6 md:px-12 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black dark:text-white">
              Featured NFTs
            </h2>
            <p className="text-lg text-red-500 max-w-2xl mx-auto font-light">
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black dark:text-white">
            Featured NFTs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Discover unique photo NFTs minted by our community
          </p>
        </motion.div>

        {/* 1x3 NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredNFTs.length > 0 ? (
            featuredNFTs.map((nft, index) => (
              <motion.div
                key={nft.id}
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
                    <h3 className="text-xl font-medium text-black dark:text-white mb-3">{nft.name}</h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {nft.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 dark:text-gray-300">
                No NFTs available yet. Mint your first NFT to see it featured here!
              </p>
            </div>
          )}
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
            className="inline-flex items-center gap-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-medium"
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