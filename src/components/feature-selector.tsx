'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface FeatureOption {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface FeatureSelectorProps {
  features: FeatureOption[];
  autoPlay?: boolean;
  interval?: number;
}

export const FeatureSelector: React.FC<FeatureSelectorProps> = ({
  features,
  autoPlay = true,
  interval = 3000,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const visibleCount = 4;

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => {
        const newIndex = (prev + 1) % features.length;
        setSelectedIndex(newIndex);
        return newIndex;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, features.length]);

  const getVisibleFeatures = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(features[(startIndex + i) % features.length]);
    }
    return visible;
  };

  const visibleFeatures = getVisibleFeatures();

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 relative">
      <div className="md:col-span-2 border-b md:border-b-0 bg-background md:border-r border-border sticky top-[var(--header-height)]">
        <div className="relative h-[500px] overflow-hidden">
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex flex-col p-4 h-full overflow-hidden">
            <AnimatePresence initial={false}>
              {visibleFeatures.map((option, index) => (
                <motion.button
                  key={`${option.id}-${startIndex}-${index}`}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedIndex((startIndex + index) % features.length)}
                  className={`flex-shrink-0 text-left p-4 mb-3 rounded border border-border transition-colors ${
                    selectedIndex === (startIndex + index) % features.length
                      ? 'bg-accent/70'
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <h3 className="font-medium tracking-tight">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </div>

        <div className="flex justify-center gap-2 p-4 border-t">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                setStartIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index >= startIndex && index < startIndex + visibleCount
                  ? 'w-8 bg-emerald-500'
                  : 'w-2 bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 overflow-hidden p-4">
        <div className="relative w-full max-h-[500px] bg-muted/20 rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={features[selectedIndex].image}
                alt={features[selectedIndex].imageAlt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
                priority={selectedIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
