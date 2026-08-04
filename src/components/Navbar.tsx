import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import OrbaLogo from './OrbaLogo'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'What We Build', href: '#what-we-build' },
    { name: 'Vision', href: '#vision' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-2xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official ORBA Labs Logo with Optically Aligned LABS Badge */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
          >
            <div className="w-8 h-8 rounded-full border border-slate-200/80 shadow-2xs overflow-hidden transition-transform duration-200 group-hover:scale-105 flex items-center justify-center bg-white">
              <OrbaLogo className="w-8 h-8" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
                ORBA
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 translate-y-[1px]">
                LABS
              </span>
            </div>
          </a>

          {/* Minimal Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => scrollToSection(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button: Only "Get App" */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={e => scrollToSection(e, '#get-app')}
              className="inline-flex items-center justify-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-4.5 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-2xs focus:outline-none focus:ring-2 focus:ring-blue-600/30"
            >
              Get App
            </button>
          </div>

          {/* Mobile Right Controls: "Get App" Button + Hamburger Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile "Get App" Action Button */}
            <button
              type="button"
              onClick={e => scrollToSection(e, '#get-app')}
              className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs transition-colors shadow-2xs"
            >
              Get App
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Popup */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-5 pt-4 pb-7 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => scrollToSection(e, link.href)}
                className="block text-base font-semibold text-slate-900 hover:text-blue-600 hover:bg-slate-50 px-3.5 py-2.5 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={e => scrollToSection(e, '#get-app')}
              className="flex items-center justify-center w-full text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 py-3 rounded-xl shadow-xs active:bg-blue-800 transition-colors"
            >
              Get App
            </button>
          </div>

          {/* Official Black Social Media Icons Row with User Handles */}
          <div className="pt-4 border-t border-slate-100">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 text-center mb-3">
              Connect With Us
            </div>
            <div className="flex items-center justify-center gap-6">
              {/* X (Twitter) Icon */}
              <a
                href="https://x.com/OrbaLab"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-colors text-black flex items-center justify-center"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href="https://facebook.com/OrbaLabs"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-colors text-black flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Telegram Icon */}
              <a
                href="https://t.me/OrbaLabs"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-colors text-black flex items-center justify-center"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.771-.168.712-.435.952-.69 1.01-.55.127-.968-.225-1.502-.575-.836-.547-1.307-.887-2.119-1.421-.938-.618-.33-.958.204-1.512.14-.145 2.568-2.355 2.616-2.557.006-.025.011-.122-.047-.173-.058-.051-.144-.034-.206-.02-.088.02-1.492.948-4.212 2.784-.398.273-.759.408-1.082.4-.356-.008-1.041-.202-1.551-.368-.625-.203-1.121-.311-1.078-.656.022-.18.272-.364.751-.553 2.935-1.278 4.893-2.122 5.875-2.532 2.798-1.166 3.382-1.369 3.762-1.376.084-.001.27.021.39.119.101.083.13.195.143.275.013.08.028.261.016.405z" />
                </svg>
              </a>

              {/* YouTube Icon */}
              <a
                href="https://youtube.com/@OrbaLabs"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-colors text-black flex items-center justify-center"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com/orba_labs"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-colors text-black flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
