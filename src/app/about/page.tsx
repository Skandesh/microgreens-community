import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/section";
import { Target, Heart, Users, Award } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: <Target className="h-8 w-8 text-emerald-600" />,
    title: "Education First",
    description: "We believe in empowering individuals with knowledge and practical skills to build sustainable businesses."
  },
  {
    icon: <Heart className="h-8 w-8 text-emerald-600" />,
    title: "Health & Nutrition",
    description: "Promoting healthy eating habits and making nutritious food accessible to every household."
  },
  {
    icon: <Users className="h-8 w-8 text-emerald-600" />,
    title: "Community Support",
    description: "Building a strong network of growers who support and learn from each other."
  },
  {
    icon: <Award className="h-8 w-8 text-emerald-600" />,
    title: "Quality Excellence",
    description: "Maintaining the highest standards in our training, resources, and support services."
  }
];

const milestones = [
  { year: "2020", event: "Started as a small urban farming initiative in Chennai" },
  { year: "2021", event: "Launched first training program with 25 participants" },
  { year: "2022", event: "Expanded to 5 cities across South India" },
  { year: "2023", event: "Reached 1000+ trained growers milestone" },
  { year: "2024", event: "Launched online resources and community platform" }
];

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-b from-emerald-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              About D’ Organica Garden Shoppee
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We’re on a mission to make microgreens cultivation accessible to everyone in South India, 
              creating opportunities for sustainable income while promoting healthy eating habits.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Story */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">
                D’ Organica Garden Shoppee began as a small urban farming experiment in Chennai. 
                What started as a personal journey to grow fresh, nutritious food in limited space 
                quickly evolved into a passion for sharing this knowledge with others.
              </p>
              <p className="mb-6">
                We realized that microgreens offered a unique opportunity - they required minimal space, 
                grew quickly, and provided exceptional nutritional value. More importantly, they presented 
                a viable business opportunity for individuals looking to start their entrepreneurial journey.
              </p>
              <p className="mb-6">
                Today, we’re proud to be South India’s leading resource for microgreens education and 
                business development. Our comprehensive approach combines traditional agricultural wisdom 
                with modern growing techniques, tailored specifically for our tropical climate.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Journey Timeline */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="absolute left-8 w-4 h-4 bg-emerald-500 rounded-full -translate-x-1/2"></div>
                  <div className="ml-20">
                    <span className="text-emerald-600 font-semibold">{milestone.year}</span>
                    <p className="text-muted-foreground mt-1">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="py-16 bg-emerald-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
            <p className="text-muted-foreground mb-12">
              Our team consists of agricultural experts, successful microgreens entrepreneurs, 
              nutritionists, and business mentors dedicated to your success.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <div className="w-24 h-24 bg-emerald-100 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">Agricultural Experts</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Specialists in tropical agriculture and controlled environment growing
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="w-24 h-24 bg-emerald-100 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">Business Mentors</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Successful entrepreneurs who’ve built thriving microgreens businesses
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="w-24 h-24 bg-emerald-100 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">Support Team</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Dedicated professionals providing ongoing guidance and assistance
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
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
            <p className="text-muted-foreground mb-8">
              Whether you’re a beginner or experienced grower, we’re here to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/learn/getting-started"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-emerald-500 hover:bg-emerald-600"
                )}
              >
                Start Learning
              </Link>
              <Link
                href="/community"
                className={cn(
                  buttonVariants({ variant: "outline" })
                )}
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
