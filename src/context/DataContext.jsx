import React, { createContext, useContext, useState, useEffect } from 'react';
import { rooms as initialRooms } from '../data/rooms';
import { siteConfig as initialSiteConfig } from '../data/siteConfig';
import { galleryItems as initialGalleryItems, galleryCategories } from '../data/gallery';

const DataContext = createContext(null);

const STORAGE_KEYS = {
  ROOMS: 'cloudgreen_rooms_v1',
  SITE_CONFIG: 'cloudgreen_site_config_v1',
  GALLERY: 'cloudgreen_gallery_v1',
};

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

  // Reset all overrides back to code defaults
  const resetToDefaults = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.ROOMS);
      localStorage.removeItem(STORAGE_KEYS.SITE_CONFIG);
      localStorage.removeItem(STORAGE_KEYS.GALLERY);
    } catch (e) {
      console.warn('Failed to clear localStorage keys', e);
    }
    setRooms(initialRooms);
    setSiteConfig(initialSiteConfig);
    setGallery(initialGalleryItems);
  };

  // Export & Import
  const exportData = () => {
    const backup = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      rooms,
      siteConfig,
      gallery
    };
    return JSON.stringify(backup, null, 2);
  };

  const importData = (jsonData) => {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      if (data.rooms && Array.isArray(data.rooms)) setRooms(data.rooms);
      if (data.siteConfig && typeof data.siteConfig === 'object') setSiteConfig(data.siteConfig);
      if (data.gallery && Array.isArray(data.gallery)) setGallery(data.gallery);
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
