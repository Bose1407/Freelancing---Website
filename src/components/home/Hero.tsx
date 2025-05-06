import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FadeIn } from '@/utils/animations';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient min-h-[90vh] pt-32 pb-8 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start">
          <div className="space-y-8">
            <FadeIn direction="up" delay={0.1}>
              <span className="inline-block py-1 px-3 bg-imperial-100 text-imperial-800 rounded-full text-sm font-medium">
                Innovate. Transform. Succeed.
              </span>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Empowering Your <span className="text-imperial-600">Digital Transformation</span> Journey
              </h1>
              <p className="text-lg text-gray-700 max-w-lg">
                We create innovative technology solutions that help businesses scale, transform, and succeed in the digital landscape.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="border-imperial-200 text-imperial-700 hover:bg-imperial-50 rounded-lg py-6 px-8 text-base">
                <Link to="/services" className="flex items-center">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-imperial-600/20 to-transparent z-10"></div>
              <div className="bg-gray-200 w-full h-full">
                {/* Placeholder for hero image */}
                <div className="flex items-center justify-center h-full text-gray-400">
                  Hero Image
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-imperial-100 rounded-full filter blur-3xl opacity-70 -z-10"></div>
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-70 -z-10"></div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
