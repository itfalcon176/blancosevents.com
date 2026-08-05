'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Users, Globe, Gem } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      id: 'events',
      title: '250+',
      subtitle: 'Events Delivered',
      icon: PartyPopper,
    },
    {
      id: 'guests',
      title: '20,000+',
      subtitle: 'Delighted Guests',
      icon: Users,
    },
    {
      id: 'location',
      title: 'UAE & BEYOND',
      subtitle: 'Local Expertise. Global Reach',
      icon: Globe,
    },
    {
      id: 'bespoke',
      title: 'BESPOKE',
      subtitle: 'Tailored to Perfection',
      icon: Gem,
    },
  ];

  return (
    <section className="py-6 bg-black border-y border-[#C5A059]/25 shadow-2xl">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 items-stretch divide-y sm:divide-y-0 sm:divide-x divide-[#C5A059]/25">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-3 sm:space-x-3.5 px-3 lg:px-6 py-3"
              >
                <div className="text-[#C5A059] flex-shrink-0">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.3]" />
                </div>
                <div>
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-white font-normal tracking-wide whitespace-nowrap">
                    {stat.title}
                  </div>
                  <div className="text-[10px] sm:text-[11px] lg:text-xs text-neutral-300 font-sans tracking-wide whitespace-nowrap">
                    {stat.subtitle}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
