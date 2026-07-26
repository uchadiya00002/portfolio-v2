"use client";

import { personalInfo } from "@/data/portfolio-data";
import { Github, Linkedin, Mail, Heart, ArrowUp, Instagram } from "lucide-react";

// X (Twitter) Logo Component
const XLogo = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">A</span>
              </div>
              <span className="font-semibold">
                Avinash<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Building scalable SaaS & enterprise-grade frontend systems for
              global clients.
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex justify-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
              aria-label="X (Twitter)"
            >
              <XLogo size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Right - Copyright + Back to top */}
          <div className="flex flex-col items-end gap-3">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg glass hover:border-primary/30 text-muted-foreground hover:text-primary transition-all hover:-translate-y-0.5"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
            <p className="text-xs text-muted-foreground text-right">
              &copy; {new Date().getFullYear()} Avinash Uchadiya. Made with{" "}
              <Heart
                size={12}
                className="inline text-red-500 fill-red-500"
              />{" "}
              in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
