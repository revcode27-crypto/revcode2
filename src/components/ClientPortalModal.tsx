import React, { useState, useEffect } from 'react';
import {
  X,
  FolderKey,
  Search,
  CheckCircle2,
  Clock,
  FileCode,
  Download,
  Send,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [lookupCode, setLookupCode] = useState('');
  const [activeProjectData, setActiveProjectData] = useState<any>(null);
  const [searched, setSearched] = useState(false);
  const [maintenanceNote, setMaintenanceNote] = useState('');
  const [maintenanceSubmitted, setMaintenanceSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Check if user recently submitted an inquiry in this browser
      try {
        const stored = JSON.parse(localStorage.getItem('revcode_inquiries') || '[]');
        if (stored.length > 0) {
          setLookupCode(stored[0].ticketId);
          setActiveProjectData({
            ticketId: stored[0].ticketId,
            clientName: stored[0].data.fullName,
            businessName: stored[0].data.businessName,
            websiteType: stored[0].data.websiteType,
            status: 'Technical Review & Scoping',
            progress: 25,
            submittedDate: stored[0].timestamp,
            stage: 'Phase 1: Discovery and Strategy',
            deliverables: [
              { name: 'Initial Requirements Document', status: 'In Review' },
              { name: 'Sitemap Architecture', status: 'Pending Approval' },
              { name: 'UX Wireframe Prototype', status: 'Upcoming' },
            ],
          });
          setSearched(true);
        }
      } catch {
        // ignore
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);

    const clean = lookupCode.trim().toUpperCase();

    // Check localStorage first
    try {
      const stored = JSON.parse(localStorage.getItem('revcode_inquiries') || '[]');
      const found = stored.find((item: any) => item.ticketId.toUpperCase() === clean);
      if (found) {
        setActiveProjectData({
          ticketId: found.ticketId,
          clientName: found.data.fullName,
          businessName: found.data.businessName,
          websiteType: found.data.websiteType,
          status: 'Active Studio Pipeline',
          progress: 35,
          submittedDate: found.timestamp,
          stage: 'Phase 2: UX/UI Architecture',
          deliverables: [
            { name: 'Sitemap Specification', status: 'Completed' },
            { name: 'Interactive Wireframe Prototype', status: 'In Review' },
            { name: 'Core Component Styling', status: 'In Progress' },
          ],
        });
        return;
      }
    } catch {
      // fallback
    }

    // Default sample project for demonstration if entered code or demo clicked
    if (clean.startsWith('REV') || clean === 'DEMO') {
      setActiveProjectData({
        ticketId: clean.startsWith('REV') ? clean : 'REV-2026-DEMO',
        clientName: 'Meridian Capital Partners',
        businessName: 'Meridian Capital',
        websiteType: 'Company Profile Website',
        status: 'Production Live & Monitored',
        progress: 100,
        submittedDate: 'Oct 24, 2026',
        stage: 'Phase 5: Handover and Delivery Complete',
        deliverables: [
          { name: 'Figma UI/UX Component Library', status: 'Completed' },
          { name: 'Next.js & TypeScript Repository', status: 'Handed Over' },
          { name: 'High-Speed Edge Hosting Configuration', status: 'Active' },
          { name: 'Google Core Web Vitals Audit Report', status: 'A+ Verified' },
        ],
      });
    } else {
      setActiveProjectData(null);
    }
  };

  const handleMaintenanceRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!maintenanceNote.trim()) return;

    setMaintenanceSubmitted(true);
    setTimeout(() => {
      setMaintenanceSubmitted(false);
      setMaintenanceNote('');
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 text-slate-900">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto border border-[#E5E7EB]">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#EFF6FF] text-[#1746A2] rounded-xl border border-[#DBEAFE]">
              <FolderKey className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1746A2]">
                RevCode Client Portal
              </h3>
              <p className="text-xs text-slate-500">
                Track project deliverables, active milestones, and maintenance requests.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Lookup Input */}
        <div className="py-6 border-b border-[#E5E7EB]">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={lookupCode}
                onChange={(e) => setLookupCode(e.target.value)}
                placeholder="Enter your project code (e.g. REV-100234 or DEMO)"
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl font-mono uppercase focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1746A2] hover:bg-[#2563EB] rounded-xl transition-colors shrink-0 cursor-pointer"
            >
              Look Up Project
            </button>
            <button
              type="button"
              onClick={() => {
                setLookupCode('DEMO');
                setActiveProjectData({
                  ticketId: 'REV-2026-DEMO',
                  clientName: 'Meridian Capital Partners',
                  businessName: 'Meridian Capital',
                  websiteType: 'Company Profile Website',
                  status: 'Production Live & Monitored',
                  progress: 100,
                  submittedDate: 'Oct 24, 2026',
                  stage: 'Phase 5: Handover and Delivery Complete',
                  deliverables: [
                    { name: 'Figma UI/UX Component Library', status: 'Completed' },
                    { name: 'Next.js & TypeScript Repository', status: 'Handed Over' },
                    { name: 'High-Speed Edge Hosting Configuration', status: 'Active' },
                    { name: 'Google Core Web Vitals Audit Report', status: 'A+ Verified' },
                  ],
                });
                setSearched(true);
              }}
              className="px-3 py-2.5 text-xs font-medium text-[#2563EB] bg-[#EFF6FF] hover:bg-[#DBEAFE] rounded-xl transition-colors shrink-0 cursor-pointer"
            >
              Load Sample Demo
            </button>
          </form>
        </div>

        {/* Project Dashboard View */}
        {searched && activeProjectData ? (
          <div className="py-6 space-y-6">
            <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#2563EB] bg-white px-2.5 py-1 rounded border border-blue-200">
                  {activeProjectData.ticketId}
                </span>
                <h4 className="text-lg font-bold text-[#1746A2] mt-2">
                  {activeProjectData.businessName}
                </h4>
                <div className="text-xs text-slate-500 mt-0.5">
                  Scope: {activeProjectData.websiteType} &bull; Started {activeProjectData.submittedDate}
                </div>
              </div>

              <div className="text-right sm:border-l sm:border-[#E5E7EB] sm:pl-6">
                <span className="text-xs text-slate-500 block">Current Status</span>
                <span className="text-sm font-bold text-emerald-700 block">
                  {activeProjectData.status}
                </span>
                <span className="text-xs font-medium text-slate-600 block mt-1">
                  {activeProjectData.stage}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Phase Completion</span>
                <span className="font-mono">{activeProjectData.progress}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#2563EB] transition-all duration-500 rounded-full"
                  style={{ width: `${activeProjectData.progress}%` }}
                />
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Deliverables & Milestones
              </h5>
              <div className="space-y-2">
                {activeProjectData.deliverables.map((item: any) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 bg-white border border-[#E5E7EB] rounded-xl text-xs"
                  >
                    <div className="flex items-center gap-2 text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Maintenance / Support Dispatch Form */}
            <div className="p-5 bg-[#EFF6FF] rounded-2xl border border-[#DBEAFE]">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#1746A2] mb-1">
                Client Support & Maintenance Request
              </h5>
              <p className="text-xs text-slate-600 mb-3">
                Need a content update, new page, or technical check? Submit your note directly to the engineering team.
              </p>

              {maintenanceSubmitted ? (
                <div className="p-3 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Request received. Our engineering team has been notified.</span>
                </div>
              ) : (
                <form onSubmit={handleMaintenanceRequest} className="space-y-3">
                  <textarea
                    rows={2}
                    value={maintenanceNote}
                    onChange={(e) => setMaintenanceNote(e.target.value)}
                    placeholder="Describe your maintenance or revision request..."
                    className="w-full p-3 text-xs bg-white border border-[#DBEAFE] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1746A2] rounded-lg transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        ) : searched ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-800">No Record Found for "{lookupCode}"</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Please check your reference code or submit a new project inquiry. You can also click "Load Sample Demo" above to explore the portal features.
            </p>
          </div>
        ) : (
          <div className="py-8 text-center text-xs text-slate-500">
            Enter your project reference tracking code above to inspect real-time progress.
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-slate-500">
          <span>RevCode Client Infrastructure</span>
          <button
            type="button"
            onClick={onClose}
            className="text-[#1746A2] hover:underline font-medium cursor-pointer"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
};
