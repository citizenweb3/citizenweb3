'use client';

import { FC, useEffect, useState } from 'react';
import HeaderArrow from '@/components/header-arrows/header-arrow';

const DecorativeArrows: FC = () => {
  const [activePart, setActivePart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePart((prev) => (prev + 1) % 3);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const arrows = [
    { id: 0, alt: 'Arrow part 1' },
    { id: 1, alt: 'Arrow part 2' },
    { id: 2, alt: 'Arrow part 3' },
  ];

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
      {arrows.map((arrow) => (
        <HeaderArrow key={arrow.id} isActive={activePart === arrow.id} alt={arrow.alt} />
      ))}
    </div>
  );
};

export default DecorativeArrows;
