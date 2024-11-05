import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, image, tags }: {
  title: string;
  description: string;
  image: string;
  tags: string[];
}) => (
  <div className="bg-slate-800/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Network Security Audit',
      description: 'Conducted comprehensive security assessment for a medium-sized enterprise network.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      tags: ['Security', 'Audit', 'Network Analysis']
    },
    {
      title: 'VPN Infrastructure',
      description: 'Designed and implemented secure VPN solution for remote workforce.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      tags: ['VPN', 'Network Security', 'Infrastructure']
    },
    {
      title: 'Monitoring System',
      description: 'Deployed Nagios monitoring system for critical infrastructure components.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['Monitoring', 'Nagios', 'DevOps']
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-slate-400">Showcasing my expertise in network infrastructure and security</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;