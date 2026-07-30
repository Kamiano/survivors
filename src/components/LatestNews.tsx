"use client";

import { useEffect, useState } from "react";
import { client } from "@/app/lib/sanity";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export interface Article {
  _id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

export default function LatestNews() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHomepageNews() {
      try {
        // Query reads custom boolean switches, orders newest-first, caps at 3 max items
        const query = `*[_type == "post" && featuredOnHomepage == true] | order(publishedAt desc)[0...3] {
          _id,
          title,
          "slug": slug.current,
          "date": publishedAt,
          excerpt,
          "image": mainImage.asset->url,
          "category": categories[0]->title
        }`;

        const data = await client.fetch(query);
        setArticles(data);
      } catch (error) {
        console.error("Failed fetching homepage updates from Sanity:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchHomepageNews();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } as const,
    },
  };

  return (
    <section id="news" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-4 h-24 bg-primary rounded-r-lg opacity-25" />
      <div className="absolute top-1/2 right-0 w-4 h-24 bg-accent rounded-l-lg opacity-25" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          {/* LEFT SIDE */}
          <div className="max-w-2xl space-y-6">
            {/* Label */}
            <div className="flex items-center space-x-3">
              <span className="w-10 h-px bg-[#E63946]" />
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">
                Voices & Updates
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
              Stories shaping
              <span className="block font-semibold text-[#E63946]">
                our movement
              </span>
            </h2>

            {/* Supporting line */}
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xl border-l-2 border-[#E63946]/40 pl-4">
              Reflections, updates, and community insights from the frontlines of feminist
              organizing across Kenya.
            </p>
          </div>

          {/* RIGHT SIDE CTA */}
          <div className="pt-2">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase text-[#E63946] hover:text-pink-500 transition group"
            >
              <span>Explore all stories</span>
              <span className="w-6 h-px bg-[#E63946] group-hover:w-10 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Dynamic Loading Shimmer or Empty Fallback Check */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-96 bg-neutral-50 border border-neutral-100 rounded-2xl" />
            ))}
          </div>
        ) : articles.length === 0 ? (
          <p className="text-neutral-400 font-light text-sm">No featured items toggled for the homepage display grid yet.</p>
        ) : (
          /* 3-Card Grid loaded directly via Sanity */
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10"
          >
            {articles.map((article) => (
              <motion.article
                key={article._id}
                variants={cardVariants}
                className="group flex flex-col bg-white border border-dark/5 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative aspect-16/10 overflow-hidden bg-lightGray">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-xs text-neutral-400 font-light">
                      No Image Uploaded
                    </div>
                  )}
                  
                  {/* Category Badge overlay */}
                  {article.category && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="font-heading text-[10px] font-black tracking-widest uppercase bg-neutral-900/95 text-white px-3 py-1.5 rounded-full border border-white/10 group-hover:bg-[#E63946] group-hover:border-[#E63946]/20 transition-colors duration-300">
                        {article.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="p-8 flex flex-col grow">
                  {/* Meta details */}
                  <div className="flex items-center space-x-4 mb-4 text-xs font-body text-dark/50">
                    <span>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/news/${article.slug}`}>
                    <h3 className="font-heading font-bold text-xl text-dark mb-4 leading-snug group-hover:text-[#E63946] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="font-body text-sm text-dark/65 font-light leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="mt-auto pt-4 border-t border-dark/5">
                    <Link 
                      href={`/news/${article.slug}`} 
                      className="flex items-center justify-between text-xs font-heading font-bold text-[#E63946] group-hover:text-pink-600 transition-colors duration-300"
                    >
                      <span>Read Article</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
