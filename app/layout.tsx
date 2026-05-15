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
  title: "Capital Case",
  description:
    "Book a free 15-minute strategic business consultation with Parikshit Mukesh. Get personalized insights on scaling, investor readiness, operational efficiency, and business growth strategy.",
  keywords: [
    "business consultation",
    "free strategy call",
    "business advisory",
    "MSME consulting",
    "startup consulting",
    "business growth strategy",
    "investor readiness",
    "scaling business",
    "strategic consulting India",
    "free business advice",
  ],
  openGraph: {
    title: "Free 15-Minute Business Consultation | Capital Case",
    description:
      "Book your free strategic business consultation. Get personalized insights on scaling, growth, and operational efficiency.",
    type: "website",
    locale: "en_IN",
    siteName: "Capital Case",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 15-Minute Business Consultation | Capital Case",
    description:
      "Book your free strategic business consultation. Personalized insights for founders and business leaders.",
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
        {/* Structured Data — Professional Service Schema */}
      </head>
      <body className="min-h-screen antialiased font-body bg-white text-dark-900 overflow-x-hidden">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Capital Case",
              description:
                "Strategic business consulting for founders, entrepreneurs, and business leaders. Free 15-minute consultation calls.",
              provider: {
                "@type": "Person",
                name: "Parikshit Mukesh",
                jobTitle: "Founder & Managing Director",
              },
              areaServed: "Worldwide",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
                description: "Free 15-minute strategic business consultation",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
