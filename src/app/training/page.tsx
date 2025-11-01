import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Pricing } from "@/components/sections/pricing";
import { Section } from "@/components/section";
import { CalendarDays, Users, Award, Globe } from "lucide-react";

const trainingFeatures = [
  {
    icon: <CalendarDays className="h-8 w-8 text-emerald-600" />,
    title: "Flexible Learning Paths",
    description: "Choose from weekend cohorts, intensive bootcamps, or self-paced online modules."
  },
  {
    icon: <Users className="h-8 w-8 text-emerald-600" />,
    title: "Expert Mentorship",
    description: "Learn from successful microgreens entrepreneurs and agricultural experts."
  },
  {
    icon: <Award className="h-8 w-8 text-emerald-600" />,
    title: "Certification",
    description: "Get government-recognized certification upon completion of the program."
  },
  {
    icon: <Globe className="h-8 w-8 text-emerald-600" />,
    title: "Regional Language Support",
    description: "Training available in Tamil, Telugu, Kannada, and Malayalam."
  }
];

export default function TrainingPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-b from-emerald-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Professional Microgreens Training Programs
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Accelerate your microgreens journey with hands-on training, expert mentorship, 
              and comprehensive business support. From beginner to commercial scale.
            </p>
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Pricing />

      {/* Why Choose Our Training */}
      <Section className="py-16 bg-emerald-50/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Training?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Practical Experience</h3>
              <p className="text-muted-foreground">
                Get hands-on experience in our climate-controlled growing facilities with 
                real equipment and commercial-grade setups.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Business Support</h3>
              <p className="text-muted-foreground">
                Beyond growing techniques, learn pricing strategies, marketing, and how to 
                build sustainable customer relationships.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Lifetime Community</h3>
              <p className="text-muted-foreground">
                Join our alumni network for ongoing support, bulk purchasing benefits, and 
                collaborative opportunities.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">ROI Focused</h3>
              <p className="text-muted-foreground">
                Our programs are designed to help you recoup your investment quickly with 
                proven business models and revenue strategies.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
