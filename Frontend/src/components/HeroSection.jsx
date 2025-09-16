import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import PhotoUpload from './PhotoUpload.jsx';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1 (Upload your photo)

  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    setCurrentStep(photo ? 2 : 1); // Move to step 2 when photo is uploaded, step 1 when no photo
  };

  const handleMintingStateChange = (step) => {
    setCurrentStep(step);
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Text - Show only during initial state (step 1) */}
        {currentStep === 1 && (
          <motion.div 
            className="text-center space-y-8 mb-16"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black leading-tight">
              Mint Your Photo<br />as an NFT Instantly
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Upload a photo, mint it as an NFT, and have it delivered directly to your wallet.<br />
              Own your digital identity with FaceMint.
            </p>
          </motion.div>
        )}

        {/* Progress Steps - Show above form when photo is uploaded */}
        {currentStep >= 2 && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              {/* Progress Line Background - spans from step 1 to step 3 */}
              <div className="hidden md:block absolute top-4 h-0.5 bg-gray-300" 
                   style={{ 
                     left: 'calc(16.67% + 1rem)', 
                     right: 'calc(16.67% + 1rem)',
                     width: 'calc(66.67% - 2rem)'
                   }}></div>
              
              {/* Animated Progress Line - grows from step 1 to step 2 when photo uploaded */}
              <motion.div 
                className="hidden md:block absolute top-4 h-0.5 bg-black"
                style={{ 
                  left: 'calc(16.67% + 1rem)',
                  transformOrigin: 'left center'
                }}
                initial={{ width: 0 }}
                animate={{ 
                  width: currentStep >= 2 ? 'calc(33.33% - 1rem)' : 0 
                }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: currentStep >= 2 ? 0.3 : 0
                }}
              />
              
              {/* Second progress line segment - from step 2 to step 3 when minting starts */}
              <motion.div 
                className="hidden md:block absolute top-4 h-0.5 bg-black"
                style={{ 
                  left: 'calc(50% + 0.5rem)',
                  transformOrigin: 'left center'
                }}
                initial={{ width: 0 }}
                animate={{ 
                  width: currentStep >= 3 ? 'calc(33.33% - 1rem)' : 0 
                }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: currentStep >= 3 ? 0.3 : 0
                }}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
                {/* Step 1 */}
                <div className="space-y-3">
                  <motion.div 
                    className={`w-8 h-8 border text-black mx-auto flex items-center justify-center font-light ${
                      currentStep >= 1 ? 'border-black bg-black text-white' : 'border-black bg-white text-black'
                    }`}
                    animate={{
                      backgroundColor: currentStep >= 1 ? '#000000' : '#ffffff',
                      color: currentStep >= 1 ? '#ffffff' : '#000000'
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    1
                  </motion.div>
                  <motion.p 
                    className={currentStep >= 1 ? 'text-gray-600' : 'text-gray-400'}
                    animate={{
                      color: currentStep >= 1 ? '#4b5563' : '#9ca3af'
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    Upload your photo
                  </motion.p>
                </div>
                
                {/* Step 2 */}
                <div className="space-y-3">
                  <motion.div 
                    className={`w-8 h-8 border mx-auto flex items-center justify-center font-light ${
                      currentStep >= 2 ? 'border-black bg-black text-white' : 
                      currentStep >= 1 ? 'border-black bg-white text-black' : 'border-gray-300 bg-white text-gray-400'
                    }`}
                    animate={{
                      borderColor: currentStep >= 1 ? '#000000' : '#d1d5db',
                      backgroundColor: currentStep >= 2 ? '#000000' : '#ffffff',
                      color: currentStep >= 2 ? '#ffffff' : currentStep >= 1 ? '#000000' : '#9ca3af'
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                  >
                    2
                  </motion.div>
                  <motion.p 
                    className={currentStep >= 1 ? 'text-gray-600' : 'text-gray-400'}
                    animate={{
                      color: currentStep >= 1 ? '#4b5563' : '#9ca3af'
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                  >
                    Mint as NFT
                  </motion.p>
                </div>
                
                {/* Step 3 */}
                <div className="space-y-3">
                  <motion.div 
                    className={`w-8 h-8 border mx-auto flex items-center justify-center font-light ${
                      currentStep >= 3 ? 'border-black bg-black text-white' : 'border-gray-300 bg-white text-gray-400'
                    }`}
                    animate={{
                      borderColor: currentStep >= 3 ? '#000000' : '#d1d5db',
                      backgroundColor: currentStep >= 3 ? '#000000' : '#ffffff',
                      color: currentStep >= 3 ? '#ffffff' : '#9ca3af'
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                  >
                    3
                  </motion.div>
                  <motion.p 
                    className={currentStep >= 3 ? 'text-gray-600' : 'text-gray-400'}
                    animate={{
                      color: currentStep >= 3 ? '#4b5563' : '#9ca3af'
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                  >
                    NFT sent to your wallet
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Upload Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <PhotoUpload 
            onPhotoSelect={handlePhotoSelect} 
            onMintingStateChange={handleMintingStateChange}
          />
        </div>

        {/* Progress Steps - Show below form initially (step 1) */}
        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Progress Line Background - spans from step 1 to step 3 */}
              <div className="hidden md:block absolute top-4 h-0.5 bg-gray-300" 
                   style={{ 
                     left: 'calc(16.67% + 1rem)', 
                     right: 'calc(16.67% + 1rem)',
                     width: 'calc(66.67% - 2rem)'
                   }}></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
                {/* Step 1 */}
                <div className="space-y-3">
                  <div className="w-8 h-8 border border-black bg-black text-white mx-auto flex items-center justify-center font-light">
                    1
                  </div>
                  <p className="text-gray-600">Upload your photo</p>
                </div>
                
                {/* Step 2 */}
                <div className="space-y-3">
                  <div className="w-8 h-8 border border-gray-300 bg-white text-gray-400 mx-auto flex items-center justify-center font-light">
                    2
                  </div>
                  <p className="text-gray-400">Mint as NFT</p>
                </div>
                
                {/* Step 3 */}
                <div className="space-y-3">
                  <div className="w-8 h-8 border border-gray-300 bg-white text-gray-400 mx-auto flex items-center justify-center font-light">
                    3
                  </div>
                  <p className="text-gray-400">NFT sent to your wallet</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default HeroSection;