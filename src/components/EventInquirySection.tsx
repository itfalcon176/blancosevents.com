'use client';

import React, { useState } from 'react';
import { ArrowRight, Clock, Sparkles, Gem, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export const EventInquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    budget: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const perks = [
    {
      title: 'Timeline Guidance',
      icon: <Clock className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      title: 'Creative Planning',
      icon: <Sparkles className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      title: 'Premium Quality',
      icon: <Gem className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      title: 'Unforgettable Experiences',
      icon: <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />,
    },
  ];

  return (
    <section id="contact" className="relative w-full bg-black text-white py-16 lg:py-20 border-t border-white/10 overflow-hidden">
      {/* Crystal Clear Full-Height Background Image on Left Edge */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[42%] lg:w-[35%] z-0">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
          alt="Luxury Event Planning Director"
          className="w-full h-full object-cover object-top filter brightness-110 contrast-110"
        />
        {/* Soft Right Gradient Fade that preserves her face and gold watch crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Full Width Container */}
      <div className="relative z-10 max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Empty Left Spacer for background portrait image */}
          <div className="hidden lg:block lg:col-span-3 h-full min-h-[450px]" />

          {/* Form Area in Center/Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-black/50 backdrop-blur-xs p-2 lg:p-0 rounded-sm"
          >
            {/* Header Text */}
            <div className="mb-6">
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C5A059] mb-2">
                LET&apos;S START PLANNING
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-white tracking-tight leading-tight mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Tell Us About Your Dream Event
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light">
                Share your vision with us and let&apos;s make your event unforgettable.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Row 1: Name, Email, Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-black/80 border border-white/20 rounded-sm text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-black/80 border border-white/20 rounded-sm text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-black/80 border border-white/20 rounded-sm text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              {/* Row 2: Event Type, Event Date, Expected Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <select
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3 py-2.5 bg-black/80 border border-white/20 rounded-sm text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                >
                  <option value="" disabled className="bg-neutral-900 text-neutral-400">
                    Event Type
                  </option>
                  <option value="wedding" className="bg-neutral-900 text-white">Weddings & Engagements</option>
                  <option value="private" className="bg-neutral-900 text-white">Private Party / Celebration</option>
                  <option value="corporate" className="bg-neutral-900 text-white">Corporate & Brand Event</option>
                  <option value="venue" className="bg-neutral-900 text-white">Hotel & Restaurant Styling</option>
                </select>

                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-black/80 border border-white/20 rounded-sm text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                />

                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3 py-2.5 bg-black/80 border border-white/20 rounded-sm text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                >
                  <option value="" disabled className="bg-neutral-900 text-neutral-400">
                    Expected Budget (AED)
                  </option>
                  <option value="50k" className="bg-neutral-900 text-white">50,000 - 100,000 AED</option>
                  <option value="100k" className="bg-neutral-900 text-white">100,000 - 250,000 AED</option>
                  <option value="250k" className="bg-neutral-900 text-white">250,000 - 500,000 AED</option>
                  <option value="500k+" className="bg-neutral-900 text-white">500,000+ AED (Bespoke Luxury)</option>
                </select>
              </div>

              {/* Row 3: Textarea + SEND ENQUIRY Button */}
              <div className="relative border border-white/20 rounded-sm p-3 bg-black/80 focus-within:border-[#C5A059] transition-colors">
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your event (your ideas, style, or any other details)"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-transparent text-xs text-white placeholder-neutral-400 focus:outline-none resize-none"
                />
                
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4AF37] text-black font-bold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center space-x-2 shadow-lg group"
                  >
                    <span>{submitted ? 'ENQUIRY SENT!' : 'SEND ENQUIRY'}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Right Column: 4 Feature Perks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col space-y-6 pl-0 lg:pl-2"
          >
            {perks.map((perk, index) => (
              <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-full border border-[#D4AF37]/60 bg-black flex items-center justify-center group-hover:border-[#D4AF37] group-hover:scale-110 transition-all shadow-md flex-shrink-0">
                  {perk.icon}
                </div>
                <span className="text-xs font-semibold text-neutral-200 tracking-wide group-hover:text-[#D4AF37] transition-colors">
                  {perk.title}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
