'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BrandsBanner: React.FC = () => {
  const brands = [
    { name: 'ATLANTIS', logo: '/blancosevents-image-home/icons/Atlantis.webp' },
    { name: 'Jumeirah', logo: '/blancosevents-image-home/icons/jumeira.webp' },
    { name: 'FIVE', logo: '/blancosevents-image-home/icons/five.webp' },
    { name: 'LUX', logo: '/blancosevents-image-home/icons/lux.webp' },
    { name: 'SLS', logo: '/blancosevents-image-home/icons/sls.webp' },
    { name: 'NOBU', logo: '/blancosevents-image-home/icons/nobu.webp' },
    { name: 'EMAAR', logo: '/blancosevents-image-home/icons/emaar.webp' },
    { name: 'W', logo: '/blancosevents-image-home/icons/W.webp' },
  ];

  return (
    <section className="py-10 bg-white text-black border-y border-neutral-200 overflow-hidden shadow-inner">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="text-center mb-7">
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#C5A059]">
            TRUSTED BY LEADING NAMES & BRANDS
          </p>
        </div>

        {/* Brand Logos Infinite Scroll Marquee (Desktop & Mobile) */}
        <div className="relative w-full overflow-hidden py-1">
          {/* Edge fade gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee space-x-12 sm:space-x-20 items-center py-2">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-28 sm:w-36 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-9 sm:h-12 object-contain filter brightness-95"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
