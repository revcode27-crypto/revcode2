import React, { useState } from 'react';
import { Compass, Zap, LayoutGrid, Fingerprint, Check } from 'lucide-react';

export const About: React.FC = () => {
  const [activeArea, setActiveArea] = useState<number>(0);

  const pillars = [
    {
      title: 'Strategic UX/UI',
      icon: Compass,
      tagline: 'Structure designed around human attention',
      description:
        'We design websites that make sense from the very first second. Every page layout, headline position, and navigation path is crafted to guide your visitors naturally toward making a decision.',
      practicalBenefits: [
        'Clear visual paths that stop visitors from getting lost',
        'Headlines and calls to action placed where people actually look',
        'Simplified navigation that works seamlessly on every screen',
      ],
      deliverable: 'Interactive wireframes and high-fidelity interface systems',
    },
    {
      title: 'Performance First',
      icon: Zap,
      tagline: 'Sub-second load speeds without excess code',
      description:
        'Speed is not an afterthought or an add-on plugin. We write clean, modern code and compress assets so your pages load almost instantly on both mobile data and home broadband.',
      practicalBenefits: [
        'Near-instant page loading that preserves organic search rank',
        'Zero bloated plugins or unnecessary background scripts',
        'Optimized responsive images delivered in modern WebP formats',
      ],
      deliverable: 'Core Web Vitals green scores and lightweight production builds',
    },
    {
      title: 'Responsive Systems',
      icon: LayoutGrid,
      tagline: 'Thoughtful layouts built for real devices',
      description:
        'More than half of your visitors will arrive on a phone. We do not simply shrink desktop layouts. We design dedicated experiences for iPhones, Android devices, tablets, and wide monitors.',
      practicalBenefits: [
        'Thumb-friendly navigation menus and comfortable touch targets',
        'Text sizes and line lengths tuned for easy mobile reading',
        'Zero horizontal scrolling or broken elements on unusual screen sizes',
      ],
      deliverable: 'Pixel-tested cross-browser and cross-device compatibility',
    },
    {
      title: 'Digital Identity',
      icon: Fingerprint,
      tagline: 'A cohesive look that commands credibility',
      description:
        'Your website is often the very first touchpoint a potential client or partner evaluates. We translate your company values into typography, spacing, and polish that build immediate trust.',
      practicalBenefits: [
        'Curated color palettes and type hierarchy matched to your industry',
        'Custom iconography, vector assets, and authentic brand marks',
        'Reusable design guidelines so your brand stays consistent anywhere',
      ],
      deliverable: 'Comprehensive digital brand tokens and unified component libraries',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white text-slate-900 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-3">
            <span>About The Studio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1746A2] tracking-tight mb-6">
            Design Driven. Engineering Led.
          </h2>

          <p className="text-xl font-semibold text-slate-800 mb-4">
            Good Ideas Deserve Great Websites.
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We believe a great website should do more than look good. It should help people understand your business, connect with your brand, and take action. At RevCode, we combine visual taste with rigorous software standards so your web presence works as hard as you do.
          </p>
        </div>

        {/* The Four Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Pillar Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activeArea === idx;

              return (
                <button
                  key={pillar.title}
                  type="button"
                  onClick={() => setActiveArea(idx)}
                  className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#EFF6FF] border-[#2563EB] shadow-xs'
                      : 'bg-[#F8FAFC] border-[#E5E7EB] hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#2563EB] text-white'
                          : 'bg-white text-[#1746A2] border border-[#E5E7EB]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-base font-bold ${
                            isSelected ? 'text-[#1746A2]' : 'text-slate-900'
                          }`}
                        >
                          {pillar.title}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Focus Card */}
          <div className="lg:col-span-7">
            {pillars[activeArea] && (
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-7 sm:p-10 transition-all duration-300">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E5E7EB]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                      Core Capability 0{activeArea + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-[#1746A2] mt-1">
                      {pillars[activeArea].title}
                    </h3>
                  </div>
                  <div className="p-3 bg-white border border-[#E5E7EB] rounded-xl text-[#2563EB]">
                    {React.createElement(pillars[activeArea].icon, { className: 'w-6 h-6' })}
                  </div>
                </div>

                <p className="text-base text-slate-700 leading-relaxed mb-8">
                  {pillars[activeArea].description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    What This Means For Your Business
                  </h4>
                  <ul className="space-y-3">
                    {pillars[activeArea].practicalBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm text-slate-700">
                        <div className="p-1 rounded-full bg-blue-100 text-[#2563EB] shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <span className="text-slate-500">Key Deliverable</span>
                  <span className="font-semibold text-[#1746A2] bg-white px-3 py-1.5 rounded-lg border border-[#E5E7EB]">
                    {pillars[activeArea].deliverable}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
