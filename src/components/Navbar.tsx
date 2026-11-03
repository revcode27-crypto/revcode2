import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X, ArrowUpRight, FolderKey } from 'lucide-react';

interface NavbarProps {
  onOpenClientPortal: () => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenClientPortal,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E7EB]'
            : 'bg-white border-b border-[#E5E7EB]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center group shrink-0"
              aria-label="RevCode Home"
            >
              <Logo variant="on-white" showTagline={false} />
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="whitespace-nowrap shrink-0 transition-colors hover:text-[#2563EB]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Client Portal & Primary Action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenClientPortal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[#1746A2] hover:text-[#2563EB] hover:bg-[#EFF6FF] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                aria-label="Open Client Portal"
              >
                <FolderKey className="w-4 h-4 text-[#2563EB]" />
                <span>Client Portal</span>
              </button>

              <button
                type="button"
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1746A2] rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenInquiry}
                className="sm:hidden inline-flex items-center px-3 py-1.5 text-xs font-semibold text-white bg-[#2563EB] rounded-md"
              >
                Get Started
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#2563EB] hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-xl flex flex-col p-6 z-10 border-l border-[#E5E7EB]">
            <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
              <Logo variant="on-white" showTagline={true} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 flex flex-col gap-2 overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2.5 text-base font-medium text-slate-800 hover:text-[#2563EB] hover:bg-[#EFF6FF] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-[#E5E7EB] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenClientPortal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1746A2] bg-[#EFF6FF] rounded-lg hover:bg-[#DBEAFE] transition-colors"
              >
                <FolderKey className="w-4 h-4 text-[#2563EB]" />
                <span>Client Portal</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1746A2] rounded-lg shadow-sm transition-colors"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
