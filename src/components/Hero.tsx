'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState(0)
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([false, false])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const slides = [
    {
      image: 'images/pg2.jpeg',
      tagline: 'First of its kind in Kenya',
      title: 'Feminist Justice,',
      titleHighlight: 'Rising',
      description:
        "A grassroots feminist collective led by refugee, migrant, stateless, and internally displaced sex workers building power through solidarity, healing, and justice.",
      accent: 'from-rose-500 to-pink-600',
      badge: 'Collective Power'
    },
    {
      image: 'images/rep.jpeg',
      tagline: 'Feminist Leadership',
      title: 'Survival, Solidarity',
      titleHighlight: 'Liberation',
      description:
        'Challenging violence, stigma, and exclusion through community-led advocacy that advances safety, dignity, and equal rights for displaced sex workers.',
      accent: 'from-red-500 to-pink-600',
      badge: "First of it's kind"
    }
  ]

  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image()
      img.src = slide.image
      img.onload = () => {
        setImageLoaded(prev => {
          const copy = [...prev]
          copy[index] = true
          return copy
        })
      }
    })
  }, [])

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setDirection(1)
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
      }
    }, 6000)
  }, [isPaused, slides.length])

  useEffect(() => {
    startInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startInterval])

  const slideTextVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      }
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">

      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 min-h-screen max-w-7xl mx-auto px-6 lg:px-12 flex items-center pt-28 lg:pt-32">

        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          key={currentSlide}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
              }
            }
          }}
        >

          {/* Badge */}
          <motion.div variants={slideTextVariants} className="inline-flex items-center gap-3 mb-8">

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full">
              <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">
                {slides[currentSlide].badge}
              </span>
            </div>

            {/* Animated line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px w-12 bg-linear-to-r from-white/50 to-transparent origin-left"
            />
          </motion.div>

          {/* Title */}
          <motion.div variants={slideTextVariants} className="space-y-3 mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="block text-white">
                {slides[currentSlide].title}
              </span>
              <span className={`block bg-linear-to-r ${slides[currentSlide].accent} bg-clip-text text-transparent`}>
                {slides[currentSlide].titleHighlight}
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={slideTextVariants} className="flex gap-6 mb-10">
            <div className="w-1 bg-linear-to-b from-rose-500 to-transparent rounded-full" />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg font-light">
              {slides[currentSlide].description}
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}