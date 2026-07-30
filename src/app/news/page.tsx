'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Hero from "./hero";
import { useState } from "react";
import NewsBody from "./body";

export default function AboutPage() {
   const [isLoading, setIsLoading] = useState(true);
  return (
     <>
          <Preloader onComplete={() => setIsLoading(false)} />
          <div className="relative min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="grow">
              <Hero title={""} currentPage={""} />
              <NewsBody/>
            </main>
            <Footer />
          </div>
        </>
  );
}