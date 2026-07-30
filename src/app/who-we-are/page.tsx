// app/about/page.tsx
'use client'
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Hero from "./Hero";
import Mission from "./Mission";
import Vision from "./Vision";
import Goal from "./Goal";
import FoundingStory from "./FoundingStory";
import Partners from "./Partners";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function AboutPage() {
   const [isLoading, setIsLoading] = useState(true);
  return (
     <>
          <Preloader onComplete={() => setIsLoading(false)} />
          <div className="relative min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="grow">
              {/* Section 1: Cinematic Hero */}
              <Hero title={""} currentPage={""} />
    
              {/* Section 2: Who We Are */}
              <Mission />
    
              {/* Section 3: Focus Areas */}
              <Vision />
    
              {/* Section 4: Impact Metrics */}
              <Goal />
    
              {/* Section 5: Featured Story / Video Preview */}
              <FoundingStory />
    
              {/* Section 6: Community Voices Testimonial Slider */}
              <Partners />
    
            
            </main>
  
            <Footer />
          </div>
        </>
  );
}