"use client";
import React, { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { OurPackagesData } from "@/constatnt";
import Link from "next/link";
import { plane_left } from "@/public";

const OurPackages = () => {
  // State to store carousel API
  const [carouselApi, setCarouselApi] = useState(null);

  const highlightKeywords = (text, keywords) => {
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      keywords.some((kw) => kw.toLowerCase() === part.toLowerCase()) ? (
        <span key={index} className="text-[#233d9b]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className=" padding-x relative py-[7rem] sm:max-lg:py-[3rem] lg:max-2xl:py-[5rem] max-sm:py-[2rem] flex flex-col gap-14 max-sm:">
      {/* Header Section */}

      <Image
        src={plane_left}
        alt="emirates-img"
        width={150}
        height={260}
        className=" absolute left-[0rem] bottom-[0rem] max-sm:hidden"
      />

      <div className="flex justify-between items-end ">
        <div className="flex xl:max-[1550px]:flex-row max-sm:flex-col max-sm:gap-4 sm:max-lg:flex-col sm:max-lg:gap-5  justify-between lg:max-2xl:flex-col lg:max-2xl:gap-5">
          <h1 className="text-[#0E0E0E] text-[3rem] font-semibold leading-[3.5rem] lg:max-xl:text-[2.8rem] sm:max-lg:text-[2.5rem] max-sm:text-[1.5rem] max-sm:leading-[2.5rem]">
            Explore Our Packages{" "}
          </h1>
          <p className="text-[#626965] w-[40%] max-sm:w-full max-sm:text-start sm:max-lg:w-[90%] sm:max-lg:text-start  xl:max-[1550px]:w-[40%] text-end lg:max-2xl:w-[70%] lg:max-2xl:text-start">
            Discover breathtaking destinations, explore vibrant cities, relax on
            stunning beaches, and create unforgettable travel memories.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div>
        <Carousel className="w-full" setApi={setCarouselApi}>
          <CarouselContent className="-ml-1 ">
            {OurPackagesData?.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-5 sm:max-lg:basis-1/2 md:basis-1/2 lg:basis-1/3 max-sm:pl-1"
              >
                <div className="border border-[#15095833] rounded-lg group overflow-hidden">
                  {/* Image Wrapper with Overlay */}
                  <div className="relative w-full">
                    <Image
                      src={item?.image}
                      alt="popular destination"
                      width={280}
                      height={400}
                      className="rounded-t-lg w-full h-[250px] xl:max-[1550px]:h-[250px] transition-all duration-300 lg:max-2xl:h-[200px]"
                      unoptimized
                    />
                    {/* Overlay with Button */}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col">
                    <div className="px-5 py-3 flex flex-col gap-2">
                      <p className="text-[#626965] font-light flex gap-1 items-center lg:max-2xl:text-xs sm:max-lg:sm">
                        <IoLocationSharp size={20} />
                        {item?.location}
                      </p>
                      <p className="text-[#0E0E0E] text-2xl font-semibold max-sm:text-lg xl:max-[1550px]:text-xl lg:max-2xl:text-sm sm:max-lg:text-base">
                        {highlightKeywords(item?.title, [
                          "Azerbaijan",
                          "Delhi Agra",
                          "Hyderabad",
                          "Ladakh",
                          "Vietnam",
                          "Bali",
                          "Jaipur",
                          "Kashmir",
                          "Malaysia",
                          "Thailand",
                          "Sri Lanka",
                          "Cambodia",
                          "Goa",
                          "Lakshadweep",
                          "Manali",
                          "Singapore",
                          'Phuket & Krabi',
                        ])}
                      </p>
                    </div>
                    <hr />
                    <div className="flex justify-between px-5 py-3">
                      <p className="text-[#626965] font-light flex gap-1 items-center lg:max-2xl:text-sm">
                        <FaCalendarAlt size={20} /> {item?.days} Days
                      </p>
                      <Link href={`/tour-package/${item?.id}`}>
                        <button className="rounded-full py-2 xl:max-[1550px]:text-sm  text-sm px-6 font-medium text-white bg-primary duration-300 border border-white hover:bg-white hover:text-black hover:border hover:border-black lg:max-2xl:text-sm">
                          View More{" "}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Custom Buttons for Carousel Control */}
      <div className="flex justify-center items-center w-full gap-2">
        <button
          onClick={() => carouselApi?.scrollPrev()}
          className="border px-5 py-2 rounded-3xl border-[#15095833]"
        >
          <GrLinkPrevious color="#150958" />
        </button>
        <button
          onClick={() => carouselApi?.scrollNext()}
          className="border px-5 py-2 rounded-3xl border-[#15095833]"
        >
          <GrLinkNext color="#150958" />
        </button>
      </div>
    </section>
  );
};

export default OurPackages;
