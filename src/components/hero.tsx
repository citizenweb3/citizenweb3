import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/components/menu';

interface OwnProps {
  title?: string;
}

const Hero: FC<OwnProps> = ({ title }) => {
  return (
    <section className="relative min-w-screen min-h-screen">
      <Menu />
      <Image src="/hero-bg.png" alt="bg" fill priority className="object-cover -z-10 min-h-screen min-w-screen" />
      <div className="max-w-[80vw] mx-auto flex min-h-[56svh] flex-col items-center justify-center gap-12 xl:gap-32 px-4 text-center md:min-h-[70svh]">
        <Link href="/" className="w-full flex justify-center">
          <Image src="/logo.svg" alt="Citizen Web3" width={1110} height={121} priority className="w-2/3" />
        </Link>
        <h1 className="max-w-2xl font-bold text-sm text-zinc-400 md:text-base">{title}</h1>
      </div>
    </section>
  );
};

export default Hero;
