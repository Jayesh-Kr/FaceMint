import React from 'react';
import { Frown, DollarSign, Clock } from 'lucide-react';

const ProblemStatement = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black">
          Why Settle for Generic Profile Pictures?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          In today's digital world, your online identity matters more than ever. Whether it's social media, gaming profiles, or digital collectibles, 
          people want unique, eye-catching avatars that stand out from the crowd. But creating professional NFT-style art is expensive, 
          time-consuming, and requires specialized skills most people don't have.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="space-y-4">
            <div className="h-12 w-12 bg-black flex items-center justify-center mx-auto">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-black">Expensive Artists</h3>
            <p className="text-gray-600">Professional NFT artists charge hundreds or thousands of dollars for custom artwork, making it unaffordable for most people.</p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 bg-black flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-black">Time-Consuming</h3>
            <p className="text-gray-600">Creating custom NFT art can take weeks or months, and you might not even like the final result.</p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 bg-black flex items-center justify-center mx-auto">
              <Frown className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-black">Generic Options</h3>
            <p className="text-gray-600">Most avatar creators offer limited, cookie-cutter styles that make you look like everyone else online.</p>
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-white border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-black">The Solution: AI-Powered NFT Transformation</h3>
          <p className="text-gray-600">
            Transform any photo into stunning NFT-style artwork in seconds, not weeks. Get professional-quality results 
            at a fraction of the cost, with dozens of unique styles to choose from.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;