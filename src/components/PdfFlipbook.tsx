'use client';

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';

// Import react-pdf annotation & text layer styles
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up pdfjs worker from cdnjs
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfFlipbookProps {
    pdfUrl: string;
}

// Forward ref is required by react-pageflip for page wrapping
const FlipPage = React.forwardRef<HTMLDivElement, { pageNumber: number; width?: number; height?: number }>(
    (props, ref) => {
        return (
            <div ref={ref} className="bg-white shadow-md overflow-hidden">
                <Page
                    pageNumber={props.pageNumber}
                    width={props.width || 400}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                />
            </div>
        );
    }
);
FlipPage.displayName = 'FlipPage';

export default function PdfFlipbook({ pdfUrl }: PdfFlipbookProps) {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen py-8 bg-gray-100">
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                    <div className="flex items-center justify-center p-12 font-medium text-gray-600">
                        Loading Strategic Plan...
                    </div>
                }
            >
                {numPages && (
                    <div className="relative shadow-2xl rounded-lg overflow-hidden my-4">
                        {/* @ts-ignore */}
                        <HTMLFlipBook
                            width={450}
                            height={600}
                            size="fixed"
                            minWidth={300}
                            maxWidth={600}
                            minHeight={400}
                            maxHeight={800}
                            maxShadowOpacity={0.5}
                            showCover={true}
                            mobileScrollSupport={true}
                            onFlip={(e: any) => setCurrentPage(e.data)}
                            className="mx-auto"
                        >
                            {Array.from(new Array(numPages), (_, index) => (
                                <FlipPage key={`page_${index + 1}`} pageNumber={index + 1} width={450} />
                            ))}
                        </HTMLFlipBook>
                    </div>
                )}
            </Document>

            {/* Control Bar */}
            {numPages && (
                <div className="mt-4 flex items-center space-x-4 bg-white px-6 py-2 rounded-full shadow-md text-sm text-gray-700">
                    <span>
                        Page {currentPage + 1} of {numPages}
                    </span>
                    <a
                        href={pdfUrl}
                        download
                        className="ml-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                        Download PDF
                    </a>
                </div>
            )}
        </div>
    );
}