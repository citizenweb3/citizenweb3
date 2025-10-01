import { SiteHeader } from '@/components/site-header';
import Hero from '@/components/hero';
import BlockBorder from '@/components/block-border';
import SiteFooter from '@/components/footer';
import Bazaar from '@/components/bazaar';

export default function Page() {
  return (
    <div className="min-h-dvh bg-[hsl(var(--background))]">
      <SiteHeader />
      <main>
        <Hero title="Community Contributions and Other Projects" />
        <Bazaar />
        <BlockBorder />
      </main>
      <SiteFooter />
    </div>
  );
}
