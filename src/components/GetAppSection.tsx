export default function GetAppSection() {
  return (
    <section id="get-app" className="py-20 md:py-28 relative z-10 bg-slate-50/70 border-y border-slate-200/60 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Badge (No Blue Dot) */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 shadow-2xs">
            Official Android App Available
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Start Mining with <br className="hidden sm:inline" />
            <span className="text-blue-600">ORBA Mining App</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-[1.75] max-w-3xl mx-auto">
            Join the ORBA ecosystem and start mining with our official Android application. Complete daily check-ins, earn mining rewards, and become an early member of the ORBA community. Download the official APK today. Google Play and App Store versions are coming soon.
          </p>

          {/* Three Modern Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {/* Primary Direct Download APK Link for OrbaLabs.apk */}
            <a
              href="/OrbaLabs.apk"
              download="OrbaLabs.apk"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-xs hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600/30"
            >
              Download APK
            </a>

            {/* Google Play Disabled Button */}
            <div
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-200/80 border border-slate-300/80 text-slate-500 font-semibold text-sm cursor-not-allowed select-none"
              title="Google Play release coming soon"
            >
              Google Play – Coming Soon
            </div>

            {/* App Store Disabled Button */}
            <div
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-200/80 border border-slate-300/80 text-slate-500 font-semibold text-sm cursor-not-allowed select-none"
              title="App Store release coming soon"
            >
              App Store – Coming Soon
            </div>
          </div>
        </div>

        {/* Minimal Clean App Details Card */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">ORBA Mining App v1.0</h3>
                <p className="text-xs text-slate-500 mt-0.5">Official Mobile Client for Android</p>
              </div>

              <div>
                <a
                  href="/OrbaLabs.apk"
                  download="OrbaLabs.apk"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-200 transition-colors"
                >
                  Direct Download (OrbaLabs.apk)
                </a>
              </div>
            </div>

            {/* Clean 3 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-sm font-bold text-slate-900">Daily Mining Session</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1.5">One-tap daily check-in to accumulate rewards</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-sm font-bold text-slate-900">Early Member Perks</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1.5">Boosted mining rate for early community adopters</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-sm font-bold text-slate-900">Secure Architecture</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1.5">Lightweight background execution & zero battery drain</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
