import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-purple-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center md:text-left max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Student <span className="text-orange-400">Industrial Attachments</span> With Smart Tracking
          </h1>
          <p className="text-xl text-purple-200 mb-8">
            Streamline student placements, collect real-time feedback, and generate powerful insights with our comprehensive attachment management platform.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Get started today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

