import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ParticleStream from "@/components/3d/ParticleStream";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adaptive Engg. Pvt. Ltd. - India's Trusted Renewable Partner",
  description: "Unified Renewable Solutions, PM-KUSUM, and Industrial Automation.",
};

import { SceneProvider } from "@/context/SceneContext";
import SceneController from "@/components/3d/SceneController";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-transparent font-sans`}
      >
        <SceneProvider>
          <SceneController />
          <ParticleStream />
          <Navbar />
          <main className="relative z-10 min-h-screen overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </SceneProvider>
      </body>
    </html>
  );
}
