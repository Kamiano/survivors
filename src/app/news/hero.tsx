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
  bgImage = "/images/news.jpg"
}: PageHeroProps) {
  return (
    <div className="relative w-full h-90 sm:h-96 md:h-110 xl:h-120 overflow-hidden flex items-end pb-8">

      {/* Background Image - FIX 3: Removed scale-105 to stop extreme zooming on large monitors */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* Solid Pink Overlay */}
      {/* Premium Brand Overlay */}
      {/* Lighter Brand Overlay */}
      <div className="absolute inset-0 bg-[#E63946]/40" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 w-3/4 mx-auto px-6 md:px-0 flex flex-col md:flex-row md:items-end md:justify-between gap-6">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          {/* ABOUT US Title Wrapper */}
          <div className="flex flex-col w-fit">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide uppercase leading-tight">
              News
            </h1>

            {/* Shortened underline */}
            <div className="w-22 h-0.5 bg-red-400 mt-1 opacity-90" />
          </div>

          {/* Secondary title */}
          <p className="text-white/90 text-base md:text-lg mt-4 max-w-md">
            {title}
          </p>
        </motion.div>

        {/* BREADCRUMBS - FIX 4: Added self-end and ml-auto to push Home/Breadcrumbs to the far right on mobile */}
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-sm md:text-base self-end ml-auto md:ml-0 md:self-auto"
        >
          {/* Home link */}
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