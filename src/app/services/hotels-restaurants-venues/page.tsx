'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HospitalityPageContent } from '@/components/services/HospitalityPageContent';
import { Footer } from '@/components/Footer';

export default function HospitalityPage() {
  const handleOpenInquiry = () => {
    window.location.href = '/contact';
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white pt-[75px]">
      <Navbar onOpenInquiryModal={handleOpenInquiry} />
      <HospitalityPageContent />
      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
