import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ShieldCheck, 
  ExternalLink, 
  ThumbsUp, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { testimonials, ratingOverview } from '../data/testimonials';
import { siteConfig } from '../data/siteConfig';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

export default function Reviews() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredReviews = selectedFilter === "all"
    ? testimonials
    : selectedFilter === "5"
    ? testimonials.filter(t => t.rating === 5)
    : testimonials.filter(t => t.rating === 4);

  return (
    <>
      <Helmet>
        <title>Guest Reviews &amp; Ratings | Cloudgreen Resort &amp; Spa Mahabaleshwar</title>
        <meta name="description" content="Read 123+ real traveler reviews for Cloudgreen Resort & Spa in Metgutad, Mahabaleshwar. Rated 4.3/5 on Google for mountain valley views, swimming pool, and pet-friendly hospitality." />
      </Helmet>

      {/* Header */}
      <section className="pt-36 pb-20 bg-forest-950 text-cream-100 relative text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">
            <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
            <span>Google Rating: 4.3 / 5.0</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Guest Testimonials &amp; Reviews
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            Genuine feedback from families, couples, and pet parents who have experienced our hospitality in Metgutad.
          </p>
        </div>
      </section>

      {/* Ratings Overview Section */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-200/80 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Score Left */}
              <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-8 lg:pb-0 lg:pr-8">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
                  Overall Google Rating
                </span>
                <div className="flex items-baseline justify-center lg:justify-start gap-2">
                  <span className="font-serif text-6xl font-bold text-forest-950">
                    {ratingOverview.averageRating}
                  </span>
                  <span className="text-xl text-slate-500 font-medium">/ 5.0</span>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start text-gold-400 my-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-600">
                  Based on <strong>{ratingOverview.totalReviews} verified guest reviews</strong>
                </p>

                <div className="mt-6">
                  <a
                    href={siteConfig.socials.googleReviews}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cream-100 hover:bg-forest-800 hover:text-white text-forest-900 border border-slate-200 text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
                  >
                    <span>Write a Review on Google</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Category Breakdown Middle */}
              <div className="lg:col-span-4 space-y-3">
                <h4 className="font-serif text-base font-bold text-forest-950 mb-3">
                  Rating by Category
                </h4>
                {ratingOverview.categories.map((cat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs">
                    <span className="w-36 text-slate-700 font-medium truncate">{cat.label}</span>
                    <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-forest-800 h-full rounded-full"
                        style={{ width: `${cat.percent}%` }}
                      />
                    </div>
                    <span className="w-8 font-bold text-forest-900 text-right">{cat.rating}</span>
                  </div>
                ))}
              </div>

              {/* Star Distribution Right */}
              <div className="lg:col-span-4 space-y-2 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-6 lg:pt-0 lg:pl-8">
                <h4 className="font-serif text-base font-bold text-forest-950 mb-3">
                  Star Distribution
                </h4>
                {ratingOverview.distribution.map((dist, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <span className="w-12 text-slate-600">{dist.stars} Stars</span>
                    <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gold-500 h-full rounded-full"
                        style={{ width: `${dist.percent}%` }}
                      />
                    </div>
                    <span className="w-12 text-slate-500 text-right">{dist.count} ({dist.percent}%)</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === "all"
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-cream-100 border border-slate-200'
              }`}
            >
              All Reviews ({testimonials.length})
            </button>
            <button
              onClick={() => setSelectedFilter("5")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === "5"
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-cream-100 border border-slate-200'
              }`}
            >
              5 Star Reviews Only
            </button>
            <button
              onClick={() => setSelectedFilter("4")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === "4"
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-cream-100 border border-slate-200'
              }`}
            >
              4 Star Reviews
            </button>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.map((rev) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-1 text-gold-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-500" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-forest-950 mt-3">
                    "{rev.title}"
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover border border-forest-800/20"
                    />
                    <div>
                      <h5 className="font-serif text-sm font-bold text-forest-950">{rev.name}</h5>
                      <span className="text-[11px] text-slate-500">{rev.city} • {rev.stayType}</span>
                    </div>
                  </div>

                  {rev.verified && (
                    <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button to="/booking" variant="gold" size="lg">
              Experience Cloudgreen for Yourself
            </Button>
          </div>

        </div>
      </section>
    </>
  );
}
