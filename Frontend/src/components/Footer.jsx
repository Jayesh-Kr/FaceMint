import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-12 border-t border-gray-800 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-8 h-8 border border-white bg-black flex items-center justify-center">
                <span className="text-white font-light text-lg">F</span>
              </div>
              <span className="ml-3 text-2xl font-light text-white">FaceMint</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed max-w-xs">
              Transform your photos into NFTs instantly. Upload, mint, and receive your digital assets directly in your wallet.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-light text-lg text-white">Product</h4>
            <ul className="space-y-3">
              <li><a href="#how" className="text-gray-400 hover:text-white transition-colors font-light">How It Works</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors font-light">About</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors font-light">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-light text-lg text-white">Support</h4>
            <ul className="space-y-3">
              <li><a href="#help" className="text-gray-400 hover:text-white transition-colors font-light">Help Center</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors font-light">Contact</a></li>
              <li><a href="#privacy" className="text-gray-400 hover:text-white transition-colors font-light">Privacy</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 font-light">
            © 2025 FaceMint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;