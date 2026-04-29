import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { MokshaSection } from '@/components/MokshaSection';
import { TraceabilitySection } from '@/components/TraceabilitySection';
import { MetricsSection } from '@/components/MetricsSection';
import { NetworkTeaserSection } from '@/components/NetworkTeaserSection';
import { CTASection } from '@/components/CTASection';

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
      <footer className="bg-dark-gray text-parchment py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-sans mb-2">© 2024 RESHA. All rights reserved.</p>
          <p className="text-sm text-parchment/70 font-sans">
            Reshaping Electronics Supply Chain for Humanity & the Environment
          </p>
        </div>
      </footer>
    </>
  );
}
