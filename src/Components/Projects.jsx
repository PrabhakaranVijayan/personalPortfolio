import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Data Analytics and Visualtization",
      description: "Analyzed seven datasets to uncover content trends for a simulated social media client at Accenture, delivering actionable insights through a polished PowerPoint deck and video presentation.",
      tags: ["Data analysis", "Data modelling","Data Visulatization","Excel"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Product Management",
      description: "Completed Electronic Arts Product Management Simulation on Forage, analyzing KPIs to address strategy RPG mobile game challenges and creating a data-driven presentation.",
      tags: ["Performance metrics", "Problem solving"],
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
    // {
    //   title: "Market Research Initiative",
    //   description: "Conducted comprehensive market analysis leading to successful product launch in new market segment.",
    //   tags: ["Market Research", "Competitive Analysis", "Strategy"],
    //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    // }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-5 w-5 text-blue-600 cursor-pointer" />
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;