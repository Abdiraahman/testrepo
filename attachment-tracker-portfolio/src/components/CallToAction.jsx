import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Transform Your Program?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of institutions streamlining their attachment programs with Industrolink.
        </p>
        <Button 
          size="lg" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Get started today
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;

