import React from "react";
import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <section className="padding-x pt-[6rem] pb-[17rem] flex flex-col gap-16 justify-center items-center bg-light max-sm:pt-[2rem] max-sm:gap-5">
      <div className="flex flex-col gap-6 justify-center items-center max-sm:gap-3">
        <motion.h2
          className=" text-[3.375rem] font-semibold max-sm:text-[1.5rem] lg:max-2xl:text-[2.8rem] sm:max-lg:text-[2.5rem]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our <span className="text-primary"> Courses </span>
        </motion.h2>
        <motion.p
 className="text-[#626965] w-[80%] text-center max-sm:text-sm max-sm:w-full sm:max-lg:text-base sm:max-lg:w-full"
 initial={{ opacity: 0, y: 50 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1.2, ease: "easeOut" }}
>
          Welcome to Credenz We offer online courses from Kindergarten to
          Post-Graduation, combining expert guidance and innovative technology
          to make learning engaging, accessible, and impactful. Unlock your
          potential with us!
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceHero;
