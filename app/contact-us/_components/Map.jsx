"use client";
import React from "react";

const Map = () => {

  return (
    <div className="pt-[5rem] lg:max-2xl:pt-[3rem] sm:max-lg:pt-[3rem] max-sm:pt-[1rem]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125346.58499468547!2d76.14809939726557!3d10.957270500000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d23951a17ca7%3A0xf7e22f2499ef6ad0!2sEmirates%20Tours%20%26%20Travels!5e0!3m2!1sen!2sin!4v1745658159026!5m2!1sen!2sin"
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
