import React from 'react';
import { Upload, Sparkles, Download, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Upload Your Photo",
      description: "Simply drag and drop any photo or click to browse. We support JPG, PNG, and JPEG formats up to 10MB. Your photo is processed securely and never stored permanently.",
      icon: <Upload className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "AI Transforms Your Image",
      description: "Our advanced AI analyzes your photo and applies your chosen NFT style. Choose from 20+ unique artistic styles including cyberpunk, abstract, fantasy, and more.",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Download Your NFT",
      description: "Get your high-resolution NFT artwork instantly. Download in multiple formats and resolutions, perfect for social media, gaming profiles, or digital collections.",
      icon: <Download className="w-8 h-8" />
    }
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your photos into stunning NFT art in just three simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center px-20">
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="h-20 w-20 bg-gray-100 flex items-center justify-center text-black">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 bg-black flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-black">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gray-100 border border-gray-200">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-black" />
              <span className="text-sm font-medium text-gray-600">
                Average processing time: <strong className="text-black">3-5 seconds</strong>
              </span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 text-black" />
              <span className="text-sm font-medium text-gray-600">
                Output resolution: <strong className="text-black">Up to 4K</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;