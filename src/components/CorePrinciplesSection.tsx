export default function CorePrinciplesSection() {
  const principles = [
    {
      title: 'Reliability',
      description:
        'Prioritizing predictable performance, fault tolerance, and software stability from day one.',
    },
    {
      title: 'Security',
      description:
        'Designing software with strict security standards, minimal attack surface, and defensive engineering practices.',
    },
    {
      title: 'Scalability',
      description:
        'Engineering software foundations that scale smoothly as user demand and workload complexity grow.',
    },
    {
      title: 'Long-Term Vision',
      description:
        'Committing to sustainable, clean software engineering that outlives fast-moving industry trends.',
    },
  ]

  return (
    <section id="principles" className="py-20 md:py-28 relative z-10 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Core Principles
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Values That Guide Our Technology
          </h3>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-[1.7]">
            Communicating our engineering standards in a clean, transparent, and disciplined manner.
          </p>
        </div>

        {/* 4 Cards Grid without icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-200/80 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-[1.7]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[10px] font-mono text-slate-400 tracking-wider">
                PRINCIPLE 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
