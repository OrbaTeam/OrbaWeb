export default function Hero() {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Single Headline & Subtitle */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.14]">
            Engineering Software <br className="hidden sm:inline" />
            <span className="text-blue-600">for the Future.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 font-normal leading-[1.75] max-w-2xl mx-auto">
            ORBA Labs builds dependable software, developer tools, and modern technology solutions with a focus on simplicity, scalability, and long-term engineering.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('#what-we-build')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-xs hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600/30"
            >
              Learn More
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-2xs hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400/20"
            >
              Get in Touch
            </button>
          </div>

          {/* Clean Chip Badges without blue dots */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <div className="px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700">
              Developer Tools
            </div>

            <div className="px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700">
              Cloud Solutions
            </div>

            <div className="px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700">
              Software Platforms
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
