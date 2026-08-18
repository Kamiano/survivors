import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Survivors Organization",
  description: "A community-led organization working alongside sex workers and marginalized communities in Kenya to advance justice, health access, rights, and economic empowerment.",
  keywords: [
    "Community Advocacy Kenya",
    "Human Rights Kenya",
    "Sex Workers Support",
    "Economic Empowerment",
    "Health Rights",
    "Social Justice Kenya"
  ],
  openGraph: {
    title: "Community Empowerment & Advocacy Initiative",
    description: "Empowering communities through human rights advocacy, health support, and economic opportunities across Kenya.",
    url: "http://localhost:3000",
    type: "website",
    locale: "en_KE",
    siteName: "Community Empowerment Initiative",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body bg-white text-dark">
        {children}
      </body>
    </html>
  );
}
