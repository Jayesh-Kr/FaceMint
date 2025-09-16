import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import PhotoUpload from './PhotoUpload.jsx';

const HeroSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-black">
            Transform Photos into NFT Art
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Upload any photo and watch our AI transform it into unique, collectible NFT-styled artwork in seconds.
          </p>
        </div>

        {/* Photo Upload Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto">
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border border-black rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-black">1</span>
                </div>
                <span className="text-gray-700">Upload your photo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border border-black rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-black">2</span>
                </div>
                <span className="text-gray-700">AI transforms it to NFT style</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border border-black rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-black">3</span>
                </div>
                <span className="text-gray-700">Download your artwork</span>
              </div>
            </div>
            
            <Button className="bg-black text-white hover:bg-gray-800 h-12 px-8 font-medium">
              Mint Your NFT
            </Button>
          </div>

          <div className="flex justify-center">
            <PhotoUpload onPhotoSelect={handlePhotoSelect} />
          </div>
        </div>

        <div className="flex justify-center gap-8 text-sm text-gray-600 pt-8">
          <span>20+ Art Styles</span>
          <span>•</span>
          <span>Instant Results</span>
          <span>•</span>
          <span>4K Resolution</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 text-base h-12 px-8 transition-all duration-200">
                  <Palette className="w-4 h-4 mr-2" />
                  View Gallery
                </Button>
                <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200">
                  See Pricing
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <PhotoUpload onPhotoSelect={handlePhotoSelect} />
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-purple-500" />
            20+ Art Styles
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-yellow-500" />
            Instant Results
          </span>
          <span className="flex items-center gap-1">
            <Palette className="w-4 h-4 text-blue-500" />
            High Resolution
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;