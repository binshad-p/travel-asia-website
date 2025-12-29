"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { process_1, process_2, process_3, process_4 } from "@/public";

// Smooth spring animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};


const wondersData = [
  { src: process_1, step: "Visit Our Office" },
  { src: process_2, step: "Connect with Us Online" },
  { src: process_3, step: "Make Secure Payments" },
  { src: process_4, step: "Begin Your Journey" },
];

const SevenWonders = () => {
  return (
    <section className="padding-x pb-[7rem] flex flex-col justify-center items-center gap-14 max-sm:pb-[3rem] max-sm:gap-7">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1], // easeOutExpo curve
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-[#0E0E0E] text-[3rem] font-semibold leading-[3.5rem] lg:max-xl:text-[2.8rem] sm:max-lg:text-[2.5rem] max-sm:text-[1.5rem] max-sm:leading-[2.5rem]"
      >
        Getting Our Service Is Easy
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-4 max-sm:grid-cols-1 xl:max-[1550px]:grid-cols-4 lg:max-2xl:grid-cols-2 sm:max-lg:grid-cols-2 gap-7"
      >
        {wondersData.map((wonder, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", stiffness: 120, damping: 10 },
            }}
            className="bg-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center text-center group"
          >
            <div className="overflow-hidden rounded-xl mb-4 w-full">
              <Image
                src={wonder.src}
                alt={`step-${index + 1}`}
                width={400}
                height={286}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#0E0E0E] mb-1">
              {wonder.step}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SevenWonders;
