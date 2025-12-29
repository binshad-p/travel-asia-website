import React from "react";
import {
  about_us_img1,
  about_us_img2,
  about_us_img3,
  about_us_img4,
} from "@/public";
import Image from "next/image";
const WhyEmirates = () => {
  return (
    <section className="padding-x padding-y flex flex-col justify-between items-start bg-white sm:max-lg:flex-col sm:max-lg:gap-10 max-sm:flex-col max-sm:gap-5 mb-[8rem]">
      <div className="flex lg:max-2xl:flex-col max-sm:flex-col gap-4 lg:max-2xl:gap-5 sm:max-lg:flex-col sm:max-lg:gap-4 justify-between  sm:max-lg">
        <div className="flex flex-col gap-2  sm:max-lg">
          {/* <p className="text-[#E83434] text-3xl ">Why Emirates...?</p> */}
          <h2 className=" text-[2.5rem] leading-[4rem] font-semibold  lg:max-2xl:text-[2.8rem] sm:max-lg:w-full sm:max-lg:text-[2.5rem] sm:max-lg:leading-[3rem] max-sm:w-full max-sm:text-[1.5rem] max-sm:leading-[2rem]">
            Your Trusted Partner For <br className="max-sm:hidden" /> Seamless
            Travel Experiences
          </h2>
        </div>

        <div className="flex flex-col gap-2 w-[45%] lg:max-2xl:w-full sm:max-lg:w-full max-sm:w-full">
          <p className="text-[#626965]  max-sm:text-sm">
            Established in 2016 in Thazhekode, Perinthalmanna, Kerala, Emirates
            Tours and Travels began with a vision to provide exceptional travel
            services. In 2022, we expanded with a second branch in Olavkode,
            Palakkad, marking a significant milestone in our growth. We
            specialize in a wide range of travel services, including air
            ticketing, visa assistance, passport appointments, and Umrah visa
            facilitation.
          </p>
          <p className="text-[#626965]  max-sm:text-sm">
          Our focus is on delivering seamless, personalized, and
            hassle- free travel experiences tailored to the unique needs of each
            client. Drawing inspiration from our sister companies, Focus Tourism
            LLC in Dubai, we remain committed to excellence. Whether it’s
            leisure travel or spiritual journeys, Emirates Tours and Travels is
            dedicated to making your travel dreams a reality.
          </p>
        </div>
      </div>
      <div className="padding-y flex relative w-full sm:max-lg:mt-[3rem] lg:max-2xl:mt-[5rem] max-sm:mt-[1rem] mt-[8rem] justify-center items-center">
        <div className="absolute w-[350px] xl:max-[1550px]:w-[330px]  lg:max-2xl:w-[250px] sm:max-lg:w-[180px] max-sm:w-[130px]  top-[20%] left-[6%] max-sm:left-2 overflow-hidden">
          <Image
            src={about_us_img1}
            alt="about_us_img1"
            width={350}
            height={350}
            className="w-full h-full object-cover "
          />
        </div>
        <div className="absolute w-[350px] xl:max-[1550px]:w-[330px] lg:max-2xl:w-[250px] sm:max-lg:w-[180px] max-sm:w-[130px]  -top-[15%] left-[30%] overflow-hidden">
          <Image
            src={about_us_img2}
            alt="about_us_img2"
            width={350}
            height={350}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-[350px] xl:max-[1550px]:w-[330px] lg:max-2xl:w-[250px] sm:max-lg:w-[180px] max-sm:w-[130px]  top-[60%] right-[20%] overflow-hidden">
          <Image
            src={about_us_img3}
            alt="about_us_img3"
            width={350}
            height={350}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-[350px] xl:max-[1550px]:w-[330px] lg:max-2xl:w-[250px] sm:max-lg:w-[180px] max-sm:w-[130px]  -top-[5%] right-0 overflow-hidden">
          <Image
            src={about_us_img4}
            alt="about_us_img4"
            width={350}
            height={350}
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default WhyEmirates;
