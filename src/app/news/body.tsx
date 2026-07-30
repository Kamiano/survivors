"use client";

import { useEffect, useState } from "react";
import { client } from "@/app/lib/sanity";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MessageSquare, ArrowUpRight } from "lucide-react";

interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  mainImage: string;
  categories: string[];
}

export default function NewsBody() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // 1. Fetch live news posts
        const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          "mainImage": mainImage.asset->url,
          excerpt,
          "categories": categories[]->title
        }`;
        const fetchedPosts = await client.fetch(postsQuery);
        setPosts(fetchedPosts);

        // 2. Fetch live distinct categories
        const catQuery = `*[_type == "category"].title`;
        const fetchedCats = await client.fetch(catQuery);
        setCategories(fetchedCats.length > 0 ? fetchedCats : ["General Updates"]);
      } catch (error) {
        console.error("Sanity client fetch failed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const archives = ["June 2026", "January 2024"];

  // Shimmer skeleton UI while the components wait for data to load
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center text-neutral-400">
        <div className="animate-pulse space-y-4">
          <div className="h-64 bg-neutral-100 rounded-2xl w-full"></div>
          <div className="h-6 bg-neutral-100 rounded w-3/4"></div>
          <div className="h-4 bg-neutral-100 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Complete News Listing Feed Column */}
          <div className="lg:col-span-8 space-y-16">
            {posts.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-neutral-200 rounded-2xl">
                <p className="text-neutral-500 font-light">No articles have been published to the feed yet.</p>
              </div>
            ) : (
              posts.map((post) => (
                <motion.article 
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group flex flex-col space-y-6"
                >
                  {/* Article Aspect Ratio Controlled Frame Container */}
                  <div className="relative w-full aspect-video overflow-hidden bg-neutral-100 rounded-2xl border border-neutral-100 shadow-2xs">
                    {post.mainImage ? (
                      <img 
                        src={post.mainImage} 
                        alt={post.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-101"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-neutral-50 text-neutral-400 text-sm font-light">
                        No Featured Image Provided
                      </div>
                    )}
                  </div>

                  {/* Text Content Block */}
                  <div className="space-y-4">
                    <Link href={`/news/${post.slug}`} className="block">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 leading-snug tracking-tight group-hover:text-[#E61F72] transition-colors duration-200">
                        {post.title}
                      </h3>
                    </Link>

                    {/* Metadata Indicators matching design specs */}
                    <div className="flex flex-wrap items-center gap-6 text-xs text-amber-500 font-semibold uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MessageSquare size={14} />
                        <span>0 Comments</span>
                      </div>
                      {post.categories && post.categories.map((cat) => (
                        <span key={cat} className="bg-neutral-100 text-neutral-600 px-2.5 py-0.5 rounded-full lowercase font-normal tracking-normal">
                          #{cat.replace(/\s+/g, '')}
                        </span>
                      ))}
                    </div>

                    <p className="text-neutral-600 font-light text-sm md:text-base leading-relaxed whitespace-pre-line line-clamp-4">
                      {post.excerpt}
                    </p>

                    <div className="pt-2">
                      <Link 
                        href={`/news/${post.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-bold text-neutral-900 hover:text-[#E61F72] transition-colors group/link"
                      >
                        <span>Read More</span>
                        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-amber-500" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </div>

          {/* RIGHT: Sidebar Panels (Static Text Layout Configuration) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            {/* Archives */}
            <div className="rounded-2xl border border-neutral-100 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.015)]">
              <div className="bg-[#E61F72] px-6 py-4 text-white font-bold tracking-wide text-base">
                Archives
              </div>
              <div className="p-6 bg-neutral-50/40 flex flex-col space-y-3.5">
                {archives.map((archive) => (
                  <span 
                    key={archive} 
                    className="text-sm text-neutral-600 font-light"
                  >
                    {archive}
                  </span>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="rounded-2xl border border-neutral-100 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.015)]">
              <div className="bg-[#E61F72] px-6 py-4 text-white font-bold tracking-wide text-base">
                Categories
              </div>
              <div className="p-6 bg-neutral-50/40 flex flex-col space-y-3.5">
                {categories.map((cat) => (
                  <span 
                    key={cat} 
                    className="text-sm text-neutral-600 font-light"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}