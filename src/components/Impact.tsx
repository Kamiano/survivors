"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { client } from "@/app/lib/sanity" ; 
import { urlFor } from "@/app/lib/sanity" ;   
import { useEffect, useState } from "react";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  tagline: string;
  excerpt: string;
  image: any; 
  color: string;
}

export default function Impact() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"]{
          _id,
          title,
          slug,
          tagline,
          excerpt,
          image,
          color
        }`;
        const data = await client.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects from Sanity:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const pillars = ["Voice", "Power", "Influence", "Diversity", "Choice"];

  if (loading) return <div className="flex h-96 items-center justify-center text-neutral-500">Loading Impact Profiles...</div>;

  return (
    <section id="impact" className="relative bg-lightGray py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-125 w-125 rounded-full bg-[#E63946]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        
        {/* HEADER AREA */}
        <div className="max-w-3xl mb-20 space-y-5 lg:mr-auto lg:text-left">
          <div className="flex items-center gap-3 lg:justify-start">
            <div className="h-px w-10 bg-[#E63946]" />
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">
              What We Run
            </span>
          </div>
          <h2 className="text-4xl font-light leading-[1.15] text-neutral-900 sm:text-5xl lg:text-6xl">
            Our Core <span className="font-semibold text-[#E63946]">Projects.</span>
          </h2>
        </div>

        {/* INTERACTIVE CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => {
            // Points to the specific sub-route page
            const projectLink = project.slug?.current ? `/projects/${project.slug.current}` : "#";

            return (
              <Link href={projectLink} key={project._id || idx} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.2 }}
                  className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white border border-neutral-100 p-6 md:p-8 shadow-xs hover:shadow-xl transition-all duration-500 hover:scale-[1.01]"
                >
                  <div className="space-y-6">
                    <div className="relative w-full aspect-16/10 overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-100">
                      {project.image && (
                        <img
                          src={urlFor(project.image).url()}
                          alt={project.title}
                          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: project.color || "#E63946" }}>
                        {project.tagline}
                      </p>
                      <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                        {project.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-neutral-50 mt-8 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-neutral-900 transition-colors">
                      Explore Project
                    </span>
                    <div className="h-10 w-10 rounded-full bg-neutral-50 flex items-center justify-center transition-all duration-300 text-neutral-900 group-hover:text-white group-hover:bg-neutral-900">
                      <ArrowUpRight size={18} className="transform group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* FOOTER PILLARS */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-neutral-200/60 flex flex-wrap justify-center items-center gap-x-12 gap-y-4"
        >
          {pillars.map((pillar, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E63946]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                {pillar}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}