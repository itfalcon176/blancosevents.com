'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
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
              Terms & Conditions
            </h1>
            <div className="w-12 h-[1.5px] bg-[#C5A059] mx-auto mt-4" />
            <p className="text-xs text-neutral-400 mt-2">Last Updated: August 2026</p>
          </div>

          <div className="space-y-6 text-sm text-neutral-600 font-light leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-neutral-900 uppercase">1. Introduction</h2>
              <p>
                Welcome to Blanco\'s Events. By accessing our website and engaging our services, you agree to comply with and be bound by the following terms and conditions. These terms govern the relationship between Blanco\'s Events and our clients.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-neutral-900 uppercase">2. Services Scope</h2>
              <p>
                We specialize in luxury event planning, design production, and styling. The specific details, dates, budgets, and deliverables of each project will be outlined in a separate, written service contract signed by both parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-neutral-900 uppercase">3. Booking & Deposits</h2>
              <p>
                To reserve an event date, a non-refundable booking deposit is required. All payment schedules, installment details, and final payment milestones will be defined inside the bespoke client agreement. We reserve the right to pause design work if payments are delayed.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-neutral-900 uppercase">4. Cancellations & Postponement</h2>
              <p>
                Should you need to cancel or postpone your event, please notify us in writing as soon as possible. Cancellation fees apply as structured in your individual agreement, based on the proximity to the event date and custom-ordered items.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-neutral-900 uppercase">5. Intellectual Property</h2>
              <p>
                All design mockups, event sketches, customized structural drawings, and marketing media curated by Blanco\'s Events remain the creative property of Blanco\'s Events. They may not be reproduced, copied, or shared with third-party vendors without our prior written consent.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-neutral-900 uppercase">6. Liability Limits</h2>
              <p>
                Blanco\'s Events acts with high-end dedication to ensure every celebration is flawless. However, we are not liable for any force majeure events, natural disasters, state-ordered restrictions, or third-party venue defaults that may disrupt scheduled events.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-[#EADFC9]/50">
              <p className="text-xs text-neutral-400 italic">
                If you have any questions regarding our terms, please feel free to reach out to hello@blancosevents.com.
              </p>
            </section>
          </div>

        </div>
      </div>

      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
