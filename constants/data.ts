import type {
  Testimonial,
  FAQItem,
  PainPoint,
  LearningModule,
  BonusItem,
  PersonaCard,
  SpeakerStat,
  WorkshopDetails,
} from "@/types";

// ─── Workshop Details ──────────────────────────────────────────
export const WORKSHOP: WorkshopDetails = {
  date: "Sunday, 25th May 2026",
  time: "11:00 AM IST",
  duration: "2+ Hours LIVE",
  originalPrice: "₹2,999",
  currentPrice: "₹99",
  seatsLeft: 47,
  totalTransformed: "1,30,000+",
  language: "Hindi + English",
};

// ─── Countdown target (set to workshop date) ──────────────────
export const COUNTDOWN_TARGET = new Date("2026-05-25T11:00:00+05:30");

// ─── Speaker Info ──────────────────────────────────────────────
export const SPEAKER = {
  name: "Arjun Mehta",
  title: "Communication Coach & Leadership Trainer",
  tagline: "Transforming careers through the power of words",
  bio: `Arjun Mehta is one of India's most sought-after communication coaches, 
having trained over 1,30,000 professionals across Fortune 500 companies, 
startups, and government organizations. A TEDx speaker and bestselling 
author, he has been featured in leading publications and has partnered 
with top institutions to deliver transformational workshops.`,
  achievements: [
    "TEDx Speaker (3 Talks)",
    "Bestselling Author",
    "Forbes 30 Under 30",
    "LinkedIn Top Voice",
  ],
  companies: [
    "Google",
    "Microsoft",
    "Amazon",
    "Deloitte",
    "TCS",
    "Infosys",
    "Wipro",
    "Reliance",
  ],
};

export const SPEAKER_STATS: SpeakerStat[] = [
  { value: "1,30,000+", label: "Professionals Trained" },
  { value: "500+", label: "Corporate Workshops" },
  { value: "15+", label: "Years Experience" },
  { value: "4.9★", label: "Average Rating" },
];

// ─── Pain Points ───────────────────────────────────────────────
export const PAIN_POINTS: PainPoint[] = [
  {
    icon: "Mic",
    title: "Fear of Public Speaking",
    description:
      "Your heart races, palms sweat, and words disappear the moment you stand in front of an audience.",
  },
  {
    icon: "EyeOff",
    title: "Being Ignored in Meetings",
    description:
      "You share brilliant ideas but nobody listens. Others get credit for saying the same thing louder.",
  },
  {
    icon: "ShieldOff",
    title: "Crippling Self-Doubt",
    description:
      'That voice in your head saying "you\'re not good enough" holds you back from speaking up.',
  },
  {
    icon: "MessageCircleOff",
    title: "Poor Communication Skills",
    description:
      "You struggle to express your thoughts clearly, whether in English or in any professional setting.",
  },
  {
    icon: "TrendingDown",
    title: "Missed Promotions",
    description:
      "You watch less-qualified colleagues get promoted because they communicate better than you.",
  },
  {
    icon: "IndianRupee",
    title: "Stagnant Salary Growth",
    description:
      "Without strong communication, salary negotiations fail and your earning potential stays stuck.",
  },
];

// ─── Learning Modules ──────────────────────────────────────────
export const LEARNING_MODULES: LearningModule[] = [
  {
    icon: "Mic2",
    title: "Public Speaking Mastery",
    description:
      "Overcome stage fear and deliver powerful presentations that captivate any audience.",
  },
  {
    icon: "MessageSquare",
    title: "Communication Confidence",
    description:
      "Build unshakable confidence in every conversation — from boardrooms to casual networking.",
  },
  {
    icon: "Languages",
    title: "English Fluency Framework",
    description:
      "Master the art of fluent English communication with our proven 5-step framework.",
  },
  {
    icon: "Crown",
    title: "Leadership Communication",
    description:
      "Learn how top leaders communicate to inspire teams, influence decisions, and drive action.",
  },
  {
    icon: "Users",
    title: "Networking & Persuasion",
    description:
      "Build meaningful professional connections and persuade stakeholders with ease.",
  },
  {
    icon: "Banknote",
    title: "Salary Negotiation Secrets",
    description:
      "Master the exact scripts and frameworks to negotiate 30-100% salary hikes confidently.",
  },
];

// ─── Transformation ────────────────────────────────────────────
export const BEFORE_STATES = [
  "Nervous wreck before presentations",
  "Overlooked in meetings",
  "Struggling with English",
  "Underpaid & undervalued",
  "Zero executive presence",
  "Afraid to network",
];

export const AFTER_STATES = [
  "Commanding speaker on any stage",
  "Most influential voice in the room",
  "Fluent & articulate communicator",
  "Negotiating premium compensation",
  "Radiating leadership energy",
  "Building powerful connections",
];

// ─── Testimonials ──────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Senior Software Engineer",
    company: "Google",
    content:
      "This workshop completely changed my career trajectory. Within 3 months, I got promoted to a lead role because I could finally communicate my ideas effectively in meetings.",
    rating: 5,
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Product Manager",
    company: "Amazon",
    content:
      "I used to freeze during presentations. After Arjun's workshop, I delivered a keynote to 500+ people. The techniques are practical and life-changing.",
    rating: 5,
    image: "/images/testimonial-2.jpg",
    isVideo: true,
  },
  {
    id: 3,
    name: "Sneha Patel",
    role: "Entrepreneur",
    company: "Founder, StyleCraft",
    content:
      "As a founder, communication is everything. This workshop taught me how to pitch to investors, lead my team, and close deals with confidence.",
    rating: 5,
    image: "/images/testimonial-3.jpg",
  },
  {
    id: 4,
    name: "Amit Kumar",
    role: "Management Consultant",
    company: "Deloitte",
    content:
      "Negotiated a 60% salary hike using the exact framework from the workshop. Best ₹99 I've ever invested in my career.",
    rating: 5,
    image: "/images/testimonial-4.jpg",
  },
  {
    id: 5,
    name: "Kavya Reddy",
    role: "HR Director",
    company: "Infosys",
    content:
      "I've enrolled my entire team of 25 into this workshop. The improvement in their communication and confidence has been remarkable.",
    rating: 5,
    image: "/images/testimonial-5.jpg",
  },
  {
    id: 6,
    name: "Vikash Singh",
    role: "CA Student",
    company: "Preparing for Interviews",
    content:
      "From stammering during interviews to getting 3 job offers in a month. Arjun sir's methods are pure gold. Every student must attend this.",
    rating: 5,
    image: "/images/testimonial-6.jpg",
    isVideo: true,
  },
  {
    id: 7,
    name: "Deepika Nair",
    role: "Marketing Head",
    company: "Flipkart",
    content:
      "The salary negotiation module alone is worth 100x the price. I successfully negotiated a competing offer and got a 45% raise.",
    rating: 5,
    image: "/images/testimonial-7.jpg",
  },
  {
    id: 8,
    name: "Aryan Gupta",
    role: "Civil Services Aspirant",
    company: "UPSC Preparation",
    content:
      "Interview confidence was my biggest weakness. After this workshop, I cleared my interview with the highest marks in my batch.",
    rating: 5,
    image: "/images/testimonial-8.jpg",
  },
];

// ─── Personas ──────────────────────────────────────────────────
export const PERSONAS: PersonaCard[] = [
  {
    icon: "GraduationCap",
    title: "Students & Freshers",
    description:
      "Build interview confidence and campus placement skills that set you apart from thousands.",
  },
  {
    icon: "Briefcase",
    title: "Working Professionals",
    description:
      "Break through career plateaus with communication skills that get you noticed and promoted.",
  },
  {
    icon: "Rocket",
    title: "Entrepreneurs & Founders",
    description:
      "Master the art of pitching, selling, and leading teams through powerful communication.",
  },
  {
    icon: "Users",
    title: "Managers & Team Leads",
    description:
      "Develop leadership communication that inspires teams and drives organizational impact.",
  },
  {
    icon: "Building2",
    title: "Senior Executives",
    description:
      "Refine your executive presence and boardroom communication for C-suite effectiveness.",
  },
  {
    icon: "Search",
    title: "Job Seekers",
    description:
      "Ace interviews, build your personal brand, and negotiate salaries like a pro.",
  },
];

// ─── Bonuses ───────────────────────────────────────────────────
export const BONUSES: BonusItem[] = [
  {
    title: "The Communication Playbook (eBook)",
    description:
      "50+ proven scripts for meetings, interviews, negotiations, and networking — ready to use immediately.",
    value: "₹1,999",
    icon: "BookOpen",
  },
  {
    title: "Email & LinkedIn Templates Pack",
    description:
      "Professional templates that get responses — cold emails, follow-ups, and LinkedIn outreach messages.",
    value: "₹999",
    icon: "FileText",
  },
  {
    title: "Exclusive Community Access",
    description:
      "Join 15,000+ professionals in our private community for ongoing support, practice, and networking.",
    value: "₹2,499",
    icon: "UsersRound",
  },
  {
    title: "Workshop Recording (48h Access)",
    description:
      "Couldn't take notes fast enough? Get full recording access to revisit every technique and framework.",
    value: "₹1,499",
    icon: "Video",
  },
  {
    title: "Salary Negotiation Worksheet",
    description:
      "Step-by-step worksheet to calculate your market value and prepare for your next negotiation.",
    value: "₹799",
    icon: "Calculator",
  },
];

// ─── FAQs ──────────────────────────────────────────────────────
export const FAQS: FAQItem[] = [
  {
    question: "Is this workshop really for ₹99 only?",
    answer:
      "Yes! We're offering this workshop at ₹99 (originally ₹2,999) as part of our mission to make premium communication training accessible to everyone. This is a limited-time offer and the price will increase soon.",
  },
  {
    question: "I'm not good at English. Can I still benefit?",
    answer:
      "Absolutely! This workshop is conducted in Hindi + English (Hinglish). Communication skills go beyond language — we focus on confidence, body language, persuasion, and structured thinking that works in any language.",
  },
  {
    question: "Will I get a recording of the workshop?",
    answer:
      "Yes! As a bonus, you'll get 48-hour access to the complete workshop recording so you can revisit the strategies and frameworks at your own pace.",
  },
  {
    question: "I'm a student. Is this relevant for me?",
    answer:
      "This workshop is ESPECIALLY valuable for students. Whether you're preparing for placements, interviews, or building your career foundation — strong communication skills give you an unfair advantage over your peers.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes! If you attend the full workshop and genuinely feel it didn't provide value, email us within 24 hours for a complete refund. No questions asked. We're that confident in the transformation.",
  },
  {
    question: "How is this different from YouTube videos?",
    answer:
      "YouTube gives you information. This workshop gives you transformation. You'll get live practice, personalized feedback, proven frameworks, and accountability — things you can never get from passive watching.",
  },
  {
    question: "I have social anxiety. Will this help?",
    answer:
      "Many of our most successful students started with severe social anxiety. Our approach is gentle, practical, and builds confidence gradually. We meet you where you are and guide you forward.",
  },
  {
    question: "What do I need to attend?",
    answer:
      "Just a phone or laptop with internet connection. The workshop is conducted live on Zoom. You'll receive the joining link via email and WhatsApp after registration.",
  },
];

// ─── Trust Companies ───────────────────────────────────────────
export const TRUST_COMPANIES = [
  "Google",
  "Microsoft",
  "Amazon",
  "Deloitte",
  "TCS",
  "Infosys",
  "Wipro",
  "Reliance",
  "Flipkart",
  "Accenture",
  "McKinsey",
  "Goldman Sachs",
];

// ─── Nav Links ─────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Learn", href: "#learn" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

// ─── Social Links ──────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
  { label: "YouTube", href: "https://youtube.com", icon: "Youtube" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
];
