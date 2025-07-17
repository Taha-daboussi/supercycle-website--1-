"use client"

import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full opacity-50">
        <Image src="/sc.gif" alt="Animated Background" fill className="object-cover" priority unoptimized />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6">
        {/* Card container */}
        <div className="bg-[#1D1D1D]/80 backdrop-blur-sm p-6 sm:p-8 shadow-2xl rounded-[40px] sm:rounded-[80px] w-full max-w-[430px] min-h-[450px] flex flex-col justify-center items-center gap-4 sm:gap-6">
          {/* Header (centered) */}
          <div className="flex items-center gap-2 sm:gap-3 -ml-12 sm:-ml-24">
            <Image 
              src="/supercycle-logo.png" 
              alt="Supercycle Logo" 
              width={28} 
              height={28} 
              className="w-7 h-7 sm:w-8 sm:h-8"
            />
            <h1 className="text-3xl sm:text-4xl font-bold -ml-2 sm:-ml-3" style={{ color: "#FFFF8F" }}>
              Supercycle
            </h1>
          </div>

          {/* Wrapper for the left-aligned content block */}
          <div className="w-full text-left pl-8 sm:pl-16 pr-4 sm:pr-8">
            {/* Minting Info */}
            <div className="flex flex-row items-center gap-0">
              {/* This div now wraps two separate h2 elements */}
              <div>
                <h2 className="text-white text-xl sm:text-2xl font-semibold leading-tight whitespace-nowrap">
                  Minting this summer
                </h2>
                <h2 className="text-white text-xl sm:text-2xl font-semibold leading-tight whitespace-nowrap">on Abstract Chain</h2>
              </div>
              <Image
                src="/abstract-logo.png"
                alt="Abstract Chain Logo"
                width={100}
                height={125}
                className="w-20 h-25 sm:w-30 sm:h-37 scale-150 sm:scale-175 -mt-0 -ml-3 sm:-ml-5 -mb-2"
              />
            </div>

            {/* BARS Section */}
            <div className="flex items-center gap-1 mt-2 sm:mt-0">
              <span className="text-white text-lg sm:text-xl font-bold">BARS</span>
              <Image 
                src="/bars.png" 
                alt="BARS Logo" 
                width={32} 
                height={16} 
                className="h-4 sm:h-5 w-auto"
              />
            </div>

            {/* Description */}
            <div className="text-white/90 text-sm sm:text-base mt-2 sm:mt-0">
              <p><b>An NFT collection by Ben & Blacken</b></p>
              <p>
                from{" "}
                <Link
                  href="https://www.delivered.design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white/70 transition-colors"
                >
                  <b>delivered.design</b>
                </Link>
              </p>
            </div>
          </div>

          {/* Follow Button (centered) */}
          <Link
            href="https://x.com/supercycledotso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-bold rounded-full flex items-center gap-2 sm:gap-3 transition-transform hover:scale-105 duration-300 px-6 sm:px-8 py-2.5 sm:py-3 -ml-8 sm:-ml-16 -mb-4 sm:-mb-8 mt-4"
            style={{ backgroundColor: "#FFFF8F" }}
          >
            <Image 
              src="/x-logo.png" 
              alt="X Logo" 
              width={40} 
              height={30} 
              className="w-10 h-7.5 sm:w-12 sm:h-9"
            />
            <div className="text-left">
              <div className="text-xs sm:text-sm font-bold leading-tight">Follow us on X!</div>
              <div className="text-xs font-semibold leading-tight">
                <b>@supercycledotso</b>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
