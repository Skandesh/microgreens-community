'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface FeatureOption {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface FeatureSelectorProps {
  features: FeatureOption[];
}

export const FeatureSelector: React.FC<FeatureSelectorProps> = ({
  features,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 relative">
      <div className="md:col-span-2 border-b md:border-b-0 bg-background md:border-r border-border sticky top-[var(--header-height)]">
        <div className="flex md:flex-col feature-btn-container overflow-x-auto p-4 pb-2">
          {features.map((option, index) => (
            <button
              key={option.id}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 w-64 md:w-full text-left p-4 mb-2 mr-2 last:mr-0 md:mr-0 rounded border border-border ${
                selectedIndex === index ? 'bg-accent/70' : 'hover:bg-muted/50'
              }`}
            >
              <h3 className="font-medium tracking-tight">{option.title}</h3>
              <p className="text-sm text-muted-foreground">
                {option.description}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 overflow-hidden p-4">
        <div className="relative w-full max-h-[500px] bg-muted/20 rounded-2xl overflow-hidden">
          <Image
            src={features[selectedIndex].image}
            alt={features[selectedIndex].imageAlt}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
            priority={selectedIndex === 0}
          />
        </div>
      </div>
    </div>
  );
};
