import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    brandSubtitle: "Boutique Nature Escapes • Maharashtra",
    tagline: "Elevation in Every Sense",
    heroDesc: "Reveridge is a curated collection of boutique nature escapes across Maharashtra — spanning mountains, forests, and coastlines across Mahabaleshwar, Lingmala, Matheran, and Dapoli.",
    bookNow: "Book Now",
    callNow: "Call Now",
    checkAvailability: "Check Availability",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    roomType: "Room Type",
    viewRooms: "View Rooms",
    enquireNow: "Enquire Now",
    details: "View Details",
    perNight: "/ night",
    freeBreakfast: "Free Breakfast",
    freeWifi: "Free Wi-Fi",
    swimmingPool: "Swimming Pool",
    petFriendly: "Pet Friendly",
    nav: {
      home: "Home",
      destinations: "Destinations",
      about: "About Us",
      rooms: "Rooms & Suites",
      spa: "Spa & Wellness",
      amenities: "Amenities",
      gallery: "Gallery",
      attractions: "Attractions",
      reviews: "Reviews",
      contact: "Contact"
    },
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    address: "Panchgani - Mahabaleshwar Rd, Metgutad, Maharashtra 412806",
    exploreRooms: "Explore Our Rooms",
    ourAmenities: "Resort Amenities & Facilities",
    spaWellness: "Ayurvedic & Luxury Spa",
    whatGuestsSay: "What Our Guests Say",
    nearbySpots: "Nearby Attractions"
  },
  hi: {
    brandSubtitle: "बुटीक नेचर एस्केप्स • महाराष्ट्र",
    tagline: "हर अनुभव में एक नई ऊंचाई",
    heroDesc: "रेवरिज महाराष्ट्र के पहाड़ों, जंगलों और समुद्र तटों पर स्थित बुटीक नेचर एस्केप्स का एक अनूठा संग्रह है।",
    bookNow: "अभी बुक करें",
    callNow: "कॉल करें",
    checkAvailability: "उपलब्धता जांचें",
    checkIn: "आगमन (Check-in)",
    checkOut: "प्रस्थान (Check-out)",
    guests: "मेहमान (Guests)",
    roomType: "कमरे का प्रकार",
    viewRooms: "कमरे देखें",
    enquireNow: "पूछताछ करें",
    details: "विवरण देखें",
    perNight: "/ प्रति रात",
    freeBreakfast: "मुफ्त नाश्ता",
    freeWifi: "मुफ्त वाई-फाई",
    swimmingPool: "स्विमिंग पूल",
    petFriendly: "पालतू जानवर अनुकूल",
    nav: {
      home: "होम",
      destinations: "डेस्टिनेशन्स",
      about: "हमारे बारे में",
      rooms: "कमरे और सुइट्स",
      spa: "स्पा और वेलनेस",
      amenities: "सुविधाएं",
      gallery: "गैलरी",
      attractions: "आसपास के स्थल",
      reviews: "समीक्षाएं",
      contact: "संपर्क"
    },
    quickLinks: "त्वरित लिंक",
    contactUs: "संपर्क करें",
    address: "पांचगणी - महाबलेश्वर रोड, मेटगुटाड, महाराष्ट्र 412806",
    exploreRooms: "हमारे कमरे देखें",
    ourAmenities: "रिसॉर्ट सुविधाएं",
    spaWellness: "आयुर्वेदिक और लक्जरी स्पा",
    whatGuestsSay: "अतिथियों के अनुभव",
    nearbySpots: "आसपास के प्रमुख आकर्षण"
  },
  mr: {
    brandSubtitle: "बुटीक नेचर एस्केप्स • महाराष्ट्र",
    tagline: "प्रत्येक अनुभवात निसर्गाची भव्यता",
    heroDesc: "रेवरिज म्हणजे महाराष्ट्रातील पर्वत, जंगले आणि समुद्रकिनाऱ्यांवरील निवडक बुटीक नेचर एस्केप्सचा सुंदर संग्रह.",
    bookNow: "आत्ताच बुक करा",
    callNow: "कॉल करा",
    checkAvailability: "खोली उपलब्धता तपासा",
    checkIn: "चेक-इन",
    checkOut: "चेक-आऊट",
    guests: "पाहुणे (Guests)",
    roomType: "खोलीचा प्रकार",
    viewRooms: "खोल्या पहा",
    enquireNow: "चौकशी करा",
    details: "तपशील पहा",
    perNight: "/ प्रति रात्र",
    freeBreakfast: "मोफत नाश्ता",
    freeWifi: "मोफत वाय-फाय",
    swimmingPool: "स्विमिंग पूल",
    petFriendly: "पाळीव प्राण्यांसाठी अनुकूल",
    nav: {
      home: "मुख्यपृष्ठ",
      destinations: "डेस्टिनेशन्स",
      about: "आमच्याबद्दल",
      rooms: "खोल्या व सुईट्स",
      spa: "स्पा आणि वेलनेस",
      amenities: "सुविधा",
      gallery: "छायाचित्रे",
      attractions: "जवळपासची पर्यटनस्थळे",
      reviews: "अभिप्राय",
      contact: "संपर्क"
    },
    quickLinks: "महत्त्वाच्या लिंक्स",
    contactUs: "संपर्क साधा",
    address: "पाचगणी - महाबळेश्वर रोड, मेटगुताड, महाराष्ट्र 412806",
    exploreRooms: "आमच्या खोल्या",
    ourAmenities: "रिसॉर्टमधील विशेष सुविधा",
    spaWellness: "आयुर्वेदिक व रिलॅक्सिंग स्पा",
    whatGuestsSay: "पाहुण्यांचे अनुभव",
    nearbySpots: "जवळपासची पर्यटन स्थळे"
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('cg_resort_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('cg_resort_lang', language);
  }, [language]);

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
