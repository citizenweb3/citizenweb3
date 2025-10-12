import { FC } from 'react';
import Image from 'next/image';

interface OwnProps {
  isActive: boolean;
  alt: string;
}

const HeaderArrow: FC<OwnProps> = ({ isActive, alt }) => (
  <div
    className={`w-8 h-5 transition-all duration-500 ${
      isActive
        ? 'opacity-100 brightness-150 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-110'
        : 'opacity-60 brightness-75'
    }`}
  >
    <Image src="/arrow-down.svg" alt={alt} width={36} height={24} className="w-full h-full object-cover" />
  </div>
);

export default HeaderArrow;
