'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { AboutUsSection } from '@/components/AboutUsSection';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  const handleOpenInquiry = () => {
    window.location.href = '/#contact';
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white pt-16">
      <Navbar onOpenInquiryModal={handleOpenInquiry} />
      <AboutUsSection />
      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
