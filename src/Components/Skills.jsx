import React from 'react';

const Skills = () => {
  const skills = {
    'Product Management': ['Product Strategy', 'Roadmap Planning', 'User Stories', 'Agile/Scrum'],
    'Analytics': ['Data Analysis', 'SQL', 'Google Analytics'],
    'Tools': ['Figma', 'PowerBI',"Excel"],
    'Tech-stack': ['MongoDB','Express js','React js','Node js']
  };

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{category}</h3>
              <ul className="space-y-2">
                {skillList.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;