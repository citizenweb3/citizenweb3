import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/components/menu';
import DecorativeArrows from '@/components/header-arrows/decorative-arrows';

interface OwnProps {
  title?: string;
  subtitle?: string;
  variant?: 'home' | 'default';
}

const Hero: FC<OwnProps> = ({ title, subtitle, variant = 'default' }) => {
  return (
    <section className={variant === 'home' ? 'relative min-w-screen pt-40 pb-10' : 'relative min-w-screen min-h-screen pb-20'}>
      {variant === 'home' ? (
        <Link href="/" className="absolute top-10 left-10 z-50">
          <Image src="/logo-full.svg" alt="Citizen Web3" width={476} height={55} priority className="w-[25vw] max-w-[476px] h-auto" />
        </Link>
      ) : (
        <Image src="/header-bg.svg" alt="bg" fill priority className="object-cover -z-10 min-h-screen min-w-screen" />
      )}
      <Menu />
      <div className={variant === 'home' ? 'max-w-[80vw] mx-auto flex flex-col items-center justify-center gap-6 px-4 text-center' : 'max-w-[80vw] mx-auto flex min-h-[56svh] flex-col items-center justify-center gap-8 xl:gap-32 px-4 text-center md:min-h-[70svh]'}>
        {variant === 'default' && (
          <Link href="/" className="w-full flex justify-center">
            <Image src="/logo.svg" alt="Citizen Web3" width={1110} height={121} priority className="w-2/3" />
          </Link>
        )}
        <h1 className={variant === 'home' ? 'font-bold text-4xl tracking-[0.05em] opacity-90' : 'max-w-2xl font-bold text-sm text-zinc-400 md:text-base'}>
          {title?.includes('\n') ? title.split('\n').map((line, i) => (
            <span key={i} className={i > 0 ? 'block mt-4' : ''}>{line}</span>
          )) : title}
        </h1>
        {variant === 'home' && <div className="w-[166px] h-px bg-white opacity-50 my-4" />}
        {subtitle && (
          <p className="font-bold text-2xl tracking-[0.05em] opacity-90">
            {subtitle.includes('\n') ? subtitle.split('\n').map((line, i, arr) => (
              <span key={i} className={i > 0 ? 'block mt-4' : ''}>{line}</span>
            )) : subtitle}
          </p>
        )}
      </div>
      {variant === 'default' && <DecorativeArrows />}
    </section>
  );
};

export default Hero;
