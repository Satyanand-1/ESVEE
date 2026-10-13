'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/content/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* SVG Filters for Gooey & Glow Effects */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id="nav-gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="nav-logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="nav-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo with Animated Path and Glowing Shader Treatment */}
          <Link href="/" className="flex items-center gap-3 group outline-none" onClick={closeMobileMenu}>
            <motion.div
              className="flex items-center cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <motion.svg
                fill="currentColor"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-8 h-8 md:w-9 md:h-9 text-white group-hover:drop-shadow-lg transition-all duration-300"
                style={{
                  filter: 'url(#nav-logo-glow)',
                }}
                whileHover={{
                  fill: 'url(#nav-logo-gradient)',
                  rotate: [0, -2, 2, 0],
                  transition: {
                    fill: { duration: 0.3 },
                    rotate: { duration: 0.6, ease: 'easeInOut' },
                  },
                }}
              >
                {/* Stylized Modern "E" Logo glyph */}
                <motion.path
                  d="M20 20h60v12H34v16h40v12H34v16h46v12H20V20z"
                  initial={{ pathLength: 1 }}
                  whileHover={{
                    pathLength: [1, 0, 1],
                    transition: { duration: 1.2, ease: 'easeInOut' },
                  }}
                />
              </motion.svg>
            </motion.div>

            <span className="font-bold text-xl md:text-2xl text-white tracking-tight">
              Esvee<span className="text-cyan-400">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links (Pill Glass Nav) */}
          <nav className="hidden md:flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-inner">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-light px-3.5 py-1.5 rounded-full transition-all duration-200 outline-none ${
                    isActive
                      ? 'bg-white/15 text-white font-medium shadow-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Gooey Interactive Button Group */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              id="gooey-btn"
              className="relative flex items-center group cursor-pointer"
              style={{ filter: 'url(#nav-gooey-filter)' }}
            >
              <button
                type="button"
                className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-28 z-0"
                aria-hidden="true"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
              <button
                type="button"
                className="px-5 py-2 rounded-full bg-white text-black font-medium text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
              >
                Discuss Your Need
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden fixed inset-0 top-[64px] bg-black/95 backdrop-blur-2xl z-40 transition-transform duration-300 ease-in-out border-t border-white/10 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto p-6 space-y-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-lg font-light py-2.5 px-4 rounded-xl transition-colors ${
                    isActive ? 'bg-white/10 text-cyan-400 font-medium' : 'text-white/80 hover:bg-white/5'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-6 border-t border-white/10">
              <Link
                href="/contact"
                className="block w-full text-center py-3 rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 text-white font-medium text-sm shadow-lg"
                onClick={closeMobileMenu}
              >
                Discuss Your Need
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
