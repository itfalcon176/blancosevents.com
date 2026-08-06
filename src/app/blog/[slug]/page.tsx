'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { SingleBlogPageContent } from '@/components/SingleBlogPageContent';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import Link from 'next/link';

interface SingleBlogPageProps {
  params: {
    slug: string;
  };
}

export default function SingleBlogPage({ params }: SingleBlogPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  const handleOpenInquiry = () => {
    window.location.href = '/contact';
  };

  return (
    <main className="min-h-screen bg-[#08080A] text-white pt-[75px]">
      <Navbar onOpenInquiryModal={handleOpenInquiry} />
      
      {post ? (
        <SingleBlogPageContent post={post} />
      ) : (
        <div className="w-full bg-[#FAF8F5] text-[#222222] py-20 px-6 text-center">
          <h1 className="text-3xl font-serif text-neutral-900 mb-4">Article Not Found</h1>
          <p className="text-sm text-neutral-500 mb-6">The article you are looking for does not exist or has been removed.</p>
          <Link 
            href="/blog"
            className="inline-flex bg-[#C5A059] hover:bg-[#B89230] text-white px-6 py-3 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300"
          >
            RETURN TO JOURNAL
          </Link>
        </div>
      )}

      <Footer onOpenInquiry={handleOpenInquiry} />
    </main>
  );
}
