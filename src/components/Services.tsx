import React, { useState } from 'react';
import {
  Building2,
  Briefcase,
  Flame,
  Layers,
  ShoppingBag,
  Code2,
  ArrowRight,
  CheckCircle,
  Clock,
  Check,
} from 'lucide-react';
import { WebsiteType, ServiceItem } from '../types.ts';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceName: WebsiteType) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectServiceForInquiry,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('business');

  const services: (ServiceItem & { icon: React.ElementType; badge: string })[] = [
    {
      id: 'business',
      title: 'Business Website',
      badge: 'Core Offering',
      icon: Building2,
      subtitle: 'Establish your credibility and generate daily client inquiries',
      description:
        'A multi-page website built for service businesses, local practices, and growing companies. We create clear service pages, customer trust markers, and straightforward booking or contact flows that turn visitors into paying clients.',
      deliverables: [
        'Strategic home, services, about, and contact pages',
        'Direct inquiry forms connected to your team email or CRM',
        'Mobile optimization and local search engine readiness',
        'Fast page hosting setup with SSL security certificates',
      ],
      idealFor: 'Consultancies, law firms, dental clinics, agencies, and regional service providers',
      timeline: '2 to 4 Weeks',
    },
    {
      id: 'profile',
      title: 'Company Profile Website',
      badge: 'Corporate Authority',
      icon: Briefcase,
      subtitle: 'Present your organization to investors, partners, and top talent',
      description:
        'A comprehensive corporate site engineered for established companies and enterprises. It showcases your leadership, corporate governance, service catalog, case history, and company milestones with uncompromised polish.',
      deliverables: [
        'Multi-section corporate hierarchy and team profiles',
        'Investor relations, governance, and compliance areas',
        'Media room, press releases, and career listings integration',
        'Structured metadata for corporate entity search verification',
      ],
      idealFor: 'Enterprises, holding companies, manufacturers, financial groups, and scale-ups',
      timeline: '4 to 6 Weeks',
    },
    {
      id: 'landing',
      title: 'Landing Page',
      badge: 'Conversion Focused',
      icon: Flame,
      subtitle: 'Convert marketing traffic into leads or direct product sales',
      description:
        'A single, high-impact page engineered specifically for marketing campaigns, paid advertisements, product announcements, or event registrations. Every paragraph and button focuses on driving one clear decision.',
      deliverables: [
        'High-converting page structure tested for quick scanning',
        'Ultra-fast load times under one second for low ad bounce rates',
        'Lead capture form with instant validation and webhook routing',
        'Analytics tracking integration for Google, Meta, or LinkedIn ads',
      ],
      idealFor: 'Product launches, marketing campaigns, webinar registrations, and specialized offers',
      timeline: '1 to 2 Weeks',
    },
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      badge: 'Visual Showcase',
      icon: Layers,
      subtitle: 'Put your creative work and client outcomes front and center',
      description:
        'Tailored for architectural studios, designers, filmmakers, and specialized professionals. We give your projects the visual breathing room they deserve, paired with smooth gallery transitions and clear case narratives.',
      deliverables: [
        'High-resolution media galleries with zero lag or stutter',
        'Project case study templates highlighting process and results',
        'Client testimonial and publication credit sections',
        'Minimalist typography that lets your craftsmanship shine',
      ],
      idealFor: 'Architects, interior studios, industrial designers, photographers, and creative directors',
      timeline: '2 to 3 Weeks',
    },
    {
      id: 'ecommerce',
      title: 'E Commerce Website',
      badge: 'Direct Sales',
      icon: ShoppingBag,
      subtitle: 'A frictionless online shopping experience built for repeat orders',
      description:
        'Online storefronts designed for speed, security, and effortless purchasing. We build intuitive product catalog navigation, instant search, frictionless checkout flows, and seamless inventory synchronization.',
      deliverables: [
        'Fast-loading product catalogs with variant selectors',
        'Secure payment gateway integration with Stripe or PayPal',
        'Automated order confirmation and shipping notification emails',
        'Customer account portals and order history tracking',
      ],
      idealFor: 'Boutique brands, specialty retailers, digital products, and DTC manufacturers',
      timeline: '4 to 7 Weeks',
    },
    {
      id: 'custom',
      title: 'Custom Website Applications',
      badge: 'Advanced Logic',
      icon: Code2,
      subtitle: 'Solve specific operational challenges with bespoke web software',
      description:
        'When off-the-shelf templates cannot meet your requirements, we build custom full-stack web applications. From client portals and quote calculators to internal management dashboards, we write reliable software from scratch.',
      deliverables: [
        'Secure user authentication and role-based permissions',
        'Custom databases, real-time dashboards, and API integrations',
        'Interactive business calculators and customer workflows',
        'Clean TypeScript architecture with complete code documentation',
      ],
      idealFor: 'Founders with unique business models, B2B SaaS platforms, and internal business tools',
      timeline: '6 to 10 Weeks',
    },
  ];

  const activeService = services.find((s) => s.id === selectedServiceId) || services[0];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#1746A2] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-200 mb-3">
            <span>What We Build</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Websites Built for Purpose. Not Presets.
          </h2>

          <p className="text-lg text-blue-100 leading-relaxed">
            Every business requires a different kind of digital presence. Whether you need a focused landing page or an enterprise web application, we build each site with intentional architecture and high-performance code.
          </p>
        </div>

        {/* 6 Services Grid / Interactive Inspector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            const isSelected = service.id === selectedServiceId;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`flex flex-col justify-between p-7 rounded-2xl transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#2563EB] border-white/40 shadow-xl ring-2 ring-white/20'
                    : 'bg-white/10 border-white/15 hover:bg-white/15 hover:border-white/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl ${
                        isSelected ? 'bg-white text-[#1746A2]' : 'bg-white/10 text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-blue-200 mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-blue-100/90 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs text-blue-200 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.timeline}</span>
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectServiceForInquiry(service.title);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-200 transition-colors cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Deep-Dive Panel */}
        <div className="bg-[#0A1F4D] border border-white/20 rounded-2xl p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/15">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 mb-2">
                <span>Selected Specification</span>
                <span className="text-white/40">/</span>
                <span>{activeService.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeService.title}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="text-xs text-blue-200">
                <span className="block text-[11px] text-blue-300">Estimated Timeline</span>
                <span className="font-semibold text-white text-sm">{activeService.timeline}</span>
              </div>

              <button
                type="button"
                onClick={() => onSelectServiceForInquiry(activeService.title)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#1746A2] bg-white hover:bg-blue-50 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4 text-[#2563EB]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            <div className="lg:col-span-7">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">
                What We Deliver With Every Project
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-xs text-blue-100 bg-white/5 p-3 rounded-lg border border-white/10"
                  >
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-center">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                Ideal For
              </h4>
              <p className="text-sm text-blue-100 leading-relaxed mb-4">
                {activeService.idealFor}
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Includes 30 days of post launch support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
