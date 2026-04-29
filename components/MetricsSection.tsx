'use client';

import { useEffect, useRef, useState } from 'react';
import { NETWORK_METRICS, HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';

function AnimatedCounter({ target, suffix = '', duration = 2200 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="tabular-nums">
      {count.toLocaleString('en-IN')}{suffix}
    </div>
  );
}

const metricIcons: Record<string, string> = {
  Leaf: '🌿',
  MapPin: '📍',
  Building: '🏛️',
  Shield: '✅',
  Map: '🗺️',
  Wind: '💨',
};

export function MetricsSection() {
  const metrics = HOME_SECTIONS.metrics;

  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#F5F0E8' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-saffron"/>
            <span className="text-saffron text-xs font-semibold uppercase tracking-widest">ESG Impact</span>
            <div className="w-6 h-px bg-saffron"/>
          </div>
          <h2
            className="text-4xl md:text-6xl text-forest mb-4"
            style={{ fontFamily: 'DM Serif Display, serif' }}
          >
            {metrics.title}
          </h2>
          <p className="text-dark-gray max-w-lg mx-auto">{metrics.description}</p>
        </div>

        {/* Metrics grid — 3 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {NETWORK_METRICS.map((metric, index) => (
            <div
              key={index}
              className="sacred-card p-8 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {metricIcons[metric.icon] || '📊'}
              </div>

              {/* Animated number */}
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{
                  fontFamily: 'DM Serif Display, serif',
                  background: 'linear-gradient(135deg, #E87722, #F5A623)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <AnimatedCounter target={metric.value} suffix={metric.suffix} />
              </div>

              {/* Label */}
              <p className="text-dark-gray text-sm font-medium leading-tight">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Impact banner */}
        <div
          className="mt-12 rounded-2xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #1B5E3B, #134530)', color: 'white' }}
        >
          <div className="text-4xl mb-4">🕉️</div>
          <p
            className="text-xl md:text-2xl text-white italic mb-3"
            style={{ fontFamily: 'DM Serif Display, serif' }}
          >
            Every kilogram diverted is a prayer answered — and a river protected.
          </p>
          <p className="text-white/60 text-sm">
            RESHA's pilot network spans Uttar Pradesh, Punjab, and Andhra Pradesh — expanding to 12 states by 2026.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <EthnicDivider />
      </div>
    </section>
  );
}
