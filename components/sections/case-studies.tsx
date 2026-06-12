"use client";

import { motion } from "framer-motion";
import { Layers, GitBranch, BarChart3, Brain, CheckCircle2, ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";

const ICON_MAP = { Layers, GitBranch, BarChart3, Brain };

const COLOR_MAP = {
  blue:    { iconBg: "bg-[#3B82F6]/10", iconColor: "text-[#3B82F6]", border: "border-[#3B82F6]/20 hover:border-[#3B82F6]/40", check: "text-[#3B82F6]", num: "text-[#3B82F6]/15" },
  purple:  { iconBg: "bg-[#8B5CF6]/10", iconColor: "text-[#8B5CF6]", border: "border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40", check: "text-[#8B5CF6]", num: "text-[#8B5CF6]/15" },
  emerald: { iconBg: "bg-[#10B981]/10", iconColor: "text-[#10B981]", border: "border-[#10B981]/20 hover:border-[#10B981]/40", check: "text-[#10B981]", num: "text-[#10B981]/15" },
  rose:    { iconBg: "bg-[#F43F5E]/10", iconColor: "text-[#F43F5E]", border: "border-[#F43F5E]/20 hover:border-[#F43F5E]/40", check: "text-[#F43F5E]", num: "text-[#F43F5E]/15" },
};

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-[#3B82F6] mb-5 tracking-widest uppercase">
            Architecture Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            How I Design <span className="gradient-text-blue">Complex Systems</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-lg">
            Deep dives into architectural decisions, trade-offs, and the thinking behind production systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study, i) => {
            const colors = COLOR_MAP[study.color as keyof typeof COLOR_MAP];
            const Icon = ICON_MAP[study.icon as keyof typeof ICON_MAP];

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`group p-8 rounded-2xl bg-white/[0.02] border transition-all duration-300 ${colors.border}`}
              >
                <div className="flex items-start justify-between gap-4 mb-7">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.title}</h3>
                      <p className="text-sm text-white/40 mt-0.5">{study.subtitle}</p>
                    </div>
                  </div>
                  <span className={`text-5xl font-bold ${colors.num} tabular-nums shrink-0`}>
                    0{i + 1}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-mono font-semibold text-white/30 mb-2 uppercase tracking-widest">Challenge</p>
                  <p className="text-base text-white/55 leading-relaxed">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-mono font-semibold text-white/30 mb-3 uppercase tracking-widest">System Design</p>
                  <ul className="space-y-2">
                    {study.systemDesign.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${colors.iconColor} opacity-70`} />
                        <span className="text-sm text-white/50">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-5 pt-5 border-t border-white/5">
                  <div>
                    <p className="text-xs font-mono font-semibold text-white/30 mb-2 uppercase tracking-widest">Scalability</p>
                    <p className="text-sm text-white/45 leading-relaxed">{study.scalabilityStrategy}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono font-semibold text-white/30 mb-2 uppercase tracking-widest">Cost Optimization</p>
                    <p className="text-sm text-white/45 leading-relaxed">{study.costOptimization}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-base text-white/35 mb-4">Want to discuss architecture for your next project?</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#3B82F6] text-base font-semibold hover:gap-3 transition-all">
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
