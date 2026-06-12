"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-sm font-mono text-[#3B82F6] mb-5 tracking-widest uppercase">
              Professional Experience
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              6+ Years of <span className="gradient-text-blue">Shipping</span>
            </h2>
          </div>
          <p className="text-white/40 text-base max-w-xs md:text-right">
            From junior developer to senior engineer — building systems that scale with the business.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6]/40 via-white/5 to-transparent hidden md:block" />

          <div className="space-y-5">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-7 w-16 items-center justify-end pr-5">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#3B82F6] bg-[#0B0F19] relative z-10" />
                </div>

                <div className="group p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        {i === 0 && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-semibold">
                            Current
                          </span>
                        )}
                        {i === 1 && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20 font-semibold">
                            Concurrent
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-[#3B82F6] font-semibold">{job.company}</p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
                      <div className="flex items-center gap-2 text-sm text-white/40">
                        <Calendar className="w-3.5 h-3.5" />
                        {job.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/30">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-base text-white/50 leading-relaxed mb-6">{job.description}</p>

                  <div className="grid md:grid-cols-2 gap-2.5 mb-6">
                    {job.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-2.5">
                        <ChevronRight className="w-4 h-4 text-[#3B82F6]/60 mt-0.5 shrink-0" />
                        <span className="text-sm text-white/50">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 rounded border border-white/8 text-white/35 bg-white/3 font-mono">
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
