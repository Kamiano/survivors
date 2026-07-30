"use client";

import { motion } from "framer-motion";

export default function FoundingStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as const,
    },
  };

  return (
    <section
      id="our-story"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-neutral-50/70 py-24 md:py-36"
    >
      {/* 
        HIGHWAY CORRIDOR & SHIELD WATERMARK LAYER
        Subtle translucent route lines, location nodes, and protection shields 
        representing Busia's positioning along the Mombasa-Uganda-Congo transit highway.
      */}
      <div className="pointer-events-none absolute inset-0 select-none text-[#E63946]/5">
        <div className="absolute top-12 left-10 rotate-12 scale-150">
          <RouteNodeIcon />
        </div>
        <div className="absolute top-1/4 right-16 -rotate-12 scale-125">
          <ShieldHeartIcon />
        </div>
        <div className="absolute bottom-20 left-1/4 rotate-45 scale-110">
          <RouteNodeIcon />
        </div>
        <div className="absolute bottom-10 right-1/4 -rotate-45 scale-150">
          <ShieldHeartIcon />
        </div>
        <div className="absolute top-1/2 left-8 -rotate-90 scale-100">
          <ShieldHeartIcon />
        </div>
        <div className="absolute bottom-1/2 right-10 rotate-12 scale-125">
          <RouteNodeIcon />
        </div>
      </div>

      {/* Narrative Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {/* Header Tag */}
          <motion.div variants={textVariants} className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#E63946]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Our Origins
            </span>
            <div className="h-px w-8 bg-[#E63946]" />
          </motion.div>

          <motion.h2
            variants={textVariants}
            className="text-3xl font-light text-neutral-900 sm:text-4xl md:text-5xl"
          >
            Pioneering health, dignity, and protection at the{" "}
            <span className="font-semibold text-[#E63946]">crossroads of Busia.</span>
          </motion.h2>

          {/* Narrative Body */}
          <motion.div variants={textVariants} className="space-y-6 text-base md:text-lg leading-relaxed text-neutral-700 font-light">
            <p>
              Registered in the year 2000, <strong className="font-semibold text-neutral-900">Survivors’ Organization</strong> began as a Self-Help Group (SSG) formed by female sex workers and expanded to include men who have sex with men in Busia town and its environs. Situated along the major Mombasa–Uganda–Congo highway, Busia faced critically high HIV prevalence rates. In response, Survivors partnered with the Universities of Nairobi and Manitoba under the Implementary AIDS Control Team (IMPACT) to educate sex workers on STI/HIV prevention and reproductive health.
            </p>

            <p>
              When research revealed widespread lack of information on HIV transmission in the border town, the organization led peer education initiatives across key populations. Over the years, this evolved into robust community advocacy: expanding HTS services, managing continuous condom distribution, offering support groups for those living with or affected by HIV/AIDS, and integrating screening and referrals for TB and Malaria.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

{/* SVG 1: Route Node Watermark (symbolizes transit highway connection) */}
function RouteNodeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-28 w-28"
    >
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}

{/* SVG 2: Shield Heart Watermark (symbolizes protection and care) */}
function ShieldHeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-28 w-28"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M12 9.5c-1.2-1.2-3.1-1.2-4.3 0s-1.2 3.1 0 4.3l4.3 4.2 4.3-4.2c1.2-1.2 1.2-3.1 0-4.3s-3.1-1.2-4.3 0z" />
    </svg>
  );
}