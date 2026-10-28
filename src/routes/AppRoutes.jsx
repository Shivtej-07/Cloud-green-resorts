import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Rooms from '../pages/Rooms';
import RoomDetails from '../pages/RoomDetails';
import Spa from '../pages/Spa';
import Amenities from '../pages/Amenities';
import Gallery from '../pages/Gallery';
import Attractions from '../pages/Attractions';
import Reviews from '../pages/Reviews';
import Contact from '../pages/Contact';
import BookingEnquiry from '../pages/BookingEnquiry';
import Admin from '../pages/Admin';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Admin Control Panel */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/*" element={<Admin />} />

      {/* Public Pages */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="rooms/:id" element={<RoomDetails />} />
        <Route path="spa" element={<Spa />} />
        <Route path="amenities" element={<Amenities />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="attractions" element={<Attractions />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="booking" element={<BookingEnquiry />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
