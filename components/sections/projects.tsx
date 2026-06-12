"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/data";

const COLOR_MAP = {
  blue:    { dot: "bg-[#10B981]", badge: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20", border: "hover:border-[#10B981]/30", check: "text-[#10B981]", label: "text-[#10B981]" },
  purple:  { dot: "bg-[#8B5CF6]", badge: "bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20", border: "hover:border-[#8B5CF6]/30", check: "text-[#8B5CF6]", label: "text-[#8B5CF6]" },
  emerald: { dot: "bg-[#10B981]", badge: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20", border: "hover:border-[#10B981]/30", check: "text-[#10B981]", label: "text-[#10B981]" },
  orange:  { dot: "bg-[#F97316]", badge: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20", border: "hover:border-[#F97316]/30", check: "text-[#F97316]", label: "text-[#F97316]" },
  cyan:    { dot: "bg-[#06B6D4]", badge: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20", border: "hover:border-[#06B6D4]/30", check: "text-[#06B6D4]", label: "text-[#06B6D4]" },
  yellow:  { dot: "bg-[#EAB308]", badge: "bg-[#EAB308]/10 text-[#EAB308] border-[#EAB308]/20", border: "hover:border-[#EAB308]/30", check: "text-[#EAB308]", label: "text-[#EAB308]" },
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
            <p className="text-sm font-mono text-[#10B981] mb-5 tracking-widest uppercase">
              Featured Projects
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Production Systems <span className="gradient-text-blue">I&apos;ve Built</span>
            </h2>
          </div>
          <p className="text-white/40 text-base max-w-xs md:text-right">
            Real platforms solving real problems — click any card for architecture details.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                className={`group relative rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 overflow-hidden ${colors.border} cursor-pointer`}
                onClick={() => setExpanded(isExpanded ? null : project.id)}
              >
                {/* Color accent */}
                <div className={`absolute top-0 left-0 bottom-0 w-0.5 ${colors.dot}`} />

                <div className="p-7">
                  {/* Tags */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className={`text-xs px-2.5 py-1 rounded-full border font-medium ${colors.badge}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.featured && (
                      <span className="text-xs text-white/25 font-mono">Featured</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/40 mb-4 font-medium">{project.tagline}</p>

                  {/* Problem */}
                  <p className="text-base text-white/50 leading-relaxed mb-5 line-clamp-3">
                    {project.problem}
                  </p>

                  {/* Expanded */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/5 pt-5 mb-5">
                          <p className="text-sm font-semibold text-white/60 mb-2">Solution</p>
                          <p className="text-sm text-white/45 leading-relaxed mb-5">
                            {project.solution}
                          </p>

                          <p className="text-sm font-semibold text-white/60 mb-2">Tech Stack</p>
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {project.architecture.map((tech) => (
                              <span key={tech} className="text-xs px-2.5 py-1 rounded border border-white/10 text-white/40 bg-white/3 font-mono">
                                {tech}
                              </span>
                            ))}
                          </div>

                          <p className="text-sm font-semibold text-white/60 mb-3">Key Results</p>
                          <ul className="space-y-2">
                            {project.keyResults.map((result) => (
                              <li key={result} className="flex items-start gap-2.5">
                                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${colors.check}`} />
                                <span className="text-sm text-white/50">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <button className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${isExpanded ? colors.label : "text-white/30 hover:text-white/60"}`}>
                      <Layers className="w-3.5 h-3.5" />
                      {isExpanded ? "Hide Details" : "View Architecture"}
                    </button>
                    <a
                      href={`mailto:usman.maqbol.dev@gmail.com?subject=Case Study: ${project.title}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-sm text-white/30 hover:text-white/60 transition-colors"
                    >
                      Case Study
                      <ArrowRight className="w-3.5 h-3.5" />
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
          className="flex justify-center mt-12"
        >
          <a href="https://github.com/usman-maqbool" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-white/10 text-white/60 hover:bg-white/5 hover:text-white bg-transparent gap-2 h-11 px-6 text-base">
              <Code2 className="w-4 h-4" />
              More on GitHub
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
