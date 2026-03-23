import Hero from '@/components/hero';
import SiteFooter from '@/components/footer';
import Staking from '@/components/staking';
import ScrollToTop from '@/components/scroll-to-top';

export default function Page() {
  return (
    <div className="min-h-dvh bg-[hsl(var(--background))]">
      <main>
        <Hero
          variant="home"
          title={'Our Infra\nThe Heart of Everything'}
          subtitle="Staking with Citizen Web3 Validator"
        />
        <Staking />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
