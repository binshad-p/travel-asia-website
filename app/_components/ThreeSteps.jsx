"use client";

import Image from "next/image";
import { step_1, step_2, step_3 } from "@/public";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollProgress from "@/components/ScrollProgress";

gsap.registerPlugin(ScrollTrigger);

const ThreeSteps = () => {
  const sectionRef = useRef(null);
  const curvePathRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current && curvePathRef.current && circleRef.current) {
      const pathLength = curvePathRef.current.getTotalLength();

      // Set initial state - path is invisible
      gsap.set(curvePathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // Get the starting point of the path
      const startPoint = curvePathRef.current.getPointAtLength(0);

      // Set initial position of the circle at the start of the path
      gsap.set(circleRef.current, {
        x: startPoint.x,
        y: startPoint.y,
      });

      // Create animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      // Animate the path drawing
      tl.to(curvePathRef.current, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power1.inOut",
      });

      // Animate the circle movement along the path
      tl.to(
        {},
        {
          duration: 1,
          onUpdate: function () {
            const progress = tl.progress();
            const point = curvePathRef.current.getPointAtLength(
              progress * pathLength
            );
            gsap.set(circleRef.current, {
              x: point.x,
              y: point.y,
            });
          },
          ease: "power1.inOut",
        },
        0
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 py-12 flex flex-col justify-between gap-20 items-center sm:flex-col sm:gap-10 "
    >
      {/* Title and Description */}
      <div className="flex flex-col justify-center items-center gap-5 text-center">
      <h2 className="text-[3rem] font-semibold leading-[4rem] lg:max-xl:text-[2.8rem] sm:max-lg:text-[2.5rem] max-sm:text-[1.5rem] max-sm:leading-[2.5rem]">
      Book Your Dream Trip In Just 3 Easy Steps!
        </h2>
        <p className="text-[#626965]  font-light max-sm:text-sm text-center w-[70%] mx-auto">
          Planning your perfect getaway has never been easier! Follow these
          three simple steps to book your next adventure with Emirates Travels.
        </p>
      </div>

      <ScrollProgress />

      {/* Step 1 */}
      <div className="absolute mt-[20rem] max-2xl:mt-[15rem]">

      <div className="flex flex-col md:flex-row items-center justify-between mb-24 relative lg:max-2xl:px-20">
        <div className="order-2 md:order-1 mt-6 md:mt-0 flex justify-end ">
          <div className="transform rotate-2">
            <Image
              src={step_1}
              alt="Paragliding over coastal area"
              width={200}
              height={200}
              className="object-cover w-64 h-64 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
        <div className="md:w-5/12 order-1 md:order-2 ">
          <h2 className="text-2xl font-bold mb-4">Choose Your Destination</h2>
          <p className="text-gray-700">
            Explore our wide range of destinations and select the perfect
            getaway that matches your travel dreams and preferences.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-24 relative lg:max-2xl:px-20">
        <div className="order-1 ">
          <h2 className="text-2xl font-bold mb-4">Customize Your Package</h2>
          <p className="text-gray-700 w-[50%]">
            Pick from our curated travel packages or personalize your itinerary
            with flights, hotels, and activities tailored just for you.
          </p>
        </div>
        <div className="md:w-5/12 order-2 mt-6 md:mt-0 flex justify-start">
          <div className="transform -rotate-2">
            <Image
              src={step_2}
              alt="Person sitting on rock near hot spring"
              width={200}
              height={200}
              className="object-cover w-64 h-64 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between relative lg:max-2xl:px-20">
        <div className="order-2 md:order-1 mt-6 md:mt-0 flex justify-end">
          <div className="transform rotate-1">
            <Image
              src={step_3}
              alt="Treehouse in forest"
              width={200}
              height={200}
              className="object-cover w-64 h-64 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
        <div className="md:w-5/12 order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-4">Confirm & Travel</h2>
          <p className="text-gray-700 w-[80%]">
            Complete your booking in a few clicks, pack your bags, and get ready
            for an unforgettable journey with Emirates Travels!
          </p>
        </div>
      </div>
      </div>

    </section>
  );
};

export default ThreeSteps;
