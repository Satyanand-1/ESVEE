"use client";

import React, { ReactNode } from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";

export interface PageHeaderHeroProps {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string;
  highlightTitle?: string;
  description: string;
  align?: "left" | "center";
}

export function PageHeaderHero({
  badge,
  badgeIcon,
  title,
  highlightTitle,
  description,
  align = "left",
}: PageHeaderHeroProps) {
  const isCentered = align === "center";

  return (
    <section className="relative w-full bg-black text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden select-none">
      {/* SVG Filters for Glass, Glow & Mesh effects */}
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <defs>
          <filter id="page-glass-effect" x="-50%" y="-50%" width="200%" height="200%">
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
          <filter id="page-logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
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

      {/* Vignette overlay gradient to enhance text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`max-w-3xl ${isCentered ? "mx-auto text-center" : "text-left"}`}>
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5 shadow-inner"
            >
              {badgeIcon}
              <span>{badge}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]"
          >
            {title}{" "}
            {highlightTitle && (
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                {highlightTitle}
              </span>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default PageHeaderHero;
