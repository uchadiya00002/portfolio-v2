"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { experiences, education } from "@/data/portfolio-data";
import { Briefcase, GraduationCap, ChevronRight } from "lucide-react";

export function Experience() {
  return (
    <SectionWrapper id="experience" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary mb-2 tracking-wider uppercase"
          >
            Career Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Work{" "}
            <span className="gradient-text">Experience</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent lg:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap size={24} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <Badge variant="glass" className="mb-3">
                  {edu.period}
                </Badge>
                <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-muted-foreground text-sm mt-1">
                  {edu.institution}
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function ExperienceCard({
  experience,
  index,
  isLeft,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isLeft: boolean;
}) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col lg:flex-row gap-8 ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 -translate-x-1.5 lg:-translate-x-1.5 top-8 z-10" />

      {/* Empty space for the other side */}
      <div className="hidden lg:block lg:w-1/2" />

      {/* Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? 30 : -30,
        }}
        animate={
          inView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: isLeft ? 30 : -30 }
        }
        transition={{ duration: 0.5, delay: 0.1 }}
        className="ml-12 lg:ml-0 lg:w-1/2"
      >
        <div className="glass rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-300 group">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <Badge variant="glass" className="mb-3">
                {experience.period}
              </Badge>
              <div className="flex items-center gap-2 mb-1">
                <Briefcase size={16} className="text-primary" />
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {experience.role}
                </h3>
              </div>
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground font-medium hover:text-primary transition-colors inline-block"
                >
                  {experience.company}
                </a>
              ) : (
                <p className="text-muted-foreground font-medium">
                  {experience.company}
                </p>
              )}
              {experience.project && (
                <div className="flex items-center gap-2 mt-1">
                  {experience.clientUrl ? (
                    <a
                      href={experience.clientUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary/80 hover:text-primary transition-colors"
                    >
                      {experience.project}
                    </a>
                  ) : (
                    <p className="text-sm text-primary/80">
                      {experience.project}
                    </p>
                  )}
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                {experience.location}
              </p>
            </div>

            {/* Company logos */}
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              {experience.secondaryLogo && (
                <div className="relative w-20 h-8">
                  <Image
                    src={experience.secondaryLogo}
                    alt="Company logo"
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
              )}
              {experience.logo && (
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-border/50">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    fill
                    className="object-contain p-1"
                    sizes="64px"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-2 mb-5">
            {experience.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <ChevronRight
                  size={14}
                  className="text-primary mt-1 flex-shrink-0"
                />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {experience.techStack.map((tech, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="text-xs hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
