"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function Vision() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
  <section
    id="vision"
    className="relative overflow-hidden bg-white py-24 md:py-32"
  >
    {/* Background soft red/pink blur accents alternating sides */}
    <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#E63946]/5 blur-3xl" />
    <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#E63946]/5 blur-3xl" />

    <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">

        {/* TEXT CONTENT COLUMN */}
        <div className="flex flex-col justify-center lg:col-span-6 lg:order-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-7"
          >
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#E63946]" />
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Our Vision
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-light leading-[1.15] text-neutral-900 sm:text-5xl lg:text-6xl">
              A future where every
              <span className="block font-semibold text-[#E63946]">
                person lives with dignity.
              </span>
            </h2>

            {/* Sub Heading */}
            <p className="text-lg font-medium leading-relaxed text-neutral-800">
              We envision a society where sex workers enjoy equal rights, access
              quality healthcare, live free from stigma and discrimination, and
              participate fully in social and economic life.
            </p>

            {/* Description */}
            <p className="border-l-2 border-pink-300 pl-5 text-base leading-relaxed text-neutral-600">
              Our vision is to build inclusive communities where dignity,
              equality, justice, and opportunity are realities for every sex
              worker. We strive for a future where human rights are respected,
              health services are accessible, and every individual can thrive in
              a safe, supportive, and empowering environment.
            </p>

          </motion.div>
        </div>

        {/* IMAGE COLUMN */}
        <div className="relative w-full lg:col-span-6 flex items-center justify-center lg:order-2">

          {/* Decorative Frame */}
          <div className="absolute -inset-3 -rotate-2 rounded-3xl border border-[#E63946]/10" />

          {/* Main Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="relative z-10 w-full overflow-hidden rounded-3xl bg-neutral-100 shadow-xl aspect-4/3 sm:aspect-video lg:aspect-square"
          >
            <img
              src="/images/vision.JPG"
              alt="Survivors Organization's vision of dignity, equality and inclusion"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-103"
            />
          </motion.div>

          {/* Vision Badge */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-6 left-6 z-20 hidden max-w-xs rounded-2xl border border-neutral-100 bg-white px-6 py-4 shadow-lg sm:block"
          >
            <p className="text-xs font-medium italic leading-relaxed text-neutral-700">
              "A future where dignity, equality, and human rights belong to everyone."
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  </section>
);
}