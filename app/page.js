"use client";
import React from "react";
import HeroSection from "./_components/HeroSection";

import WelcomeEmirates from "./_components/WelcomeEmirates";
import SevenWonders from "./_components/SevenWonders";
import PopularDestinations from "./_components/PopularDestinations";
import OurServices from "./_components/OurServices";
import FeatureSection from "./_components/FeatureSection";
import ThreeSteps from "./_components/ThreeSteps";
import OurPackages from "./_components/OurPackages";
import Testimonial04 from "@/components/testimonial-04/testimonial-04";
import Logos06Page from "@/components/logos-06/logos-06";
import CTASection from "./_components/CTASection";
import BookingStep from "@/app/tour-package/_components/booking_step";
import MapSection from "./_components/MapSection";
import AboutUs from "./_components/AboutUs";
import ApplyVisa from "./_components/ApplyVisa";

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <OurServices />
      <AboutUs />
      {/* <WelcomeEmirates />
      
      <SevenWonders />
      <PopularDestinations /> */}
      <ApplyVisa />
      <OurPackages />
      <FeatureSection />
      {/* <div className="max-sm:hidden sm:max-lg:hidden">
        <ThreeSteps />
      </div> */}

      {/* <div className="lg-hidden xl:max-[1550px]:hidden lg:max-2xl:hidden">
        <BookingStep />
      </div> */}
      {/* <MapSection/> */}
      <Testimonial04 />
      <Logos06Page color={"EFF2F5"} />
      <CTASection />
    </div>
  );
};

export default Home;
