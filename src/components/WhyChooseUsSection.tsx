'use client';

import React from 'react';
import {
  ArrowRight,
  Flower2,
  Guitar,
  UtensilsCrossed,
  Sparkles,
  Hotel,
  Camera,
  MicVocal,
  Ellipsis,
} from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseUsSection: React.FC = () => {
  const emblems = [
    {
      id: 'flowers',
      name: 'FLOWERS',
      icon: <Flower2 className="w-7 h-7 text-[#C5A059]" />,
    },
    {
      id: 'entertainment',
      name: 'ENTERTAINMENT',
      icon: <Guitar className="w-7 h-7 text-[#C5A059]" />,
    },
    {
      id: 'catering',
      name: 'CATERING',
      icon: <UtensilsCrossed className="w-7 h-7 text-[#C5A059]" />,
    },
    {
      id: 'decor',
      name: 'DÉCOR',
      icon: <Sparkles className="w-7 h-7 text-[#C5A059]" />,
    },
    {
      id: 'hospitality',
      name: 'HOSPITALITY',
      icon: <Hotel className="w-7 h-7 text-[#C5A059]" />,
    },
    {
      id: 'photography',
      name: 'PHOTOGRAPHY',
      icon: <Camera className="w-7 h-7 text-[#C5A059]" />,
    },
    {
      id: 'artists',
      name: 'ARTISTS',
      icon: <MicVocal className="w-7 h-7 text-[#C5A059]" />,
    },
    {
      id: 'more',
      name: 'MORE',
      icon: <Ellipsis className="w-7 h-7 text-[#C5A059]" />,
    },
  ];

  return (
    <section id="whyus" className="py-20 bg-[#FAF8F5] text-neutral-900 border-y border-neutral-200">
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

          {/* Right Column: 8 Customizable Icon Emblems Grid + Quote Banner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col justify-between h-full space-y-10"
          >
            {/* 8 Emblem Icons Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center items-center">
              {emblems.map((emblem) => (
                <div
                  key={emblem.id}
                  className="flex flex-col items-center justify-center p-3 group hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-2.5 h-12 w-12 rounded-full bg-[#F3EAD9]/60 border border-[#C5A059]/30 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-black group-hover:border-[#C5A059] transition-all duration-300 shadow-sm">
                    {React.cloneElement(emblem.icon, {
                      className: 'w-6 h-6 text-[#C5A059] group-hover:text-black transition-colors',
                    })}
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
