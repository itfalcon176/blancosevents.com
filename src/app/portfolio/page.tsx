'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { PortfolioPageContent } from '@/components/PortfolioPageContent';
import { Footer } from '@/components/Footer';

export default function PortfolioPage() {
  const handleOpenInquiry = () => {
    window.location.href = '/#contact';
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white pt-[75px]">
      <Navbar onOpenInquiryModal={handleOpenInquiry} />
      <PortfolioPageContent />
      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
