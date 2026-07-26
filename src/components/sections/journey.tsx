"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { journeyData } from "@/data/portfolio-data";

export function Journey() {
  return (
    <SectionWrapper id="journey" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary mb-2 tracking-wider uppercase"
          >
            My Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3"
          >
            {journeyData.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground italic"
          >
            {journeyData.subtitle}
          </motion.p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent lg:-translate-x-px" />

          <div className="space-y-12 lg:space-y-16">
            {journeyData.sections.map((section, index) => (
              <JourneyCard key={index} section={section} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function JourneyCard({
  section,
  index,
}: {
  section: (typeof journeyData.sections)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col lg:flex-row gap-8 ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50 -translate-x-2 lg:-translate-x-2 top-6 z-10 border-2 border-background" />

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
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="ml-16 lg:ml-0 lg:w-1/2"
      >
        <div className="glass rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-300 group">
          {/* Icon */}
          <div className="text-4xl mb-4">{section.icon}</div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
            {section.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
            {section.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
