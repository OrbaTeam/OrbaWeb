export default function RoadmapSection() {
  const steps = [
    {
      title: 'Foundation',
      description:
        'Establishing the core architecture, engineering standards, and project foundations.',
    },
    {
      title: 'Research',
      description:
        'Benchmarking software primitives, validating core protocols, and prototyping key developer APIs.',
    },
    {
      title: 'Development',
      description:
        'Building production-ready software modules, security hardening, and refining SDK developer tools.',
    },
    {
      title: 'Launch',
      description:
        'Controlled public release, developer documentation onboarding, and strategic partner integrations.',
    },
    {
      title: 'Growth',
      description:
        'Expanding the ecosystem, strengthening partnerships, and continuously improving our technology.',
    },
  ]

  return (
    <section id="roadmap" className="py-20 md:py-28 relative z-10 bg-slate-50/60 border-y border-slate-200/60 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Roadmap
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Development Trajectory
          </h3>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-[1.7]">
            A milestone-driven roadmap focused on building dependable, high-performance technology.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-28 space-y-8 py-2">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                
                {/* Left Step Label (Desktop) */}
                <div className="hidden sm:block absolute -left-28 top-1.5 w-20 text-right">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                {/* Timeline Node Bullet Dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-2xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                </div>

                {/* Content Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h4>
                    <span className="sm:hidden text-[11px] font-mono font-semibold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Stage 0{idx + 1}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-[1.7]">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
