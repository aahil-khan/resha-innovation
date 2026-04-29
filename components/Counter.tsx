'use client';

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

export function Counter({ value, duration = 2000, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for lazy animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate counter when visible
  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easedProgress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
      const currentCount = Math.floor(easedProgress * value);

      setCount(currentCount);

      if (progress === 1) {
        clearInterval(interval);
        setCount(value);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isVisible, value, duration]);

  return (
    <div
      ref={elementRef}
      className="counter-animate text-4xl font-bold text-saffron font-sans"
    >
      {count.toLocaleString()}{suffix}
    </div>
  );
}
