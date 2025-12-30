import React from "react";
import { service_contact_img, thumbi } from "@/public";
import Image from "next/image";
import { MdPhoneInTalk } from "react-icons/md";

const package_details = ({ data }) => {

  const carry=["Passport and Visa","Travel Insurance",'Clothes for the Weather','Phone Charger and Travel Adapter','Medicines and First Aid','Flight Tickets and Hotel Booking Copies','Cash and International Card']
  return (
    <div className="padding-x padding-y flex max-sm:flex-col max-sm:gap-4  justify-between gap-[10rem] sm:max-lg:gap-7">
      <div className="w-[70%] lg:max-2xl:w-[80%] lg:max-2xl:gap-7 flex flex-col gap-10 max-sm:gap-7 max-sm:w-full">
        {/* // header */}
        <div className="flex flex-col gap-4 ">
          <p className="text-4xl font-medium text-[#0E0E0E] sm:max-lg:text-2xl max-sm:text-2xl ">{data?.title}</p>

          <p className="text-[#626965] mt-8 sm:max-lg:mt-4  max-sm:mt-1">
        {data?.detail_desc}
          </p>
        </div>

        {/* // itinarary */}
        <div>
          <p className="text-4xl font-medium text-[#0E0E0E] sm:max-lg:text-2xl max-sm:text-2xl">Itinerary</p>
          {data?.itinaray?.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 mt-8">
              <div className="">
                <p className="text-[#41549F] text-2xl  font-medium sm:max-lg:text-xl max-sm:text-lg">
                  Day {index + 1} : {item?.day}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {item?.point?.map((point, index) => (
                  <p
                    key={index}
                    className="text-[#626965] flex items-center gap-5 sm:max-lg:items-start sm:max-lg:mt-1 max-sm:text-sm max-sm:items-start max-sm:mt-1"
                  >
                    <Image src={thumbi} alt=" logo" width={20} height={20} />
                    {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <div></div>
        </div>

        {/* // whats include  */}
        <div>
          <p className="text-4xl font-medium text-[#0E0E0E] sm:max-lg:text-2xl max-sm:text-2xl">What’s Included</p>
          <div className="flex flex-col gap-3 mt-8">
            {data?.package_include?.map((point, index) => (
              <p key={index} className="text-[#626965] flex items-center sm:max-lg:items-start sm:max-lg:mt-1 gap-5 max-sm:items-start">
                <Image src={thumbi} alt=" logo" width={20} height={20} />
                {point}
              </p>
            ))}
          </div>
        </div>

        {/* // Packing List  */}
        <div>
          <p className="text-4xl font-medium text-[#0E0E0E] sm:max-lg:text-2xl max-sm:text-2xl">Things to Carry Before You Travel
          </p>
          <div className="flex flex-col gap-3 mt-8">
            {carry?.map((point, index) => (
              <p key={index} className="text-[#626965] flex items-center sm:max-lg:items-start sm:max-lg:mt-1 gap-5 max-sm:items-start">
                <Image src={thumbi} alt=" logo" width={20} height={20} />
                {point}
              </p>
            ))}
          </div>
        </div>

        {/* // images */}
        {/* <div>
          <p className="text-4xl font-medium text-[#0E0E0E] sm:max-lg:text-2xl max-sm:text-2xl">Images</p>
          <div className="grid grid-cols-3 gap-2 mt-8 ">
            {data?.images?.map((item, index) => (
              <div key={index} className="rounded-lg">
                <Image
                  src={item}
                  alt=" logo"
                  width={250}
                  height={250}
                  className="w-[250px] rounded-lg"
                />
              </div>
            ))}
            <div></div>
          </div>
        </div> */}
      </div>

      <div className="w-[440px] sticky top-28 h-fit  max-sm:w-full ">
        <div className="bg-[#EFF2F5] p-6 rounded-xl ">
          <div className="relative">
            <Image
              src={service_contact_img}
              alt="image"
              width={500}
              height={500}
              className="rounded-lg"
            />
            <div className="bg-primary w-16 h-16 rounded-full absolute -bottom-7 left-[50%] -translate-x-[50%] flex justify-center items-center ">
              <MdPhoneInTalk size={25} color="white" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-6">
            <p className="text-2xl font-semibold mt-4">Need Help? Call Us</p>
            <p className="text-[#0A0322] font-medium text-lg">
              +91 9995 099 221

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default package_details;
