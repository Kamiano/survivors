"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import FocusAreas from "@/components/FocusAreas";
import Impact from "@/components/Impact";
import FeaturedStory from "@/components/FeaturedStory";
import CommunityVoices from "@/components/CommunityVoices";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Cinematic Loading Preloader */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Main Page Content */}
      <div className="relative min-h-screen flex flex-col bg-white">
        {/* Header / Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="grow">
          {/* Section 1: Cinematic Hero */}
          <Hero />

          {/* Section 2: Who We Are */}
          <WhoWeAre />

          {/* Section 3: Focus Areas */}
          <FocusAreas />

          {/* Section 4: Impact Metrics */}
          <Impact />

          {/* Section 5: Featured Story / Video Preview */}
          <FeaturedStory />

          {/* Section 6: Community Voices Testimonial Slider */}
          <CommunityVoices />

          {/* Section 7: Latest News */}
          <LatestNews />

        
        </main>

        {/* Section 10: Footer */}
        <Footer />
      </div>
    </>
  );
}
