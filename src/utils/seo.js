import { siteConfig } from "../data/siteConfig";

/**
 * Returns structured JSON-LD schema for Google Rich Results (Hotel / LodgingBusiness)
 */
export function getHotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Resort",
    "name": siteConfig.name,
    "alternateName": siteConfig.nativeName,
    "description": "2-star hill-station boutique resort & spa nestled in Metgutad on Panchgani-Mahabaleshwar Road. Features swimming pool, luxury spa, valley views, free breakfast and pet-friendly accommodations.",
    "url": "https://cloudgreenresort.com",
    "telephone": siteConfig.contact.phone,
    "priceRange": "₹1,897 - ₹5,299",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "2"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.rating.toString(),
      "reviewCount": siteConfig.reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.coordinates.lat,
      "longitude": siteConfig.coordinates.lng
    },
    "checkinTime": siteConfig.checkIn,
    "checkoutTime": siteConfig.checkOut,
    "petsAllowed": true,
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free High-Speed Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Complimentary Breakfast", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free On-Site Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Spa and Wellness Center", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Pet-Friendly", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Laundry Service", "value": true }
    ],
    "image": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ]
  };
}
