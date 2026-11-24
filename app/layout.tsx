import type { Metadata, Viewport } from "next";
import "./globals.css";
import LiquidBackground from "@/components/LiquidBackground";
import ScrollProgress from "@/components/ScrollProgress";

export const viewport: Viewport = {
  themeColor: "#f7f6f2",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ajithreddy.dev"),
  title: "Katta Ajith Reddy | Developer | AI & ML Enthusiast | Founder",
  description:
    "Personal portfolio of Katta Ajith Reddy — software developer and Computer Science student specializing in Artificial Intelligence and Machine Learning. Founder of AS – Everything Starts Here and AS-WORKS.",
  keywords: [
    "Katta Ajith Reddy",
    "Ajith Reddy",
    "Ajith Reddy Katta",
    "Software Developer",
    "AI Enthusiast",
    "Machine Learning",
    "AS Everything Starts Here",
    "AS-WORKS",
    "Digital Services",
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
      "Hi, I'm Katta Ajith Reddy — software developer and Computer Science student specializing in AI & ML, and founder of AS – Everything Starts Here and AS-WORKS.",
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
    <html lang="en" className="light-theme scroll-smooth">
      <body className="font-sans bg-[#f7f6f2] text-stone-800 antialiased">
        <ScrollProgress />
        <LiquidBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
