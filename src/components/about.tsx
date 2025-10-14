import { FC } from 'react';
import BlockTitle from '@/components/block-title';
import BlockText from '@/components/block-text';
import Image from 'next/image';
import Card from '@/components/card';
import Achivements from '@/components/achivements';
import Link from 'next/link';

const partners = [
  {
    title: 'Validator Info',
    icon: '/tools/vi.svg',
    href: 'https://validatorinfo.com',
  },
  {
    title: 'Bro-n-Bro',
    icon: '/tools/bro-n-bro.png',
    href: 'https://bronbro.io',
  },
  {
    title: 'WEB3 Society',
    icon: '/tools/web3society.jpg',
    href: 'https://t.me/web_3_society',
  },
  {
    title: 'BVC',
    icon: '/tools/bvc.webp',
    href: 'https://bvc.citizenweb3.com/',
  },
  {
    title: 'Cyber Accademy',
    icon: '/tools/ca.png',
    href: 'https://cyberacademy.dev',
  },
  {
    title: 'White Hacker',
    icon: '/tools/wh.png',
    href: 'https://t.me/WhiteHackerRu',
  },
  {
    title: 'Voting Power',
    icon: '/tools/vp.webp',
    href: 'https://votingpower.org',
  },
];

const text = `Citizen Web3 is a non-custodial, self-hosted infrastructure provider and an active member of the web3 galaxy. We are blockchain agnostic, censorship-resistant, and value-driven by the goals of cypherpunks. We build off-the-grid infrastructure hosted in the middle of the Atlantic Ocean. We focus on privacy networks first-hand. We believe in decentralization, cross-ecosystem collaboration, and technological sovereignty. Born in 2020 (formerly Citizen Cosmos), our mission is to grow the Web3 space by creating infrastructure, sharing knowledge, and empowering communities—without tribalism.`;

const About: FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-[80vw] mx-auto flex flex-col md:flex-row justify-center items-center space-x-12">
        <div className="md:hidden">
          <BlockTitle title={'About us'} />
        </div>
        <Image
          src="/about-cards.png"
          alt="about us"
          width={920}
          height={855}
          className="mx-auto mb-12 md:mb-16 w-[28.75rem] h-auto"
        />
        <div className="">
          <div className="hidden md:block">
            <BlockTitle title={'About us'} />
          </div>
          <BlockText text={text} />
          <Achivements />
        </div>
      </div>
      <div className="w-[90vw] mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 *:w-full *:md:w-auto">
        <Card className="flex justify-between flex-col items-center space-y-6">
          <div id="contacts" className="text-2xl">
            Contacts
          </div>
          <div>
            <div className="*:cursor-pointer *:rounded-full *:hover:shadow-[0_0_3px_3px_rgba(253,226,149,0.7)] *:mx-4 flex items-center justify-center ">
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/citizenweb3">
                <Image src="/github.png" alt="github" width={160} height={160} className="w-12 h-12" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://x.com/citizen_web3">
                <Image src="/twitter.png" alt="twitter" width={160} height={160} className="w-12 h-12" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://t.me/citizen_web_3">
                <Image src="/telegram.png" alt="telegram" width={160} height={160} className="w-12 h-12" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://citizenweb3.github.io/manuscripts">
                <Image src="/edit.png" alt="telegram" width={160} height={160} className="w-12 h-12" />
              </Link>
            </div>
          </div>
        </Card>
        <Card className="flex justify-between flex-col items-center space-y-4 flex-grow">
          <div className="text-2xl">Partners</div>
          <div className="flex-wrap *:w-14 *:h-auto *:cursor-pointer *:rounded-full *:hover:shadow-[0_0_3px_3px_rgba(253,226,149,0.7)] *:mx-3 flex items-center justify-center ">
            {partners.map((partner) => (
              <Link target="_blank" rel="noopener noreferrer" key={partner.title} href={partner.href}>
                <Image
                  src={partner.icon}
                  alt={partner.title}
                  width={80}
                  height={80}
                  className="w-20 h-auto rounded-full"
                />
              </Link>
            ))}
          </div>
        </Card>
        <Card className="md:-mt-32 md:py-2 md:px-2 md:min-h-96 md:min-w-80">
          <div className="space-y-6 pr-16 pb-32 pl-6 pt-4 mx-auto border-white/10 border-3 border-dashed rounded-2xl">
            <div id="careers" className="text-2xl mb-8 my-4">
              Career Section
            </div>
            <div className="text-lg">Join the Team!</div>
            <div className="text-lg">Looking for Interns.</div>
            <div className="text-lg">
              Apply{' '}
              <Link href="https://t.me/citizenweb3" className="text-[#2FFBF7] underline hover:no-underline">
                here
              </Link>
              .
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
