"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HealthWellnessCampaign() {
  return (
    <section
      className="relative bg-[#FAFAFA] py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(250, 250, 250, 0.7) 0%, rgba(250, 250, 250, 0.95) 100%), url('/images/hands-pattern-bg.svg')`,
        backgroundSize: '800px',
        backgroundPosition: 'center center',
      }}
    >
      {/* Background Silhouette Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('/images/raised-hands-silhouette.png')] bg-no-repeat bg-bottom-right bg-contain" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Image & Priority Focus Text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">


            </div>

            <div className="w-full max-w-xl overflow-hidden shadow-md rounded-sm">
              <img
                src="/images/hosi.jpeg"
                alt="Community health outreach and engagement"
                className="w-full aspect-4/3 object-cover"
              />
            </div>

            <p className="text-neutral-700 leading-relaxed text-base md:text-lg">
              Survivors Organization works to expand comprehensive, integrated health and wellness services tailored for sex workers across the region. Our focus centres on HIV/AIDS awareness and peer education, mobilising HTS services, continuous condom distribution to prevent STI transmission, and establishing support groups for those infected and affected. We also advocate for integrated TB and Malaria screenings, ensuring accessible, dignified, and stigma-free healthcare for all members.
            </p>
          </div>

          {/* Right Side: Donation Campaign Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px] bg-[#E30613] text-white rounded-[2.25rem] shadow-2xl overflow-hidden flex flex-col justify-between min-h-87.5 transform transition-transform hover:-translate-y-1 duration-300">

              {/* Main Card Content */}
              <div className="p-6 md:p-8 grow">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-1">
                  Health Fund
                </h3>
                <p className="text-white/90 font-semibold text-sm mb-8 tracking-wide">
                  Support Our Outreach
                </p>

                {/* Progress Tracker Labels */}
                <div className="flex justify-between items-center text-[10px] uppercase font-bold text-white mb-2 tracking-widest">
                  <span>Goal</span>
                  <span>Raised</span>
                </div>

                {/* Progress Bar Track */}
                <div className="relative w-full h-4 bg-black/20 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-[#FFD000] rounded-full transition-all duration-700 ease-out"
                    style={{ width: "74%" }}
                  />
                </div>

                {/* Percentage Marker */}
                <div className="flex justify-end mt-1.5">
                  <span className="text-[#FFD000] font-black text-base tracking-tight">74%</span>
                </div>
              </div>

              {/* Dynamic Animated Action Button Strip */}
              <button className="group relative w-full bg-black/30 hover:bg-black/80 text-white transition-all duration-300 py-4 text-center font-bold tracking-wider text-sm flex items-center justify-center gap-2 border-t border-white/20 hover:border-transparent overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

                {/* Heart Icon animating on hover */}
                <svg
                  className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-125 group-hover:animate-pulse text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>

                <span className="relative z-10 transition-colors duration-300">
                  Support Health Outreach
                </span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}