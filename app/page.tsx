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
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {/* Card container */}
        <div className="bg-[#1D1D1D]/80 backdrop-blur-xl p-8 shadow-2xl rounded-[48px] w-[400px] flex flex-col justify-center items-center gap-6">
          {/* Header (centered) */}
          <div className="flex items-center gap-3">
            <Image src="/supercycle-logo.png" alt="Supercycle Logo" width={32} height={32} />
            <h1 className="text-4xl font-bold" style={{ color: "#FFFF8F" }}>
              Supercycle
            </h1>
          </div>

          {/* Wrapper for the left-aligned content block */}
          <div className="w-full space-y-4 text-left pl-16" style={{marginRight: "28px" }}>
            {/* Minting Info */}
            {/* Minting Info */}
            <div className="flex flex-row items-center gap-0">
              {/* This div now wraps two separate h2 elements */}
              <div>
                <h2 className="text-white text-xl font-semibold leading-tight whitespace-nowrap">
                  Minting this summer
                </h2>
                <h2 className="text-white text-xl font-semibold leading-tight whitespace-nowrap">on Abstract Chain</h2>
              </div>
              <Image
                src="/abstract-logo.png"
                alt="Abstract Chain Logo"
                width={100}
                height={100}
                className="scale-175"
              />
            </div>

            {/* BARS Section */}
            <div className="flex items-center gap-2">
              <span className="text-white text-xl font-bold">BARS</span>
              <Image src="/bars.png" alt="BARS Logo" width={40} height={20} className="h-5" />
            </div>

            {/* Description */}
            <div className="text-white/90 text-base">
              <p>An NFT collection by Ben & Blacken</p>
              <p>
                from{" "}
                <Link
                  href="https://www.delivered.design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white/70 transition-colors"
                >
                  delivered.design
                </Link>
              </p>
            </div>
          </div>

          {/* Follow Button (centered) */}
          <Link
            href="https://x.com/supercycledotso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-bold rounded-full flex items-center gap-3 transition-transform hover:scale-105 duration-300 px-8 py-3"
            style={{ backgroundColor: "#FFFF8F" }}
          >
            <Image src="/x-logo.png" alt="X Logo" width={24} height={24} />
            <div className="text-left">
              <div className="text-sm font-bold leading-tight">Follow us on X!</div>
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
