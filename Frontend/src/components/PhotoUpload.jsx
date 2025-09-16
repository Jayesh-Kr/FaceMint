import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Upload, X } from 'lucide-react';
import { motion } from 'framer-motion';
import TransactionStatus from './TransactionStatus.jsx';
import pinata from '../../utils/pinata.js';

const PhotoUpload = ({ onPhotoSelect, onMintingStateChange, className = "" }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [nftName, setNftName] = useState('');
  const [nftDescription, setNftDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTransaction, setShowTransaction] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState('pending');
  const [transactionSignature, setTransactionSignature] = useState('');
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedPhoto(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target.result);
      };
      reader.readAsDataURL(file);
      onPhotoSelect && onPhotoSelect(file);
      // Show message about NFT minting
      // You can add a toast or modal here for user feedback
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const clearPhoto = () => {
    setSelectedPhoto(null);
    setPreviewUrl(null);
    setWalletAddress('');
    setNftName('');
    setNftDescription('');
    setShowTransaction(false);
    setTransactionStatus('pending');
    setTransactionSignature('');
    setSlot(null);
    onMintingStateChange?.(1); // Reset to step 1 (upload photo state)
  };

  const handleCloseTransaction = () => {
    setShowTransaction(false);
    if (transactionStatus === 'confirmed') {
      // Keep the form data but allow user to mint another NFT
      // Or you could clear the form here if preferred
    } else if (transactionStatus === 'failed') {
      // Reset transaction state for retry
      setTransactionStatus('pending');
      setTransactionSignature('');
      setSlot(null);
    }
  };

  const handleMintNFT = async () => {
    if (!walletAddress || !nftName || !selectedPhoto) {
      alert('Please fill in wallet address, NFT name, and select a photo');
      return;
    }

    setIsLoading(true);
    onMintingStateChange?.(3); // Step 3: Minting in progress
    setTransactionStatus('pending');
    setShowTransaction(true);

    try {
      // Step 1: Upload the photo to Pinata
      console.log("Uploading photo to Pinata...");
      const uploadPhoto = await pinata.upload.public.file(selectedPhoto);
      
      if (!uploadPhoto.cid) {
        throw new Error("Failed to get IPFS hash for uploaded image");
      }

      const imageURL = `https://orange-given-mink-808.mypinata.cloud/ipfs/${uploadPhoto.cid}`;
      console.log("Image uploaded successfully:", imageURL);

      // Step 2: Mint NFT by calling backend API
      console.log("Minting NFT...");
      const mintResponse = await fetch('http://localhost:3000/mintNFT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nftName,
          walletAddress: walletAddress,
          image: imageURL,
          description: nftDescription || "My Face Punk NFT"
        }),
      });

      const mintData = await mintResponse.json();

      if (!mintResponse.ok || !mintData.success) {
        throw new Error(mintData.error || 'Failed to mint NFT');
      }

      console.log("NFT minted successfully:", mintData);
      const nftAddress = mintData.data.nftAddress;
      setTransactionSignature(mintData.data.mintAddress || 'N/A');

      // Success - update UI
      setTransactionStatus('confirmed');

    } catch (error) {
      console.error("Error during NFT minting process:", error);
      setTransactionStatus('failed');
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className={`relative border-2 border-dashed border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 p-12 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:border-black dark:hover:border-white ${isDragOver ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-700' : ''} ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => !selectedPhoto && fileInputRef.current && fileInputRef.current.click()}
    >
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileInputChange}
      />
      
      {!selectedPhoto ? (
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Upload className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto" />
          <div className="space-y-2">
            <h3 className="text-xl font-light text-black dark:text-white">Upload Photo to Mint NFT</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Drag & drop or click to select</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">JPG, PNG, JPEG • Max 10MB</p>
          </div>
          <p className="text-sm text-black dark:text-white font-medium border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
            Your NFT will be sent directly to your wallet
          </p>
        </motion.div>
      ) : (
        <motion.div 
          className="w-full space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Photo Preview */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.img 
              src={previewUrl} 
              alt="Preview" 
              className="w-48 h-48 object-cover border border-gray-300 dark:border-gray-600 mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Button 
                variant="outline" 
                onClick={clearPhoto}
                className="border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white mt-4"
              >
                <X className="w-4 h-4 mr-2" />
                Remove Photo
              </Button>
            </motion.div>
          </motion.div>

          {/* Minting Form */}
          <motion.div 
            className="space-y-4 max-w-md mx-auto" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Wallet Address *
              </label>
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="0x..."
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                required
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>

            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                NFT Name *
              </label>
              <input
                type="text"
                value={nftName}
                onChange={(e) => setNftName(e.target.value)}
                placeholder="My Awesome NFT"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                required
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>

            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Description (Optional)
              </label>
              <textarea
                value={nftDescription}
                onChange={(e) => setNftDescription(e.target.value)}
                placeholder="Describe your NFT..."
                rows={3}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors resize-none"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 border-0 py-3"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMintNFT();
                }}
                disabled={isLoading}
              >
                {isLoading ? 'Minting NFT...' : 'Mint as NFT'}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Transaction Status Modal */}
      {showTransaction && (
        <TransactionStatus
          status={transactionStatus}
          transactionSignature={transactionSignature}
          onClose={handleCloseTransaction}
        />
      )}
    </div>
  );
};

export default PhotoUpload;