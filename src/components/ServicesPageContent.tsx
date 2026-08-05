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

// Custom SVG Icons for Card Badges
const RingIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="14" r="5" />
    <circle cx="15" cy="14" r="5" />
    <path d="M12 9L12 4" />
    <path d="M10 5L12 3L14 5" />
  </svg>
);

const CakeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21V19C20 17.9 19.1 17 18 17H6C4.9 17 4 17.9 4 19V21" />
    <path d="M4 17V12C4 10.9 4.9 10 6 10H18C19.1 10 20 10.9 20 12V17" />
    <path d="M7 10V7C7 5.9 7.9 5 9 5H15C16.1 5 17 5.9 17 7V10" />
    <circle cx="12" cy="3" r="1" fill="currentColor" />
  </svg>
);

const BuildingIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 22V4C6 2.9 6.9 2 8 2H16C17.1 2 18 2.9 18 4V22" />
    <path d="M6 12H18" />
    <path d="M6 7H18" />
    <path d="M6 17H18" />
    <path d="M2 22H22" />
  </svg>
);

const ClocheIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 4C12 4 12 6 12 6" />
    <circle cx="12" cy="4" r="1" fill="currentColor" />
    <path d="M4 18C4 13 7.5 9 12 9C16.5 9 20 13 20 18H4Z" />
    <path d="M2 20H22" />
  </svg>
);

// Custom Dancer Icon
const DancerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6V13L16 20" />
    <path d="M12 13L8 20" />
    <path d="M7 9L12 8L17 9" />
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
      icon: RingIcon,
      buttonText: 'EXPLORE WEDDINGS',
      href: '/#contact',
    },
    {
      id: 'private',
      title: 'PRIVATE CELEBRATIONS',
      description: 'Birthdays, anniversaries, proposals and special occasions that deserve to be extraordinary.',
      image: '/blancosevents-image-home/private.webp',
      icon: CakeIcon,
      buttonText: 'EXPLORE CELEBRATIONS',
      href: '/#contact',
    },
    {
      id: 'corporate',
      title: 'CORPORATE EVENTS',
      description: 'Product launches, conferences, gala dinners and brand activations that make an impact.',
      image: '/blancosevents-image-home/coorporate.webp',
      icon: BuildingIcon,
      buttonText: 'EXPLORE CORPORATE',
      href: '/#contact',
    },
    {
      id: 'venues',
      title: 'HOTELS, RESTAURANTS & VENUES',
      description: 'Event styling and management that elevates guest experiences and enhances your brand.',
      image: '/blancosevents-image-home/hotel.webp',
      icon: ClocheIcon,
      buttonText: 'EXPLORE HOSPITALITY',
      href: '/#contact',
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
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1550px] mx-auto">
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
                className="group relative flex flex-col bg-[#08080A] rounded-sm overflow-hidden border border-[#C5A059]/30 hover:border-[#D4AF37] transition-all duration-500 shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-108 transition-transform duration-700 brightness-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-80" />

                  {/* Floating Circular Badge Icon */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-13 h-13 rounded-full bg-[#08080A] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-300 z-10">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="pt-9 pb-7 px-5 flex flex-col items-center text-center flex-grow bg-[#08080A]">
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
        <div className="max-w-[1550px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Title & Action Button */}
          <div className="lg:w-[28%] flex flex-col justify-center items-start text-left pr-0 lg:pr-4 border-b lg:border-b-0 lg:border-r border-[#E8DFC5] pb-6 lg:pb-0">
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
                <div key={idx} className="flex flex-col items-center justify-start px-2 py-4 space-y-2 text-center h-full">
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
            onClick={onOpenInquiryModal || (() => { window.location.href = '/#contact'; })}
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
