import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-slate-400">Let's discuss how we can work together</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/50 rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;