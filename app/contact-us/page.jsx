import React from "react";
import ConatctHero from "./_components/ConatctHero";
import Banner from "@/components/Banner";
import { contact_banner } from "@/public";
import Map from "./_components/Map";

const page = () => {
  const data = { 
    title: 'Contact Us',
    description: 'Planning a trip or need help with a booking? Our travel experts are just a call or message away',
    image:contact_banner  
  }
  return (
    <div>
      <Banner data={data}/>
      <ConatctHero/>
      <Map/>
    </div>
  );
};

export default page;
