export default function WhatWeBuildSection() {
  const focusAreas = [
    {
      title: 'Developer Tools',
      description:
        'Intuitive libraries, CLI utilities, and developer primitives designed to simplify building modern software applications.',
    },
    {
      title: 'Cloud Solutions',
      description:
        'Modular backend architecture and cloud software services focused on practical performance and ease of deployment.',
    },
    {
      title: 'Modern Software Platforms',
      description:
        'Flexible software foundations providing clean abstractions, unified APIs, and seamless system integration.',
    },
    {
      title: 'Research & Innovation',
      description:
        'Technical exploration into low-latency algorithms, software optimization, and efficient data handling.',
    },
  ]

  return (
    <section id="what-we-build" className="py-20 md:py-28 relative z-10 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            What We Build
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Key Focus Areas
          </h3>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-[1.7]">
            Designing core software solutions with clarity, precision, and engineering discipline.
          </p>
        </div>

        {/* 4 Cards Grid without icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {focusAreas.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-200/80 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>

              <p className="text-slate-600 leading-[1.7] text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
