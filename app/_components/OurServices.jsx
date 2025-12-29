"use client";
import React from "react";
import { serviceData } from "@/constatnt";
import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
  return (
    <section className="padding-y">
      <div className="larger-screen padding-x">
        {/* Heading Section */}
        <div className="flex flex-col gap-5 text-center mb-14">
          <p className="text-primary text-3xl">Our Services</p>
          <h2 className="text-black text-[3rem] font-semibold leading-[4rem] lg:max-xl:text-[2.8rem] sm:max-lg:text-[2.5rem] max-sm:text-[1.5rem] max-sm:leading-[2.5rem]">
            Our Signature Services
          </h2>
        </div>

        {/* First 3 Services - Alternating Layout */}
        <div className="flex flex-col gap-20 mb-20">
          {serviceData?.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-2 max-lg:grid-cols-1 gap-10 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div
                className={`flex flex-col gap-6 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div>
                <h3 className="text-4xl max-lg:text-3xl font-semibold text-black">
                  {item.title}
                </h3>
                <div className="flex gap-1 items-center mt-1">

                <div className="h-1 bg-primary w-1/3"></div>
                <div className="h-1 bg-primary w-4 rounded-r-md"></div>
                </div>
                  </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description_1}
                </p>
                
                {/* Insights */}
                {item.insights && (
                  <div className="flex flex-col  gap-3">
                    <p className="text-primary font-semibold uppercase text-sm">
                      Benefits
                    </p>
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
                      {item.benefits.map((insight, idx) => (
                        <div key={idx} className="flex items-start  gap-2">
                          <div className="w-6 h-6 rounded-full  bg-primary flex items-center justify-center flex-shrink-0 ">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-700">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Image */}
              <div
                className={`relative h-[400px] max-lg:h-[300px] rounded-2xl overflow-hidden ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Image
                  src={item.cover_img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Section - 3 Cards in Grid */}
        <div className="mb-14">
          <p className="text-left text-2xl font-semibold mb-4 text-black">
            Also other services
          </p>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
            {serviceData?.slice(3, 6).map((item) => (
              <Link href={`/services/${item.id}`} key={item.id}>
                <div className="group  relative h-[280px] rounded-xl overflow-hidden cursor-pointer">
                  <Image
                    src={item.cover_img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                  <div className="  text-black mt-5">
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-black line-clamp-2">
                      {item.detail_desc}
                    </p>
                  </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <Link href={"/services"}>
            <button className="rounded-full uppercase text-sm py-3 px-8 font-medium text-white bg-primary hover:bg-primary/90 duration-300">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
