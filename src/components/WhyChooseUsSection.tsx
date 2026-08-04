'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseUsSection: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const emblems = [
    {
      id: 'flowers',
      name: 'FLOWERS',
      imagePath: '/emblems/flowers.png',
      fallbackSvg: (
        <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#C5A059] fill-none stroke-current" strokeWidth="1.6">
          <circle cx="20" cy="14" r="6" strokeWidth="1.5" />
          <path d="M20 8C17 8 16 11 16 14C16 18 20 20 20 20C20 20 24 18 24 14C24 11 23 8 20 8Z" />
          <path d="M20 20V32M16 26L20 23M24 28L20 25" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'entertainment',
      name: 'ENTERTAINMENT',
      imagePath: '/emblems/entertainment.png',
      fallbackSvg: (
        <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#C5A059] fill-none stroke-current" strokeWidth="1.6">
          <path d="M12 28L22 18" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="10" cy="30" rx="4" ry="5" transform="rotate(-45 10 30)" strokeWidth="1.5" />
          <path d="M22 18L29 11L31 13L24 20" fill="none" />
          <line x1="28" y1="10" x2="32" y2="14" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'catering',
      name: 'CATERING',
      imagePath: '/emblems/catering.png',
      fallbackSvg: (
        <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#C5A059] fill-none stroke-current" strokeWidth="1.6">
          <path d="M20 6C20 6 13 14 13 21C13 25 16 28 20 28C24 28 27 25 27 21C27 14 20 6 20 6Z" strokeWidth="1.5" />
          <path d="M20 15C20 15 17 19 17 22C17 24 18.5 25.5 20 25.5C21.5 25.5 23 24 23 22C23 19 20 15 20 15Z" fill="#C5A059" opacity="0.4" />
          <path d="M16 32H24" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'decor',
      name: 'DÉCOR',
      imagePath: '/emblems/decor.png',
      fallbackSvg: (
        <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#C5A059] fill-none stroke-current" strokeWidth="1.6">
          <rect x="9" y="9" width="22" height="22" rx="4" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="4" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="1.5" fill="#C5A059" />
          <path d="M9 9L15 15M31 9L25 15M9 31L15 25M31 31L25 25" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      id: 'hospitality',
      name: 'HOSPITALITY',
      imagePath: '/emblems/hospitality.png',
      fallbackSvg: (
        <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#C5A059] fill-none stroke-current" strokeWidth="1.6">
          <path d="M8 24C8 18 13 14 20 14C27 14 32 18 32 24H8Z" strokeWidth="1.5" />
          <path d="M6 26H34V29H6V26Z" fill="#C5A059" opacity="0.3" strokeWidth="1.5" />
          <path d="M16 14L20 9L24 14" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: 'photography',
      name: 'PHOTOGRAPHY',
      imagePath: '/emblems/photography.png',
      fallbackSvg: (
        <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#C5A059] fill-none stroke-current" strokeWidth="1.6">
          <circle cx="20" cy="20" r="5" strokeWidth="1.8" />
          <path d="M20 6V11M20 29V34M6 20H11M29 20H34M10 10L14 14M26 26L30 30M30 10L26 14M14 26L10 30" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'artists',
      name: 'ARTISTS',
      imagePath: '/emblems/artists.png',
      fallbackSvg: (
        <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#C5A059] fill-none stroke-current" strokeWidth="1.6">
          <path d="M20 8C13 8 8 13 8 20C8 26 13 31 20 31C22 31 24 29.5 24 28C24 27 23.5 26.5 23.5 25.5C23.5 24 25 23 26.5 23H28C31.5 23 34 20.5 34 17C34 12 28 8 20 8Z" strokeWidth="1.5" />
          <circle cx="14" cy="15" r="1.5" fill="#C5A059" />
          <circle cx="20" cy="13" r="1.5" fill="#C5A059" />
          <circle cx="26" cy="16" r="1.5" fill="#C5A059" />
          <path d="M28 26L33 31" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'more',
      name: 'MORE',
      imagePath: '/emblems/more.png',
      fallbackSvg: (
        <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#C5A059]">
          <polygon points="10,20 14,15 18,20 14,25" fill="#C5A059" />
          <polygon points="18,20 22,15 26,20 22,25" fill="#C5A059" />
          <polygon points="26,20 30,15 34,20 30,25" fill="#C5A059" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#FAF8F5] text-neutral-900 border-y border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Title & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 pr-0 lg:pr-6"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C5A059] mb-3">
              WHY CHOOSE BESPOKE & CO.
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-black leading-[1.15] mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Luxury Experiences<br />& Flawless Add-Ons
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-7 max-w-md">
              Through our trusted network of elite vendors, we offer bespoke services and thoughtful add-ons that elevate your event experience.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3.5 bg-black text-[#C5A059] hover:bg-neutral-900 hover:text-[#D4AF37] transition-colors rounded-sm text-xs font-semibold tracking-[0.2em] uppercase shadow-lg group"
            >
              <span>DISCOVER MORE</span>
              <ArrowRight className="w-4 h-4 ml-2.5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right Column: 8 Customizable Image Emblems Grid + Quote Banner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col justify-between h-full space-y-10"
          >
            {/* 8 Emblem Images Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center items-center">
              {emblems.map((emblem) => (
                <div
                  key={emblem.id}
                  className="flex flex-col items-center justify-center p-2 group hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div className="mb-3 h-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {!imgErrors[emblem.id] ? (
                      <img
                        src={emblem.imagePath}
                        alt={emblem.name}
                        onError={() => handleImageError(emblem.id)}
                        className="max-h-9 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(197,160,89,0.3)]"
                      />
                    ) : (
                      emblem.fallbackSvg
                    )}
                  </div>
                  <span className="text-[9.5px] font-semibold tracking-[0.2em] uppercase text-neutral-700 group-hover:text-[#C5A059] transition-colors">
                    {emblem.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Full-Width Light Gold Border Quote Box */}
            <div className="w-full py-6 px-8 bg-white/70 border border-[#C5A059]/40 rounded-sm text-center shadow-sm">
              <p className="text-base sm:text-lg md:text-xl font-serif text-neutral-800 tracking-wide" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                If you can imagine it, we&apos;ll deliver it with care and elegance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
