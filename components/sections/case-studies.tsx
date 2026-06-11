"use client";

import { motion } from "framer-motion";
import { Layers, GitBranch, BarChart3, Brain, CheckCircle2, ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";

const ICON_MAP = {
  Layers,
  GitBranch,
  BarChart3,
  Brain,
};

const COLOR_MAP = {
  blue: {
    iconBg: "bg-[#3B82F6]/10",
    iconColor: "text-[#3B82F6]",
    border: "border-[#3B82F6]/20 hover:border-[#3B82F6]/40",
    accent: "text-[#3B82F6]",
    tag: "bg-[#3B82F6]/8 text-[#3B82F6]/70 border-[#3B82F6]/15",
    num: "text-[#3B82F6]/30",
  },
  purple: {
    iconBg: "bg-[#8B5CF6]/10",
    iconColor: "text-[#8B5CF6]",
    border: "border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40",
    accent: "text-[#8B5CF6]",
    tag: "bg-[#8B5CF6]/8 text-[#8B5CF6]/70 border-[#8B5CF6]/15",
    num: "text-[#8B5CF6]/30",
  },
  emerald: {
    iconBg: "bg-[#10B981]/10",
    iconColor: "text-[#10B981]",
    border: "border-[#10B981]/20 hover:border-[#10B981]/40",
    accent: "text-[#10B981]",
    tag: "bg-[#10B981]/8 text-[#10B981]/70 border-[#10B981]/15",
    num: "text-[#10B981]/30",
  },
  rose: {
    iconBg: "bg-[#F43F5E]/10",
    iconColor: "text-[#F43F5E]",
    border: "border-[#F43F5E]/20 hover:border-[#F43F5E]/40",
    accent: "text-[#F43F5E]",
    tag: "bg-[#F43F5E]/8 text-[#F43F5E]/70 border-[#F43F5E]/15",
    num: "text-[#F43F5E]/30",
  },
};

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-[#3B82F6] mb-4 tracking-widest uppercase">
            Architecture Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How I Design <span className="gradient-text-blue">Complex Systems</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Deep dives into architectural decisions, trade-offs, and the thinking behind production systems.
          </p>
        </motion.div>

        {/* Case studies grid */}
        <div className="grid md:grid-cols-2 gap-5">
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
                className={`group p-7 rounded-2xl bg-white/[0.02] border transition-all duration-300 cursor-default ${colors.border}`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${colors.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{study.title}</h3>
                      <p className="text-xs text-white/35">{study.subtitle}</p>
                    </div>
                  </div>
                  <span className={`text-4xl font-bold ${colors.num} tabular-nums`}>
                    0{i + 1}
                  </span>
                </div>

                {/* Challenge */}
                <div className="mb-5">
                  <p className="text-xs font-mono font-medium text-white/30 mb-2 uppercase tracking-wide">
                    Challenge
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed">{study.challenge}</p>
                </div>

                {/* System Design */}
                <div className="mb-5">
                  <p className="text-xs font-mono font-medium text-white/30 mb-2 uppercase tracking-wide">
                    System Design
                  </p>
                  <ul className="space-y-1.5">
                    {study.systemDesign.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3 h-3 mt-0.5 shrink-0 ${colors.iconColor} opacity-70`} />
                        <span className="text-xs text-white/45">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Two columns: scalability + cost */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <p className="text-xs font-mono font-medium text-white/30 mb-1.5 uppercase tracking-wide">
                      Scalability
                    </p>
                    <p className="text-xs text-white/40 leading-relaxed">{study.scalabilityStrategy}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono font-medium text-white/30 mb-1.5 uppercase tracking-wide">
                      Cost Optimization
                    </p>
                    <p className="text-xs text-white/40 leading-relaxed">{study.costOptimization}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-white/30 mb-4">
            Want to discuss architecture for your next project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#3B82F6] text-sm font-medium hover:gap-3 transition-all"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
