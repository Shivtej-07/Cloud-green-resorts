import React, { createContext, useContext, useState, useEffect } from 'react';
import { rooms as initialRooms } from '../data/rooms';
import { siteConfig as initialSiteConfig } from '../data/siteConfig';
import { galleryItems as initialGalleryItems, galleryCategories } from '../data/gallery';
import { destinations as initialDestinations } from '../data/destinations';

const DataContext = createContext(null);

const STORAGE_KEYS = {
  ROOMS: 'cloudgreen_rooms_v1',
  SITE_CONFIG: 'cloudgreen_site_config_v1',
  GALLERY: 'cloudgreen_gallery_v1',
  PROPERTIES: 'cloudgreen_properties_v1',
  OFFERS: 'cloudgreen_offers_v1',
};

export const defaultOffers = [
  {
    id: 'offer-direct10',
    code: 'DIRECT10',
    title: 'Direct Reservation Discount',
    description: 'Get an instant 10% discount on any booking made directly with Reveridge Hospitality',
    discountType: 'percentage', // 'percentage' | 'flat'
    discountValue: 10,
    applicableProperty: 'all',
    validTill: '2026-12-31',
    isActive: true,
    badge: 'Popular'
  },
  {
    id: 'offer-extended25',
    code: 'LONGSTAY25',
    title: 'Extended Stay Offer (3+ Nights)',
    description: 'Book 3 or more nights at Flagship Resort Mahabaleshwar and receive 25% discount plus room upgrade',
    discountType: 'percentage',
    discountValue: 25,
    applicableProperty: 'mahabaleshwar-resort',
    validTill: '2026-11-30',
    isActive: true,
    badge: 'Flagship Special'
  },
  {
    id: 'offer-villa2000',
    code: 'VILLA2000',
    title: 'Private Villa Flat Discount',
    description: 'Flat ₹2,000 per night discount on complete 6 BHK or 4 BHK private villa takeover',
    discountType: 'flat',
    discountValue: 2000,
    applicableProperty: 'mahabaleshwar-villa-6bhk',
    validTill: '2026-12-15',
    isActive: true,
    badge: 'Villa Exclusive'
  },
  {
    id: 'offer-dapoli15',
    code: 'SUNSET15',
    title: 'Dapoli Arabian Sea Sunset Offer',
    description: '15% discount on all Deluxe Sea View Rooms & Suites at our Dapoli beach resort',
    discountType: 'percentage',
    discountValue: 15,
    applicableProperty: 'dapoli-resort-spa',
    validTill: '2026-12-31',
    isActive: true,
    badge: 'Coastal Getaway'
  }
];

export function DataProvider({ children }) {
  const [rooms, setRooms] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ROOMS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse saved rooms from localStorage', e);
    }
    return initialRooms;
  });

  const [siteConfig, setSiteConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SITE_CONFIG);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...initialSiteConfig, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to parse saved siteConfig from localStorage', e);
    }
    return initialSiteConfig;
  });

  const [gallery, setGallery] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse saved gallery from localStorage', e);
    }
    return initialGalleryItems;
  });

  const [properties, setProperties] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROPERTIES);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse saved properties from localStorage', e);
    }
    return initialDestinations;
  });

  const [offers, setOffers] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.OFFERS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse saved offers from localStorage', e);
    }
    return defaultOffers;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ROOMS, JSON.stringify(rooms));
    } catch (e) {
      console.error('Failed to save rooms to localStorage', e);
    }
  }, [rooms]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SITE_CONFIG, JSON.stringify(siteConfig));
    } catch (e) {
      console.error('Failed to save siteConfig to localStorage', e);
    }
  }, [siteConfig]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
    } catch (e) {
      console.error('Failed to save gallery to localStorage', e);
    }
  }, [gallery]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROPERTIES, JSON.stringify(properties));
    } catch (e) {
      console.error('Failed to save properties to localStorage', e);
    }
  }, [properties]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(offers));
    } catch (e) {
      console.error('Failed to save offers to localStorage', e);
    }
  }, [offers]);

  // Room Management
  const updateRoom = (roomId, updatedFields) => {
    setRooms(prev => prev.map(room => {
      if (room.id === roomId || room.slug === roomId) {
        return { ...room, ...updatedFields };
      }
      return room;
    }));
  };

  const addRoom = (newRoom) => {
    const id = newRoom.id || newRoom.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const slug = newRoom.slug || id;
    const roomWithId = {
      ...newRoom,
      id,
      slug,
      rating: newRoom.rating || 4.5,
      reviewCount: newRoom.reviewCount || 0,
      images: newRoom.images && newRoom.images.length > 0 
        ? newRoom.images 
        : ['https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'],
      amenities: newRoom.amenities || [],
      highlights: newRoom.highlights || [],
    };
    setRooms(prev => [...prev, roomWithId]);
    return roomWithId;
  };

  const deleteRoom = (roomId) => {
    setRooms(prev => prev.filter(room => room.id !== roomId && room.slug !== roomId));
  };

  // Site Configuration Management
  const updateSiteConfig = (updatedFields) => {
    setSiteConfig(prev => ({
      ...prev,
      ...updatedFields,
      address: {
        ...prev.address,
        ...(updatedFields.address || {})
      },
      contact: {
        ...prev.contact,
        ...(updatedFields.contact || {})
      },
      socials: {
        ...prev.socials,
        ...(updatedFields.socials || {})
      },
      media: {
        ...prev.media,
        ...(updatedFields.media || {})
      }
    }));
  };

  // Gallery Management
  const updateGallery = (items) => {
    setGallery(items);
  };

  const addGalleryItem = (newItem) => {
    const itemWithId = {
      id: Date.now(),
      aspect: newItem.aspect || 'wide',
      category: newItem.category || 'Rooms',
      title: newItem.title || 'Resort Photo',
      caption: newItem.caption || '',
      image: newItem.image,
      ...newItem
    };
    setGallery(prev => [itemWithId, ...prev]);
    return itemWithId;
  };

  const updateGalleryItem = (id, updatedFields) => {
    setGallery(prev => prev.map(item => item.id === id ? { ...item, ...updatedFields } : item));
  };

  const deleteGalleryItem = (id) => {
    setGallery(prev => prev.filter(item => item.id !== id));
  };

  // Property Management
  const updateProperty = (propertyId, updatedFields) => {
    setProperties(prev => prev.map(prop => {
      if (prop.id === propertyId || prop.slug === propertyId) {
        return { ...prop, ...updatedFields };
      }
      return prop;
    }));
  };

  // Offer / Discount Management
  const addOffer = (newOffer) => {
    const offerWithId = {
      id: newOffer.id || `offer-${Date.now()}`,
      code: (newOffer.code || '').toUpperCase().trim(),
      title: newOffer.title || 'Special Discount Offer',
      description: newOffer.description || '',
      discountType: newOffer.discountType || 'percentage',
      discountValue: Number(newOffer.discountValue) || 10,
      applicableProperty: newOffer.applicableProperty || 'all',
      validTill: newOffer.validTill || '2026-12-31',
      isActive: newOffer.isActive !== false,
      badge: newOffer.badge || 'Discount Special',
      createdAt: new Date().toISOString()
    };
    setOffers(prev => [offerWithId, ...prev]);
    return offerWithId;
  };

  const updateOffer = (id, updatedFields) => {
    setOffers(prev => prev.map(offer => {
      if (offer.id === id) {
        return { 
          ...offer, 
          ...updatedFields,
          ...(updatedFields.code && { code: updatedFields.code.toUpperCase().trim() }),
          ...(updatedFields.discountValue !== undefined && { discountValue: Number(updatedFields.discountValue) })
        };
      }
      return offer;
    }));
  };

  const deleteOffer = (id) => {
    setOffers(prev => prev.filter(offer => offer.id !== id));
  };

  const toggleOfferStatus = (id) => {
    setOffers(prev => prev.map(offer => {
      if (offer.id === id) {
        return { ...offer, isActive: !offer.isActive };
      }
      return offer;
    }));
  };

  // Reset all overrides back to code defaults
  const resetToDefaults = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.ROOMS);
      localStorage.removeItem(STORAGE_KEYS.SITE_CONFIG);
      localStorage.removeItem(STORAGE_KEYS.GALLERY);
      localStorage.removeItem(STORAGE_KEYS.PROPERTIES);
      localStorage.removeItem(STORAGE_KEYS.OFFERS);
    } catch (e) {
      console.warn('Failed to clear localStorage keys', e);
    }
    setRooms(initialRooms);
    setSiteConfig(initialSiteConfig);
    setGallery(initialGalleryItems);
    setProperties(initialDestinations);
    setOffers(defaultOffers);
  };

  // Export & Import
  const exportData = () => {
    const backup = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      rooms,
      siteConfig,
      gallery,
      properties,
      offers
    };
    return JSON.stringify(backup, null, 2);
  };

  const importData = (jsonData) => {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      if (data.rooms && Array.isArray(data.rooms)) setRooms(data.rooms);
      if (data.siteConfig && typeof data.siteConfig === 'object') setSiteConfig(data.siteConfig);
      if (data.gallery && Array.isArray(data.gallery)) setGallery(data.gallery);
      if (data.properties && Array.isArray(data.properties)) setProperties(data.properties);
      if (data.offers && Array.isArray(data.offers)) setOffers(data.offers);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return (
    <DataContext.Provider
      value={{
        rooms,
        siteConfig,
        gallery,
        galleryCategories,
        properties,
        offers,
        updateProperty,
        addOffer,
        updateOffer,
        deleteOffer,
        toggleOfferStatus,
        updateRoom,
        addRoom,
        deleteRoom,
        updateSiteConfig,
        updateGallery,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
        resetToDefaults,
        exportData,
        importData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
