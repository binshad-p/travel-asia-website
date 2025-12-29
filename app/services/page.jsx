"use client"
import Banner from '@/components/Banner'
import { service_banner } from '@/public'
import React from 'react'
import ListServices from './_components/ListServices'
import OurPackages from '../_components/OurPackages'
import CTASection from '../_components/CTASection'



const page = () => {
  const data={
    title:"Our Services",
    description:"We’re passionate about creating unforgettable travel experiences - offering every service with care, dedication, and a personal touch to make your journey truly extraordinary.",
    image:service_banner,
  }
  return (
    <div>
     <Banner data={data}/>
     <ListServices/>
     <OurPackages/>
     <CTASection/>
    </div>
  )
}

export default page