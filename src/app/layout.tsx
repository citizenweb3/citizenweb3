import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Citizen Web3',
  description:
    'Citizen Web3, a non-custodial, self-hosted bare-metal validator. Focused on Privacy networks. Offering public endpoints, archives, snapshots, and relayers. Off-the-grid infrastructure in the Atlantic Ocean for decentralized blockchain validation and rewards.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Citizen Web3 Validator</title>
        <script defer data-domain="citizenweb3.com" src="https://plausible.io/js/script.js"></script>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Citizen Web3, a non-custodial, self-hosted bare-metal validator. Focused on Privacy networks. Offering public endpoints, archives, snapshots, and relayers. Off-the-grid infrastructure in the Atlantic Ocean for decentralized blockchain validation and rewards."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="non-custodial staking, bare-metal validator, blockchain infrastructure, off-grid validator, privacy validator, public endpoints, snapshots relayers, decentralized staking, Web3 validator, archive nodes, staking rewards"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Citizen Web3 Validator" />
        <meta
          property="og:description"
          content="Citizen Web3, a non-custodial, self-hosted bare-metal validator. Focused on Privacy networks. Offering public endpoints, archives, snapshots, and relayers. Off-the-grid infrastructure in the Atlantic Ocean for decentralized blockchain validation and rewards."
        />
        <meta property="og:image" content="https://citizenweb3.com/cw3logo.png" />
        <meta property="og:url" content="https://citizenweb3.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Citizen Web3 Validator" />
        <meta
          name="twitter:description"
          content="Citizen Web3, a non-custodial, self-hosted bare-metal validator. Focused on Privacy networks. Offering public endpoints, archives, snapshots, and relayers. Off-the-grid infrastructure in the Atlantic Ocean for decentralized blockchain validation and rewards."
        />
        <meta name="twitter:image" content="https://citizenweb3.com/cw3logo.png" />
        <meta name="twitter:url" content="https://staking.citizenweb3.com" />

        <link rel="canonical" href="https://citizenweb3.com/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
