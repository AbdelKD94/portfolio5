import React from 'react';
import { Shield, Server, Network, Book, Mail, Github, Linkedin, ChevronDown, ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <footer className="bg-slate-900/50 py-6 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Abdelhafid. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;