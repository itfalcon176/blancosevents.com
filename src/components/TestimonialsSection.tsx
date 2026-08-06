'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'Bespoke & Co. transformed our wedding dreams into reality. Every detail was perfect, and our guests are still talking about it!',
      author: 'Ayesha & Hamza',
      details: 'Atlantis The Palm, Dubai',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 2,
      quote:
        'Professional, creative and an absolute pleasure to work with. Our product launch was a huge success thanks to them!',
      author: 'Mark Thompson',
      details: 'Marketing Director, Tech Global',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 3,
      quote:
        'From décor to entertainment, everything was beyond our expectations. Simply the best!',
      author: 'Sarah K.',
      details: 'Event Manager, FIVE Palm Jumeirah',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#0B0B0E] border-t border-[#D4AF37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
              Kind Words, Beautiful Memories.
            </h2>
          </div>

          <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonials 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-[#121217] border border-white/5 rounded-sm p-8 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-300 shadow-xl"
            >
              {/* Quote Mark */}
              <div>
                <Quote className="w-10 h-10 text-[#D4AF37] opacity-60 mb-4 rotate-180" />
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border border-[#D4AF37]/50"
                />
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wider">
                    – {item.author}
                  </h4>
                  <p className="text-[10px] text-neutral-400 font-light mt-0.5">
                    {item.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
