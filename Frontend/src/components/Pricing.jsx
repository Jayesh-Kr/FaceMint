import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Single Transform",
      price: "$2",
      period: "per image",
      description: "Perfect for trying out different styles",
      features: [
        "1 high-quality transformation",
        "Choose from 20+ art styles",
        "Up to 2K resolution",
        "Instant download",
        "Commercial license included"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Creator Pack",
      price: "$15",
      period: "10 transforms",
      description: "Best value for content creators and artists",
      features: [
        "10 transformations",
        "All art styles included",
        "Up to 4K resolution",
        "Priority processing",
        "Commercial license included",
        "Batch upload support"
      ],
      buttonText: "Most Popular",
      popular: true
    },
    {
      name: "Pro Bundle",
      price: "$45",
      period: "50 transforms",
      description: "For professionals and businesses",
      features: [
        "50 transformations",
        "All premium styles",
        "Up to 4K resolution",
        "Lightning-fast processing",
        "Commercial license included",
        "API access",
        "Priority support"
      ],
      buttonText: "Get Pro",
      popular: false
    }
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
            Simple Pricing
          </h2>
          <p className="text-gray-600 text-lg">
            Pay per transformation. No subscriptions, no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 border border-gray-200 bg-white transition-all duration-200 hover:border-black ${
                plan.popular ? "border-black" : ""
              }`}
            >
              {plan.popular && (
                <div className="text-xs uppercase tracking-wide text-black font-medium mb-4">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-medium text-black mb-2">{plan.name}</h3>
                <div className="text-3xl font-light text-black">{plan.price}</div>
                <div className="text-sm text-gray-600">{plan.period}</div>
              </div>

              <p className="text-gray-600 mb-8 text-sm">{plan.description}</p>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full h-12 font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black border border-gray-300 hover:border-black hover:bg-gray-50"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center text-gray-600 mt-12 text-sm">
          Questions? <span className="text-black hover:underline cursor-pointer">Contact us</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;