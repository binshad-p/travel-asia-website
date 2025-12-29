import { bird, doodles } from "@/public";
import Image from "next/image";
import React from "react";

const ApplyVisa = () => {
  return (
    <section className="relative w-full overflow-hidden padding-x pt-8 xl:pt-24">
      {/* Background wrapper */}
      <div className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] xl:h-[600px]">
        {/* Background Image */}
        <Image
          src={doodles}
          alt="Apply Visa Background"
          fill
          className="object-cover"
          priority
        />

        {/* Bird image */}
        <Image
          src={bird}
          alt="Apply Visa Bird"
          width={1200}
          height={1200}
          className="absolute bottom-[0rem] sm:bottom-[-6rem] md:bottom-[-5rem] lg:bottom-[-6rem] xl:bottom-[-8rem] left-1/2 -translate-x-1/2 hidden md:block md:w-[700px] lg:w-[1050px] xl:w-[70rem] h-auto pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-4 sm:bottom-10 xl:bottom-20 flex flex-col items-center text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 z-10">
          Start Your Visa Request
        </h2>

        <p className="xl:w-[35%] lg:w-[50%] md:w-[75%] w-full text-sm sm:text-base md:text-lg px-2 z-10">
          Start your application and follow the guided steps to complete your visa request.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 z-10">
          <button className="bg-gradient-to-r w-[260px] md:w-[270px] from-[#EE822C] to-[#E6552A] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
            Apply for UAE Visa Application
          </button>

          <button className="border w-[260px] md:w-[270px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-md shadow-lg hover:border-black transition-shadow duration-300">
            For Other Visa Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplyVisa;
