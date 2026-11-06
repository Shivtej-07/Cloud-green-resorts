/**
 * Reveridge Destinations & Properties Data
 * 
 * 5 Distinct Hospitality Properties across Maharashtra
 */

export const destinations = [
  {
    id: "mahabaleshwar-resort",
    slug: "mahabaleshwar-resort",
    number: 1,
    propertyCode: "PROPERTY 1",
    name: "Reveridge Resort & Spa, Mahabaleshwar",
    shortName: "Mahabaleshwar",
    brandName: "Reveridge Resort & Spa",
    subtitle: "Boutique Luxury Resort — Flagship",
    location: "Mahabaleshwar, Satara District, Maharashtra",
    region: "Mahabaleshwar, Satara District, Maharashtra",
    category: "Resort & Spa",
    type: "Boutique Luxury Resort — Flagship",
    starEquivalent: "5 Star Boutique",
    totalRooms: "20 rooms across 7 categories",
    roomCountTotal: 20,
    categoriesCount: 7,
    altitude: "Approximately 1,353 metres above sea level",
    distances: {
      pune: "120 km — approximately 2.5 hours by road",
      mumbai: "260 km — approximately 5 hours by road",
      nearestAirport: "Pune International Airport — 130 km"
    },
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    parking: "Free private parking on premises",
    lift: "Yes — available throughout property",
    bhk: null,
    badge: "Flagship Resort",
    startingPrice: 2500,
    currency: "₹",
    rating: 4.8,
    reviewCount: 220,
    address: "Panchgani - Mahabaleshwar Rd, Metgutad, Mahabaleshwar 412806, Satara District, Maharashtra",
    tagline: "Flagship 20-room boutique resort in the tranquil hills of Mahabaleshwar with sweeping valley & sunset balcony views",
    
    // Verbatim Property Description
    description: "Reveridge Resort & Spa is our flagship property — a 20-room boutique resort nestled in the tranquil hills of Mahabaleshwar, designed to offer guests a seamless blend of nature, refined comfort, and personalised hospitality. Surrounded by lush greenery with sweeping valley and sunset views from balcony rooms, the resort is a complete destination in itself.\n\nThe property features a multi-cuisine restaurant, a coffee shop, a full-service wellness spa, steam and sauna, an outdoor swimming pool, a conference hall, indoor and outdoor games, a lift, and private parking — making it the most comprehensively equipped boutique property in Mahabaleshwar.",
    
    highlights: [
      "20 Rooms across 7 Distinct Categories",
      "Sweeping Valley & Sunset Balcony Views",
      "Full-Service Wellness Spa with Steam & Sauna",
      "Modern Coffee Shop & Artisanal Café",
      "Outdoor Swimming Pool Surrounded by Nature",
      "Multi-Cuisine Restaurant & Coffee Shop",
      "Conference Hall with Full AV (10–50 Guests)",
      "Lift Throughout & Free Private Parking",
      "Surrounded by Lush Strawberry Farms & Forest"
    ],

    // Modern Coffee Shop & Cafe Information
    cafeInfo: {
      name: "The Reveridge Café & Coffee Shop",
      badge: "Artisanal Coffee & Hillside Patisserie",
      tagline: "Where handcrafted single-origin coffee, cool mountain air, and freshly baked confectionery meet",
      description: "Perched with panoramic views of the Sahyadri valley mist, our modern boutique coffee shop and cafe is a warm sanctuary for discerning coffee lovers. Enjoy freshly ground single-origin espresso, pour-overs, artisan teas, handcrafted farm-fresh strawberry desserts, light savory bites, and freshly baked viennoiserie — all served in a chic, relaxed indoor and open-air deck setting with high-speed Wi-Fi.",
      timings: "Open Daily: 7:30 AM – 10:30 PM",
      features: [
        { title: "Specialty Espresso Bar", desc: "Single-origin Arabica roasts, cappuccinos, flat whites, lattes & signature cold brews" },
        { title: "Farm-Fresh Strawberry Delicacies", desc: "Mahabaleshwar strawberry cream, thick milkshakes, cheesecakes & tarts" },
        { title: "Artisan Bakery & Patisserie", desc: "Buttery croissants, warm muffins, sourdough avocado toasts & tea cakes baked fresh daily" },
        { title: "Open-Air Valley Deck", desc: "Breathe in pine-scented mist while sipping your morning brew on the mountain deck" },
        { title: "Handcrafted Herbal Infusions & Chai", desc: "Organic green teas, chamomile, lemongrass & authentic spiced masala chai" },
        { title: "Remote Work & Reading Sanctuary", desc: "High-speed Wi-Fi, comfortable ergonomic lounge seating & charging points" }
      ],
      images: [
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
      ]
    },

    // Verbatim Room Categories & 4-Tier Pricing
    pricingNote: "All prices per room per night. Taxes applicable. Balcony rooms have direct valley and sunset views. B + L/D = Breakfast + Lunch or Dinner (guest's choice). Panorama Suite meal plan rates are indicative — confirm with reservations team.",
    roomCategories: [
      {
        id: "classic-room",
        name: "Classic room",
        roomCount: 3,
        view: "Garden or internal facing, no balcony",
        viewShort: "Garden / Internal Facing",
        balcony: false,
        pricing: {
          roomOnly: 2500,
          withBreakfast: 2800,
          bLd: 3500,
          allMeals: 4200
        },
        features: ["3 Rooms Available", "Garden or internal facing", "No balcony", "King Size Bed", "Ensuite Bath", "Free Wi-Fi"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "signature-classic-balcony",
        name: "Signature classic room with balcony",
        roomCount: 4,
        view: "Direct valley and sunset views",
        viewShort: "Direct Valley & Sunset",
        balcony: true,
        pricing: {
          roomOnly: 3500,
          withBreakfast: 3800,
          bLd: 4800,
          allMeals: 5800
        },
        features: ["4 Rooms Available", "Private Balcony", "Direct valley & sunset views", "Coffee Maker", "Premium Linens"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "premier-vista",
        name: "Premier vista room",
        roomCount: 4,
        view: "Panoramic valley and sunset views",
        viewShort: "Panoramic Valley View",
        balcony: true,
        pricing: {
          roomOnly: 4200,
          withBreakfast: 4600,
          bLd: 5300,
          allMeals: 6000
        },
        features: ["4 Rooms Available", "Elevated Valley Balcony", "Sunset Panoramas", "Rain Shower", "Work Desk & Wi-Fi"],
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "premier-vista-jacuzzi",
        name: "Premier vista with jacuzzi",
        roomCount: 4,
        view: "Direct valley views with private in-room jacuzzi",
        viewShort: "Valley View + Private Jacuzzi",
        balcony: true,
        hasJacuzzi: true,
        pricing: {
          roomOnly: 5500,
          withBreakfast: 5800,
          bLd: 6800,
          allMeals: 7800
        },
        features: ["4 Rooms Available", "Private In-Room Jacuzzi", "Valley Views", "Balcony Lounge Seating", "Luxury Herbal Toiletries"],
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "panorama-crown-suite",
        name: "Panorama crown suite",
        roomCount: 1,
        view: "Panoramic valley and mountain view, the best view in the property",
        viewShort: "Best Mountain & Valley View",
        balcony: true,
        isSuite: true,
        note: "Panorama Suite meal plan rates are indicative — confirm with reservations team.",
        pricing: {
          roomOnly: 6000,
          withBreakfast: 6400,
          bLd: 7800,
          allMeals: 9200
        },
        features: ["1 Exclusive Suite", "Best view in the property", "Living Room Lounge", "Wrap-Around Balcony Deck", "VIP Welcome Amenities"],
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "signature-comfort-balcony",
        name: "Signature comfort room with balcony",
        roomCount: 2,
        view: "Private balcony, deep valley & sunset view",
        viewShort: "Deep Valley & Sunset Balcony",
        balcony: true,
        pricing: {
          roomOnly: 6000,
          withBreakfast: 6400,
          bLd: 7100,
          allMeals: 7800
        },
        features: ["2 Rooms Available", "Extra Spacious Layout", "Deep Valley Balcony", "Premium Teak Furniture", "Mini Bar & Safe"],
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "signature-family-balcony-forest",
        name: "Signature family room with balcony and forest View",
        roomCount: 2,
        view: "Balcony with forest view",
        viewShort: "Balcony & Forest View",
        balcony: true,
        pricing: {
          roomOnly: 8000,
          withBreakfast: 8400,
          bLd: 9100,
          allMeals: 9800
        },
        features: ["2 Family Rooms", "Balcony with serene forest view", "Ideal for Families (4–6 Guests)", "Multiple Bedding Configurations", "Spacious Double Bathroom"],
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80"
      }
    ],

    // Verbatim Complete Facilities List
    facilitiesList: [
      "Multi-cuisine restaurant — Indian, Continental, Maharashtrian cuisine",
      "Coffee shop and cafe",
      "Full-service wellness spa — massage, treatments, therapies",
      "Steam and sauna",
      "Outdoor swimming pool",
      "Conference hall — capacity 10 to 50 guests, full AV setup",
      "Indoor games — carrom, chess, board games, table tennis",
      "Outdoor games",
      "Lift / elevator throughout property",
      "Free private parking",
      "24-hour front desk",
      "Room service (selected hours)",
      "Daily housekeeping",
      "Free WiFi throughout",
      "Luggage storage",
      "In-house sightseeing desk — private transport and guided tours",
      "Bonfire area — on request, subject to availability"
    ],

    // Verbatim View Details
    viewDetails: [
      {
        type: "Balcony rooms",
        description: "Direct valley and sunset views"
      },
      {
        type: "Garden rooms",
        description: "Garden access, no valley view"
      },
      {
        type: "Classic rooms",
        description: "Garden or internal facing, no balcony"
      },
      {
        type: "Panorama Suite",
        description: "Panoramic valley and mountain view, the best view in the property"
      }
    ],

    // Verbatim Packages Offered
    packages: [
      {
        id: "romantic-escape",
        name: "Romantic Escape",
        badge: "Couples & Romance",
        tagline: "Curated for couples seeking an elevated, intimate mountain hideaway",
        inclusions: "Room, décor, candlelight dinner, breakfast, spa treatment"
      },
      {
        id: "honeymoon-bliss",
        name: "Honeymoon Bliss",
        badge: "Signature Honeymoon",
        tagline: "Our ultimate romantic stay featuring the Panorama Crown Suite",
        inclusions: "Panorama Suite or best room, premium décor, couples spa, breakfast, sightseeing"
      },
      {
        id: "family-holiday",
        name: "Family Holiday",
        badge: "Family Favorite",
        tagline: "Spacious comfort, recreation for kids, and cozy bonfire evenings",
        inclusions: "Spacious room, breakfast, pool, indoor games, bonfire, sightseeing"
      },
      {
        id: "corporate-retreat",
        name: "Corporate Retreat",
        badge: "Groups & MICE",
        tagline: "Productive strategy sessions paired with crisp hill station freshness",
        inclusions: "Conference hall, group accommodation, group dining, spa access, outdoor activity"
      },
      {
        id: "nature-explorer",
        name: "Nature Explorer",
        badge: "Local Experience",
        tagline: "Immersive discovery of Sahyadri peaks, strawberry groves, and forest trails",
        inclusions: "Room, breakfast, full sightseeing with private transport, nature walk, strawberry farm"
      },
      {
        id: "extended-stay",
        name: "Extended Stay Offer",
        badge: "Best Value (3+ Nights)",
        tagline: "Stay longer, unwind deeper, and enjoy genuine boutique luxury",
        inclusions: "3+ nights, 25% discount, room upgrade subject to availability"
      }
    ],

    // Verbatim Experiences Offered
    experiences: [
      {
        title: "Valley Viewpoint Tour",
        subtitle: "Iconic Sahyadri Panoramas",
        description: "Private transport, guided tour to Arthur's Seat, Wilson Point, Kate's Point, Elephant's Head Point, sunset viewpoint."
      },
      {
        title: "Strawberry Farm Visit",
        subtitle: "Taste of Mahabaleshwar",
        description: "Guided visit to Mapro Garden, strawberry tasting, Mapro products."
      },
      {
        title: "Nature Walk",
        subtitle: "Forest Canopy Trails",
        description: "Guided forest trail walk, local flora and birds, optional Lingmala Waterfall extension."
      },
      {
        title: "Bonfire Evening",
        subtitle: "Under Starlit Sahyadri Skies",
        description: "Private bonfire setup, seating, optional snacks and beverages."
      }
    ],

    // Verbatim Nearby Attractions with Distances
    nearbyAttractions: [
      {
        name: "Arthur's Seat",
        distance: "~6 km",
        description: "Most famous viewpoint overlooking the deep Brahma-Arayana valley and Savitri river gorge."
      },
      {
        name: "Wilson Point",
        distance: "~4 km",
        description: "Highest point in Mahabaleshwar at 1,439m, renowned for spectacular 360-degree sunrise views."
      },
      {
        name: "Kate's Point",
        distance: "~8 km",
        description: "Picturesque cliff point with sweeping views of Dhom Dam, Krishna Valley, and Kamalgadh fort."
      },
      {
        name: "Elephant's Head Point",
        distance: "~7 km",
        description: "Famous natural rock formation resembling an elephant's head and trunk against the Western Ghats."
      },
      {
        name: "Venna Lake",
        distance: "~5 km",
        description: "Idyllic mountain lake offering paddle and row boating, horse rides, and lakeside promenade walks."
      },
      {
        name: "Mapro Garden",
        distance: "~7 km",
        description: "Iconic strawberry farm, fruit processing factory tour, cafe, and tasting of fresh strawberry cream."
      },
      {
        name: "Lingmala Waterfall",
        distance: "~4 km",
        description: "Breathtaking cascade dropping 600 ft into the forest valley (monsoon & post-monsoon seasonal peak)."
      },
      {
        name: "Panchgani",
        distance: "~20 km",
        description: "Neighbouring hill town famous for the expansive volcanic Table Land plateau and colonial cottages."
      }
    ],

    amenities: [
      "Swimming Pool", "Wellness Spa", "Steam & Sauna", "Multi-cuisine Restaurant", 
      "Coffee Shop & Cafe", "Conference Hall", "Indoor Games", "Outdoor Games", 
      "Lift Throughout", "Free Parking", "24-hr Front Desk", "Free Wi-Fi"
    ],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85"
    ],
    iconType: "resort",
    route: "/destinations/mahabaleshwar-resort",
    isPrimaryResort: true,
    contactPhone: "+91 94206 33577"
  },
  {
    id: "mahabaleshwar-villa-6bhk",
    slug: "mahabaleshwar-villa-6bhk",
    number: 2,
    propertyCode: "PROPERTY 2",
    name: "Reveridge Stays, Mahabaleshwar Villa (6 BHK)",
    shortName: "Mahabaleshwar Villa",
    brandName: "Reveridge Stays",
    subtitle: "Private Luxury Villa — Entire Property Rental",
    location: "Mahabaleshwar, Satara District, Maharashtra",
    region: "Mahabaleshwar, Satara District, Maharashtra",
    category: "Private Luxury Villa",
    type: "Private Luxury Villa — Entire Property Rental",
    starEquivalent: "5 Star Private Luxury Villa",
    size: "6 BHK (6 bedrooms)",
    totalRooms: "6 BHK (6 bedrooms)",
    capacity: "Up to 12 guests (2 per bedroom)",
    rateText: "₹22,000 per night (entire villa — all 6 bedrooms)",
    includes: "24/7 dedicated chef, dedicated housekeeping, private parking",
    minimumStay: "2 nights recommended",
    view: "Valley and sunset views",
    chef: "24/7 dedicated personal chef — all meals cooked on request",
    housekeeping: "Dedicated team throughout stay",
    roomCountTotal: 6,
    categoriesCount: 1,
    altitude: "Approximately 1,320 metres above sea level",
    distances: {
      pune: "120 km — approximately 2.5 hours by road",
      mumbai: "260 km — approximately 5 hours by road",
      nearestAirport: "Pune International Airport — 130 km"
    },
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    parking: "Free private parking on premises",
    lift: "Ground level accessibility & private staircases",
    bhk: "6 BHK",
    badge: "Entire Villa Rental",
    startingPrice: 22000,
    currency: "₹",
    rating: 4.9,
    reviewCount: 96,
    address: "Old Mahabaleshwar Road, Hilltop Estate, Mahabaleshwar 412806, Satara District, Maharashtra",
    tagline: "Private 6-bedroom luxury mountain villa with valley & sunset views, 24/7 personal chef, pool & two celebration areas",
    
    // Verbatim Property Description
    description: "A private 6-bedroom luxury villa perched on the mountains of Mahabaleshwar with breathtaking valley and sunset views. Entirely yours — no shared spaces, no other guests, complete privacy. A dedicated 24/7 chef prepares all meals to your preference. The housekeeping team maintains the villa with complete discretion throughout your stay.\n\nTwo dedicated celebration areas make this villa ideal for birthdays, anniversaries, and private events. A private swimming pool, lush garden spaces, and selected rooms with bathtubs complete the offering.",
    
    highlights: [
      "Entire 6 BHK Private Luxury Villa (All 6 Bedrooms)",
      "Up to 12 Guests (2 per bedroom)",
      "24/7 Dedicated Personal Chef (All meals cooked to preference)",
      "Dedicated Housekeeping Team Throughout Stay",
      "Private Swimming Pool & Lush Garden Areas",
      "Two Dedicated Celebration / Event Areas",
      "Selected Rooms with Private Bathtubs",
      "Valley and Sunset Mountain Panoramas"
    ],

    pricingNote: "Rate: ₹22,000 per night (entire villa — all 6 bedrooms). Includes 24/7 dedicated chef, dedicated housekeeping, private parking. Minimum stay: 2 nights recommended. Taxes applicable.",

    roomCategories: [
      {
        id: "entire-6bhk-villa",
        name: "Entire 6 BHK Private Luxury Villa",
        roomCount: 6,
        view: "Valley and sunset views",
        viewShort: "Valley & Sunset Views",
        balcony: true,
        pricing: {
          roomOnly: 22000,
          withBreakfast: 22000,
          bLd: 22000,
          allMeals: 22000
        },
        features: [
          "All 6 Bedrooms Included",
          "Capacity up to 12 Guests (2 per bedroom)",
          "24/7 Dedicated Personal Chef",
          "Dedicated Housekeeping Team",
          "Private Swimming Pool",
          "Two Dedicated Celebration Areas",
          "Selected Rooms with Private Bathtub",
          "Private Parking on Premises"
        ],
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80"
      }
    ],

    // Verbatim Facilities Complete List (13 items)
    facilitiesList: [
      "Private swimming pool",
      "Lush garden areas",
      "Two dedicated celebration / event areas",
      "Private parking",
      "24/7 dedicated personal chef — all meals cooked to preference",
      "Dedicated housekeeping team throughout stay",
      "Selected rooms with private bathtub",
      "Indoor games",
      "Valley and sunset views",
      "Sightseeing with private transport — arranged in-house",
      "Bonfire on request",
      "Free WiFi",
      "Honeymoon and celebration setup on request"
    ],

    viewDetails: [
      {
        type: "Valley & Sunset Views",
        description: "Breathtaking mountain and sunset views over the Mahabaleshwar valley from private balconies"
      },
      {
        type: "Lush Garden & Pool Deck",
        description: "Two dedicated celebration areas and private pool patio surrounded by tranquil mountain greens"
      }
    ],

    // Verbatim Packages Offered (4 packages)
    packages: [
      {
        id: "celebration-package",
        name: "Celebration Package",
        badge: "Events & Birthdays",
        tagline: "Designed for milestone birthdays, anniversaries, and private events",
        inclusions: "Villa, décor in celebration areas, customised menu, sightseeing"
      },
      {
        id: "honeymoon-villa-package",
        name: "Honeymoon Villa Package",
        badge: "Romantic Escape",
        tagline: "Exclusive intimacy and luxury for couples with private pool and bathtub room",
        inclusions: "Villa, romantic décor, candlelight dinner, bathtub room, sightseeing"
      },
      {
        id: "family-retreat-package",
        name: "Family Retreat Package",
        badge: "Family Bonding",
        tagline: "Complete family vacation with customized home-style meals and indoor games",
        inclusions: "Villa, customised meals, indoor games, garden, sightseeing"
      },
      {
        id: "group-friends-getaway",
        name: "Group & Friends Getaway",
        badge: "Friends & Groups",
        tagline: "Full villa exclusive takeover for up to 12 guests with bonfire and celebration areas",
        inclusions: "Full villa for up to 12, personalised meals, celebration area, bonfire, sightseeing"
      }
    ],

    // Verbatim Experiences
    experiences: [
      {
        title: "24/7 Private Chef Culinary Experience",
        subtitle: "Personalised Gourmet Dining",
        description: "All meals cooked fresh to your personal taste and preference by your private dedicated chef."
      },
      {
        title: "Private Pool & Celebration Evening",
        subtitle: "Two Dedicated Event Areas",
        description: "Celebrate special moments with private pool dips, garden party setups, and evening bonfires."
      },
      {
        title: "In-House Guided Sightseeing",
        subtitle: "Private Transport Arranged",
        description: "Chauffeured private sightseeing tours to Mahabaleshwar's iconic viewpoints and strawberry farms."
      }
    ],

    // Sightseeing — Same as Resort (arranged in-house with private transport)
    nearbyAttractions: [
      {
        name: "Arthur's Seat",
        distance: "~6 km",
        description: "Most famous viewpoint overlooking the deep Brahma-Arayana valley and Savitri river gorge."
      },
      {
        name: "Wilson Point",
        distance: "~4 km",
        description: "Highest point in Mahabaleshwar at 1,439m, renowned for spectacular 360-degree sunrise views."
      },
      {
        name: "Kate's Point",
        distance: "~8 km",
        description: "Picturesque cliff point with sweeping views of Dhom Dam, Krishna Valley, and Kamalgadh fort."
      },
      {
        name: "Elephant's Head Point",
        distance: "~7 km",
        description: "Famous natural rock formation resembling an elephant's head and trunk against the Western Ghats."
      },
      {
        name: "Venna Lake",
        distance: "~5 km",
        description: "Idyllic mountain lake offering paddle and row boating, horse rides, and lakeside promenade walks."
      },
      {
        name: "Mapro Garden",
        distance: "~7 km",
        description: "Iconic strawberry farm, fruit processing factory tour, cafe, and tasting of fresh strawberry cream."
      },
      {
        name: "Lingmala Waterfall",
        distance: "~4 km",
        description: "Breathtaking cascade dropping 600 ft into the forest valley (monsoon & post-monsoon seasonal peak)."
      },
      {
        name: "Panchgani",
        distance: "~20 km",
        description: "Neighbouring hill town famous for the expansive volcanic Table Land plateau and colonial cottages."
      }
    ],

    amenities: [
      "Private Swimming Pool", "Lush Gardens", "2 Celebration Areas", "Private Parking", 
      "24/7 Dedicated Chef", "Housekeeping Team", "Bathtub Rooms", "Indoor Games", "Free Wi-Fi", "Bonfire"
    ],
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85"
    ],
    iconType: "villa",
    route: "/destinations/mahabaleshwar-villa-6bhk",
    isPrimaryResort: false,
    contactPhone: "+91 94206 33577"
  },
  {
    id: "lingmala-villa-4bhk",
    slug: "lingmala-villa-4bhk",
    number: 3,
    propertyCode: "PROPERTY 3",
    name: "Reveridge Stays, Lingmala (4 BHK)",
    shortName: "Lingmala Villa",
    brandName: "Reveridge Stays",
    subtitle: "Private Boutique Villa — Entire Property Rental",
    location: "Lingmala, Mahabaleshwar, Satara District, Maharashtra",
    region: "Lingmala, Mahabaleshwar, Satara District, Maharashtra",
    category: "Private Boutique Villa",
    type: "Private Boutique Villa — Entire Property Rental",
    starEquivalent: "5 Star Private Boutique Villa",
    size: "4 BHK (4 bedrooms)",
    totalRooms: "4 BHK (4 bedrooms)",
    capacity: "Up to 8 guests (2 per bedroom)",
    rateText: "₹16,000 per night (entire villa — all 4 bedrooms)",
    includes: "24/7 dedicated chef, dedicated housekeeping, private parking",
    minimumStay: "2 nights recommended",
    view: "Valley and sunset views",
    chef: "24/7 dedicated personal chef — all meals cooked on request",
    housekeeping: "Dedicated team throughout stay",
    pool: "No swimming pool — garden area instead",
    roomCountTotal: 4,
    categoriesCount: 1,
    altitude: "Approximately 1,290 metres above sea level",
    distances: {
      pune: "120 km — approximately 2.5 hours by road",
      mumbai: "260 km — approximately 5 hours by road",
      nearestAirport: "Pune International Airport — 130 km"
    },
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    parking: "Free private parking on premises",
    lift: "Ground level accessibility & private villa staircase",
    bhk: "4 BHK",
    badge: "Entire Villa Rental",
    startingPrice: 16000,
    currency: "₹",
    rating: 4.8,
    reviewCount: 68,
    address: "Near Lingmala Waterfall, Lingmala, Mahabaleshwar 412806, Satara District, Maharashtra",
    tagline: "Intimate private 4-bedroom boutique villa with valley & sunset views, 24/7 personal chef & lush garden spaces",
    
    // Verbatim Property Description
    description: "A private 4-bedroom boutique villa set in the serene Lingmala region of Mahabaleshwar — away from the tourist crowds, surrounded by forests and farmlands, with sweeping valley and sunset views. Quieter and more intimate than the 6 BHK villa, with the same premium service standard including a 24/7 dedicated chef and housekeeping team.\n\nFour spacious bedrooms — selected rooms with bathtubs — a lush garden area, two celebration spaces, and private parking. Ideal for families, couples travelling together, and small groups who value genuine privacy and connection with nature.",
    
    highlights: [
      "Entire 4 BHK Private Boutique Villa (All 4 Bedrooms)",
      "Up to 8 Guests (2 per bedroom)",
      "24/7 Dedicated Personal Chef (All meals cooked to preference)",
      "Dedicated Housekeeping Team Throughout Stay",
      "Lush Garden Area (No swimming pool — garden area instead)",
      "Two Dedicated Celebration / Event Areas",
      "Selected Rooms with Private Bathtubs",
      "Sweeping Valley and Sunset Mountain Panoramas"
    ],

    pricingNote: "Rate: ₹16,000 per night (entire villa — all 4 bedrooms). Includes 24/7 dedicated chef, dedicated housekeeping, private parking. Minimum stay: 2 nights recommended. Taxes applicable.",

    roomCategories: [
      {
        id: "entire-4bhk-villa",
        name: "Entire 4 BHK Private Boutique Villa",
        roomCount: 4,
        view: "Valley and sunset views",
        viewShort: "Valley & Sunset Views",
        balcony: true,
        pricing: {
          roomOnly: 16000,
          withBreakfast: 16000,
          bLd: 16000,
          allMeals: 16000
        },
        features: [
          "All 4 Bedrooms Included",
          "Capacity up to 8 Guests (2 per bedroom)",
          "24/7 Dedicated Personal Chef",
          "Dedicated Housekeeping Team",
          "Lush Garden Area",
          "Two Dedicated Celebration Areas",
          "Selected Rooms with Private Bathtub",
          "Private Parking on Premises"
        ],
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80"
      }
    ],

    // Verbatim Facilities Complete List
    facilitiesList: [
      "Lush garden area",
      "Two dedicated celebration / event areas",
      "Private parking",
      "24/7 dedicated personal chef — all meals cooked to preference",
      "Dedicated housekeeping team throughout stay",
      "Selected rooms with private bathtub",
      "Indoor games",
      "Valley and sunset views",
      "Sightseeing with private transport — arranged in-house",
      "Bonfire on request",
      "Free WiFi",
      "Honeymoon and celebration setup on request",
      "No swimming pool at this property — garden area instead"
    ],

    viewDetails: [
      {
        type: "Valley & Sunset Views",
        description: "Sweeping views of the tranquil Lingmala valley and evening sunsets from private balconies"
      },
      {
        type: "Lush Garden Area",
        description: "Peaceful manicured green lawn with two dedicated celebration spaces, away from crowds"
      }
    ],

    // Verbatim Packages Offered (4 packages)
    packages: [
      {
        id: "honeymoon-package",
        name: "Honeymoon Package",
        badge: "Romantic Escape",
        tagline: "Romantic secluded hideaway with garden candlelight dining and private bathtub room",
        inclusions: "Villa, romantic décor, garden candlelight dinner, bathtub room, sightseeing"
      },
      {
        id: "family-retreat-package",
        name: "Family Retreat Package",
        badge: "Family Bonding",
        tagline: "Spacious private retreat with home-style customized meals and lawn games",
        inclusions: "Villa, customised meals, indoor games, garden, sightseeing"
      },
      {
        id: "small-group-getaway",
        name: "Small Group Getaway",
        badge: "Groups & Friends",
        tagline: "Exclusive takeover of the full 4 BHK villa for up to 8 guests with bonfire and celebration areas",
        inclusions: "Full villa for up to 8, personalised meals, celebration area, bonfire, sightseeing"
      },
      {
        id: "celebration-package",
        name: "Celebration Package",
        badge: "Private Events",
        tagline: "Ideal setting for intimate birthdays, anniversaries, and milestones in nature",
        inclusions: "Villa, decoration setup, customised menu, private sightseeing"
      }
    ],

    // Verbatim Experiences
    experiences: [
      {
        title: "24/7 Personal Chef Dining",
        subtitle: "Personalised Gourmet Feasts",
        description: "Every meal freshly prepared to your personal taste and family preference by your private dedicated chef."
      },
      {
        title: "Garden Celebration & Bonfire Evenings",
        subtitle: "Two Dedicated Event Areas",
        description: "Intimate garden parties, evening gatherings under starlit skies, and warm cozy bonfires."
      },
      {
        title: "In-House Guided Sightseeing",
        subtitle: "Private Transport Arranged",
        description: "Chauffeured private sightseeing tours to Mahabaleshwar viewpoints, waterfalls, and strawberry farms."
      }
    ],

    // Sightseeing — Same as Mahabaleshwar (arranged in-house with private transport)
    nearbyAttractions: [
      {
        name: "Arthur's Seat",
        distance: "~6 km",
        description: "Most famous viewpoint overlooking the deep Brahma-Arayana valley and Savitri river gorge."
      },
      {
        name: "Wilson Point",
        distance: "~4 km",
        description: "Highest point in Mahabaleshwar at 1,439m, renowned for spectacular 360-degree sunrise views."
      },
      {
        name: "Kate's Point",
        distance: "~8 km",
        description: "Picturesque cliff point with sweeping views of Dhom Dam, Krishna Valley, and Kamalgadh fort."
      },
      {
        name: "Elephant's Head Point",
        distance: "~7 km",
        description: "Famous natural rock formation resembling an elephant's head and trunk against the Western Ghats."
      },
      {
        name: "Venna Lake",
        distance: "~5 km",
        description: "Idyllic mountain lake offering paddle and row boating, horse rides, and lakeside promenade walks."
      },
      {
        name: "Mapro Garden",
        distance: "~7 km",
        description: "Iconic strawberry farm, fruit processing factory tour, cafe, and tasting of fresh strawberry cream."
      },
      {
        name: "Lingmala Waterfall",
        distance: "~4 km",
        description: "Breathtaking cascade dropping 600 ft into the forest valley (monsoon & post-monsoon seasonal peak)."
      },
      {
        name: "Panchgani",
        distance: "~20 km",
        description: "Neighbouring hill town famous for the expansive volcanic Table Land plateau and colonial cottages."
      }
    ],

    amenities: [
      "Lush Garden Area", "2 Celebration Areas", "Private Parking", 
      "24/7 Dedicated Chef", "Housekeeping Team", "Bathtub Rooms", 
      "Indoor Games", "Free Wi-Fi", "Bonfire", "Sightseeing Desk"
    ],
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85"
    ],
    iconType: "villa",
    route: "/destinations/lingmala-villa-4bhk",
    isPrimaryResort: false,
    contactPhone: "+91 94206 33577"
  },
  {
    id: "matheran-cottage-3bhk",
    slug: "matheran-cottage-3bhk",
    number: 4,
    propertyCode: "PROPERTY 4",
    name: "Reveridge Stays, Matheran (3 BHK Cottage)",
    shortName: "Matheran Cottage",
    brandName: "Reveridge Stays",
    subtitle: "Private Forest Cottage — Entire Property Rental",
    location: "Matheran, Raigad District, Maharashtra",
    region: "Matheran, Raigad District, Maharashtra",
    category: "Private Forest Cottage",
    type: "Private Forest Cottage — Entire Property Rental",
    starEquivalent: "Boutique Forest Cottage",
    size: "3 BHK (3 bedrooms)",
    totalRooms: "3 BHK (3 bedrooms)",
    capacity: "Up to 6 guests (2 per bedroom)",
    rateText: "₹10,000 per night (entire cottage — all 3 bedrooms)",
    includes: "Dedicated housekeeping, fully equipped self-use kitchen, private parking at entry",
    minimumStay: "2 nights recommended",
    chef: "No in-house chef — self-use kitchen provided",
    housekeeping: "Included throughout stay",
    pool: "No swimming pool",
    specialNote: "Matheran is a vehicle-free eco zone — guests park at entry and walk in or use horse/hand-pulled transport",
    importantInfo: "Matheran is designated as an eco-sensitive zone and is completely vehicle-free beyond the designated entry point. Guests must park their vehicles at the Matheran parking area and either walk into the property, use horses, or use hand-pulled transport. Luggage transfer can be arranged in advance. This is part of the unique Matheran experience and makes it unlike any other hill station in India.",
    idealGuestProfile: [
      "Couples seeking a quiet private forest escape",
      "Small families wanting an independent self-catered retreat",
      "Groups of friends who enjoy cooking together and nature immersion",
      "Guests looking for a budget-friendly Reveridge experience",
      "Travellers who value simplicity, privacy, and nature above resort amenities"
    ],
    roomCountTotal: 3,
    categoriesCount: 1,
    altitude: "Approximately 800 metres above sea level",
    distances: {
      pune: "120 km — approximately 2.5 hours by road",
      mumbai: "90 km — approximately 2 hours by road",
      nearestAirport: "Mumbai Chhatrapati Shivaji Maharaj Airport — 85 km"
    },
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    parking: "Private parking at Matheran entry point (vehicle-free zone)",
    lift: "Ground level single-story forest cottage layout",
    bhk: "3 BHK",
    badge: "Vehicle-Free Eco Zone",
    startingPrice: 10000,
    currency: "₹",
    rating: 4.8,
    reviewCount: 76,
    address: "Charlotte Lake Forest Trail, Matheran 410102, Raigad District, Maharashtra",
    tagline: "Private 3-bedroom forest cottage in India's only vehicle-free hill station with fully equipped self-use kitchen",
    
    // Verbatim Property Description
    description: "A private 3-bedroom cottage nestled deep in the forests of Matheran — India's only vehicle-free hill station. No roads, no noise, no vehicles — just the sound of the forest, cool mountain air, and complete stillness. This is Reveridge's most independent and intimate property.\n\nUnlike the other Reveridge properties, Matheran has no in-house chef — a fully equipped self-use kitchen is provided for guests who prefer complete autonomy over their meals. Housekeeping is included. The property is ideal for couples, small families, and groups of friends who value simplicity, privacy, and immersion in nature above resort amenities.",
    
    highlights: [
      "Entire 3 BHK Private Forest Cottage (All 3 Bedrooms)",
      "Up to 6 Guests (2 per bedroom)",
      "Fully Equipped Self-Use Kitchen for Complete Autonomy",
      "Dedicated Housekeeping Throughout Stay",
      "Located in India's Only Vehicle-Free Eco Hill Station",
      "Private Parking at Matheran Entry Point",
      "Cool Mountain Climate Year-Round & Dense Forest Peace",
      "Access to Scenic Viewpoints & Forest Horse Trails"
    ],

    pricingNote: "Rate: ₹10,000 per night (entire cottage — all 3 bedrooms). Includes dedicated housekeeping, fully equipped self-use kitchen, private parking at entry. Minimum stay: 2 nights recommended. Taxes applicable.",

    roomCategories: [
      {
        id: "entire-3bhk-cottage",
        name: "Entire 3 BHK Private Forest Cottage",
        roomCount: 3,
        view: "Deep forest and Charlotte Lake trail greenery",
        viewShort: "Dense Forest Verandah",
        balcony: true,
        pricing: {
          roomOnly: 10000,
          withBreakfast: 10000,
          bLd: 10000,
          allMeals: 10000
        },
        features: [
          "All 3 Bedrooms Included",
          "Capacity up to 6 Guests (2 per bedroom)",
          "Fully Equipped Self-Use Kitchen",
          "Dedicated Housekeeping Throughout Stay",
          "Private Parking at Matheran Entry Point",
          "Dense Forest Location & Cool Mountain Air",
          "Access to Viewpoints & Horse Trails",
          "Free WiFi Included"
        ],
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80"
      }
    ],

    // Verbatim Facilities Complete List
    facilitiesList: [
      "Fully equipped self-use kitchen",
      "Dedicated housekeeping throughout stay",
      "Private parking at Matheran entry point",
      "Dense forest location",
      "Access to Matheran viewpoints and horse trails",
      "Cool mountain climate year-round",
      "Free WiFi",
      "Self-catered stay (No chef, no swimming pool, no restaurant at this property)"
    ],

    viewDetails: [
      {
        type: "Dense Forest Canopy",
        description: "Lush green rainforest surroundings, native Sahyadri trees, and serene bird songs"
      },
      {
        type: "Colonial Verandah",
        description: "Traditional red-earth forest views with complete quiet and zero motor vehicles"
      }
    ],

    packages: [
      {
        id: "forest-escape-package",
        name: "Forest Escape Package",
        badge: "Nature & Peace",
        tagline: "Total peace and forest immersion in India's only automobile-free hill station",
        inclusions: "Full 3 BHK cottage, fully equipped kitchen, housekeeping, horse trail guidance"
      },
      {
        id: "self-catered-group-retreat",
        name: "Self-Catered Group Retreat",
        badge: "Friends & Family",
        tagline: "Enjoy cooking together, quiet evenings, and starlit skies in absolute seclusion",
        inclusions: "Entire cottage for up to 6, private kitchen use, housekeeping, luggage assistance coordination"
      }
    ],

    experiences: [
      {
        title: "Self-Catering Forest Cottage Life",
        subtitle: "Complete Privacy & Independence",
        description: "Cook your own favorite meals together in the fully equipped kitchen, surrounded by forest silence."
      },
      {
        title: "Vehicle-Free Eco Walking & Horse Trails",
        subtitle: "Untouched Mountain Air",
        description: "Explore Matheran's red-earth forest paths on foot or horseback with zero traffic and zero city horns."
      },
      {
        title: "Charlotte Lake & Viewpoint Sunsets",
        subtitle: "Natural Wonders",
        description: "Walk to peaceful freshwater lakes, natural acoustic echo points, and dramatic cliff sunsets."
      }
    ],

    // Verbatim Nearby Attractions — Matheran
    nearbyAttractions: [
      {
        name: "Echo Point",
        distance: "~1.5 km",
        description: "Famous viewpoint with natural echo effect and sweeping Sahyadri vistas."
      },
      {
        name: "Panorama Point",
        distance: "~2.5 km",
        description: "Spectacular 360-degree Sahyadri mountain and Western Ghats sunrise views."
      },
      {
        name: "Louisa Point",
        distance: "~2 km",
        description: "Dramatic cliff sunset views over the valley and ruined forts of Prabal and Vishalgadh."
      },
      {
        name: "Charlotte Lake",
        distance: "~1 km",
        description: "Peaceful freshwater lake walk surrounded by ancient rainforest and birdlife."
      },
      {
        name: "One Tree Hill Point",
        distance: "~3 km",
        description: "Scenic hilltop viewpoint with dramatic tent-shaped peaks and deep valley views."
      },
      {
        name: "Horse Trails",
        distance: "At property doorstep",
        description: "Peaceful forest trails on horseback — unique to the vehicle-free Matheran experience."
      }
    ],

    amenities: [
      "Self-Use Kitchen", "Dedicated Housekeeping", "Entry Parking", 
      "Dense Forest Location", "Free Wi-Fi", "Horse Trails", "Power Backup", "Board Games"
    ],
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=85"
    ],
    iconType: "cottage",
    route: "/destinations/matheran-cottage-3bhk",
    isPrimaryResort: false,
    contactPhone: "+91 94206 33577"
  },
  {
    id: "dapoli-resort-spa",
    slug: "dapoli-resort-spa",
    number: 5,
    propertyCode: "PROPERTY 5",
    name: "Reveridge Resort & Spa, Dapoli",
    shortName: "Dapoli Resort",
    brandName: "Reveridge Resort & Spa",
    subtitle: "Destination Resort — Elevated Sea Views & Weddings",
    location: "Dapoli, Ratnagiri District, Maharashtra — Konkan Coast",
    region: "Dapoli, Ratnagiri District, Maharashtra — Konkan Coast",
    category: "Destination Resort",
    type: "Destination Resort",
    starEquivalent: "5 Star Luxury Destination Resort",
    totalRooms: "60 rooms from which 24 rooms are operational",
    size: "60 rooms (24 rooms operational)",
    roomCountTotal: 60,
    operationalRooms: 24,
    categoriesCount: 3,
    view: "Panoramic Arabian Sea and sunset views",
    bestKnownFor: "Destination weddings, sea views, corporate retreats",
    eventCapacity: "Up to 120 guests for full resort events",
    altitude: "Elevated coastal mountain above the Arabian Sea",
    distances: {
      pune: "180 km — approximately 3.5 hours by road",
      mumbai: "220 km — approximately 4 hours by road",
      nearestAirport: "Mumbai International Airport — 215 km (Pune Airport ~180 km)"
    },
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    parking: "Free private parking on premises",
    lift: "Yes — available throughout main resort wings",
    bhk: null,
    badge: "Destination Resort & Weddings",
    startingPrice: 4200,
    currency: "₹",
    rating: 4.8,
    reviewCount: 112,
    address: "Coastal Hilltop Estate, Dapoli 415712, Ratnagiri District, Maharashtra — Konkan Coast",
    tagline: "Spectacular 60-room destination resort perched on an elevated mountain above the Arabian Sea with panoramic sunset views",
    
    // Verbatim Property Description
    description: "Reveridge Resort & Spa Dapoli is our most spectacular and largest property — a 60-room destination resort perched on an elevated mountain above the Arabian Sea on the pristine Konkan coastline. Every room is positioned to maximise the panoramic sea and sunset views, and every corner of the resort is built for experiences that matter.\n\nThe resort is the premier destination wedding venue on the Konkan coast, with dedicated banquet halls, outdoor event spaces, in-house catering, and accommodation for up to 120 guests. Equally suited to corporate retreats, honeymoons, family holidays, and group getaways — this is Reveridge at its most grand.",

    highlights: [
      "60 Rooms (24 Operational) with Arabian Sea & Sunset Views",
      "Perched on an Elevated Mountain Above the Arabian Sea",
      "Premier Destination Wedding Venue (Up to 120 Guests)",
      "Dedicated Banquet Halls & Outdoor Event Spaces",
      "Outdoor Swimming Pool & Full-Service Wellness Spa",
      "Multi-Cuisine Restaurant with In-House Catering",
      "Conference Hall with Full AV Setup for Corporate Retreats",
      "In-House Sightseeing Desk — Private Transport & Tours"
    ],

    // Dedicated Showcase: Wedding and banquet venues — indoor and outdoor
    weddingVenuesInfo: {
      title: "Wedding & Banquet Venues — Indoor & Outdoor",
      badge: "Premier Konkan Coast Wedding Destination",
      tagline: "Unforgettable destination weddings & banquets perched on an elevated mountain above the Arabian Sea",
      description: "Reveridge Resort & Spa Dapoli is the premier destination wedding venue on the Konkan coast. Featuring dedicated indoor grand banquet halls, sweeping open-air clifftop sunset lawns, tailored gourmet catering, and luxury stay for up to 120 residential guests — perfectly designed for weddings, sangeet, cocktail evenings, and milestone banquets.",
      capacity: "Event Capacity: Up to 120 Guests",
      venues: [
        {
          name: "Arabian Sea Clifftop Sunset Lawn (Outdoor)",
          capacity: "Up to 120 Guests",
          type: "Open-Air Coastal Lawn",
          desc: "Expansive green lawn perched above the ocean, offering unobstructed 180° sunset panoramas for wedding pheras, grand receptions, and cocktail evenings under the stars."
        },
        {
          name: "Grand Horizon Banquet Hall (Indoor)",
          capacity: "Up to 100 Guests",
          type: "Air-Conditioned Grand Ballroom",
          desc: "Elegantly finished pillarless banquet hall equipped with full audio-visual systems, ambient illumination, stage setups, and climate control."
        },
        {
          name: "Panoramic Poolside Deck & Sundowner Patio",
          capacity: "Up to 80 Guests",
          type: "Poolside Open Deck",
          desc: "Chic poolside celebration space ideal for vibrant haldi, mehendi ceremonies, pool parties, and evening sundowners."
        },
        {
          name: "Conference & VIP Executive Suite",
          capacity: "10 to 50 Guests",
          type: "Corporate MICE & Bridal Lounge",
          desc: "Full AV-enabled meeting hall perfect for corporate strategy retreats, family gathering rooms, and private VIP bride/groom suites."
        }
      ],
      features: [
        { title: "Complete Resort Buyout", desc: "Option for private full or partial resort buyout with zero outside guests" },
        { title: "Dedicated Event Coordination", desc: "Experienced on-ground wedding planning, decorator assistance & stage setup" },
        { title: "Customised In-House Catering", desc: "Multi-cuisine regional Konkani, authentic Indian, Continental & live counters" },
        { title: "Bridal Suite & Wellness Spa", desc: "Pre-wedding wellness, bridal rejuvenation massages, sauna, and grooming rooms" },
        { title: "Full Audio-Visual & DJ Setup", desc: "High-grade sound systems, ambient evening illumination, and dance floor space" },
        { title: "Free Private Parking", desc: "Spacious private parking on premises with coordinated guest arrival assistance" }
      ],
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80"
      ]
    },

    pricingNote: "All prices per room per night. Taxes applicable. Sea and sunset view rooms have direct panoramic Arabian Sea vistas.",

    roomCategories: [
      {
        id: "deluxe-sea-view-room",
        name: "Deluxe Sea View Room",
        roomCount: 12,
        view: "Panoramic Arabian Sea and sunset views",
        viewShort: "Panoramic Sea & Sunset",
        balcony: true,
        pricing: {
          roomOnly: 4200,
          withBreakfast: 4600,
          bLd: 5500,
          allMeals: 6500
        },
        features: [
          "Panoramic Arabian Sea View",
          "Private Sunset Balcony",
          "King Bed",
          "Modern Luxury Ensuite",
          "Free High-Speed WiFi"
        ],
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "premier-sunset-suite",
        name: "Premier Sunset Suite",
        roomCount: 8,
        view: "Expansive 180° Arabian Sea and sunset horizon",
        viewShort: "180° Sunset Horizon",
        balcony: true,
        pricing: {
          roomOnly: 5800,
          withBreakfast: 6200,
          bLd: 7200,
          allMeals: 8200
        },
        features: [
          "Wrap-Around Sunset Balcony",
          "Spacious Living Lounge",
          "King Master Bed & Daybed",
          "Luxury Sea-View Bath",
          "In-Room Dining Service"
        ],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "grand-ocean-family-suite",
        name: "Grand Ocean Family Suite",
        roomCount: 4,
        view: "Elevated ocean panorama and garden greens",
        viewShort: "Ocean & Garden Greens",
        balcony: true,
        pricing: {
          roomOnly: 7500,
          withBreakfast: 8000,
          bLd: 9200,
          allMeals: 10400
        },
        features: [
          "Two Interconnected Bedrooms",
          "Accommodates up to 5 Guests",
          "Two Private Sea Balconies",
          "Ideal for Families & Groups",
          "Double Vanity Luxury Bath"
        ],
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80"
      }
    ],

    // Verbatim Facilities Complete List
    facilitiesList: [
      "60 rooms with panoramic Arabian Sea and sunset views",
      "Outdoor swimming pool",
      "Full-service wellness spa — massage, treatments, therapies",
      "Multi-cuisine restaurant",
      "Conference hall — full AV setup",
      "Wedding and banquet venues — indoor and outdoor",
      "Event spaces for up to 120 guests",
      "Indoor and outdoor games",
      "Free private parking",
      "24-hour front desk",
      "Room service",
      "Daily housekeeping",
      "Free WiFi throughout",
      "In-house sightseeing desk — private transport and guided tours",
      "Honeymoon packages",
      "Corporate retreat packages",
      "Destination wedding coordination"
    ],

    viewDetails: [
      {
        type: "Panoramic Arabian Sea",
        description: "Elevated mountain views overlooking the infinite horizon of the Arabian Sea and Konkan coastline"
      },
      {
        type: "Sunset Horizon",
        description: "Breathtaking unobstructed evening sunsets directly into the sea from private room balconies"
      }
    ],

    // Verbatim Packages Offered
    packages: [
      {
        id: "destination-wedding-package",
        name: "Destination Wedding Package",
        badge: "Weddings & Buyouts",
        tagline: "Premier Konkan coast wedding destination with ocean vistas and dedicated events coordination",
        inclusions: "Full or partial resort buyout, venue, catering, décor, events team"
      },
      {
        id: "honeymoon-package",
        name: "Honeymoon Package",
        badge: "Romantic Escape",
        tagline: "Intimate coastal romance with couples spa, candlelight dining, and sunset sea views",
        inclusions: "Sea view room, romantic décor, candlelight dinner, couples spa, breakfast"
      },
      {
        id: "corporate-retreat-package",
        name: "Corporate Retreat Package",
        badge: "Corporate & MICE",
        tagline: "Inspiring executive strategy sessions with full AV setup and coastal wellness",
        inclusions: "Conference hall, group accommodation, group dining, spa, outdoor activities"
      },
      {
        id: "family-holiday-package",
        name: "Family Holiday Package",
        badge: "Family Getaway",
        tagline: "Memorable ocean holiday for families with swimming pool, indoor/outdoor games, and sightseeing",
        inclusions: "Accommodation, breakfast, pool, indoor and outdoor games, sightseeing"
      }
    ],

    experiences: [
      {
        title: "Sunset Ocean Deck & Pool",
        subtitle: "Panoramic Coastal Relaxation",
        description: "Soak in the elevated swimming pool while watching dramatic sunsets melt into the Arabian Sea."
      },
      {
        title: "Ayurvedic & Wellness Spa Therapies",
        subtitle: "Rejuvenating Coastal Spa",
        description: "Holistic treatments, deep tissue massages, and therapeutic steam to revitalize mind and body."
      },
      {
        title: "Konkan Heritage & Fort Sightseeing",
        subtitle: "Guided In-House Tours",
        description: "Private chauffeured tours to Suvarnadurg Sea Fort, secluded beaches, and historic rock caves."
      }
    ],

    // Verbatim Nearby Attractions — Dapoli
    nearbyAttractions: [
      {
        name: "Harnai Beach",
        distance: "~7 km",
        description: "Pristine beach with traditional fishing harbour"
      },
      {
        name: "Murud Beach",
        distance: "~4 km",
        description: "Secluded Konkan beach"
      },
      {
        name: "Anjarle Beach",
        distance: "~12 km",
        description: "One of Konkan's most scenic beaches"
      },
      {
        name: "Suvarnadurg Fort",
        distance: "~8 km",
        description: "17th century sea fort"
      },
      {
        name: "Keshavraj Temple",
        distance: "~6 km",
        description: "Ancient coastal temple"
      },
      {
        name: "Panhalekaji Caves",
        distance: "~28 km",
        description: "Ancient Buddhist cave complex"
      }
    ],

    amenities: [
      "Arabian Sea View", "Swimming Pool", "Wellness Spa", "Multi-Cuisine Restaurant", 
      "Conference Hall", "Wedding Venues", "Event Space for 120", "Free Parking", "Free Wi-Fi"
    ],
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85"
    ],
    iconType: "beach",
    route: "/destinations/dapoli-resort-spa",
    isPrimaryResort: false,
    contactPhone: "+91 94206 33577"
  }
];

export const destinationsSummary = {
  title: "OUR DESTINATIONS",
  badgeText: "5 locations",
  count: 5,
  brand: "REVERIDGE HOSPITALITY",
  tagline: "Explore our collection of boutique resorts, luxury villas, and heritage cottages across Maharashtra."
};

export const brandDetails = {
  name: "REVERIDGE",
  tagline: "Elevation in Every Sense",
  natureQuote: "Nature is the amenity. Stillness is the luxury.",
  whatIs: {
    title: "WHAT REVERIDGE IS",
    paragraph1: "Reveridge is a curated collection of boutique nature escapes across Maharashtra — spanning mountains, forests, and coastlines. Five properties across four distinct destinations, each chosen for its location, its character, and its ability to deliver a genuine elevated escape to every guest.",
    paragraph2: "Reveridge is not a hotel chain. It is boutique by design, personal by nature, and five-star in feeling without the formality of a traditional luxury brand. Nature is the amenity. Stillness is the luxury. Every guest leaves not just satisfied but quietly planning their return."
  },
  nameOrigin: {
    title: "BRAND NAME ORIGIN",
    prefix: "Reve",
    prefixMeaning: "Growth",
    suffix: "Ridge",
    suffixMeaning: "Mountain",
    description: "Reve — growth. Ridge — mountain. Together they represent what Reveridge stands for: elevation in every sense. A higher standard of experience, a deeper connection with the surroundings, and a stay that stays with you."
  }
};

/**
 * Helper to fetch a property by ID or slug
 */
export function getPropertyById(idOrSlug) {
  if (!idOrSlug) return null;
  const normalized = idOrSlug.toLowerCase().trim();
  return destinations.find(
    p => p.id.toLowerCase() === normalized || 
         p.slug.toLowerCase() === normalized ||
         p.route.includes(normalized)
  ) || null;
}
