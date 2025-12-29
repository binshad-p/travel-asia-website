import { gallary_img_1, gallary_img_2, gallary_img_3, gallary_img_4, gallary_img_5 } from "@/public";
import Image from "next/image";
import React from "react";

function GallerySection() {
  return (
    <div className="padding-y max-sm:hidden">
      <div className="grid grid-cols-6 gap-[10px] max-sm:gap-1">
        <div className="col-span-1 row-span-1">
          <Image
            src={gallary_img_1}
            alt="gallary img"
            width={200}
            height={420}
            className="object-cover rounded-r-2xl w-full h-[25rem] sm:max-lg:h-[18rem]"
          />
        </div>
        <div className="col-span-1 flex flex-col gap-[10px] max-sm:gap-1">
          <div className="bg-primary rounded-2xl w-full h-full flex flex-col justify-center items-center row-span-1">
            <p className="text-[#FEFFFE] text-4xl lg:max-2xl:text-3xl sm:max-lg:text-2xl max-sm:text-sm">2,000+</p>
            <span className="text-[#FEFFFE] text-lg lg:max-2xl:text-base sm:max-lg:text-xs sm:max-lg:text-center max-sm:text-[6px]">Students worldwide</span>
          </div>{" "}
          <Image
            src={gallary_img_2}
            alt="gallary img"
            width={300}
            height={200}
            className="object-cover w-full h-full rounded-2xl row-span-1"
          />
        </div>
        <div className="row-span-2 col-span-2">
        
          <Image
            src={gallary_img_3}
            alt="gallary img"
            width={600}
            height={420}
            className="object-cover  rounded-2xl h-[25rem] sm:max-lg:h-[18rem]"
          />
        </div>
        <div className="col-span-1 flex flex-col gap-[10px] max-sm:gap-1">
        <Image
            src={gallary_img_4}
            alt="gallary img"
            width={300}
            height={200}
            className="object-cover w-full h-full rounded-2xl row-span-1"
          />
          <div className="bg-secondary rounded-2xl w-full h-full flex flex-col justify-center items-center row-span-1">
            <p className="text-[#FEFFFE] text-4xl lg:max-2xl:text-3xl sm:max-lg:text-2xl max-sm:text-base">95%</p>
            <span className="text-[#FEFFFE] text-lg lg:max-2xl:text-base sm:max-lg:text-xs max-sm:text-[6px]">Satisfaction</span>
          </div>{" "}
    
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={gallary_img_5}
            alt="gallary img"
            width={200}
            height={420}
            className="object-cover rounded-l-2xl w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
