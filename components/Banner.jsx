import Image from 'next/image'
import React from 'react'

const Banner = ({ data }) => {
  return (
    <div className="relative w-full h-[450px] max-sm:h-[350px]">
      {/* Background Image */}
      <Image
        src={data?.image}
        layout="fill"
        objectFit="cover"
        alt={data?.id || 'Banner Image'}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#13151B99] to-[#13151BCC]"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start  padding-x mt-20 max-sm:gap-3">
        <p className="text-[50px] font-medium text-white max-sm:text-3xl">{data?.title}</p>
        <p className="text-white w-[45%] lg:max-2xl:w-[50%] sm:max-lg:w-[70%] max-sm:w-[90%]">{data?.description}</p>
      </div>
    </div>
  )
}

export default Banner
