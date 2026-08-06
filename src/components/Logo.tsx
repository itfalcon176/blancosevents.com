'use client';

import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer';
  align?: 'center' | 'left';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'header', align }) => {
  const [imgSrc, setImgSrc] = useState('/logo/logo-new.png');
  const isLeft = align === 'left' || variant === 'footer' || variant === 'header';

  return (
    <div className={`flex flex-col ${isLeft ? 'items-start text-left' : 'items-center text-center'} select-none ${className}`}>
      <img
        src={imgSrc}
        onError={() => setImgSrc('/logo/logo-2.png')}
        alt="Blanco's Events Dubai"
        className={`${variant === 'footer'
          ? 'w-52 sm:w-56 md:w-60 h-auto max-h-[65px]'
          : 'w-48 sm:w-56 md:w-60 lg:w-64 h-auto max-h-[62px]'
          } object-contain ${isLeft ? 'object-left' : 'object-center'} filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] transition-transform duration-300 hover:scale-105`}
      />
    </div>
  );
};
