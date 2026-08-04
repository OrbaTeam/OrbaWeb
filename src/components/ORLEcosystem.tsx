import { motion } from 'framer-motion'
import { Cpu, Network, ShieldCheck, Zap } from 'lucide-react'

export default function ORLEcosystem() {
  const utilities = [
    {
      icon: Zap,
      title: 'Ecosystem Transaction Power',
      description:
        'ORL powers all transaction execution, micro-metering, and state verification requests across the ORBA Labs infrastructure ecosystem.',
    },
    {
      icon: Cpu,
      title: 'Node Compute Verification',
      description:
        'Provides cryptographic proof validation for hardware compute resources allocated by global edge nodes.',
    },
    {
      icon: Network,
      title: 'Dynamic Resource Routing',
      description:
        'Facilitates bandwidth allocation and workload prioritization across edge enclaves worldwide.',
    },
    {
      icon: ShieldCheck,
      title: 'Protocol Governance',
      description:
        'Enables technical steering committee members and verified infrastructure partners to participate in platform RFC voting.',
    },
  ]

  return (
    <section id="orl" className="relative py-24 md:py-32 border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase mb-3 block">
            ORL UTILITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ecosystem Utility Layer
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            ORL is designed purely as an infrastructure utility token that powers transactions, resource routing, and state verification across the entire ORBA ecosystem.
          </p>
        </div>

        {/* Utility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {utilities.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-7 border border-slate-800"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
