"use client";

import { AuroraText } from "@/components/aurora-text";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CalendarDays, Leaf, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.a
      href="/learn/getting-started"
      className="flex w-auto items-center space-x-2 rounded-full bg-emerald-500/10 px-2 py-1 ring-1 ring-emerald-400/40 whitespace-pre"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="w-fit rounded-full bg-emerald-500 px-2 py-0.5 text-left text-xs font-medium text-white sm:text-sm">
        🌿 Free Guide
      </div>
      <p className="text-xs font-medium text-primary sm:text-sm">
        Download our Microgreens Starter Guide
      </p>
      <svg
        width="12"
        height="12"
        className="ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="hsl(var(--primary))"
        />
      </svg>
    </motion.a>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-3xl flex-col overflow-hidden pt-8">
      <motion.h1
        className="text-left text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl tracking-tight"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        <motion.span
          className="inline-block text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease,
          }}
        >
          <AuroraText className="leading-normal">
            {siteConfig.hero.title}
          </AuroraText>
        </motion.span>
      </motion.h1>
      <motion.h2
        className="text-left mt-3 text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.55,
          duration: 0.8,
          ease,
        }}
      >
        {siteConfig.hero.subtitle}
      </motion.h2>
      <motion.p
        className="text-left mt-4 max-w-xl leading-normal text-muted-foreground sm:text-base sm:leading-normal text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        {siteConfig.hero.description}
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  return (
    <div className="relative mt-6">
      <motion.div
        className="flex w-full max-w-2xl flex-col items-start justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href="/learn/getting-started"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600"
          )}
        >
          <Leaf className="h-5 w-5" />
          Start Learning Free
        </Link>
        <Link
          href="/training"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "w-full sm:w-auto flex gap-2 rounded-lg border-emerald-400/40 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
          )}
        >
          <CalendarDays className="h-5 w-5" />
          Professional Training
        </Link>
      </motion.div>
      <motion.p
        className="mt-3 text-sm text-muted-foreground text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        {siteConfig.hero.ctaDescription}
      </motion.p>
    </div>
  );
}

const heroHighlights = [
  {
    icon: Leaf,
    value: "25+",
    label: "Microgreen varieties suitable for South Indian climate",
  },
  {
    icon: CalendarDays,
    value: "7-14 days",
    label: "From seed to harvest with proper techniques",
  },
  {
    icon: PhoneCall,
    value: "₹300-500/kg",
    label: "Average market price for premium microgreens",
  },
];

function HeroVisual() {
  return (
    <motion.div
      className="relative flex h-full w-full flex-col gap-6 overflow-hidden rounded-3xl border border-emerald-400/20 bg-background/95 p-6 backdrop-blur"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8, ease }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_70%)]" />
      <div className="relative flex h-full flex-col gap-6 text-emerald-900">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-emerald-950/20 shadow-lg">
          <Image
            src="/1.png"
            alt="Microgreens ready for harvest"
            width={960}
            height={640}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="space-y-3 text-emerald-900">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
            Getting Started
          </p>
          <h3 className="text-2xl font-semibold leading-snug text-balance text-foreground">
            Turn small spaces into profitable microgreens farms with minimal investment.
          </h3>
          <p className="text-sm text-muted-foreground">
            Learn the fundamentals of microgreens cultivation, from seed selection to harvesting, with our comprehensive guides and expert resources tailored for South Indian climate.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {heroHighlights.map(({ icon: Icon, value, label }) => (
            <div
              key={value}
              className="flex h-full flex-col justify-between rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-4"
            >
              <Icon className="h-8 w-8 text-emerald-600/60" />
              <div className="mt-6">
                <p className="text-2xl font-semibold text-foreground">{value}</p>
                <p className="mt-2 text-sm text-muted-foreground text-balance">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <Section id="hero">
      <div className="relative grid grid-cols-1 gap-x-8 w-full p-6 lg:grid-cols-2 lg:p-12 border-x overflow-hidden">
        <div className="flex flex-col justify-start items-start lg:col-span-1">
          <HeroPill />
          <HeroTitles />
          <HeroCTA />
        </div>
        <div className="relative mt-8 lg:mt-0 lg:h-full lg:col-span-1">
          <HeroVisual />
        </div>
      </div>
    </Section>
  );
}
