import React from 'react';
import { useData } from '../../context/DataContext';
import SectionTitle from '../common/SectionTitle';
import RoomCard from '../rooms/RoomCard';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

export default function FeaturedRooms() {
  const { rooms } = useData();
  const featuredRooms = rooms.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          subtitle="Accommodations &amp; Suites"
          title="Comfortable Hill-Station Stays"
          description="Designed to harmonize with surrounding nature, each room offers cozy interiors, scenic balconies, and modern comforts starting at just ₹1,897 per night."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* View all rooms CTA */}
        <div className="mt-14 text-center">
          <Button
            to="/rooms"
            variant="primary"
            size="lg"
            icon={ArrowRight}
          >
            Explore All Rooms &amp; Packages
          </Button>
        </div>

      </div>
    </section>
  );
}
