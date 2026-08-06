'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom Handcrafted Luxury SVG Outline Icons matching reference design exactly
const LuxuryWeddingRingsIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" stroke="#C8A46A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Small Crown above rings */}
    <path d="M15 11.5L17.5 14.5L20 11.5L22.5 14.5L25 11.5L24 16H16L15 11.5Z" strokeWidth="1.3" />
    <circle cx="15" cy="10.5" r="0.8" fill="#C8A46A" />
    <circle cx="20" cy="10.5" r="0.8" fill="#C8A46A" />
    <circle cx="25" cy="10.5" r="0.8" fill="#C8A46A" />
    {/* Two Interlocking Wedding Rings */}
    <circle cx="15.5" cy="24.5" r="7.5" strokeWidth="1.5" />
    <circle cx="24.5" cy="24.5" r="7.5" strokeWidth="1.5" />
    {/* Gem Facets */}
    <path d="M15.5 17L14.5 15H16.5L15.5 17Z" fill="#C8A46A" />
    <path d="M24.5 17L23.5 15H25.5L24.5 17Z" fill="#C8A46A" />
  </svg>
);

const LuxuryCakeIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" stroke="#C8A46A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Crown Topper */}
    <path d="M17.5 10L18.8 12L20 9.5L21.2 12L22.5 10L22 13.5H18L17.5 10Z" strokeWidth="1.2" />
    <circle cx="20" cy="8.5" r="0.7" fill="#C8A46A" />
    {/* Top Tier */}
    <path d="M15 13.5H25V18.5H15V13.5Z" strokeWidth="1.5" />
    {/* Middle Tier */}
    <path d="M12 18.5H28V24.5H12V18.5Z" strokeWidth="1.5" />
    {/* Bottom Tier */}
    <path d="M9 24.5H31V30.5H9V24.5Z" strokeWidth="1.5" />
    {/* Cake Stand / Base Plate */}
    <path d="M7 30.5H33" strokeWidth="1.8" />
    {/* Scalloped Icing Detail Lines */}
    <path d="M15 15.5C17.5 17 17.5 17 20 15.5C22.5 17 22.5 17 25 15.5" strokeWidth="1.1" />
    <path d="M12 20.5C16 22.5 16 22.5 20 20.5C24 22.5 24 22.5 28 20.5" strokeWidth="1.1" />
    <path d="M9 26.5C13.5 28.5 15.5 28.5 20 26.5C24.5 28.5 26.5 28.5 31 26.5" strokeWidth="1.1" />
  </svg>
);

const LuxuryBuildingIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" stroke="#C8A46A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Spire */}
    <path d="M20 6.5V11" strokeWidth="1.4" />
    {/* Main Tower Body */}
    <path d="M14 11H26V32H14V11Z" strokeWidth="1.5" />
    {/* Architectural Crown Cap */}
    <path d="M12 11H28" strokeWidth="1.4" />
    {/* Window Grid */}
    <path d="M17 15H19M21 15H23" strokeWidth="1.4" />
    <path d="M17 19H19M21 19H23" strokeWidth="1.4" />
    <path d="M17 23H19M21 23H23" strokeWidth="1.4" />
    <path d="M17 27H19M21 27H23" strokeWidth="1.4" />
    {/* Portal Doorway */}
    <path d="M18 32V29H22V32" strokeWidth="1.4" />
    {/* Side Buildings */}
    <path d="M9 18.5H14V32H9V18.5Z" strokeWidth="1.3" />
    <path d="M26 18.5H31V32H26V18.5Z" strokeWidth="1.3" />
    {/* Side Windows */}
    <path d="M11 22H12M11 26H12" strokeWidth="1.2" />
    <path d="M28 22H29M28 26H29" strokeWidth="1.2" />
    {/* Base Foundation */}
    <path d="M6 32H34" strokeWidth="1.8" />
  </svg>
);

const LuxuryClocheIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" stroke="#C8A46A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Top Knob Handle */}
    <circle cx="20" cy="10.5" r="2.2" strokeWidth="1.4" />
    <path d="M20 12.7V14.5" strokeWidth="1.4" />
    {/* Dome Body */}
    <path d="M9 27C9 18 13.8 14.5 20 14.5C26.2 15 31 18 31 27H9Z" strokeWidth="1.5" />
    {/* Specular Highlight Arc */}
    <path d="M12.5 24C14.5 19.5 17 17.5 20 17.5" strokeWidth="1.2" strokeOpacity="0.85" />
    {/* Base Tray Line */}
    <path d="M6 29H34" strokeWidth="2.2" />
    <path d="M8 29C8 31 10 32.2 12 32.2H28C30 32.2 32 31 32 29" strokeWidth="1.3" />
  </svg>
);

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'weddings',
      title: 'WEDDINGS &\nENGAGEMENTS',
      description:
        'Timeless moments, elegant design and flawless execution for your most precious celebrations.',
      image: '/blancosevents-image-home/wedding.webp',
      iconElement: <LuxuryWeddingRingsIcon className="w-7 h-7" />,
      href: '/services/weddings-engagements',
    },
    {
      id: 'private',
      title: 'PRIVATE\nCELEBRATIONS',
      description:
        'Birthdays, anniversaries, proposals & intimate gatherings made truly unforgettable.',
      image: '/blancosevents-image-home/private.webp',
      iconElement: <LuxuryCakeIcon className="w-7 h-7" />,
      href: '/services/private-celebrations',
    },
    {
      id: 'corporate',
      title: 'CORPORATE &\nBRAND EVENTS',
      description:
        'Polished, impactful, and creative events that elevate your brand.',
      image: '/blancosevents-image-home/coorporate.webp',
      iconElement: <LuxuryBuildingIcon className="w-7 h-7" />,
      href: '/services/corporate-brand-events',
    },
    {
      id: 'venues',
      title: 'HOTELS, RESTAURANTS\n& VENUES',
      description:
        'Curating & managing exceptional events in stunning spaces.',
      image: '/blancosevents-image-home/hotel.webp',
      iconElement: <LuxuryClocheIcon className="w-7 h-7" />,
      href: '/services/hotels-restaurants-venues',
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
              <div className="absolute top-[198px] left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-black border-[1.5px] border-[#C8A46A] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.9)] z-30 group-hover:scale-110 transition-transform duration-300">
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
                  href={service.href}
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
