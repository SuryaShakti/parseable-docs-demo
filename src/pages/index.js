import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Layout/Navbar1";
import SecondSection from "../components/SecondSection";

const index = () => {
  return (
    <div className="">
      <div className="md:h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <SecondSection />
    </div>
  );
};

export default index;
