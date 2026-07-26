"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { skills } from "@/data/portfolio-data";
import { Code2, Server, Cloud, Wrench } from "lucide-react";
import { getSkillIcon } from "@/lib/skill-icons";

const categories = [
  {
    key: "frontend" as const,
    label: "Frontend",
    icon: <Code2 size={20} />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
  },
  {
    key: "backend" as const,
    label: "Backend",
    icon: <Server size={20} />,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
  },
  {
    key: "testing" as const,
    label: "Testing",
    icon: <Code2 size={20} />,
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10",
    textColor: "text-teal-500",
  },
  {
    key: "aiTools" as const,
    label: "AI & Productivity",
    icon: <Wrench size={20} />,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
  },
  {
    key: "devops" as const,
    label: "DevOps",
    icon: <Cloud size={20} />,
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-500/10",
    textColor: "text-sky-500",
  },
  {
    key: "tools" as const,
    label: "Tools",
    icon: <Wrench size={20} />,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-500",
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary mb-2 tracking-wider uppercase"
          >
            Technical Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, catIndex) => {
            const categorySkills = skills[category.key];
            if (!categorySkills || categorySkills.length === 0) return null;
            return (
              <SkillCategory
                key={category.key}
                category={category}
                skills={categorySkills}
                index={catIndex}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

function SkillCategory({
  category,
  skills,
  index,
}: {
  category: (typeof categories)[0];
  skills: { name: string; level: number }[];
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 lg:p-8 hover:border-primary/20 transition-all duration-300"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2.5 rounded-xl ${category.bgColor} ${category.textColor}`}>
          {category.icon}
        </div>
        <h3 className="text-lg font-bold">{category.label}</h3>
        <span className="text-xs text-muted-foreground ml-auto">
          {skills.length} skills
        </span>
      </div>

      {/* Skills list */}
      <div className="space-y-4">
        {skills.map((skill, idx) => {
          const IconComponent = getSkillIcon(skill.name);
          return (
            <div key={idx}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <IconComponent size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + idx * 0.05,
                    ease: "easeOut",
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
