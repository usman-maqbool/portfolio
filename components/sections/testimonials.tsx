"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

function Avatar({ initials, color }: { initials: string; color: string }) {
  const colorMap: Record<string, string> = {
    SC: "bg-[#3B82F6]/20 text-[#3B82F6] border-[#3B82F6]/30",
    MW: "bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30",
    PP: "bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30",
    DO: "bg-[#F97316]/20 text-[#F97316] border-[#F97316]/30",
  };

  return (
    <div
      className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold shrink-0 ${
        colorMap[color] || "bg-white/10 text-white/60 border-white/10"
      }`}
    >
      {initials}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(16,185,129,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-mono text-[#10B981] mb-4 tracking-widest uppercase">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What <span className="gradient-text-green">Clients Say</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-base">
            Feedback from CTOs, founders, and engineering leaders I&apos;ve worked with.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 w-6 h-6 text-white/5 group-hover:text-white/8 transition-colors" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-sm text-white/55 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <Avatar initials={testimonial.avatar} color={testimonial.avatar} />
                <div>
                  <p className="text-sm font-semibold text-white/90">{testimonial.name}</p>
                  <p className="text-xs text-white/35">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
