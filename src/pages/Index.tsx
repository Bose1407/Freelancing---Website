
import React from 'react';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ContactForm from '@/components/ui/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen transition-opacity duration-500">
      <Hero />
      <Services />
      <FeaturedProjects />
      
      {/* CTA Section */}
      <section className="py-20 bg-imperial-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to start your project?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Get in touch with our team to discuss how we can help bring your vision to life.
          </p>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
