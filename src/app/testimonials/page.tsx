'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { TestimonialsPageContent } from '@/components/TestimonialsPageContent';
import { Footer } from '@/components/Footer';

export default function TestimonialsPage() {
  const handleOpenInquiry = () => {
    window.location.href = '/#contact';
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white pt-16">
      <Navbar onOpenInquiryModal={handleOpenInquiry} />
      <TestimonialsPageContent />
      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
