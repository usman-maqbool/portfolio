"use client";

import { motion } from "framer-motion";
import { Mail, Code2, ExternalLink, Download, ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/data";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    description: "Best for project inquiries",
    color: "text-[#3B82F6]",
    bg: "bg-[#3B82F6]/10",
    border: "hover:border-[#3B82F6]/30",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "usman-maqbool",
    href: SITE_CONFIG.linkedin,
    description: "Professional background",
    color: "text-[#06B6D4]",
    bg: "bg-[#06B6D4]/10",
    border: "hover:border-[#06B6D4]/30",
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "usman-maqbool",
    href: SITE_CONFIG.github,
    description: "Open source work",
    color: "text-[#8B5CF6]",
    bg: "bg-[#8B5CF6]/10",
    border: "hover:border-[#8B5CF6]/30",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59,130,246,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Big CTA headline — Tamal-inspired */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-[#3B82F6] mb-6 tracking-widest uppercase">
            Get In Touch
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
            Let&apos;s Build Something
            <br />
            <span className="gradient-text-blue">Scalable.</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-xl leading-relaxed">
            Whether you need a senior engineer for a complex system, a technical architecture review,
            or want to talk trade-offs — I&apos;m happy to chat.
          </p>
        </motion.div>

        {/* Availability banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-14 p-5 rounded-2xl bg-[#10B981]/5 border border-[#10B981]/15"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-base text-[#10B981] font-semibold">Currently available</span>
          </div>
          <div className="hidden md:block w-px h-5 bg-white/10" />
          <div className="flex items-center gap-2 text-sm text-white/40">
            <MapPin className="w-4 h-4" />
            Lahore, Pakistan · Open to remote
          </div>
          <div className="hidden md:block w-px h-5 bg-white/10" />
          <div className="flex items-center gap-2 text-sm text-white/40">
            <Clock className="w-4 h-4" />
            Responds within 2 hours
          </div>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-5 mb-12"
        >
          {CONTACT_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className={`group flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 ${link.border}`}
            >
              <div className={`w-12 h-12 rounded-xl ${link.bg} flex items-center justify-center`}>
                <link.icon className={`w-5 h-5 ${link.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-white/40 mb-1">{link.label}</p>
                <p className="text-base font-semibold text-white/80 group-hover:text-white transition-colors truncate">
                  {link.value}
                </p>
                <p className="text-sm text-white/30 mt-1">{link.description}</p>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-white/30 group-hover:text-white/55 transition-colors mt-auto font-medium">
                Get in touch
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Resume */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-white/30 mb-4">Prefer a formal introduction?</p>
          <a href="/resume.pdf" download>
            <Button variant="outline" className="border-white/10 text-white/60 hover:bg-white/5 hover:text-white bg-transparent gap-2 h-11 px-6 text-base font-medium">
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
