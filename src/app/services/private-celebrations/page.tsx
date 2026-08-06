'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { PrivatePageContent } from '@/components/services/PrivatePageContent';
import { Footer } from '@/components/Footer';

export default function PrivatePage() {
  const handleOpenInquiry = () => {
    window.location.href = '/contact';
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white pt-[75px]">
      <Navbar onOpenInquiryModal={handleOpenInquiry} />
      <PrivatePageContent />
      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
