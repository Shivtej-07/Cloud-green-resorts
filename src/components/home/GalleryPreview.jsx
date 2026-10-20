import React from 'react';
import { ArrowRight, Camera } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import GalleryGrid from '../gallery/GalleryGrid';
import Button from '../common/Button';

export default function GalleryPreview() {
  return (
    <section className="py-20 lg:py-28 bg-cream-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          subtitle="Glimpses of Cloudgreen"
          title="Moments in the Mist"
          description="Explore our sun-kissed pool, private cottages, lush strawberry valley views, and calming spa treatment suites."
        />

        <GalleryGrid limit={6} />

        <div className="mt-12 text-center">
          <Button
            to="/gallery"
            variant="primary"
            size="lg"
            icon={ArrowRight}
          >
            View Full Photo Gallery (12+ Photos)
          </Button>
        </div>

      </div>
    </section>
  );
}
