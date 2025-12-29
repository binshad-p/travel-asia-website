"use client";
import React from "react";
import { corevaluesData } from "@/constatnt";
import { motion } from "framer-motion"; // Import Framer Motion

const CoreValues = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="padding-x max-sm:pt-[3rem] pb-[8rem] flex flex-col gap-20 justify-center items-center bg-white sm:max-lg:pb-[5rem] max-sm:pb-[2rem] max-sm:gap-5">
      {/* Section Header with Fade-In Effect */}
      <motion.div
        className="flex flex-col gap-6 justify-center items-center sm:max-lg:gap-3 max-sm:gap-3"
        variants={fadeIn} // Apply the fade-in variant
        initial="hidden"
        whileInView="show" // Trigger animation when in view
        viewport={{ once: true }} // Trigger once when the element enters the viewport
        transition={{ duration: 1, delay: 0.5 }} // Optional delay for a smooth entrance
      >
        <h2 className="text-[#0E0E0E] text-[3.375rem] font-semibold lg:max-2xl:text-[2.8rem] sm:max-lg:text-[2.5rem] max-sm:text-[1.5rem]">
          Our Core Values{" "}
        </h2>
        <p className="text-[#626965] w-[70%] text-center sm:max-lg:text-sm max-sm:text-sm max-sm:w-full">
          Teach and support students worldwide through online tuition, creating
          a limitless learning environment, and helping every student reach
          their full potential and achieve success.
        </p>
      </motion.div>

      {/* Core Values Grid with Slide-In Animation */}
      <motion.div
        className="flex justify-between gap-20 items-center sm:max-lg:flex-col sm:max-lg:gap-10 max-sm:flex-col max-sm:gap-5"
        variants={fadeIn}
        initial="hidden"
        whileInView="show" // Trigger animation when in view
        viewport={{ once: true }} // Trigger once when the element enters the viewport
        transition={{ duration: 1, delay: 0.7 }}
      >
        <motion.div className="grid grid-cols-4 xl:grid-cols-4 sm:max-lg:grid-cols-2 lg:max-2xl:grid-cols-2 max-sm:grid-cols-1 gap-5">
          {corevaluesData?.map((item, index) => (
            <motion.div
              className="flex flex-col gap-5 bg-light p-5 rounded-2xl hover:border hover:border-secondary duration-300 border"
              key={index}
              variants={slideIn} // Slide-in effect for each core value
              initial="hidden"
              whileInView="show" // Trigger slide-in animation when in view
              viewport={{ once: true }} // Trigger once when the element enters the viewport
              transition={{ duration: 0.8, delay: index * 0.1 }} // Stagger the animations for each item
            >
              <div className="bg-primary w-14 h-14 rounded-[50%] flex items-center justify-center">
                {item?.icon}
              </div>
              <p className="text-xl font-semibold">{item?.title}</p>
              <p className="text-sm text-[#626965]">{item?.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoreValues;
