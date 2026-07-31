import { useState } from 'react'
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
          
          {/* Perfectly Aligned Logo */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full border border-slate-200 overflow-hidden shadow-2xs flex items-center justify-center bg-white">
              <OrbaLogo className="w-7 h-7" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold text-slate-900">ORBA</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 translate-y-[1px]">
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
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-blue-600 transition-colors cursor-pointer"
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
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-xs font-semibold cursor-pointer"
            title="Scroll to top"
          >
            Back to Top
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
