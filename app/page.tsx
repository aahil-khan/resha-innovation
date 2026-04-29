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
      <footer style={{ background: '#1a1a1a', color: '#F5F0E8' }} className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="17" stroke="#E87722" strokeWidth="1" opacity="0.5"/>
                  <circle cx="18" cy="18" r="5" fill="#1B5E3B"/>
                  {[0,45,90,135,180,225,270,315].map((angle, i) => (
                    <ellipse
                      key={i}
                      cx="18" cy="18" rx="2.5" ry="6"
                      fill="#E87722"
                      opacity="0.7"
                      transform={`rotate(${angle} 18 18) translate(0 -8)`}
                      style={{transformOrigin: '18px 18px'}}
                    />
                  ))}
                </svg>
              </div>
              <span className="text-xl" style={{ fontFamily: 'DM Serif Display, serif', color: '#F5F0E8' }}>resha</span>
            </div>
            <div className="text-center">
              <p className="text-sm" style={{ color: 'rgba(245,240,232,0.7)' }}>© 2025 RESHA. All rights reserved.</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(245,240,232,0.4)' }}>Reverence in Recycling — Pilot Stage | India</p>
            </div>
            <div className="flex gap-6 text-sm" style={{ color: 'rgba(245,240,232,0.6)' }}>
              <a href="/network" className="hover:text-saffron transition-colors">Network</a>
              <a href="/onboard" className="hover:text-saffron transition-colors">Partner</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
