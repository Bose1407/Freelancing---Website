
import React from 'react';
import { FadeIn } from '@/utils/animations';
import { ServiceItem } from '@/types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We create responsive, user-friendly websites and web applications tailored to your business needs.',
      icon: '🖥️',
    },
    {
      id: 2,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.',
      icon: '📱',
    },
    {
      id: 3,
      title: 'Ai agents',
      description: 'Autonomous systems that leverage artificial intelligence to perform tasks, make decisions, and interact with users intelligently across various domains.',
      icon: '🤖',
    },
    {
        id: 4,
        title: 'Automation for 1000+ Applications (e.g., Gmail, Excel, etc.)',
        description: 'Seamless integration and automation across popular apps and services to streamline workflows, reduce manual effort, and boost productivity.',
        icon: '⚙️',
      },
      {
  id: 5,
  title: 'Machine Learning and Deep Learning',
  description: 'Machine Learning and Deep Learning techniques that enable systems to learn from data, recognize patterns, and make intelligent decisions with minimal human intervention.',
  icon: '🧠',
},{
  id: 6,
  title: 'Web3 Application on Ethereum',
  description: 'Decentralized applications (dApps) built on the Ethereum blockchain, enabling secure, transparent, and trustless interactions using smart contracts.',
  icon: '⛓️',
}


,
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-imperial-100 text-imperial-800 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solutions that drive <span className="text-imperial-600">growth</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive technology services designed to help your business innovate, transform, and succeed in the digital landscape.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.id} direction="up" delay={0.1 * index} className="h-full">
              <div className="group bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="mb-4 text-3xl">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Link 
                  to={`/services`} 
                  className="inline-flex items-center text-imperial-600 font-medium group-hover:text-imperial-700 transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" className="mt-12 text-center">
          <Link 
            to="/services"
            className="inline-block py-3 px-6 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
          >
            View All Services
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
