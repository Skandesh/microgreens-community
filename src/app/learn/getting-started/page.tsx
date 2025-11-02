"use client";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/section";
import {
  CheckCircle,
  AlertCircle,
  Leaf,
  TrendingUp,
  Sprout,
  Droplets,
  Sun,
  Package,
  IndianRupee,
  Clock,
  Users,
  ShoppingBag,
  Home,
  Timer
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <Section
        title="Getting Started"
        subtitle="Begin Your Microgreens Journey"
        description="Everything you need to know to start growing and selling premium microgreens in South India. From understanding the basics to launching your first harvest."
      />

      {/* What are Microgreens */}
      <Section className="border-x">
        <div className="p-6 md:p-12 space-y-12">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 text-foreground">What are Microgreens?</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Microgreens are young vegetable greens harvested just after the first true leaves (cotyledons) have developed.
                They&apos;re typically 1-3 inches tall and harvested within 7-21 days after germination. Unlike sprouts,
                microgreens are grown in soil or growing medium and require sunlight, making them more nutritious and flavorful.
              </p>

              <div className="bg-emerald-500/5 border border-emerald-400/20 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <Sprout className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Why Microgreens Matter</h3>
                    <p className="text-sm text-muted-foreground">
                      Microgreens can contain up to 40 times more nutrients than their mature counterparts,
                      making them a superfood that&apos;s gaining popularity among health-conscious consumers,
                      restaurants, and wellness centers across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Popular Varieties for South India</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Sunflower", desc: "Nutty flavor, crunchy texture, high demand", days: "8-12 days", price: "₹400-500/kg" },
                { name: "Radish", desc: "Spicy kick, fast-growing, colorful", days: "6-8 days", price: "₹300-400/kg" },
                { name: "Mustard", desc: "Traditional taste, easy to grow", days: "7-10 days", price: "₹250-350/kg" },
                { name: "Fenugreek (Methi)", desc: "Local favorite, medicinal properties", days: "8-12 days", price: "₹300-450/kg" },
                { name: "Pea Shoots", desc: "Sweet, versatile, premium variety", days: "12-14 days", price: "₹500-600/kg" },
                { name: "Amaranth", desc: "Colorful, nutrient-dense, unique", days: "10-14 days", price: "₹350-450/kg" }
              ].map((variety, index) => (
                <div key={index} className="border border-emerald-400/20 bg-background rounded-xl p-5 space-y-3 hover:border-emerald-400/40 transition-colors">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-semibold text-lg">{variety.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{variety.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Timer className="h-3 w-3" />
                      <span>{variety.days}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IndianRupee className="h-3 w-3" />
                      <span>{variety.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Watch: Seed Sowing Basics</h3>
            <div className="rounded-xl overflow-hidden border border-emerald-400/20 mb-8">
              <video
                src="/seed-sowing.mp4"
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.25 }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Nutritional Powerhouse</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  { icon: Leaf, text: "40x more nutrients than mature plants" },
                  { icon: Leaf, text: "Rich in vitamins C, E, K, and beta-carotene" },
                  { icon: Leaf, text: "High antioxidant content fights inflammation" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  { icon: Leaf, text: "Excellent source of minerals and enzymes" },
                  { icon: Leaf, text: "Low calorie, high fiber for weight management" },
                  { icon: Leaf, text: "Supports immune system and digestive health" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Why Microgreens Business */}
      <Section
        title="Business Opportunity"
        subtitle="Why Start a Microgreens Business?"
        description="Discover the compelling reasons to enter the microgreens market in South India"
      />

      <Section className="border-x">
        <div className="p-6 md:p-12 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-xl">Business Advantages</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: IndianRupee, title: "Low Initial Investment", desc: "Start with ₹10,000-50,000 for basic setup" },
                  { icon: Clock, title: "Quick Returns", desc: "Harvest in 7-14 days, fast cash flow" },
                  { icon: TrendingUp, title: "High Profit Margins", desc: "60-80% margins on premium varieties" },
                  { icon: Timer, title: "Year-Round Production", desc: "Grow 365 days with climate control" },
                  { icon: Home, title: "Minimal Space", desc: "Start from 100 sq ft balcony or room" },
                  { icon: Users, title: "Growing Market", desc: "Increasing health-conscious consumers" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-background hover:border-emerald-400/40 transition-colors">
                    <item.icon className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <ShoppingBag className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xl">Target Markets</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Premium Restaurants & Cafes", desc: "Chefs seeking fresh, locally-sourced garnishes and ingredients", potential: "₹15,000-40,000/month per client" },
                  { title: "Health-Conscious Families", desc: "Urban households wanting organic, fresh produce delivered weekly", potential: "₹200-500/week per family" },
                  { title: "Juice Bars & Health Centers", desc: "Establishments focused on nutrition and wellness offerings", potential: "₹10,000-25,000/month per client" },
                  { title: "Organic Stores & Markets", desc: "Retail outlets with premium produce sections", potential: "₹20,000-60,000/month per store" },
                  { title: "Corporate Cafeterias", desc: "IT parks, hospitals, and large offices with in-house dining", potential: "₹30,000-80,000/month per client" },
                  { title: "Subscription Box Services", desc: "Direct-to-consumer weekly/monthly delivery model", potential: "₹500-1,500/box recurring revenue" },
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border/50 bg-background hover:border-blue-400/40 transition-colors">
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                    <p className="text-xs text-emerald-600 font-medium">💰 {item.potential}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/5 to-blue-500/5 border border-emerald-400/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <IndianRupee className="h-6 w-6 text-emerald-600" />
              Sample Revenue Projection (First 3 Months)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Month 1 (Learning Phase)</p>
                <p className="text-2xl font-bold text-foreground">₹8,000-15,000</p>
                <p className="text-xs text-muted-foreground mt-1">2-3 clients, testing varieties</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Month 2 (Scaling Up)</p>
                <p className="text-2xl font-bold text-foreground">₹25,000-45,000</p>
                <p className="text-xs text-muted-foreground mt-1">5-8 clients, consistent production</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Month 3 (Established)</p>
                <p className="text-2xl font-bold text-foreground">₹50,000-80,000</p>
                <p className="text-xs text-muted-foreground mt-1">10-15 clients, optimized operations</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Basic Requirements */}
      <Section
        title="Setup Guide"
        subtitle="What You Need to Start"
        description="Essential equipment, space, and resources to launch your microgreens operation"
      />

      <Section className="border-x">
        <div className="p-6 md:p-12 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-emerald-500 pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <Home className="h-6 w-6 text-emerald-600" />
                <h3 className="font-semibold text-xl">Space Requirements</h3>
              </div>
              <p className="text-muted-foreground">
                Start with as little as 100 sq ft. A balcony, terrace, spare room, or garage works perfectly.
                The key is ensuring good ventilation, access to indirect sunlight (or ability to install grow lights),
                and temperature control capabilities.
              </p>
              <div className="bg-emerald-500/5 rounded-lg p-4 space-y-2">
                <p className="text-sm"><strong>Beginner Setup (100-200 sq ft):</strong> 20-30 trays, ₹25,000-40,000/month revenue potential</p>
                <p className="text-sm"><strong>Medium Setup (300-500 sq ft):</strong> 50-80 trays, ₹60,000-1,00,000/month revenue potential</p>
                <p className="text-sm"><strong>Commercial Setup (1000+ sq ft):</strong> 200+ trays, ₹2,00,000+/month revenue potential</p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <Package className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-xl">Essential Equipment</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Starter Kit (₹8,000-15,000):</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 10-20 growing trays (10&quot;x20&quot;)</li>
                    <li>• Growing medium: Cocopeat or soil mix (25kg)</li>
                    <li>• Quality seeds: 5-6 varieties (500g each)</li>
                    <li>• Spray bottles and watering can</li>
                    <li>• Basic shelving or rack system</li>
                    <li>• Harvesting scissors and containers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Optional Upgrades (₹15,000-30,000):</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• LED grow lights for consistent production</li>
                    <li>• Fans for air circulation</li>
                    <li>• Humidity meter and thermometer</li>
                    <li>• Commercial packaging supplies</li>
                    <li>• Weight scale and labeling equipment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-amber-500 pl-6 space-y-4">
            <div className="flex items-center gap-2">
              <Sun className="h-6 w-6 text-amber-600" />
              <h3 className="font-semibold text-xl">Climate Considerations for South India</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-background border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="h-5 w-5 text-amber-600" />
                  <h4 className="font-medium">Temperature</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Ideal:</strong> 18-25°C
                </p>
                <p className="text-xs text-muted-foreground">
                  Use shade nets, air conditioning, or fans during hot months (March-June).
                  Indoor growing recommended for consistent quality.
                </p>
              </div>
              <div className="bg-background border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="h-5 w-5 text-blue-600" />
                  <h4 className="font-medium">Humidity</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Ideal:</strong> 40-60%
                </p>
                <p className="text-xs text-muted-foreground">
                  Critical during monsoon (June-September). Use dehumidifiers to prevent mold growth.
                  Ensure excellent ventilation.
                </p>
              </div>
              <div className="bg-background border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="h-5 w-5 text-yellow-600" />
                  <h4 className="font-medium">Light</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Need:</strong> 12-16 hours/day
                </p>
                <p className="text-xs text-muted-foreground">
                  Indirect sunlight or LED grow lights. Avoid direct afternoon sun.
                  Supplemental lighting recommended for year-round production.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/5 to-red-500/5 border border-amber-400/20 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Pro Tip: Start Small, Scale Smart</h3>
                <p className="text-sm text-muted-foreground">
                  Don&apos;t invest in a full commercial setup immediately. Start with 10-15 trays and master the basics:
                  consistent germination, proper watering, and harvest timing. Once you have 2-3 paying clients and
                  consistent quality, then invest in expanding your operation. This minimizes risk and ensures you
                  learn the nuances of your local climate before scaling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* First Steps */}
      <Section
        title="Action Plan"
        subtitle="Your First 30 Days"
        description="A structured roadmap to get your microgreens business up and running"
      />

      <Section className="border-x">
        <div className="p-6 md:p-12">
          <div className="space-y-6">
            {[
              {
                week: "Week 1: Learn & Prepare",
                tasks: [
                  "Research and select 3-4 beginner-friendly varieties (sunflower, radish, mustard, fenugreek)",
                  "Source quality seeds from trusted suppliers (ensure 85%+ germination rate)",
                  "Purchase basic equipment: trays, growing medium, spray bottles",
                  "Set up growing space with proper ventilation and light access",
                  "Study basic growing techniques through online resources or training programs"
                ]
              },
              {
                week: "Week 2: First Planting",
                tasks: [
                  "Start your first batch of 4-6 trays across 2-3 varieties",
                  "Practice proper seed density and watering techniques",
                  "Maintain daily growth log: temperature, humidity, observations",
                  "Join microgreens communities and forums for support",
                  "Research potential local customers (restaurants, health stores, families)"
                ]
              },
              {
                week: "Week 3: Monitor & Learn",
                tasks: [
                  "Monitor first batch closely, troubleshoot any issues (mold, poor germination)",
                  "Start second batch of 6-8 trays, implementing lessons learned",
                  "Begin market research: visit local restaurants, cafes, and health stores",
                  "Create simple product samples and pricing structure",
                  "Set up basic social media presence (Instagram, WhatsApp Business)"
                ]
              },
              {
                week: "Week 4: Harvest & Sell",
                tasks: [
                  "Harvest first batch, practice proper cutting and packaging techniques",
                  "Distribute free samples to 5-10 potential clients with contact information",
                  "Collect feedback on quality, pricing, and delivery preferences",
                  "Secure first 1-2 paying customers with weekly orders",
                  "Plan production schedule for next month based on confirmed orders",
                  "Invest profits into expanding tray count and variety selection"
                ]
              }
            ].map((period, index) => (
              <div key={index} className="border border-emerald-400/20 rounded-xl p-6 bg-background hover:border-emerald-400/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-4">{period.week}</h3>
                    <ul className="space-y-2">
                      {period.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="border-x border-b">
        <div className="p-6 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground">
              Download our comprehensive starter guide or join our training program for hands-on support
              from experienced microgreens farmers in South India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-emerald-500 hover:bg-emerald-600 flex items-center gap-2"
                )}
              >
                <Package className="h-5 w-5" />
                Download Free Starter Guide
              </Link>
              <Link
                href="/training"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-emerald-400/40 hover:bg-emerald-500/10"
                )}
              >
                View Training Programs
              </Link>
            </div>
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Continue your learning journey:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/learn/growing-techniques"
                  className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Growing Techniques →
                </Link>
                <Link
                  href="/learn/business-guide"
                  className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Business Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
