import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight, Monitor, Tablet, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreServices,
  onViewWork,
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const stats = [
    { value: '100%', label: 'Mobile and Desktop Responsive', note: 'Tested on physical devices' },
    { value: '< 1.2s', label: 'Fast Page Load Speeds', note: 'Optimized for search rankings' },
    { value: '0', label: 'Bloated Site Builders', note: 'Clean bespoke engineering' },
    { value: '1:1', label: 'Direct Founder Partnership', note: 'Clear updates without middlemen' },
  ];

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#1746A2] text-white overflow-hidden"
    >
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Subtle radial glow */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#2563EB]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#3B82F6]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span>Independent Web Development Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 text-balance">
              Building Digital Experiences That Move Businesses Forward.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed max-w-2xl mb-8">
              We help businesses turn their ideas into websites that look great, work smoothly, and make everyday things easier. Every line of code is written with speed, clarity, and your bottom line in mind.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-[#1746A2] bg-white hover:bg-blue-50 rounded-lg shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-[#2563EB]" />
              </button>

              <button
                type="button"
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-transparent hover:bg-white/10 border border-white/30 hover:border-white rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-300 shrink-0" />
                <span>Search Engine Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-300 shrink-0" />
                <span>Direct Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-300 shrink-0" />
                <span>No Monthly Platform Lock In</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Real Responsive Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Device Switcher Bar */}
            <div className="w-full flex items-center justify-between p-2 mb-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <span className="text-xs font-medium text-blue-100 pl-2">
                Live Responsive Architecture
              </span>
              <div className="flex items-center gap-1 bg-white/15 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setDeviceView('desktop')}
                  className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                    deviceView === 'desktop'
                      ? 'bg-white text-[#1746A2] font-semibold shadow-xs'
                      : 'text-white hover:text-blue-100'
                  }`}
                  aria-label="Desktop Preview"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceView('tablet')}
                  className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                    deviceView === 'tablet'
                      ? 'bg-white text-[#1746A2] font-semibold shadow-xs'
                      : 'text-white hover:text-blue-100'
                  }`}
                  aria-label="Tablet Preview"
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tablet</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceView('mobile')}
                  className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                    deviceView === 'mobile'
                      ? 'bg-white text-[#1746A2] font-semibold shadow-xs'
                      : 'text-white hover:text-blue-100'
                  }`}
                  aria-label="Mobile Preview"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>
            </div>

            {/* Interactive Browser Device Frame */}
            <div
              className={`w-full transition-all duration-300 flex justify-center ${
                deviceView === 'desktop'
                  ? 'max-w-xl'
                  : deviceView === 'tablet'
                  ? 'max-w-md'
                  : 'max-w-xs'
              }`}
            >
              <div className="w-full bg-[#0F2B66] rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                {/* Browser Top Navigation */}
                <div className="bg-[#0A1F4D] px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="bg-white/10 rounded-md px-3 py-1 text-[11px] font-mono text-blue-200 tracking-tight flex items-center gap-1.5 max-w-[200px] truncate">
                    <span className="text-emerald-400">https://</span>
                    <span>client.revcode.studio</span>
                  </div>
                  <div className="text-[10px] text-blue-300 font-medium">99.8% Speed</div>
                </div>

                {/* Simulated Real Website Viewport Content */}
                <div className="p-5 bg-gradient-to-b from-white to-[#F8FAFC] text-slate-800 space-y-4">
                  {/* Miniature Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-[#1746A2] text-white flex items-center justify-center font-bold text-[10px]">
                        R
                      </div>
                      <span className="text-xs font-bold text-[#1746A2]">Meridian Cap</span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-600">
                      <span>Advisory</span>
                      <span>Portfolio</span>
                      <span className="px-2 py-0.5 bg-[#2563EB] text-white rounded text-[10px] font-medium">Contact</span>
                    </div>
                  </div>

                  {/* Miniature Hero Banner */}
                  <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-xl p-4">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#2563EB] mb-1">
                      Institutional Advisory Platform
                    </div>
                    <div className="text-sm font-extrabold text-[#1746A2] leading-snug mb-2">
                      Modern Financial Clarity for Growing Ventures.
                    </div>
                    <p className="text-[11px] text-slate-600 line-clamp-2 mb-3">
                      Built with Next.js, TypeScript, and high-performance server edge caching.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-[#2563EB] text-white px-2.5 py-1 rounded font-medium">
                        Schedule Call
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        Grade A Performance
                      </span>
                    </div>
                  </div>

                  {/* Miniature Metric Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                      <div className="text-xs font-bold text-[#1746A2]">0.8s</div>
                      <div className="text-[9px] text-slate-500">First Contentful Paint</div>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                      <div className="text-xs font-bold text-[#2563EB]">100</div>
                      <div className="text-[9px] text-slate-500">Lighthouse Mobile</div>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                      <div className="text-xs font-bold text-emerald-600">A+</div>
                      <div className="text-[9px] text-slate-500">Accessibility Score</div>
                    </div>
                  </div>
                </div>

                {/* Device Frame Footer */}
                <div className="bg-[#0A1F4D] px-4 py-2 flex items-center justify-between text-[11px] text-blue-200 border-t border-white/10">
                  <span>Engineered with React + Tailwind</span>
                  <span className="text-emerald-400">Zero Cumulative Layout Shift</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Carefully Arranged Statistics Bar */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-xs rounded-xl p-5 border border-white/15 hover:bg-white/15 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-blue-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-blue-200/80">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
