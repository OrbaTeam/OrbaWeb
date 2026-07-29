import { Download, ShieldCheck, CheckCircle2, Smartphone, Zap, Award } from 'lucide-react'

export default function MiningAppHero() {
  const handleDownloadApk = () => {
    const link = document.createElement('a')
    link.href = '#download-apk'
    link.setAttribute('download', 'ORBA-Mining-App-v1.0.apk')
    document.body.appendChild(link)
    alert('ORBA Mining App APK download initialized. Please verify you are downloading from the official ORBA Labs website.')
    document.body.removeChild(link)
  }

  return (
    <section id="mining-app" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Official Android App Available</span>
          </div>
        </div>

        {/* Hero Heading & Subtitle */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Start Mining with <br className="hidden sm:inline" />
            <span className="text-blue-600">ORBA Mining App</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 font-normal leading-[1.75] max-w-3xl mx-auto">
            Join the ORBA ecosystem and start mining with our official Android application. Complete daily check-ins, earn mining rewards, and become an early member of the ORBA community. Download the official APK today. Google Play and App Store versions are coming soon.
          </p>

          {/* Three Modern Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {/* Primary Download APK Button */}
            <button
              type="button"
              onClick={handleDownloadApk}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-xs hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600/30"
            >
              <Download className="w-5 h-5" />
              <span>Download APK</span>
            </button>

            {/* Google Play Disabled Button */}
            <div
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-100/90 border border-slate-200/80 text-slate-500 font-semibold text-sm cursor-not-allowed select-none"
              title="Google Play release coming soon"
            >
              <svg className="w-4 h-4 fill-current opacity-70" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.59 1.59 0 0 1-.39-.993V2.807c0-.368.14-.725.389-.993zm11.602 11.602l2.368 2.368-12.756 7.365 10.388-9.733zm0-2.832L4.823.85l12.756 7.365-2.368 2.368zm1.414 1.414l3.858 2.228a1.59 1.59 0 0 1 0 2.748l-3.858 2.228-2.584-2.584 2.584-2.584z"/>
              </svg>
              <span>Google Play – Coming Soon</span>
            </div>

            {/* App Store Disabled Button */}
            <div
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-100/90 border border-slate-200/80 text-slate-500 font-semibold text-sm cursor-not-allowed select-none"
              title="App Store release coming soon"
            >
              <svg className="w-4 h-4 fill-current opacity-70" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.64-.78 1.08-1.85.96-2.93-.93.04-2.07.62-2.74 1.4-.6.69-1.12 1.79-.98 2.86 1.05.08 2.12-.55 2.76-1.33z"/>
              </svg>
              <span>App Store – Coming Soon</span>
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50/80 border border-emerald-200/80 text-emerald-800 text-xs font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Download the application only from the official ORBA Labs website.</span>
          </div>
        </div>

        {/* Premium App Preview UI Dashboard Card */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">ORBA Mining App v1.0</h4>
                  <p className="text-xs text-slate-500">Official Mobile Client for Android</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified APK
                </span>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Zap className="w-4 h-4" />
                </div>
                <h5 className="text-sm font-bold text-slate-900">Daily Mining Session</h5>
                <p className="text-xs text-slate-500 mt-1">One-tap daily check-in to accumulate rewards</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h5 className="text-sm font-bold text-slate-900">Early Member Perks</h5>
                <p className="text-xs text-slate-500 mt-1">Boosted mining rate for early community adopters</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h5 className="text-sm font-bold text-slate-900">Secure Architecture</h5>
                <p className="text-xs text-slate-500 mt-1">Lightweight background execution & zero battery drain</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
