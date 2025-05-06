
import React from 'react';
import { PageTransition, FadeIn } from '@/utils/animations';
import { ServiceItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
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
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-imperial-50">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-3 bg-imperial-100 text-imperial-800 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-imperial-600">technology solutions</span> for your business
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              We offer a full range of digital services to help your business innovate, transform, and succeed in an increasingly competitive marketplace.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.id} direction="up" delay={0.1 * (index % 3)} className="h-full">
                <div className="group bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to="/contact" className="w-full justify-center">
                      Request a Quote
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      {/*  */}

      {/* CTA Section */}
      <section className="py-20 bg-imperial-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start your project?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10">
              Get in touch with our team to discuss how we can help bring your vision to life with our comprehensive technology solutions.
            </p>
            <Button asChild className="bg-white text-imperial-700 hover:bg-gray-100">
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
