"use client"; // For Next.js App Router
import React from "react";
import { motion } from "framer-motion";
import {
  welcome_img1,
  welcome_img2,
  welcome_img3,
  welcome_img4,
  plane_left,
} from "@/public";
import Image from "next/image";
import Link from "next/link";

const WelcomeEmirates = () => {
  return (
    <section className="flex flex-col text-center justify-center items-center gap-5 py-[5rem] relative overflow-hidden sm:max-lg:py-[5rem] max-sm:py-[2rem]">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-[#0E0E0E] text-[3rem] font-semibold leading-[3.5rem] lg:max-xl:text-[2.8rem] sm:max-lg:text-[2.5rem] max-sm:text-[1.5rem] max-sm:leading-[2.5rem]"
      >
        Welcome To Emirates
        <br /> Travels
      </motion.h2>

      <Image
        src={plane_left}
        alt="emirates-img"
        width={100}
        height={260}
        className=" absolute left-[0rem] top-[25rem]"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-[#0E0E0E] max-sm:text-sm w-[35%] xl:max-[1550px]:w-[45%]  lg:max-2xl:w-[55%] max-lg:w-[60%] max-sm:w-[90%] sm:max-lg:w-[90%] "
      >
        At Emirates Travels, we believe in creating unforgettable travel
        experiences. Whether you're looking for adventure, relaxation, or
        cultural exploration, we provide tailored travel packages to suit your
        needs. Our dedicated team ensures seamless planning, premium
        accommodations, and top-notch services for a hassle-free journey.
      </motion.p>

      <Link href={"/about-us"}>
        <motion.button
          className="rounded-full mt-10  xl:max-[1550px]:text-sm  uppercase text-sm max-sm:mt-4 sm:max-lg:mt-5 py-3 px-8 font-medium text-white bg-primary duration-300 hover:bg-white hover:text-black hover:border lg:max-2xl:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Read more
        </motion.button>
      </Link>

      {/* Left Images */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute left-[7rem] top-[5rem]  lg:max-2xl:left-[4rem] lg:max-2xl:top-[4rem] sm:max-lg:hidden max-sm:hidden"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={welcome_img1}
              alt="emirates-img"
              width={200}
              height={260}
              className=" lg:max-2xl:w-[120px] xl:max-[1550px]:w-[200px]"
            />
          </motion.div>

          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={welcome_img2}
              alt="emirates-img"
              width={170}
              height={160}
              className="absolute -bottom-16 -right-20 "
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Images */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute right-[7rem] top-[5rem] lg:max-2xl:right-[4rem] sm:max-lg:hidden max-sm:hidden"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={welcome_img3}
              alt="emirates-img"
              width={200}
              height={260}
              className=" lg:max-2xl:w-[120px] xl:max-[1550px]:w-[200px]"
            />
          </motion.div>

          <motion.div
            initial={{ rotate: 10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={welcome_img4}
              alt="emirates-img"
              width={230}
              height={240}
              className="absolute -bottom-16 -left-16  "
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WelcomeEmirates;
