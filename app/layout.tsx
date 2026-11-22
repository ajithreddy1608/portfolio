import type { Metadata, Viewport } from "next";
import "./globals.css";
import LiquidBackground from "@/components/LiquidBackground";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export const viewport: Viewport = {
  themeColor: "#070a12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ajithreddy.dev"),
  title: "Katta Ajith Reddy | Developer | AI & ML Enthusiast | Founder",
  description:
    "Personal portfolio of Katta Ajith Reddy — Computer Science student specializing in Artificial Intelligence and Machine Learning at Aurora Deemed University. Founder of AS – Everything Starts Here & CAVORA DIGITAL.",
  keywords: [
    "Katta Ajith Reddy",
    "Ajith Reddy",
    "Ajith Reddy Katta",
    "Software Developer",
    "AI Enthusiast",
    "Machine Learning",
    "AS Everything Starts Here",
    "CAVORA DIGITAL",
    "Aurora Deemed University",
    "Next.js Portfolio",
    "TypeScript Developer",
  ],
  authors: [{ name: "Katta Ajith Reddy", url: "https://github.com/ajithreddy1608" }],
  creator: "Katta Ajith Reddy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/ajithreddy1608",
    title: "Katta Ajith Reddy | Developer | AI & ML Enthusiast | Founder",
    description:
      "Hi, I'm Katta Ajith Reddy — Computer Science student specializing in AI & ML, software engineering, and founder of AS – Everything Starts Here & CAVORA DIGITAL.",
    siteName: "Katta Ajith Reddy Portfolio",
    images: [
      {
        url: "/ajith.jpg",
        width: 800,
        height: 1000,
        alt: "Katta Ajith Reddy - Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katta Ajith Reddy | Developer | AI & ML Enthusiast | Founder",
    description:
      "Portfolio of Katta Ajith Reddy — Computer Science student specializing in AI & ML, software engineering, and entrepreneurial initiatives.",
    images: ["/ajith.jpg"],
  },
  icons: {
    icon: "/ajith.jpg",
    apple: "/ajith.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans bg-[#070a12] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <CustomCursor />
        <ScrollProgress />
        <LiquidBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
