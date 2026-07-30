"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Phelister Abdalla",
    role: "Woman human rights defender",
    quote:
      "Joining KNESWO gave me the tools to stand up for my peers. We are no longer victims; we are advocates defending our rights and negotiating our safety.",
    image:'/images/Abdalla.jpeg',
  },
  {
    id: 2,
    name: "Shyleen Momanyi",
    role: "feminist activist, Nairobi",
    quote:
      "Decentralizing feminist leadership training has empowered young women to take charge. KNESWO is cultivating a generation of unapologetic activists.",
    image:"/images/Shyleen.jpeg",
  },
];

export default function CommunityVoices() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[current];

  return (
    <section className="py-28 md:py-36 bg-white relative overflow-hidden">

      {/* soft background accents */}
      <div className="absolute top-1/2 left-0 w-125 h-125 bg-[#E63946]/5 blur-[120px] -translate-y-1/2" />
      <div className="absolute top-10 right-10 text-[#E63946]/5">
        <Quote className="w-72 h-72 rotate-180" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#E63946]" />
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">
              Stories
            </span>
            <span className="w-10 h-px bg-[#E63946]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-neutral-900">
            Community
            <span className="block font-semibold text-[#E63946]">
              Voices
            </span>
          </h2>
        </div>

        {/* MAIN LAYOUT (editorial, not slider box) */}
        <div className="grid md:grid-cols-12 gap-16 items-center">

          {/* IMAGE SIDE */}
          <div className="md:col-span-5 relative">
            <motion.img
              key={active.image}
              src={active.image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-105 object-cover rounded-2xl"
            />

            <div className="absolute -bottom-5 left-5 bg-white px-4 py-2 border-l-2 border-[#E63946] text-xs text-neutral-600">
              {active.role}
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="md:col-span-7 space-y-8">

            <Quote className="w-10 h-10 text-[#E63946]/30" />

            <AnimatePresence mode="wait">
              <motion.p
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-lg md:text-2xl font-light leading-relaxed text-neutral-800 italic"
              >
                “{active.quote}”
              </motion.p>
            </AnimatePresence>

            <div>
              <h4 className="text-lg font-semibold text-neutral-900">
                {active.name}
              </h4>
              <p className="text-xs tracking-widest uppercase text-[#E63946]">
                Community Voice
              </p>
            </div>

            {/* controls (minimal, not UI-heavy) */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-neutral-200 hover:border-[#E63946] flex items-center justify-center transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-neutral-200 hover:border-[#E63946] flex items-center justify-center transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
