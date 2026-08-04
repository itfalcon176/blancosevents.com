'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BrandsBanner: React.FC = () => {
  const brands = [
    { name: 'ATLANTIS', sub: 'THE PALM, DUBAI', fontStyle: 'font-serif' },
    { name: 'Jumeirah', sub: 'HOTELS & RESORTS', fontStyle: 'font-serif italic' },
    { name: 'FIVE ▻', sub: '', fontStyle: 'font-sans font-black' },
    { name: 'L U X *', sub: 'RESORTS & HOTELS', fontStyle: 'font-serif tracking-widest' },
    { name: 'S L S', sub: 'DUBAI', fontStyle: 'font-serif tracking-widest' },
    { name: 'NOBU', sub: 'HOTELS', fontStyle: 'font-serif italic' },
    { name: 'EMAAR', sub: '', fontStyle: 'font-serif tracking-wider' },
    { name: 'W', sub: 'DUBAI THE PALM', fontStyle: 'font-sans font-extrabold text-xl' },
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
              className="flex flex-col items-center justify-center p-2 opacity-85 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <span className={`text-sm sm:text-base text-neutral-900 tracking-wider font-semibold ${brand.fontStyle}`}>
                {brand.name}
              </span>
              {brand.sub && (
                <span className="text-[7.5px] uppercase tracking-[0.25em] text-neutral-600 font-medium mt-0.5">
                  {brand.sub}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
