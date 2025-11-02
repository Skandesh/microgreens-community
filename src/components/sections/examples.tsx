import { FeatureSelector } from '@/components/feature-selector';
import { Section } from '@/components/section';

interface FeatureOption {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const featureOptions: FeatureOption[] = [
  {
    id: 1,
    title: 'Microgreens Growing Setup',
    description:
      'Professional microgreens farming setup showing optimal tray arrangement and growing conditions.',
    image: '/1.png',
    imageAlt: 'Professional microgreens growing facility with optimal tray setup',
  },
  {
    id: 2,
    title: 'Production Scale Operations',
    description:
      'Large-scale microgreens production facility demonstrating commercial growing techniques.',
    image: '/2.png',
    imageAlt: 'Commercial microgreens production facility with multiple growing trays',
  },
  {
    id: 3,
    title: 'Climate Recipe Automation',
    description:
      'Understand how we map humidity, airflow, and lighting adjustments to each crop family.',
    image: '/3.png',
    imageAlt: 'Climate control dashboard showing automated greenhouse settings',
  },
  {
    id: 4,
    title: 'Yield Projection Dashboard',
    description:
      'Track projected harvest volumes against subscription commitments week over week.',
    image: '/4.png',
    imageAlt:
      'Dashboard showing harvest yield projections and subscription commitments',
  },
  {
    id: 5,
    title: 'Quality Control & Harvesting',
    description:
      'Learn proper harvesting techniques and quality control measures for premium microgreens.',
    image: '/5.png',
    imageAlt: 'Microgreens quality control and harvesting process',
  },
  {
    id: 6,
    title: 'Packaging & Distribution',
    description:
      'Professional packaging solutions and cold-chain management for maintaining freshness.',
    image: '/6.png',
    imageAlt: 'Professional microgreens packaging and distribution setup',
  },
  {
    id: 7,
    title: 'Wholesale Order Pipeline',
    description:
      'See how our packing team syncs restaurant orders with the cold-chain dispatch schedule.',
    image: '/7.png',
    imageAlt:
      'Order management interface showing restaurant orders and delivery schedule',
  },
  {
    id: 8,
    title: 'Seed-to-Harvest Playbook',
    description:
      'See the 14-day task list we hand over to every new microgreen studio we onboard.',
    image: '/8.png',
    imageAlt: '14-day microgreen growth playbook with daily tasks and metrics',
  },
];

export function Examples() {
  return (
    <Section id="examples">
      <div className="border-x border-t">
        <FeatureSelector features={featureOptions} />
      </div>
    </Section>
  );
}
