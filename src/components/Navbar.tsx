'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { ChevronDown, Menu, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenInquiryModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiryModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/', active: pathname === '/' },
    { name: 'ABOUT US', href: '/about', active: pathname === '/about' },
    {
      name: 'SERVICES',
      href: '/services',
      active: pathname === '/services',
      hasDropdown: true,
      items: [
        'Weddings & Engagements',
        'Private Celebrations',
        'Corporate & Brand Events',
        'Hotels, Restaurants & Venues',
      ],
    },
    { name: 'PORTFOLIO', href: '/portfolio', active: pathname === '/portfolio' },
    { name: 'TESTIMONIALS', href: '/testimonials', active: pathname === '/testimonials' },
    { name: 'BLOG', href: '/#blog' },
    { name: 'CONTACT US', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-1 shadow-2xl'
          : 'bg-black/90 border-b border-white/10 py-1.5'
        }`}
    >
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[48px]">
          {/* Logo */}
          <Link href="/" className="flex items-center py-0.5">
            <Logo variant="header" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-5">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative py-1"
                onMouseEnter={() => link.hasDropdown && setServicesDropdown(true)}
                onMouseLeave={() => link.hasDropdown && setServicesDropdown(false)}
              >
                <a
                  href={link.href}
                  className={`text-[10.5px] font-medium tracking-[0.18em] transition-colors duration-300 flex items-center uppercase ${link.active
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-white/80 hover:text-[#D4AF37]'
                    }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-3 h-3 ml-1 text-[#D4AF37]" />
                  )}
                </a>

                {/* Golden Active Indicator Line under HOME */}
                {link.active && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"
                  />
                )}

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {servicesDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-60 bg-[#0F0F12] border border-[#D4AF37]/30 shadow-2xl rounded-sm py-2 px-1 backdrop-blur-xl"
                      >
                        {link.items?.map((item) => (
                          <a
                            key={item}
                            href="#services"
                            className="block px-4 py-2 text-[11px] text-neutral-300 hover:text-[#D4AF37] hover:bg-[#1A1A22] transition-colors rounded-sm"
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Items: WHATSAPP Pill + ☰ Menu */}
          <div className="flex items-center space-x-2.5">
            {/* WHATSAPP Pill Button matching screenshot */}
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 border border-[#C5A059]/80 rounded-full text-white bg-black/80 hover:border-[#D4AF37] hover:bg-[#C5A059]/10 transition-all duration-300 shadow-md group"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-[#D4AF37] transition-colors" />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white">
                WHATSAPP
              </span>
            </a>

            {/* Menu Toggle Dropdown Button (☰) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-1.5 text-white hover:text-[#D4AF37] transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Drawer Dropdown Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-[#0A0A0C] border-b border-[#D4AF37]/30 px-6 py-5"
          >
            <div className="max-w-7xl mx-auto flex flex-col space-y-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs font-semibold tracking-[0.18em] py-0.5 uppercase transition-colors ${link.active ? 'text-[#D4AF37]' : 'text-neutral-300 hover:text-[#D4AF37]'
                    }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenInquiryModal) onOpenInquiryModal();
                  }}
                  className="w-full text-center py-2.5 text-xs font-bold text-black bg-[#D4AF37] rounded-sm tracking-widest uppercase hover:bg-[#F3E5AB] transition-colors"
                >
                  PLAN AN EVENT
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
