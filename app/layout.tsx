import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Coal Export & Logistics",
  description: "Reliable coal export solutions with efficient transportation, real-time tracking, and sustainable energy logistics worldwide.",
  keywords: "Coal Export, Coal Logistics, Energy Supply, Bulk Coal Shipping, International Trade, Mining, Sustainable Coal Transport, Coal Distribution",
  authors: [{ name: "Musa Abdullahi", url: "https://github.com/Moosaa95" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Global Coal Export & Logistics",
    description: "Delivering high-quality coal worldwide with advanced logistics, efficient supply chain management, and sustainable practices.",
    url: "https://yourwebsite.com", // Replace with actual URL
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/coal-export.jpg", // Replace with actual OG image URL
        width: 800,
        height: 600,
        alt: "Coal Export and Logistics",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
