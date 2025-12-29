import { serviceData } from "@/constatnt";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ListServices = () => {
  return (
    <section className="grid grid-cols-3 padding-x padding-y gap-6 max-sm:grid-cols-1   sm:max-lg:grid-cols-2">
      {serviceData?.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col gap-5 items-center text-center rounded-lg group cursor-pointer overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src={item?.image}
            alt="icon"
            width={24}
            height={24}
            unoptimized
            className="w-full"
          />

          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2c2c2c99] to-[#13151BCC] rounded-lg transition-all duration-500"></div>

          {/* Hover Background Overlay - Comes from top with transition */}
<div className="absolute inset-0 bg-gradient-to-b from-[#E86131] to-[#ED8247] rounded-lg transition-all duration-500 transform -translate-y-full group-hover:translate-y-0"></div>

          {/* Default content - Icon and Title */}
          <div className="absolute w-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center gap-5 transition-opacity duration-300 group-hover:opacity-0 z-10">
            <Image
              src={item?.icon}
              alt="icon"
              width={24}
              height={24}
              unoptimized
              className="w-[70px] lg:max-2xl:w-[50px] ]"
            />
            <p className="text-2xl font-semibold text-white lg:max-2xl:text-xl">
              {item?.title}
            </p>
          </div>

          {/* Hover content - Description and Button */}
          <div className="absolute w-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center gap-5 lg:max-2xl:gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
            <Image
              src={item?.icon}
              alt="icon"
              width={24}
              height={24}
              unoptimized
              className="w-[70px] lg:max-2xl:w-[50px]"
            />
            <p className="text-2xl font-semibold text-white lg:max-2xl:text-xl">
              {item?.title}
            </p>
            <p className="text-white text-sm px-4">{item?.detail_desc}</p>
            <Link href={`/services/${item?.id}`}>
              <button className="flex items-center gap-1 text-white border py-2 px-6 rounded-3xl hover:bg-white hover:text-black hover:duration-300">
                Read More{" "}
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListServices;
