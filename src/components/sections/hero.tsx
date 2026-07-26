"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { heroData, personalInfo } from "@/data/portfolio-data";
import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Instagram,
} from "lucide-react";

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

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/15 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">
                  {personalInfo.availability}
                </span>
              </div>
              <p className="text-xs text-muted-foreground/80">
                {personalInfo.locationDetail}
              </p>
            </motion.div>

            <RotatingHeading />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed"
            >
              {heroData.subtext}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm text-primary/90 max-w-xl mb-8 leading-relaxed italic"
            >
              {personalInfo.freelancing}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button
                size="lg"
                variant="glow"
                onClick={() => handleScroll("#projects")}
                className="group"
              >
                View Projects
                <ExternalLink
                  size={18}
                  className="ml-2 group-hover:translate-x-0.5 transition-transform"
                />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={personalInfo.resumeUrl} download>
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => handleScroll("#contact")}
                className="group"
              >
                <Mail
                  size={18}
                  className="mr-2 group-hover:scale-110 transition-transform"
                />
                Contact Me
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground">
                {heroData.connectLabel}
              </span>
              <div className="flex gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
                >
                  <XLogo size={20} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Profile Image + Stats */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-teal-500/30 rounded-3xl blur-3xl scale-110" />

              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-border/50 shadow-2xl">
                <Image
                  src="/images/official-avinash-uchadiya.png"
                  alt="Avinash Uchadiya"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-4 sm:-left-8 top-8 glass rounded-xl px-4 py-2.5 shadow-lg"
              >
                <p className="text-sm font-semibold text-foreground">
                  {heroData.badge1.value}
                </p>
                <p className="text-xs text-muted-foreground">
                  {heroData.badge1.label}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -right-4 sm:-right-8 bottom-8 glass rounded-xl px-4 py-2.5 shadow-lg"
              >
                <p className="text-sm font-semibold text-foreground">
                  {heroData.badge2.value}
                </p>
                <p className="text-xs text-muted-foreground">
                  {heroData.badge2.label}
                </p>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-4 gap-4 mt-8 w-full max-w-md"
            >
              {heroData.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Rotating Keywords Animation Component
function RotatingHeading() {
  const keywords = [
    "Scalable Solutions",
    "High Performance",
    "Enterprise SaaS",
    "Production-Grade App",
    "AI-Powered Systems",
    "Modern Web Apps",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [keywords.length]);

  return (
    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
      <span className="gradient-text">Full-Stack Developer</span>
      <br className="hidden sm:block" />
      <span className="inline-block">
        Building{" "}
        <span className="relative inline-block min-w-[200px] sm:min-w-[300px] lg:min-w-[400px] text-left">
          <AnimatePresence mode="wait">
            <AnimatedText key={currentIndex} text={keywords[currentIndex]} />
          </AnimatePresence>
        </span>
      </span>
    </h1>
  );
}

// Animated text component with fade and slide effect
function AnimatedText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <motion.span
      key={text}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="inline-block"
    >
      {words.map((word, index) => {
        const isGradient =
          word.toLowerCase().includes("scalable") ||
          word.toLowerCase().includes("ai-powered") ||
          word.toLowerCase().includes("modern") ||
          word.toLowerCase().includes("high-performance") ||
          word.toLowerCase().includes("solutions") ||
          word.toLowerCase().includes("systems") ||
          word.toLowerCase().includes("apps") ||
          word.toLowerCase().includes("platforms");
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className={isGradient ? "gradient-text" : ""}
          >
            {word}
            {index < words.length - 1 && " "}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
