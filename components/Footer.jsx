import { socialMediaData } from "@/constatnt";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const Pages = [
    { text: "Home", link: "/" },
    { text: "About us", link: "/about-us" },
    { text: "Services", link: "/services" },
    { text: "Gallery", link: "/gallery" },
    { text: "Contact us", link: "/contact-us" },
  ];

  return (
    <div className="padding-x p-16 bg-[#000] text-white ">
      <div className="grid grid-cols-5 gap-[4rem]  xl:max-[1450px]:grid-cols-5 lg:max-2xl:gap-[5rem] lg:max-2xl:grid-cols-2 sm:max-lg:grid-cols-2 sm:max-lg:gap-[4rem] max-sm:grid-cols-2 max-sm:gap-10">
        <div className="flex flex-col gap-8 max-sm:gap-4 col-span-2">
           <Link href={"/"}>
          <Image src={logo} alt="logo" width={150} height={60} className="cursor-pointer" />
          </Link>
          <p className="text-white">
            We craft unforgettable travel experiences with expert planning,
            premium stays, and personalized service.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-8 max-sm:gap-4 ">
          <h4 className=" text-lg font-semibold">Quick Links</h4>
          <div className="flex flex-col gap-5 max-sm:gap-2  ">
            {Pages?.map((item, index) => (
              <Link href={item?.link} key={index}>
                <p className="  min-w-max hover:underline duration-300 text-white">
                  {item?.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 max-sm:gap-4">
          <h4 className=" text-lg font-semibold min-w-max">
            Social Media Links
          </h4>
          <div className="flex flex-col gap-5 max-sm:gap-2 ">
            <div className="flex flex-col gap-5 max-sm:gap-2">
              {socialMediaData?.map((item, index) => (
                <Link href={item?.url} key={index} target="_blank">
                  <div className="hover:underline duration-300 capitalize">
                    {item?.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 max-sm:gap-4 text-white">
          <h4 className=" text-lg font-semibold">Contact Info </h4>
          <div className="flex flex-col gap-5 max-sm:gap-2 ">
            <p className="  min-w-max hover:underline duration-300 text-white">
              +91 9746 511 022
            </p>
            <p className="  min-w-max hover:underline duration-300 text-white">
              +91 9809 963 994{" "}
            </p>
            <p className="  min-w-max hover:underline duration-300 text-white">
              +91 8590 800 701{" "}
            </p>
            <p className="  min-w-max hover:underline duration-300 text-white">
              mail.emiratestravels@gmail.com
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
      <hr className="mt-10 bg-[#dedddd] h-[1.5px]" />
      <p className="text-center pt-5 text-white">
        © Copyright {new Date().getFullYear()} | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
