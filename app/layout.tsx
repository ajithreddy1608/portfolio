import type { Metadata, Viewport } from "next";
import "./globals.css";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import ScrollProgress from "@/components/ScrollProgress";

export const viewport: Viewport = {
  themeColor: "#030712",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ajithreddy.dev"),
  title: "Ajith Reddy | Developer | AI & ML Enthusiast | Technology Explorer",
  description:
    "Personal portfolio of Ajith Reddy Katta — Computer Science student specializing in Artificial Intelligence and Machine Learning at Aurora Deemed University. Exploring full-stack engineering, deep learning, and intelligent systems.",
  keywords: [
    "Ajith Reddy",
    "Ajith Reddy Katta",
    "Software Developer",
    "AI Enthusiast",
    "Machine Learning",
    "Aurora Deemed University",
    "CSE-AIML",
    "RedConnect",
    "Next.js Portfolio",
    "TypeScript Developer",
  ],
  authors: [{ name: "Ajith Reddy Katta", url: "https://github.com/ajithreddy1608" }],
  creator: "Ajith Reddy Katta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/ajithreddy1608",
    title: "Ajith Reddy | Developer & AI/ML Enthusiast",
    description:
      "Hi, I'm Ajith Reddy — Computer Science student specializing in Artificial Intelligence and Machine Learning, passionate about technology, software development, and building meaningful digital products.",
    siteName: "Ajith Reddy Portfolio",
    images: [
      {
        url: "/ajith.jpg",
        width: 800,
        height: 1000,
        alt: "Ajith Reddy Katta - Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajith Reddy | Developer & AI/ML Enthusiast",
    description:
      "Portfolio of Ajith Reddy Katta — Computer Science student specializing in AI & ML, software engineering, and intelligent systems.",
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
      <body className="font-sans bg-[#030712] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <ScrollProgress />
        <BackgroundBlobs />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
