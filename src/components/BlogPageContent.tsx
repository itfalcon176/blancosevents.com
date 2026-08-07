'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blogData';

export const BlogPageContent: React.FC = () => {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <div className="w-full bg-[#FAF8F5] text-[#222222] min-h-screen">
      {/* ──────────────────────────────────────────────────────── */}
      {/* HERO HEADER                                              */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-black text-white py-16 sm:py-20 border-b border-[#EADFC9]/50 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('/dark-rose-bg.png')" }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-4">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#C5A059] uppercase block">
            THE JOURNAL
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif tracking-tight leading-tight">
            Editorials & <span className="text-[#C5A059]">Inspirations</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-lg mx-auto leading-relaxed">
            Curated articles, professional checklists, and design insights on planning luxury occasions in Dubai and beyond.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* FEATURED POST (Modern Split Screen)                      */}
      {/* ──────────────────────────────────────────────────────── */}
      {featuredPost && (
        <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-12 max-w-[1200px] mx-auto">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-6">
            LATEST EDITORIAL
          </span>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white border border-[#EADFC9]/60 shadow-sm rounded-sm overflow-hidden group">
            {/* Left image */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-neutral-100 min-h-[300px] lg:min-h-[420px]">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Right text detail */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[10px] text-neutral-400 font-semibold tracking-wider">
                  <span className="text-[#C5A059] uppercase">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 leading-snug group-hover:text-[#C5A059] transition-colors duration-300">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>
                
                <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#EADFC9]/50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{featuredPost.date}</span>
                </div>
                
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#C5A059] hover:text-[#B89230] uppercase transition-colors"
                >
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────────────────── */}
      {/* REMAINING BLOG GRID                                      */}
      {/* ──────────────────────────────────────────────────────── */}
      {gridPosts.length > 0 && (
        <section className="pb-20 px-6 sm:px-10 lg:px-12 max-w-[1200px] mx-auto">
          <div className="w-full h-[1px] bg-[#EADFC9]/60 mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {gridPosts.map((post) => (
              <article key={post.slug} className="bg-white border border-[#EADFC9]/60 rounded-sm overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#C5A059] transition-all duration-300">
                <div className="space-y-4">
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Card Info */}
                  <div className="px-6 pt-2 space-y-3">
                    <div className="flex items-center gap-3 text-[10px] text-neutral-400 font-semibold tracking-wider">
                      <span className="text-[#C5A059] uppercase">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-serif text-neutral-900 leading-snug group-hover:text-[#C5A059] transition-colors duration-300">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Meta */}
                <div className="px-6 py-5 mt-6 border-t border-[#EADFC9]/50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] text-neutral-400">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{post.date}</span>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#C5A059] hover:text-[#B89230] uppercase transition-colors"
                  >
                    <span>READ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
