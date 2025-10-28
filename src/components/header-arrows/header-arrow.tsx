import { FC } from 'react';
import Image from 'next/image';

interface OwnProps {
  isActive: boolean;
  alt: string;
}

const HeaderArrow: FC<OwnProps> = ({ isActive, alt }) => (
  <div
    className={`w-8 h-5 transition-all duration-600 brightness-150 ${
      isActive
        ? 'scale-110'
        : ''
    }`}
  >
    <Image src="/arrow-down.svg" alt={alt} width={36} height={24} className="w-full h-full object-cover" />
  </div>
);

export default HeaderArrow;
