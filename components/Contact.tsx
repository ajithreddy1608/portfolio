"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject";
    if (!formData.message.trim()) errs.message = "Please write a message";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);

    // Prepare direct mailto URL
    const mailtoUrl = `mailto:kattaajithreddy08@gmail.com?subject=${encodeURIComponent(
      `[Portfolio] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Hi Ajith,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;

    // Open mail client
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kattaajithreddy08@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Section 09 // Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Have an opportunity? Let&apos;s connect.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Whether for internships, software development, AI/ML roles, or
            technical collaboration — feel free to reach out.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="liquid-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-500/15 border border-blue-400/20 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">
                    Direct Email
                  </div>
                  <a
                    href="mailto:kattaajithreddy08@gmail.com"
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                  >
                    kattaajithreddy08@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="liquid-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/15 border border-cyan-400/20 text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">
                    Phone / WhatsApp
                  </div>
                  <a
                    href="tel:+918555064188"
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    +91 8555064188
                  </a>
                </div>
              </div>
              <a
                href="tel:+918555064188"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-cyan-400 transition-colors"
              >
                Call
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/ajit-reddy-k"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-card p-5 flex items-center justify-between group hover:border-blue-400/40 transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">
                    LinkedIn Profile
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    linkedin.com/in/ajit-reddy-k
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/ajithreddy1608"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-card p-5 flex items-center justify-between group hover:border-white/30 transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-slate-200 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">
                    GitHub Profile
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    github.com/ajithreddy1608
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white" />
            </a>

            {/* Location Card */}
            <div className="liquid-card p-5 flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">
                  Location
                </div>
                <div className="text-sm font-semibold text-white">
                  Andhra Pradesh, India
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 liquid-card p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in the form below to initiate an email conversation directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-cyan-400/60 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-cyan-400/60 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Software Engineering Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-cyan-400/60 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
                />
                {errors.subject && (
                  <span className="text-[11px] text-red-400 mt-1 block">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about the role, project, or collaboration..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-cyan-400/60 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    Thank you! Your email client has been opened with your message. You can also email directly to kattaajithreddy08@gmail.com.
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Message via Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
