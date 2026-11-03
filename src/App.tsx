/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { Process } from './components/Process.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { ProjectInquiry } from './components/ProjectInquiry.tsx';
import { Footer } from './components/Footer.tsx';
import { ClientPortalModal } from './components/ClientPortalModal.tsx';
import { WebsiteType } from './types.ts';

export default function App() {
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<WebsiteType>('Business Website');

  const handleOpenClientPortal = () => {
    setIsClientPortalOpen(true);
  };

  const handleScrollToInquiry = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (service: WebsiteType) => {
    setSelectedService(service);
    handleScrollToInquiry();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar
        onOpenClientPortal={handleOpenClientPortal}
        onOpenInquiry={handleScrollToInquiry}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Blue dominant) */}
        <Hero
          onExploreServices={handleScrollToServices}
          onViewWork={handleScrollToPortfolio}
        />

        {/* 2. About Section (White dominant) */}
        <About />

        {/* 3. Services Section (Blue dominant) */}
        <Services
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* 4. Selected Works (White dominant) */}
        <Portfolio />

        {/* 5. Our Blueprint: 5-Step Process (White / Off-White dominant) */}
        <Process />

        {/* 6. Testimonials (Blue dominant) */}
        <Testimonials />

        {/* 7. Project Inquiry Form (White dominant) */}
        <ProjectInquiry
          initialServiceType={selectedService}
        />
      </main>

      {/* Footer (Deep Blue dominant) */}
      <Footer
        onSelectService={handleSelectServiceForInquiry}
        onOpenClientPortal={handleOpenClientPortal}
        onOpenInquiry={handleScrollToInquiry}
      />

      {/* Interactive Client Portal Modal */}
      <ClientPortalModal
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
      />
    </div>
  );
}
