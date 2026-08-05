'use client';

import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PortfolioSection: React.FC = () => {
  const allPortfolioItems = [
    {
      title: 'Grand Floral Wedding Aisle',
      category: 'Weddings',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Candlelit Banquet Setup',
      category: 'Private Parties',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Crystal Chandelier Gala',
      category: 'Corporate Events',
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Luxury Floral Dining',
      category: 'Private Celebrations',
      url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Outdoor Resort Gala',
      category: 'Grand Celebrations',
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Royal Engagement Soirée',
      category: 'Engagements',
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'VIP Lounge Experience',
      category: 'Hospitality',
      url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Opulent Stage Lighting',
      category: 'Gala Events',
      url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Luxury Dining Terrace',
      category: 'Private Parties',
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const allTestimonials = [
    {
      quote:
        'Bespoke & Co. transformed our wedding dreams into reality. Every detail was perfect, and our guests are still talking about it!',
      name: 'Ayesha & Hamza',
      location: 'Atlantis The Palm, Dubai',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    },
    {
      quote:
        'Professional, creative and an absolute pleasure to work with. Our product launch was a huge success thanks to them!',
      name: 'Mark Thompson',
      location: 'Marketing Director, Tech Global',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    },
    {
      quote:
        'From décor to entertainment, everything was beyond our expectations. Simply the best!',
      name: 'Sarah K.',
      location: 'Event Manager, FIVE Palm Jumeirah',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    },
    {
      quote:
        'The attention to detail and luxury execution surpassed all our high expectations for our anniversary gala.',
      name: 'David & Victoria',
      location: 'Private Villa, Emirates Hills',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    },
    {
      quote:
        'Flawless coordination, world-class hospitality and stunning design. We could not have asked for a better event team.',
      name: 'Elena Rostova',
      location: 'Luxury Brand Ambassador, Dubai',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    },
    {
      quote:
        'Creating our brand showcase with Blanco’s Events was an absolute masterpiece experience.',
      name: 'Omar Al-Mansoor',
      location: 'Founder, Prestige Living',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop',
    },
  ];

  // 1-by-1 Single Slide Movement States
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const maxPortfolioIdx = allPortfolioItems.length - 5;
  const maxTestimonialIdx = allTestimonials.length - 3;

  // Single Slide Movement Controls
  const prevPortfolio = () => {
    setPortfolioIndex((prev) => (prev <= 0 ? maxPortfolioIdx : prev - 1));
  };
  const nextPortfolio = () => {
    setPortfolioIndex((prev) => (prev >= maxPortfolioIdx ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev <= 0 ? maxTestimonialIdx : prev - 1));
  };
  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev >= maxTestimonialIdx ? 0 : prev + 1));
  };

  const visiblePortfolio = allPortfolioItems.slice(
    portfolioIndex,
    portfolioIndex + 5
  );

  const visibleTestimonials = allTestimonials.slice(
    testimonialIndex,
    testimonialIndex + 3
  );

  return (
    <section id="portfolio" className="py-16 bg-[#FAF8F5] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* ================= TOP HALF: OUR PORTFOLIO ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-6">
          <div>
            {/* Decorative heading with side lines + diamond */}
            <div className="flex items-center gap-4 sm:gap-6 mb-2">
              <div className="h-px w-16 sm:w-24 bg-[#C5A059]/40" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#C5A059]">
                OUR PORTFOLIO
              </p>
              <div className="h-px w-16 sm:w-24 bg-[#C5A059]/40" />
            </div>
            <div className="flex items-center gap-0 mb-3">
              <div className="h-px w-12 sm:w-16 bg-[#C5A059]/30" />
              <div className="w-2.5 h-2.5 rotate-45 border border-[#C5A059] bg-[#C5A059]/20 mx-2" />
              <div className="h-px w-12 sm:w-16 bg-[#C5A059]/30" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-black tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Creating Moments That Last Forever.
            </h2>
          </div>

          {/* Top Right Controls */}
          <div className="flex items-center space-x-3">
            <a
              href="#contact"
              className="px-5 py-2.5 border border-[#C5A059] text-neutral-800 hover:text-black hover:bg-[#C5A059]/10 transition-colors text-xs font-semibold tracking-[0.18em] uppercase rounded-sm flex items-center"
            >
              <span>VIEW FULL PORTFOLIO</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#C5A059]" />
            </a>

            <div className="flex items-center space-x-2">
              <button
                onClick={prevPortfolio}
                aria-label="Previous Portfolio"
                className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-[#C5A059] hover:text-[#C5A059] active:scale-95 transition-all bg-white shadow-sm cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextPortfolio}
                aria-label="Next Portfolio"
                className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-[#C5A059] hover:text-[#C5A059] active:scale-95 transition-all bg-white shadow-sm cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Cards Grid - 1-by-1 Single Slide Step Movement */}
        <div className="mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={portfolioIndex}
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.9 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {visiblePortfolio.map((item, index) => (
                <div
                  key={item.title + index}
                  className="group relative h-64 rounded-sm overflow-hidden shadow-md cursor-pointer bg-neutral-900"
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-serif text-white font-medium">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= BOTTOM HALF: TESTIMONIALS (Reduced Top Space) ================= */}
        <div className="relative pt-2">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-neutral-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Kind Words, Beautiful Memories.
            </h3>
            <div className="w-12 h-[2px] bg-[#C5A059] mx-auto mt-2.5 rounded-full" />
          </div>

          {/* Testimonial Buttons */}
          <button
            onClick={prevTestimonial}
            aria-label="Previous Testimonial"
            className="absolute -left-3 top-1/2 transform -translate-y-1/2 hidden md:flex w-10 h-10 rounded-full border border-neutral-300 bg-white items-center justify-center text-neutral-700 hover:border-[#C5A059] hover:text-[#C5A059] active:scale-95 transition-all shadow-md z-30 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            aria-label="Next Testimonial"
            className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:flex w-10 h-10 rounded-full border border-neutral-300 bg-white items-center justify-center text-neutral-700 hover:border-[#C5A059] hover:text-[#C5A059] active:scale-95 transition-all shadow-md z-30 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 3 Cards Grid - 1-by-1 Single Slide Movement */}
          <div className="px-0 md:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.9 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {visibleTestimonials.map((t, index) => (
                  <div
                    key={t.name + index}
                    className="bg-white p-7 rounded-sm shadow-sm border border-neutral-200/80 flex flex-col justify-between relative group hover:shadow-md transition-shadow"
                  >
                    {/* Big Gold Quote Mark */}
                    <div className="text-5xl font-serif text-[#C5A059] leading-none mb-2 font-bold select-none">
                      “
                    </div>

                    {/* Quote Text */}
                    <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed mb-8 flex-grow">
                      {t.quote}
                    </p>

                    {/* Client Avatar & Name */}
                    <div className="flex items-center space-x-3.5 pt-4 border-t border-neutral-100">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-11 h-11 rounded-full object-cover border border-[#C5A059]/40"
                      />
                      <div>
                        <h5 className="text-xs font-bold text-neutral-900 tracking-wide">
                          – {t.name}
                        </h5>
                        <p className="text-[11px] text-neutral-500 italic font-light">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
