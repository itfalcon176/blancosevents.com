'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const StatsSection: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const stats = [
    {
      id: 'events',
      title: '250+',
      subtitle: 'Events Delivered',
      imagePath: '/logo/blancosevents.png',
      // Laurel Wreath Gold Vector Fallback
      fallbackSvg: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#D4AF37] fill-none stroke-current" strokeWidth="1.6">
          <path d="M12 10C8 16 9 24 14 28M28 10C32 16 31 24 26 28" />
          <circle cx="20" cy="30" r="1.5" fill="#D4AF37" />
          <path d="M11 12C9 14 11 16 11 16M13 18C11 20 13 22 13 22M29 12C31 14 29 16 29 16M27 18C29 20 27 22 27 22" />
        </svg>
      ),
    },
    {
      id: 'guests',
      title: '20,000+',
      subtitle: 'Delighted Guests',
      imagePath: '/logo/blancosevents.png',
      // Guests Crowd Gold Vector Fallback
      fallbackSvg: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#D4AF37] fill-none stroke-current" strokeWidth="1.6">
          <circle cx="20" cy="14" r="4" strokeWidth="1.8" />
          <path d="M12 30C12 24 15 21 20 21C25 21 28 24 28 30" strokeWidth="1.8" />
          <circle cx="11" cy="16" r="3" />
          <path d="M6 30C6 25 8 23 11 23" />
          <circle cx="29" cy="16" r="3" />
          <path d="M34 30C34 25 32 23 29 23" />
        </svg>
      ),
    },
    {
      id: 'location',
      title: 'UAE & BEYOND',
      subtitle: 'Local Expertise. Global Reach',
      imagePath: '/logo/blancosevents.png',
      // Globe / Pin Gold Vector Fallback
      fallbackSvg: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#D4AF37] fill-none stroke-current" strokeWidth="1.6">
          <circle cx="20" cy="20" r="10" strokeWidth="1.8" />
          <path d="M10 20H30M20 10C23 14 23 26 20 30M20 10C17 14 17 26 20 30" />
          <circle cx="20" cy="17" r="2" fill="#D4AF37" />
        </svg>
      ),
    },
    {
      id: 'bespoke',
      title: 'BESPOKE',
      subtitle: 'Tailored to Perfection',
      imagePath: '/logo/blancosevents.png',
      // Shield / Crown Gold Vector Fallback
      fallbackSvg: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#D4AF37] fill-none stroke-current" strokeWidth="1.6">
          <path d="M10 10L20 6L30 10V20C30 27 20 32 20 32C20 32 10 27 10 20V10Z" strokeWidth="1.8" />
          <path d="M16 18L20 14L24 18L20 22Z" fill="#D4AF37" opacity="0.4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 bg-black border-y border-[#D4AF37]/20 shadow-2xl">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex items-center space-x-4 py-3 px-4 ${index !== stats.length - 1
                ? 'lg:border-r border-white/10 sm:border-b-0 border-b border-white/10'
                : ''
                }`}
            >
              {/* Image Icon with Automatic Fallback */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                {!imgErrors[stat.id] ? (
                  <img
                    src={stat.imagePath}
                    alt={stat.title}
                    onError={() => handleImageError(stat.id)}
                    className="max-h-10 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
                  />
                ) : (
                  stat.fallbackSvg
                )}
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col">
                <span
                  className="text-lg sm:text-xl md:text-2xl font-serif tracking-wider text-white font-normal"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {stat.title}
                </span>
                <span className="text-[11px] font-light text-neutral-400 tracking-wide mt-0.5">
                  {stat.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
