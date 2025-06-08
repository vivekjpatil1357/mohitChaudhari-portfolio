import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FloatingThemeButton from "@/components/FloatingThemeButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohit Chaudhari - Marketing Analytics Professional",
  description: "Marketing Analytics Professional with expertise in data-driven marketing strategies, market research, and digital marketing campaigns at Outlier AI and TVS Motors.",
  keywords: ["marketing analytics", "digital marketing", "market research", "TVS Motors", "Outlier AI", "data-driven marketing", "MBA", "portfolio"],
  authors: [{ name: "Mohit Chaudhari" }],
  creator: "Mohit Chaudhari",
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-black dark:text-white`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTopButton />
          <FloatingThemeButton />
        </div>
      </body>
    </html>
  );
}
