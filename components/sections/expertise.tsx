"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Database, Network, Brain } from "lucide-react";
import { EXPERTISE_AREAS } from "@/lib/data";

const ICON_MAP = { Server, Cloud, Database, Network, Brain };

const COLOR_MAP = {
  blue: {
    border: "border-[#3B82F6]/20 hover:border-[#3B82F6]/50",
    iconBg: "bg-[#3B82F6]/10",
    iconColor: "text-[#3B82F6]",
    bar: "bg-[#3B82F6]",
    badge: "bg-[#3B82F6]/10 text-[#3B82F6]/80 border-[#3B82F6]/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]",
    num: "text-[#3B82F6]/20",
  },
  cyan: {
    border: "border-[#06B6D4]/20 hover:border-[#06B6D4]/50",
    iconBg: "bg-[#06B6D4]/10",
    iconColor: "text-[#06B6D4]",
    bar: "bg-[#06B6D4]",
    badge: "bg-[#06B6D4]/10 text-[#06B6D4]/80 border-[#06B6D4]/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]",
    num: "text-[#06B6D4]/20",
  },
  emerald: {
    border: "border-[#10B981]/20 hover:border-[#10B981]/50",
    iconBg: "bg-[#10B981]/10",
    iconColor: "text-[#10B981]",
    bar: "bg-[#10B981]",
    badge: "bg-[#10B981]/10 text-[#10B981]/80 border-[#10B981]/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]",
    num: "text-[#10B981]/20",
  },
  purple: {
    border: "border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50",
    iconBg: "bg-[#8B5CF6]/10",
    iconColor: "text-[#8B5CF6]",
    bar: "bg-[#8B5CF6]",
    badge: "bg-[#8B5CF6]/10 text-[#8B5CF6]/80 border-[#8B5CF6]/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]",
    num: "text-[#8B5CF6]/20",
  },
  rose: {
    border: "border-[#F43F5E]/20 hover:border-[#F43F5E]/50",
    iconBg: "bg-[#F43F5E]/10",
    iconColor: "text-[#F43F5E]",
    bar: "bg-[#F43F5E]",
    badge: "bg-[#F43F5E]/10 text-[#F43F5E]/80 border-[#F43F5E]/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(244,63,94,0.1)]",
    num: "text-[#F43F5E]/20",
  },
};

export function Expertise() {
  return (
    <section id="expertise" className="py-32 relative">
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
          <p className="text-sm font-mono text-[#3B82F6] mb-5 tracking-widest uppercase">
            Technical Expertise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            Full-Stack Engineering <span className="gradient-text-blue">Depth</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-lg">
            From infrastructure to application layer — end-to-end ownership of complex systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                className={`group relative p-7 rounded-2xl bg-white/[0.02] border transition-all duration-300 ${colors.border} ${colors.glow}`}
              >
                {/* Number watermark */}
                <span className={`absolute top-5 right-6 text-5xl font-bold ${colors.num} select-none`}>
                  0{i + 1}
                </span>

                <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-base text-white/45 leading-relaxed mb-5">{area.description}</p>

                {/* Proficiency bar */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/30">Proficiency</span>
                    <span className={`text-sm font-mono font-semibold ${colors.iconColor}`}>
                      {area.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${colors.bar} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium ${colors.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* More card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-7 rounded-2xl bg-gradient-to-br from-[#3B82F6]/5 to-[#10B981]/5 border border-white/5 flex flex-col items-center justify-center text-center gap-4"
          >
            <div className="text-5xl font-bold gradient-text-multi">30+</div>
            <p className="text-base text-white/50">Technologies in production use</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["GraphQL", "Kafka", "Celery", "dbt", "ClickHouse", "pgvector"].map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/30">
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
