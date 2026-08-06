'use client';

import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, MessageCircle, ArrowRight, Users, MapPin, Gem, Award, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TestimonialsPageContent: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'SOPHIA & MICHAEL',
      desc: 'Wedding at Atlantis The Royal',
      quote: "Blanca's Events turned our wedding into a fairytale. Every detail was more beautiful than we could have imagined. Our guests are still talking about it!",
      image: '/portfolio-images/Luxury Weddings.webp',
      avatar: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=200&auto=format&fit=crop',
      videoUrl: 'https://www.youtube-nocookie.com/embed/5T8Lcfn6w8I',
    },
    {
      id: 2,
      name: 'KARIM AL FAHIM',
      desc: 'Private Celebration',
      quote: 'From the initial concept to the final candle, everything was executed flawlessly. The team is creative, professional and an absolute pleasure to work with.',
      image: '/portfolio-images/private dinner.webp',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      videoUrl: 'https://www.youtube-nocookie.com/embed/G8D8kLwep2A',
    },
    {
      id: 3,
      name: 'LINA HADDAD',
      desc: 'Marketing Director, Tech Global',
      quote: 'They brought our brand vision to life in the most spectacular way. The event was a huge success and we received amazing feedback from our guests.',
      image: '/portfolio-images/Corporate Events.webp',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      videoUrl: 'https://www.youtube-nocookisde.com/embed/dQw4w9WgXcQ2',
    },
    {
      id: 4,
      name: 'JAMES WALKER',
      desc: 'General Manager, FIVE Palm Jumeirah',
      quote: 'The attention to detail, the floral design and the ambiance were beyond our expectations. Blanca and her team made the entire process so easy.',
      image: '/portfolio-images/reception.webp',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      videoUrl: 'https://www.youtube-nocookie.com/embed/S28X_KjT70Y',
    },
    {
      id: 5,
      name: 'YASMINE & OMAR',
      desc: 'Gala Dinner at Armani Hotel Dubai',
      quote: 'An extraordinary evening of elegance. The floral arrangements and lighting created an intimate, magical atmosphere that exceeded our wildest expectations.',
      image: '/portfolio-images/gala dinner.webp',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      videoUrl: 'https://www.youtube-nocookie.com/embed/5T8Lcfn6w8I',
    },
    {
      id: 6,
      name: 'CHARLOTTE & PIERRE',
      desc: 'Anniversary at One&Only The Palm',
      quote: 'Blanca and her team are master designers. The styling was sophisticated and captured our personalities perfectly. Thank you for a beautiful memory.',
      image: '/portfolio-images/proposal.webp',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      videoUrl: 'https://www.youtube-nocookie.com/embed/G8D8kLwep2A',
    },
    {
      id: 7,
      name: 'ELENA & VLADIMIR',
      desc: 'Milestone Birthday at Bulgari Resort',
      quote: 'The absolute pinnacle of luxury party styling. From the custom entrance pavilion to the table staging, every guest was in complete awe.',
      image: '/portfolio-images/birthday.webp',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 8,
      name: 'SARAH & THOMAS',
      desc: 'Bespoke Floral Showcase',
      quote: 'The floral installations were breathtaking works of art. Blanca has an unparalleled eye for color palettes and grand scale arrangements.',
      image: '/portfolio-images/floral.webp',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
      videoUrl: 'https://www.youtube-nocookie.com/embed/S28X_KjT70Y',
    },
  ];

  const brands = [
    { name: 'ATLANTIS', logo: '/blancosevents-image-home/icons/Atlantis.webp' },
    { name: 'ADDRESS', logo: '/blancosevents-image-home/icons/address.webp' },
    { name: 'RIXOS', logo: '/blancosevents-image-home/icons/rixos.webp' },
    { name: 'JUMEIRAH', logo: '/blancosevents-image-home/icons/jumeira.webp' },
    { name: 'FIVE', logo: '/blancosevents-image-home/icons/five.webp' },
    { name: 'EMAAR', logo: '/blancosevents-image-home/icons/emaar.webp' },
    { name: 'NOBU', logo: '/blancosevents-image-home/icons/nobu.webp' },
    { name: 'W HOTELS', logo: '/blancosevents-image-home/icons/W.webp' },
  ];

  const stats = [
    {
      id: 'events',
      title: '250+',
      subtitle: 'LUXURY EVENTS DELIVERED',
      icon: Award,
    },
    {
      id: 'guests',
      title: '20,000+',
      subtitle: 'HAPPY GUESTS',
      icon: Users,
    },
    {
      id: 'location',
      title: 'UAE & BEYOND',
      subtitle: 'LOCAL EXPERTISE, GLOBAL REACH',
      icon: MapPin,
    },
    {
      id: 'experience',
      title: '10+ YEARS',
      subtitle: 'OF EXPERIENCE & PASSION',
      icon: Gem,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="w-full bg-[#FAF8F5] text-[#222222] overflow-hidden">
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: Header Titles                             */}
      <section className="pt-[30px] pb-8 px-4 sm:px-6 lg:px-8 max-w-[1550px] mx-auto text-center">
        <div className="flex items-center justify-center gap-3.5 mb-2.5">
          <span className="h-[1px] w-14 sm:w-20 bg-[#B88E3E]/70"></span>
          <span className="text-xs font-semibold tracking-[0.35em] uppercase text-[#B88E3E]">
            TESTIMONIALS
          </span>
          <span className="h-[1px] w-14 sm:w-20 bg-[#B88E3E]/70"></span>
        </div>

        {/* Flourish Ornament */}
        <div className="flex justify-center mb-4">
          <svg viewBox="0 0 200 12" fill="none" className="w-48 sm:w-60 h-3">
            <line x1="0" y1="6" x2="92" y2="6" stroke="#B88E3E" strokeWidth="1" strokeOpacity="0.75" />
            <circle cx="93.5" cy="6" r="1.2" fill="#B88E3E" />
            <path d="M100 2L104 6L100 10L96 6Z" fill="#B88E3E" />
            <circle cx="106.5" cy="6" r="1.2" fill="#B88E3E" />
            <line x1="108" y1="6" x2="200" y2="6" stroke="#B88E3E" strokeWidth="1" strokeOpacity="0.75" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1C1C] font-normal leading-tight mb-4">
          Kind Words. Beautiful <span className="text-[#B89052]">Memories.</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#4A4A4A] max-w-2xl mx-auto font-medium leading-relaxed">
          We are grateful to our amazing clients for trusting us to create unforgettable moments that last a lifetime.
        </p>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: Interactive Testimonials Slider          */}
      {/* ---------------------------------------------------- */}
      <section className="pb-16 px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto">
        <div className="relative flex items-center justify-center py-4 w-full">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 lg:-left-6 z-10 w-11 h-11 rounded-full border border-[#B89052]/40 bg-white flex items-center justify-center text-[#B89052] transition-all duration-300 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-[#FAF8F5] hover:scale-105 shadow-md'
              }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Area */}
          <div className="w-full overflow-hidden px-12 lg:px-4">
            <div
              className="flex transition-transform duration-500 ease-out -mx-3"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3 flex"
                >
                  <div className="bg-white border border-[#E8DFC5]/60 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col w-full rounded-sm overflow-hidden group hover:border-[#B89052]/60 hover:shadow-lg transition-all duration-300">

                    {/* Card Thumbnail Top half */}
                    <div
                      onClick={() => setSelectedVideo(item.videoUrl)}
                      className="relative h-52 w-full overflow-hidden bg-neutral-900 cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-95"
                      />
                      {/* Dark gradient overlay & Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-90 group-hover:bg-black/40 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-full border border-white/40 bg-black/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                          <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content Bottom half */}
                    <div className="p-5 bg-[#FCFAF7] flex flex-col flex-grow justify-between space-y-4 text-left items-start">
                      <div className="flex flex-col items-start text-left space-y-1 w-full">
                        {/* Golden Custom Double Quotes */}
                        <span className="text-[46px] font-serif text-[#B89052]/85 leading-none select-none -ml-3.5 block h-7 mb-2">“</span>

                        {/* Quote Text */}
                        <p className="text-[13px] text-[#444444] leading-relaxed font-normal text-left w-full">
                          {item.quote}
                        </p>
                      </div>

                      {/* Divider Line */}
                      <div className="w-full h-[1px] bg-[#E8DFC5]/45" />

                      {/* User Profile */}
                      <div className="flex items-center space-x-3.5 w-full">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-10 h-10 rounded-full object-cover border border-[#B89052]/40 flex-shrink-0"
                        />
                        <div className="flex flex-col min-w-0">
                          <h4 className="text-[10.5px] font-bold tracking-[0.12em] text-[#B89052] uppercase leading-tight truncate">
                            {item.name}
                          </h4>
                          <p className="text-[9.5px] text-[#666666] font-normal leading-snug mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 lg:-right-6 z-10 w-11 h-11 rounded-full border border-[#B89052]/40 bg-white flex items-center justify-center text-[#B89052] transition-all duration-300 ${currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-[#FAF8F5] hover:scale-105 shadow-md'
              }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: Trusted Brands Banner                     */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 bg-white border-y border-[#E8DFC5]/50 overflow-hidden">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Title with Lines */}
          <div className="flex items-center justify-center gap-3.5 mb-10 w-full">
            <span className="h-[1px] w-14 sm:w-20 bg-[#B88E3E]/50"></span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#B88E3E] uppercase whitespace-nowrap">
              TRUSTED BY LEADING BRANDS & VENUES
            </span>
            <span className="h-[1px] w-14 sm:w-20 bg-[#B88E3E]/50"></span>
          </div>

          {/* Brand Logos Infinite Scroll Marquee (Desktop & Mobile) */}
          <div className="relative w-full overflow-hidden py-1">
            {/* Edge fade gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee space-x-12 sm:space-x-20 items-center py-2">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center w-28 sm:w-36 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-9 sm:h-12 object-contain filter brightness-95"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 4: Key Stats Bar                             */}
      {/* ---------------------------------------------------- */}
      <section className="py-8 bg-[#FAF6F0] border-b border-[#E8DFC5]/60">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-stretch divide-y sm:divide-y-0 sm:divide-x divide-[#E8DFC5]/80">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-center space-x-3.5 py-4 px-4"
                >
                  <div className="text-[#B89052] flex-shrink-0">
                    <Icon className="w-8 h-8 stroke-[1.2]" />
                  </div>
                  <div className="text-left">
                    <div className="text-base sm:text-lg lg:text-xl font-serif text-[#222222] font-normal tracking-wide leading-tight">
                      {stat.title}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-[#666666] font-bold tracking-wider uppercase mt-0.5">
                      {stat.subtitle}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 5: Bottom Dark CTA Banner                    */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#08080A] text-white py-12 px-6 sm:px-10 lg:px-12 border-t border-[#D4AF37]/30">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{ backgroundImage: "url('/dark-rose-bg.png')" }}
        />

        <div className="relative max-w-[1550px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 lg:gap-20 py-2 text-left">
          {/* Left Block: Icon + Heading */}
          <div className="flex flex-row items-center gap-5 flex-shrink-0">
            <div className="w-16 h-16 rounded-full border border-[#C5A059]/60 flex items-center justify-center text-[#C5A059] flex-shrink-0">
              <MessageCircle className="w-7 h-7 stroke-[1.2]" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-serif text-white font-normal leading-snug">
              Ready to create <br className="hidden sm:inline" />
              your <span className="text-[#C5A059]">unforgettable</span> event?
            </h2>
          </div>

          {/* Divider & Center Text */}
          <div className="flex flex-col sm:flex-row items-center gap-8 flex-shrink-0 w-full md:w-auto">
            {/* Vertical Divider (desktop only) */}
            <div className="hidden md:block w-[1px] h-14 bg-[#C5A059]/25 self-center" />

            {/* Center Content */}
            <div className="text-left font-sans text-sm lg:text-[15px] leading-relaxed text-neutral-300">
              <p className="text-white font-semibold mb-0.5">Let's bring your vision to life.</p>
              <p className="text-neutral-400">Our team is here to listen, guide</p>
              <p className="text-neutral-400">and make it happen.</p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-end">
            <button
              onClick={() => { window.location.href = '/#contact'; }}
              className="w-full md:w-auto bg-[#C5A059] hover:bg-[#D4AF37] text-black px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg whitespace-nowrap"
            >
              <span>PLAN MY EVENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 6: Video Player Modal Popup                  */}
      {/* ---------------------------------------------------- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#0F0F12] border border-[#D4AF37]/50 rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video iframe player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={`${selectedVideo}?autoplay=1`}
                  title="Blanca's Events Client Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
