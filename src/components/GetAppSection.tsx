import { Download } from 'lucide-react'

export default function GetAppSection() {
  return (
    <section id="get-app" className="py-20 md:py-28 relative z-10 bg-slate-50/70 border-y border-slate-200/60 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Badge */}
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

          {/* Three Modern Store Buttons with Official Icons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {/* Primary Direct Download APK Link with Android Icon */}
            <a
              href="/OrbaLabs.apk"
              download="OrbaLabs.apk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-xs hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600/30"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5516 0 .9997.4482.9997.9993 0 .5511-.4481.9997-.9997.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5516 0 .9997.4482.9997.9993 0 .5511-.4481.9997-.9997.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1523-.5676.416.416 0 00-.5676.1523l-2.0223 3.503C15.59 8.2435 13.8533 7.85 12 7.85s-3.59.3935-5.1367 1.0998L4.841 5.4469a.416.416 0 00-.5676-.1523.416.416 0 00-.1523.5676l1.9973 3.4592C2.688 11.238 0 14.793 0 19.006h24c0-4.213-2.688-7.768-6.1185-9.6846" />
              </svg>
              <span>Download APK</span>
            </a>

            {/* Google Play Disabled Button with Official Google Play Icon */}
            <div
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-200/80 border border-slate-300/80 text-slate-600 font-semibold text-sm cursor-not-allowed select-none"
              title="Google Play release coming soon"
            >
              <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.59 1.59 0 0 1-.39-.993V2.807c0-.368.14-.725.389-.993zm11.602 11.602l2.368 2.368-12.756 7.365 10.388-9.733zm0-2.832L4.823.85l12.756 7.365-2.368 2.368zm1.414 1.414l3.858 2.228a1.59 1.59 0 0 1 0 2.748l-3.858 2.228-2.584-2.584 2.584-2.584z"/>
              </svg>
              <span>Google Play – Coming Soon</span>
            </div>

            {/* App Store Disabled Button with Official Apple Store Icon */}
            <div
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-200/80 border border-slate-300/80 text-slate-600 font-semibold text-sm cursor-not-allowed select-none"
              title="App Store release coming soon"
            >
              <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.64-.78 1.08-1.85.96-2.93-.93.04-2.07.62-2.74 1.4-.6.69-1.12 1.79-.98 2.86 1.05.08 2.12-.55 2.76-1.33z"/>
              </svg>
              <span>App Store – Coming Soon</span>
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
                  <Download className="w-3.5 h-3.5" />
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
