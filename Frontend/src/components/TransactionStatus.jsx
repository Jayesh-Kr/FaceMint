import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, ExternalLink, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const TransactionStatus = ({ 
  status = 'pending', // 'pending', 'confirmed', 'failed'
  transactionSignature = 'AbCdEfGhIjKlMnOpQrStUvWxYz1234567890',
  onClose
}) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-16 h-16 text-green-600" />;
      case 'failed':
        return <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-red-600"></div>
        </div>;
      default:
        return <div className="w-16 h-16 rounded-full border-4 border-gray-300 border-t-black animate-spin"></div>;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'confirmed':
        return {
          title: 'NFT Minted Successfully!',
          description: 'Your NFT has been minted and sent to your wallet.'
        };
      case 'failed':
        return {
          title: 'Transaction Failed',
          description: 'There was an error minting your NFT. Please try again.'
        };
      default:
        return {
          title: 'Minting Your NFT...',
          description: 'Please wait while we process your transaction on the blockchain.'
        };
    }
  };

  const statusInfo = getStatusText();

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 max-w-md w-full p-8 space-y-6 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Status Icon */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          {getStatusIcon()}
        </motion.div>

        {/* Status Text */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-black">{statusInfo.title}</h3>
          <p className="text-gray-600">{statusInfo.description}</p>
        </div>

        {/* Transaction Details */}
        <div className="space-y-4 border-t border-gray-200 dark:border-gray-600 pt-6">
          <div className="text-left space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">
                Transaction Signature
              </label>
              <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                <code className="text-xs font-mono text-gray-800 dark:text-gray-200 flex-1 overflow-hidden">
                  {transactionSignature}
                </code>
                <button
                  onClick={() => copyToClipboard(transactionSignature)}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  title="Copy transaction signature"
                >
                  <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Network
              </label>
              <div className="p-3 bg-gray-50 border">
                <span className="text-sm text-gray-800">Solana Devnet</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {status === 'confirmed' && (
              <Button
                variant="outline"
                className="w-full border-gray-400 text-gray-600 hover:border-black hover:text-black"
                onClick={() => window.open(`https://explorer.solana.com/address/${transactionSignature}?cluster=devnet`, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Solana Explorer
              </Button>
            )}
            
            {(status === 'confirmed' || status === 'failed') && (
              <Button
                className="w-full bg-black text-white hover:bg-gray-800"
                onClick={onClose}
              >
                {status === 'confirmed' ? 'Close' : 'Try Again'}
              </Button>
            )}
          </div>
        </div>

        {/* Status indicator for pending */}
        {status === 'pending' && (
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>Estimated completion: 10-30 seconds</span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TransactionStatus;