import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

interface Props {
  onOpenModal: (title?: string) => void
}

export default function ComingSoonSection({ onOpenModal }: Props) {
  return (
    <section id="platform" className="relative py-24 md:py-32 border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-3xl p-8 sm:p-14 border border-slate-800 relative overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#060a14] to-[#0a0f1e]"
        >
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                COMING SOON
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              AI Developer Platform
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Our flagship AI Developer Platform is currently under active development. Designed from the ground up for high-performance edge compute, intelligent workload orchestration, and zero-latency microkernel execution.
            </p>

            {/* Action Button */}
            <button
              onClick={() => onOpenModal('Join AI Developer Platform Waitlist')}
              className="px-8 py-4 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-all duration-200 shadow-xl shadow-white/10 flex items-center gap-2 group"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
