"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, projectsData } from "@/data/portfolio-data";
import {
  ExternalLink,
  Github,
  Lightbulb,
  Target,
  TrendingUp,
  X,
  ArrowRight,
} from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <SectionWrapper id="projects" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary mb-2 tracking-wider uppercase"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            {projectsData.description}
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <div
                  className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/50 to-teal-500/10">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="text-4xl mb-2">🚀</div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {project.title}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 backdrop-blur-sm">
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Category */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="glass">{project.category}</Badge>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {project.solution}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.techStack.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <button className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        View Case Study
                        <ArrowRight size={14} />
                      </button>
                      <div className="flex gap-2">
                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {project.live && project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more/less */}
        {projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : `View All ${projects.length} Projects`}
            </Button>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative glass-strong rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary z-10 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative h-56 sm:h-64 bg-gradient-to-br from-primary/10 via-secondary/50 to-teal-500/10">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-2xl"
                sizes="640px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center rounded-t-2xl">
              <div className="text-center p-6">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-lg font-semibold text-foreground">
                  {project.title}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 -mt-12 relative">
          <Badge className="mb-3">{project.category}</Badge>
          <h3 className="text-2xl font-bold mb-6">{project.title}</h3>

          {/* Case Study sections */}
          <div className="space-y-6">
            <CaseStudyBlock
              icon={<Lightbulb size={18} />}
              title="Problem"
              content={project.problem}
            />
            <CaseStudyBlock
              icon={<Target size={18} />}
              title="Solution"
              content={project.solution}
            />
            <CaseStudyBlock
              icon={<TrendingUp size={18} />}
              title="Business Impact"
              content={project.impact}
            />
          </div>

          {/* Tech Stack */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm font-medium mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <Badge key={idx} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-6">
            {project.github && project.github !== "#" && (
              <Button variant="outline" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} className="mr-2" />
                  Source Code
                </a>
              </Button>
            )}
            {project.live && project.live !== "#" && (
              <Button asChild>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CaseStudyBlock({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="p-2 rounded-lg bg-primary/10 text-primary h-fit flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}
