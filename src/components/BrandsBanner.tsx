'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BrandsBanner: React.FC = () => {
  const brands = [
    { name: 'ATLANTIS', logo: '/blancosevents-image-home/icons/atlantis-the-palm.webp' },
    { name: 'FIVE', logo: '/blancosevents-image-home/icons/five.webp' },
    { name: 'BLU', logo: '/blancosevents-image-home/icons/blu.webp' },
    { name: 'TROVE', logo: '/blancosevents-image-home/icons/trove.webp' },
    { name: 'GOOSE ISLAND', logo: '/blancosevents-image-home/icons/goose.webp' },
    { name: 'THE BANC', logo: '/blancosevents-image-home/icons/banc.webp' },
    { name: 'WAVEHOUSE', logo: '/blancosevents-image-home/icons/wavehouse.webp' },
    { name: 'EN FUEGO', logo: '/blancosevents-image-home/icons/en fluego.webp' },
    { name: 'AYLA', logo: '/blancosevents-image-home/icons/ayla.webp' },
    { name: 'OCCO', logo: '/blancosevents-image-home/icons/occo.webp' },
  ];

  return (
    <section className="py-6 bg-white text-black border-y border-neutral-200 overflow-hidden shadow-inner">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="text-center mb-4">
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#C5A059]">
            TRUSTED BY LEADING NAMES & BRANDS
          </p>
        </div>

        {/* Brand Logos Infinite Scroll Marquee (Desktop & Mobile) */}
        <div className="relative w-full overflow-hidden py-1">
          {/* Edge fade gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee space-x-12 sm:space-x-20 items-center py-2">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-36 sm:w-52 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-14 sm:h-20 max-h-20 object-contain filter brightness-95"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
