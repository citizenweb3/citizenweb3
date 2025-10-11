'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show arrow when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-[#1A1A1B] hover:bg-[#262626] rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
      aria-label="Scroll to top"
    >
      <Image 
        src="/figma-arrows/arrow-main-menu.svg" 
        alt="Scroll to top" 
        width={74} 
        height={56} 
        className="w-18 h-14" 
      />
    </button>
  );
};

export default ScrollToTop;
