import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/common/SectionTitle';
import GalleryGrid from '../components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Photo Gallery | Cloudgreen Resort &amp; Spa Mahabaleshwar</title>
        <meta name="description" content="View high resolution photos of Cloudgreen Resort & Spa in Metgutad, Mahabaleshwar. Browse rooms, swimming pool, spa suites, mountain viewpoints and exterior lawns." />
      </Helmet>

      {/* Header */}
      <section className="pt-36 pb-16 bg-forest-950 text-cream-100 relative text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-3">
            Visual Journey
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Resort Photo Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            Take a visual tour through our tranquil cottages, refreshing outdoor swimming pool, therapeutic spa suites, and picturesque hill landscapes.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
