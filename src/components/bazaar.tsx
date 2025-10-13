'use client';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import Card from '@/components/card';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

export type BazaarItem = {
  id: string;
  title: string;
  imgSrc: string;
  description: string;
  link?: string;
  blur?: boolean;
};

const defaultItems: BazaarItem[] = [
  {
    id: '4',
    title: 'Serejandmyself',
    imgSrc: '/serejandmyself.jpeg',
    description: 'No bullshit blog by serejandmyself. Enter the rabbit hole',
    link: 'https://serejandmyself.github.io',
  },
  {
    id: '5',
    title: 'DAO',
    imgSrc: '/cw3.png',
    description: 'DAO. We are a future DAO. Under Development',
    blur: true,
  },
  { id: '6', title: 'IPFS', imgSrc: '/cw3.png', description: 'Store files permanently.' },
  {
    id: '7',
    title: 'Docs and Guides',
    imgSrc: '/cw3.png',
    link: 'https://staking.citizenweb3.com',
    description:
      'Various Guides and Docs can be found on our staking page in each networks details, under the Public Goods section',
  },
  {
    id: '0',
    title: 'Merch',
    imgSrc: '/cw3.png',
    blur: true,
    description: 'We are planning some very cool merch soon. Stay Tuned',
  },
  {
    id: '1',
    title: `NFT's`,
    imgSrc: '/nft.jpg',
    link: 'https://www.stargaze.zone/p/stars1vl6ajz05llk3ugascwcyehx7y2yjjvn5scrcg0/collections',
    description: 'The Old Citizen Cosmos NFT Collection',
  },
  {
    id: '2',
    title: 'Decentraland',
    imgSrc: '/cw3.png',
    blur: true,
    description: 'Under Development. Plans to expand to the metaverse',
  },
  {
    id: '3',
    title: 'Lives and Debates',
    imgSrc: '/cw3.png',
    link: 'https://staking.citizenweb3.com',
    description:
      'Our previous Live and Debates can be found on our staking page in each networks details, under the Public Goods section',
  },
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
function BazaarCard({
  title,
  description,
  imgSrc,
  link = undefined,
  blur = false,
}: {
  title: string;
  description: string;
  imgSrc: string;
  link?: string;
  blur?: boolean;
}) {
  const content = (
    <Card className="group relative h-[30rem] w-[30rem] rounded-4xl hover:rounded-b-none md:h-[55rem] md:w-[55rem] snap-center shrink-0 py-24 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="text-center text-5xl">{title}</div>
      <div className="mt-[1rem] md:mt-[6rem] flex w-full items-center justify-center rounded-xl">
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={400}
          className={twMerge(
            'h-[12rem] w-[12rem] md:h-[33rem] md:w-[33rem] rounded-full object-cover',
            blur ? 'group-hover:blur-sm' : '',
          )}
        />
      </div>
      <div className="absolute top-[55rem] left-0 right-0 text-2xl hidden group-hover:block z-50 rounded-b-4xl bg-linear-to-t from-[#7C7C81]/25 to-[#7C7C81]/25 pt-0 px-12 pb-8 shadow-card">
        {description || 'Under Development'}
      </div>
    </Card>
  );

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
        {content}
      </Link>
    );
  } else {
    return content;
  }
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
                <div className={`transition-transform duration-300 ${i === active ? 'scale-75 z-10' : 'scale-50'}`}>
                  <BazaarCard
                    title={it.title}
                    description={it.description}
                    imgSrc={it.imgSrc}
                    blur={it.blur}
                    link={it.link}
                  />
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
