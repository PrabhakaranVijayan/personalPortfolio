import React from 'react'
import { ExternalLink } from 'lucide-react';
import Netflix from './case_study/Netflix';
import { useNavigate } from 'react-router-dom';


const Case_studies = () => {
  const navigate= useNavigate()
    const casestudy = [
        {
          title: "Design Netflix for Kids",
          description: "A specialized streaming platform designed specifically for children, combining entertainment with education.The goal is to create a safe, engaging, and fun environment for kids while providing peace of mind to parents.",
          tags: ["product improvement","Market Research","Product launching Strategy"],
          image: "https://plus.unsplash.com/premium_photo-1723514430410-cfbbe9e9e658?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2lkcyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
          study:"/netflix-casestudy"
        },
        {
          title: "Social Network for Students",
          description: "A platform tailored to the needs of students, fostering collaboration, networking, and knowledge sharing.Dedicated channels for mentorship, career guidance, and exam preparation.",
          tags: ["product Design", "Problem solving"],
          image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0dWRlbnRzJTIwc29jaWFsJTIwbmV0d29ya3xlbnwwfHwwfHx8Mg%3D%3D",
          study:"/socialmedia/students"
        },
        {
          title: "RCA of Apple TITAN",
          description: "Despite significant investment, Apple’s Project TITAN faced delays, leadership changes, and a lack of clear direction, leading to missed milestones in its development of autonomous vehicles.",
          tags: ["Root Cause Analysis"],
          image: "https://images.unsplash.com/photo-1514924356010-4be7d201d78b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QVBQTEUlMjBDQVJ8ZW58MHx8MHx8fDI%3D",
          study:"/rca/apple"
        }
      ];
  return (
    <section id="casestudies" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Case Studies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casestudy.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-5 w-5 text-blue-600 cursor-pointer" onClick={()=>{
                    return (
                      
                      navigate(project.study)

                    )
                    } }/>
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
  )
}

export default Case_studies