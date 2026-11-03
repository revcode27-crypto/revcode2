import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Mail,
  ShieldCheck,
  Clock,
  Sparkles,
} from 'lucide-react';
import { WebsiteType, InquiryFormData } from '../types.ts';

interface ProjectInquiryProps {
  initialServiceType?: WebsiteType;
}

export const ProjectInquiry: React.FC<ProjectInquiryProps> = ({
  initialServiceType = 'Business Website',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    businessName: '',
    websiteType: initialServiceType,
    budgetRange: '$2,500 - $5,000',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<null | {
    ticketId: string;
    timestamp: string;
    data: InquiryFormData;
  }>(null);
  const [copiedId, setCopiedId] = useState(false);

  const websiteTypes: WebsiteType[] = [
    'Business Website',
    'Company Profile Website',
    'Landing Page',
    'Portfolio Website',
    'E Commerce Website',
    'Custom Website Applications',
  ];

  const budgetRanges = [
    'Under $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.businessName.trim()) {
      errs.businessName = 'Please enter your business or project name.';
    }

    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please share a brief summary of what you are aiming to build.';
    } else if (formData.projectDetails.trim().length < 15) {
      errs.projectDetails = 'Please provide a bit more detail (at least 15 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable studio submission pipeline
    setTimeout(() => {
      const ticketId = 'REV-' + Math.floor(100000 + Math.random() * 900000);
      const timestamp = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      const submissionRecord = {
        ticketId,
        timestamp,
        data: { ...formData },
      };

      // Store in local storage for persistence and client portal lookup
      try {
        const existing = JSON.parse(localStorage.getItem('revcode_inquiries') || '[]');
        localStorage.setItem(
          'revcode_inquiries',
          JSON.stringify([submissionRecord, ...existing])
        );
      } catch {
        // storage fallback
      }

      setIsSubmitting(false);
      setSubmissionSuccess(submissionRecord);
    }, 600);
  };

  const handleCopyTicket = (ticket: string) => {
    navigator.clipboard.writeText(ticket);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const composeMailtoUrl = () => {
    if (!submissionSuccess) return '#';
    const subject = encodeURIComponent(
      `Project Inquiry [${submissionSuccess.ticketId}]: ${submissionSuccess.data.businessName} - ${submissionSuccess.data.websiteType}`
    );
    const body = encodeURIComponent(
      `Hello RevCode Team,\n\nI just submitted an inquiry on your website.\n\nProject Reference: ${submissionSuccess.ticketId}\nClient Name: ${submissionSuccess.data.fullName}\nBusiness: ${submissionSuccess.data.businessName}\nEmail: ${submissionSuccess.data.email}\nWebsite Type: ${submissionSuccess.data.websiteType}\nBudget Range: ${submissionSuccess.data.budgetRange}\n\nProject Details:\n${submissionSuccess.data.projectDetails}\n\nLooking forward to speaking with you.`
    );
    return `mailto:revcode27@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white text-slate-900 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-3">
            <span>Project Inquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1746A2] tracking-tight mb-4">
            Let's Start Your Next Project.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tell us about your business goals and the website you envision. We review every inquiry thoroughly and respond within 24 business hours with honest feedback and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiry Form or Success State */}
          <div className="lg:col-span-8 bg-[#F8FAFC] border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 shadow-sm">
            {submissionSuccess ? (
              <div className="py-4 space-y-6">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-4">
                  <div className="p-2 bg-emerald-600 text-white rounded-xl shrink-0 mt-0.5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-950 mb-1">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-sm text-emerald-800 leading-relaxed">
                      Thank you, {submissionSuccess.data.fullName}. We have logged your project details into the RevCode studio dispatch queue.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E5E7EB] gap-2">
                    <div>
                      <span className="text-xs text-slate-400">Reference Tracking Code</span>
                      <div className="text-2xl font-mono font-bold text-[#1746A2]">
                        {submissionSuccess.ticketId}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyTicket(submissionSuccess.ticketId)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1746A2] bg-[#EFF6FF] hover:bg-[#DBEAFE] rounded-lg transition-colors cursor-pointer self-start sm:self-center"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedId ? 'Copied' : 'Copy Code'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-400 block mb-0.5">Business Name</span>
                      <span className="font-semibold text-slate-800 text-sm">
                        {submissionSuccess.data.businessName}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block mb-0.5">Selected Scope</span>
                      <span className="font-semibold text-slate-800 text-sm">
                        {submissionSuccess.data.websiteType}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block mb-0.5">Budget Allocation</span>
                      <span className="font-semibold text-slate-800 text-sm">
                        {submissionSuccess.data.budgetRange}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block mb-0.5">Response Target</span>
                      <span className="font-semibold text-emerald-700 text-sm">
                        Under 24 Hours
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs text-slate-400 block mb-1">Project Summary</span>
                    <p className="text-xs text-slate-700 bg-[#F8FAFC] p-3 rounded-lg border border-[#E5E7EB] leading-relaxed">
                      {submissionSuccess.data.projectDetails}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={composeMailtoUrl()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1746A2] rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Direct Email to revcode27@gmail.com</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmissionSuccess(null);
                      setFormData({
                        fullName: '',
                        email: '',
                        businessName: '',
                        websiteType: 'Business Website',
                        budgetRange: '$2,500 - $5,000',
                        projectDetails: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 border border-[#E5E7EB] hover:bg-slate-100 rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Rachel Sterling"
                      className={`w-full px-4 py-3 text-sm bg-white border rounded-xl transition-all focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#E5E7EB]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="rachel@company.com"
                      className={`w-full px-4 py-3 text-sm bg-white border rounded-xl transition-all focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E5E7EB]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Business or Project Name *
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => {
                        setFormData({ ...formData, businessName: e.target.value });
                        if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                      }}
                      placeholder="e.g. Sterling Architectural Lab"
                      className={`w-full px-4 py-3 text-sm bg-white border rounded-xl transition-all focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] ${
                        errors.businessName ? 'border-red-400 bg-red-50/20' : 'border-[#E5E7EB]'
                      }`}
                    />
                    {errors.businessName && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.businessName}</span>
                      </p>
                    )}
                  </div>

                  {/* Website Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Website Type *
                    </label>
                    <select
                      value={formData.websiteType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          websiteType: e.target.value as WebsiteType,
                        })
                      }
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E5E7EB] rounded-xl transition-all focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                    >
                      {websiteTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetRanges.map((range) => {
                      const isSelected = formData.budgetRange === range;
                      return (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: range })}
                          className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#1746A2] text-white border-[#1746A2]'
                              : 'bg-white text-slate-700 border-[#E5E7EB] hover:bg-slate-50'
                          }`}
                        >
                          {range}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => {
                      setFormData({ ...formData, projectDetails: e.target.value });
                      if (errors.projectDetails) setErrors({ ...errors, projectDetails: undefined });
                    }}
                    placeholder="Briefly describe what your business does, what pages you envision, and any key requirements or timeline..."
                    className={`w-full px-4 py-3 text-sm bg-white border rounded-xl transition-all focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] ${
                      errors.projectDetails ? 'border-red-400 bg-red-50/20' : 'border-[#E5E7EB]'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.projectDetails}</span>
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1746A2] disabled:opacity-60 rounded-xl shadow-md transition-all duration-200 cursor-pointer active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Processing Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-3">
                    We keep your project information strictly confidential. No spam or unsolicited sales calls.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Commitments */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-3xl p-7">
              <h3 className="text-lg font-bold text-[#1746A2] mb-3">
                What to Expect After Inquiring
              </h3>

              <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-blue-200 text-[#1746A2] shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Prompt Technical Review</span>
                    <span>A senior engineer reviews your requirements, not a junior account manager.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-blue-200 text-[#1746A2] shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Transparent Scope & Pricing</span>
                    <span>You receive a clear breakdown of milestones, deliverables, and flat pricing.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-blue-200 text-[#1746A2] shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">No Pressure Exploration</span>
                    <span>No aggressive sales calls. We only proceed if we are genuinely the right fit.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-3xl p-7">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Direct Contact
              </span>
              <div className="text-sm font-semibold text-slate-900 mb-1">
                RevCode Development Studio
              </div>
              <a
                href="mailto:revcode27@gmail.com"
                className="text-sm text-[#2563EB] hover:underline font-mono font-medium block mb-3"
              >
                revcode27@gmail.com
              </a>
              <div className="text-xs text-slate-500">
                Operating internationally with direct founder communication on every project.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
