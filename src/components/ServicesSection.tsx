'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'weddings',
      title: 'WEDDINGS &\nENGAGEMENTS',
      description:
        'Timeless moments, elegant design and flawless execution for your most precious celebrations.',
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
      // Transparent Gold Solitaire Ring Emblem Image
      iconElement: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]">
          <defs>
            <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF0D7" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9E7D3B" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="24" r="10" stroke="url(#goldRingGrad)" strokeWidth="2.2" fill="none" />
          <path d="M15 14L20 8L25 14H15Z" fill="url(#goldRingGrad)" />
          <path d="M17 14L20 9.5L23 14" stroke="#000" strokeWidth="0.8" fill="none" />
        </svg>
      ),
    },
    {
      id: 'private',
      title: 'PRIVATE\nCELEBRATIONS',
      description:
        'Birthdays, anniversaries, proposals & intimate gatherings made truly unforgettable.',
      image:
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
      // Transparent Gold Champagne Flutes Emblem Image
      iconElement: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]">
          <defs>
            <linearGradient id="goldGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF0D7" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9E7D3B" />
            </linearGradient>
          </defs>
          <path d="M12 8L15 20H19L22 8H12Z" stroke="url(#goldGlassGrad)" strokeWidth="2.2" fill="none" />
          <path d="M17 20V30M13 30H21" stroke="url(#goldGlassGrad)" strokeWidth="2.2" />
          <path d="M22 10L27 20H24" stroke="url(#goldGlassGrad)" strokeWidth="2" opacity="0.8" fill="none" />
          <circle cx="14" cy="6" r="1.2" fill="url(#goldGlassGrad)" />
          <circle cx="23" cy="6.5" r="1.2" fill="url(#goldGlassGrad)" />
        </svg>
      ),
    },
    {
      id: 'corporate',
      title: 'CORPORATE &\nBRAND EVENTS',
      description:
        'Polished, impactful, and creative events that elevate your brand.',
      image:
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop',
      // Transparent Gold Stage & Crown Emblem Image
      iconElement: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]">
          <defs>
            <linearGradient id="goldCrownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF0D7" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9E7D3B" />
            </linearGradient>
          </defs>
          <path d="M10 28H30M13 28V18L20 12L27 18V28" stroke="url(#goldCrownGrad)" strokeWidth="2.2" fill="none" />
          <circle cx="20" cy="20" r="3.2" fill="url(#goldCrownGrad)" />
          <path d="M9 28L20 21L31 28" stroke="url(#goldCrownGrad)" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      id: 'venues',
      title: 'HOTELS, RESTAURANTS\n& VENUES',
      description:
        'Curating & managing exceptional events in stunning spaces.',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
      // Transparent Gold Food Cloche Dome Emblem Image
      iconElement: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]">
          <defs>
            <linearGradient id="goldDomeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF0D7" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9E7D3B" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="10" r="2" fill="url(#goldDomeGrad)" />
          <path d="M9 25C9 17 14 12 20 12C26 12 31 17 31 25H9Z" stroke="url(#goldDomeGrad)" strokeWidth="2.2" fill="none" />
          <path d="M6 28H34" stroke="url(#goldDomeGrad)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#C5A059] mb-2.5">
            WHAT WE OFFER
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Extraordinary Events. Perfectly Crafted.
          </h2>
        </div>

        {/* 4 Cards Grid - overflow visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col bg-black border border-[#C5A059]/40 rounded-sm overflow-visible hover:border-[#D4AF37] transition-all duration-500 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden rounded-t-sm bg-neutral-900">
                <img
                  src={service.image}
                  alt={service.title.replace('\n', ' ')}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 brightness-105 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Circular Gold Badge Centered & Unclipped */}
              <div className="absolute top-[198px] left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-black border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.9)] z-30 group-hover:scale-110 transition-transform duration-300">
                {service.iconElement}
              </div>

              {/* Card Text Body */}
              <div className="pt-11 pb-8 px-5 flex flex-col items-center text-center flex-grow bg-black rounded-b-sm">
                {/* Title */}
                <h3 className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#D4AF37] mb-3 uppercase leading-snug whitespace-pre-line">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-300 font-light leading-relaxed mb-7 flex-grow max-w-[240px]">
                  {service.description}
                </p>

                {/* Discover More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-[10.5px] font-bold tracking-[0.22em] text-[#C5A059] hover:text-[#F3E5AB] transition-colors uppercase group/link"
                >
                  <span>DISCOVER MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
