
import React, { useState } from 'react';
import { PageTransition, FadeIn } from '@/utils/animations';
import { Project } from '@/types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const allProjects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A complete e-commerce solution with integrated payment processing and inventory management.',
      image: '/placeholder.svg',
      category: 'Web Development',
      link: '#',
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      description: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
      image: '/placeholder.svg',
      category: 'Mobile Development',
      link: '#',
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      description: 'Interactive data visualization dashboard for financial analytics and reporting.',
      image: '/placeholder.svg',
      category: 'UI/UX Design',
      link: '#',
    },
    {
      id: 4,
      title: 'Restaurant Ordering System',
      description: 'Digital ordering system for restaurants with kitchen management and customer loyalty features.',
      image: '/placeholder.svg',
      category: 'Web Development',
      link: '#',
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Property listing and management platform with virtual tours and agent communication tools.',
      image: '/placeholder.svg',
      category: 'Web Development',
      link: '#',
    },
    {
      id: 6,
      title: 'Travel Companion App',
      description: 'Mobile app for travelers with itinerary planning, local recommendations, and travel logging.',
      image: '/placeholder.svg',
      category: 'Mobile Development',
      link: '#',
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-imperial-50">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-3 bg-imperial-100 text-imperial-800 rounded-full text-sm font-medium mb-4">
              Our Projects
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Showcasing our <span className="text-imperial-600">best work</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Explore our portfolio of successful projects across web development, mobile applications, and UI/UX design that demonstrate our expertise and commitment to excellence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <FadeIn direction="up" className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-imperial-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.id} direction="up" delay={0.1 * (index % 3)} className="h-full">
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gray-200 relative">
                      {/* Placeholder for project image */}
                      <div className="flex items-center justify-center h-full text-gray-400">
                        Project Image
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-imperial-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-medium text-imperial-600 mb-2">{project.category}</span>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-imperial-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="inline-flex items-center text-imperial-600 font-medium group-hover:text-imperial-700 transition-colors"
                    >
                      View Project <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to start your own project?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Let's discuss how we can help bring your vision to life with our expertise in web development, mobile applications, and UI/UX design.
            </p>
            <Link 
              to="/contact"
              className="inline-block py-3 px-6 bg-imperial-600 hover:bg-imperial-700 text-white rounded-lg transition-colors font-medium"
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
