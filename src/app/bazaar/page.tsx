import Hero from '@/components/hero';
import SiteFooter from '@/components/footer';
import Bazaar from '@/components/bazaar';
import ScrollToTop from '@/components/scroll-to-top';

export default function Page() {
  return (
    <div className="min-h-dvh bg-[hsl(var(--background))]">
      <main>
        <Hero
          variant="home"
          title="Citizen Web3: Non‑Custodial, Privacy‑Focused, Self‑Hosted Validator"
          subtitle="Community Contributions and Other Projects"
        />
        <Bazaar />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
