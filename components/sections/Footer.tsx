"use client";

import { Sparkles, Globe, ExternalLink, Share2, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: MessageCircle, href: "https://instagram.com", label: "Instagram" },
  { icon: Share2, href: "https://youtube.com", label: "YouTube" },
  { icon: Globe, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: ExternalLink, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-gold-400" />
              <span className="font-heading font-bold text-lg text-white">
                Speak<span className="text-gold-400">Lab</span>
              </span>
            </a>
            <p className="text-dark-400 text-sm leading-relaxed max-w-xs">
              India&apos;s #1 communication training platform. Transforming
              careers through the power of effective communication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About the Workshop", href: "#learn" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQs", href: "#faq" },
                { label: "Register Now", href: "#register" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-dark-400 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Policies
            </h4>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Refund Policy",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-dark-400 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-500/10 hover:border-gold-500/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-dark-400 hover:text-gold-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-xs">
            © {new Date().getFullYear()} SpeakLab. All rights reserved.
          </p>
          <p className="text-dark-500 text-xs">
            Made with ❤️ for ambitious professionals
          </p>
        </div>
      </div>
    </footer>
  );
}
