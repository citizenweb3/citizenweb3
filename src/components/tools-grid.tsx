import Image from 'next/image';
import Card from '@/components/card';

const items = [
  {
    title: 'Validator Info',
    icon: '/tools/vi.svg',
    href: 'https://validatorinfo.com',
    description:
      'Validator Info: Web3 Blockchain Explorer and Interactive Dashboard. Validator, Mining Pool, Token and Network Onchain Metrics',
    underDevelopment: false,
  },
  {
    title: 'Podcast',
    icon: '/tools/podcast.png',
    href: 'https://podcast.citizenweb3.com',
    description:
      'Citizen Web3 Podcast: Interviews and stories from key Web3 builders, contributors and thinkers. Over 5 years on air!',
    underDevelopment: false,
  },
  {
    title: 'Staking',
    icon: '/cw3.png',
    href: 'https://www.citizenweb3.com/validator',
    description:
      'Self-Hosted, Bare-Metal Validator Infrastructure. Off the Grid Capacity. Endpoints, Archive, Snapshots and Relaying',
    underDevelopment: false,
  },
  {
    title: 'WEB3 Society',
    icon: '/tools/web3society.jpg',
    href: 'https://t.me/web_3_society',
    description:
      'Web3 Values-driven, Blockchain-agnostic Community for collaboration. Learning to Forget Tribalism and Love the Tech. Future DAO',
    underDevelopment: false,
  },
  {
    title: 'BVC',
    icon: '/tools/bvc.webp',
    href: 'https://bvc.citizenweb3.com/',
    description:
      'Baremetal Validator Coven: Baremetal Validator Coven. Community and Docs for Selfhosted and Baremetal Blockchain Network Operators',
    underDevelopment: true,
  },
  {
    title: 'Chain Data Indexer',
    icon: '/github.svg',
    href: 'https://github.com/citizenweb3/chain-data-indexer',
    description: 'A high-performance, modular blockchain data indexer designed for powering block explorers, analytics platforms, DeFi dashboards, compliance tools, and research projects. Ongoing development',
    underDevelopment: true,
  },
  {
    title: 'Bazaar',
    icon: '/cw3.png',
    href: '/bazaar',
    description: 'Bazaar: NFTs, Merch, Lives, Debates, Virtual Spaces and more...',
    underDevelopment: true,
  },
];

export function ToolsGrid() {
  return (
    <section id="tools" className="py-16 md:py-20">
      <div className="max-w-[80vw] mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-wide">Tools, Projects and Public Goods</h2>
        <div className="grid gap-x-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <a key={item.title} href={item.href} className="group no-underline text-white h-[27rem] block hover:z-50">
              <Card className="transition py-6">
                <div className="flex items-center justify-center text-2xl">
                  <span className="text-nowrap">{item.title}</span>
                </div>
                <div className="mt-8 flex h-28 items-center justify-center rounded-xl">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={138}
                    height={138}
                    className={`opacity-90 w-32 h-32 rounded-full ${item.underDevelopment ? 'grayscale-100 group-hover:grayscale-0' : ''}`}
                  />
                </div>
                <div className="mt-8 hidden group-hover:block">{item.description}</div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
