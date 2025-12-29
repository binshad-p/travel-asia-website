import { featureData } from "@/constatnt";
import Image from "next/image";
import React from "react";
import { FaPlane } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className="relative padding-x padding-y bg-gradient-to-br from-[#EE822C] to-[#E6552A] overflow-hidden">
    

      <div className="larger-screen relative z-10">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-black text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold mb-4">
            Our Key features
          </h2>
          <p className="text-black/90 text-base max-sm:text-sm">
            Planning your perfect getaway has never been easier! Follow these three simple steps to book your next adventure with Travel Asia.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
          {featureData?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 max-sm:p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#FFF0E6] flex items-center justify-center">
                <Image
                  src={item?.icon}
                  alt={item?.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-black text-xl font-semibold">
                {item?.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
