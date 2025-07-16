import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-purple-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Industrolink
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              Home
            </a>
            <a href="#features" className="hover:text-yellow-400 transition-colors">
              Features
            </a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">
              About us
            </a>
          </div>
          
          {/* Login Button */}
          {/*<Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-purple-900 transition-colors"
          >
            Login →
          </Button>*/}
        </div>
      </nav>
    </header>
  );
};
export default Header;

