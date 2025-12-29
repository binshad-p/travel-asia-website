import React from 'react'
import { about_us } from '@/public'
import Image from 'next/image'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <section className="relative padding-y overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={about_us}
          alt="About Us Background"
          fill
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="larger-screen padding-x relative z-10">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-white">
            <p className="text-lg text-white font-semibold tracking-wider uppercase">About Us</p>
            <h2 className="text-4xl max-lg:text-4xl max-sm:text-3xl font-bold leading-tight">
              Welcome To Travel Asia
            </h2>
            <p className="text-white/90 leading-relaxed">
              At Travel Asia, We Believe In Creating Unforgettable Travel Experiences. Whether 
              You're Looking For Adventure, Relaxation, Or Cultural Exploration, We Provide 
              Tailored Travel Packages To Suit Your Needs. Our Dedicated Team Ensures 
              Seamless Planning, Premium Accommodations, And Top-Notch Services For A 
              Hassle-Free Journey.
            </p>
            <div className="mt-4">
              <Link href="/about-us">
                <button className="bg-gradient-to-r from-[#EE822C] to-[#E6552A] text-white px-10 py-3 rounded-full font-medium hover:shadow-xl transition-shadow duration-300">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="relative">
            <div className="relative h-[450px] max-lg:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={about_us}
                alt="Travel Asia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs