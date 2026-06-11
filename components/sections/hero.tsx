"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { STATS, SITE_CONFIG } from "@/lib/data";

const TECH_STACK = ["Python", "FastAPI", "AWS", "Terraform", "PostgreSQL", "Docker", "NestJS", "Redis"];

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center gap-1"
    >
      <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
      <span className="text-xs text-white/40 font-medium text-center">{label}</span>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.12) 0%, transparent 70%)"
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F19] to-transparent" />

      {/* Floating architecture nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "15%", left: "8%", size: "w-1.5 h-1.5", delay: 0 },
          { top: "25%", right: "12%", size: "w-1 h-1", delay: 1 },
          { top: "60%", left: "5%", size: "w-2 h-2", delay: 0.5 },
          { top: "70%", right: "8%", size: "w-1.5 h-1.5", delay: 1.5 },
          { top: "40%", left: "15%", size: "w-1 h-1", delay: 2 },
          { top: "45%", right: "15%", size: "w-1 h-1", delay: 0.8 },
        ].map((node, i) => (
          <motion.div
            key={i}
            className={`absolute ${node.size} rounded-full bg-[#3B82F6]/40`}
            style={{ top: node.top, left: "left" in node ? node.left : undefined, right: "right" in node ? node.right : undefined }}
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
            transition={{ duration: 3 + i * 0.5, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Badge
            variant="outline"
            className="border-[#10B981]/40 bg-[#10B981]/5 text-[#10B981] text-xs px-4 py-1.5 font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mr-2 inline-block animate-pulse" />
            Available for new projects
          </Badge>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Building{" "}
          <span className="gradient-text-blue">Scalable Systems,</span>
          <br />
          <span className="text-white/90">Cloud Infrastructure,</span>
          <br />
          <span className="gradient-text-green">and Data Platforms.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Senior Software Engineer with{" "}
          <span className="text-white/80 font-medium">6+ years</span> specializing in back-end
          development, DevOps, and data engineering — building ELT pipelines, distributed
          systems, and microservices for international clients.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          <a href="#projects">
            <Button
              size="lg"
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium px-6 h-11 gap-2"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="/resume.pdf" download>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 text-white/80 hover:bg-white/5 hover:text-white font-medium px-6 h-11 gap-2 bg-transparent"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </a>
          <a href="#contact">
            <Button
              size="lg"
              variant="ghost"
              className="text-white/60 hover:text-white hover:bg-white/5 font-medium px-6 h-11"
            >
              Contact Me
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-12 mb-14"
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-16"
        >
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="text-xs text-white/35 border border-white/8 bg-white/3 px-3 py-1 rounded-full font-mono"
            >
              {tech}
            </span>
          ))}
          <span className="text-xs text-white/25 px-2">& more</span>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors text-xs"
          >
            <Code2 className="w-4 h-4" />
            GitHub
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors text-xs"
          >
            <ExternalLink className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
