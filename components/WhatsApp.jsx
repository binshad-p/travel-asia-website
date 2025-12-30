import React from 'react';
import { BsWhatsapp } from "react-icons/bs";

const Whatsapp = () => {
  const phoneNumber = "919995099221"; // No '+' or spaces for WhatsApp API
  const message = encodeURIComponent(
    "Hi, I'm interested in booking with Travel Asia. Please share more details about your travel packages."
  );
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <div>
      <a
        href={whatsappLink}
        className="fixed w-[60px] h-[60px] bottom-[80px] max-sm:bottom-[60px] right-[40px] bg-[#25d366] rounded-full z-40 text-white flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="absolute w-full h-full animate-ping bg-[#25d366] opacity-75 rounded-full"></div>
        <BsWhatsapp className="relative w-8 h-8 z-10" />
      </a>
    </div>
  );
};

export default Whatsapp;
  