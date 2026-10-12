"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Sparkles, Zap, Shield, Cpu, Database, Globe2 } from "lucide-react"

export default function ShaderHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={containerRef} className="min-h-screen bg-black relative overflow-hidden flex flex-col justify-between pt-24 pb-12">
      {/* SVG Filters for Glassmorphism, Gooey, and Glow effects */}
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#06b6d4" />
            <stop offset="70%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Primary animated mesh gradient shader background */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#06b6d4", "#0891b2", "#164e63", "#f97316"]}
        speed={0.3}
        distortion={0.6}
        swirl={0.4}
      />
      
      {/* Secondary glowing overlay mesh gradient */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen"
        colors={["#000000", "#ffffff", "#06b6d4", "#f97316"]}
        speed={0.2}
        distortion={0.8}
        grainOverlay={0.15}
      />

      {/* Dark vignette gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 pointer-events-none z-10" />

      {/* Main Content Area */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col justify-end min-h-[75vh]">
        <div className="max-w-3xl text-left">
          
          {/* Badge Pill with Glass Effect */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative border border-white/10"
            style={{
              filter: "url(#glass-effect)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent rounded-full" />
            <span className="text-white/90 text-sm font-medium relative z-10 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Enterprise IT Consulting &amp; SAP Solutions
            </span>
          </motion.div>

          {/* Headline with Animated Shader Gradient Text */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block font-light text-white/90 text-4xl sm:text-5xl md:text-6xl mb-2 tracking-wider"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #06b6d4 30%, #f97316 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "url(#text-glow)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Technology That Moves
            </motion.span>
            <span className="block font-black text-white drop-shadow-2xl">
              Your Business
            </span>
            <span className="block font-light text-white/90 italic tracking-wide">
              Forward.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-base sm:text-lg md:text-xl font-light text-white/80 mb-8 leading-relaxed max-w-2xl drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            From enterprise applications and SAP S/4HANA solutions to modern web development, staffing, and technology consulting — we help organizations turn complex challenges into practical technology outcomes.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            className="flex items-center gap-4 sm:gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-400 hover:to-orange-400 text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 cursor-pointer flex items-center gap-2 group"
            >
              <Zap className="w-4 h-4 fill-current text-white" />
              Discuss a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-full bg-transparent border-2 border-white/30 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-100 cursor-pointer backdrop-blur-sm"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Pulsing Border Badge */}
      <div className="absolute bottom-8 right-8 z-30 hidden md:block">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <PulsingBorder
            colors={["#06b6d4", "#0891b2", "#f97316", "#00FF88", "#FFD700", "#FF6B35", "#ffffff"]}
            colorBack="#00000000"
            speed={1.5}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={5}
            spots={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={4}
            scale={0.65}
            rotation={0}
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
            }}
          />

          {/* Rotating Text Around the Pulsing Border */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-[10px] fill-white/80 font-medium tracking-widest uppercase">
              <textPath href="#circle" startOffset="0%">
                • ESVEE TECHNOLOGIES • ENTERPRISE CONSULTING • GLOBAL DELIVERY •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </section>
  )
}
