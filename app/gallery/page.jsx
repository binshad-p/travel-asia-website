import Banner from "@/components/Banner";
import {
  gallary_banner,
  service_img1,
  service_img2,
  service_img3,
  service_img4,
  service_img5,
  service_img6,
  service_img7,
  service_img8,
  service_img9,
  service_img10,
  gallary_img_1,
  gallary_img_2,
  gallary_img_3,
  gallary_img_4,
  gallary_img_5,
} from "@/public";
import Image from "next/image";
import React from "react";

const Page = () => {
  const data = {
    title: "Gallery",
    description:
      "A glimpse into the unforgettable memories and stunning moments from our journeys around the world.",
    image: gallary_banner,
  };

  // First 5 images
  const galleryData1 = [
    gallary_img_3,
    gallary_img_4,
    gallary_img_5,
    gallary_img_1,
    gallary_img_2,
  ];

  // Next 5 images

  return (
    <div>
      <Banner data={data} />
      <div className="padding-x padding-y">
        {/* First 5 images */}
        <div className="mb-6 max-sm:mb-3">
          <div className="grid grid-cols-3 gap-6 sm:max-lg:gap-3 max-sm:gap-2">
            <div className="row-span-1">
              <Image
                src={galleryData1[0]}
                alt="Relaxing beach view"
                width={550}
                height={270}
                className="rounded-xl w-full h-[12.5rem] object-cover sm:max-lg:h-[10rem] max-sm:h-[7rem]"
              />
            </div>
            <div className="row-span-1">
              <Image
                src={galleryData1[1]}
                alt="Luxury resort with mountain view"
                width={550}
                height={270}
                className="rounded-xl w-full h-[12.5rem] object-cover sm:max-lg:h-[10rem] max-sm:h-[7rem]"
              />
            </div>
            <div className="row-span-2">
              <Image
                src={galleryData1[2]}
                alt="Luxury resort with mountain view"
                width={550}
                height={270}
                className="rounded-xl w-full h-[26.5rem] object-cover sm:max-lg:h-[10rem] max-sm:h-[7rem]"
              />
            </div>
            <div className="row-span-2 col-span-2">
              <Image
                src={galleryData1[3]}
                alt="Scenic view of a historical monument"
                width={1100}
                height={580}
                className="rounded-xl w-full h-[26.5rem] object-cover sm:max-lg:h-[18rem] max-sm:h-[12rem]"
              />
            </div>
            <div className="row-span-1 ">
              <Image
                src={galleryData1[4]}
                alt="Relaxing beach view"
                width={550}
                height={270}
                className="rounded-xl w-full h-[12.5rem] object-cover sm:max-lg:h-[17rem] max-sm:h-[12rem] "
              />
            </div>
          </div>
        </div>

        {/* Next 5 images - Col Reverse */}
        {/* <div className="mb-6 max-sm:mb-3">
          <div className="grid grid-cols-3 gap-6 flex-col-reverse sm:max-lg:gap-3 max-sm:gap-2">
            <div className="row-span-1">
              <Image
                src={galleryData2[4]}
                alt="Relaxing beach view"
                width={550}
                height={270}
                className="rounded-xl w-full h-[12.5rem] object-cover sm:max-lg:h-[17rem] max-sm:h-[12rem]"
              />
            </div>
            <div className="row-span-2 col-span-2">
              <Image
                src={galleryData2[3]}
                alt="Scenic view of a historical monument"
                width={1100}
                height={580}
                className="rounded-xl w-full h-[26.5rem] object-cover sm:max-lg:h-[18rem] max-sm:h-[12rem]"
              />
            </div>
            <div className="row-span-2">
              <Image
                src={galleryData2[2]}
                alt="Luxury resort with mountain view"
                width={550}
                height={270}
                className="rounded-xl w-full h-[26.5rem] object-cover sm:max-lg:h-[10rem] max-sm:h-[7rem]"
              />
            </div>
            <div className="row-span-1">
              <Image
                src={galleryData2[1]}
                alt="Luxury resort with mountain view"
                width={550}
                height={270}
                className="rounded-xl w-full h-[12.5rem] object-cover sm:max-lg:h-[10rem] max-sm:h-[7rem]"
              />
            </div>
            <div className="row-span-1">
              <Image
                src={galleryData2[0]}
                alt="Relaxing beach view"
                width={550}
                height={270}
                className="rounded-xl w-full h-[12.5rem] object-cover sm:max-lg:h-[10rem] max-sm:h-[7rem]"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
