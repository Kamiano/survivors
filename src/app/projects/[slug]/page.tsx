"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Share2, Target } from "lucide-react";
import { client } from "@/app/lib/sanity" ;
import { urlFor } from "@/app/lib/sanity" ;
import { PortableText } from "@portabletext/react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const query = `*[_type == "project" && slug.current == $slug][0]`;
      const data = await client.fetch(query, { slug });
      setProject(data);
      setLoading(false);
    };
    fetchProject();
  }, [slug]);

  if (loading) return <div className="h-screen flex items-center justify-center bg-white text-neutral-400">Refining project details...</div>;
  if (!project) return <div className="h-screen flex items-center justify-center bg-white">Project not found.</div>;

  // Custom styling for the Rich Text from Sanity
  const ptComponents = {
    block: {
      h2: ({ children }: any) => <h2 className="text-3xl font-semibold text-neutral-900 mt-12 mb-6">{children}</h2>,
      normal: ({ children }: any) => <p className="text-neutral-600 leading-relaxed text-lg mb-6 font-light">{children}</p>,
    },
    list: {
      bullet: ({ children }: any) => <ul className="space-y-4 mb-8 list-none">{children}</ul>,
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="flex items-start gap-3 text-neutral-600 font-light">
          <span className="h-1.5 w-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: project.color || "#E63946" }} />
          {children}
        </li>
      ),
    },
  };

  return (
    <main className="relative min-h-screen bg-white pb-32">
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-full h-[80vh] bg-neutral-50/50 -z-10" />
      <div className="absolute top-[20vh] right-[10%] w-96 h-96 rounded-full bg-[#E63946]/5 blur-[120px] pointer-events-none" />

      {/* NAV BAR */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Projects</span>
        </button>
        <div className="flex gap-4">
            <button className="h-10 w-10 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 hover:bg-white hover:shadow-md transition-all"><Share2 size={16}/></button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-8" style={{ backgroundColor: project.color || "#E63946" }} />
                <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: project.color || "#E63946" }}>
                  Featured Project
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light text-neutral-900 leading-[1.1]">
                {project.title.split(' ').map((word: string, i: number) => (
                  <span key={i} className={i === project.title.split(' ').length - 1 ? "font-semibold" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="text-xl md:text-2xl text-neutral-500 font-light max-w-lg italic">
                "{project.tagline}"
              </p>
            </div>

            <div className="flex flex-wrap gap-12 pt-4">
                <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Focus Area</p>
                    <p className="text-neutral-900 font-medium">Equity & Advocacy</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Status</p>
                    <p className="text-neutral-900 font-medium">Active Initiative</p>
                </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }} 
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-2xl border-12 border-white"
          >
            <img 
              src={urlFor(project.image).url()} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CONTENT BODY */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 prose prose-neutral max-w-none"
          >
            <div className="mb-12 pb-8 border-b border-neutral-100 flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-[0.4em] text-neutral-400 font-bold">Project Narrative</h3>
                <Target size={18} className="text-neutral-200" />
            </div>
            
            <PortableText value={project.description} components={ptComponents} />
          </motion.div>

          {/* Sidebar / Meta info */}
          <aside className="lg:col-span-4 lg:col-start-9 space-y-12">
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="p-10 rounded-4xl bg-neutral-900 text-white space-y-8 relative overflow-hidden"
            >
              {/* Subtle background glow in sidebar */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px]" style={{ backgroundColor: project.color || "#E63946" }} />
              
              <h4 className="text-lg font-medium">Get Involved</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We believe in the power of collective action. This project is fueled by voices like yours.
              </p>
              <button 
                className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
                style={{ backgroundColor: project.color || "#E63946" }}
              >
                Support Initiative
              </button>
            </motion.div>

            <div className="space-y-6 px-4">
                <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-bold">Core Objectives</h4>
                <ul className="space-y-6">
                    {["Structural Policy Reform", "Community Resource Access", "Safe Advocacy Pathways"].map((obj, i) => (
                        <li key={i} className="flex items-center gap-4 group">
                            <div className="h-8 w-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 group-hover:bg-white group-hover:shadow-md transition-all">
                                <Calendar size={12} />
                            </div>
                            <span className="text-sm text-neutral-600 font-medium">{obj}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}