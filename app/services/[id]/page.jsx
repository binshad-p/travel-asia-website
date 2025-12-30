"use client";

import React from "react";
import { useParams } from "next/navigation";
import { serviceData } from "@/constatnt";
import Banner from "@/components/Banner";
import { service_contact_img, thumbi } from "@/public";
import Image from "next/image";
import { MdPhoneInTalk } from "react-icons/md";
import FeatureSection from "@/app/_components/FeatureSection";
import OurPackages from "@/app/_components/OurPackages";
import Testimonial04 from "@/components/testimonial-04/testimonial-04";
import Logos06Page from "@/components/logos-06/logos-06";
import CTASection from "@/app/_components/CTASection";

const Page = () => {
  const params = useParams();
  const { id } = params;

  // Convert id to number for comparison
  const currentData = serviceData?.find((item) => item?.id === Number(id));

  return (
    <div className="">
      <Banner data={currentData} />

      <div className="padding-x padding-y flex max-sm:flex-col justify-between gap-[10rem] max-sm:gap-10 sm:max-lg:gap-5">
        {/* Left Section */}
        <div className="flex flex-col gap-10 w-[70%] max-sm:w-full max-sm:gap-5 ">
          <div>
            <p className="text-3xl font-medium text-[#0E0E0E] max-sm:text-2xl">
              {currentData?.title} Service
            </p>
            <p className="font-medium text-[#626965] mt-6 leading-7 max-sm:text-sm">
              {currentData?.description_1}
            </p>
            <p className="font-medium text-[#626965] mt-1 max-sm:mt-2  leading-7 max-sm:text-sm">
              {currentData?.description_2}
            </p>
          </div>

          <div>
            <p className="text-3xl font-medium text-[#0E0E0E] mb-6 max-sm:text-2xl">
              Why Choose Our Service
            </p>
            {currentData?.benefits?.map((item, index) => (
              <div key={index} className="flex gap-5 items-center mt-2">
                <p className="font-medium text-[#626965]  leading-7 flex items-center sm:max-lg:items-start  gap-5 max-sm:text-sm max-sm:items-start max-sm:mt-1">
                  <Image src={thumbi} alt="logo" width={20} height={20} />
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Sticky) */}
        <div className="w-[440px] max-sm:w-full  sticky top-24 h-fit">
          <div className="bg-[#EFF2F5] p-6 rounded-xl ">
            <div className="relative">

              <Image
                src={service_contact_img}
                alt="image"
                width={500}
                height={500}
                className="rounded-lg"
              />
              <div className="bg-primary w-16 h-16 rounded-full absolute -bottom-7 left-[50%] -translate-x-[50%] flex justify-center items-center "><MdPhoneInTalk size={25} color="white"/>
              </div>
            </div>
              <div className="flex flex-col justify-center items-center gap-2 mt-6">

            <p className="text-2xl font-semibold mt-4">Need Help? Call Us</p>
            <p className="text-[#0A0322] font-medium text-lg">
              +91 9995 099 221

            </p>
              </div>
          </div>
        </div>
      </div>
      <FeatureSection/>
      <OurPackages/>
      <Testimonial04/>
      <Logos06Page/>
      <CTASection/>
    </div>
  );
};

export default Page;
