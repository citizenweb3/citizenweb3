import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="max-w-[60vw] grid grid-cols-2 md:grid-cols-4 gap-8 p-8  text-white mx-auto text-xl">
      <div className="*:font-semibold space-y-4 *:block">
        <a href="">Validator</a>
        <a href="https://validatorinfo.com">ValidatorInfo</a>
        <a href="https://www.citizenweb3.com/episodes">Podcast</a>
        <a href="https://t.me/web_3_society">W3S</a>
      </div>
      <div className="*:font-semibold space-y-4 *:block">
        <a href="https://bvc.citizenweb3.com">B.V.C</a>
        <a href="">Bazaar</a>
        <a href="https://www.citizenweb3.com/about">About us</a>
        <a href="">Contacts</a>
      </div>
      <div className="*:font-light space-y-6 *:block">
        <a href="https://github.com/citizenweb3/chain-data-indexer">Chain Data Indexer</a>
        <a href="">Careers</a>
        <a href="https://staking.citizenweb3.com">Staking</a>
        <a href="https://monitor.citizenweb3.com">Monitor</a>
      </div>
      <div className="*:font-light space-y-6 *:block">
        <a href="https://github.com/citizenweb3">GitHub</a>
        <a href="https://t.me/citizenweb3">Telegram</a>
        <a href="https://x.com/citizen_web3">Twitter/X</a>
        <a href="https://validatorinfo.com/blog">Blog</a>
      </div>
    </div>
  );
};

export default Footer;
