import Image from 'next/image';
import Card from '@/components/card';

const items = [
  {
    title: 'Merchandise',
    href: '#',
  },
  {
    title: `NFT's`,
    href: '#',
  },
  {
    title: 'Decentraland',
  },
  {
    title: 'Lives, Debates and Spaces',
    href: '#',
  },
  {
    title: 'Serejandmyelf',
    href: '#',
  },
  {
    title: 'DAO',
    href: '#',
  },
  {
    title: 'IPFS',
    href: '#',
  },
  {
    title: 'Docs and Guides',
    href: '#',
  },
];

export function Bazaar() {
  return (
    <section id="tools" className="py-16 md:py-20">
      <div className="max-w-[80vw] mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-wide">Bazaar</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <a key={item.title} href={item.href} className="group no-underline text-white">
              <Card className="transition hover:bg-white/10 hover:scale-105">
                <div className="flex items-center justify-center text-2xl">
                  <span className="">{item.title}</span>
                </div>
                <div className="mt-8 flex h-28 items-center justify-center rounded-xl">
                  <Image
                    src="/cw3.png"
                    alt="logo"
                    width={138}
                    height={138}
                    className="opacity-90 w-32 h-32 rounded-full blur-xs"
                  />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
