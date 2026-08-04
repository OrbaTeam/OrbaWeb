import { useState } from 'react'
import OrbaLogo from './OrbaLogo'
import LegalModal from './LegalModal'

export default function Footer() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'X (Twitter)',
      href: 'https://x.com/OrbaLab',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/OrbaLabs',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/OrbaLabs',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.771-.168.712-.435.952-.69 1.01-.55.127-.968-.225-1.502-.575-.836-.547-1.307-.887-2.119-1.421-.938-.618-.33-.958.204-1.512.14-.145 2.568-2.355 2.616-2.557.006-.025.011-.122-.047-.173-.058-.051-.144-.034-.206-.02-.088.02-1.492.948-4.212 2.784-.398.273-.759.408-1.082.4-.356-.008-1.041-.202-1.551-.368-.625-.203-1.121-.311-1.078-.656.022-.18.272-.364.751-.553 2.935-1.278 4.893-2.122 5.875-2.532 2.798-1.166 3.382-1.369 3.762-1.376.084-.001.27.021.39.119.101.083.13.195.143.275.013.08.028.261.016.405z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@OrbaLabs',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/orba_labs',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ]

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

        {/* Bottom Row with ONLY Social Media Icons (Exact User Handles) & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          
          {/* Copyright & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <div>&copy; {currentYear} ORBA Labs. All rights reserved.</div>
            <div className="text-[11px] text-slate-400">
              Designed with simplicity, engineered for the future.
            </div>
          </div>

          {/* Social Media Icons Only */}
          <div className="flex items-center gap-4 text-slate-700">
            {socialLinks.map(social => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition-colors p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-900"
                title={social.name}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-xs font-semibold cursor-pointer shrink-0"
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
