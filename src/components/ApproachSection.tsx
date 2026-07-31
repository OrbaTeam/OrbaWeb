export default function ApproachSection() {
  const approaches = [
    {
      title: 'Simplicity',
      subtitle: 'Clear & Focused',
      description:
        'Stripping away unnecessary complexity to build clean, ergonomic software that is straightforward to integrate and maintain.',
    },
    {
      title: 'Reliability',
      subtitle: 'Dependable Systems',
      description:
        'Designing software with strong fault tolerance, predictable execution, and consistent performance across environments.',
    },
    {
      title: 'Long-Term Thinking',
      subtitle: 'Sustainable Architecture',
      description:
        'Prioritizing maintainable codebase structures and thoughtful engineering over quick short-term workarounds.',
    },
  ]

  return (
    <section id="approach" className="py-20 md:py-28 relative z-10 bg-slate-50/50 border-y border-slate-200/60 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Our Approach
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Build Software
          </h3>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-[1.7]">
            A disciplined engineering mindset centered on clarity, dependability, and lasting value.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {approaches.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-200/80 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-3">
                  {item.subtitle}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-[1.7] text-sm sm:text-base">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[10px] font-mono text-slate-300 tracking-wider">
                PILLAR 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
