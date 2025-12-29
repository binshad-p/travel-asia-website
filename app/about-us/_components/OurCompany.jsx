import { mission_vission } from "@/constatnt";
import { plane_left, plane_right } from "@/public";
import Image from "next/image";
import React from "react";

const OurCompany = () => {
  return (
    <section className="padding-x padding-y relative flex flex-col gap-20 max-sm:gap-5">
         <Image
              src={plane_left}
              alt="emirates-img"
              width={100}
              height={260}
              className=" absolute left-[0rem] bottom-[20rem] max-sm:bottom-0 max-sm:-left-[17rem]"
            />
         <Image
              src={plane_right}
              alt="emirates-img"
              width={100}
              height={260}
              className=" absolute right-[0rem] top-[15rem]"
            />
      <div className="flex flex-col gap-5 text-center max-sm:gap-2">
        <p className=" text-3xl  text-primary">Our Company</p>
        <h1 className=" text-[3rem] font-semibold leading-[4rem] lg:max-xl:text-[2.8rem] sm:max-lg:text-[2.5rem] max-sm:text-[1.5rem] max-sm:leading-[2.5rem]">
          Shaping The Future Of Travel
        </h1>
      </div>
      {mission_vission?.map((item, index) => (
  <div className="flex flex-col gap-5" key={index}>
    <div
      className={`flex ${
        index % 2 !== 0 ? "flex-row sm:max-lg:flex-col-reverse max-sm:flex-col-reverse" : "flex-row-reverse sm:max-lg:flex-col-reverse max-sm:flex-col-reverse"
      } justify-between px-20 lg:max-2xl:px-0 sm:max-lg:px-0 max-sm:px-0 items-center gap-[10rem] sm:max-lg:gap-10 max-sm:gap-8`}
    >
      <Image
        alt="mission"
        src={item?.image}
        width={360}
        height={200}
        className="w-[600px] sm:max-lg:w-[500px] max-sm:w-[350px] rounded-lg "
      />
      <div className="flex flex-col gap-9 max-sm:gap-3 w-[70%] max-sm:w-full">
        <p className="text-2xl text-[#0E0E0E] font-medium italic max-sm:text-xl">
          {item?.title}
        </p>
        <p className=" text-[#626965]  max-sm:text-sm italic w-[80%] max-sm:w-full sm:max-lg:w-full lg:max-2xl:w-full">"{item?.description}"</p>
      </div>
    </div>
  </div>
))}

    </section>
  );
};

export default OurCompany;
