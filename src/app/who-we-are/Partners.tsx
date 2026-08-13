"use client";

import { motion } from "framer-motion";

const partners = [
  {
    id: 1,
    name: "Partner One",
    logo: "/images/Uhai.jpg",
    containerClass: "h-24 w-24 mx-4",
    imgClass: "scale-70"
  },
  {
    id: 2,
    name: "Partner Two",
    logo: "/images/ajws.png",
    containerClass: "h-16 w-48",
    imgClass: "scale-100"
  },
  {
    id: 3,
    name: "Partner Three",
    logo: "/images/amref.png",
    containerClass: "h-16 w-52",
    imgClass: "scale-100"
  },
  {
    id: 4,
    name: "Partner Four",
    logo: "/images/womenn.png",
    containerClass: "h-16 w-56",
    imgClass: "scale-70"
  },
  {
    id: 5,
    name: "Partner Five",
    logo: "/images/aids fonds.png",
    containerClass: "h-16 w-56",
    imgClass: "scale-100"
  },
  {
    id: 6,
    name: "Partner six",
    logo: "/images/redcross.png",
    containerClass: "h-16 w-56",
    imgClass: "scale-100"
  },

];

const infinitePartners = [...partners, ...partners, ...partners, ...partners];

export default function Partners() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } as const
    }
  };

  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-neutral-50 py-16 md:py-28"
    >
      {/* Decorative Brand Ambient Glows */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#E63946]/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#E63946]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">

        {/* SECTION TITLE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col items-center text-center mb-12 md:mb-20 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#E63946]" />
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">
              Collaborations
            </span>
            <div className="h-px w-8 bg-[#E63946]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-neutral-900 leading-tight">
            Our <span className="font-semibold text-[#E63946]">Partners</span>
          </h2>
        </motion.div>

        {/* SEAMLESS INFINITE MARQUEE STRIP */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 md:before:w-32 before:bg-linear-to-r before:from-neutral-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 md:after:w-32 after:bg-linear-to-l after:from-neutral-50 after:to-transparent">

          <motion.div
            className="flex w-max items-center gap-12 md:gap-16 py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 28,
              repeat: Infinity,
            }}
          >
            {infinitePartners.map((partner, index) => (
              /* 
                DYNAMIC PARENT CONTAINER:
                Instead of a uniform size box, each logo gets the exact layout space it needs to shine!
              */
              <div
                key={`${partner.id}-${index}`}
                className={`relative flex items-center justify-center select-none group shrink-0 ${partner.containerClass}`}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={`max-h-full max-w-full object-contain filter transition-all duration-300 pointer-events-none origin-center ${partner.imgClass} group-hover:scale-[1.08]`}
                  draggable="false"
                />
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}