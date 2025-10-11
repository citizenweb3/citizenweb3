'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';

const DecorativeArrows: FC = () => {
  const [activePart, setActivePart] = useState(0);

  // Cycle through arrow parts every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePart((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div className="relative w-9 h-16">
        {/* Arrow Part 1 - Group 17 (top) */}
        <div
          className={`absolute top-0 left-0 w-9 h-6 transition-all duration-500 ${
            activePart === 0
              ? 'opacity-100 brightness-150 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse'
              : 'opacity-60 brightness-75'
          }`}
        >
          <Image
            src="/figma-arrows/arrow-page-up.svg"
            alt="Arrow part 1"
            width={36}
            height={24}
            className="w-full h-full object-cover"
            style={{ clipPath: 'inset(0% 0% 66.67% 0%)' }}
          />
        </div>
        
        {/* Arrow Part 2 - Group 18 (middle) */}
        <div
          className={`absolute top-6 left-0 w-9 h-6 transition-all duration-500 ${
            activePart === 1
              ? 'opacity-100 brightness-150 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse'
              : 'opacity-60 brightness-75'
          }`}
        >
          <Image
            src="/figma-arrows/arrow-page-up.svg"
            alt="Arrow part 2"
            width={36}
            height={24}
            className="w-full h-full object-cover"
            style={{ clipPath: 'inset(33.33% 0% 33.33% 0%)' }}
          />
        </div>
        
        {/* Arrow Part 3 - Group 19 (bottom) */}
        <div
          className={`absolute top-12 left-0 w-9 h-6 transition-all duration-500 ${
            activePart === 2
              ? 'opacity-100 brightness-150 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse'
              : 'opacity-60 brightness-75'
          }`}
        >
          <Image
            src="/figma-arrows/arrow-page-up.svg"
            alt="Arrow part 3"
            width={36}
            height={24}
            className="w-full h-full object-cover"
            style={{ clipPath: 'inset(66.67% 0% 0% 0%)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default DecorativeArrows;
