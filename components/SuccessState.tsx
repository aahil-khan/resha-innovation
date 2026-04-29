import Link from 'next/link';

interface SuccessStateProps {
  institutionName?: string;
}

export function SuccessState({ institutionName }: SuccessStateProps) {
  return (
    <div className="text-center py-16">
      {/* Success icon */}
      <div className="inline-flex items-center justify-center w-24 h-24 bg-saffron/20 rounded-full mb-8">
        <svg
          className="w-12 h-12 text-saffron"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h2 className="text-4xl font-sans font-bold text-forest mb-4">
        Welcome to RESHA!
      </h2>

      <p className="text-lg text-dark-gray font-sans mb-2">
        {institutionName && `Thank you, ${institutionName}!`}
      </p>

      <p className="text-dark-gray font-sans max-w-2xl mx-auto mb-12">
        Your application has been submitted successfully. Our team will review your information and contact you shortly with next steps.
      </p>

      {/* Key next steps */}
      <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
        <div className="bg-light-gray p-6 rounded-lg">
          <div className="text-3xl mb-3">📧</div>
          <h3 className="font-sans font-bold text-forest mb-2">Confirmation Email</h3>
          <p className="text-sm text-dark-gray font-sans">
            Check your inbox for our welcome email
          </p>
        </div>

        <div className="bg-light-gray p-6 rounded-lg">
          <div className="text-3xl mb-3">📞</div>
          <h3 className="font-sans font-bold text-forest mb-2">We&apos;ll Be In Touch</h3>
          <p className="text-sm text-dark-gray font-sans">
            Our team will call you within 24 hours
          </p>
        </div>

        <div className="bg-light-gray p-6 rounded-lg">
          <div className="text-3xl mb-3">🌍</div>
          <h3 className="font-sans font-bold text-forest mb-2">Network Access</h3>
          <p className="text-sm text-dark-gray font-sans">
            Get access to the full RESHA network
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="px-8 py-4 bg-forest text-parchment rounded-lg font-sans font-semibold hover:bg-saffron transition-all duration-300 text-lg"
        >
          Return Home
        </Link>
        <Link
          href="/network"
          className="px-8 py-4 border-2 border-forest text-forest rounded-lg font-sans font-semibold hover:bg-forest hover:text-parchment transition-all duration-300 text-lg"
        >
          Explore Network
        </Link>
      </div>

      {/* Contact info */}
      <div className="mt-16 p-8 bg-parchment/50 rounded-lg max-w-2xl mx-auto border border-light-gray">
        <p className="text-dark-gray font-sans mb-2">
          Questions? Contact our team:
        </p>
        <p className="text-forest font-sans font-bold text-lg">
          hello@resha.org
        </p>
      </div>
    </div>
  );
}
