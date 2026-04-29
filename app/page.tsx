import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { MokshaSection } from '@/components/MokshaSection';
import { TraceabilitySection } from '@/components/TraceabilitySection';
import { MetricsSection } from '@/components/MetricsSection';
import { NetworkTeaserSection } from '@/components/NetworkTeaserSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <MokshaSection />
        <TraceabilitySection />
        <MetricsSection />
        <NetworkTeaserSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
