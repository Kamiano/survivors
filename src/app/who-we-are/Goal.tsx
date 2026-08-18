"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartPulse,
  Scale,
  TrendingUp,
  Sparkles,
  Award,
  Globe2
} from "lucide-react";

interface OutcomeItem {
  id: string;
  title: string;
  description?: string;
  icon: React.ElementType;
}

const INTERMEDIATE_OUTCOMES: OutcomeItem[] = [
  {
    id: "environment",
    title: "Conducive Environment",
    description: "Fostering a supportive social, legal, and political landscape for community members.",
    icon: Scale,
  },
  {
    id: "freedom-violence",
    title: "Freedom from Harm",
    description: "Protection against violence, discrimination, and harmful systemic practices.",
    icon: ShieldCheck,
  },
  {
    id: "integrated-health",
    title: "Integrated Healthcare",
    description: "Expanded access to comprehensive, dignity-centered health services.",
    icon: HeartPulse,
  },
  {
    id: "rights-recognition",
    title: "Rights Recognition",
    description: "Strengthening legal recognition, human rights, and bodily autonomy.",
    icon: Award,
  },
  {
    id: "sustainable-livelihoods",
    title: "Diversified Livelihoods",
    description: "Creating economic security and sustainable community opportunities.",
    icon: TrendingUp,
  },
];

const ULTIMATE_OUTCOMES: OutcomeItem[] = [
  {
    id: "disease-control",
    title: "Health Equity & Care",
    description: "Improved management and outcomes for HIV/AIDS, TB, and Malaria.",
    icon: HeartPulse,
  },
  {
    id: "inclusive-rights",
    title: "Inclusive Rights for All",
    description: "Universal justice and rights enforcement across all communities.",
    icon: Globe2,
  },
  {
    id: "key-populations",
    title: "Thriving Communities",
    description: "Measurably improved livelihoods and security for sex workers.",
    icon: Sparkles,
  },
];

export default function GoalAndValuesSection() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="goal-outcomes" className="relative overflow-hidden bg-neutral-50 py-24 md:py-32">
      {/* Background Soft Red Accent Blurs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E63946]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#E63946]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        {/* SECTION HEADER & PRIMARY GOAL STATEMENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="mx-auto max-w-3xl text-center space-y-6 mb-20"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#E63946]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Our Goal & Strategic Direction
            </span>
            <div className="h-px w-8 bg-[#E63946]" />
          </div>

          <h2 className="text-4xl font-light leading-[1.15] text-neutral-900 sm:text-5xl lg:text-6xl">
            Building collective power through{" "}
            <span className="block font-semibold text-[#E63946]">
              leadership & action.
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-neutral-700 md:text-xl">
            To strengthen a feminist, community-led movement that advances the rights, safety, health, dignity, leadership, and social justice of refugee, migrant, and internally displaced sex workers through advocacy, crisis response, leadership development, and community empowerment.
          </p>

          <div className="pt-2">
            <p className="mx-auto max-w-2xl border-l-2 border-[#E63946]/40 pl-4 text-left text-sm md:text-base leading-relaxed text-neutral-600">
              By scaling structural safety and breaking down systemic blocks, we build resilient, protected environments where refugee, migrant, and internally displaced sex workers reclaim voice and collective agency over their lives.
            </p>
          </div>
        </motion.div>

        {/* INTERMEDIATE OUTCOMES GRID */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#E63946]" />
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              Intermediate Outcomes
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {INTERMEDIATE_OUTCOMES.map((outcome) => {
              const IconComponent = outcome.icon;
              return (
                <motion.div
                  key={outcome.id}
                  variants={itemVariants}
                  className="group relative rounded-2xl border border-neutral-200/80 bg-white p-7 transition-all duration-300 hover:border-[#E63946]/30 hover:shadow-lg hover:shadow-[#E63946]/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E63946]/10 text-[#E63946] transition-colors duration-300 group-hover:bg-[#E63946] group-hover:text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                    {outcome.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {outcome.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ULTIMATE OUTCOMES BANNER / CARDS */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-neutral-800" />
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              Ultimate Impact & Vision
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {ULTIMATE_OUTCOMES.map((outcome) => {
              const IconComponent = outcome.icon;
              return (
                <motion.div
                  key={outcome.id}
                  variants={itemVariants}
                  className="relative overflow-hidden rounded-2xl bg-neutral-900 p-8 text-white shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-[#E63946]/20 blur-xl" />
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/10 p-3 text-[#E63946]">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-medium tracking-tight text-white mb-2">
                        {outcome.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-neutral-400">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}