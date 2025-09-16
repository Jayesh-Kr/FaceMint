import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This NFT generator completely transformed my social media presence! I turned my boring selfie into this amazing cyberpunk avatar that gets tons of likes. The quality is incredible and it only took 5 seconds!",
      author: "Alex Chen",
      position: "Digital Content Creator",
      platform: "Instagram: 150K followers"
    },
    {
      quote: "As a digital artist, I was skeptical about AI art tools. But this blew me away! I use it to create base concepts for my NFT collections. The variety of styles and the commercial license make it perfect for my business.",
      author: "Maya Rodriguez",
      position: "NFT Artist & Crypto Enthusiast",
      platform: "OpenSea: 500+ NFTs sold"
    },
    {
      quote: "I've tried so many avatar creators, but nothing comes close to this. The anime style transformation of my photo looked like it was drawn by a professional artist. Now all my gaming profiles look epic!",
      author: "Jordan Smith",
      position: "Gamer & Streamer",
      platform: "Twitch: 50K followers"
    },
    {
      quote: "Our marketing team uses this for creating personalized avatars for our clients. The professional quality and variety of styles help us deliver unique branded content. It's become essential to our workflow.",
      author: "Sarah Johnson",
      position: "Creative Director",
      platform: "Marketing Agency"
    },
    {
      quote: "I'm not tech-savvy at all, but this tool is so easy to use! I created beautiful NFT-style portraits of my family for our digital photo album. The results look like expensive commissioned artwork.",
      author: "Robert Williams",
      position: "Small Business Owner",
      platform: "Family Photography"
    },
    {
      quote: "The speed and quality are unmatched. I can create unique avatar variations for my entire team in minutes. The 4K resolution means they look great on everything from business cards to billboards.",
      author: "Lisa Park",
      position: "Brand Manager",
      platform: "Fortune 500 Company"
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black">
            Join 50,000+ Happy Creators
          </h2>
          <p className="text-gray-600 text-lg">
            See what digital artists, content creators, and NFT enthusiasts are saying about our AI transformation tool
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 bg-white hover:border-black transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-black fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-black text-sm">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.platform}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof stats */}
        <div className="mt-16 bg-white p-8 border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-black mb-2">50K+</div>
              <div className="text-sm text-gray-600">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">500K+</div>
              <div className="text-sm text-gray-600">Images Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;