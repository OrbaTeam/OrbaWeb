import { useState, useEffect } from 'react'
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
          {/* Official ORBA Labs Logo with Perfectly Aligned LABS Badge */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
          >
            <div className="w-8 h-8 rounded-full border border-slate-200/80 shadow-2xs overflow-hidden transition-transform duration-200 group-hover:scale-105 flex items-center justify-center bg-white">
              <OrbaLogo className="w-8 h-8" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-sans leading-none">
                ORBA
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 leading-none inline-flex items-center">
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
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors font-semibold text-xs"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
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

          {/* Black Social Media Text Links */}
          <div className="pt-4 border-t border-slate-100">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 text-center mb-3">
              Connect With Us
            </div>
            <div className="flex items-center justify-center gap-5 text-xs font-semibold text-black">
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">X</a>
              <span>•</span>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">Facebook</a>
              <span>•</span>
              <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">Telegram</a>
              <span>•</span>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">YouTube</a>
              <span>•</span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
