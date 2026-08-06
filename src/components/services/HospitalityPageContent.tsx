'use client';

import React from 'react';
import { ArrowRight, Sparkles, Hotel, ClipboardList, Palette, Compass } from 'lucide-react';

export const HospitalityPageContent: React.FC = () => {
  const offerings = [
    {
      title: 'Seasonal Lobby Styling',
      desc: 'lobby transformations, custom festive display installations, and grand entrance styling tailored to five-star standards.',
      icon: Hotel,
    },
    {
      title: 'Tabletop Curation',
      desc: 'Sourcing and styling custom luxury chargers, custom-made linens, candles, and bespoke centerpieces for dining outlets.',
      icon: Palette,
    },
    {
      title: 'Venue Openings & Galas',
      desc: 'Immersive pop-up booths, structural setup stages, and detailed guest flow coordination for grand opening nights.',
      icon: ClipboardList,
    },
    {
      title: 'Bespoke Brand Styling',
      desc: 'Ongoing creative brand styling services to keep your venue\'s atmosphere visually premium and Instagram-friendly.',
      icon: Compass,
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#222222] overflow-hidden">
      {/* ──────────────────────────────────────────────────────── */}
      {/* HERO SECTION: Background Image Layout                     */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-black min-h-[450px] lg:min-h-[520px] flex items-center border-b border-[#EADFC9]/50">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/portfolio-images/hotel.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent w-full lg:w-[60%]" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full text-white">
          <div className="max-w-2xl text-left space-y-4">
            <span className="text-xs font-semibold tracking-[0.35em] text-[#C5A059] uppercase block">
              Bespoke Hospitality
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-tight">
              Hotels, Restaurants <span className="text-[#C5A059]">& Venues</span>
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 font-light max-w-lg leading-relaxed">
              We design and coordinate grand opening setups, ongoing lobby styling, and signature tabletop curation to leave a lasting impact on your guests.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 2: Details & Content                             */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 lg:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#C5A059]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase">Luxury Spaces</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 font-normal leading-tight">
              Elevating Atmospheres to Inspire <span className="text-[#C5A059]">Unrivaled</span> Experiences
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              A luxury hotel lobby, dining room, or rooftop venue is a living space where guests expect premium sensory design. At Blanco\'s Events, we collaborate directly with property managers, hospitality groups, and restaurant designers to curate seasonal pop-ups, custom tabletop arrangements, and ongoing venue decorations.
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              Whether you are preparing for a VIP grand launch gala or want to redesign your dining outlet tabletop layout, our design division brings the absolute finest level of detail, sourcing unique pieces worldwide to match your brand\'s theme.
            </p>
          </div>

          {/* Right Showcase Image */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-sm overflow-hidden border border-[#E8DFC5]/60 shadow-lg bg-neutral-100">
            <img 
              src="/blancosevents-image-home/hotel.webp" 
              alt="Bespoke Lobby Styling Setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 3: Key Offerings Grid                            */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-y border-[#E8DFC5]/50 px-6 sm:px-10 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900">What We Offer</h2>
            <div className="w-12 h-[1.5px] bg-[#C5A059] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#FCFAF7] border border-[#E8DFC5]/50 p-6 rounded-sm space-y-4 hover:border-[#C5A059] hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                    <Icon className="w-5 h-5 stroke-[1.2]" />
                  </div>
                  <h3 className="text-sm font-bold tracking-[0.1em] text-neutral-900 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 4: Call to Action                                */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#08080A] text-white py-7 px-6 sm:px-10 lg:px-12">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{ backgroundImage: "url('/dark-rose-bg.png')" }}
        />
        <div className="relative max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
              READY TO STYLING YOUR VENUE?
            </span>
            <p className="text-xs text-neutral-300 font-light">
              Let\'s bring your absolute venue vision to reality.
            </p>
          </div>
          <a 
            href="/contact"
            className="bg-[#C5A059] hover:bg-[#B89230] text-white px-6 py-3 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            <span>START ENQUIRY</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
