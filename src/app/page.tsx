import { SiteHeader } from '@/components/site-header';
import Hero from '@/components/hero';
import { ToolsGrid } from '@/components/tools-grid';
import Manifesto from '@/components/manifesto';
import About from '@/components/about';
import BlockBorder from '@/components/block-border';
import SiteFooter from '@/components/footer';

export default function Page() {
  return (
    <div className="min-h-dvh bg-[hsl(var(--background))]">
      <SiteHeader />
      <main>
        <Hero title="Citizen Web3: Non‑Custodial, Privacy‑Focused, Self‑Hosted Validator" />
        <section id="tools" className="py-16 md:py-20">
          <div className="max-w-[80vw] mx-auto px-4">
            <h2 className="mb-12 text-center text-2xl font-bold tracking-wide">Tools, Projects and Public Goods</h2>
            <ToolsGrid />
          </div>
        </section>
        <BlockBorder />
        <Manifesto />
        <BlockBorder />
        <About />
        <BlockBorder />
      </main>
      <SiteFooter />
    </div>
  );
}
