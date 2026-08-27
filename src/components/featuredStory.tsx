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
                            Featured Media Coverage
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
                        Advocating for Health &
                        <span className="block font-semibold text-[#E63946]">
                            Commodities Access in Busia
                        </span>
                    </h2>
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* VIDEO THUMBNAIL */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            onClick={() => setOpen(true)}
                            className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group border border-neutral-100 shadow-sm"
                        >
                            {/* High-res YouTube thumbnail */}
                            <img
                                src="https://img.youtube.com/vi/qebPSK-JukI/maxresdefault.jpg"
                                alt="Citizen TV Feature on HIV Prevention in Busia County"
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                            />

                            {/* soft documentary overlay */}
                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition" />

                            {/* play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition">
                                    <Play className="w-6 h-6 text-[#E63946] ml-1 fill-current" />
                                </div>
                            </div>

                            {/* small label overlay */}
                            <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                                <span className="text-xs font-medium uppercase tracking-wider text-white">
                                    Citizen TV Kenya • Special Report
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="lg:col-span-5 space-y-7">

                        <p className="text-neutral-700 leading-relaxed font-normal">
                            In a special broadcast by <strong className="font-semibold text-neutral-900">Citizen TV Kenya</strong>,
                            the spotlight is turned on the rising HIV infection rates in Busia County and the critical shortage of health commodities, PrEP, and STI treatment in integrated facilities.
                        </p>

                        <p className="text-sm text-neutral-600 leading-relaxed border-l-2 border-[#E63946] pl-5 italic">
                            &ldquo;Right now we don&apos;t have commodities — we don&apos;t have condoms, we don&apos;t have STI drugs. We are calling on the national government under NASCOP to ensure these essential commodities are available across integrated facilities.&rdquo;
                        </p>

                        <p className="text-sm text-neutral-600 leading-relaxed">
                            Situated along a major cross-border transit corridor, community-led intervention in Busia is vital not only locally, but across the wider region. Our advocacy focuses on ensuring vulnerable populations receive timely screening, care, and continuous health supplies.
                        </p>

                        {/* CTA */}
                        <button
                            onClick={() => setOpen(true)}
                            className="inline-flex items-center gap-3 bg-neutral-900 hover:bg-[#E63946] text-white px-7 py-4 rounded-xl text-xs uppercase tracking-[0.18em] transition shadow-sm"
                        >
                            Watch Citizen TV Report
                            <Play className="w-4 h-4 fill-current" />
                        </button>

                    </div>
                </div>
            </div>

            {/* YOUTUBE MODAL */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop click to close */}
                        <div className="absolute inset-0" onClick={() => setOpen(false)} />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition z-20"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* YouTube Embed */}
                            <iframe
                                src="https://www.youtube-nocookie.com/embed/qebPSK-JukI?autoplay=1&rel=0"
                                title="Citizen TV Feature on HIV Prevention in Busia County"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full border-0"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}