import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Bed, Phone, Compass } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Cloudgreen Resort &amp; Spa</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center py-36 px-4 bg-cream-200 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-forest-800 text-gold-400 flex items-center justify-center mx-auto shadow-xl">
            <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '8s' }} />
          </div>

          <span className="text-xs uppercase font-bold tracking-widest text-gold-600 block">
            Error 404
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950">
            Lost in the Mountain Mist?
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The page or trail you are looking for seems to have drifted into the clouds. Let's guide you back to the warmth of Cloudgreen Resort.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
              Return to Homepage
            </Button>

            <Button to="/rooms" variant="outline" size="md" icon={Bed} iconPosition="left">
              Explore Our Rooms
            </Button>

            <Button to="/contact" variant="ghost" size="md" icon={Phone} iconPosition="left">
              Contact Desk
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
