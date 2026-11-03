import React from 'react';
import { Logo } from './Logo.tsx';
import {
  Mail,
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  Globe,
  FolderKey,
  ShieldCheck,
} from 'lucide-react';
import { WebsiteType } from '../types.ts';

interface FooterProps {
  onSelectService: (service: WebsiteType) => void;
  onOpenClientPortal: () => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectService,
  onOpenClientPortal,
  onOpenInquiry,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks: WebsiteType[] = [
    'Business Website',
    'Company Profile Website',
    'Landing Page',
    'Portfolio Website',
    'E Commerce Website',
    'Custom Website Applications',
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1F4D] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Message */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" onClick={scrollToTop} className="inline-block">
              <Logo variant="on-blue" showTagline={true} />
            </a>

            <p className="text-sm text-blue-200/90 leading-relaxed max-w-sm">
              Building Digital Experiences That Move Businesses Forward. We engineer high-speed, bespoke websites designed to help companies connect with their audience and achieve measurable growth.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-blue-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Independent Web Development Studio</span>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                aria-label="RevCode GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                aria-label="RevCode LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                aria-label="RevCode Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                aria-label="RevCode Dribbble"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenClientPortal}
                  className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white transition-colors cursor-pointer"
                >
                  <FolderKey className="w-3.5 h-3.5" />
                  <span>Client Portal</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="text-left hover:text-white transition-colors cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Direct Inquiries */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Contact & Inquiries
            </h4>

            <div className="space-y-3 text-sm text-blue-100">
              <div>
                <span className="text-xs text-blue-300 block mb-1">Direct Studio Inbox</span>
                <a
                  href="mailto:revcode27@gmail.com"
                  className="font-mono text-white hover:text-blue-200 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#3B82F6]" />
                  <span>revcode27@gmail.com</span>
                </a>
              </div>

              <div>
                <span className="text-xs text-blue-300 block mb-1">Turnaround Time</span>
                <span className="text-xs text-emerald-400 font-medium">
                  Guaranteed response within 24 hours
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-[#1746A2] bg-white hover:bg-blue-50 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Start Project Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <div>
            &copy; 2026 RevCode. All rights reserved. Built with precision and care.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
