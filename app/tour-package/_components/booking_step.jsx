import { arrow, arrow1 } from "@/public";
import Image from "next/image";
import React from "react";

const booking_step = () => {
  return (
    <div className="padding-y padding-x flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="text-[#0E0E0E] font-medium text-[3rem] lg:max-2xl:text-[2.5rem] sm:max-lg:text-[2rem] max-sm:text-[1.5rem] max-sm:text-center">
          Book Your Dream Trip in Just 3 Easy Steps!
        </p>
        <p className="text-[#626965] w-[70%] text-center max-sm:w-full">
          Planning your perfect getaway has never been easier! Follow these
          three simple steps to book your next adventure with Emirates Travels.
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <div className="flex max-sm:flex-col max-sm:gap-[5rem] justify-between items-center gap-4">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-gray-400 italic text-[40px] font-semibold  mb-4">
              01
            </div>

            <h3 className="font-medium text-lg mb-2">
              Choose Your Destination
            </h3>
            <p className="text-sm text-gray-600">
              Explore our curated list of destinations and select the perfect
              getaway that matches your travel desires.
            </p>
          </div>
          <div className="max-sm:rotate-90">
            <Image src={arrow1} alt="Step 1" width={100} height={100} className="w-[350px] max-sm:w-[150px]"/>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-gray-400 italic text-[40px] font-semibold  mb-4">
              02
            </div>

            <h3 className="font-medium text-lg mb-2">Customize Your Package</h3>
            <p className="text-sm text-gray-600">
              Create a tailored travel experience or personalize your itinerary
              with flights, hotels, and activities blended.
            </p>
          </div>
          <div className="max-sm:rotate-90">
            <Image src={arrow} alt="Step 1" width={100} height={100} className="w-[350px] max-sm:w-[150px]"/>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-gray-400 italic text-[40px] font-semibold  mb-4">
              03
            </div>
            <h3 className="font-medium text-lg mb-2">Confirm & Travel</h3>
            <p className="text-sm text-gray-600">
              Complete your booking process, check your bags, and get ready for
              an unforgettable journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default booking_step;
