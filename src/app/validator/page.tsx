import Hero from '@/components/hero';
import BlockBorder from '@/components/block-border';
import SiteFooter from '@/components/footer';
import Staking from '@/components/staking';

export default function Page() {
  return (
    <div className="min-h-dvh bg-[hsl(var(--background))]">
      <main>
        <Hero title="Located in the middle of the Atlantic ocean with off the grid capabilities" />
        <Staking />
        <BlockBorder />
      </main>
      <SiteFooter />
    </div>
  );
}
