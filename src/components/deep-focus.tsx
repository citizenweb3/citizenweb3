import { FC } from 'react';
import BlockTitle from '@/components/block-title';
import BlockText from '@/components/block-text';
import Image from 'next/image';
import Link from 'next/link';

const DeepFocus: FC = () => (
  <section id="deep-focus" className="py-8 md:py-12">
    <div className="max-w-[88vw] mx-auto">
      <BlockTitle title="Our Deep Focus and Goals" className="text-left mb-2" />
      <div className="w-full h-px bg-white/50 mb-8" />
      <BlockText
        text="We build for decentralization. We earn money from our unique bare-metal infra and AI tools so we can keep developing Web3 forever – without selling out or depending on big companies."
        className="text-xl leading-10 tracking-wider"
      />
      <BlockText
        text="We are developing AI agents that help with staking, node monitoring, governance voting, and more. First one is already live on ValidatorInfo. More coming soon – all self-hosted on our Atlantic infra."
        className="text-xl leading-10 tracking-wider mt-4"
      />
      <div className="flex justify-end mt-8">
        <Link
          href="https://staking.citizenweb3.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:no-underline relative py-3 px-6 md:py-4 md:px-10 font-bold block text-lg md:text-2xl text-center bg-[#1A1A1B] rounded-[9px] hover:bg-[#ffffff]/15 cursor-pointer"
        >
          <Image src="/arrow.svg" alt="arrow" width={12} height={12} className="absolute top-3 right-3 w-3 h-auto" />
          Stake & Cashback
        </Link>
      </div>
    </div>
  </section>
);

export default DeepFocus;
