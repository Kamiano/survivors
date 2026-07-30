"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function Mission() {
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
    id="mission"
    className="relative overflow-hidden bg-lightGray py-24 md:py-32"
  >
    {/* Background soft red/pink blur accents */}
    <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E63946]/5 blur-3xl" />
    <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#E63946]/5 blur-3xl" />

    <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">

        {/* TEXT CONTENT */}
        <div className="order-1 flex flex-col justify-center lg:col-span-6 lg:order-2">
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
                Our Mission
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-light leading-[1.15] text-neutral-900 sm:text-5xl lg:text-6xl">
              Empowering communities
              <span className="block font-semibold text-[#E63946]">
                through dignity & rights.
              </span>
            </h2>

            {/* Sub Heading */}
            <p className="text-lg font-medium leading-relaxed text-neutral-800">
              We empower sex workers to make informed decisions about their
              health, human rights, safety, and economic wellbeing through
              advocacy, legal aid, capacity building, and community support.
            </p>

            {/* Description */}
            <p className="border-l-2 border-pink-300 pl-5 text-base leading-relaxed text-neutral-600">
              Through rights-based advocacy, legal assistance, health education,
              leadership development, and economic empowerment initiatives, we
              work alongside communities and partners to reduce stigma, promote
              inclusion, and create an environment where every sex worker can
              live with dignity, exercise their rights, and access opportunities
              for a better future.
            </p>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="relative order-2 flex w-full items-center justify-center lg:col-span-6 lg:order-1">

          {/* Decorative Frame */}
          <div className="absolute -inset-3 rotate-2 rounded-3xl border border-[#E63946]/10" />

          {/* Main Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="relative z-10 aspect-4/3 w-full overflow-hidden rounded-3xl bg-neutral-100 shadow-xl sm:aspect-video lg:aspect-square"
          >
            <img
              src="/images/mission.jpeg"
              alt="Survivors Organization empowering communities through advocacy and human rights"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-103"
            />
          </motion.div>

          {/* Quote Badge */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-6 right-6 z-20 hidden max-w-xs rounded-2xl border border-neutral-100 bg-white px-6 py-4 shadow-lg sm:block"
          >
            <p className="text-xs font-medium italic leading-relaxed text-neutral-700">
              "Empowerment begins with knowledge, justice, and community."
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  </section>
)
}