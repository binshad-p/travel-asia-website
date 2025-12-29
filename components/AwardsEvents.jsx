import { AwardEventData } from "@/constatnt";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";

const AwardsEvents = ({ data }) => {
  return (
    <section className="padding-x padding-y larger-screen flex flex-col items-center ">
      <div className="bg-gradient-to-b from-[#f3e5cd99] to-[#FEFBF6] p-[3.6rem]  flex flex-col gap-[60px] rounded-xl sm:max-lg:p-8 max-sm:p-[2rem] max-sm:gap-10">
        <h3 className="text-[48px] font-semibold font-Manrope text-[#1D1E25] text-center lg:max-2xl:text-[42px] sm:max-lg:text-[36px] max-sm:text-3xl">
          Media Appearances, Awards & Events
        </h3>

        <div className="grid grid-cols-3 gap-6 sm:max-lg:grid-cols-2 sm:max-lg:gap-10 max-sm:grid-cols-1  max-sm:gap-10">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 max-sm:gap-5 sm:max-lg:gap-5"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${item?.image_1}`}
                alt="image"
                width={500}
                height={280}
                className="rounded-3xl h-[17rem] object-cover"
              />
              <div className="flex justify-start   font-Inter ">
                <p className="text-[#333333] text-xl font-bold lg:max-2xl:text-xl sm:max-lg:text-xl max-sm:text-xl capitalize ">
                  {item?.category === "outreach_events"
                    ? "events"
                    : item?.category}
                </p>
              </div>
              <p className="text-[#1D1E25] font-DmSans font-medium text-xl lg:max-2xl:text-xl sm:max-lg:text-xl max-sm:text-xl">
                {item?.description?.length > 170
                  ? `${item.description.substring(0, 170)}...`
                  : item?.description}
              </p>

              <Link href={`/gallery?type=${item?.category}`}>
                <button className="text-[#7849FF] text-xl sm:max-lg:text-lg flex gap-2 items-center transition-all duration-300 hover:text-[#5f37cc] hover:underline  ">
                  Show more{" "}
                  <MdKeyboardArrowRight
                    className=""
                    color="#7849FF"
                    size={20}
                  />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Link href={`/gallery`}>
        <button className="bg-[#F1EEE4]  rounded-[50px] py-4 px-9 font-Inter text-xl text-[#002112] flex gap-6 items-center justify-center transition-all duration-300 hover:bg-[#D9D6C9] hover:text-[#001810] hover:shadow-md sm:max-lg:text-lg max-sm:text-xl">
          View More{" "}
          <GrLinkNext className="transition-transform duration-300 hover:translate-x-1" />
        </button>
      </Link>
    </section>
  );
};

export default AwardsEvents;
