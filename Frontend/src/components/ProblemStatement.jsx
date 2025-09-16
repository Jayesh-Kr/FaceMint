import React from 'react';
import { Clock, DollarSign, Users } from 'lucide-react';

const ProblemStatement = () => {
  return (
    <section id="about" className="w-full py-20 px-6 md:px-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center space-y-16">
        
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-black dark:text-white">
            Why Mint Your Photos as NFTs?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            In today's digital world, your photos deserve to be unique digital assets. 
            Traditional photo sharing platforms don't give you true ownership of your digital memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="w-12 h-12 border border-black dark:border-white bg-white dark:bg-gray-800 flex items-center justify-center mx-auto">
              <DollarSign className="w-6 h-6 text-black dark:text-white" />
            </div>
            <h3 className="text-xl font-light text-black dark:text-white">True Ownership</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Your photos become valuable digital assets that you truly own, not just stored on someone else's platform.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="w-12 h-12 border border-black dark:border-white bg-white dark:bg-gray-800 flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6 text-black dark:text-white" />
            </div>
            <h3 className="text-xl font-light text-black dark:text-white">Instant Minting</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Transform your photos into NFTs in seconds, not hours. No complex processes or technical knowledge required.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="w-12 h-12 border border-black dark:border-white bg-white dark:bg-gray-800 flex items-center justify-center mx-auto">
              <Users className="w-6 h-6 text-black dark:text-white" />
            </div>
            <h3 className="text-xl font-light text-black dark:text-white">Digital Identity</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Create unique digital collectibles that represent your memories and experiences on the blockchain.
            </p>
          </div>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-12">
          <h3 className="text-2xl font-light mb-6 text-black dark:text-white">The FaceMint Solution</h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed">
            Upload your photo, mint it as an NFT, and receive it directly in your wallet. 
            Simple, fast, and secure blockchain technology made accessible to everyone.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProblemStatement;