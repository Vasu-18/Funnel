export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ConsultationBenefit {
  text: string;
}

export interface SpeakerInfo {
  name: string;
  tag: string;
  bio: string;
  education: string[];
  leadership: string[];
  certifications: string[];
}

export interface ConsultationBookingFormData {
  name: string;
  phone: string;
  alternateNumber?: string;
  currentRevenue: string;
  businessType: string;
  startedBusinessYear: string;
}
