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
    title: 'Seed-to-Harvest Playbook',
    description:
      'See the 14-day task list we hand over to every new microgreen studio we onboard.',
    image: '/8.png',
    imageAlt: '14-day microgreen growth playbook with daily tasks and metrics',
  },
  {
    id: 2,
    title: 'Climate Recipe Automation',
    description:
      'Understand how we map humidity, airflow, and lighting adjustments to each crop family.',
    image: '/3.png',
    imageAlt: 'Climate control dashboard showing automated greenhouse settings',
  },
  {
    id: 3,
    title: 'Yield Projection Dashboard',
    description:
      'Track projected harvest volumes against subscription commitments week over week.',
    image: '/4.png',
    imageAlt:
      'Dashboard showing harvest yield projections and subscription commitments',
  },
  {
    id: 4,
    title: 'Wholesale Order Pipeline',
    description:
      'See how our packing team syncs restaurant orders with the cold-chain dispatch schedule.',
    image: '/7.png',
    imageAlt:
      'Order management interface showing restaurant orders and delivery schedule',
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
