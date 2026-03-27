import { FC } from 'react';
import BlockTitle from '@/components/block-title';
import BlockText from '@/components/block-text';
import Link from 'next/link';

const text = (
  <div className="space-y-6">
    <p>We are not here to chase hype. We are here to build decentralization.</p>
    <p>We are here to build the infrastructure layer that outlives every cycle — self-sovereign, privacy-preserving, sustainable, and now intelligent.</p>
    <p>We believe in freedom above needs, possibilities above enforcement, and values above desires.</p>
    <p>From a mote of dust suspended in a sunbeam, humanity is reaching for the stars through code. We intend to give that code freedom, resilience, and joy.</p>
    <p>Our planet is a{' '}
      <Link href="https://www.youtube.com/watch?v=wupToqz1e2g" target="_blank" rel="noopener noreferrer" className="underline">
        pale blue dot
      </Link>...
    </p>
    <blockquote className="border-l-2 border-[hsl(var(--accent))] pl-4 text-white/80">
      <p>&quot;Our planet is a lonely speck… In our obscurity, in all this vastness, there is no hint that help will come from elsewhere to save us from ourselves.&quot;</p>
      <footer className="mt-2 text-[hsl(var(--muted))]">— Carl Sagan</footer>
    </blockquote>
    <p>We envision Web3 defined by communication, cross-ecosystem respect, privacy and collective growth.</p>
    <p>We are building that help — one validator, one explorer, one autonomous AI at a time.</p>
    <p>May the code be with you.</p>
  </div>
);

const Manifesto: FC = () => (
  <section id="manifesto" className="py-8 md:py-12">
    <div className="max-w-[80vw] text-justify md:text-left mx-auto">
      <BlockTitle title={'Manifesto'} className="text-left" />
      <div className="w-full h-px bg-white/50 mb-8" />
      <BlockText text={text} />
    </div>
  </section>
);

export default Manifesto;
