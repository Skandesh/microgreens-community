'use client';

import { Section } from '@/components/section';
import OrbitingCircles from '@/components/ui/orbiting-circles';
import { cubicBezier, motion } from 'framer-motion';
import {
  ChefHat,
  ClipboardCheck,
  Droplet,
  GraduationCap,
  Leaf,
  MapPin,
  PhoneCall,
  Sprout,
  SunMedium,
  Truck,
  Users,
  UtensilsCrossed,
} from 'lucide-react';

const containerVariants = {
  initial: {},
  whileHover: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Card1() {
  const variant1 = {
    initial: {
      scale: 0.87,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: 'linear',
      },
    },
    whileHover: {
      scale: 0.8,
      boxShadow:
        'rgba(16,185,129,0.35) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px',
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: 'linear',
      },
    },
  };
  const variant2 = {
    initial: {
      y: -27,
      scale: 0.95,
      transition: {
        delay: 0,
        duration: 0.2,
        ease: 'linear',
      },
    },
    whileHover: {
      y: -55,
      scale: 0.87,
      boxShadow:
        'rgba(59,130,246,0.18) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px',
      transition: {
        delay: 0,
        duration: 0.2,
        ease: 'linear',
      },
    },
  };
  const variant3 = {
    initial: {
      y: -25,
      opacity: 0,
      scale: 1,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: 'linear',
      },
    },
    whileHover: {
      y: -45,
      opacity: 1,
      scale: 1,
      boxShadow:
        'rgba(190,242,100,0.18) 10px 20px 70px -20px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px',
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const containerVariants = {
    initial: {},
    whileHover: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="p-0 h-full overflow-hidden border-b lg:border-b-0 lg:border-r">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
        className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
      >
        <div className="flex h-full w-full items-center justify-center rounded-t-xl border-b">
          <div className="relative flex flex-col items-center justify-center gap-y-4 p-10">
            <motion.div
              variants={variant1}
              className="z-[1] flex w-full items-start gap-x-3 rounded-lg border border-emerald-400/40 bg-background/95 p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                <Sprout className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
                  Day 0 · Prep
                </p>
                <p className="text-sm font-medium text-foreground">
                  Seed sanitizing & cocopeat hydration
                </p>
                <p className="text-xs text-muted-foreground">
                  Follow soak timings for sunflower, red amaranth, and radish
                  microgreens.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={variant2}
              className="z-[2] flex w-full items-start gap-x-3 rounded-lg border border-sky-400/30 bg-background/95 p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white">
                <Droplet className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                  Day 3 · Canopy
                </p>
                <p className="text-sm font-medium text-foreground">
                  Humidity & misting schedule dialed to your city
                </p>
                <p className="text-xs text-muted-foreground">
                  Receive SMS nudges for blackout removal and misting windows in
                  Chennai & Bengaluru.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={variant3}
              className="absolute bottom-0 z-[3] m-auto flex w-[90%] items-start gap-x-3 rounded-lg border border-lime-400/30 bg-background/95 p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-500 text-white">
                <UtensilsCrossed className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-500">
                  Day 7 · Harvest
                </p>
                <p className="text-sm font-medium text-foreground">
                  Flavor pairing & packaging guidance
                </p>
                <p className="text-xs text-muted-foreground">
                  Send chef-ready tasting notes and shelf-life steps straight
                  from the cohort app.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start w-full">
          <h2 className="font-semibold tracking-tight text-lg">
            Home Grower Playbooks
          </h2>
          <p className="text-sm text-muted-foreground">
            Day-by-day routines to germinate, canopy, and harvest inside compact
            South Indian homes.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const Card2 = () => {
  const logs = [
    {
      id: 1,
      type: 'Prep',
      timestamp: 'Day 0 · 07:20',
      message: 'Batch 26 · Red amaranth disinfected with neem enzyme soak.',
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Sprout className="h-4 w-4" />
        </div>
      ),
    },
    {
      id: 2,
      type: 'Moisture',
      timestamp: 'Day 2 · 06:45',
      message: 'Humidity at 86%. Adjusted blackout misting to 12 seconds.',
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white">
          <Droplet className="h-4 w-4" />
        </div>
      ),
    },
    {
      id: 3,
      type: 'Climate',
      timestamp: 'Day 4 · 11:10',
      message: 'Grow rack lights set to 12 hrs. Leaf spread at 4.5 cm.',
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white">
          <SunMedium className="h-4 w-4" />
        </div>
      ),
    },
    {
      id: 4,
      type: 'Quality',
      timestamp: 'Day 6 · 08:30',
      message: 'QC photos uploaded. 98% tray coverage approved for harvest.',
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
          <ClipboardCheck className="h-4 w-4" />
        </div>
      ),
    },
    {
      id: 5,
      type: 'Dispatch',
      timestamp: 'Day 7 · 15:45',
      message:
        'Packed 42 clamshells. Cold-chain pickup confirmed for Koramangala cafes.',
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
          <Truck className="h-4 w-4" />
        </div>
      ),
    },
  ];
  return (
    <div className="p-0 h-full overflow-hidden border-b lg:border-b-0 lg:border-r">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
        className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
      >
        <div className="border-b items-center justify-center overflow-hidden bg-transparent rounded-t-xl h-4/5 w-full flex ">
          <motion.div className="p-5 rounded-t-md cursor-pointer overflow-hidden h-[270px] flex flex-col gap-y-3.5 w-full">
            {logs.map((log, index) => (
              <motion.div
                key={log.id}
                className="p-4 bg-transparent backdrop-blur-md shadow-[0px_0px_40px_-25px_rgba(0,0,0,0.25)] border border-border origin-right w-full rounded-md flex items-center"
                custom={index}
                variants={{
                  initial: (index: number) => ({
                    y: 0,
                    scale: index === 4 ? 0.9 : 1,
                    opacity: 1,
                    transition: {
                      delay: 0.05,
                      duration: 0.2,
                      ease: cubicBezier(0.22, 1, 0.36, 1),
                    },
                  }),
                  whileHover: (index: number) => ({
                    y: -85,
                    opacity: index === 4 ? 1 : 0.6,
                    scale: index === 0 ? 0.85 : index === 4 ? 1.1 : 1,
                    transition: {
                      delay: 0.05,
                      duration: 0.2,
                      ease: cubicBezier(0.22, 1, 0.36, 1),
                    },
                  }),
                }}
                transition={{
                  type: 'spring',
                  damping: 40,
                  stiffness: 600,
                }}
              >
                <div className="mr-3">{log.icon}</div>
                <div className="flex-grow">
                  <p className="text-foreground text-xs font-medium">
                    {log.timestamp} • {log.type}
                  </p>
                  <p className="text-muted-foreground text-xs">{log.message}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start w-full">
          <h2 className="font-semibold tracking-tight text-lg">
            Batch Command Center
          </h2>
          <p className="text-sm text-muted-foreground">
            Track soak cycles, climate nudges, quality approvals, and last-mile
            logistics from one timeline.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Card3 = () => {
  return (
    <div className="p-0 min-h-[500px] lg:min-h-fit overflow-hidden border-b lg:border-b-0 -z-0">
      <div className="relative flex flex-col gap-y-5 items-center justify-between h-full w-full">
        <div className="border-b items-center justify-center overflow-hidden rounded-t-xl h-4/5 w-full flex">
          <div className="relative flex items-center justify-center h-full w-full">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-[radial-gradient(circle,hsl(var(--accent)/0.3)_0%,transparent_100%)]"></div>
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-500 shadow-inner">
              <Leaf className="h-10 w-10" />
            </div>
            <OrbitingCircles duration={15} delay={0} radius={40} reverse>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                <PhoneCall className="h-4 w-4" />
              </div>
            </OrbitingCircles>
            <OrbitingCircles duration={15} delay={20} radius={80}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                <GraduationCap className="h-4 w-4" />
              </div>
            </OrbitingCircles>
            <OrbitingCircles radius={120} duration={20} delay={20}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                <ChefHat className="h-4 w-4" />
              </div>
            </OrbitingCircles>
            <OrbitingCircles radius={160} duration={40} delay={20}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white">
                <Users className="h-4 w-4" />
              </div>
            </OrbitingCircles>
            <OrbitingCircles radius={200} duration={30}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white">
                <MapPin className="h-4 w-4" />
              </div>
            </OrbitingCircles>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start w-full">
          <h2 className="font-semibold tracking-tight text-lg">
            Community & Market Access
          </h2>
          <p className="text-sm text-muted-foreground">
            Tap into mentor hotlines, chef tastings, and city cohorts to keep
            your harvests sold out year-round.
          </p>
        </div>
      </div>
    </div>
  );
};

export function UseCases() {
  return (
    <Section
      id="use-cases"
      title="Where Our Growers Win"
      subtitle="Microgreen outcomes for every pathway"
      description="From balcony harvests to hotel tasting menus, explore how each cohort translates into real revenue and wellness wins."
      align="center"
    >
      <div className="grid lg:grid-cols-3 h-full border border-b-0">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </Section>
  );
}
