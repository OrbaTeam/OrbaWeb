import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Award, ArrowRight, CheckCircle, Sparkles, Terminal, Code2 } from 'lucide-react'

interface Props {
  onOpenModal: (title?: string) => void
}

export default function CommunitySection({ onOpenModal }: Props) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
  }

  const channels = [
    {
      icon: Code2,
      title: 'GitHub Open RFCs',
      description: 'Review technical proposals, inspect prototype benchmarks, and contribute to core architecture RFCs.',
      action: 'Browse Repositories',
      href: 'https://github.com',
    },
    {
      icon: MessageSquare,
      title: 'Discord Dev Council',
      description: 'Engage directly with ORBA core engineers, discuss microkernel designs, and join early alpha channels.',
      action: 'Join Dev Council',
      href: 'https://discord.com',
    },
    {
      icon: Terminal,
      title: 'Global Dev Summit',
      description: 'Annual technical conference bringing together distributed systems architects and edge infrastructure teams.',
      action: 'View Schedule',
      href: '#',
    },
    {
      icon: Award,
      title: 'Developer Grants',
      description: '$5M funding initiative dedicated to teams building zero-cold-start edge primitives on ORBA Labs.',
      action: 'Apply for Grant',
      href: '#',
    },
  ]

  return (
    <section id="community" className="relative py-24 md:py-32 overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GLOBAL DEVELOPER NETWORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Engineered Alongside World-Class Builders
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Infrastructure should be transparent and open. Join our active developer community helping shape the future of edge-native execution protocols.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {channels.map((ch, idx) => {
            const Icon = ch.icon
            return (
              <motion.div
                key={ch.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{ch.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {ch.description}
                  </p>
                </div>

                <a
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  onClick={(e) => {
                    if (ch.href === '#') {
                      e.preventDefault()
                      onOpenModal(ch.title)
                    }
                  }}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group"
                >
                  <span>{ch.action}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Developer Newsletter / Early Access Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden bg-gradient-to-br from-[#0c1322] via-[#090e1a] to-[#0c1322]">
          {/* Ambient Glow element */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Get Priority Developer Access
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8">
              Receive private RFC invitations, benchmark release notes, and early access toolchains directly in your inbox.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  required
                  placeholder="enter.your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-1 px-5 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-all shrink-0 flex items-center justify-center gap-2"
                >
                  Join Developer Alpha
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-cyan-400 font-mono text-sm py-2">
                <CheckCircle className="w-5 h-5" />
                <span>Verification email sent to {email}. Welcome aboard!</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
