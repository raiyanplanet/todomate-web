import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ScreenshotsSection from '../components/ScreenshotsSection';
import DeveloperSection from '../components/DeveloperSection';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-slate-800 text-white">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <DeveloperSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default LandingPage;