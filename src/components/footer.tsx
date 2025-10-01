import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <div className="max-w-[60vw] grid grid-cols-2 md:grid-cols-4 gap-8 p-8  text-white mx-auto text-xl">
      <div className="*:font-semibold space-y-4 *:block">
        <Link href="">Validator</Link>
        <Link href="https://validatorinfo.com">ValidatorInfo</Link>
        <Link href="https://www.citizenweb3.com/episodes">Podcast</Link>
        <Link href="https://t.me/web_3_society">W3S</Link>
      </div>
      <div className="*:font-semibold space-y-4 *:block">
        <Link href="https://bvc.citizenweb3.com">B.V.C</Link>
        <Link href="/bazaar">Bazaar</Link>
        <Link href="https://www.citizenweb3.com/about">About us</Link>
        <Link href="">Contacts</Link>
      </div>
      <div className="*:font-light space-y-6 *:block">
        <Link href="https://github.com/citizenweb3/chain-data-indexer">Chain Data Indexer</Link>
        <Link href="">Careers</Link>
        <Link href="https://staking.citizenweb3.com">Staking</Link>
        <Link href="https://monitor.citizenweb3.com">Monitor</Link>
      </div>
      <div className="*:font-light space-y-6 *:block">
        <Link href="https://github.com/citizenweb3">GitHub</Link>
        <Link href="https://t.me/citizenweb3">Telegram</Link>
        <Link href="https://x.com/citizen_web3">Twitter/X</Link>
        <Link href="https://validatorinfo.com/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Footer;
