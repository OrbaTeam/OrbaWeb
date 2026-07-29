import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import OrbaLogo from './OrbaLogo'
import LegalModal from './LegalModal'

export default function Footer() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 bg-white border-t border-slate-200 py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full border border-slate-200 overflow-hidden shadow-2xs flex items-center justify-center bg-white">
              <OrbaLogo className="w-7 h-7" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-slate-900">ORBA</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                LABS
              </span>
            </div>
          </div>

          {/* Simplified Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600">
            <a href="#what-we-build" className="hover:text-blue-600 transition-colors">What We Build</a>
            <a href="#vision" className="hover:text-blue-600 transition-colors">Vision</a>
            <a href="#roadmap" className="hover:text-blue-600 transition-colors">Roadmap</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-blue-600 transition-colors"
            >
              Terms
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-1 text-center sm:text-left">
            <div>&copy; {currentYear} ORBA Labs. All rights reserved.</div>
            <div className="text-[11px] text-slate-400">
              Designed with simplicity, engineered for the future.
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors flex items-center gap-1 text-xs"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>

      </div>

      {/* Legal Modal */}
      <LegalModal
        isOpen={Boolean(legalModal)}
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </footer>
  )
}
