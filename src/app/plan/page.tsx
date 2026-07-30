'use client';
import dynamic from 'next/dynamic';

const PdfFlipbook = dynamic(() => import('@/components/PdfFlipbook'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center min-h-[500px]">
            <p className="text-gray-500 font-medium">Initializing Flipbook...</p>
        </div>
    ),
});

export default function StrategicPlanPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Our Strategic Plan</h1>
                <p className="text-gray-600 mt-2">Explore our vision and roadmap for empowering survivors.</p>
            </div>

            <PdfFlipbook pdfUrl="/docs/strategic-plan.pdf" />
        </main>
    );
}