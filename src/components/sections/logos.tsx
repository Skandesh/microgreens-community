'use client';

import { Section } from '@/components/section';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Sun,
  Sprout,
  Carrot,
  Trees,
  Wheat,
  Leaf,
  Flower2,
  Sparkles,
  Droplet,
} from 'lucide-react';

// Microgreen varieties taught in the program with unique icons
const microgreensSet1 = [
  { name: 'Sunflower', color: 'text-yellow-600', icon: Sun },
  { name: 'Pea Shoots', color: 'text-green-600', icon: Sprout },
  { name: 'Radish', color: 'text-red-600', icon: Carrot },
  { name: 'Broccoli', color: 'text-emerald-600', icon: Trees },
  { name: 'Mustard', color: 'text-amber-600', icon: Wheat },
  { name: 'Kale', color: 'text-green-700', icon: Leaf },
];

const microgreensSet2 = [
  { name: 'Amaranth', color: 'text-pink-600', icon: Flower2 },
  { name: 'Fenugreek', color: 'text-yellow-700', icon: Sparkles },
  { name: 'Beetroot', color: 'text-rose-600', icon: Droplet },
  { name: 'Coriander', color: 'text-green-600', icon: Sprout },
  { name: 'Spinach', color: 'text-emerald-700', icon: Leaf },
  { name: 'Basil', color: 'text-green-600', icon: Flower2 },
];

export function Logos() {
  const [currentSet, setCurrentSet] = useState(microgreensSet1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) =>
        prev === microgreensSet1 ? microgreensSet2 : microgreensSet1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="logos">
      <div className="border-x border-t">
        <div className="text-center py-6 border-b">
          <h2 className="text-sm font-medium text-muted-foreground">
            Learn to Grow 25+ Microgreen Varieties
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {microgreensSet1.map((_, idx) => (
            <div
              key={idx}
              className="flex group items-center justify-center p-6 border-r border-t last:border-r-0 sm:last:border-r md:[&:nth-child(3n)]:border-r md:[&:nth-child(6n)]:border-r-0 md:[&:nth-child(3)]:border-r [&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(-n+3)]:border-t-0 sm:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(-n+6)]:border-t-0 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSet[idx].name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: Math.random() * 0.3,
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  {(() => {
                    const Icon = currentSet[idx].icon;
                    return (
                      <Icon
                        className={`h-8 w-8 ${currentSet[idx].color} transition-all duration-200`}
                      />
                    );
                  })()}
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {currentSet[idx].name}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
