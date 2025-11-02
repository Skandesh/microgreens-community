import { Icons } from "@/components/icons";
import { Leaf, Heart, TrendingUp, Sun, BookOpen, Award } from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "D' Organica Garden Shoppee",
  description:
    "Your complete guide to starting and growing a profitable microgreens business in South India. Learn, grow, and succeed with expert resources and training.",
  cta: "Start Your Journey",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "microgreens business",
    "microgreens cultivation",
    "microgreens training",
    "microgreens guide",
    "urban farming India",
    "microgreens Chennai",
    "microgreens Bangalore",
    "how to grow microgreens",
    "microgreens startup",
  ],
  links: {
    email: "support@greengrowacademy.in",
    twitter: "https://twitter.com/greengrowacademy",
    discord: "",
    github: "",
    instagram: "https://instagram.com/greengrowacademy",
    whatsapp: "https://wa.me/918056789210",
  },
  hero: {
    title: "Start Your Microgreens Business",
    subtitle: "Your complete guide to growing and selling premium microgreens in South India",
    description:
      "Everything you need to know about growing, marketing, and selling microgreens in South India. From beginner guides to advanced techniques, we're your trusted resource for building a profitable microgreens venture.",
    cta: "Explore Resources",
    ctaDescription: "Join a community of 1000+ microgreens entrepreneurs across South India",
  },
  features: [
    {
      name: "Grow 25+ Microgreen Varieties",
      description:
        "Learn seed selection, substrate prep, and harvest timing tailored to Indian kitchens.",
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      name: "Regional Language Curriculum",
      description:
        "Step-by-step lessons in Tamil, Kannada, Telugu, and Malayalam for inclusive learning.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      name: "Nutrition & Recipe Planning",
      description:
        "Dietitians guide you on pairing microgreens with South Indian staples for daily meals.",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      name: "Business & ROI Mentorship",
      description:
        "Map your pricing, subscription models, and local delivery strategy with our mentors.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      name: "Climate-Optimized Grow Schedules",
      description:
        "Get weekly sowing plans for Chennai humidity, Bengaluru winters, and coastal climates.",
      icon: <Sun className="h-6 w-6" />,
    },
    {
      name: "Certification & Alumni Network",
      description:
        "Graduate with government-recognized certification and lifetime access to local cohorts.",
      icon: <Award className="h-6 w-6" />,
    },
  ],
  pricing: [
    {
      name: "Beginner Grower",
      price: { monthly: "₹2,999", yearly: "₹24,999" },
      frequency: { monthly: "cohort", yearly: "annual pass" },
      description:
        "Launch your microgreens journey with live weekend classes and starter kit guidance.",
      features: [
        "4 live weekend sessions (Tamil & English)",
        "Beginner-friendly seed and medium planner",
        "Harvest checklist for 12 varieties",
        "Access to WhatsApp mentor group",
      ],
      cta: "Join Beginner Cohort",
    },
    {
      name: "Professional Farmer",
      price: { monthly: "₹9,999", yearly: "₹89,999" },
      frequency: { monthly: "cohort", yearly: "annual pass" },
      description:
        "Scale to weekly deliveries with advanced hydroponics, packaging, and branding support.",
      features: [
        "8 live labs with agronomists & dietitians",
        "ROI calculator & pricing templates",
        "Cold storage and packaging SOPs",
        "Regional language marketing playbooks",
        "Quality audits for institutional sales",
      ],
      cta: "Apply for Professional Track",
      popular: true,
    },
    {
      name: "Master Grower",
      price: { monthly: "₹24,999", yearly: "₹2,49,999" },
      frequency: { monthly: "cohort", yearly: "annual pass" },
      description:
        "Build a microgreens brand with city-wide franchise support and institutional partnerships.",
      features: [
        "1:1 business coaching & supply chain setup",
        "NABL lab testing coordination",
        "Chef collaborations & tasting events",
        "Franchise-ready SOPs and legal kits",
        "Priority access to export buyers",
        "Quarterly farm audits & media features",
      ],
      cta: "Book Strategy Call",
    },
  ],
  footer: {
    socialLinks: [
      {
        icon: <Icons.twitter className="h-5 w-5" />,
        url: "https://twitter.com/greengrowacademy",
      },
      {
        icon: <Icons.discord className="h-5 w-5" />,
        url: "https://community.greengrowacademy.in",
      },
    ],
    links: [
      { text: "Workshops", url: "#workshops" },
      { text: "Success Stories", url: "#testimonials" },
      { text: "Contact", url: "mailto:support@greengrowacademy.in" },
    ],
    bottomText: "© 2025 D' Organica Garden Shoppee. All rights reserved.",
    brandText: "D' Organica Garden Shoppee",
  },

  testimonials: [
    {
      id: 1,
      text: "GreenGrow Academy helped me convert my Chennai balcony into a thriving microgreens studio serving 40 families every week.",
      name: "Swapna",
      company: "Coimbatore Balcony Greens",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60",
      video: "/client-testimonial-1.mp4",
    },
    {
      id: 2,
      text: "The business mentorship gave me confidence to pitch to Bengaluru cafés. I recouped my investment in 6 weeks.",
      name: "Tharinishi Ajeethkumar",
      company: "Urban Sprout Lab, Bengaluru",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60",
      video: "/client-testimonial-2.mp4",
    },
    {
      id: 3,
      text: "Regional language sessions made it easy for my parents in Coimbatore to manage our new hydroponic setup.",
      name: "Priya & Sanjay",
      company: "Coimbatore Fresh Farms",
      image:
        "https://images.unsplash.com/photo-1544723795-43253788e370?w=500&auto=format&fit=crop&q=60",
      video: "/client-testimonial-3.mp4",
    },
    {
      id: 4,
      text: "The way concepts were explained with patience and empathy, without rushing or overselling, made all the difference. I felt truly supported throughout my learning journey.",
      name: "Vignewshwari Mathew",
      company: "Varkala Retreat",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500&auto=format&fit=crop&q=60",
      video: "/client-testimonial-4.mp4",
    },
    {
      id: 5,
      text: "With the certification track I now supply microgreens to hospitals in Hyderabad meeting all quality norms.",
      name: "Farhana Siddiqui",
      company: "HydroFresh Hyderabad",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60",
      video: "/client-testimonial-5.mp4",
    },
    {
      id: 6,
      text: "As a software developer in Bangalore, I wanted this as a side hustle. The team handholded me through everything - I never expected this level of detailed information and support.",
      name: "Priya K",
      company: "Bengaluru Tech Greens",
      image:
        "https://images.unsplash.com/photo-1530023367847-a683933f4177?w=500&auto=format&fit=crop&q=60",
      video: "/client-testimonial-6.mp4",
    },
    {
      id: 7,
      text: "From zero farming background to supplying to IT parks in 4 months – the ROI planner kept us profitable.",
      name: "Mahesh & Kavya",
      company: "Whitefield Microgreens",
      image:
        "https://images.unsplash.com/photo-1543352634-873f17a7a088?w=500&auto=format&fit=crop&q=60",
      video: "/client-testimonial-7.mp4",
    },
    {
      id: 8,
      text: "Seasonal crop maps helped our Madurai women’s collective run year-round subscription boxes.",
      name: "Kalpana Collective",
      company: "Madurai Microgreens Co-Op",
      image:
        "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 9,
      text: "We now supply farm-to-table brunches in Goa using the academy’s fast-cycle growing techniques.",
      name: "Rhea Monteiro",
      company: "Goa Green Platter",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 10,
      text: "Their export compliance guidance unlocked my first shipment of wheatgrass shots to the UAE market.",
      name: "Shaheen Parveen",
      company: "Hyderabad Green Exports",
      image:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 11,
      text: "As a chef in Vizag, I created a seasonal tasting platter with 10 microgreens inspired by academy recipes.",
      name: "Chef Ravi",
      company: "Vizag Tasting Room",
      image:
        "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 12,
      text: "We supply microgreens to Tirupati temples using their contamination control protocols.",
      name: "Srinidhi Farms",
      company: "Tirupati Sacred Greens",
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 13,
      text: "Our women’s SHG in Mangaluru now earns 3x more with microgreens subscription boxes.",
      name: "Sapna Shetty",
      company: "Mangaluru Fresh Cart",
      image:
        "https://images.unsplash.com/photo-1542596594-649edbc13630?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 14,
      text: "From sowing to packaging, the academy’s SOPs helped us deliver 500 trays a week in Visakhapatnam.",
      name: "Sushmita Narayan",
      company: "Vizag Micro Farms",
      image:
        "https://images.unsplash.com/photo-1543352634-a1e4e5c407ab?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 15,
      text: "Our Tirunelveli homestay delights guests with fresh garnishes grown using GreenGrow techniques.",
      name: "Gayathri Pillai",
      company: "Tirunelveli Homestead",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
