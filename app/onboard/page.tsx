'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { OnboardingForm } from '@/components/OnboardingForm';
import { SuccessState } from '@/components/SuccessState';

export default function OnboardPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [institutionName, setInstitutionName] = useState('');

  const handleSuccess = () => {
    setIsSubmitted(true);
  };

  const handleFormChange = (formData: any) => {
    setInstitutionName(formData.institution_name || '');
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-6 bg-parchment min-h-screen">
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <SuccessState institutionName={institutionName} />
          ) : (
            <>
              {/* Header */}
              <div className="mb-12 text-center">
                <h1 className="text-5xl font-sans font-bold text-forest mb-4">
                  Join RESHA Today
                </h1>
                <p className="text-lg text-dark-gray font-sans max-w-2xl mx-auto">
                  Become part of India&apos;s circular economy revolution. Connect with institutions, processors, and innovators building a sustainable electronics future.
                </p>
              </div>

              {/* Why Join Section */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-lg border border-light-gray">
                  <div className="text-3xl mb-3">🌍</div>
                  <h3 className="font-sans font-bold text-forest mb-2">Scale Impact</h3>
                  <p className="text-sm text-dark-gray font-sans">
                    Access a network of 240+ organizations transforming e-waste
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-light-gray">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="font-sans font-bold text-forest mb-2">Track Progress</h3>
                  <p className="text-sm text-dark-gray font-sans">
                    Monitor your impact with real-time traceability and reporting
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-light-gray">
                  <div className="text-3xl mb-3">💼</div>
                  <h3 className="font-sans font-bold text-forest mb-2">Revenue Potential</h3>
                  <p className="text-sm text-dark-gray font-sans">
                    Recover valuable materials and generate revenue through responsible recycling
                  </p>
                </div>
              </div>

              {/* Form Card */}
              <div className="bg-white p-12 rounded-lg border-2 border-light-gray shadow-sm">
                <h2 className="text-3xl font-sans font-bold text-forest mb-2">
                  Tell Us About Your Organization
                </h2>
                <p className="text-dark-gray font-sans mb-8">
                  Please provide the following information to get started.
                </p>

                <OnboardingForm onSuccess={handleSuccess} />
              </div>

              {/* Trust indicators */}
              <div className="mt-12 text-center">
                <p className="text-dark-gray font-sans text-sm mb-4">
                  Trusted by leading organizations in India
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                  <div className="text-2xl">🏢</div>
                  <div className="text-2xl">🎓</div>
                  <div className="text-2xl">🏭</div>
                  <div className="text-2xl">🤝</div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <footer className="bg-dark-gray text-parchment py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans mb-2">© 2024 RESHA. All rights reserved.</p>
          <p className="text-sm text-parchment/70 font-sans">
            Reshaping Electronics Supply Chain for Humanity & the Environment
          </p>
        </div>
      </footer>
    </>
  );
}
