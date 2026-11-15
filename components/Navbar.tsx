"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileDown, Sparkles } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Ventures", href: "#entrepreneurship" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section based on scroll position
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl liquid-glass-nav rounded-2xl px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 ${
          scrolled ? "shadow-2xl border-white/15" : "border-white/10"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-2.5 text-slate-100 font-semibold tracking-tight transition-all duration-200"
          >
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform">
              <span className="text-white text-xs font-bold font-mono">AR</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                Ajith Reddy
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider -mt-0.5">
                PORTFOLIO
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-2 py-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/60 to-cyan-600/60 border border-blue-400/40 shadow-[0_0_12px_rgba(59,130,246,0.35)] -z-10" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/Ajith-Reddy-Resume.pdf"
              download="Ajith-Reddy-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-blue-400/40 rounded-xl transition-all duration-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-200 hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/[0.08] flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-1.5 mb-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-2 text-xs font-medium rounded-xl transition-colors ${
                      isActive
                        ? "bg-blue-600/30 text-white border border-blue-500/40"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="flex gap-2 pt-2 border-t border-white/[0.06]">
              <a
                href="/Ajith-Reddy-Resume.pdf"
                download="Ajith-Reddy-Resume.pdf"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-slate-200 bg-white/[0.06] rounded-xl border border-white/[0.1]"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Connect
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
