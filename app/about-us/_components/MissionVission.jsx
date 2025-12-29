"use client";
import { mission_vission } from "@/constatnt";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9],
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const iconVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    rotate: -10
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

const MissionVission = () => {
  return (
    <motion.div 
      className="flex justify-center padding-x gap-[60px] sm:max-lg:gap-5 max-sm:flex-col max-sm:gap-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {mission_vission?.slice(0, 2).map((item, index) => (
        <motion.div
          key={index}
          className="bg-light rounded-3xl p-8 flex flex-col gap-8 max-sm:p-5 sm:max-lg:gap-5 max-sm:gap-5 flex-1 shadow-xl hover:shadow-2xl"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          }}
        >
          <motion.div 
            className="w-16 h-16 sm:max-lg:w-14 sm:max-lg:h-14 max-sm:w-14 max-sm:h-14 rounded-full flex justify-center items-center bg-white"
            variants={iconVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Image 
                src={item?.icon} 
                alt="icon" 
                width={40} 
                height={40} 
                className="max-sm:w-7 sm:max-lg:w-7 lg:max-2xl:w-7"
              />
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.3
                }
              }
            }}
          >
            <p className="text-[#0E0E0E] text-[24px] font-semibold">
              {item?.title}
            </p>
            <p className="text-[#626965] sm:max-lg:text-sm max-sm:text-sm">
              {item?.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MissionVission;