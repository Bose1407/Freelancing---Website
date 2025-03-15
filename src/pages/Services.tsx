
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
      description: 'We create responsive, user-friendly websites and web applications tailored to your business needs, from corporate websites to complex web applications.',
      icon: '🖥️',
    },
    {
      id: 2,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android devices, helping you engage with your audience wherever they are.',
      icon: '📱',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design approaches that enhance usability and create delightful user experiences, backed by research and best practices in human-computer interaction.',
      icon: '🎨',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that drive traffic, generate leads, and increase conversions, leveraging SEO, content marketing, social media, and paid advertising.',
      icon: '📈',
    },
    {
      id: 5,
      title: 'Cloud Solutions',
      description: 'Scalable, secure cloud infrastructure and migration services that enable business agility, reduce costs, and ensure reliability for your critical applications and data.',
      icon: '☁️',
    },
    {
      id: 6,
      title: 'E-Commerce Solutions',
      description: 'End-to-end e-commerce platforms that help you sell products and services online, with integrated payment processing, inventory management, and customer relationship tools.',
      icon: '🛒',
    },
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-imperial-100 text-imperial-800 rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We <span className="text-imperial-600">Work</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures we deliver high-quality solutions that meet your business needs and exceed your expectations.
            </p>
          </FadeIn>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-imperial-100 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {[
                {
                  title: 'Discovery',
                  description: 'We begin by understanding your business, goals, and challenges through in-depth discussions and research.',
                },
                {
                  title: 'Strategy',
                  description: 'Based on our findings, we develop a tailored strategy that outlines the approach, timeline, and deliverables.',
                },
                {
                  title: 'Design',
                  description: 'Our design team creates wireframes and visual designs that align with your brand and meet user needs.',
                },
                {
                  title: 'Development',
                  description: 'Our engineers build your solution using modern technologies and following best practices for quality and security.',
                },
                {
                  title: 'Testing',
                  description: 'We rigorously test all aspects of your solution to ensure it functions flawlessly across all platforms and devices.',
                },
                {
                  title: 'Launch',
                  description: 'We help you successfully deploy your solution and provide training and support to ensure a smooth transition.',
                },
                {
                  title: 'Ongoing Support',
                  description: 'Our relationship continues after launch with maintenance, updates, and strategic guidance for future enhancements.',
                },
              ].map((step, index) => (
                <FadeIn key={index} direction={index % 2 === 0 ? 'right' : 'left'}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="bg-white p-6 rounded-xl shadow-sm max-w-md hover:shadow-md transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-imperial-600 text-white font-bold text-sm flex-shrink-0">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold ml-4 text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

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
