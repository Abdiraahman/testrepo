import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProjectDescription from './components/ProjectDescription';
import OurTeam from './components/OurTeam';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProjectDescription />
      <OurTeam />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
