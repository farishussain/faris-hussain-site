import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://farishussain.dev"),
  title: "Faris Hussain — Data & AI Platform Engineer",
  description:
    "Faris Hussain is a Data & AI Platform Engineer based in Munich, Germany, designing and building modern data platforms and agentic AI systems — from Data Vault 2.0 warehouses to autonomous AI agents in production.",
  openGraph: {
    title: "Faris Hussain — Data & AI Platform Engineer",
    description:
      "Designing and building modern data platforms and agentic AI systems — from Data Vault 2.0 warehouses to autonomous AI agents in production.",
    url: "https://farishussain.dev",
    siteName: "Faris Hussain",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faris Hussain — Data & AI Platform Engineer",
    description:
      "Designing and building modern data platforms and agentic AI systems — from Data Vault 2.0 warehouses to autonomous AI agents in production.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://farishussain.dev/#person",
      name: "Faris Hussain",
      url: "https://farishussain.dev",
      jobTitle: "Data & AI Platform Engineer",
      description:
        "Data & AI Platform Engineer and Data Vault Architect helping companies modernise legacy data architecture and build production-grade agentic AI systems.",
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
      "@id": "https://farishussain.dev/#website",
      url: "https://farishussain.dev",
      name: "Faris Hussain — Data & AI Platform Engineer",
      publisher: { "@id": "https://farishussain.dev/#person" },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": "https://farishussain.dev/#service",
      name: "Data Platform & Agentic AI Engineering",
      serviceType: "Data Engineering Consulting",
      provider: { "@id": "https://farishussain.dev/#person" },
      areaServed: { "@type": "Country", name: "Worldwide" },
      description:
        "Data platform modernisation, Data Vault 2.0 architecture, and agentic AI system design and implementation.",
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
      </body>
    </html>
  );
}
