export type WebsiteType =
  | 'Business Website'
  | 'Company Profile Website'
  | 'Landing Page'
  | 'Portfolio Website'
  | 'E Commerce Website'
  | 'Custom Website Applications';

export interface ServiceItem {
  id: string;
  title: WebsiteType;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  timeline: string;
}

export interface ProjectShowcase {
  id: string;
  name: string;
  category: WebsiteType;
  clientType: string;
  shortDescription: string;
  overview: string;
  keyFeatures: string[];
  techStack: string[];
  metrics: { label: string; value: string };
  previewType: 'corporate' | 'ecommerce' | 'landing' | 'webapp' | 'portfolio';
  desktopAccent: string;
}

export interface BlueprintStep {
  number: string;
  title: string;
  summary: string;
  details: string;
  deliverables: string[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  businessName: string;
  websiteType: WebsiteType;
  budgetRange: string;
  projectDetails: string;
}

export interface ClientReview {
  id: string;
  clientName: string;
  companyName: string;
  projectType: string;
  quote: string;
  date: string;
  verified: boolean;
}
