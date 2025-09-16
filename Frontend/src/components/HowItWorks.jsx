import React from 'react';
import { Upload, Coins, Wallet } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Upload Your Photo",
      description: "Select or drag a photo to begin. Supported formats: JPG, PNG, JPEG (up to 10MB).",
      icon: <Upload className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "Mint as NFT",
      description: "Your photo is minted as a unique NFT on the blockchain. Connect your wallet to complete the process.",
      icon: <Coins className="w-8 h-8" />
    },
    {
      step: "3",
      title: "NFT Delivered to Wallet",
      description: "Your new NFT is sent directly to your wallet. Instantly own your digital asset!",
      icon: <Wallet className="w-8 h-8" />
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Transform your photos into NFTs in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border border-black bg-white flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="w-8 h-8 border border-gray-400 bg-white flex items-center justify-center text-sm font-light">
                  {step.step}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-light text-black">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;