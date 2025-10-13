'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useRef } from 'react';

import { useOnClickOutside } from 'usehooks-ts';

const menuItems = [
  { title: 'Staking', href: 'https://staking.citizenweb3.com' },
  { title: 'Validator', href: '/validator' },
  { title: 'Validator Info', href: 'https://validatorinfo.com' },
  { title: 'Podcast', href: 'https://podcast.citizenweb3.com' },
  { title: 'W3S', href: 'https://t.me/web_3_society' },
  { title: 'B.V.C', href: 'https://bvc.citizenweb3.com' },
  { title: 'Bazaar', href: '/bazaar' },
  { title: 'About Us', href: '/#about' },
  { title: 'Contacts', href: '/#contacts' },
];

const MenuItem: FC<{ title: string; href: string; onClick: () => void }> = ({ title, href, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="w-56 bg-[#1A1A1B] px-12 py-2.5 rounded-md hover:scale-105 z-10 text-xl cursor-pointer hover:bg-[#262626] transition duration-300 hover:no-underline"
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
    <div ref={ref} className="absolute top-10 left-10 flex items-center justify-center flex-col z-50 p-4 space-y-2">
      <div
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        className=" w-56 bg-[#1A1A1B] px-12 py-2.5 rounded-md hover:scale-105 z-10 text-xl flex items-center cursor-pointer hover:bg-[#262626] transition duration-300"
      >
        <Image src="/menu.png" alt="menu" width={24} height={24} className="mr-2 h-5 w-auto" />
        <div>Menu</div>
      </div>
      {isMenuOpened &&
        menuItems.map((item) => (
          <MenuItem key={item.title} title={item.title} href={item.href} onClick={() => setIsMenuOpened(false)} />
        ))}
    </div>
  );
};

export default Menu;
