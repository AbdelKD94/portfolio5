import React from 'react';
import { Book } from 'lucide-react';

const BlogPost = ({ title, excerpt, date, readTime }: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}) => (
  <article className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800 transition-all">
    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
      <time>{date}</time>
      <span>•</span>
      <span>{readTime}</span>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-slate-300">{excerpt}</p>
  </article>
);

const Blog = () => {
  const posts = [
    {
      title: 'Understanding Zero Trust Security',
      excerpt: 'An in-depth look at implementing zero trust architecture in modern networks.',
      date: 'Mar 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'Network Monitoring Best Practices',
      excerpt: 'Essential tools and techniques for effective network monitoring and management.',
      date: 'Mar 10, 2024',
      readTime: '4 min read'
    },
    {
      title: 'Securing Cloud Infrastructure',
      excerpt: 'Key considerations and strategies for maintaining security in cloud environments.',
      date: 'Mar 5, 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Latest Articles</h2>
          <p className="mt-4 text-slate-400">Insights and experiences from my journey in cybersecurity</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;