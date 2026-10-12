"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Pause,
  Play
} from "lucide-react";
import { services } from "@/content/services";

export function Services3DCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = services.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic infinite looping
  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToCard = useCallback((index: number) => {
    setActiveIndex((index + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextCard();
    }, 3200); // Transitions smoothly every 3.2 seconds

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextCard]);

  return (
    <section 
      className="relative w-full bg-surface-alt text-ink border-y border-line py-20 md:py-24 select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dots opacity-70" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="eyebrow mb-4">What We Do</span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-body max-w-xl mx-auto leading-relaxed">
            Explore our specialized enterprise solutions and technology capabilities.
          </p>
        </div>

        {/* 3D Perspective Loop Stage */}
        <div 
          className="relative w-full flex items-center justify-center h-[370px] sm:h-[400px] md:h-[430px]"
          style={{ perspective: "1200px" }}
        >
          <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center">
            {services.map((service, index) => {
              // Calculate shortest circular difference so items wrap infinitely
              let diff = index - activeIndex;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const absDiff = Math.abs(diff);
              const isCenter = diff === 0;

              // Only render immediate adjacent cards (-2 to +2) for performance and aesthetics
              if (absDiff > 2) return null;

              const xOffset = diff * 320;
              const rotateY = diff * -24;
              const scale = isCenter ? 1.02 : 0.88;
              const zIndex = 40 - absDiff * 10;
              const opacity = isCenter ? 1 : Math.max(0.72, 0.88 - absDiff * 0.16);

              return (
                <motion.div
                  key={service.id}
                  animate={{
                    x: xOffset,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: "tween",
                    ease: [0.16, 1, 0.3, 1],
                    duration: 0.7,
                  }}
                  onClick={() => goToCard(index)}
                  className={`absolute top-0 bottom-0 my-auto w-[290px] sm:w-[330px] md:w-[380px] h-[330px] sm:h-[360px] md:h-[390px] cursor-pointer rounded-3xl overflow-hidden will-change-transform bg-white transition-[border-color,box-shadow] duration-500 ${
                    isCenter
                      ? "border border-primary/40 shadow-[0_28px_60px_-20px_rgba(11,27,43,0.35)]"
                      : "border border-line hover:border-primary/30 shadow-card"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                  }}
                >
                  {/* Clean 2-Row Split Layout: Image on Top (52%), Content on Bottom (48%) */}
                  <div className="flex flex-col h-full w-full bg-white">
                    {/* Top Section: High-Visibility Unobstructed Service Image */}
                    <div className="relative h-[52%] w-full overflow-hidden bg-surface-alt border-b border-line">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="380px"
                        draggable={false}
                        className="object-cover transition-transform duration-700 ease-out-expo hover:scale-105"
                      />
                    </div>

                    {/* Bottom Section: Clean White Card Body with Sharp Typography */}
                    <div className="h-[48%] p-4 sm:p-5 flex flex-col justify-between bg-white">
                      <div>
                        <h3 className="font-display text-base sm:text-lg md:text-xl font-bold tracking-tight text-ink leading-snug line-clamp-1 mb-1.5">
                          {service.title}
                        </h3>
                        <p className="text-sm text-body line-clamp-2 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>

                      {/* Card Action CTA */}
                      <div className="pt-2">
                        <Link
                          href={`/services#${service.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                            isCenter
                              ? "bg-primary hover:bg-primary-dark text-white shadow-sm"
                              : "bg-surface-alt hover:bg-primary-soft text-ink border border-line"
                          }`}
                        >
                          Explore Service
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Navigation Arrows */}
          <button
            onClick={prevCard}
            aria-label="Previous service"
            className="hidden sm:flex absolute left-2 md:left-6 z-30 w-11 h-11 rounded-full items-center justify-center bg-white hover:bg-primary hover:text-white hover:border-primary border border-line text-ink shadow-card transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextCard}
            aria-label="Next service"
            className="hidden sm:flex absolute right-2 md:right-6 z-30 w-11 h-11 rounded-full items-center justify-center bg-white hover:bg-primary hover:text-white hover:border-primary border border-line text-ink shadow-card transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Pagination Dots, Play/Pause toggle & Link */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-line shadow-card">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => goToCard(i)}
                aria-label={`Go to service ${i + 1}`}
                className={`transition-all duration-500 ease-out-expo rounded-full ${
                  i === activeIndex
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}

            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Play carousel" : "Pause carousel"}
              className="ml-2 text-muted hover:text-primary transition-colors"
            >
              {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
            </button>
          </div>

          <Link
            href="/services"
            className="group mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            View all services
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Services3DCarousel;
