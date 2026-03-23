'use client';

import { FC, useState } from 'react';
import Link from 'next/link';

import { useRef } from 'react';

import { useOnClickOutside } from 'usehooks-ts';

const menuItems = [
  { title: 'Staking', href: 'https://staking.citizenweb3.com' },
  { title: 'Validator', href: '/validator' },
  { title: 'Validator Info', href: 'https://validatorinfo.com' },
  { title: 'Podcast', href: 'https://podcast.citizenweb3.com' },
  { title: 'W.3.S.', href: 'https://t.me/web_3_society' },
  { title: 'B.V.C.', href: 'https://bvc.citizenweb3.com' },
  { title: 'Bazaar', href: '/bazaar' },
  { title: 'Privacy', href: 'https://privacy.citizenweb3.com' },
  { title: 'About Us', href: '/#about' },
  { title: 'Contacts', href: '/#contacts' },
];

const MenuItem: FC<{ title: string; href: string; onClick: () => void }> = ({ title, href, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="w-40 px-4 py-2.5 rounded-[10px] z-10 text-xl text-center cursor-pointer border-b-4 border-transparent hover:border-[#3e3e3e] hover:rounded-b-[10px] hover:scale-105 active:scale-100 active:border-transparent hover:no-underline"
      target={href.startsWith('http') && !href.includes('citizenweb3') ? '_blank' : '_self'}
      rel={href.startsWith('http') && !href.includes('citizenweb3') ? 'noopener noreferrer' : undefined}
    >
      {title}
    </Link>
  );
};

const Menu: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  // @ts-expect-error // types in usehooks-ts are wrong
  useOnClickOutside(ref, () => {
    setIsMenuOpened(false);
  });

  return (
    <div ref={ref} className="absolute top-10 right-10 flex items-center justify-center flex-col z-50 p-4 space-y-2">
      <div
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        className="w-40 px-4 py-2.5 rounded-[10px] z-10 text-xl text-center cursor-pointer border-b-4 border-transparent hover:border-[#3e3e3e] hover:rounded-b-[10px] hover:scale-105 active:scale-100 active:border-transparent"
      >
        Menu
      </div>
      {isMenuOpened &&
        menuItems.map((item) => (
          <MenuItem key={item.title} title={item.title} href={item.href} onClick={() => setIsMenuOpened(false)} />
        ))}
    </div>
  );
};

export default Menu;
