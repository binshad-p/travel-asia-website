import Link from "next/link";
import React from "react";

import Image from "next/image";
import { plane_down, plane_up } from "@/public";

const CTASection = () => {
  return (
    <section className="padding-y">
      <div className="larger-screen padding-x">
        {/* Allow overflowing so the planes that are positioned partly outside are visible */}
        <div className="relative bg-gradient-to-r z-10 from-[#EE822C] to-[#E6552A] rounded-2xl overflow-visible">
          {/* Plane (top-left) */}
          <div className="absolute top-10 -left-10 z-20 pointer-events-none">
            <Image
              src={plane_down}
              alt="Plane Down"
              width={250}
              height={160}
              className="select-none"
            />
          </div>

          {/* Plane (bottom-right) */}
          <div className="absolute bottom-10 -right-8 z-20 pointer-events-none">
            <Image
              src={plane_up}
              alt="Plane Up"
              width={220}
              height={160}
              className="select-none"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-8 max-sm:py-12 max-sm:px-6">
            <h2 className="text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold text-black mb-8">
              Ready to Embark on
              <br className="max-sm:hidden" />
              Your Next Adventure?
            </h2>
            <Link href={"/contact-us"} className="w-[30%]">
              <button className="bg-white text-[#EE822C] w-full px-10 py-4 rounded-xl font-medium text-base hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Request a call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
