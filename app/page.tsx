"use client"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full opacity-50">
        {/* Mobile GIF (portrait) */}
        <Image
          src="/sc-mobile.gif"
          alt="Animated Background"
          fill
          className="object-cover md:hidden"
          priority
          unoptimized
        />
        {/* Desktop GIF (landscape) */}
        <Image
          src="/sc.gif"
          alt="Animated Background"
          fill
          className="object-cover hidden md:block"
          priority
          unoptimized
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-2 sm:p-4">
        {/* Card container - Made responsive but keeping all positioning */}
        <div className="bg-[#1D1D1D]/80 backdrop-blur-sm p-3 sm:p-4 shadow-2xl rounded-[60px] sm:rounded-[80px] w-[320px] sm:w-[380px] md:w-[430px] h-[380px] sm:h-[420px] md:h-[450px] flex flex-col justify-center items-center gap-2">
          {/* Header (centered) - Keeping exact positioning */}
          <div className="flex items-center gap-2 sm:gap-3 -ml-16 sm:-ml-20 md:-ml-24">
            <Image
              src="/supercycle-logo.png"
              alt="Supercycle Logo"
              width={32}
              height={32}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            />
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold -ml-2 sm:-ml-2.5 md:-ml-3"
              style={{ color: "#FFFF8F" }}
            >
              Supercycle
            </h1>
          </div>

          {/* Wrapper for the left-aligned content block - Keeping exact positioning */}
          <div
            className="w-full text-left pl-10 sm:pl-14 md:pl-16"
            style={{ marginRight: "20px" }}
          >
            {/* Minting Info - Keeping exact layout */}
            <div className="flex flex-row items-center gap-0">
              {/* This div now wraps two separate h2 elements */}
              <div>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-tight whitespace-nowrap">
                  Minting this summer
                </h2>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-tight whitespace-nowrap">
                  on Abstract Chain
                </h2>
              </div>
              <Image
                src="/abstract-logo.png"
                alt="Abstract Chain Logo"
                width={120}
                height={150}
                className="scale-125 sm:scale-150 md:scale-175 -mt-0 -ml-3 sm:-ml-4 md:-ml-5 -mb-2"
              />
            </div>

            {/* BARS Section - Keeping exact positioning */}
            <div className="flex items-center gap-1 mt-0">
              <span className="text-white text-lg sm:text-xl font-bold">BARS</span>
              <Image src="/bars.png" alt="BARS Logo" width={40} height={20} className="h-4 sm:h-5 w-auto" />
            </div>

            {/* Description - Keeping exact positioning */}
            <div className="text-white/90 text-sm sm:text-base mt-0">
              <p>
                <b>An NFT collection by Ben & Blacken</b>
              </p>
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

          {/* Follow Button (centered) - Keeping exact positioning */}
          <Link
            href="https://x.com/supercycledotso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-bold rounded-full flex items-center gap-2 sm:gap-3 transition-transform hover:scale-105 duration-300 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 -ml-10 sm:-ml-14 md:-ml-16 -mb-6 sm:-mb-7 md:-mb-8 mt-3 sm:mt-4"
            style={{ backgroundColor: "#FFFF8F" }}
          >
            <Image
              src="/x-logo.png"
              alt="X Logo"
              width={48}
              height={36}
              className="w-8 h-6 sm:w-10 sm:h-7 md:w-12 md:h-9"
            />
            <div className="text-left">
              <div className="text-xs sm:text-sm font-bold leading-tight">
                <b>Follow us on X!</b>
              </div>
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
