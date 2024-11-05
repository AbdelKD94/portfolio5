import React from 'react';
import { Shield, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="relative inline-block">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200"
              alt="Abdelhafid"
              className="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-lg mb-8"
            />
            <div className="absolute -bottom-2 -right-2 bg-cyan-500 rounded-full p-2">
              <Shield size={20} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cybersecurity
            </span>{' '}
            & Network Expert
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            BTS SIO student specializing in SISR. Passionate about network infrastructure,
            cybersecurity, and building robust systems that keep organizations safe.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:opacity-90 transition-all"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-slate-800 rounded-full font-semibold hover:bg-slate-700 transition-all"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;