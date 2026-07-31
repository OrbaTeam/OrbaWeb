import { useState } from 'react'
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = 'contact@orbalabs.xyz'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative z-10 bg-slate-50/70 border-t border-slate-200/60 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Contact Us
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch
          </h3>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-[1.7]">
            We welcome conversations with developers, technology partners, organizations, and anyone interested in collaborating with ORBA Labs.
          </p>

          {/* Simple Direct Contact Card */}
          <div className="mt-10 p-8 sm:p-12 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 border border-blue-100">
              <Mail className="w-7 h-7" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Official Email
            </div>
            
            <a
              href={`mailto:${email}`}
              className="text-2xl sm:text-3xl font-bold text-slate-900 hover:text-blue-600 transition-colors inline-block mb-6 font-mono"
            >
              {email}
            </a>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <a
                href={`mailto:${email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-2xs"
              >
                Send Email
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
