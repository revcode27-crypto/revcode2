import React, { useState } from 'react';
import {
  ExternalLink,
  Layers,
  ArrowUpRight,
  X,
  CheckCircle2,
  Code2,
  Monitor,
  Smartphone,
  Laptop,
} from 'lucide-react';
import { ProjectShowcase, WebsiteType } from '../types.ts';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectShowcase | null>(null);
  const [modalViewMode, setModalViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const categories = [
    'All',
    'Business Website',
    'Company Profile Website',
    'Landing Page',
    'Portfolio Website',
    'E Commerce Website',
    'Custom Website Applications',
  ];

  const projects: ProjectShowcase[] = [
    {
      id: 'meridian-capital',
      name: 'Meridian Capital Partners',
      category: 'Company Profile Website',
      clientType: 'Private Wealth & Advisory Firm',
      shortDescription:
        'A comprehensive corporate web presence engineered for an institutional wealth advisory firm, featuring leadership biographies, research publications, and encrypted client contact routing.',
      overview:
        'Meridian Capital needed a high-credibility web presence to communicate their institutional heritage to family offices and enterprise founders. We engineered a responsive web platform that balances traditional financial authority with modern web performance.',
      keyFeatures: [
        'Structured corporate leadership directory with filterable partner credentials',
        'Search engine optimized research publication archive with instant search',
        'Encrypted contact routing conforming to financial communication standards',
        'Sub-second page transitions powered by modern client-side routing',
      ],
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Structured Schema'],
      metrics: { label: 'Page Load Speed', value: '0.7s Global' },
      previewType: 'corporate',
      desktopAccent: '#1746A2',
    },
    {
      id: 'kroma-artisan',
      name: 'Kroma Artisan Goods',
      category: 'E Commerce Website',
      clientType: 'Direct-to-Consumer Design Studio',
      shortDescription:
        'A minimalist direct-to-consumer online storefront with high-resolution product showcases, smooth variant picking, and a frictionless one-page checkout flow.',
      overview:
        'Kroma crafts limited-run ceramic homewares and requested an e-commerce platform that mirrors the physical serenity of their retail gallery. We eliminated unnecessary checkout friction, resulting in seamless customer purchasing on mobile and desktop.',
      keyFeatures: [
        'Streamlined single-page checkout flow connected to Stripe and Apple Pay',
        'Instant variant switching without page reload or layout shift',
        'Automated real-time inventory counter to manage limited release drops',
        'Responsive image delivery tailored to retina screens',
      ],
      techStack: ['React', 'TypeScript', 'Stripe API', 'Tailwind CSS', 'Cloudflare CDN'],
      metrics: { label: 'Checkout Completion', value: '+34% In 90 Days' },
      previewType: 'ecommerce',
      desktopAccent: '#2563EB',
    },
    {
      id: 'flowstate-automation',
      name: 'FlowState Systems',
      category: 'Landing Page',
      clientType: 'B2B Workflow Automation Platform',
      shortDescription:
        'A high-converting landing page engineered for a B2B productivity software launch, featuring an interactive workflow demo and validated lead qualification form.',
      overview:
        'FlowState needed to validate product demand and collect enterprise leads for their new pipeline automation tool. We designed and coded a focused landing experience that clearly demonstrates software mechanics in simple terms.',
      keyFeatures: [
        'Interactive before-and-after workflow simulation directly on the page',
        'Lead qualification form with automated company domain enrichment',
        'Zero layout shifts (CLS: 0.00) ensuring smooth reading on mobile',
        'Integrated conversion tracking for multi-channel marketing campaigns',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Webhook Router', 'Motion'],
      metrics: { label: 'Lead Conversion Rate', value: '18.4% Average' },
      previewType: 'landing',
      desktopAccent: '#3B82F6',
    },
    {
      id: 'zenith-health',
      name: 'Zenith Health Hub',
      category: 'Custom Website Applications',
      clientType: 'Multi-Location Wellness Practice',
      shortDescription:
        'A bespoke web application integrating patient self-scheduling, practitioner availability calendars, and direct intake questionnaire submissions.',
      overview:
        'Zenith operates four clinical locations and struggled with phone tag during appointment bookings. We built a custom web app that lets patients book visits in under two minutes with zero double-booking conflicts.',
      keyFeatures: [
        'Real-time practitioner schedule synchronization across 4 clinical sites',
        'Multi-step intake questionnaire with instant field validation',
        'Automated SMS and email appointment reminders',
        'Role-based administrative view for front desk personnel',
      ],
      techStack: ['React', 'Node.js', 'Express', 'TypeScript', 'Tailwind CSS'],
      metrics: { label: 'Admin Call Reduction', value: '-52% Calls' },
      previewType: 'webapp',
      desktopAccent: '#1746A2',
    },
    {
      id: 'apex-architecture',
      name: 'Apex Spatial Architecture',
      category: 'Portfolio Website',
      clientType: 'Contemporary Architecture & Urban Planning',
      shortDescription:
        'An editorial portfolio showcasing residential and civic architectural projects with fluid fullscreen photography, blueprints, and material case studies.',
      overview:
        'Apex needed a website that reflects their architectural philosophy: clean geometry, natural light, and structural permanence. We designed a restrained digital gallery where work is framed with clarity.',
      keyFeatures: [
        'Full-screen responsive image sliders with smooth gesture navigation',
        'Architectural blueprint overlay mode for technical inquiries',
        'Comprehensive project specification tables with tabular data',
        'Mobile-first responsive touch gallery for tablet presentations',
      ],
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      metrics: { label: 'Lighthouse Performance', value: '100 / 100' },
      previewType: 'portfolio',
      desktopAccent: '#2563EB',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-white text-slate-900 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-3">
              <span>Selected Works</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1746A2] tracking-tight mb-4">
              Real Craftsmanship. Real Results.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We take pride in building websites that do real work for our clients. Here is a curated selection of recent client projects across diverse industries.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing {filteredProjects.length} Selected Case Studies
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#1746A2] text-white shadow-xs'
                    : 'bg-[#F8FAFC] text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-[#E5E7EB]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Large Visual Showcases (No repetitive small card grid) */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Browser Frame Showcase */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-[#1746A2] rounded-2xl p-2 shadow-xl border border-slate-300">
                      {/* Browser Chrome Header */}
                      <div className="bg-[#0F2B66] px-4 py-2.5 rounded-t-xl flex items-center justify-between border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="text-[11px] font-mono text-blue-200 bg-black/20 px-3 py-1 rounded truncate max-w-[220px]">
                          {project.id}.com
                        </div>
                        <span className="text-[10px] text-emerald-400 font-semibold">Live System</span>
                      </div>

                      {/* Pure CSS/SVG Authentic Web Representation */}
                      <div className="bg-white rounded-b-xl p-6 sm:p-8 min-h-[260px] flex flex-col justify-between">
                        {project.previewType === 'corporate' && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                              <span className="font-bold text-sm text-[#1746A2] tracking-tight">
                                MERIDIAN CAPITAL
                              </span>
                              <div className="flex gap-3 text-xs text-slate-500 font-medium">
                                <span>Advisory</span>
                                <span>Partners</span>
                                <span>Insights</span>
                              </div>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                              <span className="text-[10px] uppercase font-bold text-[#2563EB] tracking-wider">
                                Private Advisory
                              </span>
                              <div className="text-lg font-bold text-[#1746A2] mt-1 mb-2">
                                Preserving and Compounding Generational Value.
                              </div>
                              <p className="text-xs text-slate-600 line-clamp-2">
                                Strategic capital structuring and risk management for founders and family offices.
                              </p>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="p-2.5 bg-blue-50 rounded-lg text-center">
                                <div className="text-xs font-bold text-[#1746A2]">$4.2B+</div>
                                <div className="text-[10px] text-slate-600">Advisory Pipeline</div>
                              </div>
                              <div className="p-2.5 bg-blue-50 rounded-lg text-center">
                                <div className="text-xs font-bold text-[#1746A2]">24+ Years</div>
                                <div className="text-[10px] text-slate-600">Institutional Track</div>
                              </div>
                              <div className="p-2.5 bg-blue-50 rounded-lg text-center">
                                <div className="text-xs font-bold text-emerald-600">Verified</div>
                                <div className="text-[10px] text-slate-600">Audit Protocol</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {project.previewType === 'ecommerce' && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                              <span className="font-serif font-bold text-sm text-slate-900 tracking-widest">
                                KROMA
                              </span>
                              <div className="flex gap-3 text-xs text-slate-600">
                                <span>Ceramics</span>
                                <span>Editions</span>
                                <span className="font-semibold text-[#2563EB]">Bag (2)</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100 flex flex-col justify-between">
                                <div className="h-16 w-full rounded-lg bg-amber-100/80 flex items-center justify-center text-amber-800 text-xs font-semibold">
                                  Terracotta Vase 04
                                </div>
                                <div className="pt-2 flex justify-between items-center">
                                  <span className="text-xs font-bold text-slate-900">$185</span>
                                  <span className="text-[10px] text-slate-500">In Stock</span>
                                </div>
                              </div>
                              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                                <div className="h-16 w-full rounded-lg bg-slate-200/80 flex items-center justify-center text-slate-700 text-xs font-semibold">
                                  Stone Glaze Vessel
                                </div>
                                <div className="pt-2 flex justify-between items-center">
                                  <span className="text-xs font-bold text-slate-900">$220</span>
                                  <span className="text-[10px] text-emerald-600">Ships Tomorrow</span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-[#EFF6FF] p-2.5 rounded-lg flex items-center justify-between text-xs text-[#1746A2]">
                              <span>Complimentary insured shipping on all studio orders</span>
                              <span className="font-bold">Apply Code</span>
                            </div>
                          </div>
                        )}

                        {project.previewType === 'landing' && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                              <span className="font-bold text-xs text-blue-600 tracking-wider">
                                FLOWSTATE.ENGINE
                              </span>
                              <span className="text-[11px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">
                                Beta 2.0
                              </span>
                            </div>
                            <div className="text-center py-3">
                              <span className="text-xs uppercase font-bold text-slate-400">Zero Configuration</span>
                              <div className="text-lg font-extrabold text-slate-900 leading-tight my-1">
                                Automate Client Onboarding in Minutes.
                              </div>
                              <div className="flex justify-center gap-2 mt-3">
                                <div className="px-3 py-1.5 bg-[#2563EB] text-white text-xs font-semibold rounded">
                                  Start 14-Day Trial
                                </div>
                                <div className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded">
                                  Watch 60s Tour
                                </div>
                              </div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-around text-xs text-slate-600">
                              <span>3,400+ Workflows Run</span>
                              <span>99.99% Uptime</span>
                              <span>SOC 2 Type II</span>
                            </div>
                          </div>
                        )}

                        {project.previewType === 'webapp' && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                              <span className="font-bold text-xs text-emerald-700">ZENITH CLINICAL</span>
                              <span className="text-xs text-slate-500 font-mono">Dr. Harrison Available</span>
                            </div>
                            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                              <div className="text-xs font-bold text-emerald-900 mb-2">
                                Direct Patient Booking Portal
                              </div>
                              <div className="grid grid-cols-3 gap-2">
                                <div className="bg-white p-2 rounded text-center border border-emerald-200">
                                  <div className="text-[10px] text-slate-500">Tue Oct 28</div>
                                  <div className="text-xs font-bold text-emerald-800">10:00 AM</div>
                                </div>
                                <div className="bg-white p-2 rounded text-center border border-emerald-200">
                                  <div className="text-[10px] text-slate-500">Tue Oct 28</div>
                                  <div className="text-xs font-bold text-emerald-800">02:30 PM</div>
                                </div>
                                <div className="bg-white p-2 rounded text-center border border-emerald-200">
                                  <div className="text-[10px] text-slate-500">Wed Oct 29</div>
                                  <div className="text-xs font-bold text-emerald-800">09:15 AM</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between text-xs text-slate-600">
                              <span>Encrypted HIPAA Compliant Storage</span>
                              <span className="text-emerald-700 font-semibold">Immediate Confirmation</span>
                            </div>
                          </div>
                        )}

                        {project.previewType === 'portfolio' && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                              <span className="font-mono text-xs tracking-widest text-slate-800 uppercase">
                                APEX / ARCHITECTURE
                              </span>
                              <span className="text-xs text-slate-400">Zurich &bull; London</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="col-span-2 h-24 bg-slate-800 rounded-lg flex items-end p-3 text-white text-xs font-medium">
                                Pavilion Residence 2026
                              </div>
                              <div className="h-24 bg-slate-200 rounded-lg flex items-end p-2 text-slate-700 text-[10px] font-semibold">
                                Timber Framing
                              </div>
                            </div>
                            <div className="flex justify-between text-[11px] text-slate-500">
                              <span>Selected for World Architecture Awards</span>
                              <span className="font-mono">Spec Sheet Available</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Text Details & Action */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB] mb-3">
                      <span>{project.category}</span>
                      <span aria-hidden="true" className="text-slate-400">&bull;</span>
                      <span className="text-slate-600">{project.clientType}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1746A2] mb-4">
                      {project.name}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Key Metric Strip */}
                    <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 mb-6 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">
                        {project.metrics.label}
                      </span>
                      <span className="text-base font-bold text-[#1746A2] tabular-nums">
                        {project.metrics.value}
                      </span>
                    </div>

                    {/* Tech Stack List */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium text-slate-700 bg-white border border-[#E5E7EB] px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Primary Action Button */}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveModalProject(project);
                        setModalViewMode('desktop');
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1746A2] hover:bg-[#2563EB] rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModalProject(null)}
          />

          {/* Modal Container */}
          <div className="relative bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto border border-[#E5E7EB]">
            {/* Header */}
            <div className="flex items-start justify-between pb-6 border-b border-[#E5E7EB] gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB] mb-2">
                  <span>{activeModalProject.category}</span>
                  <span className="text-slate-400">&bull;</span>
                  <span className="text-slate-500">{activeModalProject.clientType}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1746A2]">
                  {activeModalProject.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-8">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Project Brief and Objectives
                </h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  {activeModalProject.overview}
                </p>
              </div>

              {/* Key Features Built */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                  Key Technical Features Engineered
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalProject.keyFeatures.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-3 p-3.5 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] text-sm text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Architecture */}
              <div className="p-6 bg-[#EFF6FF] rounded-2xl border border-[#DBEAFE]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1746A2]">
                    Technical Architecture
                  </h4>
                  <span className="text-xs font-bold text-[#2563EB] bg-white px-3 py-1 rounded-md border border-[#DBEAFE]">
                    {activeModalProject.metrics.label}: {activeModalProject.metrics.value}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white text-xs font-medium text-[#1746A2] rounded-lg shadow-2xs border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Crafted by RevCode Studio &bull; Built with zero template bloat
              </span>
              <button
                type="button"
                onClick={() => {
                  setActiveModalProject(null);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1746A2] rounded-lg transition-colors cursor-pointer"
              >
                <span>Discuss Similar Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
