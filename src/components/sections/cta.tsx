import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CTA() {
  return (
    <Section id="cta">
      <div className="border overflow-hidden relative text-center py-16 mx-auto">
        <p className="max-w-3xl text-foreground mb-4 text-balance mx-auto font-medium text-3xl">
          Ready to Start Your Microgreens Journey?
        </p>
        <p className="max-w-2xl text-balance text-muted-foreground mx-auto mb-8">
          Whether you’re looking to grow for your family or build a business, 
          we have the resources, guides, and community support to help you succeed.
        </p>

        <div className="flex justify-center gap-3">
          <Link href="/learn/getting-started">
            <Button className="flex items-center gap-2">Start Learning</Button>
          </Link>
          <Link href="/resources">
            <Button variant="secondary" className="flex items-center gap-2">
              Free Resources
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
