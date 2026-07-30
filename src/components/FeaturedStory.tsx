"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export default function FeaturedStory() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* SECTION LABEL */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#E63946]" />
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">
              Stories of Response
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
            Presence in Moments of
            <span className="block font-semibold text-[#E63946]">
              Crisis and Solidarity
            </span>
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* VIDEO */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              onClick={() => setOpen(true)}
              className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group border border-neutral-100"
            >
              {/* thumbnail */}
              <img
                src="/images/fire.jpeg"
                alt="Kibera fire response by KNESWO"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* soft documentary overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition" />

              {/* play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition">
                  <Play className="w-6 h-6 text-[#E63946] ml-1" />
                </div>
              </div>

              {/* small label */}
              <div className="absolute bottom-5 left-5">
                <span className="text-xs uppercase tracking-widest text-white/80">
                  Kibera Fire Response
                </span>
              </div>
            </motion.div>
          </div>

          {/* TEXT */}
          <div className="lg:col-span-5 space-y-7">

            <p className="text-neutral-700 leading-relaxed">
              In the aftermath of a devastating fire in Kibera, KNESWO
              members visited affected residents to offer support, listen
              to urgent needs, and stand in solidarity with the community.
            </p>

            <p className="text-sm text-neutral-500 leading-relaxed border-l-2 border-pink-300 pl-5">
              Residents acknowledged KNESWO’s presence on the ground,
              expressing immediate needs for shelter, food, and protection.
              The moment reflected both urgency and mutual recognition.
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              This is not just documentation — it is witnessing. It is
              feminist response work rooted in presence, care, and accountability.
            </p>

            {/* CTA */}
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-3 bg-neutral-900 hover:bg-[#E63946] text-white px-7 py-4 rounded-xl text-xs uppercase tracking-[0.18em] transition"
            >
              Watch Field Story
              <Play className="w-4 h-4" />
            </button>

          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0" onClick={() => setOpen(false)} />

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden"
            >
              {/* close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white z-10"
              >
                <X />
              </button>

              {/* WISTIA */}
              <iframe
                src="https://fast.wistia.net/embed/iframe/uoq1ezjmuw?autoPlay=true&muted=true"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}