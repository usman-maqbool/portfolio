"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Database, Network, Brain } from "lucide-react";
import { EXPERTISE_AREAS } from "@/lib/data";

const ICON_MAP = {
  Server,
  Cloud,
  Database,
  Network,
  Brain,
};

const COLOR_MAP = {
  blue: {
    border: "border-[#3B82F6]/20 hover:border-[#3B82F6]/50",
    bg: "bg-[#3B82F6]/8",
    iconBg: "bg-[#3B82F6]/10",
    iconColor: "text-[#3B82F6]",
    bar: "bg-[#3B82F6]",
    badge: "bg-[#3B82F6]/10 text-[#3B82F6]/80 border-[#3B82F6]/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]",
  },
  cyan: {
    border: "border-[#06B6D4]/20 hover:border-[#06B6D4]/50",
    bg: "bg-[#06B6D4]/8",
    iconBg: "bg-[#06B6D4]/10",
    iconColor: "text-[#06B6D4]",
    bar: "bg-[#06B6D4]",
    badge: "bg-[#06B6D4]/10 text-[#06B6D4]/80 border-[#06B6D4]/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]",
  },
  emerald: {
    border: "border-[#10B981]/20 hover:border-[#10B981]/50",
    bg: "bg-[#10B981]/8",
    iconBg: "bg-[#10B981]/10",
    iconColor: "text-[#10B981]",
    bar: "bg-[#10B981]",
    badge: "bg-[#10B981]/10 text-[#10B981]/80 border-[#10B981]/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]",
  },
  purple: {
    border: "border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50",
    bg: "bg-[#8B5CF6]/8",
    iconBg: "bg-[#8B5CF6]/10",
    iconColor: "text-[#8B5CF6]",
    bar: "bg-[#8B5CF6]",
    badge: "bg-[#8B5CF6]/10 text-[#8B5CF6]/80 border-[#8B5CF6]/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
  },
  rose: {
    border: "border-[#F43F5E]/20 hover:border-[#F43F5E]/50",
    bg: "bg-[#F43F5E]/8",
    iconBg: "bg-[#F43F5E]/10",
    iconColor: "text-[#F43F5E]",
    bar: "bg-[#F43F5E]",
    badge: "bg-[#F43F5E]/10 text-[#F43F5E]/80 border-[#F43F5E]/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.12)]",
  },
};

export function Expertise() {
  return (
    <section id="expertise" className="py-32 relative">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

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
            Technical Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Full-Stack Engineering <span className="gradient-text-blue">Depth</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            From infrastructure to application layer — end-to-end ownership of complex systems.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXPERTISE_AREAS.map((area, i) => {
            const colors = COLOR_MAP[area.color as keyof typeof COLOR_MAP];
            const Icon = ICON_MAP[area.icon as keyof typeof ICON_MAP];

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative p-6 rounded-2xl bg-white/[0.02] border transition-all duration-300 ${colors.border} ${colors.glow}`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${colors.iconColor}`} />
                </div>

                {/* Title + desc */}
                <h3 className="text-base font-semibold text-white mb-2">{area.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-4">{area.description}</p>

                {/* Experience bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs text-white/30">Proficiency</span>
                    <span className={`text-xs font-mono font-medium ${colors.iconColor}`}>
                      {area.level}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${colors.bar} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${colors.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Final "more" card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-[#3B82F6]/5 to-[#10B981]/5 border border-white/5 flex flex-col items-center justify-center text-center gap-3"
          >
            <div className="text-4xl font-bold gradient-text-multi">30+</div>
            <p className="text-sm text-white/50">Technologies in production use</p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {["GraphQL", "Kafka", "Airflow", "dbt", "ClickHouse", "pgvector"].map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/30">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
