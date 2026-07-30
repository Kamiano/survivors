import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Script from "next/script"; // 1. Imported for optimized Google Analytics injection
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KNESWO FEMINIST INITIATIVE",
  description: "A bold, modern, feminist movement-building organization working alongside marginalized communities in Kenya to advance justice, dignity, leadership, and systemic change.",
  keywords: ["KNESWO", "Sex Workers Rights Kenya",'KNESWO FEMINIST INITIATIVE', "Feminist Leadership", "Advocacy", "Human Rights Kenya", "Justice", "Climate Justice"],
  openGraph: {
    title: "KNESWO | KNESWO FEMINIST INITIATIVE",
    description: "Leading with dignity, power, and unapologetic resistance. Building feminist leadership across Kenya.",
    url: "https://kneswo.org",
    type: "website",
    locale: "en_KE",
    siteName: "KNESWO FEMINIST INITIATIVE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* 2. Google Analytics Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R10VD0K01P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-kneswo" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R10VD0K01P');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-body bg-white text-dark">
        {children}
        {/* Vercel Analytics Tracker */}
        <Analytics />
      </body>
    </html>
  );
}
