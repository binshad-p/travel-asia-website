import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const ApplyVisa = () => {
  return (
    <section className="relative padding-y bg-[#F5F5F5] overflow-hidden">
      {/* Background Pattern - Travel Icons */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M20,30 L30,20 L40,30 L30,40 Z'/%3E%3Ccircle cx='60' cy='30' r='8'/%3E%3Crect x='15' y='60' width='20' height='25' rx='2'/%3E%3Cpath d='M70,70 Q80,60 90,70 T90,90 L70,90 Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}></div>
      </div>

      {/* Decorative Curved Line with Bird */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curved Path */}
          <path
            d="M 0,200 Q 300,100 600,200 T 1200,200"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Bird/Plane Icon */}
          <g transform="translate(600, 120)">
            <path
              d="M 0,-10 Q 15,-5 20,0 Q 15,5 0,10 Q -5,5 -8,0 Q -5,-5 0,-10 Z M 20,0 L 35,-2 L 20,-4 Z"
              fill="#E6552A"
            />
          </g>

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EE822C" />
              <stop offset="100%" stopColor="#E6552A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="larger-screen padding-x relative z-10">
        <div className="flex flex-col items-center gap-8 text-center max-w-3xl mx-auto">
          {/* Heading */}
          <h2 className="text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold text-black">
            Start Your Visa Request
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-xl">
            Start your application and follow the guided steps to complete your visa request.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 max-sm:flex-col max-sm:w-full mt-4">
            <Link href="/contact-us">
              <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-medium border border-gray-300 hover:shadow-lg transition-all duration-300">
                For UAE Visa Application
                <FaArrowRight className="text-sm" />
              </button>
            </Link>
            
            <Link href="/contact-us">
              <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-medium border border-gray-300 hover:shadow-lg transition-all duration-300">
                For Other Visa Application
                <FaArrowRight className="text-sm" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApplyVisa