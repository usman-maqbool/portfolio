"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

const AVATAR_COLORS: Record<string, string> = {
  SC: "bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30",
  MW: "bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30",
  PP: "bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30",
  DO: "bg-[#F97316]/20 text-[#F97316] border-[#F97316]/30",
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(16,185,129,0.03) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-[#10B981] mb-5 tracking-widest uppercase">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            What <span className="gradient-text-green">Clients Say</span>
          </h2>
          <p className="text-white/45 max-w-md mx-auto text-lg">
            Feedback from CTOs, founders, and engineering leaders I&apos;ve worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/4 group-hover:text-white/7 transition-colors" />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                ))}
              </div>

              <blockquote className="text-base text-white/60 leading-relaxed mb-7">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                <div className={`w-11 h-11 rounded-full border flex items-center justify-center text-sm font-bold shrink-0 ${AVATAR_COLORS[t.avatar] || "bg-white/10 text-white/60 border-white/10"}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-base font-semibold text-white/90">{t.name}</p>
                  <p className="text-sm text-white/40">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
