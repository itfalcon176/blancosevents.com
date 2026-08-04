'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { BrandsBanner } from '@/components/BrandsBanner';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { StatsSection } from '@/components/StatsSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { EventInquirySection } from '@/components/EventInquirySection';
import { Footer } from '@/components/Footer';
import { VideoReelModal } from '@/components/VideoReelModal';

export default function Home() {
  const [isReelOpen, setIsReelOpen] = useState(false);

  const scrollToInquiry = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white selection:bg-[#D4AF37] selection:text-black">
      {/* Top Fixed Navigation */}
      <Navbar onOpenInquiryModal={scrollToInquiry} />

      {/* 1. Hero Section */}
      <HeroSection
        onOpenReel={() => setIsReelOpen(true)}
        onOpenInquiry={scrollToInquiry}
      />

      {/* 2. Brand Partners Banner */}
      <BrandsBanner />

      {/* 3. What We Offer - Services */}
      <ServicesSection />

      {/* 4. Why Choose Us & Flawless Add-ons */}
      <WhyChooseUsSection />

      {/* 5. Key Performance Stats Bar */}
      <StatsSection />

      {/* 6. Portfolio Showcase & Client Testimonials */}
      <PortfolioSection />

      {/* 7. Event Enquiry & Form */}
      <EventInquirySection />

      {/* Footer */}
      <Footer onOpenInquiry={scrollToInquiry} />

      {/* Video Reel Popup Modal */}
      <VideoReelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
      />
    </main>
  );
}
