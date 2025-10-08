import { FC } from 'react';
import BlockTitle from '@/components/block-title';
import BlockText from '@/components/block-text';
import Image from 'next/image';
import Link from 'next/link';

const text = `Citizen Web3 is a self-hosted, independent and non custodial validator. Off the grid, baremetal infrastructure provider, with a focus on Privacy Networks.
We work on a mixture of broadband and Starlink internet connections, and partially run off solar energy. We strongly believe in decentralized infrastructure, independent of the grid, and that's our end goal. Our full architecture.
We use Multi-party computation software (Horcrux) on all our nodes, to protect stakers from double signing. We use Re-Stake on our mainnet nodes, set to restake twice per day, so users can compound their staking rewards more efficiently.`;

const Manifesto: FC = () => (
  <section id="manifesto" className="pb-12">
    <div className="max-w-[80vw] text-justify md:text-left md:max-w-[80vw] mx-auto">
      <BlockTitle title={'Staking with Citizen Web3 Validator'} className="mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <BlockText text={text} className="text-xl leading-8" />
        <div className="w-full flex flex-col items-center justify-center">
          <div className="*:w-16 *:h-auto mt-12 flex gap-4 md:gap-6 lg:gap-8 justify-center">
            <Image src="/medals/eco.svg" alt="eco" width={136} height={136} />
            <Image src="/medals/github.svg" alt="github" width={136} height={136} />
            <Image src="/medals/horcrux.svg" alt="horcrux" width={136} height={136} />
            <Image src="/medals/restake.svg" alt="restake" width={136} height={136} />
            <Image src="/medals/keyhole.svg" alt="keyhole" width={136} height={136} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-6 lg:gap-8">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://staking.citizenweb3.com/"
              className="hover:no-underline relative py-6 px-28 font-bold block text-3xl text-center bg-[#1A1A1B] rounded-lg hover:bg-[#ffffff]/15 cursor-pointer mt-8"
            >
              <Image src="/arrow.svg" alt="svg" width={12} height={12} className="absolute top-3 right-3 w-3 h-auto" />
              Staking
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://monitor.citizenweb3.com"
              className="hover:no-underline relative py-6 px-28 font-bold block text-3xl text-center bg-[#1A1A1B] rounded-lg hover:bg-[#ffffff]/15 cursor-pointer mt-8"
            >
              <Image src="/arrow.svg" alt="svg" width={12} height={12} className="absolute top-3 right-3 w-3 h-auto" />
              Monitor
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Manifesto;
