'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { WeddingsPageContent } from '@/components/services/WeddingsPageContent';
import { Footer } from '@/components/Footer';

export default function WeddingsPage() {
  const handleOpenInquiry = () => {
    window.location.href = '/contact';
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white pt-[75px]">
      <Navbar onOpenInquiryModal={handleOpenInquiry} />
      <WeddingsPageContent />
      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
