import Image from 'next/image';
import Card from '@/components/card';

const items = [
  {
    title: 'Validator Info',
    icon: '/tools/vi.svg',
    href: 'https://validatorinfo.com',
  },
  {
    title: 'Podcast',
    icon: '/tools/podcast.png',
    href: 'https://www.citizenweb3.com/episodes',
  },
  {
    title: 'Staking',
    href: 'https://staking.citizenweb3.com',
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
    title: 'Chain Data Indexer',
    icon: '/github.svg',
    href: 'https://github.com/citizenweb3/chain-data-indexer',
  },
  {
    title: 'Bazaar',
    href: '#',
  },
];

export function ToolsGrid() {
  return (
    <section id="tools" className="py-16 md:py-20">
      <div className="max-w-[80vw] mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-wide">Tools, Projects and Public Goods</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <a key={item.title} href={item.href} className="group no-underline text-white">
              <Card className="transition hover:bg-white/10 hover:scale-105">
                <div className="flex items-center justify-center text-2xl">
                  <span className="">{item.title}</span>
                </div>
                <div className="mt-8 flex h-28 items-center justify-center rounded-xl">
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={138}
                      height={138}
                      className="opacity-90 w-32 h-32 rounded-full"
                    />
                  ) : (
                    <Image
                      src="/cw3.png"
                      alt="logo"
                      width={138}
                      height={138}
                      className="opacity-90 w-32 h-32 rounded-full blur-xs"
                    />
                  )}
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
