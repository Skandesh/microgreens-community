import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/section";
import { MessageSquare, Users, Calendar, Globe, Award, BookOpen } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Testimonials } from "@/components/sections/testimonials";

const communityFeatures = [
  {
    icon: <MessageSquare className="h-8 w-8 text-emerald-600" />,
    title: "Discussion Forums",
    description: "Connect with fellow growers, share experiences, and get answers to your questions."
  },
  {
    icon: <Users className="h-8 w-8 text-emerald-600" />,
    title: "Local Chapters",
    description: "Join city-specific groups for meetups, bulk buying, and local market insights."
  },
  {
    icon: <Calendar className="h-8 w-8 text-emerald-600" />,
    title: "Events & Workshops",
    description: "Attend regular workshops, farm visits, and networking events in your area."
  },
  {
    icon: <Globe className="h-8 w-8 text-emerald-600" />,
    title: "Online Community",
    description: "24/7 WhatsApp groups and online forums for instant support and guidance."
  }
];

const successMetrics = [
  { value: "1,200+", label: "Active Members" },
  { value: "18", label: "Cities Covered" },
  { value: "50+", label: "Monthly Meetups" },
  { value: "95%", label: "Success Rate" }
];

export default function CommunityPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-b from-emerald-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Join Our Growing Community
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with 1,200+ microgreens entrepreneurs across South India. 
              Share knowledge, find partners, and grow together.
            </p>
            <Link
              href={siteConfig.links.whatsapp}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "bg-emerald-500 hover:bg-emerald-600"
              )}
              target="_blank"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Join WhatsApp Community
            </Link>
          </div>
        </div>
      </Section>

      {/* Success Metrics */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-emerald-600">{metric.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Community Features */}
      <Section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Community Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {communityFeatures.map((feature, index) => (
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

      {/* Success Stories */}
      <Testimonials />

      {/* Regional Groups */}
      <Section className="py-16 bg-emerald-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Regional Chapters</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { city: "Chennai", members: "250+", meetups: "Weekly" },
                { city: "Bangalore", members: "300+", meetups: "Bi-weekly" },
                { city: "Hyderabad", members: "180+", meetups: "Weekly" },
                { city: "Coimbatore", members: "150+", meetups: "Monthly" },
                { city: "Kochi", members: "120+", meetups: "Bi-weekly" },
                { city: "Mysore", members: "80+", meetups: "Monthly" }
              ].map((chapter, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-2">{chapter.city}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{chapter.members} members</span>
                    <span>{chapter.meetups}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Community Resources */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Member Resources</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50/50 p-8 rounded-lg">
                <Award className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="font-semibold text-xl mb-3">Certification Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Get certified and showcase your expertise to potential customers and partners.
                </p>
                <Link href="/training" className="text-emerald-600 font-medium">
                  Learn More →
                </Link>
              </div>
              <div className="bg-blue-50/50 p-8 rounded-lg">
                <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-xl mb-3">Knowledge Base</h3>
                <p className="text-muted-foreground mb-4">
                  Access exclusive guides, research papers, and case studies from successful growers.
                </p>
                <Link href="/resources" className="text-blue-600 font-medium">
                  Browse Resources →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Join CTA */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Together?</h2>
            <p className="mb-8 text-emerald-50">
              Join our community today and get instant access to support, resources, and networking opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={siteConfig.links.whatsapp}
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "bg-white text-emerald-600 hover:bg-gray-100"
                )}
                target="_blank"
              >
                Join Free Community
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

// Import siteConfig for WhatsApp link
import { siteConfig } from "@/lib/config";
