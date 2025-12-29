import { hero_bg,  } from "@/public";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-start padding-x justify-center gap-8 h-[100vh] max-sm:gap-5 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={hero_bg}
          alt="Hero Background" 
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {/* Black Overlay */}
      </div>

      {/* Content */}
      <p className="relative text-[#ffffffbb]  font-light text-left max-sm:text-sm md:w-[40%] w-full z-10 mt-20">
        ELEVET YOUR TRAVEL JOURNY 
      </p>

      <h1 className="relative text-[2.5rem] md:w-[40%] w-[75%]  md:text-[3.5rem] lg:text-[4.25rem] xl:text-[80px] font-semibold text-left leading-[3rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[6rem] max-sm:text-[2rem] text-white  z-10">
        Discover the World with 
        TravelAsia
      </h1>
      <div className="relative flex gap-5 z-10">
        <Link href={"/contact-us"}>
  <button className="group text-white flex items-center gap-3 bg-gradient-to-r from-[#EE822C] to-[#E6552A] border-white px-4 py-2 rounded-full font-medium cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
  Lets Go
  <div className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
    <FaArrowRight className="text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
  </div>
</button>


        </Link>
    
      </div>
      <p className="relative text-[#ffffffbb]  font-light text-left max-sm:text-sm md:w-[40%] w-full  z-10">
        Explore breathtaking destinations, luxurious escapes, and unforgettable experiences. 
      </p>


    </section>
  );
};

export default HeroSection;
