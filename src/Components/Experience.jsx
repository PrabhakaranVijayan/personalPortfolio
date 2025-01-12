export default function Experience() {
    const experiences = [
      {
        title: "Analyst",
        company: "HCL TECH",
        period: "Mar 2022 - Present",
        description: [
          "Led user research initiatives resulting in 30% improvement in user satisfaction",
          "Collaborated with engineering teams to define and prioritize product features",
          "Created and maintained product roadmap using agile methodologies"
        ]
      },
      {
        title: "Field Officer",
        company: "Helisprey Services Private Limited",
        period: "May 2019 - Nov 2021",
        description: [
          "Analyzed user data to identify opportunities for product improvement",
          "Developed comprehensive product requirements documents",
          "Conducted competitive analysis and market research"
        ]
      }
    ];
  
    return (
      <section id="experience" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
            Experience
          </h2>
          <div className="space-y-8 ">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-white"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div className="">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <p className="text-gray-500 text-sm mt-1 sm:mt-0">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }