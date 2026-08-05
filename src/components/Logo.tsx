'use client';

import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer';
  align?: 'center' | 'left';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'header', align }) => {
  const [imgSrc, setImgSrc] = useState('/logo/blancosevents.png');
  const isLeft = align === 'left' || variant === 'footer';

  return (
    <div className={`flex flex-col ${isLeft ? 'items-start text-left' : 'items-center text-center'} select-none ${className}`}>
      <img
        src={imgSrc}
        onError={() => setImgSrc('/logo/logo-2.png')}
        alt="Blanco's Events Dubai"
        className={`${variant === 'footer'
            ? 'w-44 sm:w-48 md:w-52 h-auto max-h-[55px] object-left'
            : 'w-40 sm:w-48 md:w-52 lg:w-56 h-auto max-h-[50px]'
          } object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] transition-transform duration-300 hover:scale-105`}
      />
    </div>
  );
};
