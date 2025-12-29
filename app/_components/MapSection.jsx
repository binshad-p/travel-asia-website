"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  map,
  pop_destination_1,
  pop_destination_12,
  pop_destination_13,
  pop_destination_15,
  pop_destination_3,
  pop_destination_4,
  pop_destination_5,
  pop_destination_6,
  plane_right,
} from "@/public";
import { FaMapMarkerAlt } from "react-icons/fa";

const destinations = [
  {
    name: "Thailand",
    image: pop_destination_1,
    style:
      "top-[55%]  right-[28.5%] xl:max-[1450px]:right-[27%] max-sm:top-[60%] lg:max-2xl:top-[56%] sm:max-lg:top-[62%] sm:max-lg:right-[26%] max-sm:top-[62.8%] max-sm:right-[25.1%]", // Adjust this based on actual pin position
  },
  {
    name: "Vietnam",
    image: pop_destination_12,
    style: "top-[57%] right-[26%] xl:max-[1450px]:right-[24.5%] lg:max-2xl:top-[59%] sm:max-lg:top-[63%] sm:max-lg:right-[24.5%] max-sm:top-[63.5%] max-sm:right-[23.5%]", // Adjust this based on actual pin position
  },
  {
    name: "Cambodia",
    image: pop_destination_6,
    style: "top-[57%] right-[27%] xl:max-[1450px]:right-[25.5%] sm:max-lg:top-[62.5%] sm:max-lg:right-[25%] max-sm:top-[63.8%] max-sm:right-[24.1%]", // Adjust this based on actual pin position
  },
  {
    name: "Malaysia",
    image: pop_destination_3,
    style: "top-[61.5%] right-[27.3%] xl:max-[1450px]:right-[26%] lg:max-2xl:top-[62.3%] lg:max-2xl:right-[27%] sm:max-lg:top-[66%] sm:max-lg:right-[25.8%] max-sm:top-[64.5%] max-sm:right-[26%]", // Adjust this based on actual pin position
  },
  {
    name: "Singapore",
    image: pop_destination_13,
    style: "top-[59.8%] right-[27.8%] xl:max-[1450px]:right-[26%] sm:max-lg:top-[64%] sm:max-lg:right-[26.8%] max-sm:top-[66.5%] max-sm:right-[25%]", // Adjust this based on actual pin position
  },
  {
    name: "Bali",
    image: pop_destination_5,
    style: "top-[66%] right-[24%] xl:max-[1450px]:right-[23%] lg:max-2xl:top-[66.5%] sm:max-lg:top-[69.5%] sm:max-lg:right-[23.5%] max-sm:top-[69%] max-sm:right-[22%]", // Adjust this based on actual pin position
  },
  {
    name: "Azerbaijan",
    image: pop_destination_4,
    style: "top-[45%] left-[56.5%] xl:max-[1450px]:left-[57%] lg:max-2xl:top-[48%] sm:max-lg:top-[53%] max-sm:top-[55%] ", // Adjust this based on actual pin position
  },

  {
    name: "Sri Lanka",
    image: pop_destination_15,
    style: "top-[59%] right-[33%] xl:max-[1500px]:right-[32%] lg:max-2xl:top-[60.5%] lg:max-2xl:right-[32.5%] sm:max-lg:top-[64.5%] sm:max-lg:right-[31.8%] max-sm:top-[65%] max-sm:right-[31%]", // Adjust this based on actual pin position
  },
];

const MapSection = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="bg-[#EFF2F5] pt-[18rem] pb-[7rem] padding-x sm:max-lg:pb-[5rem] relative  max-sm:pt-[12rem]  max-sm:pb-[3rem]">
      {/* Heading */}
      <Image
        src={plane_right}
        alt="emirates-img"
        width={150}
        height={260}
        className=" absolute right-[0rem] top-[5em]"
      />
      <div className="flex flex-col gap-2 absolute top-[5rem] sm:max-lg:top-[3rem] max-sm:top-[1.5rem] max-sm:left-[1rem] sm:max-lg:left-[3rem] left-[7rem]">
        <p className="text-[#0E0E0E] font-medium text-[3rem] lg:max-2xl:text-[2.5rem] sm:max-lg:text-[2rem] max-sm:text-[1.5rem] ">
          Exploring the World,
          <br /> One Destination at a Time
        </p>
        <p className="text-[#626965] w-[55%] sm:max-lg:w-[70%] max-sm:w-full">
          With a strong presence across continents, Emirates Travels brings you
          closer to your dream destinations. Wherever you go, we’re with you!
        </p>
      </div>

      {/* Map Image */}
      <Image
        src={map}
        width={1360}
        height={650}
        alt="map"
        className="relative z-0 max-sm:h-[200px] "
      />

      {/* Pins */}

      {/* Modal */}
      {/* Pins */}
      {destinations.map((dest, index) => (
        <div
          key={index}
          className={`absolute ${dest.style} `}
          onMouseEnter={() => setSelectedDestination(dest)}
          onMouseLeave={() => setSelectedDestination(null)}
        >
          {/* <Image src={pinIcon} alt={`${dest.name} pin`} className='cursor-pointer animate-pulse' width={30} height={30} /> */}
          {/* <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center cursor-pointer ">
            <div className="w-2 h-2 bg-[#2F246BE5] rounded-full animate-pulse"></div>
          </div> */}
          <FaMapMarkerAlt color="red"  className="animate-pulse sm:max-lg:w-3 max-sm:w-[6px]" />
          {/* Tooltip/Popup on hover */}
          {selectedDestination?.name === dest.name && (
            <div className="absolute top-[-12rem] left-[-6rem] bg-white p-2 rounded-xl shadow-xl w-[250px] max-sm:w-[150px] max-sm:top-[-7rem] z-30 ">
              <h2 className=" absolute top-5 -left-5   font-semibold mb-2 bg-[#435BA3] text-white px-4 py-1 rounded-lg ">
                {selectedDestination.name}
              </h2>
              <Image
                src={selectedDestination.image}
                alt={selectedDestination.name}
                width={200}
                height={120}
                className="rounded-xl w-full h-[200px] max-sm:h-[100px] max-sm:w-[150px]  object-cover object-bottom cursor-pointer"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MapSection;
