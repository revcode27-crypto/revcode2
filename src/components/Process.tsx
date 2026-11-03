import React, { useState } from 'react';
import {
  Search,
  PenTool,
  Code2,
  CheckCheck,
  Rocket,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { BlueprintStep } from '../types.ts';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: (BlueprintStep & { icon: React.ElementType; time: string })[] = [
    {
      number: '01',
      title: 'Discovery and Strategy',
      time: 'Phase 1',
      icon: Search,
      summary: 'Understanding what your business needs before writing a single line of code.',
      details:
        'We begin by asking straightforward questions about your company goals, your ideal customers, and what your competitors are doing. We outline the exact page structure, content requirements, and technical approach so there are never surprises down the road.',
      deliverables: [
        'Clear project scope and sitemap specification',
        'Defined target audience and conversion pathways',
        'Agreed technical roadmap and delivery milestones',
      ],
    },
    {
      number: '02',
      title: 'UX/UI Architecture',
      time: 'Phase 2',
      icon: PenTool,
      summary: 'Crafting layouts that feel natural, easy to read, and effortless to navigate.',
      details:
        'Before building the live code, we design interactive wireframes and visual prototypes. We balance your brand identity with proven usability principles, testing how the site feels on mobile phones and desktop screens alike.',
      deliverables: [
        'Interactive Figma interface prototypes',
        'Custom typographic system and curated color palette',
        'Mobile and desktop responsive view designs',
      ],
    },
    {
      number: '03',
      title: 'Precision Coding',
      time: 'Phase 3',
      icon: Code2,
      summary: 'Writing clean, modular code with modern web standards and zero template bloat.',
      details:
        'We build your website using modern React, TypeScript, and high-efficiency CSS. We do not use clunky drag-and-drop page builders that slow down browsers. Every component is handwritten for optimal speed, security, and long-term maintainability.',
      deliverables: [
        'Production grade TypeScript and React codebase',
        'Modular, accessible component library',
        'Search engine structured data and OpenGraph cards',
      ],
    },
    {
      number: '04',
      title: 'Quality Assurance and Performance',
      time: 'Phase 4',
      icon: CheckCheck,
      summary: 'Rigorous cross-browser testing, accessibility checks, and speed audits.',
      details:
        'We thoroughly test your website on real iPhones, Android smartphones, tablets, laptops, and wide monitors. We run performance audits to ensure your pages score in the green on Google Core Web Vitals, with zero broken links or awkward layouts.',
      deliverables: [
        'Cross-browser verification on Safari, Chrome, Edge, and Firefox',
        'Mobile responsive audits on physical devices',
        'Core Web Vitals performance optimization',
      ],
    },
    {
      number: '05',
      title: 'Handover and Delivery',
      time: 'Phase 5',
      icon: Rocket,
      summary: 'Seamless live launch, domain connection, and direct code ownership.',
      details:
        'We guide you through the launch process, configure high-speed hosting and security certificates, and transfer 100% of the repository and assets to your team. We also provide clear documentation so you know how everything works.',
      deliverables: [
        'Production deployment on high-speed global CDN',
        'Full repository ownership and asset handover',
        '30 days of complimentary post launch monitoring',
      ],
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#F8FAFC] text-slate-900 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-3">
            <span>Our Blueprint</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1746A2] tracking-tight mb-6">
            A Clear, Predictable Path from Idea to Launch.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Building a website should never feel like a guessing game. We follow a proven five-step method designed to keep you informed, maintain momentum, and deliver high quality on schedule.
          </p>
        </div>

        {/* 5-Step Process Timeline / Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Step List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#2563EB] shadow-md ring-2 ring-blue-100'
                      : 'bg-white border-[#E5E7EB] hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-[#1746A2] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      Step {step.number}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {step.time}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold mb-1 ${
                      isSelected ? 'text-[#1746A2]' : 'text-slate-800'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Blueprint Stage Canvas */}
          <div className="lg:col-span-7 sticky top-28">
            {steps[activeStep] && (
              <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-10 shadow-sm">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E5E7EB]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                      Stage {steps[activeStep].number} Specification
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1746A2] mt-1">
                      {steps[activeStep].title}
                    </h3>
                  </div>

                  <div className="p-3.5 bg-[#EFF6FF] border border-[#DBEAFE] rounded-2xl text-[#2563EB]">
                    {React.createElement(steps[activeStep].icon, { className: 'w-6 h-6' })}
                  </div>
                </div>

                <p className="text-base text-slate-700 leading-relaxed mb-8">
                  {steps[activeStep].details}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    Deliverables You Receive in Stage {steps[activeStep].number}
                  </h4>
                  <div className="space-y-3">
                    {steps[activeStep].deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 p-3.5 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] text-sm text-slate-800"
                      >
                        <ChevronRight className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="pt-6 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeStep
                            ? 'w-6 bg-[#2563EB]'
                            : i < activeStep
                            ? 'w-3 bg-[#1746A2]'
                            : 'w-3 bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveStep((prev) => (prev + 1 < steps.length ? prev + 1 : 0))
                    }
                    className="inline-flex items-center gap-1 font-semibold text-[#1746A2] hover:text-[#2563EB] cursor-pointer"
                  >
                    <span>{activeStep < steps.length - 1 ? 'Next Step' : 'Back to Start'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
