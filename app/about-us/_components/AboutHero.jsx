"use client";
import { about_us_img } from "@/public";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="padding-x pt-[6rem] flex flex-col gap-16 justify-center items-center bg-white sm:max-lg:pt-[3rem] max-sm:pt-[2rem] max-sm:gap-5">
      <motion.div
        className="flex flex-col gap-6 justify-center items-center max-sm:gap-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-[3.375rem] font-semibold lg:max-2xl:text-[2.8rem] sm:max-lg:text-[2.5rem] sm:max-lg:text-center max-sm:text-[1.5rem] max-sm:text-center">
          Empowering <span className="text-primary">Learning</span>, Inspiring{" "}
          <span className="text-primary">Growth</span>
        </h2>
        <p className="text-[#626965] w-[70%] text-center lg:max-2xl:w-[90%] sm:max-lg:w-full max-sm:text-sm max-sm:w-full">
          Welcome to Credenz Tutors! We combine expert guidance and innovative
          technology to make learning engaging, accessible, and transformative.
          From Kindergarten to PostGraduation, we’re here to help you unlock
          your potential and achieve your academic dreams.
        </p>
      </motion.div>

      <div className="relative">
        <motion.div
          className="bg-gradient-to-t from-[#0000006f] to-[#3330] w-full absolute h-full rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={about_us_img}
            alt="Credenz team image"
            width={1400}
            height={620}
            className="object-cover w-full "
          />
        </motion.div>

        <motion.p
          className="absolute bottom-3 right-5 w-[50%] text-right text-white lg:max-2xl:w-[70%] sm:max-lg:w-[90%] max-sm:text-[10px] max-sm:w-[100%] max-sm:right-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our team at Credenz, dedicated educators and experts collaborate
          to deliver innovative, high-quality courses, ensuring an engaging and
          personalized learning experience. Together, we empower you to succeed!
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
