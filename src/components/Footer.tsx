'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Instagram,
  Facebook,
  Twitter,
  Pin,
  ArrowRight,
} from 'lucide-react';

interface FooterProps {
  onOpenInquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-[#D4AF37]/30 relative pt-12 pb-8 overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Equal Height Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch pb-10 border-b border-white/10">
          
          {/* Column 1: Brand Logo & Description & Socials (lg:col-span-3) */}
          <div className="lg:col-span-3 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 flex flex-col justify-between h-full items-start text-left">
            <div className="w-full">
              <Link href="/" className="mb-3 w-full flex justify-start items-start">
                <Logo variant="footer" align="left" className="w-full items-start" />
              </Link>
              <p className="text-[11.5px] text-neutral-300 font-light leading-relaxed mb-4 max-w-xs">
                Luxury event planning, design & management for unforgettable moments and timeless memories.
              </p>
            </div>
            {/* 4 Circular Gold Line Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all shadow-md"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all shadow-md"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all shadow-md"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all shadow-md"
              >
                <Pin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: QUICK LINKS (lg:col-span-2) */}
          <div className="lg:col-span-2 pl-0 lg:pl-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.22em] text-[#C5A059] uppercase mb-3">
                QUICK LINKS
              </h4>
              <ul className="space-y-2 text-[11.5px] text-neutral-300 font-light">
                <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link></li>
                <li><Link href="/portfolio" className="hover:text-[#D4AF37] transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: SERVICES (lg:col-span-2) */}
          <div className="lg:col-span-2 pl-0 lg:pl-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.22em] text-[#C5A059] uppercase mb-3">
                SERVICES
              </h4>
              <ul className="space-y-2 text-[11.5px] text-neutral-300 font-light">
                <li><Link href="/services/weddings-engagements" className="hover:text-[#D4AF37] transition-colors">Weddings</Link></li>
                <li><Link href="/services/private-celebrations" className="hover:text-[#D4AF37] transition-colors">Private Celebrations</Link></li>
                <li><Link href="/services/corporate-brand-events" className="hover:text-[#D4AF37] transition-colors">Corporate Events</Link></li>
                <li><Link href="/services/hotels-restaurants-venues" className="hover:text-[#D4AF37] transition-colors">Venue Management</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: USEFUL LINKS (lg:col-span-2) */}
          <div className="lg:col-span-2 pl-0 lg:pl-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.22em] text-[#C5A059] uppercase mb-3">
                USEFUL LINKS
              </h4>
              <ul className="space-y-2 text-[11.5px] text-neutral-300 font-light">
                <li><Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link></li>
                <li><Link href="/testimonials" className="hover:text-[#D4AF37] transition-colors">Testimonials</Link></li>
                <li><Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 5: CONTACT US & CTA (lg:col-span-3) */}
          <div className="lg:col-span-3 pl-0 lg:pl-4 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.22em] text-[#C5A059] uppercase mb-3">
                CONTACT US
              </h4>
              <ul className="space-y-2.5 text-[11.5px] text-neutral-300 font-light mb-5">
                <li className="flex items-center space-x-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>+971 50 123 4567</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>hello@blancosevents.com</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Dubai, United Arab Emirates</span>
                </li>
              </ul>
            </div>

            {/* PLAN AN EVENT Button */}
            <button
              onClick={onOpenInquiry}
              className="px-4 py-2.5 border border-[#C5A059] bg-black text-[#C5A059] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-[10.5px] font-bold tracking-[0.18em] uppercase rounded-sm flex items-center justify-between shadow-lg w-full max-w-[210px]"
            >
              <span>PLAN AN EVENT</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </button>
          </div>

        </div>

        {/* Floating Back to Top Golden Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="absolute right-8 bottom-6 w-11 h-11 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#F3E5AB] text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer z-30"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Bottom Copyright Text */}
        <div className="pt-6 text-center">
          <p className="text-xs text-neutral-400 font-light tracking-wider">
            &copy; {new Date().getFullYear()} Blanco&apos;s Events Dubai. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
