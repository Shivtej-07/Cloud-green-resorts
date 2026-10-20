import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Leaf, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Users, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Coffee 
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { siteConfig } from '../data/siteConfig';

export default function About() {
  const stats = [
    { label: "Google Guest Rating", value: "4.3 / 5", icon: Star },
    { label: "Verified Reviews", value: "123+", icon: Users },
    { label: "Starting Tariff", value: "₹1,897", icon: Sparkles },
    { label: "Pet Friendly", value: "100%", icon: Heart }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Nature-First Architecture",
      desc: "Our resort structures, red-tiled roof cottages, and open balconies are carefully positioned around mature trees and natural topography to keep concrete footprints minimal."
    },
    {
      icon: Heart,
      title: "Warm Regional Hospitality",
      desc: "We take immense pride in genuine Maharashtrian warmth. From customized dining for elderly guests to safe running spaces for children and pets, you're treated like cherished family."
    },
    {
      icon: ShieldCheck,
      title: "Honest, Transparent Pricing",
      desc: "No hidden resort surcharges or unexpected taxes. What you see is what you pay, with complimentary hot breakfast and parking always included."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Cloudgreen Resort &amp; Spa Mahabaleshwar–Panchgani</title>
        <meta name="description" content="Discover the story and ethos of Cloudgreen Resort & Spa in Metgutad. A tranquil 2-star resort offering pool, spa, pet-friendly cottages and warm hospitality." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-36 pb-20 bg-forest-950 text-cream-100 relative overflow-hidden text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">
            <span>Our Journey &amp; Philosophy</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            A Sanctuary Between the Hills &amp; the Clouds
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            Rooted in Metgutad, Maharashtra — where cool mountain breezes whisper through dense pine forests and strawberry blossoms.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-2 border-r last:border-r-0 border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-forest-800" />
                </div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">{s.value}</span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-forest-800">
                <span className="w-6 h-[1.5px] bg-gold-500 rounded-full inline-block"></span>
                <span>The Story of Metgutad</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 leading-tight">
                Born Out of a Love for Unspoiled Western Ghats
              </h2>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                While commercial town centers of Mahabaleshwar and Panchgani have grown crowded over the decades, the historic ridge settlement of <strong>Metgutad</strong> retained its tranquil soul. Long celebrated by local farmers for sweet mountain strawberries and rolling eucalyptus groves, this scenic ridge inspired the creation of <strong>Cloudgreen Resort &amp; Spa</strong>.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We designed our resort to be a serene sanctuary where weary city dwellers from Mumbai and Pune could disconnect from traffic, screens, and deadlines — awakening instead to misty cloud carpets rolling through their balcony railings.
              </p>

              <div className="bg-white p-5 rounded-2xl border-l-4 border-gold-500 shadow-soft">
                <p className="font-serif italic text-forest-950 text-base">
                  "Our goal has always been simple: luxury you can genuinely afford, surrounded by the healing power of genuine hill-station nature."
                </p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-2">
                  — The Management, Cloudgreen Resort &amp; Spa
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=80"
                  alt="Resort Cottage Grounds"
                  className="rounded-3xl shadow-lg object-cover h-64 w-full"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80"
                  alt="Spa and Wellness Therapy"
                  className="rounded-3xl shadow-lg object-cover h-64 w-full mt-6"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=700&q=80"
                  alt="Swimming Pool"
                  className="rounded-3xl shadow-lg object-cover h-64 w-full -mt-6"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=700&q=80"
                  alt="Strawberry Farm near Metgutad"
                  className="rounded-3xl shadow-lg object-cover h-64 w-full"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What Drives Us"
            title="Hospitality Rooted in Care"
            description="Our three core principles ensure every guest enjoys peace of mind, wholesome food, and unforgettable memories."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-cream-100 rounded-3xl p-8 border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest-950 mb-3">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us checklist */}
      <section className="py-16 bg-forest-900 text-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl font-bold text-white">Why Travelers Choose Cloudgreen</h3>
            <p className="text-sm text-cream-300 mt-2">Everything you need for an unforgettable hill-station vacation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Midpoint between Panchgani & Mahabaleshwar viewpoints",
              "100% Pet-friendly welcoming with open grassy lawns",
              "Delicious complimentary breakfast served daily",
              "Crystal-clear swimming pool with kid's wading zone",
              "Deeply restorative Ayurvedic & modern body massages",
              "Walking distance to fresh organic strawberry farms",
              "Guarded on-site parking with 24/7 CCTV surveillance",
              "High speed optical fiber Wi-Fi throughout resort grounds",
              "Evening bonfire and stargazing under crisp hill skies"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-xs sm:text-sm text-cream-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/booking" variant="gold" size="lg">
              Book Your Stay with Direct Perks
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
