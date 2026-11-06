import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import AvailabilityBar from '../components/home/AvailabilityBar';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedRooms from '../components/home/FeaturedRooms';
import AmenitiesStrip from '../components/home/AmenitiesStrip';
import SpaHighlight from '../components/home/SpaHighlight';
import GalleryPreview from '../components/home/GalleryPreview';
import Testimonials from '../components/home/Testimonials';
import NearbyAttractions from '../components/home/NearbyAttractions';
import DestinationsStrip from '../components/home/DestinationsStrip';
import CTABanner from '../components/home/CTABanner';
import { getHotelSchema } from '../utils/seo';
import { siteConfig } from '../data/siteConfig';

export default function Home() {
  const schema = getHotelSchema();

  return (
    <>
      <Helmet>
        <title>{siteConfig.name} | Boutique Nature Escapes Across Maharashtra</title>
        <meta name="description" content="Reveridge is a curated collection of boutique nature escapes across Maharashtra — spanning mountains, forests, and coastlines across Mahabaleshwar, Lingmala, Matheran, and Dapoli. Elevation in every sense." />
        <link rel="canonical" href="https://reveridge.com/" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <div>
        <Hero />

        {/* Check In / Check Out Availability Bar - Middle Section between Home and About Us */}
        <div className="relative z-30 -mt-10 sm:-mt-16 md:-mt-20 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <AvailabilityBar />
        </div>

        <AboutPreview />
        <FeaturedRooms />
        <DestinationsStrip />
        <AmenitiesStrip />
        <SpaHighlight />
        <GalleryPreview />
        <Testimonials />
        <NearbyAttractions />
        <CTABanner />
      </div>
    </>
  );
}
