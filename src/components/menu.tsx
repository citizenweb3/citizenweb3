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
  { title: 'Agents', href: 'https://agents.citizenweb3.com' },
  { title: 'About Us', href: '/#about' },
  { title: 'Contacts', href: '/#contacts' },
];

const MenuItem: FC<{ title: string; href: string; onClick: () => void }> = ({ title, href, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="w-[110px] h-[34px] md:w-[193px] md:h-[47px] flex items-center justify-center bg-[#1A1A1B] border-b border-[#262626] rounded-[10px] z-10 text-lg md:text-[22px] font-semibold tracking-[1.1px] text-center text-white cursor-pointer hover:bg-[#262626] transition-colors hover:no-underline"
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
    <>
      {isMenuOpened && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-md bg-black/30"
          onClick={() => setIsMenuOpened(false)}
        />
      )}
      <div ref={ref} className="absolute top-10 right-[6vw] flex items-center justify-center flex-col z-50 p-4 space-y-2">
        <div
          onClick={() => setIsMenuOpened(!isMenuOpened)}
          className="w-[110px] h-[34px] md:w-[193px] md:h-[47px] flex items-center justify-center bg-[#1A1A1B] border-b border-[#262626] rounded-[10px] z-10 text-lg md:text-[22px] font-semibold tracking-[1.1px] text-center text-white cursor-pointer hover:bg-[#262626] transition-colors"
        >
          Menu
        </div>
        {isMenuOpened &&
          menuItems.map((item) => (
            <MenuItem key={item.title} title={item.title} href={item.href} onClick={() => setIsMenuOpened(false)} />
          ))}
      </div>
    </>
  );
};

export default Menu;
