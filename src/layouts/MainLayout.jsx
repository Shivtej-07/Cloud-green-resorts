import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import FloatingButtons from '../components/common/FloatingButtons';
import ScrollToTop from '../components/common/ScrollToTop';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-200">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <FloatingButtons />
      <Footer />
    </div>
  );
}
