'use client'

import React from 'react'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#E30613] flex flex-col justify-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16">

      {/* Left White Strip (Desktop: 20% Left / Mobile: Top Corner Inset) */}
      <div className="absolute top-0 left-0 bottom-0 w-[24%] sm:w-[20%] bg-white -z-0 border-r border-neutral-200/50 flex justify-end">
        {/* Subtle Vertical Red Brand Accent Line */}
        <div className="w-1.5 h-full bg-[#E30613]" />
      </div>

      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-0">

          {/* Main Image Container */}
          <div className="lg:col-span-7 xl:col-span-7 pl-4 sm:pl-8 lg:pl-12">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:h-[70vh] overflow-hidden shadow-2xl rounded-sm lg:rounded-none">
              <img
                src="images/two.jpg"
                alt="Communities in the Lead"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Typography Block (Stacked under image on Mobile / Overlapping on Desktop) */}
          <div className="lg:col-span-5 xl:col-span-5 mt-2 lg:mt-0 lg:-ml-16 xl:-ml-20 z-20 px-2 sm:px-4 lg:px-0">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black uppercase leading-[1.02] tracking-tight text-white drop-shadow-sm">
              <span className="block">A JUST &</span>
              <span className="block">HEALTHY SOCIETY.</span>
              <span className="block mt-3 sm:mt-5 text-white/95">PROMOTING</span>
              <span className="block">DIGNITY FOR ALL.</span>
            </h1>
          </div>

        </div>
      </div>

    </section>
  )
}