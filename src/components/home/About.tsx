
import React from 'react';
import { FadeIn } from '@/utils/animations';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent z-10"></div>
              <div className="bg-gray-200 w-full h-full">
                {/* Placeholder for about image */}
                <div className="flex items-center justify-center h-full text-gray-400">
                  About Image
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="order-1 lg:order-2 space-y-6">
            <FadeIn direction="left" delay={0.1}>
              <span className="inline-block py-1 px-3 bg-imperial-100 text-imperial-800 rounded-full text-sm font-medium mb-2">
                About Imperium
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We're a team of <span className="text-imperial-600">passionate innovators</span>
              </h2>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <p className="text-gray-600">
                Founded with a vision to transform how businesses leverage technology, Imperium is a forward-thinking technology company dedicated to delivering innovative solutions that drive growth and digital transformation.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <p className="text-gray-600">
                Our team combines deep technical expertise with business acumen to create solutions that not only solve problems but create new opportunities for our clients. We believe in technology as an enabler of business success.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.4} className="pt-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-imperial-600">50+</p>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-imperial-600">20+</p>
                  <p className="text-sm text-gray-600">Team Members</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-imperial-600">10+</p>
                  <p className="text-sm text-gray-600">Industries Served</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-imperial-600">5+</p>
                  <p className="text-sm text-gray-600">Years of Excellence</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.5} className="pt-4">
              <Button asChild className="bg-imperial-600 hover:bg-imperial-700 text-white">
                <Link to="/about" className="flex items-center">
                  Learn More About Us <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
