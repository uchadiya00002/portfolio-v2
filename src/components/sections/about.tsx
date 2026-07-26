"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { aboutData, personalInfo } from "@/data/portfolio-data";
import { MapPin, Mail, Phone, Globe, CheckCircle2 } from "lucide-react";

export function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <SectionWrapper id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary mb-2 tracking-wider uppercase"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Know Me{" "}
            <span className="gradient-text">Better</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Bio */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                I&apos;m{" "}
                <span className="text-primary">{personalInfo.name}</span>, a
                passionate{" "}
                <span className="gradient-text">{personalInfo.title}</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                {aboutData.summary}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {aboutData.description}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-3 pt-4"
            >
              {aboutData.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors"
                >
                  <CheckCircle2
                    size={18}
                    className="text-primary flex-shrink-0"
                  />
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </motion.div>

            {/* Client logos */}
            {aboutData.clients.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-6"
              >
                <p className="text-sm text-muted-foreground mb-3 font-medium">
                  Trusted by global enterprises:
                </p>
                <div className="flex flex-wrap gap-2">
                  {aboutData.clients.map((client, index) => (
                    <Badge
                      key={index}
                      variant="glass"
                      className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
                    >
                      {client}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6 lg:p-8 space-y-5 sticky top-24">
              <h4 className="text-lg font-semibold border-b border-border pb-3">
                Quick Info
              </h4>

              <div className="space-y-4">
                <InfoItem
                  icon={<MapPin size={18} />}
                  label="Location"
                  value="India"
                />
                <InfoItem
                  icon={<Mail size={18} />}
                  label="Email"
                  value={personalInfo.email}
                  href={`mailto:${personalInfo.email}`}
                />
                <InfoItem
                  icon={<Phone size={18} />}
                  label="Phone"
                  value={personalInfo.phone}
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                />
                <InfoItem
                  icon={<Globe size={18} />}
                  label="Website"
                  value={personalInfo.website}
                  href={`https://${personalInfo.website}`}
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-3xl font-bold text-primary">4+</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Years Experience
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-3xl font-bold text-primary">100K+</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    App Downloads
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-sm font-medium hover:text-primary transition-colors break-all"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}
