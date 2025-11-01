'use client';

import { Section } from '@/components/section';
import { BorderText } from '@/components/ui/border-number';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Droplets, Sprout, TrendingUp } from 'lucide-react';

type Stat = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const stats: Stat[] = [
  {
    title: '1,200+',
    subtitle: 'Growers launched across South India',
    description:
      'Weekend cohorts in Tamil, Kannada, Telugu, and Malayalam build farm-ready skillsets.',
    href: '#testimonials',
    icon: Sprout,
  },
  {
    title: '93%',
    subtitle: 'Harvest success in the first 21 days',
    description:
      'Climate-calibrated playbooks and WhatsApp mentor check-ins prevent contamination.',
    href: '#workshops',
    icon: Droplets,
  },
  {
    title: '₹2.4L',
    subtitle: 'Median annual ROI post-program',
    description:
      'Pricing templates, buyer connects, and packaging SOPs help alumni scale predictable revenue.',
    href: '#pricing',
    icon: TrendingUp,
  },
];

export function Statistics() {
  return (
    <Section
      id="statistics"
      title="Impact Snapshot"
      subtitle="Growing sustainable microgreen businesses across South India"
      description="Key outcomes from our latest cohorts and alumni network."
      align="center"
    >
      <div
        className="border-x border-t"
        style={{
          backgroundImage:
            'radial-gradient(circle at bottom center, hsl(var(--secondary) / 0.4), hsl(var(--background)))',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Link
                href={stat.href}
                key={stat.title}
                aria-label={stat.subtitle}
                className="relative flex flex-col items-center sm:items-start justify-between gap-6 py-10 px-6 text-center sm:text-left border-b sm:border-b-0 last:border-b-0 sm:border-r sm:last:border-r-0 first:border-t-0 sm:[&:nth-child(-n+3)]:border-t-0 group overflow-hidden"
              >
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-500">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <BorderText
                    text={stat.title}
                    className="text-[3.5rem] sm:text-[4rem] md:text-[5rem]"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <p className="text-base font-semibold text-foreground">
                    {stat.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
