"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, Loader2, CheckCircle2, MessageSquare } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("pending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <footer className="relative w-full bg-[#87CEFA] text-[#260e10] pt-16 overflow-hidden">
      {/* Wave Section Divider Layout */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 select-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 text-neutral-900 fill-current"
        >
          <path
            d="M0,0 
               C50,15 120,5 180,25 
               C240,45 290,12 350,30 
               C420,50 480,8 550,28 
               C620,48 690,15 760,35 
               C830,55 890,20 960,38 
               C1020,54 1100,10 1200,32 
               L1200,0 L0,0 Z"
            className="fill-neutral-50 opacity-100"
          />
          <path
            d="M0,28 
               Q30,18 60,32 T120,25 T180,38 T240,20 T300,42 
               T360,24 T420,48 T480,22 T540,44 T600,28 T660,52 
               T720,26 T780,46 T840,30 T900,56 T960,32 T1020,48 
               T1080,24 T1140,42 T1200,26 
               L1200,0 L0,0 Z"
            className="fill-neutral-50/40"
          />
        </svg>
      </div>

      {/* Decorative Brand Watermarks - changed from white to blue-grey */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] text-blue-grey-200 select-none">
        <div className="absolute top-16 left-20 rotate-12 scale-125">
          <HandIcon />
        </div>
        <div className="absolute top-1/4 right-32 -rotate-45 scale-110">
          <HandIcon />
        </div>
        <div className="absolute bottom-24 left-1/3 rotate-45 scale-150">
          <HandIcon />
        </div>
        <div className="absolute bottom-12 right-1/4 -rotate-12 scale-125">
          <HandIcon />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 pt-12 pb-16">
        {/* CENTERED NEWSLETTER SIGNUP */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#260e10]">
            Get Our Newsletter
          </h2>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full items-center rounded-full border border-[#260e10]/30 bg-transparent p-0.5 focus-within:border-[#260e10]/60 transition-colors"
          >
            <div className="flex items-center pl-5 pr-2 text-[#260e10]/70">
              <Mail size={18} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full bg-transparent py-3.5 text-sm text-[#260e10] placeholder-[#260e10]/60 outline-none italic disabled:opacity-50"
              required
              disabled={status === "pending"}
            />
            <button
              type="submit"
              disabled={status === "pending"}
              className="rounded-r-full rounded-l-none bg-[#260e10] px-8 py-3.5 text-sm font-medium text-white hover:bg-[#c9135f] transition-all whitespace-nowrap active:scale-98 font-sans disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
            >
              {status === "pending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                "Submit Now"
              )}
            </button>
          </form>

          {/* Inline Alert Feedback Trays */}
          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-emerald-300 text-sm font-medium bg-emerald-950/40 border border-emerald-500/30 px-5 py-2.5 rounded-full"
              >
                <CheckCircle2 size={16} />
                <span>Success! You have been added to our newsletter list.</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-rose-200 text-sm font-medium bg-rose-950/40 border border-rose-500/30 px-5 py-2.5 rounded-full"
              >
                {errorMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BOTTOM COLUMN NAVIGATION ARCHITECTURE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-6">
          {/* COLUMN 1: GRAPHIC LOGO AND BRAND LABEL & SOCIALS */}
          <div className="md:col-span-3 flex flex-col items-start space-y-6">
            <img
              src="/images/log.png"
              alt="KNESWO Logo"
              className="max-h-24 w-auto object-contain"
            />
            {/* Social Media Links Layout */}
            <div className="flex items-center gap-4 text-[#260e10]/80">
              <a
                href="https://web.facebook.com/kneswo/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-grey-600 transition-colors"
                title="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/kneswo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-grey-600 transition-colors"
                title="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://x.com/refugee36214"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-grey-600 transition-colors"
                title="X (Twitter)"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://bsky.app/profile/kneswo.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-grey-600 transition-colors flex items-center"
                title="Bluesky"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: TITLE & CONTACT INFO */}
          <div className="md:col-span-3 space-y-5 text-sm">
            <h3 className="font-bold text-lg leading-snug text-[#260e10] tracking-wide">
              KNESWO
            </h3>

            <div className="space-y-3 pt-1 text-[#260e10] font-normal">
              <p>
                <span className="font-bold mr-1">Email:</span>
                <a href="mailto:kneswo@gmail.com" className="hover:underline">
                  kneswo@gmail.com
                </a>
              </p>
              <p>
                <span className="font-bold mr-1">Phone:</span>
                <a href="tel:+254707480048" className="hover:underline">
                  +(254) 707 480 048
                </a>
              </p>
              <p>
                <span className="font-bold mr-1">Address:</span>
                Langata Civil Servant Estate, Nairobi
              </p>
            </div>
          </div>

          {/* COLUMN 3: ABOUT US */}
          <div className="md:col-span-3 space-y-4 md:pl-8">
            <h3 className="font-bold text-lg text-[#260e10] tracking-wide">
              About Us
            </h3>
            <ul className="space-y-3 text-sm text-[#260e10]">
              <li>
                <Link
                  href="/who-we-are"
                  className="group flex items-center gap-2 hover:underline"
                >
                  <ArrowRight size={16} className="text-[#260e10] shrink-0" />
                  <span>Who We Are</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 hover:underline"
                >
                  <ArrowRight size={16} className="text-[#260e10] shrink-0" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="group flex items-center gap-2 hover:underline"
                >
                  <ArrowRight size={16} className="text-[#260e10] shrink-0" />
                  <span>Our Team</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: OUR PRIORITIES */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-bold text-lg text-[#260e10] tracking-wide">
              Our Priorities
            </h3>
            <ul className="space-y-3 text-sm text-[#260e10]">
              <li>
                <Link
                  href="/advocacy"
                  className="group flex items-center gap-2 hover:underline"
                >
                  <ArrowRight size={16} className="text-[#260e10] shrink-0" />
                  <span>Advocacy & Policy Change</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/climate"
                  className="group flex items-center gap-2 hover:underline"
                >
                  <ArrowRight size={16} className="text-[#260e10] shrink-0" />
                  <span>Climate Justice</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/sexual"
                  className="group flex items-center gap-2 hover:underline"
                >
                  <ArrowRight size={16} className="text-[#260e10] shrink-0" />
                  <span>Sexual & Reproductive Justice</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/crisis"
                  className="group flex items-center gap-2 hover:underline"
                >
                  <ArrowRight size={16} className="text-[#260e10] shrink-0" />
                  <span>Crisis Response</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/feminist"
                  className="group flex items-center gap-2 hover:underline"
                >
                  <ArrowRight size={16} className="text-[#260e10] shrink-0" />
                  <span>Feminist Leadership Development</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

{/* Cleaned up structural Hand Vector Asset */ }
function HandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-32 h-32"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.05 4.575a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0V9a4.5 4.5 0 0 1-4.5 4.5h-.18M18 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0v5.25A4.5 4.5 0 0 1 13.5 17.25h-.18m-4.5-3.375a3.375 3.375 0 1 0 6.75 0V9M9 9h6"
      />
    </svg>
  );
}