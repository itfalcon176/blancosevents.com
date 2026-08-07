'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mic2,
  Guitar,
  PersonStanding,
  Disc3,
  Ship,
  Sparkles,
  Palette,
  Ellipsis,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

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

interface ServicesPageContentProps {
  onOpenInquiryModal?: () => void;
}

export const ServicesPageContent: React.FC<ServicesPageContentProps> = ({ onOpenInquiryModal }) => {
  const mainServices = [
    {
      id: 'weddings',
      title: 'WEDDINGS & ENGAGEMENTS',
      description: 'Luxury weddings and engagements designed with elegance, romance and unforgettable moments.',
      image: '/blancosevents-image-home/wedding.webp',
      icon: LuxuryWeddingRingsIcon,
      buttonText: 'EXPLORE WEDDINGS',
      href: '/services/weddings-engagements',
    },
    {
      id: 'private',
      title: 'PRIVATE CELEBRATIONS',
      description: 'Birthdays, anniversaries, proposals and special occasions that deserve to be extraordinary.',
      image: '/blancosevents-image-home/private.webp',
      icon: LuxuryCakeIcon,
      buttonText: 'EXPLORE CELEBRATIONS',
      href: '/services/private-celebrations',
    },
    {
      id: 'corporate',
      title: 'CORPORATE EVENTS',
      description: 'Product launches, conferences, gala dinners and brand activations that make an impact.',
      image: '/blancosevents-image-home/coorporate.webp',
      icon: LuxuryBuildingIcon,
      buttonText: 'EXPLORE CORPORATE',
      href: '/services/corporate-brand-events',
    },
    {
      id: 'venues',
      title: 'HOTELS, RESTAURANTS & VENUES',
      description: 'Event styling and management that elevates guest experiences and enhances your brand.',
      image: '/blancosevents-image-home/hotel.webp',
      icon: LuxuryClocheIcon,
      buttonText: 'EXPLORE HOSPITALITY',
      href: '/services/hotels-restaurants-venues',
    },
  ];

  const addOns = [
    { name: 'SINGERS', desc: 'Live vocal performances', icon: Mic2 },
    { name: 'MUSICIANS', desc: 'Bands, string quartets, soloists & more', icon: Guitar },
    { name: 'DANCERS', desc: 'Professional dancers & entertainment', icon: PersonStanding },
    { name: 'DJS', desc: 'DJs & sound experts for the perfect vibe', icon: Disc3 },
    { name: 'YACHTS', desc: 'Luxury yachts & boats for unforgettable celebrations', icon: Ship },
    { name: 'FIREWORKS', desc: 'Spectacular fireworks & special effects', icon: Sparkles },
    { name: 'ARTISTS', desc: 'Live painters, calligraphers & creative artists', icon: Palette },
    { name: '& MORE', desc: 'Anything you can imagine, we can arrange.', icon: Ellipsis },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#222222]">
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: Services Header & 4 Cards Grid            */}
      {/* ---------------------------------------------------- */}
      <section id="services" className="pt-[30px] pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-[1550px] mx-auto">
        {/* Decorative Top Subheader */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3.5 mb-2.5">
            <span className="h-[1px] w-14 sm:w-20 bg-[#B88E3E]/70"></span>
            <span className="text-xs font-semibold tracking-[0.35em] uppercase text-[#B88E3E]">
              OUR SERVICES
            </span>
            <span className="h-[1px] w-14 sm:w-20 bg-[#B88E3E]/70"></span>
          </div>

          {/* Flourish Ornament */}
          <div className="flex justify-center mb-3">
            <svg viewBox="0 0 200 12" fill="none" className="w-48 sm:w-60 h-3">
              <line x1="0" y1="6" x2="92" y2="6" stroke="#B88E3E" strokeWidth="1" strokeOpacity="0.75" />
              <circle cx="93.5" cy="6" r="1.2" fill="#B88E3E" />
              <path d="M100 2L104 6L100 10L96 6Z" fill="#B88E3E" />
              <circle cx="106.5" cy="6" r="1.2" fill="#B88E3E" />
              <line x1="108" y1="6" x2="200" y2="6" stroke="#B88E3E" strokeWidth="1" strokeOpacity="0.75" />
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif text-[#1C1C1C] tracking-tight font-normal mb-3.5 leading-tight text-center">
            Bespoke Events. Beautifully <span className="text-[#B88E3E]">Delivered.</span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-xs sm:text-sm text-[#4A4A4A] max-w-2xl mx-auto text-center font-medium leading-relaxed">
            From intimate celebrations to grand productions, we design and manage exceptional events tailored to your vision, style and budget.
          </p>
        </div>

        {/* 4 Cards Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mt-8">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col bg-[#08080A] rounded-sm overflow-visible border border-[#C5A059]/30 hover:border-[#D4AF37] transition-all duration-500 shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-neutral-900 rounded-t-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-108 transition-transform duration-700 brightness-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Circular Badge Icon - outside image container for proper z-index */}
                <div className="absolute top-[212px] left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-[#08080A] border-[1.5px] border-[#C8A46A] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-300 z-50">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Card Text Content */}
                <div className="pt-10 pb-7 px-5 flex flex-col items-center text-center flex-grow bg-[#08080A] rounded-b-sm">
                  <h2 className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-[#C5A059] uppercase mb-3 leading-snug">
                    {service.title}
                  </h2>

                  <p className="text-xs text-neutral-300 font-normal leading-relaxed mb-7 flex-grow max-w-[250px]">
                    {service.description}
                  </p>

                  {/* Explore Button / Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-[10.5px] font-bold tracking-[0.2em] text-[#C5A059] hover:text-[#F3E5AB] transition-colors uppercase group/link"
                  >
                    <span>{service.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: Exclusive Add-Ons Banner                 */}
      {/* ---------------------------------------------------- */}
      <section className="bg-[#FAF3EA] border-y border-[#E8DFC5]/80 py-10 px-4 sm:px-6 lg:px-10 w-full">
        <div className="max-w-[1550px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-0 items-stretch">
          {/* Left Column: Title & Action Button */}
          <div className="lg:w-[28%] flex flex-col justify-center items-start text-left pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-[#E8DFC5] pb-6 lg:pb-0">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B88E3E] uppercase mb-1">
              EXCLUSIVE ADD-ONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-normal mb-3 leading-tight">
              Extraordinary Experiences
            </h2>
            <p className="text-xs sm:text-[13px] text-[#4A4A4A] leading-relaxed mb-6 max-w-sm font-medium">
              Through our trusted network of partners, we can bring any vision to life with world-class talent and unique experiences.
            </p>

            <Link
              href="/#contact"
              className="bg-black hover:bg-[#B88E3E] text-[#D4AF37] hover:text-black border border-[#D4AF37]/50 px-5 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 group shadow-md"
            >
              <span>SEE ALL EXPERIENCES</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: 8 Add-On Category Grid with Vertical Dividers */}
          <div className="lg:w-[72%] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DFC5] items-stretch text-center">
            {addOns.map((item, idx) => {
              const AddOnIcon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center justify-center px-2 py-4 space-y-2 text-center h-full">
                  {/* Icon Badge */}
                  <div className="w-11 h-11 rounded-full bg-[#F3EAD9] flex items-center justify-center text-[#B89052] mb-1 flex-shrink-0">
                    <AddOnIcon className="w-[28px] h-[28px]" strokeWidth={1.5} />
                  </div>

                  {/* Perfectly Level Aligned Title */}
                  <div className="h-7 flex items-center justify-center w-full">
                    <h3 className="text-[11px] sm:text-xs font-bold tracking-[0.15em] text-[#2C2C2C] uppercase text-center leading-tight">
                      {item.name}
                    </h3>
                  </div>

                  {/* Subtitle Paragraph */}
                  <p className="text-[10.5px] text-[#666666] leading-snug font-medium max-w-[130px] text-center">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: Bottom Dark CTA Banner                    */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#08080A] text-white py-8 px-6 sm:px-10 lg:px-12 border-t border-[#D4AF37]/30">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('/dark-rose-bg.png')" }}
        />

        <div className="relative max-w-[1550px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Left Title with Icon */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full border border-[#C5A059]/60 flex items-center justify-center text-[#C5A059] flex-shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-serif text-white font-normal whitespace-nowrap">
              Have something special in mind?
            </h2>
          </div>

          {/* Center Message */}
          <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-md">
            If you can imagine it, we'll tell you how we can make it happen.
          </p>

          {/* Right Action Button */}
          <button
            onClick={onOpenInquiryModal || (() => { window.location.href = '/contact'; })}
            className="bg-[#C5A059] hover:bg-[#D4AF37] text-black px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 shadow-lg whitespace-nowrap"
          >
            <span>TELL US YOUR VISION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
