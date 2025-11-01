import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/section";
import { TrendingUp, Users, Package, Calculator, Target, Megaphone } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function BusinessGuidePage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-b from-emerald-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Microgreens Business Guide
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your microgreens growing skills into a profitable business. 
              Learn proven strategies for pricing, marketing, and scaling your operation.
            </p>
          </div>
        </div>
      </Section>

      {/* Business Models */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Choose Your Business Model</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-3">Direct-to-Consumer</h3>
                <p className="text-muted-foreground mb-4">
                  Sell directly to households through subscriptions, farmer’s markets, or online platforms.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Higher profit margins (60-80%)</li>
                  <li>✓ Direct customer relationships</li>
                  <li>✓ Flexible pricing and products</li>
                  <li>✗ More marketing effort required</li>
                  <li>✗ Individual packaging needs</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-3">B2B Sales</h3>
                <p className="text-muted-foreground mb-4">
                  Supply to restaurants, cafes, hotels, and grocery stores in bulk quantities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Larger order volumes</li>
                  <li>✓ Predictable demand</li>
                  <li>✓ Less marketing needed</li>
                  <li>✗ Lower margins (40-60%)</li>
                  <li>✗ Strict quality requirements</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-3">Subscription Model</h3>
                <p className="text-muted-foreground mb-4">
                  Weekly or bi-weekly delivery service to regular customers.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Recurring revenue</li>
                  <li>✓ Predictable production</li>
                  <li>✓ Customer loyalty</li>
                  <li>✗ Delivery logistics</li>
                  <li>✗ Consistency pressure</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-3">Value-Added Products</h3>
                <p className="text-muted-foreground mb-4">
                  Create microgreen powders, pestos, or ready-to-eat salads.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Higher price points</li>
                  <li>✓ Longer shelf life</li>
                  <li>✓ Brand differentiation</li>
                  <li>✗ Processing equipment needed</li>
                  <li>✗ Food licensing requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Financial Planning */}
      <Section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              <Calculator className="inline h-8 w-8 text-emerald-600 mr-2" />
              Financial Planning
            </h2>
            
            <div className="bg-background p-8 rounded-lg border mb-8">
              <h3 className="font-semibold text-xl mb-4">Startup Investment Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span>Growing Setup (racks, trays, lights)</span>
                  <span className="font-medium">₹15,000 - 30,000</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Initial Seeds & Growing Medium</span>
                  <span className="font-medium">₹3,000 - 5,000</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Packaging Materials</span>
                  <span className="font-medium">₹2,000 - 4,000</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Marketing & Branding</span>
                  <span className="font-medium">₹5,000 - 10,000</span>
                </div>
                <div className="flex justify-between py-2 font-semibold text-lg">
                  <span>Total Initial Investment</span>
                  <span className="text-emerald-600">₹25,000 - 50,000</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Revenue Potential</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Average selling price: ₹300-500/kg</li>
                  <li>• Production capacity: 20-30 kg/week</li>
                  <li>• Monthly revenue: ₹24,000-60,000</li>
                  <li>• Break-even: 2-3 months</li>
                </ul>
              </div>

              <div className="bg-blue-50/50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Operating Costs</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Seeds: ₹50-100/kg produced</li>
                  <li>• Growing medium: ₹20-30/kg</li>
                  <li>• Utilities: ₹1,000-2,000/month</li>
                  <li>• Packaging: ₹10-20/unit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Marketing Strategies */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              <Megaphone className="inline h-8 w-8 text-emerald-600 mr-2" />
              Marketing Strategies
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="font-semibold text-xl mb-2">Social Media Marketing</h3>
                <p className="text-muted-foreground mb-3">
                  Share growing process videos, recipes, and health benefits on Instagram and Facebook.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Daily stories showing harvest and packaging</li>
                  <li>• Recipe collaborations with food bloggers</li>
                  <li>• Customer testimonials and transformations</li>
                </ul>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="font-semibold text-xl mb-2">Local Partnerships</h3>
                <p className="text-muted-foreground mb-3">
                  Build relationships with health-conscious businesses in your area.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Yoga studios and gyms</li>
                  <li>• Organic stores and health cafes</li>
                  <li>• Nutritionists and dietitians</li>
                </ul>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="font-semibold text-xl mb-2">Sampling Strategy</h3>
                <p className="text-muted-foreground mb-3">
                  Let potential customers taste the quality difference.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Farmer’s market tastings</li>
                  <li>• Free samples with first orders</li>
                  <li>• Pop-ups at community events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Customer Segments */}
      <Section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              <Target className="inline h-8 w-8 text-emerald-600 mr-2" />
              Target Customer Segments
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <Users className="h-8 w-8 text-emerald-600 mb-3" />
                <h3 className="font-semibold mb-2">Health Enthusiasts</h3>
                <p className="text-sm text-muted-foreground">
                  Fitness conscious individuals, yoga practitioners, and people following specific diets.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <Package className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Premium Restaurants</h3>
                <p className="text-sm text-muted-foreground">
                  Fine dining establishments and cafes focusing on fresh, local ingredients.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <Users className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Young Families</h3>
                <p className="text-sm text-muted-foreground">
                  Parents looking for nutritious options for their children’s meals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Scaling Your Business */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              <TrendingUp className="inline h-8 w-8 text-emerald-600 mr-2" />
              Scaling Your Business
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Start Small & Perfect Your Process</h3>
                  <p className="text-muted-foreground">
                    Begin with 2-3 varieties, master the growing process, and establish 
                    a customer base of 20-30 regular buyers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expand Product Range</h3>
                  <p className="text-muted-foreground">
                    Add more varieties, introduce mixed packs, and consider value-added 
                    products like microgreen powders or pestos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Automate & Systematize</h3>
                  <p className="text-muted-foreground">
                    Invest in automated watering systems, climate control, and establish 
                    SOPs for consistent quality.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Build Your Team</h3>
                  <p className="text-muted-foreground">
                    Hire assistants for production and delivery, allowing you to focus 
                    on business development and customer relationships.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Explore New Markets</h3>
                  <p className="text-muted-foreground">
                    Consider institutional sales, export opportunities, or franchising 
                    your successful model to other cities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-emerald-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Business?</h2>
            <p className="text-muted-foreground mb-8">
              Get personalized guidance and proven templates to fast-track your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-emerald-500 hover:bg-emerald-600"
                )}
              >
                Download Business Plan Template
              </Link>
              <Link
                href="/training"
                className={cn(
                  buttonVariants({ variant: "outline" })
                )}
              >
                Get Professional Training
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
