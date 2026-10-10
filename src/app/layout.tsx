import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppWidget from "./components/WhatsAppWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Faris Hussain | Data & ML Platforms for AI Systems";
const siteDescription =
  "Faris Hussain builds modern Data and ML platforms for AI systems, with reliable pipelines, legacy platform modernisation and practical AI integration.";

export const metadata: Metadata = {
  metadataBase: new URL("https://faris-hussain.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://faris-hussain.vercel.app",
    siteName: "Faris Hussain",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://faris-hussain.vercel.app/#person",
      name: "Faris Hussain",
      url: "https://faris-hussain.vercel.app",
      jobTitle: "Data & AI Platform Engineer",
      description: siteDescription,
      sameAs: [
        "https://www.linkedin.com/in/farishussain",
        "https://github.com/farishussain",
      ],
      knowsAbout: [
        "Data Vault 2.0",
        "Agentic AI",
        "Data Warehouse Modernisation",
        "ETL/ELT Pipelines",
        "Cloud Data Engineering",
        "LLMOps",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://faris-hussain.vercel.app/#website",
      url: "https://faris-hussain.vercel.app",
      name: siteTitle,
      publisher: { "@id": "https://faris-hussain.vercel.app/#person" },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": "https://faris-hussain.vercel.app/#service",
      name: "Data & ML Platforms for AI Systems",
      serviceType: "Data Engineering Consulting",
      provider: { "@id": "https://faris-hussain.vercel.app/#person" },
      areaServed: { "@type": "Country", name: "Worldwide" },
      description:
        "Modern Data and ML platforms for AI systems, including data platform modernisation, reliable pipelines and practical AI integration.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <WhatsAppWidget />
        <Analytics />
      </body>
    </html>
  );
}
