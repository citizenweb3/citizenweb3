import Hero from '@/components/hero';
import { ToolsGrid } from '@/components/tools-grid';
import DeepFocus from '@/components/deep-focus';
import About from '@/components/about';
import Manifesto from '@/components/manifesto';
import BottomCards from '@/components/bottom-cards';
import SiteFooter from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';

export default function Page() {
  return (
    <div className="min-h-dvh bg-[hsl(var(--background))]">
      <main>
        <Hero
          variant="home"
          title={'Citizen Web3: Self-Hosted Bare-Metal Provider\nDeveloping and Integrating AI Agent Tools'}
          subtitle={'No Cloud. No Masters.\nOff-grid Atlantic infrastructure powered by humans and AI agents.\nHome of ValidatorInfo.com'}
        />
        <ToolsGrid />
        <DeepFocus />
        <About />
        <Manifesto />
        <BottomCards />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
