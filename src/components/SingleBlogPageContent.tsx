'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blogData';

interface SingleBlogPageContentProps {
  post: BlogPost;
}

export const SingleBlogPageContent: React.FC<SingleBlogPageContentProps> = ({ post }) => {
  return (
    <article className="w-full bg-[#FAF8F5] text-[#222222] pb-20">
      {/* ──────────────────────────────────────────────────────── */}
      {/* FULL-SCREEN CINEMATIC HERO HEADER                        */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[500px] lg:min-h-[580px] flex items-center justify-center bg-black border-b border-[#EADFC9]/50 overflow-hidden">
        {/* Parallax cover background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 filter brightness-[0.45] contrast-105"
          style={{ backgroundImage: `url('${post.image}')` }}
        />

        {/* Ambient Dark Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/75 z-0" />

        {/* Centered Text Content */}
        <div className="relative z-10 max-w-[850px] mx-auto px-6 text-center space-y-6 text-white py-16 lg:py-24">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#C5A059] hover:text-[#B89230] uppercase transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO JOURNAL</span>
          </Link>

          {/* Category */}
          <div className="flex justify-center">
            <div className="inline-block px-4 py-1.5 border border-[#C5A059]/40 bg-black/40 backdrop-blur-sm rounded-sm">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#C5A059] uppercase block leading-none">
                {post.category}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-tight text-white drop-shadow-md">
            {post.title}
          </h1>

          <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto" />

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-300 font-light max-w-md mx-auto bg-black/50 backdrop-blur-md px-5 py-3 rounded-sm border border-white/5 shadow-xl">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#C5A059]" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#C5A059]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C5A059]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* MAIN CONTENT AREA: Split Columns (Article & Sidebar)      */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Article Body (col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-[#EADFC9]/60 p-6 sm:p-10 lg:p-12 shadow-sm rounded-sm space-y-6">

            {post.content.map((paragraph, index) => {
              // Apply drop-cap (Vogue Style) to the very first paragraph!
              if (index === 0) {
                const firstLetter = paragraph.charAt(0);
                const restOfParagraph = paragraph.slice(1);
                return (
                  <p key={index} className="text-neutral-700 font-light leading-relaxed text-base sm:text-lg first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#C5A059] first-letter:font-bold first-letter:line-height-[1]">
                    {firstLetter}{restOfParagraph}
                  </p>
                );
              }
              return (
                <p key={index} className="text-neutral-600 font-light leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              );
            })}

            {/* Decorative blockquote card */}
            <div className="my-10 bg-[#FCFAF7] border-l-4 border-[#C5A059] p-6 rounded-sm">
              <span className="text-[#C5A059] font-serif text-5xl leading-none block -mb-4 opacity-50 select-none">“</span>
              <p className="font-serif italic text-base sm:text-lg text-neutral-800 leading-relaxed max-w-xl">
                Design is not just what it looks like and feels like. Design is how it works and lives. Every detail at Blanco\'s is curated to tell a timeless story.
              </p>
              <cite className="block mt-3 text-[10px] tracking-wider text-[#C5A059] not-italic uppercase font-bold">
                — Jessica 🤍
              </cite>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar (col-span-4) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-[95px]">

            {/* Widget 1: Author Bio Card */}
            <div className="bg-white border border-[#EADFC9]/60 p-6 rounded-sm shadow-sm text-center space-y-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-[#C5A059]/40 mx-auto">
                <img
                  src="/blancosevents-image-home/home img2.webp"
                  alt="Jessica Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold tracking-wider text-neutral-900 uppercase">Jessica</h4>
                <p className="text-[10px] text-[#C5A059] uppercase tracking-widest font-semibold">Founder & Creative Director</p>
              </div>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Architect of timeless luxury memories. Designing and styling the most exclusive celebrations in Dubai.
              </p>
            </div>

            {/* Widget 2: Booking CTA Card */}
            <div className="bg-black text-white p-6 rounded-sm shadow-sm space-y-4 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
                style={{ backgroundImage: "url('/dark-rose-bg.png')" }}
              />
              <div className="relative z-10 space-y-3">
                <span className="text-[9px] font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
                  WORK WITH US
                </span>
                <h4 className="text-base font-serif text-white">Let\'s Plan Your Next Event</h4>
                <p className="text-[11px] text-neutral-300 font-light leading-relaxed">
                  Start a conversation with our specialists to plan your luxury celebration.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex justify-center bg-[#C5A059] hover:bg-[#B89230] text-white px-4 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 items-center gap-1.5 shadow-md"
                >
                  <span>START ENQUIRY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </aside>

        </div>
      </section>
    </article>
  );
};
