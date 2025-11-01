import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/section";
import { Download, FileText, Calculator, BookOpen, Video, Users } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const resources = [
  {
    category: "Starter Guides",
    items: [
      {
        icon: <FileText className="h-8 w-8 text-emerald-600" />,
        title: "Microgreens Starter Guide",
        description: "Complete beginner's guide covering basics, equipment, and first crops",
        type: "PDF Guide",
        link: "#"
      },
      {
        icon: <BookOpen className="h-8 w-8 text-emerald-600" />,
        title: "Climate Zone Growing Calendar",
        description: "Month-by-month planting guide for different South Indian regions",
        type: "PDF Calendar",
        link: "#"
      },
      {
        icon: <FileText className="h-8 w-8 text-emerald-600" />,
        title: "Seed Selection Guide",
        description: "Comprehensive list of seeds, suppliers, and germination rates",
        type: "PDF Guide",
        link: "#"
      }
    ]
  },
  {
    category: "Business Tools",
    items: [
      {
        icon: <Calculator className="h-8 w-8 text-blue-600" />,
        title: "ROI Calculator",
        description: "Calculate potential profits based on your investment and scale",
        type: "Excel Template",
        link: "#"
      },
      {
        icon: <FileText className="h-8 w-8 text-blue-600" />,
        title: "Business Plan Template",
        description: "Ready-to-use template for microgreens business planning",
        type: "Word Template",
        link: "#"
      },
      {
        icon: <FileText className="h-8 w-8 text-blue-600" />,
        title: "Pricing Strategy Guide",
        description: "Market research and pricing strategies for different customer segments",
        type: "PDF Guide",
        link: "#"
      }
    ]
  },
  {
    category: "Growing Resources",
    items: [
      {
        icon: <Video className="h-8 w-8 text-purple-600" />,
        title: "Video Tutorials",
        description: "Step-by-step video guides for different microgreen varieties",
        type: "Video Series",
        link: "#"
      },
      {
        icon: <FileText className="h-8 w-8 text-purple-600" />,
        title: "Troubleshooting Guide",
        description: "Common problems and solutions in microgreens cultivation",
        type: "PDF Guide",
        link: "#"
      },
      {
        icon: <BookOpen className="h-8 w-8 text-purple-600" />,
        title: "Pest & Disease Management",
        description: "Organic methods to prevent and treat common issues",
        type: "PDF Guide",
        link: "#"
      }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-b from-emerald-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Free Resources & Tools
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Download our comprehensive guides, templates, and tools to help you succeed 
              in your microgreens journey. All resources are free and regularly updated.
            </p>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
              <Download className="h-5 w-5" />
              <span className="font-medium">15+ Free Resources Available</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Resources Grid */}
      {resources.map((category, categoryIndex) => (
        <Section key={categoryIndex} className={categoryIndex % 2 === 1 ? "bg-gray-50/50" : ""}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">{category.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((resource, index) => (
                <div key={index} className="bg-background border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {resource.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                        <Link
                          href={resource.link}
                          className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                        >
                          Download →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* Newsletter Section */}
      <Section className="py-16 bg-emerald-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest resources, growing tips, and business insights delivered to your inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-emerald-500 hover:bg-emerald-600"
                )}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
