"use client";

import { motion } from "framer-motion";
import { Cloud, Brain, BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";

const ICONS = { Cloud, Brain };

const COLOR_MAP: Record<string, { badge: string; icon: string; border: string }> = {
  orange: {
    badge: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20",
    icon: "text-[#F97316]",
    border: "hover:border-[#F97316]/20",
  },
  blue: {
    badge: "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20",
    icon: "text-[#3B82F6]",
    border: "hover:border-[#3B82F6]/20",
  },
};

export function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono text-[#10B981] mb-5 tracking-widest uppercase">
            Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Credentials &amp; <span className="gradient-text-green">Qualifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = ICONS[cert.icon as keyof typeof ICONS] ?? Cloud;
            const colors = COLOR_MAP[cert.color] ?? COLOR_MAP.blue;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 ${colors.border}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-xl bg-white/5 shrink-0 ${colors.icon}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-base font-semibold text-white/90 leading-snug">{cert.name}</h3>
                    </div>
                    <span className={`inline-block text-xs font-mono px-2 py-0.5 rounded-full border mb-3 ${colors.badge}`}>
                      {cert.level}
                    </span>
                    <p className="text-sm text-white/40 mb-1">{cert.provider}</p>
                    <div className="flex items-center gap-1.5 text-xs text-white/30 font-mono">
                      <BadgeCheck className="w-3.5 h-3.5 text-[#10B981]/60" />
                      <span>
                        Issued {cert.issued}
                        {cert.expires ? ` · Expires ${cert.expires}` : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
