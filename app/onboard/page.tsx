'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { OnboardingForm } from '@/components/OnboardingForm';
import { SuccessState } from '@/components/SuccessState';
import { IconBuilding, IconShieldCheck, IconLeaf } from '@/components/Icons';

const WHY_PARTNER = [
  {
    Icon: IconBuilding,
    title: 'Consecrated Processing',
    description: 'Cloth is processed on-site within temple premises — it never leaves as intact fabric.',
  },
  {
    Icon: IconShieldCheck,
    title: 'ESG Certification',
    description: 'Receive a RESHA ESG Partner Certificate with full traceability reporting.',
  },
  {
    Icon: IconLeaf,
    title: 'Circular Impact',
    description: 'Each kg diverted creates recycled textile fiber and prevents river contamination.',
  },
];

export default function OnboardPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [institutionName, setInstitutionName] = useState('');

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-16" style={{ background: '#F5F0E8' }}>
        {/* Hero */}
        <div className="px-6 pt-32 pb-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg width="700" height="700" viewBox="0 0 700 700" fill="none">
                {[50,100,150,200,250,300].map((r) => (
                  <circle key={r} cx="350" cy="350" r={r} stroke="#1B5E3B" strokeWidth="1"/>
                ))}
              </svg>
            </div>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-saffron"/>
              <span className="text-saffron text-xs font-semibold uppercase tracking-widest">Pilot Onboarding</span>
              <div className="w-6 h-px bg-saffron"/>
            </div>
            <h1 className="text-5xl md:text-6xl text-forest mb-4" style={{ fontFamily: 'Marcellus, serif' }}>
              Partner With RESHA
            </h1>
            <p className="text-dark-gray text-lg leading-relaxed">
              Request a Moksha Shredder installation for your institution. Our team will conduct a site assessment and pilot proposal within 7 business days.
            </p>
          </div>
        </div>

        <div className="px-6 max-w-4xl mx-auto">
          {isSubmitted ? (
            <SuccessState institutionName={institutionName} />
          ) : (
            <>
              {/* Why partner */}
              <div className="grid md:grid-cols-3 gap-5 mb-10">
                {WHY_PARTNER.map((card, i) => (
                  <div key={i} className="sacred-card p-6 text-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(27,94,59,0.08)' }}>
                      <card.Icon size={22} color="#1B5E3B" />
                    </div>
                    <h3 className="text-forest font-bold mb-2" style={{ fontFamily: 'Marcellus, serif', fontSize: '1.1rem' }}>
                      {card.title}
                    </h3>
                    <p className="text-dark-gray text-sm leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>

              {/* Form card */}
              <div className="rounded-2xl overflow-hidden shadow-sm mb-10" style={{ background: 'white', border: '1px solid #E8E5E0' }}>
                <div className="px-8 py-6" style={{ background: '#FAF7F2', borderBottom: '1px solid #E8E5E0' }}>
                  <h2 className="text-2xl text-forest mb-1" style={{ fontFamily: 'Marcellus, serif' }}>
                    Onboarding Request Form
                  </h2>
                  <p className="text-dark-gray text-sm">All fields marked * are required.</p>
                </div>
                <div className="px-8 py-8">
                  <OnboardingForm onSuccess={() => setIsSubmitted(true)} />
                </div>
              </div>

              {/* Trust note */}
              <div className="flex items-center justify-center gap-2 text-dark-gray/60 text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Your information is kept confidential and used only for pilot assessment purposes.
              </div>
            </>
          )}
        </div>
      </main>
      <footer style={{ background: '#1a1a1a', color: '#F5F0E8' }} className="py-10 px-6 text-center">
        <p className="text-sm text-white/60">© 2025 RESHA — Reverence in Recycling. Pilot Stage | India</p>
      </footer>
    </>
  );
}
