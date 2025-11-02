'use client';

import { Section } from '@/components/section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Ripple } from '@/components/ui/ripple';
import type { LucideIcon } from 'lucide-react';
import { CalendarClock, Handshake, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';

type CommunityHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Contributor = {
  name: string;
  avatar: string;
  location: string;
  focus: string;
};

const communityHighlights: CommunityHighlight[] = [
  {
    title: '14 city WhatsApp cohorts',
    description:
      'City-wise circles in Chennai, Bengaluru, Kochi, Hyderabad, and beyond swap climate notes daily.',
    icon: MapPin,
  },
  {
    title: 'Weekly harvest clinics',
    description:
      'Mentors host live troubleshooting every Sunday evening to review trays, yields, and hygiene SOPs.',
    icon: CalendarClock,
  },
  {
    title: 'Marketplace matchmaking',
    description:
      'Growers pair with chefs, grocers, and hospitals through our vetted buyer list and packaging partners.',
    icon: Handshake,
  },
];

const contributors: Contributor[] = [
  {
    name: 'Indira V',
    avatar:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60',
    location: 'Chennai, Tamil Nadu',
    focus: 'Balcony harvests for 40 families weekly',
  },
  {
    name: 'Harish Rao',
    avatar:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60',
    location: 'Bengaluru, Karnataka',
    focus: 'Supplying café chains with microgreen mixes',
  },
  {
    name: 'Anjali Mathew',
    avatar:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500&auto=format&fit=crop&q=60',
    location: 'Varkala, Kerala',
    focus: 'Resort breakfast garnishes under 100 km supply',
  },
  {
    name: 'Farhana Siddiqui',
    avatar:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60',
    location: 'Hyderabad, Telangana',
    focus: 'Hospital nutrition trays with contamination audits',
  },
  {
    name: 'Kalpana Collective',
    avatar:
      'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?w=500&auto=format&fit=crop&q=60',
    location: 'Madurai, Tamil Nadu',
    focus: 'Women-led subscription boxes for tier-2 towns',
  },
  {
    name: 'Rhea Monteiro',
    avatar:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=500&auto=format&fit=crop&q=60',
    location: 'Goa, India',
    focus: 'Farm-to-table brunch tasting menus for tourists',
  },
];

export function Community() {
  return (
    <Section
      id="community"
      title="Community Circles"
      subtitle="A pan-South India alumni network that keeps growers shipping on time"
      description="Peer cohorts, mentor hotlines, and a vetted buyer marketplace help every harvest find a plate."
      align="center"
    >
      <div className="relative border-x border-t overflow-hidden">
        <Ripple />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-3">
            {communityHighlights.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-emerald-400/30 bg-background/80 p-6 text-left backdrop-blur group transition-colors hover:border-emerald-400/60"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-500">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
              Alumni voices
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {contributors.map(({ name, avatar, location, focus }) => (
                <div
                  key={name}
                  className="flex items-start gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-4"
                >
                  <Avatar className="h-12 w-12 border border-background bg-muted">
                    <AvatarImage
                      src={avatar}
                      alt={name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-base font-semibold">
                      {name
                        .split(' ')
                        .map((segment) => segment[0])
                        .join('')
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1 text-left">
                    <p className="text-sm font-semibold text-foreground">
                      {name}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-emerald-600">
                      {location}
                    </p>
                    <p className="text-sm text-muted-foreground">{focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500 mb-6">
              Community in Action
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden border border-emerald-400/20">
                <video
                  src="/client-discussion-1.mp4"
                  poster="/client-discussion-1.jpg"
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="p-4 bg-emerald-500/5">
                  <p className="text-sm font-medium text-foreground">Live Mentoring Session</p>
                  <p className="text-xs text-muted-foreground mt-1">Weekly troubleshooting clinics with experienced growers</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-emerald-400/20">
                <Image
                  src="/client-discussion-2.jpg"
                  alt="Community discussion"
                  width={800}
                  height={450}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4 bg-emerald-500/5">
                  <p className="text-sm font-medium text-foreground">Peer Learning Circle</p>
                  <p className="text-xs text-muted-foreground mt-1">Growers sharing best practices and local market insights</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              variant="secondary"
              className="flex items-center gap-2 border-emerald-400/40 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Join the WhatsApp cohort
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
