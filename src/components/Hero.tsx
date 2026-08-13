'use client'

import React from 'react'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#E30613] flex flex-col justify-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16">

      {/* Left White Strip */}
      <div className="absolute top-0 left-0 bottom-0 w-[5%] sm:w-[6%] lg:w-[6%] bg-white z-0 border-r border-neutral-200/40 flex justify-end">
        {/* Subtle Vertical Red Brand Accent Line */}
        <div className="w-1.5 h-full bg-[#E30613]" />
      </div>

      <div className="relative z-10 w-full max-w-[1750px] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">

          {/* Main Image Container */}
          <div className="lg:col-span-8 xl:col-span-8 pl-5 sm:pl-10 lg:pl-8 lg:-translate-x-8">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:h-[72vh] overflow-hidden shadow-2xl rounded-sm lg:rounded-none">
              <img
                src="/images/two.jpg"
                alt="Survivors Busia Community Action"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Typography Block */}
          <div className="lg:col-span-4 xl:col-span-4 mt-0 lg:mt-0 lg:-ml-20 xl:-ml-28 z-20 px-4 sm:px-6 lg:px-0">
            <h1 className="text-[2.5rem] leading-[0.92] sm:text-6xl sm:leading-[0.92] md:text-7xl md:leading-[0.92] lg:text-6xl lg:leading-[0.95] xl:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-md">

              <span className="block mb-3 sm:mb-3">
                EMPOWERING SEX WORKERS.
              </span>

              <span className="block text-white/95">
                PROMOTING DIGNITY FOR ALL.
              </span>

            </h1>
          </div>

        </div>
      </div>

    </section>
  )
}