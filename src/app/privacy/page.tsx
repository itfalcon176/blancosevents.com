'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  const handleOpenInquiry = () => {
    window.location.href = '/contact';
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white pt-[75px]">
      <Navbar onOpenInquiryModal={handleOpenInquiry} />
      
      <div className="w-full bg-[#FAF8F5] text-[#222222] py-16 px-6 sm:px-10 lg:px-12">
        <div className="max-w-[800px] mx-auto bg-white border border-[#EADFC9]/70 p-8 sm:p-12 shadow-sm rounded-sm">
          
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.35em] text-[#C5A059] uppercase block mb-2">
              BLANCO\'S EVENTS
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-neutral-900 leading-tight">
              Privacy Policy
            </h1>
            <div className="w-12 h-[1.5px] bg-[#C5A059] mx-auto mt-4" />
            <p className="text-xs text-neutral-400 mt-2">Last Updated: August 2026</p>
          </div>

          <div className="space-y-6 text-sm text-neutral-600 font-light leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-neutral-900 uppercase">1. Information We Collect</h2>
              <p>
                When you contact us or submit an enquiry form on our website, we collect personal details such as your name, phone number, email address, event date, estimated budget, and details about your celebration vision.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-neutral-900 uppercase">2. How We Use Information</h2>
              <p>
                We use the information collected to respond to your consultations, prepare customized event proposals, schedule bookings, communicate design concepts, and coordinate vendor delivery details. We never sell your personal information.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-neutral-900 uppercase">3. Data Sharing & Third Parties</h2>
              <p>
                To organize your luxury celebration, we may share selective details (like event schedules or design layout briefs) with contracted vendors, including florists, rental companies, or catering partners. We only share details absolutely necessary for the event production.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-neutral-900 uppercase">4. Security Standards</h2>
              <p>
                We take standard corporate security measures to protect your digital information against unauthorized access, loss, or disclosure. Personal contracts, invoice information, and payment histories are kept strictly confidential.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-neutral-900 uppercase">5. Cookies</h2>
              <p>
                We use subtle session cookies to analyze website traffic and optimize navigation performance. You can disable cookies in your web browser preferences at any time.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-[#EADFC9]/50">
              <p className="text-xs text-neutral-400 italic">
                If you wish to update or delete your personal details from our active database, please reach out to hello@blancosevents.com.
              </p>
            </section>
          </div>

        </div>
      </div>

      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
