'use client';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import Card from '@/components/card';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export type BazaarItem = {
  id: string;
  title: string;
  imgSrc?: string;
};

const defaultItems: BazaarItem[] = [
  { id: '0', title: 'Merchandise', imgSrc: '/tools/vi.svg' },
  { id: '1', title: `NFT's`, imgSrc: '/tools/vi.svg' },
  { id: '2', title: 'Decentraland', imgSrc: '/tools/vi.svg' },
  { id: '3', title: 'Lives, Debates and Spaces', imgSrc: '/tools/vi.svg' },
  { id: '4', title: 'Serejandmyelf', imgSrc: '/tools/vi.svg' },
  { id: '5', title: 'DAO', imgSrc: '/tools/vi.svg' },
  { id: '6', title: 'IPFS', imgSrc: '/tools/vi.svg' },
  { id: '7', title: 'Docs and Guides', imgSrc: '/tools/vi.svg' },
];

function ArrowButton({
  side,
  onClick,
  className = '',
}: {
  side: 'left' | 'right';
  onClick: () => void;
  className?: string;
}) {
  const base =
    'group absolute top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center transition cursor-pointer';
  return (
    <button
      aria-label={side === 'left' ? 'Previous' : 'Next'}
      className={`${base} ${side === 'left' ? 'left-12 md:left-20' : 'right-12 md:right-20'} ${className}`}
      onClick={onClick}
    >
      <span className="pointer-events-none select-none">
        {side === 'left' ? (
          <>
            <Image
              src="/bazaar-arrow-l.svg"
              alt="arrow"
              width={71}
              height={80}
              className="w-20 h-20 transform group-hover:hidden"
            />
            <Image
              src="/bazaar-arrow-l-h.svg"
              alt="arrow"
              width={71}
              height={80}
              className="w-20 h-20 transform hidden group-hover:block"
            />
          </>
        ) : (
          <>
            <Image
              src="/bazaar-arrow-r.svg"
              alt="arrow"
              width={71}
              height={80}
              className="w-20 h-20 group-hover:hidden"
            />
            <Image
              src="/bazaar-arrow-r-h.svg"
              alt="arrow"
              width={71}
              height={80}
              className="w-20 h-20 hidden group-hover:block"
            />
          </>
        )}
      </span>
    </button>
  );
}

/** A single card */
function BazaarCard({ title, imgSrc }: { title: string; imgSrc?: string }) {
  return (
    <Card className="group relative h-[24rem] w-[24rem]  md:h-[40rem] md:w-[40rem] snap-center shrink-0 py-24 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="text-center text-3xl">{title}</div>
      <div className="mt-[1rem] md:mt-[6rem] flex w-full items-center justify-center rounded-xl">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={title}
            width={400}
            height={400}
            className="h-[12rem] w-[12rem] md:h-[20rem] md:w-[20rem] rounded-full object-cover"
          />
        ) : (
          <Image
            src="/logo.png"
            alt={title}
            width={40}
            height={40}
            className="h-[12rem] w-[12rem] md:h-[20rem] md:w-[20rem] rounded-full object-cover"
          />
        )}
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm text-white/50">
        In Development
      </div>
    </Card>
  );
}

const Bazaar: FC = () => {
  const title = 'Bazaar';
  const items = useMemo(() => defaultItems, []);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(1);

  // Snap to an index
  const scrollToIndex = (idx: number) => {
    const el = listRef.current?.children[idx] as HTMLElement | undefined;
    if (!el || !listRef.current) return;
    const container = listRef.current;
    const left = el.offsetLeft - container.clientWidth / 2 + el.clientWidth / 2;
    container.scrollTo({ left, behavior: 'smooth' });
    setActive(idx);
  };

  const next = () => scrollToIndex((active + 1) % items.length);
  const prev = () => scrollToIndex((active - 1 + items.length) % items.length);

  // Keep active in sync when user scrolls/dragging
  useEffect(() => {
    const container = listRef.current;
    if (!container) return;
    const handler = () => {
      const children = Array.from(container.children) as HTMLElement[];
      const center = container.scrollLeft + container.clientWidth / 2;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 3) {
        setActive(children.length - 1);
        return;
      }
      if (container.scrollLeft <= 3) {
        setActive(0);
        return;
      }

      let bestIdx = 0;
      let best = Number.POSITIVE_INFINITY;
      children.forEach((c, i) => {
        const midpoint = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(midpoint - center);
        if (d < best) {
          best = d;
          bestIdx = i;
        }
      });
      setActive(bestIdx);
    };
    container.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => container.removeEventListener('scroll', handler);
  }, []);

  // Keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, items.length]);

  return (
    <section className="relative w-full bg-black text-white">
      <div className="pb-16 pt-12">
        <h2 className="mb-6 text-center text-2xl md:mb-8 md:text-3xl">{title}</h2>

        <div className="relative">
          <ArrowButton side="left" onClick={prev} />
          <ArrowButton side="right" onClick={next} />

          <div
            ref={listRef}
            className="flex snap-x snap-mandatory overflow-x-auto py-2 gap-8 scroll-px-10 px-6 no-scrollbar"
          >
            {items.map((it, i) => (
              <div
                key={it.id}
                className={twMerge(
                  `w-[21rem] md:w-[36rem] shrink-0 snap-center flex items-center justify-center transition-all duration-300`,
                  i === active && 'px-20',
                )}
              >
                <div
                  className={`transition-transform duration-300 ${
                    i === active ? 'scale-100 z-10' : 'scale-75 opacity-80'
                  }`}
                >
                  <BazaarCard title={it.title} imgSrc={it.imgSrc} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bazaar;
