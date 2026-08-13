'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Preloader from '@/components/Preloader';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, MousePointerClick, Maximize2, ZoomIn } from 'lucide-react';
import StrategicPlanHero from './hero';

const PdfFlipbook = dynamic(() => import('@/components/PdfFlipbook'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center min-h-[500px]">
            <p className="text-gray-500 font-medium">Initializing Flipbook...</p>
        </div>
    ),
});

export default function StrategicPlanPage() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {/* 1. PRELOADER */}
            {isLoading && (
                <Preloader onComplete={() => setIsLoading(false)} />
            )}

            {/* 2. MAIN PAGE CONTENT */}
            <div className="flex flex-col min-h-screen bg-slate-50">
                {/* NAVBAR */}
                <Navbar />

                <main className="flex-grow pb-20">
                    {/* HERO SECTION */}
                    <StrategicPlanHero
                        title="Our Strategic Plan"
                        currentPage="Strategic Plan"
                    />

                    <div className="container mx-auto px-4 mt-12 max-w-6xl">

                        {/* DISCRETE FLIPBOOK NAVIGATION GUIDE */}
                        <div className="mb-6 mx-auto max-w-3xl bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-full py-2.5 px-6 shadow-xs flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">

                            <div className="flex items-center gap-2 font-medium text-slate-800">
                                <BookOpen className="w-4 h-4 text-[#0284C7]" />
                                <span>Interactive Viewer:</span>
                            </div>

                            <div className="flex items-center gap-6 text-slate-500">
                                <span className="flex items-center gap-1.5">
                                    <MousePointerClick className="w-3.5 h-3.5 text-slate-400" />
                                    Click corners or drag pages to flip
                                </span>

                                <span className="hidden sm:flex items-center gap-1.5">
                                    <ZoomIn className="w-3.5 h-3.5 text-slate-400" />
                                    Double-click to zoom
                                </span>

                                <span className="hidden md:flex items-center gap-1.5">
                                    <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                                    Use full-screen mode for best view
                                </span>
                            </div>

                        </div>

                        {/* PDF FLIPBOOK CONTAINER */}
                        <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-100">
                            <PdfFlipbook pdfUrl="/docs/strategic-plan.pdf" />
                        </div>

                    </div>
                </main>

                {/* FOOTER */}
                <Footer />
            </div>
        </>
    );
}