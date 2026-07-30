"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Calendar, User, ArrowLeft, MessageSquare } from "lucide-react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

interface FullPost {
  _id: string;
  title: string;
  publishedAt: string;
  mainImage: string;
  excerpt: string;
  body: any;
  category: string;
}

export default function SingleNewsPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [post, setPost] = useState<FullPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }

    async function fetchFullArticle() {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          publishedAt,
          "mainImage": mainImage.asset->url,
          excerpt,
          body,
          "category": categories[0]->title
        }`;
        
        const data = await client.fetch(query, { slug });
        setPost(data);
      } catch (error) {
        console.error("Failed downloading article:", error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchFullArticle();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center animate-pulse space-y-8">
        <div className="h-4 bg-neutral-100 rounded w-24 mx-auto"></div>
        <div className="h-12 bg-neutral-100 rounded w-5/6 mx-auto"></div>
        <div className="h-100 bg-neutral-100 rounded-2xl w-full"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900">Statement Not Found</h2>
        <Link href="/news" className="text-[#E63946] text-sm font-bold hover:underline inline-flex items-center gap-1">
          <ArrowLeft size={16} /> Back to news feed
        </Link>
      </div>
    );
  }

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);

  // Stylizers for Sanity's Portable Text system
  const textComponents = {
    block: {
      normal: ({ children }: any) => <p className="text-neutral-700 font-light text-base md:text-lg leading-relaxed mb-6">{children}</p>,
      h2: ({ children }: any) => <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-4 tracking-tight">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mt-8 mb-3 tracking-tight">{children}</h3>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-[#E63946] pl-6 my-8 italic text-neutral-800 bg-neutral-50/50 py-4 pr-4 rounded-r-xl text-lg">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 text-neutral-700 space-y-2 font-light">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 text-neutral-700 space-y-2 font-light">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="text-base md:text-lg">{children}</li>,
      number: ({ children }: any) => <li className="text-base md:text-lg">{children}</li>,
    },
  };

  return (
    <main className="bg-white min-h-screen relative selection:bg-[#E63946]/10 selection:text-[#E63946]">
      
      {/* 1. DESKTOP FLOATING SOCIAL SHARE BAR (Locks to left edge out of content's way) */}
      <aside className="hidden xl:flex flex-col gap-3 fixed top-1/3 left-8 z-50 p-2 bg-white rounded-full shadow-lg border border-neutral-100">
        <a 
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on X"
          className="w-10 h-10 rounded-full bg-neutral-50 hover:bg-black text-neutral-500 hover:text-white flex items-center justify-center transition-all duration-300"
        >
          <FaTwitter size={15} />
        </a>
        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Facebook"
          className="w-10 h-10 rounded-full bg-neutral-50 hover:bg-[#1877F2] text-neutral-500 hover:text-white flex items-center justify-center transition-all duration-300"
        >
          <FaFacebook size={15} />
        </a>
        <a 
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on WhatsApp"
          className="w-10 h-10 rounded-full bg-neutral-50 hover:bg-[#25D366] text-neutral-500 hover:text-white flex items-center justify-center transition-all duration-300"
        >
          <MessageSquare size={15} />
        </a>
        <a 
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
          className="w-10 h-10 rounded-full bg-neutral-50 hover:bg-[#0A66C2] text-neutral-500 hover:text-white flex items-center justify-center transition-all duration-300"
        >
          <FaLinkedin size={15} />
        </a>
      </aside>

      {/* 2. PREMIUM EDITORIAL HEADER BANNER (Fixes empty space issue) */}
      <div className="w-full bg-neutral-50/60 border-b border-neutral-100/80 pt-10 pb-12 mb-12">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Structured Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8">
            <Link 
              href="/news" 
              className="hover:text-[#E63946] transition-colors flex items-center gap-1.5 group"
            >
              <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>News</span>
            </Link>
            <span className="text-neutral-300 font-light">/</span>
            <span className="text-neutral-400/80 truncate max-w-50">Statement</span>
          </nav>

          {/* Header Typography Content */}
          <div className="space-y-5">
            {post.category && (
              <span className="inline-block bg-white text-[#E63946] text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 py-1 rounded-md border border-neutral-200 shadow-2xs">
                {post.category}
              </span>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.2]">
              {post.title}
            </h1>

            {/* Editorial Metadata */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-neutral-500 font-medium pt-2">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#E63946]" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </span>
              </div>
              <span className="text-neutral-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <User size={14} className="text-[#E63946]" />
                <span>KNESWO Feminist Initiative</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. CORE ARTICLE WORKSPACE CONTAINER */}
      <div className="max-w-3xl mx-auto px-6">
        
        {/* ADAPTIVE IMAGE WRAPPER (Protects tall/landscape ratios without cropping) */}
        {post.mainImage && (
          <div className="w-full flex justify-center mb-12">
            <div className="max-w-xl w-full rounded-2xl overflow-hidden bg-neutral-50/50 border border-neutral-100 shadow-sm">
              <img 
                src={post.mainImage} 
                alt={post.title} 
                className="w-full h-auto max-h-[65vh] object-cover object-center" 
              />
            </div>
          </div>
        )}

        {/* MOBILE & TABLET SHARE BAR (Renders right below image on compact viewports) */}
        <div className="xl:hidden flex items-center gap-3 py-4 border-b border-neutral-100 mb-8">
          <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider mr-2">Share:</span>
          <a 
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-500 flex items-center justify-center"
          >
            <FaTwitter size={14} />
          </a>
          <a 
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-500 flex items-center justify-center"
          >
            <FaFacebook size={14} />
          </a>
          <a 
            href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-500 flex items-center justify-center"
          >
            <MessageSquare size={14} />
          </a>
        </div>

        {/* ARTICLE READOUT PANEL */}
        <div className="w-full max-w-none pb-24">
          {/* Excerpt Lead Statement */}
          {post.excerpt && (
            <p className="text-xl md:text-2xl text-neutral-800 font-normal leading-relaxed mb-8 border-l-4 border-[#E63946] pl-5 italic">
              {post.excerpt}
            </p>
          )}

          {/* High-fidelity Portable Text Engine Output */}
          <div className="prose prose-neutral max-w-none">
            <PortableText value={post.body} components={textComponents} />
          </div>
        </div>

      </div>
    </main>
  );
}