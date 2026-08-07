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
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const ClipboardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="13" y2="16" />
    <polyline points="9 9 10 9 10 9" />
  </svg>
);

const CalendarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
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
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.97 1.5 4 .76.76 1.23 1.52 1.41 2.5" />
  </svg>
);

const HandshakeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-2.4 2.4" />
    <path d="m13 14 1.7-1.7a1 1 0 0 0 0-1.4L12 8.3a1 1 0 0 0-1.4 0l-4.3 4.3a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0L12 15" />
    <path d="M18 11.5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.5" />
  </svg>
);

const StarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const LaurelWreathIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8.5" r="5" />
    <circle cx="12" cy="8.5" r="2" />
    <path d="M8.5 13L7 21L12 18.5L17 21L15.5 13" />
  </svg>
);

const GlobeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h16.8" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a17 17 0 0 1 0 18" />
  </svg>
);

export const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-white text-[#222222] overflow-hidden">
      {/* ---------------------------------------------------- */}
      {/* TOP SECTION: Founder Story & Value Props             */}
      {/* ---------------------------------------------------- */}
      <div className="w-full pt-0 pb-0">
        {/* Desktop Version */}
        <div className="hidden lg:flex flex-row gap-6 lg:gap-8 xl:gap-10 items-stretch w-full">
          {/* Column 1: Founder Image (35% Width - Full Height Background Image) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[35%] xl:w-[35%] relative flex justify-start pl-0 flex-shrink-0 self-stretch min-h-[500px] lg:min-h-[650px]"
          >
            <Image
              src="/about-us-image/img3.webp"
              alt="Blanca - Founder & Creative Director of Blanca's Events"
              fill
              className="object-cover object-left transform transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 35vw"
              priority
            />
          </motion.div>

          {/* Column 2: Header + Founder Letter & Story (Width Reduced to 30%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:w-[30%] xl:w-[30%] space-y-3 text-left px-4 sm:px-6 pt-4 lg:pt-8 flex-shrink-0"
          >
            {/* Top Decorative Header inside Center Column - MATCHING PHOTO 1 EXACTLY */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3.5 mb-2.5">
                <span className="h-[1px] w-16 sm:w-24 bg-[#B88E3E]/70"></span>
                <span className="text-xs lg:text-[11px] font-semibold tracking-[0.35em] uppercase text-[#B88E3E]">
                  ABOUT US
                </span>
                <span className="h-[1px] w-16 sm:w-24 bg-[#B88E3E]/70"></span>
              </div>

              {/* Flourish Ornament under ABOUT US - Matching Width of Top Row */}
              <div className="flex justify-center mb-3">
                <svg viewBox="0 0 200 12" fill="none" className="w-48 sm:w-64 h-3">
                  <line x1="0" y1="6" x2="92" y2="6" stroke="#B88E3E" strokeWidth="1" strokeOpacity="0.75" />
                  <circle cx="93.5" cy="6" r="1.2" fill="#B88E3E" />
                  <path d="M100 2L104 6L100 10L96 6Z" fill="#B88E3E" />
                  <circle cx="106.5" cy="6" r="1.2" fill="#B88E3E" />
                  <line x1="108" y1="6" x2="200" y2="6" stroke="#B88E3E" strokeWidth="1" strokeOpacity="0.75" />
                </svg>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[35px] xl:text-[45px] font-serif text-[#1C1C1C] tracking-tight font-normal mb-3.5 leading-tight text-center whitespace-nowrap">
                Passion. Creativity. <span className="text-[#B88E3E]">Perfection.</span>
              </h2>

              <p className="text-xs lg:text-[11px] font-semibold tracking-[0.25em] text-[#4A4A4A] uppercase text-center mt-3.5 sm:mt-4">
                THE HEART BEHIND BLANAS'S EVENTS
              </p>
            </div>

            {/* Everything below is left-aligned matching screenshot */}
            <h3 className="font-script text-4xl sm:text-5xl lg:text-5xl text-[#B88E3E] leading-snug text-left pt-2 font-normal">
              Hi, I'm Blanca
            </h3>

            <div className="space-y-4 sm:space-y-5 max-w-[471px]">
              <p className="text-xs sm:text-sm font-semibold text-black text-left">
                The founder and creative director of Blanca's Events.
              </p>

              <p className="text-xs sm:text-sm font-medium text-black text-left leading-relaxed sm:leading-loose">
                With a deep love for beautiful details and a natural talent for bringing visions to life, I established Blanca's Events to offer a truly bespoke experience for those who value elegance, originality and exceptional service.
              </p>

              <p className="text-xs sm:text-sm font-medium text-black text-left leading-relaxed sm:leading-loose">
                Every event we create is more than just a celebration – it's a reflection of your story, your style and the moments that matter most.
              </p>

              <p className="text-xs sm:text-sm font-medium text-black text-left leading-relaxed sm:leading-loose">
                From intimate gatherings to grand productions, my team and I are passionate about designing unforgettable events that leave a lasting impression on you and your guests.
              </p>
            </div>

            <div className="pt-2 flex justify-start">
              <span className="font-script text-3xl sm:text-4xl text-[#B88E3E] flex items-center justify-start gap-1.5 font-normal">
                Blanca <span className="text-[#B88E3E] text-2xl">♥</span>
              </span>
            </div>
          </motion.div>

          {/* Column 3: 4 Right Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-[22%] xl:w-[22%] max-w-full lg:max-w-[290px] mx-auto lg:mx-0 px-4 sm:px-6 lg:px-0 lg:pl-4 xl:pl-6 pr-4 pt-6 lg:pt-[175px] flex-shrink-0 grid grid-cols-2 lg:flex lg:flex-col gap-4 sm:gap-6 lg:gap-0 lg:space-y-5"
          >
            {/* Feature 1 */}
            <div className="pb-3 sm:pb-4 lg:border-b border-[#E5DFD5]">
              <div className="flex items-start space-x-2.5 sm:space-x-4">
                <div className="text-[#B88E3E] mt-0.5 flex-shrink-0">
                  <DiamondIcon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                </div>
                <div className="max-w-[240px]">
                  <h4 className="text-[11px] sm:text-xs lg:text-[13px] font-bold tracking-[0.12em] sm:tracking-[0.15em] text-[#B88E3E] uppercase mb-1">
                    BESPOKE BY DESIGN
                  </h4>
                  <p className="text-[11px] sm:text-xs lg:text-[13px] text-black font-medium leading-relaxed">
                    Every detail is thoughtfully curated to reflect your unique style.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="pb-3 sm:pb-4 lg:border-b border-[#E5DFD5]">
              <div className="flex items-start space-x-2.5 sm:space-x-4">
                <div className="text-[#B88E3E] mt-0.5 flex-shrink-0">
                  <UsersIcon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                </div>
                <div className="max-w-[240px]">
                  <h4 className="text-[11px] sm:text-xs lg:text-[13px] font-bold tracking-[0.12em] sm:tracking-[0.15em] text-[#B88E3E] uppercase mb-1">
                    CLIENT-FIRST APPROACH
                  </h4>
                  <p className="text-[11px] sm:text-xs lg:text-[13px] text-black font-medium leading-relaxed">
                    We listen, guide and support you at every step of the journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="pb-3 sm:pb-4 lg:border-b border-[#E5DFD5]">
              <div className="flex items-start space-x-2.5 sm:space-x-4">
                <div className="text-[#B88E3E] mt-0.5 flex-shrink-0">
                  <QualityAwardIcon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                </div>
                <div className="max-w-[240px]">
                  <h4 className="text-[11px] sm:text-xs lg:text-[13px] font-bold tracking-[0.12em] sm:tracking-[0.15em] text-[#B88E3E] uppercase mb-1">
                    EXCEPTIONAL QUALITY
                  </h4>
                  <p className="text-[11px] sm:text-xs lg:text-[13px] text-black font-medium leading-relaxed">
                    We work with the finest partners and never compromise on quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="pb-3 sm:pb-4 lg:pb-0">
              <div className="flex items-start space-x-2.5 sm:space-x-4">
                <div className="text-[#B88E3E] mt-0.5 flex-shrink-0">
                  <HeartIcon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                </div>
                <div className="max-w-[240px]">
                  <h4 className="text-[11px] sm:text-xs lg:text-[13px] font-bold tracking-[0.12em] sm:tracking-[0.15em] text-[#B88E3E] uppercase mb-1">
                    PASSIONATE TEAM
                  </h4>
                  <p className="text-[11px] sm:text-xs lg:text-[13px] text-black font-medium leading-relaxed">
                    A dedicated team that treats your event as if it were our own.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Version (Premium, Sleek, and Magazine-Style) */}
        <div className="block lg:hidden w-full pb-8">
          {/* Header */}
          <div className="text-center pt-8 px-4 mb-6">
            <div className="flex items-center justify-center gap-3.5 mb-2">
              <span className="h-[1px] w-12 bg-[#B88E3E]/70"></span>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#B88E3E]">
                ABOUT US
              </span>
              <span className="h-[1px] w-12 bg-[#B88E3E]/70"></span>
            </div>

            {/* Flourish Ornament */}
            <div className="flex justify-center mb-3">
              <svg viewBox="0 0 200 12" fill="none" className="w-48 h-3">
                <line x1="0" y1="6" x2="92" y2="6" stroke="#B88E3E" strokeWidth="1" strokeOpacity="0.75" />
                <circle cx="93.5" cy="6" r="1.2" fill="#B88E3E" />
                <path d="M100 2L104 6L100 10L96 6Z" fill="#B88E3E" />
                <circle cx="106.5" cy="6" r="1.2" fill="#B88E3E" />
                <line x1="108" y1="6" x2="200" y2="6" stroke="#B88E3E" strokeWidth="1" strokeOpacity="0.75" />
              </svg>
            </div>

            <h2 className="text-2xl font-serif text-[#1C1C1C] tracking-tight mb-2 leading-tight">
              Passion. Creativity. <span className="text-[#B88E3E]">Perfection.</span>
            </h2>
            <p className="text-[9px] font-semibold tracking-[0.2em] text-[#4A4A4A] uppercase">
              THE HEART BEHIND BLANCA'S EVENTS
            </p>
          </div>

          {/* Founder Portrait (Luxurious framed style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative px-5 mb-8"
          >
            <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden shadow-xl border-4 border-[#FAF3EA]">
              <Image
                src="/about-us-image/mob-about.webp"
                alt="Blanca - Founder & Creative Director"
                fill
                className="object-cover object-top"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Elegant Luxury Badge overlay inside the image bottom-left */}
              <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md border border-[#B88E3E]/40 px-2.5 py-1 rounded-full flex items-center gap-1.5 z-20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C5A059]"></span>
                </span>
                <span className="text-[8px] font-bold tracking-[0.25em] text-[#C5A059] uppercase animate-pulse">
                  FOUNDER
                </span>
              </div>
            </div>
          </motion.div>

          {/* Founder Letter Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="px-5 mb-10"
          >
            <div className="bg-[#FAF8F5] rounded-[24px] p-6 border border-[#B88E3E]/10 shadow-xs">
              <h3 className="font-script text-4xl text-[#B88E3E] mb-4">
                Hi, I'm Blanca
              </h3>
              <div className="space-y-4 text-neutral-800 text-xs sm:text-sm leading-relaxed font-light">
                <p className="font-semibold text-black">
                  The founder and creative director of Blanca's Events.
                </p>
                <p>
                  With a deep love for beautiful details and a natural talent for bringing visions to life, I established Blanca's Events to offer a truly bespoke experience for those who value elegance, originality and exceptional service.
                </p>
                <p>
                  Every event we create is more than just a celebration – it's a reflection of your story, your style and the moments that matter most.
                </p>
                <p>
                  From intimate gatherings to grand productions, my team and I are passionate about designing unforgettable events that leave a lasting impression on you and your guests.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#B88E3E]/10 flex items-center justify-between">
                <span className="font-script text-3xl text-[#B88E3E]">
                  Blanca <span className="text-[#B88E3E] text-xl">♥</span>
                </span>
                <span className="text-[9px] tracking-wider text-neutral-400 uppercase font-semibold">
                  Creative Director
                </span>
              </div>
            </div>
          </motion.div>

          {/* Value Props Section */}
          <div className="px-5">
            <div className="grid grid-cols-1 gap-4">
              {/* Bespoke by Design */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-[#E5DFD5] rounded-xl p-4 flex items-start space-x-3.5 shadow-2xs"
              >
                <div className="text-[#B88E3E] p-2 bg-[#FAF8F5] rounded-lg flex-shrink-0">
                  <DiamondIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-wider text-[#B88E3E] uppercase mb-1">
                    BESPOKE BY DESIGN
                  </h4>
                  <p className="text-xs text-neutral-700 leading-normal">
                    Every detail is thoughtfully curated to reflect your unique style.
                  </p>
                </div>
              </motion.div>

              {/* Client-First Approach */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-white border border-[#E5DFD5] rounded-xl p-4 flex items-start space-x-3.5 shadow-2xs"
              >
                <div className="text-[#B88E3E] p-2 bg-[#FAF8F5] rounded-lg flex-shrink-0">
                  <UsersIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-wider text-[#B88E3E] uppercase mb-1">
                    CLIENT-FIRST APPROACH
                  </h4>
                  <p className="text-xs text-neutral-700 leading-normal">
                    We listen, guide and support you at every step of the journey.
                  </p>
                </div>
              </motion.div>

              {/* Exceptional Quality */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-[#E5DFD5] rounded-xl p-4 flex items-start space-x-3.5 shadow-2xs"
              >
                <div className="text-[#B88E3E] p-2 bg-[#FAF8F5] rounded-lg flex-shrink-0">
                  <QualityAwardIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-wider text-[#B88E3E] uppercase mb-1">
                    EXCEPTIONAL QUALITY
                  </h4>
                  <p className="text-xs text-neutral-700 leading-normal">
                    We work with the finest partners and never compromise on quality.
                  </p>
                </div>
              </motion.div>

              {/* Passionate Team */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-white border border-[#E5DFD5] rounded-xl p-4 flex items-start space-x-3.5 shadow-2xs"
              >
                <div className="text-[#B88E3E] p-2 bg-[#FAF8F5] rounded-lg flex-shrink-0">
                  <HeartIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-wider text-[#B88E3E] uppercase mb-1">
                    PASSIONATE TEAM
                  </h4>
                  <p className="text-xs text-neutral-700 leading-normal">
                    A dedicated team that treats your event as if it were our own.
                  </p>
                </div>
              </motion.div>
            </div>
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

            {/* Desktop Version: 5 Columns Grid */}
            <div className="hidden lg:grid grid-cols-5 gap-0">
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

            {/* Mobile Version: Horizontal Swipeable Carousel (extremely premium!) */}
            <div className="flex lg:hidden overflow-x-auto gap-4 pb-4 px-2 scrollbar-hide snap-x snap-mandatory">
              {/* Box 1 */}
              <div className="flex flex-col items-center text-center p-5 bg-white border border-[#E8DFC5]/40 rounded-2xl w-[240px] flex-shrink-0 snap-center shadow-xs">
                <div className="text-[#B88E3E] mb-3 p-2 bg-[#F3EAD9] rounded-full">
                  <ClipboardIcon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold tracking-[0.15em] text-[#2C2C2C] uppercase mb-1">
                  DETAIL ORIENTED
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  We take care of every detail so you can enjoy every moment.
                </p>
              </div>

              {/* Box 2 */}
              <div className="flex flex-col items-center text-center p-5 bg-white border border-[#E8DFC5]/40 rounded-2xl w-[240px] flex-shrink-0 snap-center shadow-xs">
                <div className="text-[#B88E3E] mb-3 p-2 bg-[#F3EAD9] rounded-full">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold tracking-[0.15em] text-[#2C2C2C] uppercase mb-1">
                  SEAMLESS PLANNING
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Organised, efficient and always one step ahead.
                </p>
              </div>

              {/* Box 3 */}
              <div className="flex flex-col items-center text-center p-5 bg-white border border-[#E8DFC5]/40 rounded-2xl w-[240px] flex-shrink-0 snap-center shadow-xs">
                <div className="text-[#B88E3E] mb-3 p-2 bg-[#F3EAD9] rounded-full">
                  <LightbulbIcon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold tracking-[0.15em] text-[#2C2C2C] uppercase mb-1">
                  CREATIVE EXCELLENCE
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Original concepts and stunning designs that wow.
                </p>
              </div>

              {/* Box 4 */}
              <div className="flex flex-col items-center text-center p-5 bg-white border border-[#E8DFC5]/40 rounded-2xl w-[240px] flex-shrink-0 snap-center shadow-xs">
                <div className="text-[#B88E3E] mb-3 p-2 bg-[#F3EAD9] rounded-full">
                  <HandshakeIcon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold tracking-[0.15em] text-[#2C2C2C] uppercase mb-1">
                  TRUSTED PARTNERS
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  A curated network of the very best in the industry.
                </p>
              </div>

              {/* Box 5 */}
              <div className="flex flex-col items-center text-center p-5 bg-white border border-[#E8DFC5]/40 rounded-2xl w-[240px] flex-shrink-0 snap-center shadow-xs">
                <div className="text-[#B88E3E] mb-3 p-2 bg-[#F3EAD9] rounded-full">
                  <StarIcon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold tracking-[0.15em] text-[#2C2C2C] uppercase mb-1">
                  MEMORABLE EXPERIENCES
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
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

          <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Quote (4 cols) */}
            <div className="lg:col-span-4 flex items-start space-x-3.5 pr-2">
              <span className="font-serif text-5xl md:text-6xl text-[#C5A059] leading-none select-none -mt-1">
                “
              </span>
              <p className="text-base md:text-xl font-serif text-neutral-100 font-light leading-relaxed">
                My mission is to turn your vision into an experience that feels{' '}
                <span className="text-[#D4AF37] font-serif not-italic">effortless</span> for you and{' '}
                <span className="text-[#D4AF37] font-serif not-italic">unforgettable</span> for your guests.
              </p>
            </div>

            {/* Desktop Version: 4 Stat Boxes in a row */}
            <div className="hidden lg:grid lg:col-span-8 grid-cols-4 gap-0 text-center items-stretch divide-x divide-[#C5A059]/25 border-l border-[#C5A059]/25">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center space-y-1.5 px-3 lg:px-4 py-2">
                <div className="flex justify-center text-[#C5A059] mb-1">
                  <LaurelWreathIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[22px] font-serif text-white font-normal tracking-wide whitespace-nowrap">
                  250+
                </div>
                <div className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-[#C5A059] uppercase whitespace-nowrap">
                  EVENTS DELIVERED
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center space-y-1.5 px-3 lg:px-4 py-2">
                <div className="flex justify-center text-[#C5A059] mb-1">
                  <UsersIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[22px] font-serif text-white font-normal tracking-wide whitespace-nowrap">
                  20,000+
                </div>
                <div className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-[#C5A059] uppercase whitespace-nowrap">
                  HAPPY GUESTS
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center space-y-1.5 px-3 lg:px-4 py-2">
                <div className="flex justify-center text-[#C5A059] mb-1">
                  <GlobeIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[22px] font-serif text-white font-normal tracking-wide whitespace-nowrap">
                  UAE & BEYOND
                </div>
                <div className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-[#C5A059] uppercase whitespace-nowrap">
                  GLOBAL REACH
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center justify-center space-y-1.5 px-3 lg:px-4 py-2">
                <div className="flex justify-center text-[#C5A059] mb-1">
                  <DiamondIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[22px] font-serif text-white font-normal tracking-wide whitespace-nowrap">
                  10+ YEARS
                </div>
                <div className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-[#C5A059] uppercase whitespace-nowrap">
                  OF EXPERIENCE
                </div>
              </div>
            </div>

            {/* Mobile Version: 2x2 Glassmorphic Cards Grid */}
            <div className="grid lg:hidden grid-cols-2 gap-4 mt-6 w-full">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-[#C5A059] mb-1.5 flex justify-center">
                  <LaurelWreathIcon className="w-6 h-6" />
                </div>
                <div className="text-lg font-serif text-white font-normal tracking-wide">
                  250+
                </div>
                <div className="text-[8px] font-semibold tracking-widest text-[#C5A059] uppercase text-center mt-1">
                  EVENTS DELIVERED
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-[#C5A059] mb-1.5 flex justify-center">
                  <UsersIcon className="w-6 h-6" />
                </div>
                <div className="text-lg font-serif text-white font-normal tracking-wide">
                  20,000+
                </div>
                <div className="text-[8px] font-semibold tracking-widest text-[#C5A059] uppercase text-center mt-1">
                  HAPPY GUESTS
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-[#C5A059] mb-1.5 flex justify-center">
                  <GlobeIcon className="w-6 h-6" />
                </div>
                <div className="text-lg font-serif text-white font-normal tracking-wide">
                  UAE & BEYOND
                </div>
                <div className="text-[8px] font-semibold tracking-widest text-[#C5A059] uppercase text-center mt-1">
                  GLOBAL REACH
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-[#C5A059] mb-1.5 flex justify-center">
                  <DiamondIcon className="w-6 h-6" />
                </div>
                <div className="text-lg font-serif text-white font-normal tracking-wide">
                  10+ YEARS
                </div>
                <div className="text-[8px] font-semibold tracking-widest text-[#C5A059] uppercase text-center mt-1">
                  OF EXPERIENCE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
