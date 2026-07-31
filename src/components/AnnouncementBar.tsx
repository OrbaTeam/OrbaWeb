import { useState } from 'react'
import { Download, ShieldCheck, X } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const handleDownloadApk = () => {
    // Triggers direct APK download or opens direct link
    const link = document.createElement('a')
    link.href = '#download-apk'
    link.setAttribute('download', 'ORBA-Mining-App-v1.0.apk')
    document.body.appendChild(link)
    // Create an alert or fallback notification
    alert('ORBA Mining App APK download initialized. Please verify you are downloading from the official ORBA Labs website.')
    document.body.removeChild(link)
  }

  return (
    <div className="relative z-50 bg-slate-900 border-b border-slate-800/80 text-white text-xs sm:text-sm py-2.5 px-4 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-3">
        
        {/* Left Section: Main Announcement & Security Note */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-semibold text-xs shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            New Release
          </div>
          
          <div>
            <span className="font-medium text-slate-200">
              ORBA Mining App is now available for Android. Start mining today by downloading the official APK.
            </span>
            <div className="flex items-center justify-center sm:justify-start gap-1 text-[11px] text-slate-400 mt-0.5 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Download the application only from the official ORBA Labs website.</span>
            </div>
          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Download APK Primary Button */}
          <button
            type="button"
            onClick={handleDownloadApk}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs transition-all duration-200 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </button>

          {/* Google Play Disabled Button */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-400 text-xs cursor-not-allowed select-none"
            title="Google Play release coming soon"
          >
            <svg className="w-3.5 h-3.5 fill-current opacity-60" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.59 1.59 0 0 1-.39-.993V2.807c0-.368.14-.725.389-.993zm11.602 11.602l2.368 2.368-12.756 7.365 10.388-9.733zm0-2.832L4.823.85l12.756 7.365-2.368 2.368zm1.414 1.414l3.858 2.228a1.59 1.59 0 0 1 0 2.748l-3.858 2.228-2.584-2.584 2.584-2.584z"/>
            </svg>
            <span>Google Play</span>
            <span className="text-[9px] font-mono uppercase bg-slate-700/60 px-1.5 py-0.2 rounded text-slate-300">
              Soon
            </span>
          </div>

          {/* App Store Disabled Button */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-400 text-xs cursor-not-allowed select-none"
            title="App Store release coming soon"
          >
            <svg className="w-3.5 h-3.5 fill-current opacity-60" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.64-.78 1.08-1.85.96-2.93-.93.04-2.07.62-2.74 1.4-.6.69-1.12 1.79-.98 2.86 1.05.08 2.12-.55 2.76-1.33z"/>
            </svg>
            <span>App Store</span>
            <span className="text-[9px] font-mono uppercase bg-slate-700/60 px-1.5 py-0.2 rounded text-slate-300">
              Soon
            </span>
          </div>

          {/* Dismiss button */}
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
            aria-label="Close announcement bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  )
}
