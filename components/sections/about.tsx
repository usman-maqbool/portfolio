"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Database, GitBranch, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    icon: Server,
    label: "Backend Engineering",
    desc: "Django · FastAPI · Node.js · REST APIs",
    color: "text-[#10B981]",
    bg: "bg-[#10B981]/10",
  },
  {
    icon: Cloud,
    label: "Cloud & DevOps",
    desc: "AWS · Terraform · Docker · CI/CD",
    color: "text-[#06B6D4]",
    bg: "bg-[#06B6D4]/10",
  },
  {
    icon: Database,
    label: "Data Engineering",
    desc: "ELT Pipelines · PostgreSQL · Redis",
    color: "text-[#34D399]",
    bg: "bg-[#34D399]/10",
  },
  {
    icon: GitBranch,
    label: "System Design",
    desc: "Microservices · Event-Driven · WebSockets",
    color: "text-[#8B5CF6]",
    bg: "bg-[#8B5CF6]/10",
  },
];

function ArchitectureDiagram() {
  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto">
      <div className="absolute inset-0 dot-pattern rounded-2xl opacity-50" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-center z-10">
        <Server className="w-8 h-8 text-[#10B981]" />
      </div>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
        <line x1="150" y1="150" x2="60" y2="60" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="150" y1="150" x2="240" y2="60" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="150" y1="150" x2="60" y2="240" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="150" y1="150" x2="240" y2="240" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="150" y1="150" x2="150" y2="40" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="150" y1="150" x2="260" y2="150" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {[
        { top: "5%", left: "15%", label: "API Gateway", color: "border-[#10B981]/30 bg-[#10B981]/5", textColor: "text-[#10B981]" },
        { top: "5%", right: "15%", label: "Auth Service", color: "border-[#8B5CF6]/30 bg-[#8B5CF6]/5", textColor: "text-[#8B5CF6]" },
        { bottom: "5%", left: "15%", label: "PostgreSQL", color: "border-[#10B981]/30 bg-[#10B981]/5", textColor: "text-[#10B981]" },
        { bottom: "5%", right: "15%", label: "Redis Cache", color: "border-[#F59E0B]/30 bg-[#F59E0B]/5", textColor: "text-[#F59E0B]" },
        { top: "calc(50% - 16px)", left: "2%", label: "Queue", color: "border-[#06B6D4]/30 bg-[#06B6D4]/5", textColor: "text-[#06B6D4]" },
        { top: "calc(50% - 16px)", right: "2%", label: "S3", color: "border-[#EF4444]/30 bg-[#EF4444]/5", textColor: "text-[#EF4444]" },
      ].map((node, i) => (
        <motion.div
          key={i}
          className={`absolute px-2.5 py-1.5 rounded-lg border ${node.color} text-center`}
          style={{
            top: node.top,
            bottom: "bottom" in node ? node.bottom : undefined,
            left: "left" in node ? node.left : undefined,
            right: "right" in node ? node.right : undefined,
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
        >
          <span className={`text-xs font-mono font-medium ${node.textColor}`}>{node.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-mono text-[#10B981] mb-5 tracking-widest uppercase">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Engineering systems that
              <span className="gradient-text-blue"> scale and last.</span>
            </h2>
            <div className="space-y-5 text-white/60 leading-relaxed">
              <p className="text-lg">
                Senior Software Engineer with{" "}
                <span className="text-white font-semibold">6+ years of experience</span> specializing in
                back-end development, DevOps, and data engineering — based in Lahore, Pakistan,
                working with international clients worldwide.
              </p>
              <p className="text-lg">
                I build and maintain{" "}
                <span className="text-white font-semibold">end-to-end ELT pipelines, distributed systems,
                and microservices architectures.</span> My core stack is Python (Django, FastAPI)
                and Node.js, backed by strong expertise in AWS and Terraform.
              </p>
              <p className="text-lg">
                From enterprise IoT infrastructure for US clients, to cross-platform exam monitoring
                systems, to smart home cloud platforms — I&apos;ve shipped production systems across
                verticals. Currently leading development at{" "}
                <span className="text-white font-semibold">Djaneicast</span> while taking on select
                freelance engagements.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className={`w-9 h-9 rounded-lg ${pillar.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                    <pillar.icon className={`w-4 h-4 ${pillar.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90">{pillar.label}</p>
                    <p className="text-xs text-white/35 mt-0.5">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 text-[#10B981] text-base font-semibold hover:gap-3 transition-all"
            >
              Let&apos;s work together
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Architecture diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="absolute top-4 left-4 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <p className="text-center text-xs font-mono text-white/20 mb-6 mt-2">
                system_architecture.diagram
              </p>
              <ArchitectureDiagram />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
