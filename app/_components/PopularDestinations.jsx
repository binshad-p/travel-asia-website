"use client";
import React, { useState, useEffect } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PopularDestionationData } from "@/constatnt";
import Image from "next/image";
import { plane_right } from "@/public";
import Link from "next/link";

const PopularDestinations = () => {
  const [carouselApi, setCarouselApi] = useState(null);
  const [autoplay, setAutoplay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!carouselApi || !autoplay || isHovering) return;

    const interval = setInterval(() => {
      const currentIndex = carouselApi.selectedScrollSnap();
      const totalSlides = carouselApi.scrollSnapList().length;

      if (currentIndex === totalSlides - 1) {
        carouselApi.scrollTo(0); // Loop to the first slide
      } else {
        carouselApi.scrollNext(); // Go to next slide
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselApi, autoplay, isHovering]);

  return (
    <section className="bg-[#EFF2F5] relative padding-x pt-[4rem] pb-[8rem] flex flex-col gap-24 max-sm:gap-10 max-sm:pb-[2rem] max-sm:pt-[2rem]">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-5">
          <h1 className="text-[#0D1714] text-[3rem] font-semibold leading-[3.5rem] lg:max-xl:text-[2.8rem] sm:max-lg:text-[2.5rem] max-sm:text-[1.5rem] max-sm:leading-[2.5rem]">
            Popular Destinations
          </h1>
          <p className="text-[#626965] w-[55%] lg:max-2xl:w-[70%] sm:max-lg:w-[90%] max-sm:w-[100%]">
            Discover breathtaking destinations, explore vibrant cities, relax on
            stunning beaches, and create unforgettable travel memories.
          </p>
        </div>

        <Image
          src={plane_right}
          alt="emirates-img"
          width={100}
          height={20}
          className=" absolute right-[0rem] top-[0rem]"
        />

        <div className="flex gap-2 items-center max-sm:hidden">
          <button
            onClick={() => carouselApi?.scrollPrev()}
            className="flex justify-center items-center bg-white w-24 h-24 lg:max-2xl:w-20 lg:max-2xl:h-20  sm:max-lg:w-20  sm:max-lg:h-20 rounded-full border-dashed z-40 border-[#070202] border-[2px] mt-20 absolute left-[5rem] xl:max-[1450px]:left-[2rem] lg:max-2xl:left-[2.2rem] sm:max-lg:left-[.8rem] top-[50%] -translate-y-[50%]  hover:scale-105  transition-all duration-200"
            >
            <GrLinkPrevious color="#150958" className="text-2xl" />
          </button>
          <button
            onClick={() => carouselApi?.scrollNext()}
            className="flex justify-center items-center bg-white w-24 h-24 lg:max-2xl:w-20 lg:max-2xl:h-20 sm:max-lg:w-20  sm:max-lg:h-20 rounded-full border-dashed z-40 border-[#070202] border-[2px] mt-20 absolute right-[5rem] xl:max-[1450px]:right-[2rem] lg:max-2xl:right-[2.2rem] sm:max-lg:right-[.8rem] top-[50%] -translate-y-[50%]  hover:scale-105  transition-all duration-200"
          >
            <GrLinkNext color="#150958" className="text-2xl"/>
          </button>
        </div>
      </div>

      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Carousel className="w-full" setApi={setCarouselApi}>
          <CarouselContent className="">
            {PopularDestionationData?.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-5 sm:max-lg:basis-1/2 md:basis-1/2 lg:basis-1/4 max-sm:pl-1"
              >
                <Link href={`/tour-package/${item?.id}`}>
                  <div className="relative">
                    <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-black/90 to-transparent z-10 rounded-b-md" />
                    <p className="absolute bottom-5 left-[50%] -translate-x-[50%] text-white z-10 text-xl font-medium lg:max-2xl:text-base">
                      {item?.title}
                    </p>
                    <Image
                      src={item?.image}
                      alt="popular destination"
                      width={280}
                      height={400}
                      unoptimized
                      className="w-full rounded-md relative z-0 object-cover max-sm:h-[450px]"
                    />
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="hidden gap-2 justify-center items-center max-sm:flex">
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

export default PopularDestinations;
