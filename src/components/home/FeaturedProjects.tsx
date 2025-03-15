
import React from 'react';
import { FadeIn } from '@/utils/animations';
import { Project } from '@/types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A complete e-commerce solution with integrated payment processing and inventory management.',
      image: '/placeholder.svg',
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      description: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
      image: '/placeholder.svg',
      category: 'Mobile Development',
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      description: 'Interactive data visualization dashboard for financial analytics and reporting.',
      image: '/placeholder.svg',
      category: 'UI/UX Design',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-imperial-100 text-imperial-800 rounded-full text-sm font-medium mb-4">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-imperial-600">latest work</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and commitment to delivering exceptional results.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={0.1 * index} className="h-full">
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

        <FadeIn direction="up" className="mt-12 text-center">
          <Link 
            to="/projects"
            className="inline-block py-3 px-6 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
          >
            View All Projects
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedProjects;
