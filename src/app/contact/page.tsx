'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { ContactPageContent } from '@/components/ContactPageContent';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  const handleOpenInquiry = () => {
    // Scroll directly to form inside the contact page if already on it
    const formElement = document.getElementById('enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact#enquiry-form';
    }
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white pt-16">
      <Navbar onOpenInquiryModal={handleOpenInquiry} />
      <ContactPageContent />
      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
