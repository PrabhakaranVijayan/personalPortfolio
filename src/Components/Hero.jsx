import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div className="md:w-1/2 mb-8 md:mb-0" initial={{ scale: 0 }} animate={{ scale: 1,transition:3}}>
          
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Product Manager & <span className="text-blue-600">Analyst</span>
            </h1>
            <p className="text-base text-gray-600 mb-8">
              {/* Transforming data into actionable insights and building products that users love. */}
              Creating user-centric products and driving business value through data-driven decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get in Touch
              </a>
              <div className="flex space-x-4 items-center">
                <a href="https://github.com/PrabhakaranVijayan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/PrabhakaranV" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:prabhakarvijayan24@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Product Management"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;