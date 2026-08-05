'use client';

import React, { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ───────────────────────────────────────────────────────────
   PORTFOLIO DATA
   ─────────────────────────────────────────────────────────── */
const categories = [
  'ALL EVENTS',
  'WEDDINGS',
  'PRIVATE CELEBRATIONS',
  'CORPORATE EVENTS',
  'HOTELS & RESTAURANTS',
  'BRAND ACTIVATIONS',
] as const;

type Category = (typeof categories)[number];

interface PortfolioItem {
  title: string;
  category: Category[];
  url: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Luxury Weddings',
    category: ['ALL EVENTS', 'WEDDINGS'],
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Elegant Table Settings',
    category: ['ALL EVENTS', 'WEDDINGS', 'PRIVATE CELEBRATIONS'],
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Corporate Events',
    category: ['ALL EVENTS', 'CORPORATE EVENTS'],
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Hotels & Venue Styling',
    category: ['ALL EVENTS', 'HOTELS & RESTAURANTS'],
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Birthday Celebrations',
    category: ['ALL EVENTS', 'PRIVATE CELEBRATIONS'],
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Engagements & Proposals',
    category: ['ALL EVENTS', 'WEDDINGS'],
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Brand Activations',
    category: ['ALL EVENTS', 'BRAND ACTIVATIONS', 'CORPORATE EVENTS'],
    url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Floral & Design Creations',
    category: ['ALL EVENTS', 'WEDDINGS', 'PRIVATE CELEBRATIONS', 'HOTELS & RESTAURANTS'],
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Gala Dinners',
    category: ['ALL EVENTS', 'CORPORATE EVENTS'],
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Luxury Private Dining',
    category: ['ALL EVENTS', 'PRIVATE CELEBRATIONS', 'HOTELS & RESTAURANTS'],
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Royal Reception',
    category: ['ALL EVENTS', 'WEDDINGS'],
    url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Exhibition & Launch Events',
    category: ['ALL EVENTS', 'BRAND ACTIVATIONS', 'CORPORATE EVENTS'],
    url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=800&auto=format&fit=crop',
  },
];

/* ───────────────────────────────────────────────────────────
   COMPONENT
   ─────────────────────────────────────────────────────────── */
export const PortfolioPageContent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL EVENTS');
  const [enquiryText, setEnquiryText] = useState('');
  const [enquirySent, setEnquirySent] = useState(false);

  const filteredItems =
    activeCategory === 'ALL EVENTS'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(activeCategory));

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryText.trim()) return;
    setEnquirySent(true);
    setTimeout(() => {
      setEnquirySent(false);
      setEnquiryText('');
    }, 3000);
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO + FILTER TABS + GRID
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-12">
          {/* ── Hero Header ── */}
          <div className="text-center mb-10 sm:mb-14">
            {/* Decorative heading with side lines + diamond */}
            <div className="flex items-center justify-center gap-3.5 mb-2.5">
              <span className="h-[1px] w-16 sm:w-24 bg-[#C5A059]/70"></span>
              <span className="text-xs lg:text-[11px] font-semibold tracking-[0.35em] uppercase text-[#C5A059]">
                OUR PORTFOLIO
              </span>
              <span className="h-[1px] w-16 sm:w-24 bg-[#C5A059]/70"></span>
            </div>

            {/* Flourish Ornament under OUR PORTFOLIO */}
            <div className="flex justify-center mb-3">
              <svg viewBox="0 0 200 12" fill="none" className="w-48 sm:w-64 h-3">
                <line x1="0" y1="6" x2="92" y2="6" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.75" />
                <circle cx="93.5" cy="6" r="1.2" fill="#C5A059" />
                <path d="M100 2L104 6L100 10L96 6Z" fill="#C5A059" />
                <circle cx="106.5" cy="6" r="1.2" fill="#C5A059" />
                <line x1="108" y1="6" x2="200" y2="6" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.75" />
              </svg>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif text-neutral-900 tracking-tight leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Moments Designed to{' '}
              <span
                className="not-italic"
                style={{
                  background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #B89230 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Inspire.
              </span>
            </h1>
            <p className="text-sm sm:text-[15px] text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
              Explore a selection of our luxury events across weddings, private celebrations,
              <br className="hidden sm:block" />
              corporate functions and hospitality experiences.
            </p>
          </div>

          {/* ── Category Filter Tabs ── */}
          <div className="sticky top-[52px] z-40 bg-[#FAF8F5] py-3 sm:py-4 -mx-5 sm:-mx-10 lg:-mx-12 px-5 sm:px-10 lg:px-12 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)] transition-shadow">
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-hide justify-start sm:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm border transition-all duration-300 cursor-pointer flex-shrink-0 ${
                    activeCategory === cat
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-md'
                      : 'bg-transparent text-neutral-600 border-neutral-300 hover:border-[#C5A059] hover:text-[#C5A059]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ── Portfolio Photo Grid ── */}
          <div className="mt-8 sm:mt-10"></div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative aspect-[4/3] sm:aspect-[3/4] rounded-sm overflow-hidden cursor-pointer bg-neutral-900 shadow-md"
                >
                  {/* Image */}
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Always-visible bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-16 pb-4 px-4">
                    <h3
                      className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-white"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Hover glow border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C5A059]/50 transition-all duration-500 rounded-sm pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── View Full Portfolio CTA ── */}
          <div className="flex justify-center mt-12 sm:mt-14">
            <a
              href="#contact"
              className="group inline-flex items-center px-7 py-3 border border-neutral-400 text-neutral-700 hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm"
            >
              <span>VIEW FULL PORTFOLIO</span>
              <ArrowRight className="w-4 h-4 ml-2.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — BOTTOM ENQUIRY BANNER (Matching screenshot exactly)
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-[#C5A059]/20">
        {/* Dark rose background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/dark-rose-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-12 py-4 sm:py-5">
          {/* ── Desktop: single compact row ── */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Left: Icon + Headline */}
            <div className="flex items-center gap-3.5 flex-shrink-0">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/50 flex items-center justify-center bg-black/50">
                <MessageCircle className="w-4 h-4 text-[#C5A059]" />
              </div>
              <h3
                className="text-lg font-serif text-white tracking-tight whitespace-nowrap"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Can we{' '}
                <span
                  className="not-italic"
                  style={{
                    background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #B89230 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  create
                </span>{' '}
                it?
              </h3>
            </div>

            {/* Thin vertical divider */}
            <div className="w-px h-10 bg-white/15 flex-shrink-0" />

            {/* Middle: Sub-text */}
            <div className="flex-shrink-0">
              <p className="text-[12px] text-neutral-300 font-light leading-snug">
                If you can imagine it,
                <br />
                we&apos;ll bring it to life.
              </p>
              <a
                href="/#contact"
                className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#C5A059] hover:text-[#D4AF37] transition-colors mt-0.5 inline-block"
              >
                TELL US YOUR VISION
              </a>
            </div>

            {/* Right: Inline Enquiry Form */}
            <form
              onSubmit={handleEnquirySubmit}
              className="flex-1 flex items-center gap-3 ml-auto"
            >
              <input
                type="text"
                value={enquiryText}
                onChange={(e) => setEnquiryText(e.target.value)}
                placeholder="Describe your dream event..."
                className="flex-1 px-4 py-2.5 bg-[#1a1a1a]/80 border border-white/10 rounded-sm text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] transition-colors"
              />
              <button
                type="submit"
                className="flex-shrink-0 px-5 py-2.5 bg-[#C5A059] hover:bg-[#D4AF37] text-black font-bold text-[10px] tracking-[0.18em] uppercase rounded-sm transition-all duration-300 flex items-center gap-2 shadow-lg cursor-pointer whitespace-nowrap"
              >
                <span>{enquirySent ? 'SENT!' : 'SEND ENQUIRY'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* ── Mobile: stacked layout ── */}
          <div className="flex lg:hidden flex-col items-center gap-5">
            {/* Icon + Headline */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/50 flex items-center justify-center bg-black/50">
                <MessageCircle className="w-4 h-4 text-[#C5A059]" />
              </div>
              <h3
                className="text-lg font-serif text-white tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Can we{' '}
                <span
                  className="not-italic"
                  style={{
                    background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #B89230 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  create
                </span>{' '}
                it?
              </h3>
            </div>

            {/* Sub-text */}
            <div className="text-center">
              <p className="text-xs text-neutral-300 font-light leading-snug">
                If you can imagine it, we&apos;ll bring it to life.
              </p>
              <a
                href="/#contact"
                className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#C5A059] hover:text-[#D4AF37] transition-colors mt-1 inline-block"
              >
                TELL US YOUR VISION
              </a>
            </div>

            {/* Form */}
            <form
              onSubmit={handleEnquirySubmit}
              className="flex items-center gap-2.5 w-full"
            >
              <input
                type="text"
                value={enquiryText}
                onChange={(e) => setEnquiryText(e.target.value)}
                placeholder="Describe your dream event..."
                className="flex-1 px-3.5 py-2.5 bg-[#1a1a1a]/80 border border-white/10 rounded-sm text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] transition-colors"
              />
              <button
                type="submit"
                className="flex-shrink-0 px-4 py-2.5 bg-[#C5A059] hover:bg-[#D4AF37] text-black font-bold text-[10px] tracking-[0.18em] uppercase rounded-sm transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>{enquirySent ? 'SENT!' : 'SEND ENQUIRY'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
