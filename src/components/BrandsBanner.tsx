'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BrandsBanner: React.FC = () => {
  const brands = [
    { name: 'ATLANTIS', logo: '/blancosevents-image-home/icons/1.webp' },
    { name: 'Jumeirah', logo: '/blancosevents-image-home/icons/2.webp' },
    { name: 'FIVE', logo: '/blancosevents-image-home/icons/3.webp' },
    { name: 'LUX', logo: '/blancosevents-image-home/icons/4.webp' },
    { name: 'SLS', logo: '/blancosevents-image-home/icons/5.webp' },
    { name: 'NOBU', logo: '/blancosevents-image-home/icons/6.webp' },
    { name: 'EMAAR', logo: '/blancosevents-image-home/icons/7.webp' },
    { name: 'W', logo: '/blancosevents-image-home/icons/8.webp' },
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

        {/* Brand Logos Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-between text-center">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-2 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 sm:h-14 object-contain filter brightness-95"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
