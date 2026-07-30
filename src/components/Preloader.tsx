"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Elegant, predictable timing for the liquid fill to complete
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 800); // Syncs with the clean upwards exit swipe
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-9999 bg-[#09090b] flex items-center justify-center select-none"
        >
          <div className="relative w-16 h-16">
            
            {/* Background / Empty Heart Track */}
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full text-neutral-800/60 transition-colors duration-300"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>

            {/* Foreground / Filling Liquid Heart */}
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ 
                duration: 1.8, 
                ease: [0.42, 0, 0.58, 1] // Fluid, organic liquid easing 
              }}
              className="absolute bottom-0 left-0 w-full overflow-hidden origin-bottom select-none pointer-events-none"
            >
              {/* This inner SVG mirrors the exact sizing and alignment to prevent clipping shifts */}
              <svg
                viewBox="0 0 24 24"
                className="absolute bottom-0 left-0 w-16 h-16 text-rose-600"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}