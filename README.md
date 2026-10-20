# Cloudgreen Resort & Spa (क्लाउडग्रीन रिसॉर्ट & स्पा)

> Modern, luxury-but-affordable, fully responsive website for **Cloudgreen Resort & Spa**, a 2-star boutique hill-station haven located in Metgutad on the Panchgani–Mahabaleshwar Road, Maharashtra.

---

## 🌲 Business Overview
- **Property Name:** Cloudgreen Resort & Spa (क्लाउडग्रीन रिसॉर्ट & स्पा)
- **Category:** 2-Star Boutique Hill-Station Resort & Spa
- **Location:** Panchgani - Mahabaleshwar Rd, Metgutad, Maharashtra 412806
- **Phone:** 094206 33577 / +91 94206 33577
- **Google Rating:** 4.3 ★ (123+ verified traveler reviews)
- **Starting Price:** Around ₹1,897 per night (Double Bed Room)
- **Check-in / Check-out:** 2:00 PM / 11:00 AM (flexible)
- **Key Amenities:** Outdoor Swimming Pool, Ayurvedic Spa & Wellness, Complimentary Breakfast, Free High-Speed Wi-Fi, Free Parking, Laundry Service, 100% Pet-Friendly, Evening Bonfire.
- **Nearby:** Metgutad Strawberry Farms (0.5 km), Mapro Garden (3.2 km), Lingmala Waterfall (5.1 km), Venna Lake (7.8 km), Table Land Panchgani (9.5 km).

---

## 🎨 Tech Stack & Libraries
- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS (Custom palette: Deep Forest Green `#1F4D3A`, Soft Sage `#A8C3A0`, Warm Cream `#FAF7F0`, Gold Accent `#C9A24B`)
- **Typography:** *Playfair Display* (Headings) + *Poppins* (Body) via Google Fonts
- **Routing:** React Router v6 (`BrowserRouter`, dynamic `:id` routing)
- **Animations:** Framer Motion (smooth page transitions, reveals, modal lightboxes)
- **Icons:** Lucide React
- **SEO & Structured Data:** `react-helmet-async` + Schema.org `Resort` JSON-LD
- **Forms & Validation:** `react-hook-form`
- **Instant Messaging:** Dynamic prefilled WhatsApp booking & inquiry integration

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18 or higher) and npm installed.

### 2. Installation
```bash
npm install
```

### 3. Run Locally (Development Server)
```bash
npm run dev
```
The site will start at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Directory Structure
```
cloudgreenhotel/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── FloatingButtons.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── SectionTitle.jsx
│   │   ├── contact/
│   │   │   ├── ContactForm.jsx
│   │   │   ├── EnquiryForm.jsx
│   │   │   └── MapEmbed.jsx
│   │   ├── gallery/
│   │   │   ├── GalleryGrid.jsx
│   │   │   └── Lightbox.jsx
│   │   ├── home/
│   │   │   ├── AboutPreview.jsx
│   │   │   ├── AmenitiesStrip.jsx
│   │   │   ├── AvailabilityBar.jsx
│   │   │   ├── CTABanner.jsx
│   │   │   ├── FeaturedRooms.jsx
│   │   │   ├── GalleryPreview.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── NearbyAttractions.jsx
│   │   │   ├── SpaHighlight.jsx
│   │   │   └── Testimonials.jsx
│   │   └── rooms/
│   │       ├── RoomCard.jsx
│   │       └── RoomFilter.jsx
│   ├── context/
│   │   └── LanguageContext.jsx
│   ├── data/
│   │   ├── amenities.js
│   │   ├── attractions.js
│   │   ├── gallery.js
│   │   ├── rooms.js
│   │   ├── siteConfig.js
│   │   ├── spaServices.js
│   │   └── testimonials.js
│   ├── hooks/
│   │   ├── useInView.js
│   │   └── useScrollPosition.js
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Amenities.jsx
│   │   ├── Attractions.jsx
│   │   ├── BookingEnquiry.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Reviews.jsx
│   │   ├── RoomDetails.jsx
│   │   ├── Rooms.jsx
│   │   └── Spa.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   ├── seo.js
│   │   └── whatsapp.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ✨ Features Checklist
- [x] Sticky transparent navbar that smoothly transitions to solid glass on scroll
- [x] Multi-lingual support (English / हिंदी / मराठी) with live toggle
- [x] Animated Hero with ambient slide transitions and direct Availability Search bar
- [x] Detailed Room catalog with interactive category filters and dedicated Room Details pages (`/rooms/:id`)
- [x] Spa & Wellness section with therapies, durations, and pricing
- [x] Interactive Photo Gallery with category tabs (Rooms, Pool, Spa, Exterior, Views) and full-screen Lightbox
- [x] Nearby Attractions with driving times, distance cards, and a 2-day suggested weekend itinerary
- [x] 4.3 Google rating breakdown and verified guest testimonials
- [x] Contact page with responsive Google Maps embed, driving instructions, and FAQ accordion
- [x] Booking Enquiry form with live estimated tariff calculator and prefilled WhatsApp link generator
- [x] Floating WhatsApp and Click-to-Call buttons for maximum mobile conversion
- [x] Accessible HTML5 semantic markup, Schema.org Hotel JSON-LD, and Open Graph tags
