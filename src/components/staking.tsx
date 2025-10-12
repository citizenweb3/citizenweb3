import { FC } from 'react';
import BlockTitle from '@/components/block-title';
import BlockText from '@/components/block-text';
import Image from 'next/image';
import Link from 'next/link';

const text = (
  <div>
    Citizen Web3 is a self-hosted, independent and non custodial{' '}
    <Link href={'https://staking.citizenweb3.com/'} className="underline">
      validator
    </Link>
    . Off the grid, baremetal infrastructure provider, with a focus on Privacy Networks.
  </div>
);

const text2 = (
  <div>
    We work on a mixture of broadband and Starlink internet connections, and partially run off solar energy. We strongly
    believe in decentralized infrastructure, independent of the grid, and that&#39;s our end goal. Our full{' '}
    <Link
      href={'https://github.com/citizenweb3/staking?tab=readme-ov-file#citizen-web3-validator-architecture'}
      className="underline"
    >
      architecture
    </Link>
    .
  </div>
);

const text3 = (
  <div>
    We use Multi-party computation software (
    <Link href={'https://github.com/strangelove-ventures/horcrux'} className="underline">
      Horcrux
    </Link>
    ) on all our nodes, to protect stakers from double signing. We use Re-Stake on our mainnet nodes, set to restake
    twice per day, so users can compound their staking rewards more efficiently.
  </div>
);

const Manifesto: FC = () => (
  <section id="manifesto" className="pb-12">
    <div className="max-w-[80vw] text-justify md:text-left md:max-w-[80vw] mx-auto">
      <BlockTitle title={'Staking with Citizen Web3 Validator'} className="mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-4">
          <BlockText text={text} className="text-xl leading-8" />
          <BlockText text={text2} className="text-xl leading-8" />
          <BlockText text={text3} className="text-xl leading-8" />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="*:w-18 *:h-auto mt-12 flex gap-4 md:gap-6 lg:gap-8 justify-center">
            <Image
              src="/medals/eco.svg"
              alt="eco"
              width={136}
              height={136}
              title={'Green Energy'}
              className="hover:scale-105 transform transition-transform duration-300 ease-in-out"
            />
            <Image
              src="/medals/github.svg"
              alt="github"
              title={'Github'}
              width={136}
              height={136}
              className="hover:scale-105 transform transition-transform duration-300 ease-in-out"
            />
            <Image
              src="/medals/horcrux.svg"
              alt="horcrux"
              title={'Key Sharding via Horcrux'}
              width={136}
              height={136}
              className="hover:scale-105 transform transition-transform duration-300 ease-in-out"
            />
            <Image
              src="/medals/restake.svg"
              alt="restake"
              title={'Auto Reward Re-Stake x2 p/day'}
              width={136}
              height={136}
              className="hover:scale-105 transform transition-transform duration-300 ease-in-out"
            />
            <Image
              src="/medals/keyhole.svg"
              alt="keyhole"
              title={'Open Source'}
              width={136}
              height={136}
              className="hover:scale-105 transform transition-transform duration-300 ease-in-out"
            />
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
