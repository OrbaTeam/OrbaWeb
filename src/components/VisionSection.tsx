export default function VisionSection() {
  const pillars = [
    {
      title: 'Innovation',
      description:
        'Solving core technical challenges through clean first-principles engineering and modular software design.',
    },
    {
      title: 'Developers',
      description:
        'Prioritizing intuitive APIs, practical documentation, and minimal setup complexity for engineering teams.',
    },
    {
      title: 'Scalability',
      description:
        'Designing software systems engineered to handle growing application workloads smoothly.',
    },
    {
      title: 'Open Technology',
      description:
        'Embracing open standards and interoperable architectures that integrate seamlessly into existing tech stacks.',
    },
    {
      title: 'Global Impact',
      description:
        'Supporting developers and organizations through thoughtfully engineered software solutions.',
    },
  ]

  return (
    <section id="vision" className="py-20 md:py-28 relative z-10 bg-slate-50/60 border-y border-slate-200/60 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Our Vision
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Technology We Strive to Build
          </h3>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-[1.7]">
            Guided by long-term principles focused on clarity, performance, and practical design.
          </p>
        </div>

        {/* 5 Pillars Grid without icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const isFullOnDesktop = idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
            return (
              <div
                key={idx}
                className={`p-7 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-200/80 hover:-translate-y-0.5 transition-all duration-200 ${isFullOnDesktop}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-slate-600 text-sm leading-[1.7]">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
