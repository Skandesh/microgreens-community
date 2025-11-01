"use client";

import { Icons } from "@/components/icons";
import { MobileDrawer } from "@/components/mobile-drawer";
import { buttonVariants } from "@/components/ui/button";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [isLearnOpen, setIsLearnOpen] = useState(false);

  return (
    <header className="sticky top-0 h-[var(--header-height)] z-50 p-0 bg-background/60 backdrop-blur">
      <div className="flex justify-between items-center container mx-auto py-5 px-4">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <Icons.logo className="w-auto" />
          <span className="font-semibold text-lg">{siteConfig.name}</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Home
          </Link>
          
          {/* Learn Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center gap-1 text-sm font-medium hover:text-emerald-600 transition-colors"
              onMouseEnter={() => setIsLearnOpen(true)}
              onMouseLeave={() => setIsLearnOpen(false)}
            >
              Learn
              <ChevronDown className="h-3 w-3" />
            </button>
            {isLearnOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg py-2"
                onMouseEnter={() => setIsLearnOpen(true)}
                onMouseLeave={() => setIsLearnOpen(false)}
              >
                <Link href="/learn/getting-started" className="block px-4 py-2 text-sm hover:bg-accent">
                  Getting Started
                </Link>
                <Link href="/learn/growing-techniques" className="block px-4 py-2 text-sm hover:bg-accent">
                  Growing Techniques
                </Link>
                <Link href="/learn/business-guide" className="block px-4 py-2 text-sm hover:bg-accent">
                  Business Guide
                </Link>
                <Link href="/resources" className="block px-4 py-2 text-sm hover:bg-accent">
                  Resources & Tools
                </Link>
              </div>
            )}
          </div>
          
          <Link href="/training" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Training Programs
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Blog
          </Link>
          <Link href="/community" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Community
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            About
          </Link>
          
          <Link
            href="/training"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-8 text-primary-foreground rounded-lg bg-emerald-500 hover:bg-emerald-600 tracking-tight font-medium ml-4"
            )}
          >
            Get Started
          </Link>
        </nav>
        
        <div className="mt-2 cursor-pointer block lg:hidden">
          <MobileDrawer />
        </div>
      </div>
      <hr className="absolute w-full bottom-0" />
    </header>
  );
}
