'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { BlogPageContent } from '@/components/BlogPageContent';
import { Footer } from '@/components/Footer';

export default function BlogListPage() {
  const handleOpenInquiry = () => {
    window.location.href = '/contact';
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white pt-[75px]">
      <Navbar onOpenInquiryModal={handleOpenInquiry} />
      <BlogPageContent />
      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
