import { Building2, Compass, Target, Globe } from 'lucide-react'

export default function AboutSection() {
  const items = [
    {
      icon: Building2,
      title: 'Who We Are',
      description:
        'ORBA Labs is a technology company focused on building dependable software foundations and intuitive developer tools.',
    },
    {
      icon: Compass,
      title: 'Why ORBA Labs Exists',
      description:
        'Modern software ecosystems benefit from clean, well-architected infrastructure that simplifies development and scales smoothly.',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To build straightforward, robust developer tools and software platforms that engineering teams can trust implicitly.',
    },
    {
      icon: Globe,
      title: 'Our Long-Term Vision',
      description:
        'To contribute sustainable technological foundations that power modern digital software across diverse organizations.',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 relative z-10 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            About ORBA Labs
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Building Solid Software Foundations
          </h3>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-[1.7]">
            Focused on thoughtful engineering, modular design, and consistent performance.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-200/80 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-[1.7] text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
