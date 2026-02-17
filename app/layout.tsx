import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollToTopOnMount } from "@/components/ScrollToTopOnMount";
import { HomeButton } from "@/components/HomeButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "CHAKRAVYUHA 2026 | State Level 24-Hour Innovation Sprint",
  description: "Join CHAKRAVYUHA 2026 - A State Level 24-Hour Innovation Sprint organized by JJ College of Engineering and Technology (Autonomous), Trichy. Build innovative solutions and win exciting prizes.",
  keywords: ["hackathon", "innovation", "JJCET", "CHAKRAVYUHA", "coding competition", "technology"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-[#070B14] text-white antialiased">
        <ScrollToTopOnMount />
        <MotionProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <HomeButton />
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
