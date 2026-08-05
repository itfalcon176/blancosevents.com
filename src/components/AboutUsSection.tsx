'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Custom SVG Icons matching the reference design outline style exactly
const DiamondIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L3.5 8.5L12 22L20.5 8.5L12 2Z" />
    <path d="M3.5 8.5H20.5" />
    <path d="M8 8.5L12 2L16 8.5L12 22L8 8.5Z" />
  </svg>
);

const UsersIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="7" r="3.5" />
    <path d="M2 19c0-3.5 3.1-6 7-6s7 2.5 7 6" />
    <path d="M16 3.5a3.5 3.5 0 0 1 0 7" />
    <path d="M21 19c0-2.8-2-4.8-5-5.5" />
  </svg>
);

const QualityAwardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8.5" r="5.5" />
    <circle cx="12" cy="8.5" r="2.5" />
    <path d="M8.5 13.5L7 21.5L12 18.8L17 21.5L15.5 13.5" />
  </svg>
);

const HeartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ClipboardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="13" y2="16" />
    <polyline points="9 9 10 9 10 9" />
  </svg>
);

const CalendarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="8" cy="14" r="1" fill="currentColor" />
    <circle cx="12" cy="14" r="1" fill="currentColor" />
    <circle cx="16" cy="14" r="1" fill="currentColor" />
    <circle cx="8" cy="18" r="1" fill="currentColor" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);

const LightbulbIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.97 1.5 4 .76.76 1.23 1.52 1.41 2.5" />
  </svg>
);

const HandshakeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-2.4 2.4" />
    <path d="m13 14 1.7-1.7a1 1 0 0 0 0-1.4L12 8.3a1 1 0 0 0-1.4 0l-4.3 4.3a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0L12 15" />
    <path d="M18 11.5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.5" />
  </svg>
);

const StarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const LaurelWreathIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 15A9 9 0 0 1 3 8a9 9 0 0 1 5-4.5" />
    <path d="M18 15a9 9 0 0 0 3-7 9 9 0 0 0-5-4.5" />
    <path d="M12 22a10 10 0 0 1-6-3" />
    <path d="M12 22a10 10 0 0 0 6-3" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const GlobeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-white text-[#222222] overflow-hidden">
      {/* ---------------------------------------------------- */}
      {/* TOP SECTION: Founder Story & Value Props             */}
      {/* ---------------------------------------------------- */}
      <div className="w-full pt-0 pb-0">
        {/* 3-Column Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-stretch w-full">
          {/* Column 1: Founder Image (35% Width - Full Height Cover) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[35%] xl:w-[35%] relative flex justify-start pl-0 flex-shrink-0 self-stretch"
          >
            <div className="relative group w-full h-full min-h-[500px] lg:min-h-[620px]">
              {/* Main Image Container - Flush Left Edge */}
              <div className="relative overflow-hidden w-full h-full bg-white">
                <Image
                  src="/about-us-image/img3.webp"
                  alt="Blanca - Founder & Creative Director of Blanca's Events"
                  fill
                  className="object-contain object-left transform transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 35vw"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Column 2: Header + Founder Letter & Story (Width Reduced to 30%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:w-[30%] xl:w-[30%] space-y-3 text-left px-4 sm:px-6 pt-4 lg:pt-8 flex-shrink-0"
          >
            {/* Top Decorative Header inside Center Column - CENTER ALIGNED MATCHING SCREENSHOT */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-1.5">
                <span className="h-[1px] w-12 bg-[#B88E3E]/60"></span>
                <span className="text-[11px] sm:text-xs font-medium tracking-[0.32em] uppercase text-[#B88E3E]">
                  ABOUT US
                </span>
                <span className="h-[1px] w-12 bg-[#B88E3E]/60"></span>
              </div>

              {/* Flourish Ornament under ABOUT US */}
              <div className="flex justify-center mb-2.5">
                <svg viewBox="0 0 40 12" fill="none" stroke="#B88E3E" className="w-8 h-3 opacity-80">
                  <path d="M4 6c4-4 8 4 16 0s12 4 16 0" strokeWidth="1.2" strokeLinecap="round" />
                  <circle cx="20" cy="6" r="1.5" fill="#B88E3E" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1C1C1C] tracking-tight font-normal mb-2 leading-tight text-center">
                Passion. Creativity. <span className="text-[#B88E3E]">Perfection.</span>
              </h2>

              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#4A4A4A] uppercase text-center">
                THE HEART BEHIND BLANCA'S EVENTS
              </p>
            </div>

            {/* Everything below is left-aligned matching screenshot */}
            <h3 className="font-script text-4xl sm:text-5xl lg:text-5xl text-[#B88E3E] leading-snug text-left pt-2 font-normal">
              Hi, I'm Blanca
            </h3>

            <p className="text-xs sm:text-sm font-semibold text-[#111111] text-left">
              The founder and creative director of Blanca's Events.
            </p>

            <p className="text-xs sm:text-sm text-[#383838] leading-[1.8] font-normal text-left">
              With a deep love for beautiful details and a natural talent for bringing visions to life, I established Blanca's Events to offer a truly bespoke experience for those who value elegance, originality and exceptional service.
            </p>

            <p className="text-xs sm:text-sm text-[#383838] leading-[1.8] font-normal text-left">
              Every event we create is more than just a celebration – it's a reflection of your story, your style and the moments that matter most.
            </p>

            <p className="text-xs sm:text-sm text-[#383838] leading-[1.8] font-normal text-left">
              From intimate gatherings to grand productions, my team and I are passionate about designing unforgettable events that leave a lasting impression on you and your guests.
            </p>

            <div className="pt-2 flex justify-start">
              <span className="font-script text-3xl sm:text-4xl text-[#B88E3E] flex items-center justify-start gap-1.5 font-normal">
                Blanca <span className="text-[#B88E3E] text-2xl">♥</span>
              </span>
            </div>
          </motion.div>

          {/* Column 3: 4 Right Feature Cards (Top Aligned with Hi, I'm Blanca) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-[23%] xl:w-[23%] space-y-4 px-6 lg:px-0 lg:pl-6 xl:pl-8 pr-6 lg:pr-8 xl:pr-12 pt-14 lg:pt-[108px] flex-shrink-0"
          >
            {/* Feature 1 */}
            <div className="pb-3.5 border-b border-[#E5DFD5]">
              <div className="flex items-start space-x-3.5">
                <div className="text-[#B88E3E] mt-0.5 flex-shrink-0">
                  <DiamondIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.15em] text-[#B88E3E] uppercase mb-0.5">
                    BESPOKE BY DESIGN
                  </h4>
                  <p className="text-[11px] text-[#555555] leading-relaxed">
                    Every detail is thoughtfully curated to reflect your unique style.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="pb-3.5 border-b border-[#E5DFD5]">
              <div className="flex items-start space-x-3.5">
                <div className="text-[#B88E3E] mt-0.5 flex-shrink-0">
                  <UsersIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.15em] text-[#B88E3E] uppercase mb-0.5">
                    CLIENT-FIRST APPROACH
                  </h4>
                  <p className="text-[11px] text-[#555555] leading-relaxed">
                    We listen, guide and support you at every step of the journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="pb-3.5 border-b border-[#E5DFD5]">
              <div className="flex items-start space-x-3.5">
                <div className="text-[#B88E3E] mt-0.5 flex-shrink-0">
                  <QualityAwardIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.15em] text-[#B88E3E] uppercase mb-0.5">
                    EXCEPTIONAL QUALITY
                  </h4>
                  <p className="text-[11px] text-[#555555] leading-relaxed">
                    We work with the finest partners and never compromise on quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div>
              <div className="flex items-start space-x-3.5">
                <div className="text-[#B88E3E] mt-0.5 flex-shrink-0">
                  <HeartIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.15em] text-[#B88E3E] uppercase mb-0.5">
                    PASSIONATE TEAM
                  </h4>
                  <p className="text-[11px] text-[#555555] leading-relaxed">
                    A dedicated team that treats your event as if it were our own.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* MIDDLE SECTION: Why Clients Choose Us Banner         */}
      {/* ---------------------------------------------------- */}
      <div className="bg-[#FAF3EA] border-y border-[#E8DFC5]/60 py-8 px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
        <div className="w-full">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6 text-center">
            <span className="h-[1px] w-12 bg-[#B88E3E]/40"></span>
            <h3 className="text-xs font-bold tracking-[0.25em] text-[#B88E3E] uppercase">
              WHY CLIENTS CHOOSE US
            </h3>
            <span className="h-[1px] w-12 bg-[#B88E3E]/40"></span>
          </div>

          {/* 5 Cards Row with Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0">
            {/* Box 1 */}
            <div className="flex flex-col items-center text-center px-4 lg:border-r lg:border-[#E2D8C6]">
              <div className="text-[#B88E3E] mb-2 p-2 bg-[#F3EAD9] rounded-full">
                <ClipboardIcon className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold tracking-[0.15em] text-[#2C2C2C] uppercase mb-1">
                DETAIL ORIENTED
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed max-w-[200px]">
                We take care of every detail so you can enjoy every moment.
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center text-center px-4 lg:border-r lg:border-[#E2D8C6]">
              <div className="text-[#B88E3E] mb-2 p-2 bg-[#F3EAD9] rounded-full">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold tracking-[0.15em] text-[#2C2C2C] uppercase mb-1">
                SEAMLESS PLANNING
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed max-w-[200px]">
                Organised, efficient and always one step ahead.
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center text-center px-4 lg:border-r lg:border-[#E2D8C6]">
              <div className="text-[#B88E3E] mb-2 p-2 bg-[#F3EAD9] rounded-full">
                <LightbulbIcon className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold tracking-[0.15em] text-[#2C2C2C] uppercase mb-1">
                CREATIVE EXCELLENCE
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed max-w-[200px]">
                Original concepts and stunning designs that wow.
              </p>
            </div>

            {/* Box 4 */}
            <div className="flex flex-col items-center text-center px-4 lg:border-r lg:border-[#E2D8C6]">
              <div className="text-[#B88E3E] mb-2 p-2 bg-[#F3EAD9] rounded-full">
                <HandshakeIcon className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold tracking-[0.15em] text-[#2C2C2C] uppercase mb-1">
                TRUSTED PARTNERS
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed max-w-[200px]">
                A curated network of the very best in the industry.
              </p>
            </div>

            {/* Box 5 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="text-[#B88E3E] mb-2 p-2 bg-[#F3EAD9] rounded-full">
                <StarIcon className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold tracking-[0.15em] text-[#2C2C2C] uppercase mb-1">
                MEMORABLE EXPERIENCES
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed max-w-[200px]">
                We don't just plan events, we create memories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* BOTTOM SECTION: Dark Mission Quote & Key Metrics     */}
      {/* ---------------------------------------------------- */}
      <div className="relative bg-[#09090B] text-white py-9 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-[#D4AF37]/20 w-full">
        {/* Subtle Dark Floral Watermark Background */}
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-left pointer-events-none mix-blend-luminosity"
          style={{ backgroundImage: "url('/dark-rose-bg.png')" }}
        />

        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Quote (5 cols) */}
          <div className="lg:col-span-5 flex items-start space-x-4">
            <span className="font-serif text-6xl md:text-7xl text-[#C5A059] leading-none select-none -mt-2">
              “
            </span>
            <p className="text-lg md:text-2xl font-serif text-neutral-100 font-light leading-relaxed">
              My mission is to turn your vision into an experience that feels{' '}
              <span className="italic text-[#D4AF37] font-serif">effortless</span> for you and{' '}
              <span className="italic text-[#D4AF37] font-serif">unforgettable</span> for your guests.
            </p>
          </div>

          {/* Center Vertical Divider (1 col / hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center h-24">
            <div className="w-[1px] bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent" />
          </div>

          {/* Right Column: 4 Stat Boxes (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {/* Stat 1 */}
            <div className="space-y-1 sm:border-r border-white/10 sm:pr-4">
              <div className="flex justify-center text-[#C5A059] mb-2">
                <LaurelWreathIcon className="w-6 h-6" />
              </div>
              <div className="text-2xl md:text-3xl font-serif text-white font-normal tracking-wide">
                250+
              </div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                EVENTS DELIVERED
              </div>
            </div>

            {/* Stat 2 */}
            <div className="space-y-1 sm:border-r border-white/10 sm:px-4">
              <div className="flex justify-center text-[#C5A059] mb-2">
                <UsersIcon className="w-6 h-6" />
              </div>
              <div className="text-2xl md:text-3xl font-serif text-white font-normal tracking-wide">
                20,000+
              </div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                HAPPY GUESTS
              </div>
            </div>

            {/* Stat 3 */}
            <div className="space-y-1 sm:border-r border-white/10 sm:px-4">
              <div className="flex justify-center text-[#C5A059] mb-2">
                <GlobeIcon className="w-6 h-6" />
              </div>
              <div className="text-xl md:text-2xl font-serif text-white font-normal tracking-wide">
                UAE & BEYOND
              </div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                GLOBAL REACH
              </div>
            </div>

            {/* Stat 4 */}
            <div className="space-y-1 sm:pl-4">
              <div className="flex justify-center text-[#C5A059] mb-2">
                <DiamondIcon className="w-6 h-6" />
              </div>
              <div className="text-2xl md:text-3xl font-serif text-white font-normal tracking-wide">
                10+ YEARS
              </div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                OF EXPERIENCE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
