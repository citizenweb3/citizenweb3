import { FC } from 'react';
import BlockTitle from '@/components/block-title';
import Image from 'next/image';
import Link from 'next/link';

const ctaBtnClass =
  'hover:no-underline relative py-3 px-6 md:py-4 md:px-10 font-bold block text-lg md:text-2xl text-center bg-[#1A1A1B] rounded-[9px] hover:bg-[#ffffff]/15 cursor-pointer';

const Staking: FC = () => (
  <>
    {/* Section 1: Non Custodial Staking */}
    <section id="staking" className="py-8 md:pb-12 md:pt-16">
      <div className="max-w-[88vw] mx-auto">
        <BlockTitle title="Non Custodial Staking with Citizen Web3 Validator" className="text-left" />
        <div className="w-full h-px bg-white/50 mb-8" />

        <p className="text-base font-bold tracking-[0.05em] mb-8 border-l-2 border-[hsl(var(--accent))] pl-4">
          2% cashback for our delegators!
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Text left */}
          <div className="md:w-3/5 text-base font-light leading-10 tracking-[0.05em] space-y-6">
            <p>
              Bare-Metal Staking with Citizen Web3 – Powered by our unique off-grid infra. Delegate to our validator and
              get the most private, independent service in Web3. Every delegation helps us keep building AI tools and
              decentralization.
            </p>
            <p>
              &quot;Our off-grid Atlantic bare-metal servers are 100% self-hosted, grid, solar + Starlink powered, and
              never touch big cloud companies. This is our main monetization – we sell bare-metal capacity to other
              validators and projects who want real privacy. No one else does it like us.&quot;
            </p>
            <p>
              Wherever possible we use Multi-party computation software (
              <Link
                href="https://github.com/strangelove-ventures/horcrux"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Horcrux
              </Link>
              ), to protect stakers from double signing, and Re-Stake (twice per day) to maximize staking rewards
              compounding.
            </p>
          </div>

          {/* Buttons + medals right */}
          <div className="md:w-2/5 flex flex-col items-center gap-6">
            <div className="grid grid-cols-2 gap-4 md:gap-12">
              <Link
                href="https://staking.citizenweb3.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={ctaBtnClass}
              >
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                  className="absolute top-3 right-3 w-3 h-auto"
                />
                Staking
              </Link>
              <Link
                href="https://monitor.citizenweb3.com"
                target="_blank"
                rel="noopener noreferrer"
                className={ctaBtnClass}
              >
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                  className="absolute top-3 right-3 w-3 h-auto"
                />
                Monitor
              </Link>
              <Link href="#" className={ctaBtnClass}>
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                  className="absolute top-3 right-3 w-3 h-auto"
                />
                Dashboard
              </Link>
              <Link
                href="https://github.com/citizenweb3/staking?tab=readme-ov-file#citizen-web3-validator-architecture"
                target="_blank"
                rel="noopener noreferrer"
                className={ctaBtnClass}
              >
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                  className="absolute top-3 right-3 w-3 h-auto"
                />
                Architecture
              </Link>
            </div>
            <div className="mt-12">
              <div className="flex gap-6 justify-center">
                <Image
                  src="/medals/green-energy-new.svg"
                  alt="Green Energy"
                  width={136}
                  height={136}
                  title="Green Energy"
                  className="md:w-20 w-14 h-auto hover:scale-105 transition-transform"
                />
                <Image
                  src="/medals/github-new.svg"
                  alt="Github"
                  width={136}
                  height={136}
                  title="Github"
                  className="md:w-20 w-14 h-auto hover:scale-105 transition-transform"
                />
                <Image
                  src="/medals/horcrux-new.svg"
                  alt="Horcrux"
                  width={136}
                  height={136}
                  title="Key Sharding via Horcrux"
                  className="md:w-20 w-14 h-auto hover:scale-105 transition-transform"
                />
                <Image
                  src="/medals/restake-new.svg"
                  alt="ReStake"
                  width={136}
                  height={136}
                  title="Auto Reward Re-Stake x2 p/day"
                  className="md:w-20 w-14 h-auto hover:scale-105 transition-transform"
                />
              </div>
            </div>
            <div>
              <div className="flex gap-6 justify-center">
                <Image
                  src="/medals/open-source-new.svg"
                  alt="Open Source"
                  width={136}
                  height={136}
                  title="Open Source"
                  className="md:w-20 w-14 h-auto hover:scale-105 transition-transform"
                />
                <Image
                  src="/medals/shi-new.svg"
                  alt="Self Hosted Infrastructure"
                  width={136}
                  height={136}
                  title="Self Hosted Infrastructure"
                  className="md:w-20 w-14 h-auto hover:scale-105 transition-transform"
                />
                <Image
                  src="/medals/otgi-new.svg"
                  alt="Off the grid infrastructure"
                  width={136}
                  height={136}
                  title="Off the grid infrastructure"
                  className="md:w-20 w-14 h-auto hover:scale-105 transition-transform"
                />
                <Image
                  src="/medals/runs-public-nodes.svg"
                  alt="Runs public nodes"
                  width={136}
                  height={136}
                  title="Runs public nodes"
                  className="md:w-20 w-14 h-auto hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 2: Enterprise Privacy Baremetal Staking */}
    <section id="enterprise" className="py-8 md:py-12">
      <div className="max-w-[88vw] mx-auto">
        <BlockTitle title="Enterprise Privacy Baremetal Staking" className="text-left" />
        <div className="w-full h-px bg-white/50 mb-8" />

        <div className="flex flex-col md:flex-row gap-12">
          {/* Text + list left */}
          <div className="md:w-3/5">
            <p className="text-base font-bold tracking-[0.05em] mb-6 border-l-2 border-[hsl(var(--accent))] pl-4 leading-10">
              Custom dashboard and off-grid setup for your fund and piece of mind.
              <br />
              No AWS/Google – truly independent nodes in the middle of the ocean.
            </p>
            <ul className="text-base font-light leading-10 tracking-[0.05em] list-disc list-inside space-y-1">
              <li>Slashing Insurance</li>
              <li>Commissions starting at 0%</li>
              <li>Special Offers for Delegators over $500K!</li>
              <li>Custom Dashboards</li>
              <li>Custom on-chain Reports</li>
              <li>Real Privacy</li>
            </ul>
          </div>

          {/* Buttons right */}
          <div className="md:w-2/5 flex items-end">
            <div className="grid grid-cols-2 gap-4 md:gap-8 w-full">
              <Link href="https://t.me/citizenweb3" target="_blank" rel="noopener noreferrer" className={ctaBtnClass}>
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                  className="absolute top-3 right-3 w-3 h-auto"
                />
                Quote
              </Link>
              <Link
                href="https://bvc.citizenweb3.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={ctaBtnClass}
              >
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                  className="absolute top-3 right-3 w-3 h-auto"
                />
                Join B.V.C.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Staking;
