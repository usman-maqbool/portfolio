"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/data";

const COLOR_MAP = {
  blue: {
    badge: "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20",
    dot: "bg-[#3B82F6]",
    border: "border-l-[#3B82F6]",
    tag: "text-[#3B82F6]",
    glow: "hover:border-[#3B82F6]/30",
  },
  purple: {
    badge: "bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20",
    dot: "bg-[#8B5CF6]",
    border: "border-l-[#8B5CF6]",
    tag: "text-[#8B5CF6]",
    glow: "hover:border-[#8B5CF6]/30",
  },
  emerald: {
    badge: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20",
    dot: "bg-[#10B981]",
    border: "border-l-[#10B981]",
    tag: "text-[#10B981]",
    glow: "hover:border-[#10B981]/30",
  },
  orange: {
    badge: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20",
    dot: "bg-[#F97316]",
    border: "border-l-[#F97316]",
    tag: "text-[#F97316]",
    glow: "hover:border-[#F97316]/30",
  },
  cyan: {
    badge: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20",
    dot: "bg-[#06B6D4]",
    border: "border-l-[#06B6D4]",
    tag: "text-[#06B6D4]",
    glow: "hover:border-[#06B6D4]/30",
  },
  yellow: {
    badge: "bg-[#EAB308]/10 text-[#EAB308] border-[#EAB308]/20",
    dot: "bg-[#EAB308]",
    border: "border-l-[#EAB308]",
    tag: "text-[#EAB308]",
    glow: "hover:border-[#EAB308]/30",
  },
};

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <p className="text-xs font-mono text-[#3B82F6] mb-4 tracking-widest uppercase">
              Featured Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Production Systems <span className="gradient-text-blue">I&apos;ve Built</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs md:text-right">
            Real platforms solving real problems — with architecture breakdowns and measurable results.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => {
            const colors = COLOR_MAP[project.color as keyof typeof COLOR_MAP];
            const isExpanded = expanded === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                layout
                className={`group relative rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 overflow-hidden ${colors.glow} cursor-pointer`}
                onClick={() => setExpanded(isExpanded ? null : project.id)}
              >
                {/* Color accent left border */}
                <div className={`absolute top-0 left-0 bottom-0 w-0.5 ${colors.dot}`} />

                <div className="p-6">
                  {/* Tags row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${colors.badge}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.featured && (
                      <span className="text-[10px] text-white/25 font-mono">Featured</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white mb-1.5">{project.title}</h3>
                  <p className="text-xs text-white/35 mb-4">{project.tagline}</p>

                  {/* Problem */}
                  <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-3">
                    {project.problem}
                  </p>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/5 pt-4 mb-4">
                          <p className="text-xs font-medium text-white/60 mb-2">Solution</p>
                          <p className="text-xs text-white/40 leading-relaxed mb-4">
                            {project.solution}
                          </p>

                          <p className="text-xs font-medium text-white/60 mb-2">Tech Stack</p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.architecture.map((tech) => (
                              <span
                                key={tech}
                                className="text-[10px] px-2 py-0.5 rounded border border-white/8 text-white/35 bg-white/3 font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <p className="text-xs font-medium text-white/60 mb-2">Key Results</p>
                          <ul className="space-y-1">
                            {project.keyResults.map((result) => (
                              <li key={result} className="flex items-start gap-2">
                                <CheckCircle2 className={`w-3 h-3 mt-0.5 shrink-0 ${colors.tag}`} />
                                <span className="text-xs text-white/50">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <button
                      className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                        isExpanded ? colors.tag : "text-white/30 hover:text-white/60"
                      }`}
                    >
                      <Layers className="w-3 h-3" />
                      {isExpanded ? "Hide Details" : "View Architecture"}
                    </button>
                    <a
                      href={`mailto:${encodeURIComponent("usman.maqbol.dev@gmail.com")}?subject=Case Study: ${project.title}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs text-white/30 hover:text-white/60 transition-colors"
                    >
                      Case Study
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mt-10"
        >
          <a href={`https://github.com/usman-maqbool`} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-white/10 text-white/60 hover:bg-white/5 hover:text-white bg-transparent gap-2"
            >
              <Code2 className="w-4 h-4" />
              More on GitHub
              <ArrowRight className="w-3 h-3" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
