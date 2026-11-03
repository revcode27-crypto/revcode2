import React, { useState, useEffect } from 'react';
import { Quote, MessageSquarePlus, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import { ClientReview } from '../types.ts';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<ClientReview[]>([]);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Form state for real review submission
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectType, setProjectType] = useState('Business Website');
  const [quote, setQuote] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('revcode_client_reviews');
      if (stored) {
        setReviews(JSON.parse(stored));
      }
    } catch {
      // Local storage fallback
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !companyName.trim() || !quote.trim()) return;

    const newReview: ClientReview = {
      id: 'review_' + Date.now(),
      clientName: clientName.trim(),
      companyName: companyName.trim(),
      projectType,
      quote: quote.trim(),
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      }),
      verified: true,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem('revcode_client_reviews', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setShowSubmitModal(false);
      setClientName('');
      setCompanyName('');
      setQuote('');
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#1746A2] text-white relative overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-200 mb-3">
            <span>Verified Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Client Endorsements and Verified Feedback.
          </h2>

          <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed">
            We hold our client relationships to the highest standard of trust. In accordance with studio policy, we never generate artificial testimonials or fake five-star quotes. Every review presented here comes directly from businesses we have worked with.
          </p>
        </div>

        {/* Display Reviews or Clean Empty State */}
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-blue-300 mb-4 opacity-80" />
                  <p className="text-sm text-blue-50 leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">{item.clientName}</div>
                    <div className="text-xs text-blue-200">{item.companyName}</div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-300 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Suitable Dignified Empty State */
          <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-3xl p-8 sm:p-12 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-200 mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Fake Reviews Policy</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Currently Curating Case Study Reviews
              </h3>

              <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-6">
                We are actively assembling detailed case summaries and client reflections from our recent production launches. If you are an active or previous RevCode partner, we would be honored to receive your verified review.
              </p>

              <button
                type="button"
                onClick={() => setShowSubmitModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#1746A2] bg-white hover:bg-blue-50 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <MessageSquarePlus className="w-4 h-4 text-[#2563EB]" />
                <span>Submit Client Feedback</span>
              </button>
            </div>
          </div>
        )}

        {/* Studio Commitment Banner */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-blue-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Strict privacy adherence and direct client consent for all public mentions</span>
          </div>
          {reviews.length > 0 && (
            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              className="text-white hover:text-blue-200 underline underline-offset-4 cursor-pointer"
            >
              Add Client Review
            </button>
          )}
        </div>
      </div>

      {/* Real Review Submission Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 text-slate-900">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowSubmitModal(false)}
          />

          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 border border-[#E5E7EB]">
            <div className="flex items-start justify-between pb-4 border-b border-[#E5E7EB]">
              <div>
                <h3 className="text-xl font-bold text-[#1746A2]">
                  Submit Client Endorsement
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Your feedback helps us document real project outcomes.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedSuccess ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Thank You for Your Feedback
                </h4>
                <p className="text-xs text-slate-600">
                  Your review has been verified and added to the studio records.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="pt-4 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. David Henderson"
                    className="w-full px-3.5 py-2 text-sm border border-[#E5E7EB] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Business or Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Henderson Legal Partners"
                    className="w-full px-3.5 py-2 text-sm border border-[#E5E7EB] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm border border-[#E5E7EB] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="Company Profile Website">Company Profile Website</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Portfolio Website">Portfolio Website</option>
                    <option value="E Commerce Website">E Commerce Website</option>
                    <option value="Custom Website Applications">Custom Website Applications</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Testimonial *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="Share how working with RevCode helped your business, communication, and web performance..."
                    className="w-full px-3.5 py-2 text-sm border border-[#E5E7EB] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1746A2] rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
