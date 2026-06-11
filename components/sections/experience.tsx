"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight, CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
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
              Professional Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              6+ Years of <span className="gradient-text-blue">Shipping</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs md:text-right">
            From individual contributor to technical lead — building systems that scale with the business.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6]/40 via-white/5 to-transparent hidden md:block" />

          <div className="space-y-4">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-16 items-center justify-end pr-5">
                  <div className="w-3 h-3 rounded-full border-2 border-[#3B82F6] bg-[#0B0F19] relative z-10" />
                </div>

                {/* Card */}
                <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-white">{job.role}</h3>
                        {i === 0 && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#3B82F6] font-medium">{job.company}</p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-white/35">
                        <Calendar className="w-3 h-3" />
                        {job.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-white/25">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-white/45 leading-relaxed mb-5">{job.description}</p>

                  {/* Achievements */}
                  <div className="grid md:grid-cols-2 gap-2 mb-5">
                    {job.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-2">
                        <ChevronRight className="w-3 h-3 text-[#3B82F6]/60 mt-0.5 shrink-0" />
                        <span className="text-xs text-white/45">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 rounded border border-white/8 text-white/30 bg-white/3 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
