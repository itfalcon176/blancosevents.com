'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, User, ChevronDown, Edit3, ArrowRight, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export const ContactPageContent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    budget: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.eventType) return;
    
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        eventDate: '',
        budget: '',
        message: '',
      });
    }, 4000);
  };

  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/971501234567', '_blank');
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#222222] overflow-hidden">
      
      {/* ──────────────────────────────────────────────────────── */}
      {/* HERO SECTION: Full-width Background Image Layout         */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-white overflow-hidden min-h-[550px] lg:min-h-[620px] flex items-center border-b border-[#EADFC9]/50">
        
        {/* Full-width Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: "url('/portfolio-images/Elegant Table Settings.webp')" }}
        />

        {/* Gradient Overlay for Text Readability (Only covers left 55% on desktop to keep right side 100% clear) */}
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 to-transparent w-full lg:w-[55%] pointer-events-none" />

        {/* Text Content Area */}
        <div className="relative w-full max-w-[1550px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24 text-left z-10">
          <div className="max-w-xl">
            
            {/* Top Subheader Tag with flourish ornament */}
            <div className="mb-6 flex flex-col items-start">
              <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#C5A059] mb-2.5">
                CONTACT US
              </span>
              {/* Flourish Line Ornament */}
              <svg viewBox="0 0 100 8" fill="none" className="w-24 h-1.5 text-[#C5A059]">
                <line x1="0" y1="4" x2="45" y2="4" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.75" />
                <circle cx="46" cy="4" r="0.8" fill="currentColor" />
                <path d="M50 1L53 4L50 7L47 4Z" fill="currentColor" />
                <circle cx="54" cy="4" r="0.8" fill="currentColor" />
                <line x1="55" y1="4" x2="100" y2="4" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.75" />
              </svg>
            </div>

            {/* Serif Heading */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-[54px] font-serif text-neutral-900 tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Let&apos;s Create <br />
              Something <br />
              <span 
                className="not-italic"
                style={{
                  background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #B89230 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Extraordinary.
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed mb-8 max-w-md">
              Share your vision with us and we&apos;ll take care of everything else.
            </p>

            {/* CTA Buttons side-by-side */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#enquiry-form"
                className="inline-flex items-center justify-center gap-2.5 bg-[#C5A059] hover:bg-[#B89230] text-white px-7 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-md whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK A CONSULTATION</span>
              </a>
              <button 
                onClick={handleOpenWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-50 text-[#C5A059] border border-[#C5A059] px-7 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-sm whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP US</span>
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* INFO CARDS SECTION: Unified Box with dividers            */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="py-12 px-6 sm:px-12 lg:px-16 max-w-[1000px] mx-auto">
        <div className="bg-white border border-[#EADFC9]/70 shadow-sm grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EADFC9]/70">
          
          {/* Card 1: Call Us */}
          <div className="py-5 px-4 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-4">
              <Phone className="w-5 h-5 stroke-[1.2]" />
            </div>
            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
              CALL US
            </h3>
            <p className="text-sm font-semibold text-neutral-900 mb-1 tracking-wide">
              <a href="tel:+971501234567" className="hover:text-[#C5A059] transition-colors">+971 50 123 4567</a>
            </p>
            <p className="text-[11px] text-neutral-500 font-light mt-1">
              Mon – Sat: 10:00 AM – 7:00 PM
            </p>
          </div>

          {/* Card 2: Email Us */}
          <div className="py-5 px-4 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-4">
              <Mail className="w-5 h-5 stroke-[1.2]" />
            </div>
            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
              EMAIL US
            </h3>
            <p className="text-sm font-semibold text-neutral-900 mb-1 tracking-wide">
              <a href="mailto:hello@blancasevents.com" className="hover:text-[#C5A059] transition-colors">hello@blancasevents.com</a>
            </p>
            <p className="text-[11px] text-neutral-500 font-light mt-1">
              We&apos;ll reply within 24 hours
            </p>
          </div>

          {/* Card 3: Visit Us */}
          <div className="py-5 px-4 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-4">
              <MapPin className="w-5 h-5 stroke-[1.2]" />
            </div>
            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
              VISIT US
            </h3>
            <p className="text-xs text-neutral-700 leading-relaxed font-normal max-w-[260px]">
              Office 503, The Onyx Tower 2 <br />
              Greens, Sheikh Zayed Road <br />
              Dubai, UAE
            </p>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* ENQUIRY FORM SECTION: Send Us Your Enquiry               */}
      {/* ──────────────────────────────────────────────────────── */}
      <section id="enquiry-form" className="pb-20 px-6 sm:px-12 lg:px-16 max-w-[1000px] mx-auto scroll-mt-24">
        
        {/* Form Container Card */}
        <div className="bg-white border border-[#EADFC9]/70 p-6 sm:p-12 shadow-sm relative">
          
          {/* Header Title with Lines */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3.5 mb-2.5">
              <span className="h-[1px] w-12 sm:w-16 bg-[#C5A059]/60"></span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-[#C5A059]">
                TELL US ABOUT YOUR EVENT
              </span>
              <span className="h-[1px] w-12 sm:w-16 bg-[#C5A059]/60"></span>
            </div>

            {/* Flourish Icon decoration */}
            <div className="flex justify-center mb-3">
              <svg viewBox="0 0 200 12" fill="none" className="w-32 sm:w-40 h-2">
                <line x1="0" y1="6" x2="92" y2="6" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.75" />
                <circle cx="93.5" cy="6" r="1.2" fill="#C5A059" />
                <path d="M100 2L104 6L100 10L96 6Z" fill="#C5A059" />
                <circle cx="106.5" cy="6" r="1.2" fill="#C5A059" />
                <line x1="108" y1="6" x2="200" y2="6" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.75" />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-serif text-neutral-900 leading-tight">
              Send Us <span className="text-[#C5A059] font-serif">Your</span> Enquiry
            </h2>
          </div>

          {/* Success Banner */}
          {isSubmitted && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3 transition-all duration-300">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div>
                <p className="font-bold">Thank you for your enquiry!</p>
                <p className="text-emerald-700/90 font-light mt-0.5">We have received your request and will contact you within 24 hours.</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Input Row 1: Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                  <User className="w-4 h-4 stroke-[1.2]" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#EADFC9] rounded-none text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                  <Phone className="w-4 h-4 stroke-[1.2]" />
                </div>
                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#EADFC9] rounded-none text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

            </div>

            {/* Input Row 2: Email & Event Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email Address */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                  <Mail className="w-4 h-4 stroke-[1.2]" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#EADFC9] rounded-none text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              {/* Event Type Dropdown */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                  <Calendar className="w-4 h-4 stroke-[1.2]" />
                </div>
                <select
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full pl-11 pr-10 py-3.5 bg-white border border-[#EADFC9] rounded-none text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Event Type *</option>
                  <option value="wedding">Weddings & Engagements</option>
                  <option value="private">Private Party / Celebration</option>
                  <option value="corporate">Corporate & Brand Event</option>
                  <option value="venue">Hotel & Restaurant Styling</option>
                  <option value="other">Bespoke Luxury Concept</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-neutral-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

            </div>

            {/* Input Row 3: Event Date & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Event Date */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                  <Calendar className="w-4 h-4 stroke-[1.2]" />
                </div>
                <input
                  type="date"
                  placeholder="Event Date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#EADFC9] rounded-none text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              {/* Estimated Budget dropdown */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                  <ChevronDown className="w-4 h-4 stroke-[1.2]" />
                </div>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full pl-11 pr-10 py-3.5 bg-white border border-[#EADFC9] rounded-none text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Estimated Budget (AED)</option>
                  <option value="50k-100k">50,000 - 100,000 AED</option>
                  <option value="100k-250k">100,000 - 250,000 AED</option>
                  <option value="250k-500k">250,000 - 500,000 AED</option>
                  <option value="500k+">500,000+ AED</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-neutral-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                rows={4}
                placeholder="Tell us about your vision..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full pl-4 pr-10 py-3.5 bg-white border border-[#EADFC9] rounded-none text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
              />
              <div className="absolute bottom-3 right-3 text-[#C5A059] pointer-events-none">
                <Edit3 className="w-3.5 h-3.5 stroke-[1.5]" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0D0D0D] hover:bg-neutral-900 text-[#C5A059] hover:text-white py-5 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md"
            >
              <span>SEND MY ENQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>

        </div>

      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* BOTTOM SECTION: Founder Quote & Call to Action           */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#08080A] text-white py-12 px-6 sm:px-10 lg:px-12 border-t border-[#D4AF37]/30">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{ backgroundImage: "url('/dark-rose-bg.png')" }}
        />

        <div className="relative max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Founder Photo & Quote */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#C5A059]/40 flex-shrink-0">
              <img 
                src="/blanca-founder.png" 
                alt="Blanca - Founder & Creative Director" 
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="flex-grow">
              <span className="text-[#C5A059] font-serif text-5xl leading-none block -mb-4 opacity-50 sm:text-left select-none">“</span>
              <blockquote className="text-lg sm:text-xl font-serif text-neutral-200 font-light leading-relaxed mb-2 px-1 sm:px-0">
                Every unforgettable <br className="hidden sm:inline" />
                event starts with <br className="hidden sm:inline" />
                a <span className="text-[#C5A059] font-serif">conversation.</span>
              </blockquote>
              <cite className="text-xs tracking-widest text-neutral-400 not-italic uppercase font-semibold">
                — Blanca 🤍
              </cite>
            </div>
          </div>

          {/* Vertical Separator Line (Desktop only) */}
          <div className="hidden lg:block lg:col-span-1 justify-self-center">
            <div className="w-[1px] h-28 bg-[#C5A059]/20" />
          </div>

          {/* Right: Book Consultation Block */}
          <div className="lg:col-span-4 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase mb-2">
              READY TO START PLANNING?
            </span>
            <p className="text-sm text-neutral-300 font-light mb-5">
              Let&apos;s bring your vision to life.
            </p>
            <a 
              href="#enquiry-form"
              className="bg-[#C5A059] hover:bg-[#B89230] text-white px-7 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 flex items-center gap-2 shadow-lg whitespace-nowrap"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
