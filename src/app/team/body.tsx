"use client";

import { motion } from "framer-motion";

export interface TeamMemberData {
  _id: string;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  category: "secretariat" | "strategy_advisor" | "board";
}

interface TeamBodyProps {
  staffMembers?: TeamMemberData[];
  strategyAdvisors?: TeamMemberData[];
  boardMembers?: TeamMemberData[];
}

export default function TeamBody({
  staffMembers = [],
  strategyAdvisors = [],
  boardMembers = [],
}: TeamBodyProps) {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-1/3 left-0 h-96 w-96 rounded-full bg-[#E63946]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-0 h-96 w-96 rounded-full bg-[#E61F72]/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* SECTION 1: SECRETARIAT */}
        {staffMembers.length > 0 && (
          <>
            <div className="mb-12 md:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
              >
                Secretariat
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12 mb-24">
              {staffMembers.map((member, i) => (
                <TeamMemberCard key={member._id || i} member={member} index={i} />
              ))}
            </div>
          </>
        )}

        {/* SECTION 2: STRATEGY PROGRAM ADVISORS */}
        {strategyAdvisors.length > 0 && (
          <>
            <div className="mb-12 md:mb-16 pt-8 border-t border-neutral-100">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6"
              >
                Strategy Program Advisors
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-4xl space-y-4 text-neutral-600 font-light text-sm md:text-base leading-relaxed"
              >
                <p>
                  The KNESWO Strategy Program Advisors serve as a strategic advisory body that provides high-level guidance, expertise, and support to strengthen the organization’s vision, mission, programs, and institutional growth. The Advisors play a key role in shaping strategic direction, strengthening program quality, supporting innovation, and ensuring that KNESWO remains responsive to the evolving needs, challenges, and priorities of the rights holders and communities we serve.
                </p>
                <p>
                  The Advisors provide technical guidance in areas including strategic planning, program design, advocacy, movement building, partnerships, resource mobilization, organizational development, safeguarding, and sustainability. They support the leadership team through evidence-based recommendations, critical reflection, and knowledge sharing to enhance effective decision-making and accountability.
                </p>
                <p>
                  Through their expertise and networks, KNESWO Strategy Program Advisors contribute to strengthening the organization’s impact, visibility, and long-term sustainability while ensuring that all programs uphold principles of dignity, equality, inclusion, justice, and community-led approaches.
                </p>
                <p className="italic font-normal text-neutral-500">
                  The Advisors do not manage the daily operations of KNESWO but provide independent guidance, mentorship, and strategic support to help the organization achieve its goals and advance the rights and wellbeing of the communities it serves.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12 mb-24">
              {strategyAdvisors.map((member, i) => (
                <TeamMemberCard key={member._id || i} member={member} index={i} />
              ))}
            </div>
          </>
        )}

        {/* SECTION 3: OUR BOARD */}
        {boardMembers.length > 0 && (
          <>
            <div className="mb-12 md:mb-16 pt-8 border-t border-neutral-100">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
              >
                Our Board
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12">
              {boardMembers.map((member, i) => (
                <TeamMemberCard key={member._id || i} member={member} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function TeamMemberCard({ member, index }: { member: TeamMemberData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group flex flex-col space-y-5"
    >
      <div className="relative w-full aspect-4/3 sm:aspect-16/10 overflow-hidden bg-neutral-100 rounded-lg shadow-xs">
        <img
          src={member.imageSrc}
          alt={member.name}
          className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      <div className="space-y-2 grow flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight transition-colors group-hover:text-neutral-800">
          {member.name}
        </h3>
        <h4 className="text-xs md:text-[13px] font-bold text-[#E63946] tracking-wider uppercase leading-tight min-h-4">
          {member.role}
        </h4>
        <p className="pt-2 text-neutral-600 font-light text-sm md:text-base leading-relaxed group-hover:text-neutral-700 transition-colors whitespace-pre-line">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}