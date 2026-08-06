'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { CorporatePageContent } from '@/components/services/CorporatePageContent';
import { Footer } from '@/components/Footer';

export default function CorporatePage() {
  const handleOpenInquiry = () => {
    window.location.href = '/contact';
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white pt-[75px]">
      <Navbar onOpenInquiryModal={handleOpenInquiry} />
      <CorporatePageContent />
      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
