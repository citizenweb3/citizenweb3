import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Card from '@/components/card';

interface ToolItem {
  title: string;
  icon: string;
  href: string;
  description: string;
  underDevelopment: boolean;
}

interface ToolGroup {
  subtitle: string;
  items: ToolItem[];
}

const groups: ToolGroup[] = [
  {
    subtitle: 'Services',
    items: [
      {
        title: 'Staking',
        icon: '/cw3.png',
        href: '/validator',
        description:
          'Self-Hosted, Bare-Metal Validator Infrastructure. Off the Grid Capacity. Endpoints, Archive, Snapshots and Relaying',
        underDevelopment: false,
      },
      {
        title: 'AI Tools',
        icon: '/cw3.png',
        href: 'https://agents.citizenweb3.com',
        description:
          'We are developing AI agents that help with staking, node monitoring, governance voting, and more. First one is already live on ValidatorInfo.',
        underDevelopment: false,
      },
      {
        title: 'Enterprise Staking',
        icon: '/cw3.png',
        href: 'https://www.citizenweb3.com/validator#enterprise',
        description:
          'Enterprise-grade bare-metal staking infrastructure. Self-hosted, off-the-grid, with Horcrux key sharding and auto-restaking.',
        underDevelopment: false,
      },
      {
        title: 'API',
        icon: '/tools/vi.svg',
        href: 'https://validatorinfo.com',
        description:
          'Web3 data API powered by ValidatorInfo. Access validator metrics, chain data, and governance information.',
        underDevelopment: true,
      },
    ],
  },
  {
    subtitle: 'Tools and Apps',
    items: [
      {
        title: 'Validator Info',
        icon: '/tools/vi.svg',
        href: 'https://validatorinfo.com',
        description:
          'Validator Info: Web3 Blockchain Explorer and Interactive Dashboard. Validator, Mining Pool, Token and Network Onchain Metrics',
        underDevelopment: false,
      },
      {
        title: 'Monitor',
        icon: '/cw3.png',
        href: 'https://monitor.citizenweb3.com',
        description:
          'Citizen Web3 Network Monitor. Real-time monitoring of our validator infrastructure and network health.',
        underDevelopment: false,
      },
      {
        title: 'Chain Data Indexer',
        icon: '/github.svg',
        href: 'https://github.com/citizenweb3/chain-data-indexer',
        description:
          'A high-performance, modular blockchain data indexer designed for powering block explorers, analytics platforms, DeFi dashboards, compliance tools, and research projects. Ongoing development',
        underDevelopment: true,
      },
      {
        title: 'Proposal Tracker',
        icon: '/tools/vi.svg',
        href: 'https://validatorinfo.com',
        description:
          'Automated proposal trackers for every network we support. Stay informed on governance votes and never miss a proposal.',
        underDevelopment: false,
      },
      {
        title: 'Validator RAG Agent',
        icon: '/tools/vi.svg',
        href: 'https://validatorinfo.com',
        description:
          'AI-powered retrieval-augmented assistant for validator data. Ask questions about networks, validators, staking, decentralization, privacy in natural language.',
        underDevelopment: false,
      },
    ],
  },
  {
    subtitle: 'Other Projects',
    items: [
      {
        title: 'Podcast',
        icon: '/tools/podcast.png',
        href: 'https://podcast.citizenweb3.com',
        description:
          'Citizen Web3 Podcast: Interviews and stories from key Web3 builders, contributors and thinkers. Over 5 years on air!',
        underDevelopment: false,
      },
      {
        title: 'Privacy Forum',
        icon: '/cw3.png',
        href: 'https://privacy.citizenweb3.com',
        description:
          'Privacy-focused community forums. Discuss Web3 privacy, censorship resistance, and decentralized infrastructure.',
        underDevelopment: false,
      },
      {
        title: 'B.V.C.',
        icon: '/tools/bvc.webp',
        href: 'https://bvc.citizenweb3.com/',
        description:
          'Baremetal Validator Coven: Community and Docs for Selfhosted and Baremetal Blockchain Network Operators',
        underDevelopment: true,
      },
      {
        title: 'Spasm Forum',
        icon: '/cw3.png',
        href: 'https://forum.validatorinfo.com',
        description:
          'Private decentralized forum built by Spasm Network. Community discussions with privacy and decentralization at the core.',
        underDevelopment: false,
      },
      {
        title: 'Web3 Society',
        icon: '/tools/web3society.jpg',
        href: 'https://t.me/web_3_society',
        description:
          'Web3 Values-driven, Blockchain-agnostic Community for collaboration. Learning to Forget Tribalism and Love the Tech. Future DAO',
        underDevelopment: false,
      },
      {
        title: 'Bazaar',
        icon: '/bazaar.svg',
        href: '/bazaar',
        description: 'Bazaar: NFTs, Merch, Lives, Debates, Virtual Spaces and more...',
        underDevelopment: true,
      },
    ],
  },
];

const isInternalLink = (href: string) => href.startsWith('/');

export function ToolsGrid() {
  return (
    <section id="tools" className="py-8 md:pt-12 pb-8">
      <div className="max-w-[88vw] mx-auto px-4">
        <h2 className="mb-4 text-left text-2xl font-bold tracking-wide">Tools, Projects and Public Goods</h2>
        <div className="w-full h-px bg-white/50 mb-10" />
        {groups.map((group) => (
          <div key={group.subtitle} className="mt-8 md:mt-10 first:mt-0">
            <p className="border-l-2 border-white pl-2 mb-8 md:mb-16 text-lg md:text-xl font-medium text-white/90">
              {group.subtitle}
            </p>
            <div className="grid gap-x-4 gap-y-6 md:gap-x-16 md:gap-y-16 grid-cols-2 md:grid-cols-4">
              {group.items.map((item) => {
                const content = (
                  <Card className="transition py-4 px-4 md:py-6 md:px-14">
                    <div className="flex items-center justify-center text-2xl">
                      <span className="text-nowrap">{item.title}</span>
                    </div>
                    <div className="mt-4 md:mt-8 flex h-16 md:h-28 items-center justify-center rounded-xl">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={138}
                        height={138}
                        className={twMerge(
                          'opacity-90 w-16 h-16 md:w-32 md:h-32 object-contain rounded-full',
                          item.underDevelopment && 'grayscale-100 group-hover:grayscale-0',
                        )}
                      />
                    </div>
                    <div className="mt-4 md:mt-8 text-xs md:text-base md:hidden md:group-hover:block">
                      {item.description}
                    </div>
                  </Card>
                );

                if (isInternalLink(item.href)) {
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group no-underline text-white min-h-[14rem] md:h-[27rem] block hover:z-50"
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group no-underline text-white min-h-[14rem] md:h-[27rem] block hover:z-50"
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
