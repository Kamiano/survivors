"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const focusAreas = [
  {
    title: "Expand Health and Wellness Response",
    image: "/images/health.jpeg",
    href: "/health",
  },
  {
    title: "Promote and Protect the Rights of Key Population",
    image: "/images/kp.jpeg",
    href: "/feminist",
  },
  {
    title: "Expand Livelihoods Options for Key Population",
    image: "/images/feed.jpg",
    href: "/crisis",
  },
  {
    title: "Organizational Strengthening and Sustainability",
    image: "/images/group.jpg",
    href: "/climate",
  },
];

export default function FocusAreas() {
  return (
    <section
      id="focus-areas"
      className="bg-[#FAFAFA] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#E63946]" />
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">
              Strategic Priorities
            </span>
            <div className="h-px w-10 bg-[#E63946]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-neutral-900">
            Focus Areas
          </h2>

          <div className="mt-6 h-0.5 w-24 bg-[#E63946]" />
        </div>

        {/* Gallery */}
        {/* Adjusted to grid-cols-4 since your reference image shows 4 columns, but adapts dynamically */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Link
                href={area.href}
                className="group block text-center"
              >
                {/* 1. Added aspect-[4/3] to enforce landscape scaling */}
                {/* 2. Changed rounded-2xl to rounded-none to match the sharp edges in the image (optional) */}
                <div className="overflow-hidden rounded-none aspect-4/3 w-full bg-neutral-200">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* 3. text-center matches the image's layout */}
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-neutral-800 transition-colors group-hover:text-[#E63946] px-2 leading-snug">
                  {area.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
