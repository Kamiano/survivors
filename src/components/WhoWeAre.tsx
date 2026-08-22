"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function WhoWeAre() {
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

  const collageImageVariants = (delay: number) => ({
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  });

  const [isTapped, setIsTapped] = useState(false);
  const handleTap = () => {
    setIsTapped(true);
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background accents */}
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#E63946]/5 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#E63946]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-center gap-16 lg:gap-24">

          {/* TEXT CONTENT - HEADER BLOCK */}
          <div className="w-full lg:col-span-6 flex flex-col justify-center lg:order-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-7"
            >
              {/* Label */}
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-[#E63946]" />
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Who We Are
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-light leading-[1.15] text-neutral-900 sm:text-5xl lg:text-6xl">
                Standing with those
                <span className="block font-semibold text-[#E63946]">
                  seeking safety & justice.
                </span>
              </h2>

              {/* Declaration */}
              <p className="text-lg leading-relaxed text-neutral-800">
                Survivors Busia is a grassroots, sex worker-led organization operating
                at the Kenya–Uganda border to defend human rights, heal trauma, and restore dignity.
              </p>

              {/* Supporting Text */}
              <p className="border-l-2 border-pink-300 pl-5 text-base leading-relaxed text-neutral-600">
                We address gender-based violence, cross-border insecurity, economic marginalization,
                and legal barriers by offering holistic support, legal advocacy, safe havens, and community-driven empowerment.
              </p>
            </motion.div>
          </div>

          {/* IMAGE COLLAGE */}
          <div className="relative h-125 w-full lg:col-span-6 md:h-150 my-8 lg:my-0 lg:order-1">
            {/* Main Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={collageImageVariants(0)}
              className="absolute left-10 top-12 z-10 h-[72%] w-[72%] overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src="/images/t.jpeg"
                alt="Survivors Busia community members in solidarity"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Top Left Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={collageImageVariants(0.2)}
              className="absolute left-0 top-0 z-20 h-[38%] w-[42%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl"
            >
              <img
                src="/images/j.jpeg"
                alt="Community workshop in Busia"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={collageImageVariants(0.4)}
              className="absolute bottom-6 right-0 z-20 h-[48%] w-[48%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl"
            >
              <img
                src="/images/k.jpeg"
                alt="Advocacy and support sessions"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Established Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-0 left-12 z-30 rounded-2xl bg-white px-6 py-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-semibold text-[#E63946]">
                  Busia
                </div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500">
                  Grassroots Led
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-[30%] right-[35%] h-20 w-20 rounded-full bg-[#E63946]/10 blur-2xl" />
            <div className="absolute left-[28%] top-[42%] h-10 w-10 rotate-12 rounded-xl border border-[#E63946]/20" />
          </div>

          {/* CTA ACTION BLOCK */}
          <div className="w-full lg:col-span-12 flex justify-center pt-4 lg:order-3">
            <Link href="/who-we-are">
              <motion.a
                onTapStart={handleTap}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex overflow-hidden rounded-xl bg-neutral-900 px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:shadow-lg w-auto text-center cursor-pointer select-none"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Compass
                    size={16}
                    className={`transition-transform duration-300 group-hover:rotate-45 ${isTapped ? "rotate-45" : ""
                      }`}
                  />
                  <span>About Us</span>
                </span>

                <div
                  className={`absolute inset-0 bg-[#E63946] transition-transform duration-300 group-hover:translate-y-0 ${isTapped ? "translate-y-0" : "translate-y-full"
                    }`}
                />
              </motion.a>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
