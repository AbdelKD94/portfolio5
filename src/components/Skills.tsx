import React from 'react';
import { Server, Shield, Network, Database, Cloud, Terminal } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
  <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800 transition-all">
    <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-slate-300 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillsets = [
    {
      icon: Network,
      title: 'Networking',
      skills: ['LAN/WAN Design', 'VPN Configuration', 'Network Monitoring', 'Router & Switch Management']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      skills: ['Penetration Testing', 'Security Auditing', 'Incident Response', 'Firewall Configuration']
    },
    {
      icon: Server,
      title: 'Infrastructure',
      skills: ['Windows Server', 'Linux Administration', 'Active Directory', 'System Hardening']
    },
    {
      icon: Cloud,
      title: 'Cloud & Virtualization',
      skills: ['VMware', 'Docker', 'AWS', 'Azure Services']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Technical Expertise</h2>
          <p className="mt-4 text-slate-400">Comprehensive skill set in network infrastructure and security</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsets.map((skillset, index) => (
            <SkillCard key={index} {...skillset} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;