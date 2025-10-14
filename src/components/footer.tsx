import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <div className="max-w-[60vw] grid grid-cols-2 md:grid-cols-4 gap-8 p-8  text-white mx-auto text-xl">
      <div className="*:font-light *:text-base space-y-2 *:block">
        <Link href="/validator">Validator</Link>
        <Link target="_blank" rel="noopener noreferrer" href="https://validatorinfo.com">
          ValidatorInfo
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href="https://podcast.citizenweb3.com">
          Podcast
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href="https://t.me/web_3_society">
          W.3.S.
        </Link>
      </div>
      <div className="*:font-light *:text-base space-y-2 *:block">
        <Link target="_blank" rel="noopener noreferrer" href="https://bvc.citizenweb3.com">
          B.V.C.
        </Link>
        <Link href="/bazaar">Bazaar</Link>
        <Link href="/#about">About us</Link>
        <Link href="/#contacts">Contacts</Link>
      </div>
      <div className="*:font-light *:text-base space-y-2 *:block">
        <Link target="_blank" rel="noopener noreferrer" href="https://github.com/citizenweb3/chain-data-indexer">
          Chain Data Indexer
        </Link>
        <Link href="/#careers">Careers</Link>
        <Link target="_blank" rel="noopener noreferrer" href="https://staking.citizenweb3.com">
          Staking
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href="https://monitor.citizenweb3.com">
          Monitor
        </Link>
      </div>
      <div className="*:font-light *:text-base space-y-2 *:block">
        <Link target="_blank" rel="noopener noreferrer" href="https://github.com/citizenweb3">
          GitHub
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href="https://t.me/citizen_web_3">
          Telegram
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href="https://x.com/citizen_web3">
          Twitter/X
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href="https://citizenweb3.github.io/manuscripts">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Footer;
