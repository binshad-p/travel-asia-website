import { socialMediaData } from "@/constatnt";
import { social_media_section_img } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMediaSection = () => {
  return (
    <section className="padding-x flex sm:max-lg:flex-col-reverse max-sm:flex-col-reverse">
      <div className="bg-primary w-1/2 rounded-tl-2xl rounded-bl-2xl px-10 flex flex-col items-start justify-center gap-5  lg:max-2xl:px-7 sm:max-lg:w-full sm:max-lg:rounded-b-2xl sm:max-lg:rounded-tl-none max-sm:rounded-b-2xl max-sm:rounded-tl-none max-sm:w-full max-sm:p-5 sm:max-lg:py-5">
        <p className="text-white text-[2rem] leading-[3rem] font-semibold lg:max-2xl:text-[1.8rem] lg:max-2xl:leading-[2.5rem] sm:max-lg:text-[2rem] max-sm:text-[1.5rem] max-sm:leading-[2rem]" >
        Learn, Connect, and Grow with 2,000+ Students Worldwide
        </p>
        <p className="text-sm text-[#eeececc1]">
        Follow Credenz on Instagram, Facebook, YouTube, and LinkedIn for daily educational updates, insights, and valuable learning resources. Join our global community and keep growing with us!
        </p>
        <div className="flex gap-5 items-center lg:max-2xl:flex-col-reverse max-sm:flex-col-reverse">
          <Link href={'/contact-us'}>
          <button className="rounded-full py-2 px-6 font-medium text-white bg-secondary duration-300 max-sm:text-sm">
            Get Started Now
          </button>
          </Link>
          <div className="flex gap-5">
            {socialMediaData?.map((item, index) => (
              <Link href={item?.url} key={index} target="_blank">
                <div className="hover:scale-125 duration-300"> {item?.icon}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={social_media_section_img}
        alt="Social Media"
        width={650}
        height={580}
        className="object-cover rounded-r-2xl h-[35rem] lg:max-2xl:w-1/2 sm:max-lg:h-[33rem] sm:max-lg:w-full max-sm:w-full sm:max-lg:rounded-t-2xl sm:max-lg:rounded-br-none max-sm:rounded-t-2xl max-sm:rounded-br-none max-sm:h-[18rem]"
      />
    </section>
  );
};

export default SocialMediaSection;
