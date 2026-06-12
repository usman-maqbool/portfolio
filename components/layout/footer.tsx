import { Terminal, Code2, ExternalLink, Mail, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white/90">{SITE_CONFIG.name}</p>
              <p className="text-xs text-white/40">{SITE_CONFIG.subtitle}</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              GitHub
              <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              LinkedIn
              <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Email
            </a>
          </div>

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
