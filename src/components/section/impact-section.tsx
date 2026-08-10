'use client';

import React, { useEffect, useState, useRef } from 'react';

interface MetricProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

const useCountUp = (end: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          setTimeout(() => {
            window.requestAnimationFrame(step);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [end, duration, delay, hasAnimated]);

  return { count, ref };
};

const MetricCard = ({ value, suffix = '', prefix = '', label, delay = 0 }: MetricProps) => {
  const { count, ref } = useCountUp(value, 2000, delay);

  return (
    <div 
      ref={ref}
      className="relative group overflow-hidden rounded-2xl bg-card/50 backdrop-blur-md border border-border/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] hover:border-primary/50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
        <div className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70 group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
          {prefix}{count}{suffix}
        </div>
        <div className="text-sm md:text-base text-muted-foreground font-medium max-w-[150px]">
          {label}
        </div>
      </div>
    </div>
  );
};

export default function ImpactSection() {
  const metrics = [
    { value: 14, suffix: '+', label: 'Years of Engineering Experience', delay: 0 },
    { value: 5, suffix: 'M+', label: 'Users Impacted via Digital Banking', delay: 100 },
    { value: 3, label: 'Enterprise Banking Apps Architected', delay: 200 },
    { value: 2, label: 'Awards for Excellence', delay: 300 },
    { value: 50, suffix: '%', label: 'Faster Delivery via AI-powered Workflows', delay: 400 },
    { value: 15, suffix: '+', label: 'Engineers Mentored & Grown', delay: 500 },
  ];

  return (
    <div className="flex flex-col space-y-12 py-12 w-full">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">Impact</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col items-center text-center space-y-2 pt-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Impact & Innovation</h2>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            Driving digital transformation across the UAE&apos;s leading financial institutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
}
