import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Strategic Thinking</h3>
            <p className="text-gray-600">
              Skilled in developing product strategies aligned with business goals and user needs.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
            <p className="text-gray-600">
              Passionate about understanding user behavior and creating solutions that address real needs.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
            <p className="text-gray-600">
              using analytics to make informed product decisions and measure success.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            As a Junior Product Manager with a analytical background, I combine data-driven decision making with user-centered design principles to create impactful product solutions. My experience includes working with cross-functional teams, conducting market research, and using various analytics tools to drive product success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;