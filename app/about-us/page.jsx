"use client";

import React from 'react'
import WhyEmirates from './_components/WhyEmirates'
import Counter from './_components/Counter'
import OurCompany from './_components/OurCompany'
import FeatureSection from '../_components/FeatureSection'
import Logos06Page from '@/components/logos-06/logos-06';
import OurPackages from '../_components/OurPackages';
import Banner from '@/components/Banner';
import { about_banner } from '@/public';

const data = { 
  title: 'About Us',
  description: 'At Emirates Travels, we create personalized travel experiences that are smooth, safe, and unforgettable. From planning to takeoff, we’re with you every step of the way.',
  image:about_banner
}

const page = () => {
  return (
    <div>
        <Banner data={data}/>
        <WhyEmirates/>
        <Counter/>
        <OurCompany/>
        <FeatureSection/>
        <Logos06Page color={'fff'}/>
        <OurPackages/> 
      


    </div>
  )
}

export default page