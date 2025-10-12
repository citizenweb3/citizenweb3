'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      className="fixed bottom-8 right-8 z-50 bg-[#1A1A1B] hover:bg-[#262626] rounded-full p-3 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
      aria-label="Scroll to top"
    >
      <Image src="/arrow-page-up.svg" alt="Scroll to top" width={32} height={24} className="w-8 h-6" />
    </button>
  );
};

export default ScrollToTop;
