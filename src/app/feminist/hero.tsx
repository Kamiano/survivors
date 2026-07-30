"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  currentPage: string;
  bgImage?: string;
}

export default function Hero({
  title,
  currentPage,
  bgImage = "/images/fm1.jpeg"
}: PageHeroProps) {
  return (
    <div className="relative w-full h-90 sm:h-96 md:h-110 xl:h-135 overflow-hidden flex items-end pb-8">

      {/* 
        EMULATED BACKGROUND POSITIONING:
        - Retains `bg-cover` ensuring edge-to-edge frame saturation without whitespace.
        - Anchors focus using `bg-top lg:bg-[center_top_15%]` to keep central visual assets intact on ultrawide monitors.
        - Matches the standardized layout height `xl:h-135`.
      */}
      <div
        className="absolute inset-0 bg-cover bg-top lg:bg-position-[center_top_15%] bg-no-repeat transition-all duration-300"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* Premium Uniform Overlays */}
      <div className="absolute inset-0 bg-[#E63946]/70" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Content Container */}
      <div className="relative z-10 w-3/4 mx-auto px-6 md:px-0 flex flex-col md:flex-row md:items-end md:justify-between gap-6">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          {/* Specific Section Heading */}
          <div className="flex flex-col w-fit">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide uppercase leading-tight">
              Feminist Leadership Development
            </h1>

            {/* Shortened underline */}
            <div className="w-22 h-0.5 bg-red-400 mt-1 opacity-90" />
          </div>

          {/* Secondary title description */}
          <p className="text-white/90 text-base md:text-lg mt-4 max-w-md">
            {title}
          </p>
        </motion.div>

        {/* BREADCRUMBS */}
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-sm md:text-base self-end ml-auto md:ml-0 md:self-auto"
        >
          <Link href="/" className="text-white/80 hover:text-white font-bold transition-colors">
            Home
          </Link>

          <ChevronRight className="w-4 h-4 text-white/60" />

          <span className="text-white font-semibold">
            {currentPage}
          </span>
        </motion.nav>

      </div>
    </div>
  );
}