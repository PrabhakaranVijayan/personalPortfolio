import React from 'react';
import { Menu, X, Briefcase,Target } from 'lucide-react';
import { useState } from 'react';
import prabhakaran from '../assets/Screenshot1.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate= useNavigate()
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            
            <span className=""><img src={prabhakaran} className='w-40 h-15' /></span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#casestudies" className="text-gray-600 hover:text-blue-600 transition-colors">Case Studies</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors" >Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="block text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="block text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="block text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;