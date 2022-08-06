import React from "react";
import Features from "../Features";
import VideoSection from "../VideoSection";
import UpcomingSection from '../UpcomingSection';
import Community from '../Community'
import Footer from '../Layout/Footer'

const SecondSection = () => {
  return (
    <div className="mt-60 md:mt-96  border-t h-600 bg-blue-bg bg-cover bg-no-repeat">
      <VideoSection />
      <Features />
      <UpcomingSection />
      <Community />
      <Footer />
    </div>
  );
};

export default SecondSection;
