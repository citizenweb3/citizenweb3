import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <div className="max-w-[80vw] mx-auto py-8 text-white">
      <div className="text-2xl font-normal mb-6">Ⓕ  May the Code be with You</div>
      <div className="w-full h-px bg-white/50 mb-8" />
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 md:gap-x-24 gap-y-8 text-xl">
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
            <Link target="_blank" rel="noopener noreferrer" href="https://privacy.citizenweb3.com">
              Privacy Forums
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://agents.citizenweb3.com">
              AI Agents
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://monitor.citizenweb3.com">
              Monitor
            </Link>
            <Link href="/#careers">Careers</Link>
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
      </div>
    </div>
  );
};

export default Footer;
