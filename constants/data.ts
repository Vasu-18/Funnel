import type {
  Testimonial,
  FAQItem,
  ConsultationBenefit,
  SpeakerInfo,
} from "@/types";

// ─── Speaker Info ──────────────────────────────────────────────
export const SPEAKER: SpeakerInfo = {
  name: "Parikshith Mukesh",
  tag: "4th Generation Entrepreneur",
  bio: `A foresight-driven strategist who specializes in transforming founder-led businesses into institution-ready, capital-accessible enterprises with global scale potential. Mentored by Dr. Riel Miller – former Head of Futures Literacy at UNESCO, also known as the Father of Futures Literacy.`,
  education: [
    "DBA Candidate – Ecole des Ponts Business School",
    "MBA Innovation – Hult International Business School",
    "MSc Finance (STEM) – Hult International Business School",
  ],
  leadership: [
    "Founder & Managing Director – Capital Case",
    "Fellow at ReTech Center Ecole Des Ponts Business School (Paris)",
    "Co-Founder & Director – &Co.",
  ],
  certifications: [
    "Certified Foresight Strategist – Dubai Future Academy",
    "Certified Harvard Business Impact & Strategic Thinking",
    "Certified IIM(B) Strategic Management",
    "Lean Six Sigma Black Belt (IASSC)",
  ],
};

// ─── Consultation Benefits ─────────────────────────────────────
export const CONSULTATION_BENEFITS: ConsultationBenefit[] = [
  { text: "The hidden mistakes slowing your business growth" },
  { text: "Why your current strategy may not be delivering results" },
  { text: "How to position your business for scalability and investor readiness" },
  { text: "The communication and leadership gaps affecting decision-making" },
  { text: "Clear next steps to improve operations, growth, and execution" },
  { text: "Practical insights tailored to your business challenges" },
  { text: "How successful founders build systems, structure, and long-term vision" },
  { text: "What may be stopping your business from reaching its next level" },
];

// ─── Testimonials ──────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Mehta",
    role: "Founder",
    location: "Mumbai",
    content:
      "The consultation helped me identify operational gaps that were silently affecting our growth. The clarity and direction were extremely valuable.",
  },
  {
    id: 2,
    name: "Ananya Kapoor",
    role: "Startup Founder",
    location: "Bangalore",
    content:
      "In just 15 minutes, I received more actionable insights than many long consulting sessions I've attended before.",
  },
  {
    id: 3,
    name: "David Richardson",
    role: "CEO",
    location: "London",
    content:
      "Their strategic perspective helped us rethink how we approach scaling and leadership communication.",
  },
  {
    id: 4,
    name: "Arjun Malhotra",
    role: "Managing Director",
    location: "Delhi",
    content:
      "The session exposed key mistakes in our expansion strategy and gave us a practical roadmap forward.",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    role: "Entrepreneur",
    location: "Dubai",
    content:
      "Clear, insightful, and highly professional. I walked away with immediate actions to improve business structure and execution.",
  },
  {
    id: 6,
    name: "Vikram Sethi",
    role: "Founder",
    location: "Gurgaon",
    content:
      "They quickly understood the challenges in our business and highlighted blind spots we had ignored for years.",
  },
  {
    id: 7,
    name: "Michael Thompson",
    role: "Co-Founder",
    location: "Singapore",
    content:
      "The advice around investor readiness and positioning was especially valuable for our next growth stage.",
  },
  {
    id: 8,
    name: "Priya Nair",
    role: "Business Owner",
    location: "Kochi",
    content:
      "A highly focused consultation with genuine strategic value. It felt tailored to our exact business situation.",
  },
  {
    id: 9,
    name: "Ethan Walker",
    role: "Startup Advisor",
    location: "Toronto",
    content:
      "The session improved not only our business thinking but also how we communicate as leaders internally.",
  },
];

// ─── FAQs ──────────────────────────────────────────────────────
export const FAQS: FAQItem[] = [
  {
    question: "How does the 15-minute consultation call work?",
    answer:
      "Once you book your slot, one of our consultants will connect with you to understand your business challenges, identify growth gaps, and provide practical strategic insights.",
  },
  {
    question: "Who is this consultation for?",
    answer:
      "This session is designed for entrepreneurs, founders, startup owners, SMEs, and business leaders looking to scale, improve operations, or solve strategic challenges.",
  },
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The 15-minute consultation call is completely free with no obligation.",
  },
  {
    question: "What kind of business problems can I discuss?",
    answer:
      "You can discuss: Business growth challenges, Scaling issues, Team and leadership problems, Investor readiness, Operational inefficiencies, Communication and decision-making gaps, and Expansion strategy.",
  },
  {
    question: "Will I receive personalized advice?",
    answer:
      "Yes. The consultation is tailored specifically to your business situation, goals, and current challenges.",
  },
  {
    question: "Do I need to prepare anything before the call?",
    answer:
      "No extensive preparation is required. However, having clarity about your current business challenges and goals will help you get the most value from the session.",
  },
  {
    question: "Can startups apply for this consultation?",
    answer:
      "Absolutely. Early-stage startups, growth-stage companies, and established businesses can all benefit from the consultation.",
  },
  {
    question: "What happens after the consultation?",
    answer:
      "You'll receive strategic recommendations and clarity on the next steps your business can take. If needed, our team may also suggest deeper advisory support.",
  },
  {
    question: "Is my business information confidential?",
    answer:
      "Yes. All discussions and business information shared during the consultation are kept strictly confidential.",
  },
  {
    question: "How do I book my consultation slot?",
    answer:
      "Simply fill out the booking form on the website, and our team will contact you to confirm your session.",
  },
];

// ─── Revenue Options ───────────────────────────────────────────
export const REVENUE_OPTIONS = [
  "1-5 Lacs",
  "5-10 Lacs",
  "10-20 Lacs",
  "20-50 Lacs",
  "50 Lacs - 1 Cr",
];

// ─── Nav Links ─────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Benefits", href: "#benefits" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

// ─── Social Links ──────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
  { label: "YouTube", href: "https://youtube.com", icon: "Youtube" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
];
