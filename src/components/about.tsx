import { FC } from 'react';
import BlockTitle from '@/components/block-title';
import BlockText from '@/components/block-text';
import Image from 'next/image';
import MeetTeam from '@/components/meet-team';
import Link from 'next/link';

const text = `Citizen Web3 is a non-custodial, self-hosted infrastructure provider and an active member of the web3 galaxy. We are blockchain agnostic, censorship-resistant, and value-driven by the goals of cypherpunks. We build off-the-grid infrastructure hosted in the middle of the Atlantic Ocean. We focus on privacy networks first-hand. We believe in decentralization, cross-ecosystem collaboration, and technological sovereignty. Born in 2020 (formerly Citizen Cosmos), our mission is to grow the Web3 space by creating infrastructure, sharing knowledge, and empowering communities—without tribalism.`;

const text2 = (
  <div>
    Citizen Web3 is a self-hosted bare-metal provider in the middle of the Atlantic Ocean. We develop AI agent-focused
    tooling for the Web3 space. ValidatorInfo.com is our flagship product – a full Web3 explorer, dashboard, AI
    assistant, and more. Everything runs on our own unique, privacy-first infrastructure. We build for decentralization
    using our bare-metal capacity and AI tools.{' '}
    <Link href="https://staking.citizenweb3.com/" target="_blank" rel="noopener noreferrer" className="underline">
      Stake with us
    </Link>
    !
  </div>
);

const About: FC = () => {
  return (
    <section id="about" className="py-8 md:py-12">
      <div className="max-w-[80vw] mx-auto">
        <BlockTitle title={'About us'} className="text-left" />
        <div className="w-full h-px bg-white/50 mb-8" />
      </div>
      <div className="max-w-[80vw] mx-auto flex flex-col md:flex-row justify-center items-center space-x-12">
        <Image
          src="/about-cards.png"
          alt="about us"
          width={920}
          height={855}
          className="mx-auto mb-12 md:mb-16 w-[28.75rem] h-auto"
        />
        <div className="">
          <BlockText text={text} />
          <BlockText text={text2} className="mt-4" />
        </div>
      </div>
      <MeetTeam />
    </section>
  );
};

export default About;
