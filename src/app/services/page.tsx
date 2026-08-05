'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { ServicesPageContent } from '@/components/ServicesPageContent';
import { Footer } from '@/components/Footer';

export default function ServicesPage() {
  const handleOpenInquiry = () => {
    window.location.href = '/#contact';
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white pt-16">
      <Navbar onOpenInquiryModal={handleOpenInquiry} />
      <ServicesPageContent onOpenInquiryModal={handleOpenInquiry} />
      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
