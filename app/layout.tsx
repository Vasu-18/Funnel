import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Communication Mastery Workshop — Master Public Speaking & Leadership | SpeakLab",
  description:
    "Join India's #1 communication coach in a LIVE 2-hour masterclass. Learn public speaking, salary negotiation, leadership communication & more. 1,30,000+ professionals trained. Register for ₹99.",
  keywords: [
    "communication workshop",
    "public speaking course",
    "leadership training",
    "salary negotiation",
    "communication skills",
    "English fluency",
    "professional development",
    "career growth",
    "soft skills training",
    "live workshop India",
  ],
  openGraph: {
    title: "Communication Mastery Workshop | SpeakLab",
    description:
      "LIVE 2-hour masterclass to transform your communication, confidence, and career. Only ₹99. Limited seats.",
    type: "website",
    locale: "en_IN",
    siteName: "SpeakLab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Communication Mastery Workshop | SpeakLab",
    description:
      "LIVE 2-hour masterclass to transform your communication, confidence, and career. Only ₹99.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        {/* Structured Data — Event Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationEvent",
              name: "Communication Mastery Workshop",
              description:
                "LIVE 2-hour masterclass on public speaking, leadership communication, and salary negotiation.",
              startDate: "2026-05-25T11:00:00+05:30",
              endDate: "2026-05-25T13:00:00+05:30",
              eventAttendanceMode:
                "https://schema.org/OnlineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "VirtualLocation",
                url: "https://zoom.us",
              },
              organizer: {
                "@type": "Organization",
                name: "SpeakLab",
              },
              performer: {
                "@type": "Person",
                name: "Arjun Mehta",
              },
              offers: {
                "@type": "Offer",
                price: "99",
                priceCurrency: "INR",
                availability: "https://schema.org/LimitedAvailability",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased font-body bg-white text-dark-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
