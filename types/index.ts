export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  isVideo?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface LearningModule {
  icon: string;
  title: string;
  description: string;
}

export interface BonusItem {
  title: string;
  description: string;
  value: string;
  icon: string;
}

export interface PersonaCard {
  icon: string;
  title: string;
  description: string;
}

export interface SpeakerStat {
  value: string;
  label: string;
}

export interface WorkshopDetails {
  date: string;
  time: string;
  duration: string;
  originalPrice: string;
  currentPrice: string;
  seatsLeft: number;
  totalTransformed: string;
  language: string;
}

export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  profession: string;
}
