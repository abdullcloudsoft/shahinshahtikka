import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Chatbot } from './components/Chatbot';
import { OrderModal } from './components/OrderModal';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOpenOrderModal = () => {
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  const handleViewMenuClick = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#241F1A] overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar onOrderClick={handleOpenOrderModal} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section: Single HD BBQ Image, NO sheet / NO card over hero */}
        <Hero
          onOrderClick={handleOpenOrderModal}
          onViewMenuClick={handleViewMenuClick}
        />

        {/* Menu Section: Clean, compact, professional, NO fake dishes or invented prices */}
        <MenuSection onOrderClick={handleOpenOrderModal} />

        {/* About Section: Short, professional Pakistani BBQ description */}
        <AboutSection />

        {/* Gallery Section: 5 distinct BBQ & atmosphere visuals with modal preview */}
        <GallerySection />

        {/* Location & Contact Section: Stadium Food Street Shamsabad, Maps, Socials */}
        <ContactLocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Shortcuts (Call & WhatsApp) */}
      <FloatingActions />

      {/* Lightweight Chatbot for Menu, Location, Contact, Hours & Ordering */}
      <Chatbot />

      {/* Order & Contact Dialog Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
      />
    </div>
  );
}
