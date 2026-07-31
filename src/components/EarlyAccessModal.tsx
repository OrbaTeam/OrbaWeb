import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, ArrowRight, Shield, Zap } from 'lucide-react'

interface Props {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export default function EarlyAccessModal({ isOpen, onClose, title = "Get Early Access to ORBA Labs" }: Props) {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('Infrastructure Engineer')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  const resetAndClose = () => {
    setSubmitted(false)
    setEmail('')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg glass-panel bg-[#0a0f1d]/90 border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Zap className="w-3 h-3 mr-1" /> VIP Alpha Access
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Join our closed developer alpha. Get early SDK access, private edge node benchmarks, and direct architectural support from the ORBA Labs core team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="engineer@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Engineering Role
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    >
                      <option value="Infrastructure Engineer">Infrastructure / DevOps Engineer</option>
                      <option value="Senior Backend Architect">Senior Backend Architect</option>
                      <option value="CTO / VP Engineering">CTO / VP Engineering</option>
                      <option value="Distributed Systems Specialist">Distributed Systems Specialist</option>
                      <option value="Founder / Researcher">Founder / Researcher</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm hover:opacity-95 transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group"
                    >
                      Request Developer Access
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>

                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Strict zero-spam policy. Developer credentials verified manually.</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30 text-cyan-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Access Request Confirmed</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Thank you! We've registered <span className="text-cyan-400 font-mono font-medium">{email}</span> for priority onboarding. Our core engineering team will contact you shortly with your private RFC access key.
                </p>
                <button
                  onClick={resetAndClose}
                  className="py-2.5 px-6 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 text-sm font-medium transition-colors"
                >
                  Return to Site
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
