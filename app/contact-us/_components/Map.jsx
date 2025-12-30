"use client";
import React from "react";

const Map = () => {
  return (
    <div className="pt-[5rem] lg:max-2xl:pt-[3rem] sm:max-lg:pt-[3rem] max-sm:pt-[1rem]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119952.75149998658!2d76.223144!3d10.976613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cdf123bc7a4f%3A0x6e30532af5e6c8e8!2sTRAVELASIA247%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1767074011435!5m2!1sen!2sin"
        width="100%"
        height="550"
        className="sm:max-lg:h-[350px] max-sm:h-[350px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
