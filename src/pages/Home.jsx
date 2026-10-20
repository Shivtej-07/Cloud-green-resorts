import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedRooms from '../components/home/FeaturedRooms';
import AmenitiesStrip from '../components/home/AmenitiesStrip';
import SpaHighlight from '../components/home/SpaHighlight';
import GalleryPreview from '../components/home/GalleryPreview';
import Testimonials from '../components/home/Testimonials';
import NearbyAttractions from '../components/home/NearbyAttractions';
import CTABanner from '../components/home/CTABanner';
import { getHotelSchema } from '../utils/seo';
import { siteConfig } from '../data/siteConfig';

export default function Home() {
  const schema = getHotelSchema();

  return (
    <>
      <Helmet>
        <title>{siteConfig.name} | Luxury Nature Stay in Mahabaleshwar–Panchgani</title>
        <meta name="description" content="Escape to the clouds at Cloudgreen Resort & Spa, Metgutad, Mahabaleshwar–Panchgani. Experience serene mountain valley views, swimming pool, luxury spa, complimentary breakfast, and pet-friendly rooms starting ₹1,897/night." />
        <link rel="canonical" href="https://cloudgreenresort.com/" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <div>
        <Hero />
        <AboutPreview />
        <FeaturedRooms />
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
