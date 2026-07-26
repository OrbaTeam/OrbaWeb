import { X } from 'lucide-react'

interface LegalModalProps {
  isOpen: boolean
  type: 'privacy' | 'terms' | null
  onClose: () => void
}

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  if (!isOpen || !type) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <h3 className="text-xl font-bold text-slate-900">
            {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-slate-600 text-sm leading-[1.7]">
            <p>
              <strong>Effective Date:</strong> July 2026
            </p>
            <p>
              At ORBA Labs, we take data privacy and user trust seriously. This Privacy Policy outlines how we handle information collected through our website.
            </p>
            <h4 className="font-bold text-slate-900 text-base pt-2">1. Information Collection</h4>
            <p>
              We only collect information directly submitted by you when contacting us via email or using our contact form (such as your name and email address). We do not track personal identifying data without consent.
            </p>
            <h4 className="font-bold text-slate-900 text-base pt-2">2. Use of Information</h4>
            <p>
              Submitted contact details are strictly used to respond to your inquiries and facilitate potential business or developer collaborations with ORBA Labs. We do not sell or share your data with third parties.
            </p>
            <h4 className="font-bold text-slate-900 text-base pt-2">3. Contact Us</h4>
            <p>
              If you have any questions regarding privacy, please contact us at{' '}
              <a href="mailto:contact@orbalabs.io" className="text-blue-600 font-semibold underline">
                contact@orbalabs.io
              </a>.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-slate-600 text-sm leading-[1.7]">
            <p>
              <strong>Effective Date:</strong> July 2026
            </p>
            <p>
              Welcome to ORBA Labs. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service.
            </p>
            <h4 className="font-bold text-slate-900 text-base pt-2">1. Intellectual Property</h4>
            <p>
              All materials, design elements, and content on this website are the property of ORBA Labs and protected by applicable copyright laws.
            </p>
            <h4 className="font-bold text-slate-900 text-base pt-2">2. Use License</h4>
            <p>
              This website is provided for informational purposes regarding ORBA Labs software solutions, developer tools, and technology research.
            </p>
            <h4 className="font-bold text-slate-900 text-base pt-2">3. Inquiries</h4>
            <p>
              For inquiries regarding software licenses or partnerships, reach out directly to{' '}
              <a href="mailto:contact@orbalabs.io" className="text-blue-600 font-semibold underline">
                contact@orbalabs.io
              </a>.
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
