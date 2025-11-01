import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/section";
import { Droplets, Sun, Thermometer, Wind } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function GrowingTechniquesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-b from-emerald-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Microgreens Growing Techniques
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Master the art and science of growing microgreens with techniques optimized 
              for South India’s tropical climate.
            </p>
          </div>
        </div>
      </Section>

      {/* Growing Methods */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Growing Methods</h2>
            
            <div className="space-y-8">
              <div className="bg-emerald-50/50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Soil-Based Growing</h3>
                <p className="text-muted-foreground mb-4">
                  The most common method for beginners. Use a quality potting mix or cocopeat 
                  for best results. Provides good nutrient availability and easier moisture management.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Best for: Sunflower, pea shoots, radish</li>
                  <li>• Medium depth: 1-2 inches</li>
                  <li>• Pros: Natural nutrients, forgiving for beginners</li>
                  <li>• Cons: Messier, potential for soil-borne diseases</li>
                </ul>
              </div>

              <div className="bg-blue-50/50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Hydroponic Growing</h3>
                <p className="text-muted-foreground mb-4">
                  Soilless cultivation using nutrient solutions. Cleaner and more consistent 
                  results but requires more initial investment and knowledge.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Best for: Wheatgrass, basil, lettuce varieties</li>
                  <li>• Systems: NFT, ebb and flow, or simple water culture</li>
                  <li>• Pros: Faster growth, cleaner harvest, water efficient</li>
                  <li>• Cons: Higher setup cost, requires pH monitoring</li>
                </ul>
              </div>

              <div className="bg-purple-50/50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Hemp Mat Growing</h3>
                <p className="text-muted-foreground mb-4">
                  Using biodegradable growing mats provides a clean, sustainable medium 
                  that’s perfect for commercial operations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Best for: Broccoli, mustard, arugula</li>
                  <li>• Mat types: Hemp, jute, or coconut fiber</li>
                  <li>• Pros: Very clean, easy to handle, compostable</li>
                  <li>• Cons: Higher ongoing costs, limited reusability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Environmental Controls */}
      <Section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Environmental Controls</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Sun className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Light Requirements</h3>
                  <p className="text-sm text-muted-foreground">
                    12-16 hours of indirect sunlight or LED grow lights. 
                    Avoid direct afternoon sun in summer months.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Thermometer className="h-8 w-8 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Temperature</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimal: 18-24°C. Use shade nets in summer and 
                    consider indoor growing during peak heat.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Droplets className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Humidity</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintain 40-60% humidity. Use dehumidifiers during 
                    monsoon to prevent mold growth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Wind className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Air Circulation</h3>
                  <p className="text-sm text-muted-foreground">
                    Essential for preventing fungal issues. Use fans 
                    for gentle air movement, especially in humid conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Step-by-Step Process */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Step-by-Step Growing Process</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Seed Preparation</h3>
                  <p className="text-muted-foreground">
                    Pre-soak larger seeds (sunflower, pea) for 8-12 hours. Smaller seeds 
                    can be sown directly. Use filtered water for soaking.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sowing</h3>
                  <p className="text-muted-foreground">
                    Spread seeds evenly on growing medium. Dense but not overlapping. 
                    Mist thoroughly and cover for blackout period.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Blackout Period</h3>
                  <p className="text-muted-foreground">
                    Cover trays for 2-4 days to encourage germination and stem elongation. 
                    Check daily and mist if needed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Light Exposure</h3>
                  <p className="text-muted-foreground">
                    Once seeds germinate and push up covers, expose to light. 
                    Continue misting 2-3 times daily.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Harvesting</h3>
                  <p className="text-muted-foreground">
                    Harvest when first true leaves appear (7-14 days). Cut just above 
                    soil level with clean scissors. Rinse and package immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Common Issues */}
      <Section className="py-16 bg-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Troubleshooting Common Issues</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold mb-3">Mold Growth</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Causes:</strong> Over-watering, poor ventilation, high humidity
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Solution:</strong> Increase air circulation, reduce watering, 
                  use hydrogen peroxide spray (1:10 ratio)
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold mb-3">Leggy Growth</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Causes:</strong> Insufficient light, overcrowding
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Solution:</strong> Move closer to light source, reduce seed density, 
                  ensure proper blackout period
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold mb-3">Poor Germination</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Causes:</strong> Old seeds, incorrect temperature, over/under watering
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Solution:</strong> Test seed viability, maintain optimal temperature, 
                  ensure consistent moisture
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold mb-3">Yellowing Leaves</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Causes:</strong> Nutrient deficiency, overwatering
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Solution:</strong> Use quality growing medium, add diluted liquid 
                  fertilizer, improve drainage
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Master These Techniques</h2>
            <p className="text-muted-foreground mb-8">
              Get hands-on training and personalized guidance from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/training"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-emerald-500 hover:bg-emerald-600"
                )}
              >
                View Training Programs
              </Link>
              <Link
                href="/resources"
                className={cn(
                  buttonVariants({ variant: "outline" })
                )}
              >
                Download Growing Guides
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
