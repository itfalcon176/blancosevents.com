'use client';

import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenReel: () => void;
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReel, onOpenInquiry }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-black">
      {/* High-Resolution Luxury Candlelit Banquet Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-right sm:bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url('/blancosevents-image-home/banner-main.webp')`,
          }}
        />
        {/* Deep Black Left Overlay Gradient for Crystal Clear Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent w-full lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <p className="text-[#C5A059] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
              LUXURY EVENT SERVICES TO
            </p>
          </motion.div>

          {/* Main Headline: BE REMEMBERED. Strictly Single Line */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-normal font-serif tracking-tight leading-[1.05] text-white mb-4 whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif" }}
          >
            BE REMEMBERED.
          </motion.h1>

          {/* Italic Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl font-serif not-italic text-white/95 mb-6 tracking-wide"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            From vision to celebration – every detail perfected.
          </motion.p>

          {/* Body Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-9 max-w-lg"
          >
            Bespoke event planning, design & management for<br className="hidden sm:inline" />
            Weddings, Private Parties, Grand Celebrations,<br className="hidden sm:inline" />
            Hotel & Corporate Events and Social Soirées.
          </motion.p>

          {/* Button Layout - Stacked & Grid matching reference image */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col space-y-3.5 max-w-lg"
          >
            {/* Wide Top Button: PLAN AN EVENT */}
            <button
              onClick={onOpenInquiry}
              className="w-full flex items-center justify-between px-6 py-3.5 bg-black/80 border border-[#C5A059] text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300 rounded-sm text-xs font-semibold tracking-[0.2em] uppercase shadow-2xl group"
            >
              <span>PLAN AN EVENT</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:text-black transition-colors" />
            </button>

            {/* Bottom Row Buttons: OUR SERVICES & VIEW OUR WORK */}
            <div className="grid grid-cols-2 gap-3.5">
              <a
                href="#services"
                className="flex items-center justify-between px-5 py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-black transition-all duration-300 rounded-sm text-xs font-bold tracking-[0.15em] uppercase shadow-xl group"
              >
                <span>OUR SERVICES</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#portfolio"
                className="flex items-center justify-center px-5 py-3.5 border border-[#C5A059] hover:border-[#D4AF37] text-white hover:text-[#D4AF37] bg-black/70 transition-all duration-300 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase shadow-lg"
              >
                VIEW OUR WORK
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Watch Our Reel Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-8 right-10 z-20 flex flex-col items-center cursor-pointer group"
        onClick={onOpenReel}
      >
        <div className="w-12 h-12 rounded-full border border-[#C5A059] bg-black/80 flex items-center justify-center group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300 shadow-2xl mb-2">
          <Play className="w-4 h-4 text-[#C5A059] fill-[#C5A059] group-hover:text-[#D4AF37] group-hover:fill-[#D4AF37] ml-0.5 transition-colors" />
        </div>
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/90 group-hover:text-[#D4AF37] transition-colors">
          WATCH OUR REEL
        </span>
      </motion.div>
    </section>
  );
};
