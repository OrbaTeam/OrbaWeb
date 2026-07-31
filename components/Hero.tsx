import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Single Headline & Subtitle */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
            Engineering Software <br className="hidden sm:inline" />
            <span className="text-blue-600">for the Future.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-[1.75] max-w-2xl mx-auto">
            ORBA Labs builds dependable software, developer tools, and modern technology solutions with a focus on simplicity, scalability, and long-term engineering.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => scrollToSection('#what-we-build')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-2xs focus:outline-none focus:ring-2 focus:ring-blue-600/30"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-2xs focus:outline-none focus:ring-2 focus:ring-slate-400/20"
            >
              Get in Touch
            </button>
          </div>

          {/* Minimal Small Badges / Chips */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>Developer Tools</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>Cloud Solutions</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>Software Platforms</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
